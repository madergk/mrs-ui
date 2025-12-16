# MRS Design System Rules

**Version**: 1.0.0-beta.1
**Last Updated**: December 15, 2025
**Figma File**: [MRS - Material UI v.7.2.0](https://www.figma.com/design/ESNP5KunFotGObfcuXZ9Op/MRS---Material-UI-v.7.2.0?node-id=11084-151779&m=dev)
**Figma File ID**: `ESNP5KunFotGObfcuXZ9Op`
**Last Synced**: December 15, 2025 at 22:10:15 UTC
**Figma Version**: `2297906815940186739`
**Source of Truth**: Figma Design File → Code Implementation

## Figma Design Token Statistics

- **Total Styles**: 101
- **Typography Styles**: 13 (h1-h6, body1-2, subtitle1-2, caption, overline)
- **Elevation Styles**: 24 (elevation 1-24)
- **Component Styles**: 50 (input, avatar, chip, icon, menu, button, badge, etc.)
- **Library Styles**: 4 (internal utilities)
- **Extracted Colors**: 2,036 color values
- **Extracted Typography**: 331 typography instances

---

## Table of Contents

1. [Design Token Hierarchy](#design-token-hierarchy)
2. [Color System](#color-system)
3. [Typography System](#typography-system)
4. [Spacing & Layout](#spacing--layout)
5. [Component Rules](#component-rules)
6. [Accessibility Standards](#accessibility-standards)
7. [Responsive Design](#responsive-design)
8. [Animation & Motion](#animation--motion)
9. [Figma Synchronization](#figma-synchronization)

---

## Design Token Hierarchy

### Three-Tier System

```
Tier 1: Primitives → Tier 2: Semantic → Tier 3: Component
```

**Tier 1 - Primitives**: Raw design values without context

- Base colors (hex values)
- Font sizes (px/rem)
- Spacing units (px)
- Border radius values
- Shadow definitions

**Tier 2 - Semantic**: Contextual tokens with meaning

- Primary/secondary colors
- Text colors (primary, secondary, disabled)
- Background colors
- Error/warning/success/info states
- Typography variants (h1-h6, body, caption)

**Tier 3 - Component**: Component-specific overrides

- Button-specific sizes and styles
- Chip-specific colors
- Rating-specific fills
- Component state variations

### Token Naming Convention

```
[category].[subcategory].[property].[variant].[state]
```

Examples:

- `color.primary.main`
- `typography.h1.fontSize`
- `spacing.component.button.padding`
- `shadow.elevation.2`

---

## Color System

### Primary Colors

**Brand Color**: Verones (`#00686f`)

```
primary.main: #00686f
primary.dark: #004e53
primary.light: #33888d
primary.contrastText: #ffffff
```

**Usage Rules**:

- ✓ Use for primary actions (CTAs, submit buttons)
- ✓ Use for primary navigation elements
- ✓ Use for links and interactive elements
- ✗ Do not use for decorative elements
- ✗ Avoid using on large backgrounds

### Secondary Colors

**Accent Color**: Lime Green (`#99cc00`)

```
secondary.main: #99cc00
secondary.dark: #7aa300
secondary.light: #add633
secondary.contrastText: #000000de
```

**Usage Rules**:

- ✓ Use for secondary actions
- ✓ Use for highlights and accents
- ✓ Use sparingly to maintain visual hierarchy
- ✗ Do not use as primary CTA color

### Semantic Colors

**Error**: Red

```
error.main: #d32f2f
error.dark: #c62828
error.light: #ef5350
error.contrastText: #ffffff
```

**Warning**: Orange

```
warning.main: #ed6c02
warning.dark: #e65100
warning.light: #ff9800
warning.contrastText: #ffffff
```

**Success**: Green

```
success.main: #2e7d32
success.dark: #1b5e20
success.light: #4caf50
success.contrastText: #ffffff
```

**Info**: Blue

```
info.main: #0288d1
info.dark: #01579b
info.light: #03a9f4
info.contrastText: #ffffff
```

### Text Colors

```
text.primary: rgba(0, 0, 0, 0.87)    // 87% opacity
text.secondary: rgba(0, 0, 0, 0.60)  // 60% opacity
text.disabled: rgba(0, 0, 0, 0.38)   // 38% opacity
```

**Contrast Requirements**:

- Primary text: 4.5:1 minimum contrast ratio (WCAG AA)
- Large text (18pt+): 3:1 minimum contrast ratio
- Always verify contrast in Figma before implementation

### Background Colors

```
background.default: #ffffff
background.paper: #ffffff
background.surface: #f5f5f5
```

### Color Accessibility Rules

- ✓ All color combinations must meet WCAG AA standards (4.5:1 for normal text)
- ✓ Use WebAIM contrast checker for verification
- ✓ Provide text alternatives for color-coded information
- ✗ Never use color as the only means of conveying information

---

## Typography System

### Font Family

**Primary Font**: Nunito

```css
font-family:
  'Nunito',
  -apple-system,
  BlinkMacSystemFont,
  'Segoe UI',
  'Roboto',
  'Oxygen',
  'Ubuntu',
  'Cantarell',
  sans-serif;
```

**Weights Available**:

- Regular: 400
- Medium: 500
- SemiBold: 600
- Bold: 700

### Type Scale

```
h1: 96px  / 6rem    - SemiBold (600) - Line height: 1.167
h2: 60px  / 3.75rem - SemiBold (600) - Line height: 1.2
h3: 48px  / 3rem    - SemiBold (600) - Line height: 1.167
h4: 34px  / 2.125rem- SemiBold (600) - Line height: 1.235
h5: 24px  / 1.5rem  - SemiBold (600) - Line height: 1.334
h6: 20px  / 1.25rem - SemiBold (600) - Line height: 1.6

subtitle1: 16px / 1rem    - SemiBold (600) - Line height: 1.75
subtitle2: 14px / 0.875rem - Medium (500)   - Line height: 1.57

body1: 16px / 1rem    - Regular (400) - Line height: 1.5
body2: 14px / 0.875rem - Regular (400) - Line height: 1.43

button: 14px / 0.875rem - SemiBold (600) - Line height: 1.75
caption: 12px / 0.75rem - Regular (400)  - Line height: 1.66
overline: 12px / 0.75rem - Regular (400) - Line height: 2.66
```

### Typography Rules

**Hierarchy**:

- Use only one h1 per page
- Maintain sequential heading order (h1 → h2 → h3)
- Do not skip heading levels

**Line Length**:

- Optimal: 50-75 characters per line
- Maximum: 90 characters per line

**Line Height**:

- Headings: 1.2-1.4x font size
- Body text: 1.5-1.6x font size
- Captions: 1.4-1.5x font size

**Letter Spacing**:

- Default: 0 (normal)
- Overline: 0.05em
- Button: 0.02em

---

## Spacing & Layout

### Spacing Scale

**Base Unit**: 8px

```
0:  0px
1:  8px   (0.5rem)
2:  16px  (1rem)
3:  24px  (1.5rem)
4:  32px  (2rem)
5:  40px  (2.5rem)
6:  48px  (3rem)
7:  56px  (3.5rem)
8:  64px  (4rem)
9:  72px  (4.5rem)
10: 80px  (5rem)
```

**Usage Guidelines**:

- Use multiples of 8px for all spacing
- Small gaps: 1-2 units (8-16px)
- Medium gaps: 3-4 units (24-32px)
- Large gaps: 6-8 units (48-64px)

### Grid System

**Columns**: 12-column grid
**Gutter**: 16px (spacing unit 2)
**Margin**: 16px mobile, 24px tablet, 32px desktop

### Container Widths

```
xs: 444px   (mobile)
sm: 600px   (tablet portrait)
md: 900px   (tablet landscape)
lg: 1200px  (desktop)
xl: 1536px  (large desktop)
```

### Border Radius

```
none: 0px
xs: 4px
sm: 8px
md: 12px
lg: 16px
xl: 20px
rounded: 9999px (pill shape)
```

**Component Rules**:

- Buttons: `rounded` (pill shape)
- Cards: `md` (12px)
- Inputs: `sm` (8px)
- Chips: `rounded` (pill shape)
- Paper: `md` (12px)

---

## Component Rules

### Buttons

**Variants**:

- Contained: High emphasis, primary actions
- Outlined: Medium emphasis, secondary actions
- Text: Low emphasis, tertiary actions

**Sizes**:

```
Small:  padding: 4px 10px,  fontSize: 13px, minHeight: 32px
Medium: padding: 6px 16px,  fontSize: 14px, minHeight: 36px
Large:  padding: 8px 22px,  fontSize: 16px, minHeight: 42px
```

**States**:

- Default
- Hover: opacity 0.9
- Active: opacity 0.8
- Disabled: opacity 0.38
- Focus: 2px outline with primary color

**Rules**:

- ✓ Use sentence case for button labels
- ✓ Keep labels short (1-3 words)
- ✓ Use action verbs (Submit, Cancel, Save)
- ✗ Do not use all caps
- ✗ Avoid vague labels like "Click here"

### Cards

**Elevation**:

- Default: 1 (subtle shadow)
- Hover: 4 (raised shadow)

**Padding**: 16px (spacing unit 2)
**Border Radius**: 12px (md)

**Structure**:

1. CardHeader (optional): Title, subtitle, action
2. CardMedia (optional): Image or video
3. CardContent: Main content
4. CardActions (optional): Action buttons

### Form Inputs

**Height**:

```
Small: 32px
Medium: 40px
Large: 48px
```

**States**:

- Default: neutral border
- Focus: primary color border (2px)
- Error: error color border (2px)
- Disabled: reduced opacity (0.38)

**Rules**:

- ✓ Always include labels
- ✓ Use helper text for guidance
- ✓ Show error messages inline
- ✓ Provide clear focus indicators
- ✗ Do not use placeholder as label

### Icons

**Sizes**:

```
Small: 16px
Medium: 24px
Large: 32px
```

**Rules**:

- Use Material Icons library
- Maintain 1:1 aspect ratio
- Provide accessible labels for icon-only buttons

---

## Accessibility Standards

### WCAG 2.1 Level AA Compliance

**Color Contrast**:

- Normal text: 4.5:1 minimum
- Large text (18pt+): 3:1 minimum
- UI components: 3:1 minimum

**Keyboard Navigation**:

- All interactive elements must be keyboard accessible
- Tab order must be logical
- Focus indicators must be visible (2px outline)

**Screen Reader Support**:

- Use semantic HTML elements
- Provide ARIA labels where needed
- Use alt text for images
- Use aria-describedby for form errors

**Touch Targets**:

- Minimum size: 44x44px (mobile)
- Minimum spacing: 8px between targets

**Focus Management**:

- Visible focus indicators (2px outline)
- Logical focus order (top to bottom, left to right)
- Focus trap for modals and dialogs

---

## Responsive Design

### Breakpoints

```typescript
xs: 0-443px      // Mobile (default)
sm: 444-599px    // Large mobile
md: 600-899px    // Tablet
lg: 900-1199px   // Desktop
xl: 1200px+      // Large desktop
```

### Mobile-First Approach

**Base Styles**: Mobile (xs)
**Progressive Enhancement**: Add complexity for larger screens

**Example**:

```css
/* Mobile first (xs) */
.container {
  padding: 16px;
}

/* Tablet (md) */
@media (min-width: 600px) {
  .container {
    padding: 24px;
  }
}

/* Desktop (lg) */
@media (min-width: 900px) {
  .container {
    padding: 32px;
  }
}
```

### Responsive Typography

**Fluid Typography**: Use `clamp()` for scalable text

```css
font-size: clamp(16px, 2vw, 24px);
```

### Responsive Spacing

- Mobile: Tighter spacing (8-16px)
- Tablet: Medium spacing (16-24px)
- Desktop: Generous spacing (24-32px)

---

## Animation & Motion

### Transition Duration

```
shortest: 150ms
shorter:  200ms
short:    250ms
standard: 300ms
complex:  375ms
enteringScreen: 225ms
leavingScreen:  195ms
```

### Easing Functions

```
easeInOut: cubic-bezier(0.4, 0, 0.2, 1)
easeOut:   cubic-bezier(0.0, 0, 0.2, 1)
easeIn:    cubic-bezier(0.4, 0, 1, 1)
sharp:     cubic-bezier(0.4, 0, 0.6, 1)
```

### Animation Guidelines

**Micro-interactions**:

- Use for button hovers, toggles, state changes
- Duration: 150-250ms
- Easing: easeInOut

**Page Transitions**:

- Duration: 300-375ms
- Easing: easeOut (entering), easeIn (leaving)

**Disabled Animations**:

- Respect `prefers-reduced-motion` media query
- Provide instant state changes for accessibility

**Rules**:

- ✓ Keep animations subtle and purposeful
- ✓ Use consistent timing across similar interactions
- ✓ Provide immediate feedback for user actions
- ✗ Avoid animations longer than 500ms
- ✗ Do not use animations for critical information

---

## Figma Synchronization

### Manual Extraction Workflow

**Current Process** (as per CLAUDE.md):

1. **Access Figma File**
   - URL: https://www.figma.com/design/c4weC6RhdEd7c8B1GkCjTB/MRS---Material-UI-v.7.2.0

2. **Extract Design Variables**
   - Colors → Update `design-tokens.json` (tier1.primitives.colors)
   - Typography → Update `design-tokens.json` (tier1.primitives.typography)
   - Spacing → Update `design-tokens.json` (tier1.primitives.spacing)
   - Components → Update `design-tokens.json` (tier3.components)

3. **Update Code**
   - Convert JSON to TypeScript in `src/theme/designTokens.ts`
   - Update MUI theme in `src/theme/theme.ts`
   - Update component overrides if needed

4. **Validate Changes**
   - Run type-check: `npm run type-check`
   - Run lint: `npm run lint`
   - Run tests: `npm test`
   - Visual check in Storybook: `npm run storybook`

### Optional: Figma MCP Setup

To enable automated token extraction:

**1. Install Figma MCP Server**:

```json
// ~/Library/Application Support/Claude/claude_desktop_config.json
{
  "mcpServers": {
    "figma": {
      "command": "npx",
      "args": ["@figma/mcp-server"],
      "env": {
        "FIGMA_ACCESS_TOKEN": "your-figma-personal-access-token"
      }
    }
  }
}
```

**2. Generate Figma Access Token**:

- Go to Figma → Settings → Personal Access Tokens
- Create new token with "File content" read permission
- Add token to MCP config

**3. Benefits**:

- Automated token extraction
- Real-time design-code sync
- Validation of Figma-code alignment

### Version Control for Design Changes

When Figma design is updated:

1. **Document Change**:
   - Update `CHANGELOG.md` with design changes
   - Note which tokens/components were modified

2. **Create Feature Branch**:

   ```bash
   git checkout -b design/update-colors-2025-12
   ```

3. **Update Tokens**:
   - Modify `design-tokens.json`
   - Update `src/theme/designTokens.ts`
   - Update `src/theme/theme.ts` if needed

4. **Update Components** (if needed):
   - Modify component overrides
   - Update Storybook stories
   - Update tests

5. **Quality Checks**:

   ```bash
   npm run lint
   npm run type-check
   npm test
   npm run build
   npm run build-storybook
   ```

6. **Create Pull Request**:
   - Document Figma changes in PR description
   - Include before/after screenshots
   - Link to Figma file/frames

---

## Design System Governance

### Single Source of Truth

**Figma** is the source of truth for:

- Visual design
- Component specifications
- Design token values
- Spacing and layout rules

**Code** is the source of truth for:

- Implementation details
- Accessibility enhancements
- TypeScript types
- Component behavior

### Change Request Process

1. **Design Change** → Propose in Figma
2. **Review** → Design team approval
3. **Document** → Update `design-tokens.json`
4. **Implement** → Update code
5. **Validate** → Run all quality checks
6. **Deploy** → Merge to main, publish to npm

### Validation Checklist

Before merging design changes:

- [ ] Figma file updated and approved
- [ ] `design-tokens.json` updated
- [ ] `src/theme/designTokens.ts` updated
- [ ] `src/theme/theme.ts` updated (if needed)
- [ ] Component overrides updated (if needed)
- [ ] Storybook stories reflect changes
- [ ] All tests passing
- [ ] TypeScript compiles without errors
- [ ] ESLint passes (0 warnings)
- [ ] Visual regression tests pass (Chromatic)
- [ ] Accessibility audit passes
- [ ] CHANGELOG.md updated
- [ ] Documentation updated

---

## Resources

### Tools

- **Figma**: Design and prototyping
- **Contrast Checker**: WebAIM Contrast Checker
- **Typography Calculator**: Type Scale Generator
- **Accessibility**: axe DevTools, WAVE

### Documentation

- [Material UI Theme Documentation](https://mui.com/material-ui/customization/theming/)
- [W3C Design Tokens Spec](https://design-tokens.github.io/community-group/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Material Design Guidelines](https://m3.material.io/)

### Internal Links

- Project README: `/README.md`
- Architecture: `/src/theme/ARCHITECTURE.md`
- Token Structure: `/design-tokens-structure.md`
- Workflow Guide: `/CLAUDE.md`

---

**Maintained by**: MRS Design Team
**Last Synced with Figma**: December 15, 2025
**Next Review**: Monthly (15th of each month)
