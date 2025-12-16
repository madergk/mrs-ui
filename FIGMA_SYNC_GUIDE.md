# Figma Synchronization Guide

**Project**: MRS Design System
**Figma File**: [MRS - Material UI v.7.2.0](https://www.figma.com/design/ESNP5KunFotGObfcuXZ9Op/MRS---Material-UI-v.7.2.0?node-id=11084-151779&m=dev)
**File ID**: `ESNP5KunFotGObfcuXZ9Op`
**Last Sync**: December 15, 2025 at 22:10:15 UTC

---

## Overview

This guide documents how to synchronize design tokens between Figma and the MRS Design System codebase.

## Extraction Tools

### Automated Extraction Script

**Location**: `scripts/figma-token-extractor.js`

**What it does**:
- Connects to Figma REST API
- Extracts all 101 design styles from the Figma file
- Organizes styles by category (typography, elevation, components)
- Parses the design file structure for colors and typography
- Generates JSON exports with full design token data

**Usage**:
```bash
# Run the extractor
node scripts/figma-token-extractor.js

# With custom file ID
FIGMA_FILE_ID=your-file-id node scripts/figma-token-extractor.js

# With custom token
FIGMA_TOKEN=your-token node scripts/figma-token-extractor.js
```

**Output Files**:
1. `figma-design-tokens-full.json` - Complete extraction with all data
2. `figma-design-tokens-summary.json` - Summary statistics and style categories
3. `figma-export-raw.json` - Raw Figma API response (for debugging)

---

## Last Extraction Results

**Date**: December 15, 2025 at 22:10:15 UTC
**Figma Version**: 2297906815940186739

### Statistics

- **Total Styles**: 101
- **Typography Styles**: 13
- **Elevation Styles**: 24
- **Component Styles**: 50
- **Library Styles**: 4
- **Colors Extracted**: 2,036
- **Typography Instances**: 331

### Typography Styles

The Figma file contains these typography styles:

- `typography/h1` - Heading 1
- `typography/h2` - Heading 2
- `typography/h3` - Heading 3
- `typography/h4` - Heading 4
- `typography/h5` - Heading 5
- `typography/h6` - Heading 6
- `typography/body1` - Body text (primary)
- `typography/body2` - Body text (secondary)
- `typography/subtitle1` - Subtitle (large)
- `typography/subtitle2` - Subtitle (small)
- `typography/caption` - Caption text
- `typography/overline` - Overline text

### Elevation Styles

The Figma file contains 24 elevation levels (shadows):

- `elevation/1` through `elevation/24`

Material UI uses elevations 0-24, with the most common being:
- 0: No shadow (flat)
- 1: Subtle lift (cards at rest)
- 2: Card hover state
- 4: App bar
- 8: Drawer, modal
- 16: Snackbar
- 24: Maximum elevation

### Component Styles

50+ component-specific styles including:

**Input Components**:
- `input/label` - Input field labels
- `input/value` - Input field values
- `input/helper` - Helper text

**Avatar Components**:
- `avatar/initialsSm` - Small avatar initials
- `avatar/initialsMd` - Medium avatar initials
- `avatar/initialsLg` - Large avatar initials

**Button Components**:
- `button/small` - Small button text
- `button/medium` - Medium button text
- `button/large` - Large button text

**Other Components**:
- `chip/label` - Chip labels
- `badge/label` - Badge labels
- `tooltip/label` - Tooltip text
- `alert/title` - Alert title
- `table/header` - Table headers
- `menu/itemDefault` - Menu items
- `icon/outlined/*` - Icon styles (small, medium, large, inherit)
- `icon/filled/*` - Filled icon styles

---

## Synchronization Workflow

### 1. When Figma is Updated

When designers update the Figma file:

```bash
# Step 1: Run the extractor
node scripts/figma-token-extractor.js

# Step 2: Review the output
cat figma-design-tokens-summary.json

# Step 3: Compare with current tokens
# Review changes in:
# - Typography styles
# - Color values
# - Spacing values
# - Component-specific tokens
```

### 2. Update Code

After extracting, update the codebase:

**Files to Update**:
1. `design-tokens.json` - Raw token values
2. `src/theme/designTokens.ts` - TypeScript token definitions
3. `src/theme/theme.ts` - Material UI theme configuration (if needed)
4. `DESIGN_SYSTEM_RULES.md` - Documentation (update version and sync date)

### 3. Validation

```bash
# Type check
npm run type-check

# Lint
npm run lint

# Test
npm test

# Build
npm run build

# Visual check in Storybook
npm run storybook
```

### 4. Commit Changes

```bash
git add .
git commit -m "feat(tokens): sync design tokens from Figma v$(date +%Y%m%d)"
git push
```

---

## Figma MCP Setup (Optional)

For automated token extraction via Claude Code, the Figma MCP server is configured:

**Location**: `~/Library/Application Support/Claude/claude_desktop_config.json`

```json
{
  "mcpServers": {
    "figma": {
      "url": "https://mcp.figma.com/mcp",
      "headers": {
        "Authorization": "Bearer YOUR_FIGMA_ACCESS_TOKEN"
      }
    }
  }
}
```

**Benefits**:
- AI-powered token extraction
- Automatic sync detection
- Natural language queries about design file
- Component specification extraction

**Limitations**:
- Requires Claude Desktop restart to activate
- API rate limits apply (see Figma docs)
- Requires valid personal access token

---

## Figma Personal Access Token

**Current Token**: Set via environment variable `FIGMA_ACCESS_TOKEN` or MCP configuration

**Scopes**:
- `file_content:read` - Read file structure and nodes ✅
- `file_metadata:read` - Read file metadata ✅

**Missing Scopes** (not critical):
- `file_variables:read` - For reading Figma variables (future enhancement)

**How to Regenerate**:
1. Go to Figma → Settings → Personal Access Tokens
2. Create new token: "Claude MCP Server"
3. Select scopes: `file_content:read`, `file_metadata:read`, `file_variables:read`
4. Copy token immediately
5. Update:
   - `scripts/figma-token-extractor.js` (FIGMA_TOKEN constant)
   - `~/Library/Application Support/Claude/claude_desktop_config.json`

---

## Troubleshooting

### Extraction Script Issues

**Issue**: `404 Not found`
- **Solution**: Verify file ID is correct
- **Check**: URL should be `figma.com/design/ESNP5KunFotGObfcuXZ9Op/...`

**Issue**: `403 Forbidden` or permission errors
- **Solution**: Token may need regeneration or additional scopes
- **Check**: Token has `file_content:read` permission

**Issue**: `file_variables:read scope required`
- **Solution**: Regenerate token with `file_variables:read` scope (optional)
- **Impact**: Can't extract Figma Variables, but styles still work

### Large File Performance

The MRS Figma file is large (2,036+ colors, 331+ typography instances). Extraction may take 10-30 seconds.

**Optimization tips**:
- Run extraction when Figma file version changes (not on every sync)
- Use `figma-design-tokens-summary.json` for quick checks
- Cache full extraction results

---

## Files Reference

### Generated Files

| File | Purpose | Size | Keep in Git? |
|------|---------|------|--------------|
| `figma-design-tokens-full.json` | Complete extraction | ~500KB+ | No (gitignore) |
| `figma-design-tokens-summary.json` | Summary stats | ~2KB | Yes |
| `figma-export-raw.json` | Raw API response | ~20KB | No (gitignore) |

### Configuration Files

| File | Purpose |
|------|---------|
| `scripts/figma-token-extractor.js` | Extraction script |
| `FIGMA_SYNC_GUIDE.md` | This guide |
| `DESIGN_SYSTEM_RULES.md` | Design system rules (includes Figma sync section) |

### gitignore Recommendations

```gitignore
# Figma exports (large files)
figma-design-tokens-full.json
figma-export-raw.json

# Keep summary for reference
# figma-design-tokens-summary.json
```

---

## API Rate Limits

Figma REST API rate limits (as of 2025):

- **Tier 1** (default): 60 requests per minute
- **Tier 2** (Dev/Full seats): Higher limits

**Our usage**:
- Token extraction: 1-2 API calls per run
- Well within limits for manual syncs

---

## Next Steps

1. **Review Extracted Data**:
   ```bash
   cat figma-design-tokens-summary.json
   ```

2. **Compare with Current Tokens**:
   ```bash
   diff design-tokens.json figma-design-tokens-full.json
   ```

3. **Update Design Tokens** (if changes detected):
   - Update `src/theme/designTokens.ts`
   - Run validation: `npm run type-check && npm test`

4. **Update Documentation**:
   - Update `DESIGN_SYSTEM_RULES.md` with new sync date
   - Document any breaking changes in `CHANGELOG.md`

5. **Communicate Changes**:
   - Notify team of design token updates
   - Update Storybook documentation if needed

---

## Resources

- [Figma REST API Documentation](https://www.figma.com/developers/api)
- [Figma MCP Server Guide](https://developers.figma.com/docs/figma-mcp-server/)
- [W3C Design Tokens Spec](https://design-tokens.github.io/community-group/)
- [Material UI Theme Documentation](https://mui.com/material-ui/customization/theming/)

---

**Maintained by**: MRS Design Team
**Last Updated**: December 15, 2025
**Next Review**: Monthly (15th of each month)
