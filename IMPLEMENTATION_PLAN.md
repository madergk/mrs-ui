# Component Library Implementation Plan

**Date**: December 2025  
**Figma Source**: [Components Overview](https://www.figma.com/design/ESNP5KunFotGObfcuXZ9Op/MRS---Material-UI-v.7.2.0?node-id=11220-174347&m=dev)  
**Status**: Planning Phase

---

## 🎯 Objective

Implement a comprehensive Material-UI v7.2.0 component library based on the Figma "Components Overview" design, following the MRS Design System rules and leveraging the existing `theme.json` token structure.

---

## 📊 Structure Analysis

The Figma design contains **6 main sections** with **44 total components**:

### 1. **Inputs** (14 components)
- Autocomplete
- Button
- ButtonGroup
- Checkbox
- Radio
- Fab (Floating Action Button)
- Rating
- Slider
- Switch
- Select
- TextField
- Multiline (TextField variant)
- TransferList
- ToggleButtonGroup

### 2. **Data Display** (10 components)
- Avatar
- Badge
- Chip
- Date/Time (DateRangeCalendar, MobileDateTimePicker)
- Divider
- Icon
- List (with ListItem)
- Table
- Tooltip
- Typography

### 3. **Feedback** (5 components)
- Alert
- Dialog
- Progress (Linear, Circular)
- Skeleton
- Snackbar

### 4. **Surfaces** (4 components)
- Accordion
- AppBar
- Card
- Paper

### 5. **Navigation** (9 components)
- BottomNavigation
- Link
- Breadcrumbs
- Tabs
- Drawer
- Menu (MenuList)
- SpeedDial
- Pagination
- Stepper

### 6. **Layout** (2 components)
- Timeline
- TreeView

---

## 🏗️ Architecture Strategy

### Component Organization (Atomic Design)

```
src/
  components/
    atoms/          # Basic building blocks
    molecules/      # Simple component combinations
    organisms/      # Complex component groups
    templates/      # Page-level layouts (future)
```

### Dependency Mapping

**Foundation Layer** (No dependencies):
- Typography
- Icon
- Divider
- Paper

**Basic Components** (Depend on Foundation):
- Button
- Chip
- Avatar
- Badge
- Link

**Form Components** (Depend on Basic):
- TextField
- Select
- Checkbox
- Radio
- Switch
- Autocomplete
- Slider
- Rating

**Composite Components** (Depend on Multiple):
- ButtonGroup
- ToggleButtonGroup
- TransferList
- List (with ListItem)
- Table
- Card
- Accordion

**Complex Components** (Depend on Many):
- Dialog
- Drawer
- Menu
- Date/Time Pickers
- TransferList

---

## 📋 Implementation Phases

### **Phase 1: Foundation & Setup** (Week 1)

**Goal**: Establish project structure and implement foundational components

#### 1.1 Project Setup
- [ ] Initialize React + TypeScript project structure
- [ ] Configure Material-UI v7.2.0
- [ ] Set up theme provider with `theme.json`
- [ ] Configure build system (Vite recommended)
- [ ] Set up Storybook for documentation
- [ ] Configure ESLint + Prettier
- [ ] Set up testing framework (Jest + Testing Library)

#### 1.2 Foundation Components (Atoms)
- [ ] **Typography** - Text display component
- [ ] **Icon** - Icon wrapper component
- [ ] **Divider** - Separator component
- [ ] **Paper** - Surface container

**Why First**: These are the building blocks that other components depend on.

**Token Mapping**:
- Typography → `theme.typography.*`
- Icon → `theme.palette.icon.*`
- Divider → `theme.palette.divider`
- Paper → `theme.palette._components.paper.*`

---

### **Phase 2: Basic Interactive Components** (Week 2)

**Goal**: Implement core interactive elements

#### 2.1 Button Family
- [ ] **Button** - Primary action component
  - Variants: contained, outlined, text
  - Sizes: small, medium, large
  - States: default, hover, focus, disabled
- [ ] **Fab** - Floating Action Button
- [ ] **IconButton** - Icon-only button

**Token Mapping**:
- Button → `theme.palette.primary.*`, `theme.palette.primary._states.*`
- Border radius → `theme.shape.rounded` (pill shape)
- Spacing → `theme.spacing()` function

#### 2.2 Display Components
- [ ] **Avatar** - User/profile image
- [ ] **Badge** - Notification indicator
- [ ] **Chip** - Tag/label component
- [ ] **Link** - Text link component

**Token Mapping**:
- Avatar → `theme.palette.primary.main` (default)
- Badge → `theme.palette.error.main`
- Chip → `theme.palette.action.*`

---

### **Phase 3: Form Inputs** (Week 3-4)

**Goal**: Implement all form input components

#### 3.1 Text Inputs
- [ ] **TextField** - Text input field
  - Variants: standard, filled, outlined
  - States: default, focus, error, disabled
- [ ] **Multiline** - TextField with multiple lines
- [ ] **Autocomplete** - Text input with suggestions

**Token Mapping**:
- TextField → `theme.palette._components.input.*`
- Border colors → `theme.palette._components.input.{variant}.enabledBorder`
- Error state → `theme.palette.error.main`

#### 3.2 Selection Inputs
- [ ] **Select** - Dropdown selection
- [ ] **Checkbox** - Binary selection
- [ ] **Radio** - Single choice selection
- [ ] **Switch** - Toggle switch
- [ ] **ToggleButtonGroup** - Group of toggle buttons

**Token Mapping**:
- Switch → `theme.palette._components.switch.*`
- Checkbox/Radio → `theme.palette.primary._states.*`

#### 3.3 Range Inputs
- [ ] **Slider** - Range selection
- [ ] **Rating** - Star rating input

**Token Mapping**:
- Rating → `theme.palette._components.rating.*`

#### 3.4 Complex Inputs
- [ ] **TransferList** - Dual list selection
- [ ] **ButtonGroup** - Group of buttons

---

### **Phase 4: Data Display** (Week 5)

**Goal**: Implement components for displaying data

#### 4.1 Lists & Tables
- [ ] **List** - Vertical list container
- [ ] **ListItem** - List item component
- [ ] **Table** - Data table
  - TableHead, TableBody, TableRow, TableCell

**Token Mapping**:
- Table → `theme.palette._components.table.border`

#### 4.2 Date/Time
- [ ] **DateRangeCalendar** - Date range picker
- [ ] **MobileDateTimePicker** - Mobile date/time picker

**Note**: These may require `@mui/x-date-pickers` package

---

### **Phase 5: Feedback Components** (Week 6)

**Goal**: Implement user feedback mechanisms

#### 5.1 Alerts & Notifications
- [ ] **Alert** - Status message component
  - Variants: filled, outlined, standard
  - Severities: error, warning, info, success
- [ ] **Snackbar** - Toast notification

**Token Mapping**:
- Alert → `theme.palette._components.alert.{severity}.{variant}.*`

#### 5.2 Progress Indicators
- [ ] **Progress (Linear)** - Horizontal progress bar
- [ ] **Progress (Circular)** - Circular progress indicator
- [ ] **Skeleton** - Loading placeholder

#### 5.3 Dialogs
- [ ] **Dialog** - Modal dialog component
  - DialogTitle, DialogContent, DialogActions

---

### **Phase 6: Surfaces & Containers** (Week 7)

**Goal**: Implement container and surface components

- [ ] **Card** - Content card container
  - CardHeader, CardMedia, CardContent, CardActions
- [ ] **Accordion** - Expandable content section
- [ ] **AppBar** - Application header bar

**Token Mapping**:
- Card → `theme.shape.md` (border radius)
- Elevation → `theme.palette._components.elevation.*`

---

### **Phase 7: Navigation Components** (Week 8)

**Goal**: Implement navigation and wayfinding components

#### 7.1 Navigation
- [ ] **BottomNavigation** - Mobile bottom nav
- [ ] **Tabs** - Tab navigation
- [ ] **Breadcrumbs** - Navigation path
- [ ] **Drawer** - Side navigation panel
- [ ] **Menu** - Dropdown menu
- [ ] **SpeedDial** - Floating action menu

#### 7.2 Pagination & Steppers
- [ ] **Pagination** - Page navigation
- [ ] **Stepper** - Step indicator

---

### **Phase 8: Advanced Layout** (Week 9)

**Goal**: Implement complex layout components

- [ ] **Timeline** - Event timeline display
- [ ] **TreeView** - Hierarchical tree structure

**Note**: These may require custom implementation or additional MUI packages

---

## 🎨 Token Integration Strategy

### Current Theme Structure

The `theme.json` already contains:
- ✅ Color schemes (light/dark)
- ✅ Typography scale
- ✅ Spacing array
- ✅ Shape (border radius)
- ✅ Component-specific tokens (`_components.*`)
- ✅ State tokens (`_states.*`)

### Token Consumption Pattern

```typescript
// Example: Button component
import { Button as MuiButton, ButtonProps } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export const Button = (props: ButtonProps) => {
  const theme = useTheme();
  
  return (
    <MuiButton
      {...props}
      sx={{
        // Use semantic tokens
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        borderRadius: theme.shape.rounded,
        padding: theme.spacing(1, 2),
        
        // Use state tokens
        '&:hover': {
          backgroundColor: theme.palette.primary._states.hover,
        },
        '&:focus-visible': {
          outline: `2px solid ${theme.palette.primary._states.focusVisible}`,
        },
      }}
    />
  );
};
```

### Missing Tokens to Add

Based on component analysis, we may need to add:

1. **Component-specific tokens** (if not in theme.json):
   - `_components.button.*` (sizes, variants)
   - `_components.textField.*` (heights, padding)
   - `_components.card.*` (padding, elevation)

2. **Animation tokens**:
   - Transition durations
   - Easing functions

---

## 📁 File Structure

### Component File Template

```
src/
  components/
    atoms/
      Button/
        Button.tsx           # Component implementation
        Button.test.tsx      # Unit tests
        Button.stories.tsx   # Storybook stories
        Button.types.ts      # TypeScript types
        index.ts             # Public exports
```

### Example Component Structure

```typescript
// Button.tsx
import { Button as MuiButton, ButtonProps } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export interface CustomButtonProps extends ButtonProps {
  // Custom props if needed
}

export const Button = ({ 
  children, 
  ...props 
}: CustomButtonProps) => {
  const theme = useTheme();
  
  return (
    <MuiButton
      {...props}
      sx={{
        // Token-based styling
        borderRadius: theme.shape.rounded,
        textTransform: 'none', // Follow design system rules
        ...props.sx,
      }}
    >
      {children}
    </MuiButton>
  );
};
```

---

## ✅ Quality Assurance Checklist

For each component:

### Design Consistency
- [ ] Visual appearance matches Figma design
- [ ] Colors use theme tokens (no hardcoded values)
- [ ] Typography uses theme scale
- [ ] Spacing follows 8px grid
- [ ] Border radius uses shape tokens
- [ ] States (hover, focus, disabled) implemented
- [ ] Dark mode support verified

### Code Quality
- [ ] TypeScript types defined
- [ ] Props properly documented (JSDoc)
- [ ] No hardcoded values (use tokens)
- [ ] Follows naming conventions
- [ ] Accessibility attributes (ARIA)
- [ ] Keyboard navigation works
- [ ] Screen reader tested

### Testing
- [ ] Unit tests written
- [ ] Component tests (rendering, interactions)
- [ ] Accessibility tests
- [ ] Visual regression tests (if Chromatic configured)

### Documentation
- [ ] Storybook story created
- [ ] Usage examples documented
- [ ] Props table generated
- [ ] Design tokens used documented

---

## 🔄 Implementation Workflow

### For Each Component:

1. **Extract from Figma**
   - Use Figma MCP to get design context
   - Extract component node ID
   - Note variants, states, sizes

2. **Map to Tokens**
   - Identify which theme tokens to use
   - Check if tokens exist in `theme.json`
   - Add missing tokens if needed

3. **Create Component**
   - Set up file structure
   - Implement component with token consumption
   - Add TypeScript types
   - Follow component patterns

4. **Style with Theme**
   - Use `sx` prop for styling
   - Reference theme tokens
   - Implement all states
   - Add responsive behavior

5. **Test & Document**
   - Write unit tests
   - Create Storybook story
   - Test accessibility
   - Document usage

6. **Validate**
   - Visual comparison with Figma
   - Token usage verification
   - Accessibility audit
   - Code review

---

## 📦 Dependencies Required

### Core
```json
{
  "@mui/material": "^7.2.0",
  "@mui/icons-material": "^7.2.0",
  "react": "^18.0.0",
  "react-dom": "^18.0.0"
}
```

### Date/Time Pickers
```json
{
  "@mui/x-date-pickers": "^7.0.0"
}
```

### Development
```json
{
  "@storybook/react": "^7.0.0",
  "@testing-library/react": "^14.0.0",
  "@testing-library/jest-dom": "^6.0.0",
  "typescript": "^5.0.0",
  "vite": "^5.0.0"
}
```

---

## 🎯 Success Criteria

### Phase Completion Criteria

Each phase is complete when:
1. ✅ All components in phase are implemented
2. ✅ All components use theme tokens (no hardcoded values)
3. ✅ All components have Storybook stories
4. ✅ All components have unit tests (80%+ coverage)
5. ✅ All components pass accessibility audit
6. ✅ Visual match with Figma design verified
7. ✅ Dark mode support confirmed
8. ✅ Documentation complete

### Overall Success Criteria

The component library is complete when:
1. ✅ All 44 components implemented
2. ✅ Full Storybook documentation
3. ✅ TypeScript types exported
4. ✅ Build system configured
5. ✅ Published to npm (or internal registry)
6. ✅ Design system documentation complete
7. ✅ Migration guide available

---

## 🚀 Quick Start Guide

### For Developers

1. **Set up project**:
   ```bash
   npm install
   npm run dev
   ```

2. **View components**:
   ```bash
   npm run storybook
   ```

3. **Run tests**:
   ```bash
   npm test
   ```

4. **Build library**:
   ```bash
   npm run build
   ```

### For Designers

1. **Check component implementation**:
   - Open Storybook
   - Compare with Figma design
   - Verify token usage

2. **Request changes**:
   - Update Figma design
   - Document changes in issue
   - Reference Figma node ID

---

## 📝 Notes & Considerations

### Design System Alignment
- All components must follow MRS Design System Rules
- Token-first approach (no hardcoded values)
- Consistent naming conventions
- Accessibility-first implementation

### Performance
- Code splitting for large components
- Tree shaking support
- Lazy loading for complex components (Date pickers, etc.)

### Browser Support
- Modern browsers (last 2 versions)
- Mobile responsive (iOS Safari, Chrome Android)
- Accessibility tools (screen readers)

### Future Enhancements
- Animation system
- Custom icon library (if needed)
- Advanced theming (multiple themes)
- Component composition patterns
- Design token validation tooling

---

## 🔗 Related Documents

- [Design System Rules](./DESIGN_SYSTEM_RULES.md)
- [Theme Structure](./theme.json)
- [Figma Design File](https://www.figma.com/design/ESNP5KunFotGObfcuXZ9Op/MRS---Material-UI-v.7.2.0)

---

**Last Updated**: December 2025  
**Next Review**: After Phase 1 completion  
**Maintained By**: MRS Design System Team

