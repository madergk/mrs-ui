#!/usr/bin/env node

/**
 * Comprehensive Figma Design Token Extractor
 *
 * Extracts design tokens from Figma files including:
 * - Text styles (typography)
 * - Effect styles (shadows, elevations)
 * - Fill styles (colors)
 * - Component nodes with design values
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const FIGMA_TOKEN = process.env.FIGMA_TOKEN || (() => {
  throw new Error('FIGMA_TOKEN environment variable is required. Get your token from https://www.figma.com/developers/api#access-tokens');
})();
const FILE_ID = process.env.FIGMA_FILE_ID || 'ESNP5KunFotGObfcuXZ9Op';

function figmaRequest(endpoint) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.figma.com',
      path: endpoint,
      method: 'GET',
      headers: {
        'X-Figma-Token': FIGMA_TOKEN,
      },
    };

    https.get(options, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          if (parsed.error || parsed.status >= 400) {
            reject(new Error(parsed.message || `HTTP ${parsed.status}`));
          } else {
            resolve(parsed);
          }
        } catch (error) {
          reject(error);
        }
      });
    }).on('error', reject);
  });
}

/**
 * Convert RGB (0-1) to hex color
 */
function rgbToHex(r, g, b, a = 1) {
  const toHex = (val) => {
    const hex = Math.round(val * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  const hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  if (a < 1) {
    return `${hex}${toHex(a)}`;
  }
  return hex;
}

/**
 * Extract color from fills
 */
function extractColor(fills) {
  if (!fills || fills.length === 0) return null;
  const fill = fills[0];
  if (fill.type === 'SOLID') {
    const { r, g, b, a = 1 } = fill.color;
    return rgbToHex(r, g, b, a);
  }
  return null;
}

/**
 * Extract shadow from effects
 */
function extractShadow(effects) {
  if (!effects || effects.length === 0) return null;

  const shadows = effects
    .filter(e => e.type === 'DROP_SHADOW' && e.visible !== false)
    .map(e => {
      const { offset, radius, color } = e;
      const { r, g, b, a = 1 } = color;
      const colorHex = rgbToHex(r, g, b, a);
      return {
        offsetX: offset.x,
        offsetY: offset.y,
        blur: radius,
        spread: e.spread || 0,
        color: colorHex,
        css: `${offset.x}px ${offset.y}px ${radius}px ${e.spread || 0}px ${colorHex}`,
      };
    });

  return shadows.length > 0 ? shadows : null;
}

/**
 * Recursively extract nodes with specific properties
 */
function extractNodesRecursive(node, results = { colors: {}, typography: {}, components: {} }) {
  // Extract colors from fills
  if (node.fills && node.fills.length > 0 && node.name && !node.name.startsWith('_')) {
    const color = extractColor(node.fills);
    if (color) {
      const key = node.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      results.colors[key] = color;
    }
  }

  // Extract typography from text nodes
  if (node.type === 'TEXT' && node.style) {
    const { fontFamily, fontWeight, fontSize, lineHeightPx, letterSpacing, textCase } = node.style;
    const key = node.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    results.typography[key] = {
      fontFamily,
      fontWeight,
      fontSize,
      lineHeight: lineHeightPx,
      letterSpacing,
      textCase,
    };
  }

  // Recursively process children
  if (node.children) {
    node.children.forEach(child => extractNodesRecursive(child, results));
  }

  return results;
}

/**
 * Organize styles by category
 */
function organizeStyles(styles) {
  const organized = {
    typography: {},
    elevation: {},
    components: {},
    library: {},
  };

  for (const [id, style] of Object.entries(styles)) {
    const parts = style.name.split('/');
    const category = parts[0].toLowerCase();
    const name = parts.slice(1).join('/') || parts[0];

    if (category.startsWith('*')) {
      // Library/internal styles
      organized.library[name] = { id, ...style };
    } else if (category === 'typography') {
      organized.typography[name] = { id, ...style };
    } else if (category === 'elevation') {
      organized.elevation[name] = { id, ...style };
    } else {
      // Component-specific styles
      if (!organized.components[category]) {
        organized.components[category] = {};
      }
      organized.components[category][name] = { id, ...style };
    }
  }

  return organized;
}

/**
 * Main extraction function
 */
async function extractDesignTokens() {
  console.log('🎨 Figma Design Token Extractor\n');
  console.log(`📁 File ID: ${FILE_ID}`);
  console.log('🔗 Connecting to Figma API...\n');

  try {
    // Fetch main file
    console.log('📥 Fetching file data...');
    const fileData = await figmaRequest(`/v1/files/${FILE_ID}`);
    console.log(`✓ File: ${fileData.name}`);
    console.log(`✓ Version: ${fileData.version}`);
    console.log(`✓ Last Modified: ${fileData.lastModified}\n`);

    // Organize styles
    console.log('🏷️  Organizing styles...');
    const organizedStyles = organizeStyles(fileData.styles || {});
    console.log(`✓ Typography styles: ${Object.keys(organizedStyles.typography).length}`);
    console.log(`✓ Elevation styles: ${Object.keys(organizedStyles.elevation).length}`);
    console.log(`✓ Component styles: ${Object.keys(organizedStyles.components).flatMap(cat => Object.keys(organizedStyles.components[cat])).length}`);
    console.log(`✓ Library styles: ${Object.keys(organizedStyles.library).length}\n`);

    // Extract nodes for additional data
    console.log('🔍 Extracting node data...');
    const nodeData = extractNodesRecursive(fileData.document);
    console.log(`✓ Found ${Object.keys(nodeData.colors).length} color values`);
    console.log(`✓ Found ${Object.keys(nodeData.typography).length} typography instances\n`);

    // Build final design tokens
    const designTokens = {
      $schema: 'https://tr.designtokens.org/format/v1.0.0/',
      meta: {
        extractedAt: new Date().toISOString(),
        figmaFileId: FILE_ID,
        figmaFileName: fileData.name,
        figmaVersion: fileData.version,
        figmaLastModified: fileData.lastModified,
        extractor: 'figma-token-extractor.js',
        extractorVersion: '1.0.0',
      },
      styles: {
        typography: organizedStyles.typography,
        elevation: organizedStyles.elevation,
        components: organizedStyles.components,
        library: organizedStyles.library,
      },
      extracted: {
        colors: nodeData.colors,
        typography: nodeData.typography,
      },
    };

    // Save to files
    const outputDir = path.join(__dirname, '..');

    // Save complete data
    const fullPath = path.join(outputDir, 'figma-design-tokens-full.json');
    fs.writeFileSync(fullPath, JSON.stringify(designTokens, null, 2));
    console.log(`✅ Full export saved: ${fullPath}`);

    // Save organized summary
    const summaryPath = path.join(outputDir, 'figma-design-tokens-summary.json');
    const summary = {
      meta: designTokens.meta,
      statistics: {
        totalStyles: Object.keys(fileData.styles || {}).length,
        typographyStyles: Object.keys(organizedStyles.typography).length,
        elevationStyles: Object.keys(organizedStyles.elevation).length,
        componentStyles: Object.keys(organizedStyles.components).flatMap(cat => Object.keys(organizedStyles.components[cat])).length,
        libraryStyles: Object.keys(organizedStyles.library).length,
        extractedColors: Object.keys(nodeData.colors).length,
        extractedTypography: Object.keys(nodeData.typography).length,
      },
      styleCategories: {
        typography: Object.keys(organizedStyles.typography),
        elevation: Object.keys(organizedStyles.elevation),
        components: Object.keys(organizedStyles.components),
      },
    };
    fs.writeFileSync(summaryPath, JSON.stringify(summary, null, 2));
    console.log(`📊 Summary saved: ${summaryPath}\n`);

    console.log('✨ Extraction complete!\n');
    console.log('📋 Next steps:');
    console.log('1. Review figma-design-tokens-full.json');
    console.log('2. Map styles to design-tokens.json');
    console.log('3. Update src/theme/designTokens.ts');
    console.log('4. Update DESIGN_SYSTEM_RULES.md\n');

    return designTokens;
  } catch (error) {
    console.error('❌ Error:', error.message);

    if (error.message.includes('Not found')) {
      console.error('\n💡 Troubleshooting:');
      console.error('• Verify file ID is correct');
      console.error('• Check token has file_content:read permission');
      console.error('• Ensure you have access to the file in Figma');
    }

    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  extractDesignTokens();
}

module.exports = { extractDesignTokens };
