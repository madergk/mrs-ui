#!/usr/bin/env node

/**
 * Figma Design Token Extractor
 *
 * This script extracts design tokens from a Figma file using the Figma REST API.
 *
 * Usage:
 *   node scripts/extract-figma-tokens.js
 *
 * Environment variables:
 *   FIGMA_ACCESS_TOKEN - Your Figma personal access token
 *   FIGMA_FILE_ID - The Figma file ID (from the URL)
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// Configuration
const FIGMA_ACCESS_TOKEN = process.env.FIGMA_ACCESS_TOKEN || (() => {
  throw new Error('FIGMA_ACCESS_TOKEN environment variable is required. Get your token from https://www.figma.com/developers/api#access-tokens');
})();
const FIGMA_FILE_ID = process.env.FIGMA_FILE_ID || 'c4weC6RhdEd7c8B1GkCjTB';

/**
 * Make a request to the Figma API
 */
function figmaRequest(endpoint) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.figma.com',
      path: endpoint,
      method: 'GET',
      headers: {
        'X-Figma-Token': FIGMA_ACCESS_TOKEN,
      },
    };

    const req = https.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          if (parsed.error || parsed.status === 404) {
            reject(new Error(parsed.message || 'Request failed'));
          } else {
            resolve(parsed);
          }
        } catch (error) {
          reject(error);
        }
      });
    });

    req.on('error', reject);
    req.end();
  });
}

/**
 * Extract color variables from Figma styles
 */
function extractColors(styles) {
  const colors = {};

  for (const [styleId, style] of Object.entries(styles)) {
    if (style.styleType === 'FILL') {
      const name = style.name.toLowerCase().replace(/\s+/g, '-');
      // Get the first fill color
      if (style.fills && style.fills.length > 0) {
        const fill = style.fills[0];
        if (fill.type === 'SOLID') {
          const r = Math.round(fill.color.r * 255);
          const g = Math.round(fill.color.g * 255);
          const b = Math.round(fill.color.b * 255);
          const hex = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
          colors[name] = hex;
        }
      }
    }
  }

  return colors;
}

/**
 * Extract text styles from Figma
 */
function extractTypography(styles) {
  const typography = {};

  for (const [styleId, style] of Object.entries(styles)) {
    if (style.styleType === 'TEXT') {
      const name = style.name.toLowerCase().replace(/\s+/g, '-');
      typography[name] = {
        fontFamily: style.fontFamily,
        fontSize: style.fontSize,
        fontWeight: style.fontWeight,
        lineHeight: style.lineHeightPx,
        letterSpacing: style.letterSpacing,
      };
    }
  }

  return typography;
}

/**
 * Extract local variables (Figma Variables API)
 */
async function extractLocalVariables() {
  try {
    const data = await figmaRequest(`/v1/files/${FIGMA_FILE_ID}/variables/local`);
    return data.meta?.variables || {};
  } catch (error) {
    console.warn('Could not fetch local variables:', error.message);
    return {};
  }
}

/**
 * Main extraction function
 */
async function extractTokens() {
  console.log('🎨 Figma Design Token Extractor\n');
  console.log(`File ID: ${FIGMA_FILE_ID}`);
  console.log('Connecting to Figma API...\n');

  try {
    // Fetch file metadata
    console.log('📥 Fetching file metadata...');
    const fileData = await figmaRequest(`/v1/files/${FIGMA_FILE_ID}`);
    console.log(`✓ File: ${fileData.name}\n`);

    // Extract styles
    console.log('🎨 Extracting styles...');
    const colors = extractColors(fileData.styles || {});
    const typography = extractTypography(fileData.styles || {});
    console.log(`✓ Found ${Object.keys(colors).length} color styles`);
    console.log(`✓ Found ${Object.keys(typography).length} text styles\n`);

    // Extract local variables
    console.log('🔧 Extracting local variables...');
    const variables = await extractLocalVariables();
    console.log(`✓ Found ${Object.keys(variables).length} variables\n`);

    // Build design tokens structure
    const tokens = {
      meta: {
        extractedAt: new Date().toISOString(),
        figmaFileId: FIGMA_FILE_ID,
        figmaFileName: fileData.name,
      },
      tier1: {
        primitives: {
          colors: colors,
          typography: typography,
        },
      },
      tier2: {
        semantic: {
          // To be mapped manually based on design intent
        },
      },
      tier3: {
        components: {
          // To be mapped manually based on component usage
        },
      },
    };

    // Save to file
    const outputPath = path.join(__dirname, '..', 'design-tokens-extracted.json');
    fs.writeFileSync(outputPath, JSON.stringify(tokens, null, 2));

    console.log('✅ Design tokens extracted successfully!');
    console.log(`📝 Saved to: ${outputPath}\n`);
    console.log('Next steps:');
    console.log('1. Review the extracted tokens');
    console.log('2. Map primitives to semantic tokens in tier2');
    console.log('3. Map component-specific tokens in tier3');
    console.log('4. Update src/theme/designTokens.ts with the new values');

    return tokens;
  } catch (error) {
    console.error('❌ Error extracting tokens:', error.message);

    if (error.message.includes('Not found')) {
      console.error('\nPossible issues:');
      console.error('1. File ID might be incorrect');
      console.error('2. Token doesn\'t have access to this file');
      console.error('3. File is in a team workspace that requires additional permissions');
      console.error('\nTroubleshooting:');
      console.error('- Verify the file ID in the Figma URL');
      console.error('- Check token permissions include "File content" read access');
      console.error('- Ensure you have access to the file in Figma');
    }

    process.exit(1);
  }
}

// Run the extractor
if (require.main === module) {
  extractTokens();
}

module.exports = { extractTokens };
