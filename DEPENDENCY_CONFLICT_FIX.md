# Dependency Conflict Resolution

## Issue

The project had dependency conflicts after running `npm audit fix`:

1. **Vite version conflict**:
   - `vite@7.3.0` was installed (from audit fix)
   - `@storybook/react-vite@8.6.14` requires `vite@^4.0.0 || ^5.0.0 || ^6.0.0`
   - **Conflict**: Vite 7 is not compatible with Storybook 8

2. **Storybook test-runner conflict**:
   - `@storybook/test-runner@0.24.2` requires `storybook@^10.0.0`
   - Project uses `storybook@8.6.14`
   - **Conflict**: Test-runner 0.24.2 is for Storybook 10

## Solution

### Fixed Versions

1. **Vite**: Downgraded from `^7.3.0` → `^6.0.0`
   - Compatible with Storybook 8
   - Latest stable version in v6 range

2. **vite-plugin-dts**: Downgraded from `^4.5.4` → `^3.9.1`
   - Compatible with Vite 6
   - Previous working version

3. **@storybook/test-runner**: Downgraded from `^0.24.2` → `^0.16.0`
   - Compatible with Storybook 8
   - Matches original version in package.json

### Changes Made

```json
{
  "devDependencies": {
    "vite": "^6.0.0", // Was: ^7.3.0
    "vite-plugin-dts": "^3.9.1", // Was: ^4.5.4
    "@storybook/test-runner": "^0.16.0" // Was: ^0.24.2
  }
}
```

## Verification

✅ Installation successful
✅ No dependency conflicts
✅ 7 moderate security vulnerabilities remain (dev dependencies only)

## Security Note

The security vulnerabilities in `esbuild` and `vue-template-compiler` remain because:

- They are in **dev dependencies only** (lower risk)
- Fixing them requires major version updates (breaking changes)
- Current versions are stable and working

## Future Updates

When ready to upgrade:

1. **Storybook 10** → Supports Vite 7
2. **Vite 7** → After Storybook upgrade
3. **vite-plugin-dts 4.x** → After Vite 7 upgrade

---

**Date**: December 2025  
**Status**: ✅ Resolved  
**Action**: Dependencies reinstalled successfully
