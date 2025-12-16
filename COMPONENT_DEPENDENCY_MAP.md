# Component Dependency Map

**Quick Reference**: Component implementation order and dependencies

---

## 📊 Dependency Graph

```
Foundation Layer (No Dependencies)
├── Typography
├── Icon
├── Divider
└── Paper

Basic Components (Depend on Foundation)
├── Button
│   ├── IconButton
│   └── Fab
├── Chip
├── Avatar
├── Badge
└── Link

Form Components (Depend on Basic)
├── TextField
│   └── Multiline
├── Select
├── Autocomplete (uses TextField)
├── Checkbox
├── Radio
├── Switch
├── Slider
└── Rating

Composite Components (Depend on Multiple)
├── ButtonGroup (uses Button)
├── ToggleButtonGroup (uses Button)
├── List
│   └── ListItem
├── Table
│   ├── TableHead
│   ├── TableBody
│   ├── TableRow
│   └── TableCell
├── Card
│   ├── CardHeader
│   ├── CardMedia
│   ├── CardContent
│   └── CardActions
└── Accordion

Complex Components (Depend on Many)
├── Dialog
│   ├── DialogTitle
│   ├── DialogContent
│   └── DialogActions
├── Drawer
├── Menu
│   └── MenuList
├── DateRangeCalendar
├── MobileDateTimePicker
└── TransferList

Feedback Components
├── Alert
├── Snackbar
├── Progress (Linear)
├── Progress (Circular)
└── Skeleton

Navigation Components
├── BottomNavigation
├── Tabs
├── Breadcrumbs
├── SpeedDial
├── Pagination
└── Stepper

Layout Components
├── Timeline
└── TreeView
```

---

## 🎯 Implementation Priority Matrix

### High Priority (Foundation)

**Why**: Other components depend on these

- Typography
- Icon
- Divider
- Paper

### Medium Priority (Core Functionality)

**Why**: Most common use cases

- Button
- TextField
- Card
- Alert
- Dialog

### Lower Priority (Specialized)

**Why**: Used less frequently

- TransferList
- Timeline
- TreeView
- SpeedDial

---

## 🔗 Component Relationships

### Button Family

```
Button (base)
├── IconButton
├── Fab
├── ButtonGroup
└── ToggleButtonGroup
```

### Form Input Family

```
TextField (base)
├── Multiline
└── Autocomplete

Select (independent)
Checkbox (independent)
Radio (independent)
Switch (independent)
Slider (independent)
Rating (independent)
```

### Container Family

```
Paper (base)
├── Card
│   ├── CardHeader
│   ├── CardMedia
│   ├── CardContent
│   └── CardActions
└── Dialog
    ├── DialogTitle
    ├── DialogContent
    └── DialogActions
```

### List Family

```
List (base)
└── ListItem

Table (independent)
├── TableHead
├── TableBody
├── TableRow
└── TableCell
```

---

## 📋 Quick Implementation Checklist

### Phase 1: Foundation

- [ ] Typography
- [ ] Icon
- [ ] Divider
- [ ] Paper

### Phase 2: Basic

- [ ] Button
- [ ] IconButton
- [ ] Fab
- [ ] Chip
- [ ] Avatar
- [ ] Badge
- [ ] Link

### Phase 3: Forms

- [ ] TextField
- [ ] Multiline
- [ ] Select
- [ ] Autocomplete
- [ ] Checkbox
- [ ] Radio
- [ ] Switch
- [ ] Slider
- [ ] Rating

### Phase 4: Composite

- [ ] ButtonGroup
- [ ] ToggleButtonGroup
- [ ] List
- [ ] ListItem
- [ ] Table
- [ ] Card
- [ ] Accordion

### Phase 5: Feedback

- [ ] Alert
- [ ] Snackbar
- [ ] Progress (Linear)
- [ ] Progress (Circular)
- [ ] Skeleton
- [ ] Dialog

### Phase 6: Navigation

- [ ] BottomNavigation
- [ ] Tabs
- [ ] Breadcrumbs
- [ ] Drawer
- [ ] Menu
- [ ] SpeedDial
- [ ] Pagination
- [ ] Stepper

### Phase 7: Advanced

- [ ] DateRangeCalendar
- [ ] MobileDateTimePicker
- [ ] TransferList
- [ ] Timeline
- [ ] TreeView

---

## 🎨 Token Usage by Component Category

### Foundation Components

- **Typography**: `theme.typography.*`
- **Icon**: `theme.palette.icon.*`
- **Divider**: `theme.palette.divider`
- **Paper**: `theme.palette._components.paper.*`

### Interactive Components

- **Button**: `theme.palette.primary.*`, `theme.palette.primary._states.*`
- **TextField**: `theme.palette._components.input.*`
- **Switch**: `theme.palette._components.switch.*`

### Feedback Components

- **Alert**: `theme.palette._components.alert.{severity}.{variant}.*`
- **Progress**: `theme.palette.primary.main`

### Container Components

- **Card**: `theme.shape.md`, `theme.palette._components.elevation.*`
- **Dialog**: `theme.palette._components.elevation.*`

---

**Last Updated**: December 2025
