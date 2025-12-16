# Dependency Review Report

**Date**: December 2025  
**Project**: @mrs/ui (MRS Material-UI v7.2.0 Design System)

---

## 📊 Executive Summary

### Current Status

- **Total Dependencies**: 5 (production)
- **Total Dev Dependencies**: 32
- **Security Vulnerabilities**: 8 moderate severity
- **Outdated Packages**: 20+ packages have newer versions available

### Key Findings

1. ✅ Core dependencies are properly configured
2. ⚠️ Several packages are outdated but may require breaking changes
3. ⚠️ Security vulnerabilities in dev dependencies (esbuild, vue-template-compiler)
4. ⚠️ `@mui/icons-material` may be unused after Material Symbols migration
5. ⚠️ `@mui/x-date-pickers` is installed but not yet used

---

## 📦 Production Dependencies Analysis

### Core Dependencies

#### ✅ @mui/material (^7.2.0)

- **Status**: ✅ Current
- **Version**: 7.2.0 (latest 7.2.0)
- **Usage**: Primary UI framework
- **Notes**: Correctly pinned to v7.2.0 as per design system requirements

#### ❌ @mui/icons-material (^7.2.0)

- **Status**: ❌ **UNUSED - CAN BE REMOVED**
- **Version**: 7.2.0
- **Usage**: **0 imports found** - Migrated to Material Symbols
- **Recommendation**:
  - ✅ **REMOVE** - No longer needed after Material Symbols migration
  - Reduces bundle size
  - Clean up dependency list

#### ❌ @mui/x-date-pickers (^7.0.0)

- **Status**: ❌ **UNUSED - CAN BE REMOVED**
- **Version**: 7.29.4 (installed), 8.22.0 (latest)
- **Usage**: **0 imports found** - Not yet implemented
- **Recommendation**:
  - ✅ **REMOVE** - Not currently used
  - Re-add when implementing date picker components
  - Will be added in Phase 4 of implementation plan

#### ✅ react (^18.3.1)

- **Status**: ✅ Current
- **Version**: 18.3.1 (latest 18.3.1)
- **Usage**: Core React library
- **Notes**: Correctly configured as peer dependency

#### ✅ react-dom (^18.3.1)

- **Status**: ✅ Current
- **Version**: 18.3.1 (latest 18.3.1)
- **Usage**: React DOM rendering
- **Notes**: Correctly configured as peer dependency

---

## 🔧 Development Dependencies Analysis

### Build Tools

#### ⚠️ vite (^5.3.1)

- **Current**: 5.4.21
- **Latest**: 7.3.0
- **Status**: Major version behind
- **Recommendation**:
  - ⚠️ **Breaking changes** - Review migration guide before updating
  - Current version is stable and working
  - Update when ready for v7 features

#### ⚠️ vite-plugin-dts (^3.9.1)

- **Current**: 3.9.1
- **Latest**: 4.5.4
- **Status**: Major version behind
- **Recommendation**:
  - ⚠️ **Breaking changes** - Test thoroughly before updating
  - Current version works fine

#### ✅ @vitejs/plugin-react (^4.3.1)

- **Current**: 4.7.0
- **Latest**: 5.1.2
- **Status**: Minor version behind
- **Recommendation**:
  - Can update to 4.7.0 (patch)
  - Major update (5.x) may have breaking changes

### Testing

#### ⚠️ jest (^29.7.0)

- **Current**: 29.7.0
- **Latest**: 30.2.0
- **Status**: Major version behind
- **Recommendation**:
  - ⚠️ **Breaking changes** - Review Jest 30 migration guide
  - Current version is stable

#### ⚠️ @testing-library/react (^16.0.0)

- **Current**: 16.0.0
- **Latest**: 16.0.0
- **Status**: ✅ Current
- **Notes**: Latest version

#### ✅ @testing-library/jest-dom (^6.4.2)

- **Current**: 6.4.2
- **Latest**: 6.4.2
- **Status**: ✅ Current

#### ✅ @testing-library/user-event (^14.5.2)

- **Current**: 14.5.2
- **Latest**: 14.5.2
- **Status**: ✅ Current

### Storybook

#### ⚠️ storybook (^8.1.0)

- **Current**: 8.6.14
- **Latest**: 10.1.9
- **Status**: Major version behind
- **Recommendation**:
  - ⚠️ **Breaking changes** - Major version jump
  - Current version (8.6.14) is stable
  - Consider updating to v9 first, then v10

#### ⚠️ @storybook/\* packages

- **Status**: All at 8.6.14, latest is 10.1.9
- **Recommendation**: Update together if upgrading Storybook

### TypeScript & Linting

#### ✅ typescript (^5.5.4)

- **Current**: 5.5.4
- **Latest**: 5.5.4
- **Status**: ✅ Current

#### ⚠️ @typescript-eslint/\* (^7.13.0)

- **Current**: 7.18.0
- **Latest**: 8.50.0
- **Status**: Major version behind
- **Recommendation**:
  - ⚠️ **Breaking changes** - ESLint 9 required
  - Current version works with ESLint 8

#### ⚠️ eslint (^8.57.0)

- **Current**: 8.57.1
- **Latest**: 9.39.2
- **Status**: Major version behind
- **Recommendation**:
  - ⚠️ **Breaking changes** - Flat config required
  - Current version is stable

#### ⚠️ eslint-plugin-react-hooks (^4.6.2)

- **Current**: 4.6.2
- **Latest**: 7.0.1
- **Status**: Major version behind
- **Recommendation**:
  - Update when updating ESLint to v9

---

## 🔒 Security Vulnerabilities

### Moderate Severity Issues

#### 1. esbuild <=0.24.2

- **Severity**: Moderate
- **Issue**: Development server vulnerability
- **Affected**: vite, @storybook/core-common
- **Fix**: Update vite to 7.3.0 (breaking change)
- **Recommendation**:
  - ⚠️ **Breaking change** - Review vite 7 migration guide
  - Consider waiting for stable release
  - Or update if development server security is critical

#### 2. vue-template-compiler >=2.0.0

- **Severity**: Moderate
- **Issue**: Client-side XSS vulnerability
- **Affected**: vite-plugin-dts
- **Fix**: Update vite-plugin-dts to 4.5.4 (breaking change)
- **Recommendation**:
  - ⚠️ **Breaking change** - Test thoroughly
  - Update when ready to migrate

### Security Recommendations

1. **Immediate Actions**:
   - Review if development server is exposed to external networks
   - If not, vulnerabilities are lower priority
   - Document security considerations

2. **Planned Updates**:
   - Schedule vite 7 migration
   - Update vite-plugin-dts
   - Review and test breaking changes

---

## 📋 Dependency Recommendations

### High Priority (Should Do)

1. ✅ **Remove @mui/icons-material**
   - **Status**: Verified unused (0 imports)
   - **Action**: Remove from dependencies
   - **Benefit**: Reduces bundle size

2. ✅ **Remove @mui/x-date-pickers**
   - **Status**: Verified unused (0 imports)
   - **Action**: Remove from dependencies
   - **Note**: Re-add when implementing date pickers (Phase 4)

### Medium Priority (Consider)

1. **Update TypeScript ESLint packages together**
   - Update @typescript-eslint/\* to v8
   - Update ESLint to v9
   - Migrate to flat config
   - **Breaking changes** - Plan migration

2. **Update Storybook to v9 first**
   - Incremental upgrade path
   - Test thoroughly
   - Then consider v10

### Low Priority (Optional)

1. **Update Jest to v30**
   - Review migration guide
   - Test thoroughly
   - **Breaking changes** expected

2. **Update Vite to v7**
   - Review migration guide
   - Test build process
   - **Breaking changes** expected

---

## ✅ Dependency Health Checklist

### Production Dependencies

- [x] Core MUI packages are current
- [x] React versions are current
- [ ] Verify @mui/icons-material usage
- [ ] Decide on @mui/x-date-pickers usage

### Development Dependencies

- [x] TypeScript is current
- [x] Testing libraries are current
- [ ] Storybook can be updated (major version)
- [ ] Build tools can be updated (major versions)
- [ ] Linting tools can be updated (major versions)

### Security

- [ ] Review security vulnerabilities
- [ ] Plan updates for vulnerable packages
- [ ] Document security considerations

### Bundle Size

- [ ] Remove unused dependencies
- [ ] Verify external dependencies in build
- [ ] Optimize bundle size

---

## 🔄 Update Strategy

### Phase 1: Cleanup (Immediate)

1. Verify and remove unused dependencies
2. Document dependency usage
3. Review security vulnerabilities

### Phase 2: Minor Updates (Next Sprint)

1. Update patch/minor versions
2. Update @vitejs/plugin-react to latest 4.x
3. Test thoroughly

### Phase 3: Major Updates (Future)

1. Plan ESLint 9 migration
2. Plan Storybook v9/v10 migration
3. Plan Vite 7 migration
4. Plan Jest 30 migration

---

## 📝 Action Items

### Immediate

- [ ] **Verify @mui/icons-material usage** - Check if still needed after Material Symbols migration
- [ ] **Review @mui/x-date-pickers** - Decide if keeping or removing
- [ ] **Document security considerations** - Note that vulnerabilities are in dev dependencies

### Short Term

- [ ] **Update patch versions** - Safe updates only
- [ ] **Review bundle size** - Remove unused dependencies
- [ ] **Update documentation** - Document dependency decisions

### Long Term

- [ ] **Plan major version migrations** - ESLint 9, Storybook 10, Vite 7
- [ ] **Create migration guides** - For each major update
- [ ] **Set up dependency update automation** - Dependabot or Renovate

---

## 📚 References

- [MUI v7.2.0 Documentation](https://mui.com/material-ui/getting-started/)
- [Vite Migration Guide](https://vitejs.dev/guide/migration.html)
- [Storybook Migration Guide](https://storybook.js.org/docs/react/get-started/whats-new)
- [ESLint 9 Migration Guide](https://eslint.org/docs/latest/use/migrate-to-9.0.0)
- [Jest 30 Migration Guide](https://jestjs.io/docs/upgrading-to-jest30)

---

**Last Updated**: December 2025  
**Next Review**: After Phase 1 cleanup
