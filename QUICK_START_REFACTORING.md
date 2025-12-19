# ⚡ Quick Start - Refactoring Guide

**Status**: Pre-Refactoring  
**Created**: December 19, 2025  
**Time to Production**: 14 days

---

## 🎯 Current State Summary

| Aspect | Status | Action Needed |
|--------|--------|---------------|
| 📦 Dependencies | 🔴 **NOT INSTALLED** | Run `npm install` |
| 🏗️ Architecture | 🟢 Good | Minor cleanup |
| 🧩 Components | 🟡 55% (24/44) | Implement 20 more |
| 📚 Documentation | 🟡 Scattered | Consolidate to `/docs` |
| 🧪 Tests | 🟡 Partial | Add missing tests |
| 📦 Build | ⚠️ Untested | Verify works |
| 📖 Storybook | ⚠️ Untested | Verify works |

---

## 🚀 Immediate Next Steps (30 minutes)

### Step 1: Install Dependencies (10 min)

```bash
npm install
```

### Step 2: Fix React Conflict (5 min)

Edit `package.json` - **Remove** react and react-dom from `dependencies` section:

```json
{
  "dependencies": {
    "@mui/icons-material": "^7.2.0",
    "@mui/material": "^7.2.0",
    "@mui/x-date-pickers": "^7.0.0"
  }
}
```

Then run:
```bash
npm install
```

### Step 3: Add Missing Emotion Packages (5 min)

```bash
npm install -D @emotion/react @emotion/styled
```

### Step 4: Verify Setup (10 min)

```bash
# Check TypeScript
npm run type-check

# Try to build
npm run build

# Run tests
npm test

# Start Storybook
npm run storybook
```

---

## 📊 What's Already Done ✅

### Implemented Components (24)

**Atoms (17)**:
- Button, IconButton, Fab
- Avatar, Badge, Chip
- Typography, Icon, Divider, Paper
- Link, TextField, Select, Switch, Rating

**Molecules (7)**:
- Card, Alert, Table, Tabs
- Accordion, Stack

**Organisms (1)**:
- AppBar

### Infrastructure ✅
- ✅ Vite build system configured
- ✅ TypeScript with strict mode
- ✅ Jest + React Testing Library setup
- ✅ Storybook 8.1 configured
- ✅ ESLint + Prettier configured
- ✅ Theme system with design tokens
- ✅ Path aliases configured
- ✅ Comprehensive documentation (needs organization)

---

## 🔴 What's Missing

### Components (20 remaining)

**High Priority**:
- Checkbox, Radio
- Autocomplete, Slider
- Dialog, Progress, Skeleton, Snackbar
- List, ListItem
- Tooltip, Breadcrumbs

**Medium Priority**:
- ButtonGroup, ToggleButtonGroup
- Drawer, Menu, Pagination, Stepper

**Low Priority**:
- BottomNavigation, SpeedDial
- TransferList, Timeline, TreeView

### Quality Items
- Tests for Rating component
- Tests verification for TextField, Select, Switch
- Documentation consolidation
- Build system verification

---

## 📋 Two-Week Plan

### Week 1: Foundation
- **Day 1**: Environment setup ✓ (you start here)
- **Day 2**: Verify build & tests
- **Day 3**: Fix quality issues
- **Day 4-5**: Organize documentation & structure

### Week 2: Components & Polish
- **Day 6-7**: Implement 7 atomic components
- **Day 8**: Implement 6 molecule components
- **Day 9**: Implement 5 navigation components
- **Day 10**: Implement 2 advanced components
- **Day 11-12**: Build system & prepare for publish
- **Day 13-14**: Quality assurance & final testing

---

## 📁 Key Files to Know

### Configuration Files
```
package.json          - Dependencies and scripts
tsconfig.json        - TypeScript configuration
vite.config.ts       - Build configuration
jest.config.cjs      - Test configuration
.storybook/          - Storybook configuration
theme.json           - Design tokens (135KB!)
```

### Source Code
```
src/
├── components/
│   ├── atoms/        - Basic components
│   ├── molecules/    - Composite components
│   └── organisms/    - Complex components
├── theme/            - Theme provider and configuration
├── types/            - Shared TypeScript types
└── index.ts          - Main exports
```

### Documentation
```
REPOSITORY_AUDIT_REPORT.md      - Detailed audit
REFACTORING_ACTION_PLAN.md      - Step-by-step plan
IMPLEMENTATION_PLAN.md          - Original implementation plan
DESIGN_SYSTEM_RULES.md          - Design system guidelines
```

---

## 🛠️ Common Commands

```bash
# Development
npm run dev                 # Start dev server
npm run storybook          # Start Storybook

# Testing
npm test                   # Run tests
npm run test:watch         # Watch mode
npm run test:coverage      # With coverage

# Building
npm run build              # Build library
npm run build-storybook    # Build Storybook static

# Code Quality
npm run type-check         # TypeScript check
npm run lint               # Lint code
npm run lint:fix           # Auto-fix linting
npm run format             # Format code
npm run format:check       # Check formatting
```

---

## 🎨 Component Creation Pattern

### Using the Component Generator (after Day 5)

```bash
npm run create-component ComponentName atoms
```

### Manual Creation

```
src/components/atoms/ComponentName/
├── ComponentName.tsx        # Component implementation
├── ComponentName.test.tsx   # Unit tests
├── ComponentName.stories.tsx # Storybook stories
└── index.ts                 # Exports
```

### Component Template

```typescript
import React from 'react';
import { useTheme } from '@mui/material/styles';
import { ComponentName as MuiComponentName } from '@mui/material';

export interface ComponentNameProps {
  children?: React.ReactNode;
}

export const ComponentName: React.FC<ComponentNameProps> = ({ 
  children, 
  ...props 
}) => {
  const theme = useTheme();

  return (
    <MuiComponentName
      sx={{
        // Use theme tokens
        color: theme.palette.primary.main,
        borderRadius: theme.shape.custom?.rounded,
        padding: theme.spacing(2),
      }}
      {...props}
    >
      {children}
    </MuiComponentName>
  );
};
```

---

## ✅ Quality Checklist per Component

For each new component, ensure:

- [ ] Uses theme tokens (no hardcoded values)
- [ ] TypeScript types defined
- [ ] Props documented with JSDoc
- [ ] Unit tests written (70%+ coverage)
- [ ] Storybook story created
- [ ] Exported from index.ts
- [ ] Added to main exports (src/index.ts)
- [ ] Follows MRS design system rules
- [ ] Accessibility attributes (ARIA)
- [ ] Keyboard navigation works

---

## 🚨 Common Issues & Solutions

### Issue: "Cannot find module '@mui/material'"
**Solution**: Dependencies not installed
```bash
npm install
```

### Issue: Build fails with TypeScript errors
**Solution**: Run type check to see errors
```bash
npm run type-check
```

### Issue: Tests fail with "Cannot find module '@/...'"
**Solution**: Path aliases not working in Jest
- Check jest.config.cjs moduleNameMapper
- Verify tsconfig.json paths

### Issue: Storybook doesn't start
**Solution**: Check for port conflicts
```bash
# Kill process on port 6006
lsof -ti:6006 | xargs kill -9

# Start again
npm run storybook
```

### Issue: Theme tokens not working
**Solution**: Wrap component in ThemeProvider
```typescript
import { ThemeProvider } from '../../theme';

<ThemeProvider>
  <YourComponent />
</ThemeProvider>
```

---

## 📊 Success Metrics

### Current
- Components: 24/44 (55%)
- Test Coverage: Unknown (need to run)
- Documentation: Fragmented
- Build: Unverified

### Target (Day 14)
- Components: 44/44 (100%)
- Test Coverage: 70%+
- Documentation: Organized
- Build: Verified and publishable

---

## 🎓 Learning Resources

### MUI Documentation
- [Material-UI v7](https://mui.com/material-ui/)
- [Theme customization](https://mui.com/material-ui/customization/theming/)
- [Component API](https://mui.com/material-ui/api/)

### Testing
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Jest](https://jestjs.io/docs/getting-started)

### Storybook
- [Storybook for React](https://storybook.js.org/docs/react/get-started/introduction)
- [Writing stories](https://storybook.js.org/docs/react/writing-stories/introduction)

### Design Systems
- [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)
- [Design Tokens](https://css-tricks.com/what-are-design-tokens/)

---

## 💬 Need Help?

### Documentation
1. Read the audit report: `REPOSITORY_AUDIT_REPORT.md`
2. Follow the action plan: `REFACTORING_ACTION_PLAN.md`
3. Check design system rules: `DESIGN_SYSTEM_RULES.md`

### Debugging
1. Check console errors
2. Verify dependencies installed
3. Check file paths and imports
4. Look at existing working components for patterns

### Code Review
1. Compare with Button.tsx (reference implementation)
2. Check if theme tokens are used
3. Verify TypeScript types are complete
4. Ensure tests cover main functionality

---

## 🎯 Your First Task

**Start here** after reading this document:

```bash
# 1. Install dependencies
npm install

# 2. Fix React conflict (edit package.json as shown above)
npm install

# 3. Verify environment
npm run type-check
npm test
npm run build

# 4. Read the detailed plan
cat REFACTORING_ACTION_PLAN.md
```

**Then proceed to Day 1 tasks** in the Refactoring Action Plan.

---

## 📈 Track Your Progress

Create a file: `PROGRESS.md`

```markdown
# My Progress

## Day 1 - [Date]
- [x] Installed dependencies
- [x] Fixed React conflict
- [ ] Build verified
- [ ] Tests pass

Notes:
- Issue encountered: ...
- Solution: ...

Time spent: ___ hours
```

---

## 🎉 Motivation

You have:
- ✅ Solid architecture
- ✅ Professional tooling
- ✅ 55% of components done
- ✅ Theme system working
- ✅ Good documentation (needs organizing)

You need:
- 🔧 Environment setup (30 min)
- 🔧 Quality fixes (1 day)
- 🔧 20 more components (5 days)
- 🔧 Polish (2 days)

**You're closer than you think!** 🚀

---

**Created**: December 19, 2025  
**Last Updated**: December 19, 2025  
**Status**: Ready to start refactoring

**👉 Next**: Run `npm install` and follow Day 1 tasks!
