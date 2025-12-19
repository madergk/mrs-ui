# 🔧 Refactoring Action Plan - MRS UI Design System

**Date**: December 19, 2025  
**Repository**: @mrs/ui v0.1.0  
**Goal**: Transform repository into production-ready, testable, and maintainable design system  
**Timeline**: 14 days (2 weeks)

---

## 📅 Timeline Overview

```
Week 1: Foundation & Cleanup
├── Day 1:  Environment Setup
├── Day 2:  Build & Test Verification
├── Day 3:  Code Quality Fixes
├── Day 4:  Architecture Refactoring (Part 1)
└── Day 5:  Architecture Refactoring (Part 2)

Week 2: Component Completion & Polish
├── Day 6:  Atomic Components (Part 1)
├── Day 7:  Atomic Components (Part 2)
├── Day 8:  Molecule Components
├── Day 9:  Navigation Components
├── Day 10: Advanced Components
├── Day 11: Build System Enhancement
├── Day 12: Pre-publish Preparation
├── Day 13: Quality Assurance (Part 1)
└── Day 14: Quality Assurance (Part 2)
```

---

## 🎯 Day 1: Environment Setup

### 🎯 Goals
- Install all dependencies
- Fix dependency conflicts
- Verify environment is ready for development

### 📋 Tasks

#### Task 1.1: Install Dependencies ⏱️ 10 min

```bash
# Install all dependencies
npm install

# Verify installation
npm list --depth=0
```

**Expected Outcome**: All 34 dependencies installed without errors

**Validation**:
- [ ] No "UNMET DEPENDENCY" errors
- [ ] `node_modules/` folder created
- [ ] `package-lock.json` updated

---

#### Task 1.2: Fix React Dependency Conflict ⏱️ 5 min

**Problem**: React is listed in both `dependencies` and `devDependencies`

**Action**: Edit `package.json`

```json
{
  "dependencies": {
    "@mui/icons-material": "^7.2.0",
    "@mui/material": "^7.2.0",
    "@mui/x-date-pickers": "^7.0.0"
    // Remove react and react-dom from here
  },
  "devDependencies": {
    // Keep react and react-dom here
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    // ... rest of devDependencies
  },
  "peerDependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  }
}
```

**Then run**:
```bash
npm install
```

**Validation**:
- [ ] No duplicate dependency warnings
- [ ] `npm list react` shows correct version
- [ ] `npm list react-dom` shows correct version

---

#### Task 1.3: Add Missing Emotion Dependencies ⏱️ 5 min

**Problem**: MUI v7 requires @emotion packages

**Action**: Add to devDependencies

```bash
npm install -D @emotion/react @emotion/styled
```

**Validation**:
- [ ] @emotion/react installed
- [ ] @emotion/styled installed
- [ ] No peer dependency warnings

---

#### Task 1.4: Verify Git Configuration ⏱️ 2 min

```bash
# Check current branch
git branch

# Verify .gitignore includes
cat .gitignore | grep -E "node_modules|dist|storybook-static"
```

**Validation**:
- [ ] On correct branch (cursor/repository-audit-for-refactoring-6945)
- [ ] node_modules/ ignored
- [ ] dist/ ignored
- [ ] storybook-static/ ignored

---

### 🎉 Day 1 Completion Criteria

- [x] All dependencies installed
- [x] No dependency conflicts
- [x] Git properly configured
- [x] Ready for development

**Time Invested**: ~30 minutes  
**Blockers Removed**: ✅ Environment ready

---

## 🎯 Day 2: Build & Test Verification

### 🎯 Goals
- Verify TypeScript compilation
- Verify build system works
- Run test suite
- Start Storybook

### 📋 Tasks

#### Task 2.1: TypeScript Type Check ⏱️ 5 min

```bash
# Run TypeScript compiler in check mode
npm run type-check
```

**Expected Outcome**: No TypeScript errors

**If errors occur**:
1. Document errors in a file: `typescript-errors.log`
2. Categorize by severity
3. Fix critical errors first

**Validation**:
- [ ] No TypeScript errors
- [ ] All types resolve correctly
- [ ] Path aliases work

---

#### Task 2.2: Build Library ⏱️ 10 min

```bash
# Build the library
npm run build
```

**Expected Outcome**: 
- `dist/` folder created
- `dist/index.js` exists
- `dist/index.d.ts` exists
- `dist/theme/index.js` exists
- `dist/theme/index.d.ts` exists

**Validation**:
- [ ] Build completes without errors
- [ ] Check dist/ structure:
  ```bash
  tree dist/ -L 2
  ```
- [ ] Verify file sizes are reasonable
- [ ] Check that external deps are not bundled:
  ```bash
  grep -r "react" dist/index.js | head -5
  # Should not contain React source code
  ```

**If build fails**:
1. Check for TypeScript errors
2. Check for missing exports
3. Verify vite.config.ts is correct

---

#### Task 2.3: Run Test Suite ⏱️ 15 min

```bash
# Run all tests
npm test

# Run with coverage
npm run test:coverage
```

**Expected Outcome**: 
- Most tests pass
- Coverage report generated

**Analyze Results**:
```bash
# View coverage summary
cat coverage/coverage-summary.json

# Check which files are missing tests
```

**Document**:
1. Which tests fail (if any)
2. Coverage percentages:
   - Statements: ____%
   - Branches: ____%
   - Functions: ____%
   - Lines: ____%
3. Components without tests

**Validation**:
- [ ] Test suite runs without crashes
- [ ] Coverage report generated in `coverage/`
- [ ] Document test failures
- [ ] Identify missing tests

---

#### Task 2.4: Start Storybook ⏱️ 10 min

```bash
# Start Storybook dev server
npm run storybook
```

**Expected Outcome**: 
- Storybook starts at http://localhost:6006
- Can view component stories

**Manual Verification**:
1. Open http://localhost:6006
2. Check if stories are visible in sidebar
3. Click through each component story
4. Verify components render correctly
5. Test theme switcher (if available)

**Document**:
1. Which stories fail to load
2. Visual issues found
3. Missing stories

**Validation**:
- [ ] Storybook starts successfully
- [ ] Stories visible in sidebar
- [ ] Components render correctly
- [ ] No console errors
- [ ] Document any issues

---

#### Task 2.5: Build Storybook ⏱️ 5 min

```bash
# Build static Storybook
npm run build-storybook
```

**Expected Outcome**: 
- `storybook-static/` folder created
- Can open index.html in browser

**Validation**:
- [ ] Build completes successfully
- [ ] storybook-static/ folder exists
- [ ] index.html opens in browser

---

### 🎉 Day 2 Completion Criteria

- [x] TypeScript compiles without errors
- [x] Build succeeds and generates correct output
- [x] Test suite runs (documented any failures)
- [x] Storybook works
- [x] Issues documented for fixing

**Time Invested**: ~45 minutes  
**Status**: Ready for quality fixes

---

## 🎯 Day 3: Code Quality Fixes

### 🎯 Goals
- Fix all linting errors
- Add missing tests
- Achieve 70% coverage
- Fix formatting issues

### 📋 Tasks

#### Task 3.1: Fix Linting Errors ⏱️ 30 min

```bash
# Check for linting errors
npm run lint

# Auto-fix what can be fixed
npm run lint:fix

# Check again
npm run lint
```

**Manual Fixes** (if needed):
- Unused imports
- Missing types
- Console.log statements
- Any/unknown usage

**Validation**:
- [ ] `npm run lint` reports 0 errors
- [ ] All warnings resolved (or documented why they remain)

---

#### Task 3.2: Fix Formatting ⏱️ 10 min

```bash
# Format all files
npm run format

# Check formatting
npm run format:check
```

**Validation**:
- [ ] All files formatted consistently
- [ ] No formatting errors

---

#### Task 3.3: Add Missing Test Files ⏱️ 2 hours

**Missing Tests Identified**:
1. Rating.test.tsx (confirmed missing)
2. Others TBD from Day 2 analysis

**For Rating Component**:

```bash
# Create test file
touch src/components/atoms/Rating/Rating.test.tsx
```

**Template**:
```typescript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '../../theme';
import { Rating } from './Rating';

describe('Rating', () => {
  it('renders with default value', () => {
    render(
      <ThemeProvider>
        <Rating />
      </ThemeProvider>
    );
    // Add assertions
  });

  it('handles value change', async () => {
    const handleChange = jest.fn();
    render(
      <ThemeProvider>
        <Rating value={3} onChange={handleChange} />
      </ThemeProvider>
    );
    // Test interactions
  });

  // Add more tests for:
  // - Different sizes
  // - Disabled state
  // - Read-only mode
  // - Max value
  // - Precision
});
```

**Repeat for other missing tests**

**Validation**:
- [ ] Rating.test.tsx created and passes
- [ ] All other missing tests added
- [ ] All tests pass

---

#### Task 3.4: Improve Test Coverage ⏱️ 2 hours

**Target**: 70% coverage for all metrics

**Strategy**:
1. Run coverage and identify low-coverage files
2. Add tests for untested branches
3. Test error cases
4. Test edge cases

```bash
# Run coverage
npm run test:coverage

# Open HTML report
open coverage/lcov-report/index.html
```

**Focus areas**:
- Conditional branches in components
- Error handling
- Different prop combinations
- State changes

**Validation**:
- [ ] Statement coverage ≥ 70%
- [ ] Branch coverage ≥ 70%
- [ ] Function coverage ≥ 70%
- [ ] Line coverage ≥ 70%

---

#### Task 3.5: Fix Test Failures ⏱️ 1 hour

**From Day 2 analysis**, fix any failing tests

**Common issues**:
- Missing ThemeProvider wrapper
- Incorrect assertions
- Async timing issues
- Mock configuration

**Validation**:
- [ ] All tests pass
- [ ] No test warnings
- [ ] Test suite runs in reasonable time

---

### 🎉 Day 3 Completion Criteria

- [x] No linting errors
- [x] All files formatted
- [x] All components have tests
- [x] Test coverage ≥ 70%
- [x] All tests pass

**Time Invested**: ~6 hours  
**Quality Gates**: ✅ Passed

---

## 🎯 Day 4: Architecture Refactoring (Part 1)

### 🎯 Goals
- Consolidate documentation
- Clean up root directory
- Create missing directories
- Organize project structure

### 📋 Tasks

#### Task 4.1: Create Documentation Structure ⏱️ 30 min

```bash
# Create docs directory structure
mkdir -p docs/getting-started
mkdir -p docs/design-system
mkdir -p docs/components
mkdir -p docs/development
mkdir -p docs/migration
```

**Create main docs README**:

```bash
cat > docs/README.md << 'EOF'
# MRS UI Design System Documentation

Welcome to the MRS UI Design System documentation.

## 📚 Documentation Sections

- [Getting Started](./getting-started/installation.md) - Installation and setup
- [Design System](./design-system/design-tokens.md) - Design tokens and rules
- [Components](./components/overview.md) - Component library reference
- [Development](./development/contributing.md) - Contributing guidelines
- [Migration](./migration/phase-history.md) - Version history and migrations

## 🚀 Quick Links

- [Installation Guide](./getting-started/installation.md)
- [Quick Start](./getting-started/quick-start.md)
- [Component Overview](./components/overview.md)
- [Design Tokens](./design-system/design-tokens.md)
- [Contributing](./development/contributing.md)

## 🔗 External Resources

- [Figma Design File](https://www.figma.com/design/ESNP5KunFotGObfcuXZ9Op/MRS---Material-UI-v.7.2.0)
- [Storybook](http://localhost:6006) (when running locally)
- [GitHub Repository](https://github.com/mrs/ui)
EOF
```

**Validation**:
- [ ] docs/ folder structure created
- [ ] Main README created

---

#### Task 4.2: Move and Consolidate Docs ⏱️ 2 hours

**Plan**:

```
IMPLEMENTATION_PLAN.md → docs/components/implementation-plan.md
COMPONENT_DEPENDENCY_MAP.md → docs/components/dependency-map.md
DESIGN_SYSTEM_RULES.md → docs/design-system/design-rules.md
FIGMA_SYNC_GUIDE.md → docs/design-system/figma-sync.md

PHASE_1.2_COMPLETE.md → docs/migration/phase-1.2.md
PHASE_2_COMPLETE.md → docs/migration/phase-2.md
SETUP_COMPLETE.md → docs/migration/setup.md

DEPENDENCY_CLEANUP.md → docs/migration/dependency-cleanup.md
DEPENDENCY_CONFLICT_FIX.md → docs/migration/dependency-fix.md
DEPENDENCY_REVIEW.md → docs/migration/dependency-review.md

MUI_THEME_CUSTOMIZATION.md → docs/design-system/theme-customization.md
THEME_UPDATE_SUMMARY.md → docs/migration/theme-updates.md
MATERIAL_SYMBOLS_MIGRATION.md → docs/migration/material-symbols.md

FIGMA_COMPONENT_VERIFICATION.md → docs/design-system/figma-verification.md
FIGMA_SETUP_COMPLETE.md → docs/design-system/figma-setup.md
figma-extraction-analysis.md → docs/design-system/figma-analysis.md

COMPONENT_UPDATE_SUMMARY.md → docs/migration/component-updates.md
```

**Execute**:
```bash
# Move files
mv IMPLEMENTATION_PLAN.md docs/components/implementation-plan.md
mv COMPONENT_DEPENDENCY_MAP.md docs/components/dependency-map.md
# ... (repeat for all files)

# Update links in moved files
# (search and replace relative paths)
```

**Validation**:
- [ ] All docs moved to appropriate folders
- [ ] Internal links updated
- [ ] README links work
- [ ] No broken references

---

#### Task 4.3: Create Getting Started Docs ⏱️ 1 hour

**Create**: `docs/getting-started/installation.md`

```markdown
# Installation

## Prerequisites

- Node.js 18+ 
- npm 8+

## Install from npm

\`\`\`bash
npm install @mrs/ui
\`\`\`

## Peer Dependencies

Make sure you have:

\`\`\`bash
npm install react react-dom @emotion/react @emotion/styled
\`\`\`

## Usage

\`\`\`tsx
import { ThemeProvider, Button } from '@mrs/ui';

function App() {
  return (
    <ThemeProvider>
      <Button>Hello World</Button>
    </ThemeProvider>
  );
}
\`\`\`
```

**Create**: `docs/getting-started/quick-start.md`
**Create**: `docs/getting-started/troubleshooting.md`

**Validation**:
- [ ] Installation guide complete
- [ ] Quick start guide complete
- [ ] Troubleshooting guide complete

---

#### Task 4.4: Create Development Docs ⏱️ 1 hour

**Create**: `docs/development/contributing.md`
**Create**: `docs/development/testing.md`
**Create**: `docs/development/building.md`

**Validation**:
- [ ] Contributing guide complete
- [ ] Testing guide complete
- [ ] Building guide complete

---

#### Task 4.5: Update Root README ⏱️ 30 min

**Action**: Simplify root README.md

```markdown
# MRS UI - Material-UI v7.2.0 Design System

A comprehensive component library built on Material-UI v7.2.0.

## 📦 Installation

\`\`\`bash
npm install @mrs/ui
\`\`\`

## 🚀 Quick Start

\`\`\`tsx
import { ThemeProvider, Button } from '@mrs/ui';

function App() {
  return (
    <ThemeProvider>
      <Button variant="contained">Get Started</Button>
    </ThemeProvider>
  );
}
\`\`\`

## 📚 Documentation

See the [documentation](./docs/README.md) for detailed guides:

- [Getting Started](./docs/getting-started/installation.md)
- [Component Library](./docs/components/overview.md)
- [Design System](./docs/design-system/design-tokens.md)
- [Contributing](./docs/development/contributing.md)

## 🎨 Storybook

\`\`\`bash
npm run storybook
\`\`\`

## 🧪 Development

\`\`\`bash
npm install
npm run dev
npm test
\`\`\`

## 📄 License

MIT
```

**Validation**:
- [ ] Root README simplified
- [ ] Links to docs/ work
- [ ] Quick start is clear

---

### 🎉 Day 4 Completion Criteria

- [x] Documentation organized in docs/
- [x] Root directory cleaned up
- [x] All docs accessible
- [x] Links working
- [x] Developer guides complete

**Time Invested**: ~5 hours  
**Documentation**: ✅ Professional

---

## 🎯 Day 5: Architecture Refactoring (Part 2)

### 🎯 Goals
- Create missing directories
- Optimize theme structure
- Clean up root directory
- Organize Figma exports

### 📋 Tasks

#### Task 5.1: Create Missing Directories ⏱️ 10 min

```bash
# Create utils directory
mkdir -p src/utils

# Create assets directories
mkdir -p src/assets/images
mkdir -p src/assets/icons
mkdir -p src/assets/fonts

# Create placeholder README in each
cat > src/utils/README.md << 'EOF'
# Utilities

Helper functions and utilities for the component library.
EOF

cat > src/assets/README.md << 'EOF'
# Assets

Static assets for the component library.

- `images/` - Image files
- `icons/` - Custom icon files  
- `fonts/` - Custom fonts (if not using CDN)
EOF
```

**Validation**:
- [ ] src/utils/ created
- [ ] src/assets/ directories created
- [ ] README files added

---

#### Task 5.2: Organize Figma Exports ⏱️ 15 min

```bash
# Create figma-exports directory
mkdir -p figma-exports

# Move Figma-related files
mv figma-design-tokens-full.json figma-exports/
mv figma-design-tokens-summary.json figma-exports/
mv figma-export-raw.json figma-exports/
mv "MRS - Material UI v.7.2.0.fig" figma-exports/ 2>/dev/null || true

# Create README
cat > figma-exports/README.md << 'EOF'
# Figma Exports

This directory contains exported data from Figma.

## Files

- `figma-design-tokens-full.json` - Complete design token export
- `figma-design-tokens-summary.json` - Summary of design tokens
- `figma-export-raw.json` - Raw Figma API export

## Usage

These files are used to synchronize design tokens from Figma to the codebase.
See [Figma Sync Guide](../docs/design-system/figma-sync.md) for details.
EOF
```

**Validation**:
- [ ] figma-exports/ folder created
- [ ] Figma files moved
- [ ] README added

---

#### Task 5.3: Handle Theme File Duplication ⏱️ 20 min

**Investigate**: Why do both `theme.json` and `_theme.json` exist?

```bash
# Compare files
diff theme.json _theme.json

# Check file sizes
ls -lh theme.json _theme.json

# Search for references
grep -r "_theme.json" src/
grep -r "_theme.json" .storybook/
```

**Decision**:
- If identical: Remove `_theme.json`
- If `_theme.json` is backup: Move to `theme.backup.json`
- If different: Document purpose in README

**Action** (assuming backup):
```bash
mv _theme.json theme.backup.json
```

**Validation**:
- [ ] Theme duplication resolved
- [ ] Code still references correct file
- [ ] Build still works

---

#### Task 5.4: Analyze Theme File Size ⏱️ 30 min

**Problem**: theme.json is 135KB

**Investigate**:
```bash
# Check theme.json size breakdown
cat theme.json | jq 'keys' 
cat theme.json | jq '.colorSchemes.light.palette | keys'
cat theme.json | jq '.typography | keys'

# Check if can be minified
cat theme.json | jq -c . > theme.min.json
ls -lh theme.json theme.min.json
```

**Options**:
1. **Minify**: Already in JSON (can't minify much)
2. **Split**: Separate light and dark themes
3. **Optimize**: Remove unused tokens
4. **Keep as-is**: 135KB is acceptable for design tokens

**Decision**: Document decision in `docs/design-system/theme-architecture.md`

**If splitting**:
```bash
# Split into separate files
cat theme.json | jq '.colorSchemes.light' > src/theme/tokens/light.json
cat theme.json | jq '.colorSchemes.dark' > src/theme/tokens/dark.json
cat theme.json | jq 'del(.colorSchemes)' > src/theme/tokens/base.json

# Update theme/index.ts to dynamically import
```

**Validation**:
- [ ] Theme size analyzed
- [ ] Decision documented
- [ ] Implementation complete (if needed)

---

#### Task 5.5: Add Component Template Generator ⏱️ 1 hour

**Create**: `scripts/create-component.js`

```javascript
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const [,, componentName, category = 'atoms'] = process.argv;

if (!componentName) {
  console.error('Usage: npm run create-component <ComponentName> [category]');
  process.exit(1);
}

const componentDir = path.join(__dirname, '..', 'src', 'components', category, componentName);

if (fs.existsSync(componentDir)) {
  console.error(`Component ${componentName} already exists!`);
  process.exit(1);
}

// Create directory
fs.mkdirSync(componentDir, { recursive: true });

// Create files
const files = {
  [`${componentName}.tsx`]: generateComponent(componentName),
  [`${componentName}.test.tsx`]: generateTest(componentName),
  [`${componentName}.stories.tsx`]: generateStory(componentName),
  'index.ts': `export { ${componentName} } from './${componentName}';\nexport type { ${componentName}Props } from './${componentName}';\n`,
};

Object.entries(files).forEach(([filename, content]) => {
  fs.writeFileSync(path.join(componentDir, filename), content);
});

console.log(`✅ Component ${componentName} created in src/components/${category}/${componentName}/`);

function generateComponent(name) {
  return `/**
 * ${name} Component
 * 
 * TODO: Add component description
 */

import React from 'react';
import { useTheme } from '@mui/material/styles';

export interface ${name}Props {
  /**
   * TODO: Add prop description
   */
  children?: React.ReactNode;
}

/**
 * ${name} component
 * 
 * @example
 * \`\`\`tsx
 * <${name}>Content</${name}>
 * \`\`\`
 */
export const ${name}: React.FC<${name}Props> = ({ children, ...props }) => {
  const theme = useTheme();

  return (
    <div {...props}>
      {children}
    </div>
  );
};

export default ${name};
`;
}

function generateTest(name) {
  return `import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '../../theme';
import { ${name} } from './${name}';

describe('${name}', () => {
  it('renders children', () => {
    render(
      <ThemeProvider>
        <${name}>Test Content</${name}>
      </ThemeProvider>
    );
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  // TODO: Add more tests
});
`;
}

function generateStory(name) {
  return `import type { Meta, StoryObj } from '@storybook/react';
import { ${name} } from './${name}';

const meta = {
  title: 'Components/${name}',
  component: ${name},
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ${name}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default ${name}',
  },
};

// TODO: Add more stories
`;
}
```

**Make executable**:
```bash
chmod +x scripts/create-component.js
```

**Add to package.json**:
```json
{
  "scripts": {
    "create-component": "node scripts/create-component.js"
  }
}
```

**Test**:
```bash
npm run create-component TestComponent atoms
```

**Validation**:
- [ ] Script created
- [ ] Script is executable
- [ ] Can create new components
- [ ] Generated files are valid

---

#### Task 5.6: Update .gitignore ⏱️ 5 min

```bash
# Add to .gitignore
cat >> .gitignore << 'EOF'

# Build output
dist/
storybook-static/
*.tsbuildinfo

# Test coverage
coverage/
.nyc_output/

# Logs
*.log
npm-debug.log*

# OS files
.DS_Store
Thumbs.db

# IDE
.vscode/
.idea/
*.swp
*.swo

# Temporary files
*.tmp
tmp/
temp/

# Theme backups
theme.backup.json
EOF
```

**Validation**:
- [ ] .gitignore updated
- [ ] Build outputs ignored
- [ ] Coverage ignored

---

### 🎉 Day 5 Completion Criteria

- [x] All directories created
- [x] Figma exports organized
- [x] Theme duplication resolved
- [x] Component generator created
- [x] Project structure clean

**Time Invested**: ~3 hours  
**Architecture**: ✅ Refactored

---

## 🎯 Days 6-10: Component Implementation

### Overview

Days 6-10 focus on implementing the 20 missing components following the established patterns.

### 📋 Component Implementation Checklist Template

For each component:

```
Component: [Name]
Category: [atoms/molecules/organisms]
Priority: [High/Medium/Low]
Dependencies: [List any]

Tasks:
[ ] Create component structure (npm run create-component [Name] [category])
[ ] Implement component logic
[ ] Style with theme tokens
[ ] Add TypeScript types
[ ] Write unit tests (70%+ coverage)
[ ] Create Storybook stories
[ ] Add to exports (src/components/[category]/index.ts)
[ ] Add to main exports (src/index.ts)
[ ] Test in Storybook
[ ] Verify tests pass
[ ] Document usage

Time Estimate: [hours]
Actual Time: [hours]
Status: [ ] To Do / [ ] In Progress / [ ] Done
```

### Day 6: Atomic Components (Part 1)

**Target Components**: 4 components, ~6 hours

1. **Checkbox** ⏱️ 1.5 hours
   - [ ] Implement Checkbox component
   - [ ] Add controlled/uncontrolled modes
   - [ ] Add indeterminate state
   - [ ] Theme tokens for colors
   - [ ] Tests and stories

2. **Radio** ⏱️ 1.5 hours
   - [ ] Implement Radio component
   - [ ] Implement RadioGroup component
   - [ ] Add controlled/uncontrolled modes
   - [ ] Theme tokens for colors
   - [ ] Tests and stories

3. **Slider** ⏱️ 2 hours
   - [ ] Implement Slider component
   - [ ] Add marks support
   - [ ] Add value labels
   - [ ] Add range mode
   - [ ] Theme tokens for track and thumb
   - [ ] Tests and stories

4. **Tooltip** ⏱️ 1 hour
   - [ ] Implement Tooltip component
   - [ ] Add placement options
   - [ ] Add arrow support
   - [ ] Theme tokens for background
   - [ ] Tests and stories

---

### Day 7: Atomic Components (Part 2)

**Target Components**: 3 components, ~6 hours

1. **Autocomplete** ⏱️ 3 hours
   - [ ] Implement Autocomplete component
   - [ ] Add filtering logic
   - [ ] Add multiple selection
   - [ ] Add custom rendering
   - [ ] Theme tokens
   - [ ] Tests and stories

2. **ButtonGroup** ⏱️ 1.5 hours
   - [ ] Implement ButtonGroup component
   - [ ] Add orientation support
   - [ ] Add variant inheritance
   - [ ] Theme tokens for borders
   - [ ] Tests and stories

3. **ToggleButtonGroup** ⏱️ 1.5 hours
   - [ ] Implement ToggleButtonGroup component
   - [ ] Add single/multiple selection
   - [ ] Add exclusive mode
   - [ ] Theme tokens
   - [ ] Tests and stories

---

### Day 8: Molecule Components

**Target Components**: 6 components, ~6 hours

1. **List + ListItem** ⏱️ 1.5 hours
   - [ ] Implement List component
   - [ ] Implement ListItem component
   - [ ] Add ListItemText, ListItemIcon
   - [ ] Theme tokens
   - [ ] Tests and stories

2. **Dialog** ⏱️ 2 hours
   - [ ] Implement Dialog component
   - [ ] Implement DialogTitle
   - [ ] Implement DialogContent
   - [ ] Implement DialogActions
   - [ ] Add backdrop and transitions
   - [ ] Theme tokens
   - [ ] Tests and stories

3. **Progress** ⏱️ 1.5 hours
   - [ ] Implement LinearProgress
   - [ ] Implement CircularProgress
   - [ ] Add determinate/indeterminate modes
   - [ ] Add color variants
   - [ ] Theme tokens
   - [ ] Tests and stories

4. **Skeleton** ⏱️ 0.5 hours
   - [ ] Implement Skeleton component
   - [ ] Add variant options
   - [ ] Add animation
   - [ ] Theme tokens
   - [ ] Tests and stories

5. **Snackbar** ⏱️ 0.5 hours
   - [ ] Implement Snackbar component
   - [ ] Add positioning
   - [ ] Add auto-hide
   - [ ] Theme tokens
   - [ ] Tests and stories

---

### Day 9: Navigation Components

**Target Components**: 5 components, ~6 hours

1. **Breadcrumbs** ⏱️ 1 hour
   - [ ] Implement Breadcrumbs component
   - [ ] Add separator customization
   - [ ] Add collapse behavior
   - [ ] Theme tokens
   - [ ] Tests and stories

2. **Drawer** ⏱️ 2 hours
   - [ ] Implement Drawer component
   - [ ] Add anchor options
   - [ ] Add persistent/temporary modes
   - [ ] Theme tokens
   - [ ] Tests and stories

3. **Menu** ⏱️ 1.5 hours
   - [ ] Implement Menu component
   - [ ] Implement MenuItem component
   - [ ] Add nested menus
   - [ ] Theme tokens
   - [ ] Tests and stories

4. **Pagination** ⏱️ 1 hour
   - [ ] Implement Pagination component
   - [ ] Add size options
   - [ ] Add shape options
   - [ ] Theme tokens
   - [ ] Tests and stories

5. **Stepper** ⏱️ 1 hour (time allowing)
   - [ ] Implement Stepper component
   - [ ] Implement Step, StepLabel
   - [ ] Add orientation
   - [ ] Theme tokens
   - [ ] Tests and stories

---

### Day 10: Advanced Components

**Target Components**: 2-3 components, ~6 hours

1. **TransferList** ⏱️ 3 hours
   - [ ] Implement TransferList component
   - [ ] Add dual list functionality
   - [ ] Add search/filter
   - [ ] Theme tokens
   - [ ] Tests and stories

2. **BottomNavigation** ⏱️ 1.5 hours
   - [ ] Implement BottomNavigation component
   - [ ] Implement BottomNavigationAction
   - [ ] Add value selection
   - [ ] Theme tokens
   - [ ] Tests and stories

3. **SpeedDial** ⏱️ 1.5 hours
   - [ ] Implement SpeedDial component
   - [ ] Implement SpeedDialAction
   - [ ] Add direction options
   - [ ] Theme tokens
   - [ ] Tests and stories

**Note**: Timeline and TreeView are lower priority and can be phase 2.

---

## 🎯 Days 11-12: Build System & Pre-publish

### Day 11: Build System Enhancement

#### Task 11.1: Add CommonJS Support ⏱️ 30 min

**Edit**: `vite.config.ts`

```typescript
build: {
  lib: {
    entry: resolve(__dirname, 'src/index.ts'),
    name: 'MRSUI',
    formats: ['es', 'cjs'],
    fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`,
  },
}
```

**Validation**:
- [ ] Build generates both .js and .cjs files
- [ ] Both formats work correctly

---

#### Task 11.2: Add Bundle Analysis ⏱️ 20 min

```bash
npm install -D rollup-plugin-visualizer
```

**Edit**: `vite.config.ts`

```typescript
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    dts({...}),
    visualizer({
      filename: 'dist/stats.html',
      open: true,
    }),
  ],
});
```

**Run build and analyze**:
```bash
npm run build
# Opens stats.html in browser
```

**Validation**:
- [ ] Bundle visualizer works
- [ ] Bundle size is reasonable
- [ ] No unexpected dependencies bundled

---

#### Task 11.3: Optimize Package Exports ⏱️ 30 min

**Edit**: `package.json`

```json
{
  "exports": {
    ".": {
      "import": "./dist/index.js",
      "require": "./dist/index.cjs",
      "types": "./dist/index.d.ts"
    },
    "./theme": {
      "import": "./dist/theme/index.js",
      "require": "./dist/theme/index.cjs",
      "types": "./dist/theme/index.d.ts"
    },
    "./package.json": "./package.json"
  },
  "files": [
    "dist",
    "theme.json",
    "README.md",
    "LICENSE"
  ]
}
```

**Validation**:
- [ ] Package exports defined
- [ ] Files array includes necessary files

---

### Day 12: Pre-publish Preparation

#### Task 12.1: Create LICENSE File ⏱️ 5 min

```bash
cat > LICENSE << 'EOF'
MIT License

Copyright (c) 2025 MRS

Permission is hereby granted, free of charge, to any person obtaining a copy...
EOF
```

#### Task 12.2: Create CHANGELOG.md ⏱️ 30 min

```markdown
# Changelog

All notable changes to this project will be documented in this file.

## [0.1.0] - 2025-12-XX

### Added
- Initial release
- 44 components implemented
- Theme system with design tokens
- TypeScript support
- Storybook documentation
- Comprehensive test coverage

### Components
- Atoms: Button, IconButton, Fab, Avatar, Badge, Chip, Link, Typography, Icon, Divider, Paper, TextField, Select, Switch, Rating, Checkbox, Radio, Slider, Autocomplete, Tooltip, ButtonGroup, ToggleButtonGroup
- Molecules: Card, Alert, Table, Tabs, Accordion, Stack, Dialog, Progress, Skeleton, Snackbar, List
- Organisms: AppBar
```

#### Task 12.3: Update Version ⏱️ 5 min

```bash
# If ready for 1.0.0
npm version 1.0.0

# Or stay at 0.1.0 for beta
```

#### Task 12.4: Test Package Locally ⏱️ 30 min

```bash
# Pack the package
npm pack

# This creates mrs-ui-0.1.0.tgz

# Test in a separate project
mkdir ../test-mrs-ui
cd ../test-mrs-ui
npm init -y
npm install ../mrs-ui/mrs-ui-0.1.0.tgz react react-dom

# Create test file
cat > index.js << 'EOF'
import { Button } from '@mrs/ui';
console.log('Success!', Button);
EOF

# Test
node index.js
```

**Validation**:
- [ ] Package installs successfully
- [ ] Can import components
- [ ] No errors

---

## 🎯 Days 13-14: Quality Assurance

### Day 13: Testing & Validation

#### Task 13.1: Run Full Test Suite ⏱️ 1 hour

```bash
# Run all tests
npm test

# Run with coverage
npm run test:coverage

# Generate HTML coverage report
open coverage/lcov-report/index.html
```

**Checklist**:
- [ ] All tests pass
- [ ] Coverage ≥ 70% for all metrics
- [ ] No test warnings
- [ ] Test performance acceptable

---

#### Task 13.2: Accessibility Audit ⏱️ 2 hours

**Install tools**:
```bash
npm install -D @axe-core/react
```

**Add to setupTests.ts**:
```typescript
import { configureAxe } from '@axe-core/react';
```

**Run audits on key components**:
- Button family
- Form inputs
- Dialogs
- Navigation

**Checklist**:
- [ ] No critical accessibility issues
- [ ] ARIA attributes correct
- [ ] Keyboard navigation works
- [ ] Focus management correct
- [ ] Color contrast passes

---

#### Task 13.3: Visual Regression Setup ⏱️ 2 hours

**Option 1: Chromatic** (recommended)

```bash
# Already installed: chromatic

# Run Chromatic
npx chromatic --project-token=<token>
```

**Option 2: Storybook Test Runner**

```bash
# Start Storybook
npm run storybook

# In another terminal
npm run test-storybook
```

**Checklist**:
- [ ] Visual regression baseline created
- [ ] Can detect visual changes
- [ ] CI integration configured (optional)

---

### Day 14: Final Polish

#### Task 14.1: Performance Audit ⏱️ 1 hour

**Measure**:
- Bundle size: `ls -lh dist/`
- Tree shaking: Verify unused code removed
- Load time: Test import performance

**Optimize if needed**:
- Dynamic imports for large components
- Code splitting
- Remove unused dependencies

**Checklist**:
- [ ] Bundle size < 100KB (gzipped)
- [ ] Tree shaking works
- [ ] No performance bottlenecks

---

#### Task 14.2: Documentation Review ⏱️ 1 hour

**Review all documentation**:
- [ ] README.md accurate
- [ ] All docs/ files complete
- [ ] API documentation accurate
- [ ] Examples work
- [ ] Links not broken

---

#### Task 14.3: Create Example Application ⏱️ 2 hours

```bash
# Create example app
cd examples
npx create-react-app demo --template typescript
cd demo
npm install @mrs/ui
```

**Create example dashboard using components**

**Checklist**:
- [ ] Example app created
- [ ] Uses multiple components
- [ ] Demonstrates theme usage
- [ ] README with instructions

---

#### Task 14.4: Final Build & Smoke Test ⏱️ 30 min

```bash
# Clean and rebuild
rm -rf dist node_modules
npm install
npm run build

# Verify build
ls -la dist/
cat dist/index.d.ts | head -20

# Run all quality checks
npm run type-check
npm run lint
npm run format:check
npm test
npm run build-storybook
```

**Final Checklist**:
- [ ] Build succeeds
- [ ] No TypeScript errors
- [ ] No linting errors
- [ ] All tests pass
- [ ] Storybook builds
- [ ] Package ready to publish

---

## 🎉 Project Completion Checklist

### Environment & Setup
- [ ] All dependencies installed
- [ ] No dependency conflicts
- [ ] Build system works
- [ ] Test suite works
- [ ] Storybook works

### Code Quality
- [ ] No TypeScript errors
- [ ] No linting errors
- [ ] All files formatted
- [ ] Test coverage ≥ 70%
- [ ] All tests pass

### Architecture
- [ ] Documentation organized in docs/
- [ ] Project structure clean
- [ ] Utils and assets directories created
- [ ] Figma exports organized
- [ ] Component generator created

### Components
- [ ] All 44 components implemented
- [ ] All components have tests
- [ ] All components have stories
- [ ] All components use theme tokens
- [ ] All components exported correctly

### Build & Publish
- [ ] Both ES and CJS formats
- [ ] Bundle size optimized
- [ ] Package exports configured
- [ ] LICENSE added
- [ ] CHANGELOG created
- [ ] Version updated

### Quality Assurance
- [ ] Accessibility audit passed
- [ ] Visual regression setup
- [ ] Performance optimized
- [ ] Example application created
- [ ] Documentation complete

### Final Verification
- [ ] Package installs successfully
- [ ] Components work in test project
- [ ] Storybook deployed (optional)
- [ ] Ready for npm publish

---

## 📈 Progress Tracking

Use this table to track daily progress:

| Day | Date | Tasks Completed | Hours | Status | Notes |
|-----|------|----------------|-------|--------|-------|
| 1 | ___ | Environment Setup | ___ | ⚪ | |
| 2 | ___ | Build Verification | ___ | ⚪ | |
| 3 | ___ | Code Quality | ___ | ⚪ | |
| 4 | ___ | Arch Refactor 1 | ___ | ⚪ | |
| 5 | ___ | Arch Refactor 2 | ___ | ⚪ | |
| 6 | ___ | Components 1 | ___ | ⚪ | |
| 7 | ___ | Components 2 | ___ | ⚪ | |
| 8 | ___ | Components 3 | ___ | ⚪ | |
| 9 | ___ | Components 4 | ___ | ⚪ | |
| 10 | ___ | Components 5 | ___ | ⚪ | |
| 11 | ___ | Build Enhancement | ___ | ⚪ | |
| 12 | ___ | Pre-publish | ___ | ⚪ | |
| 13 | ___ | QA Part 1 | ___ | ⚪ | |
| 14 | ___ | QA Part 2 | ___ | ⚪ | |

**Status Legend**: ⚪ Not Started | 🔵 In Progress | 🟢 Complete | 🔴 Blocked

---

## 🚨 Blocker Resolution Process

If blocked:

1. **Document the blocker**
   - What is blocking?
   - Why is it blocking?
   - What have you tried?

2. **Search for solutions**
   - Check documentation
   - Search GitHub issues
   - Check Stack Overflow

3. **Ask for help**
   - Post in team chat
   - Create GitHub issue
   - Request code review

4. **Move forward**
   - Work on unblocked tasks
   - Come back to blocker later
   - Adjust timeline if needed

---

## 📞 Support Resources

- **Documentation**: `/docs/README.md`
- **MUI Docs**: https://mui.com/material-ui/
- **TypeScript**: https://www.typescriptlang.org/docs/
- **Testing Library**: https://testing-library.com/docs/react-testing-library/intro/
- **Storybook**: https://storybook.js.org/docs/react/get-started/introduction

---

**Plan Created**: December 19, 2025  
**Estimated Completion**: January 2, 2026  
**Status**: Ready to Execute  

🚀 **Let's build an amazing design system!**
