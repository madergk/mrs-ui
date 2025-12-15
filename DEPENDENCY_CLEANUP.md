# Dependency Cleanup Plan

## Summary

After reviewing dependencies, two packages are confirmed unused and can be safely removed:

1. **@mui/icons-material** - Replaced by Material Symbols
2. **@mui/x-date-pickers** - Not yet implemented

## Action Plan

### Step 1: Remove Unused Dependencies

```bash
npm uninstall @mui/icons-material @mui/x-date-pickers
```

### Step 2: Update package.json

The dependencies section should become:

```json
"dependencies": {
  "@mui/material": "^7.2.0",
  "react": "^18.3.1",
  "react-dom": "^18.3.1"
}
```

### Step 3: Update vite.config.ts

Remove from external dependencies:

```typescript
rollupOptions: {
  external: ['react', 'react-dom', '@mui/material'],
  // Remove: '@mui/icons-material', '@mui/x-date-pickers'
}
```

### Step 4: Verify Build

```bash
npm run build
npm run type-check
```

### Step 5: Update Documentation

- Update README.md if it mentions these packages
- Update IMPLEMENTATION_PLAN.md to note date pickers will be added later
- Document Material Symbols migration

## Benefits

1. **Reduced Bundle Size**: Removes unused dependencies
2. **Cleaner Dependencies**: Only includes what's actually used
3. **Faster Installs**: Fewer packages to download
4. **Clearer Intent**: Dependencies reflect actual usage

## When to Re-add

### @mui/x-date-pickers
- **When**: Phase 4 - Data Display components
- **Components**: DateRangeCalendar, MobileDateTimePicker
- **Version**: Use latest v7.x or v8.x depending on MUI compatibility

### @mui/icons-material
- **When**: Only if specific icons are needed that Material Symbols doesn't provide
- **Note**: Material Symbols should cover all use cases

## Verification

After removal, verify:
- ✅ Build succeeds
- ✅ Type checking passes
- ✅ Tests pass
- ✅ Storybook works
- ✅ No runtime errors

---

**Date**: December 2025  
**Status**: Ready to execute

