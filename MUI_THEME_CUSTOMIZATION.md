# MUI Theme Customization Guide

## Overview

This document describes the comprehensive Material-UI (MUI) v7.2.0 theme customization implemented in the MRS Design System. All customizations maintain the MRS brand identity (Verones palette and Nunito typography) while following MUI best practices.

## Customization Areas

### 1. Typography

**Font Family**: Nunito (preserved from MRS Design System)

```typescript
typography: {
  fontFamily: 'Nunito, Helvetica, Arial, sans-serif',
  fontSize: 14, // Base font size
  htmlFontSize: 16, // HTML element font size for rem calculations
  // All variants (h1-h6, body1, body2, etc.) use Nunito
}
```

**Reference**: [MUI Typography Documentation](https://mui.com/material-ui/customization/typography/)

**Key Features**:
- All typography variants use Nunito font family
- Base font size: 14px
- HTML font size: 16px (for rem calculations)
- Supports responsive font sizes
- Custom variants can be added

**Usage**:
```tsx
<Typography variant="h1">Heading 1</Typography>
<Typography variant="body1">Body text</Typography>
```

---

### 2. Spacing

**Format**: Array-based spacing with function conversion

```typescript
spacing: [0, 4, 8, 12, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96]
```

**Reference**: [MUI Spacing Documentation](https://mui.com/material-ui/customization/spacing/)

**Key Features**:
- 4px-based spacing scale (MRS Design System)
- Array-based with automatic function conversion
- Supports negative values
- Interpolation for non-integer values
- Multiple arity support (up to 4 arguments)

**Usage**:
```tsx
// Single value
sx={{ padding: theme.spacing(2) }} // 8px

// Multiple values
sx={{ padding: theme.spacing(1, 2) }} // 4px 8px

// With auto
sx={{ margin: theme.spacing(1, 'auto') }} // 4px auto
```

**Spacing Scale**:
- `spacing(0)` = 0px
- `spacing(1)` = 4px
- `spacing(2)` = 8px
- `spacing(3)` = 12px
- `spacing(4)` = 16px
- `spacing(5)` = 24px
- etc.

---

### 3. Shape (Border Radius)

**Format**: Custom shape values with MUI compatibility

```typescript
shape: {
  borderRadius: 4, // Default MUI border radius
  custom: {
    sm: 4,      // Small
    md: 8,      // Medium
    lg: 12,     // Large
    xl: 24,     // Extra large
    rounded: 9999, // Pill shape
  }
}
```

**Reference**: [MUI Shape Documentation](https://mui.com/material-ui/customization/shape/)

**Key Features**:
- Default border radius: 4px
- Custom shape values accessible via `theme.shape.custom.*`
- Supports all MUI component border radius usage
- Pill shape (9999px) for rounded components

**Usage**:
```tsx
// Default border radius
sx={{ borderRadius: theme.shape.borderRadius }} // 4px

// Custom shape values
sx={{ borderRadius: theme.shape.custom.md }} // 8px
sx={{ borderRadius: theme.shape.custom.rounded }} // 9999px (pill)
```

---

### 4. Breakpoints

**Format**: Standard MUI breakpoints

```typescript
breakpoints: {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
  unit: 'px',
  step: 5,
}
```

**Reference**: [MUI Breakpoints Documentation](https://mui.com/material-ui/customization/breakpoints/)

**Key Features**:
- Standard MUI breakpoint values
- Responsive design support
- Media query helpers
- Container query support (MUI v7)

**Usage**:
```tsx
// Responsive values
sx={{
  width: { xs: '100%', md: '50%' },
  padding: { xs: 2, sm: 3, md: 4 },
}}

// Media query hooks
const matches = useMediaQuery(theme.breakpoints.up('md'));

// Container queries (MUI v7)
<Box sx={{ containerType: 'inline-size' }}>
  <Typography sx={{ fontSize: { '@container (min-width: 600px)': '2rem' } }}>
    Responsive text
  </Typography>
</Box>
```

---

### 5. z-index

**Format**: Component layering values

```typescript
zIndex: {
  mobileStepper: 1000,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
}
```

**Reference**: [MUI z-index Documentation](https://mui.com/material-ui/customization/z-index/)

**Key Features**:
- Standard MUI z-index values
- Ensures proper component layering
- Prevents z-index conflicts
- Customizable per component

**Usage**:
```tsx
// Components automatically use correct z-index
<AppBar /> // z-index: 1100
<Drawer /> // z-index: 1200
<Modal /> // z-index: 1300
```

---

### 6. Transitions

**Format**: Duration and easing functions

```typescript
transitions: {
  duration: {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  },
  easing: {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  },
  create: 'cubic-bezier(0.4, 0, 0.2, 1)',
}
```

**Reference**: [MUI Transitions Documentation](https://mui.com/material-ui/customization/transitions/)

**Key Features**:
- Standard MUI transition durations
- Material Design easing curves
- Consistent animation timing
- Customizable per component

**Usage**:
```tsx
// Using transition helpers
sx={{
  transition: theme.transitions.create(['width', 'height'], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeInOut,
  }),
}}

// Direct duration usage
sx={{
  transition: `all ${theme.transitions.duration.short}ms`,
}}
```

---

### 7. Container Queries (MUI v7)

**Format**: Enabled by default

```typescript
containerQueries: {
  enabled: true,
}
```

**Reference**: [MUI Container Queries Documentation](https://mui.com/material-ui/customization/container-queries/)

**Key Features**:
- Container-based responsive design
- More precise control than viewport breakpoints
- Better component encapsulation
- MUI v7 feature

**Usage**:
```tsx
<Box sx={{ containerType: 'inline-size' }}>
  <Typography
    sx={{
      fontSize: {
        '@container (min-width: 600px)': '2rem',
        '@container (max-width: 599px)': '1rem',
      },
    }}
  >
    Container-responsive text
  </Typography>
</Box>
```

---

### 8. Density

**Format**: Component density factor

```typescript
density: {
  factor: 0, // 0 = comfortable, -1 = compact, 1 = spacious
}
```

**Reference**: [MUI Density Documentation](https://mui.com/material-ui/customization/density/)

**Key Features**:
- Controls component spacing and size
- Three levels: compact, comfortable, spacious
- Applied via component defaultProps
- Better for data-dense interfaces

**Usage**:
```tsx
// Set density via component props
<Button size="small" /> // Compact
<Button size="medium" /> // Comfortable (default)
<Button size="large" /> // Spacious

// Or via theme components
components: {
  MuiButton: {
    defaultProps: {
      size: 'small', // Compact density
    },
  },
}
```

---

## Preserved MRS Design System Values

### Palette (Verones)
- **Primary**: `#00686F` (Teal)
- **Secondary**: `#99CC00` (Lime Green)
- **Error**: `#AB1A1A` (Red)
- **Warning**: `#E1CF28` (Yellow)
- **Info**: `#143996` (Blue)
- **Success**: `#036642` (Green)

### Typography (Nunito)
- **Font Family**: `Nunito, Helvetica, Arial, sans-serif`
- **Base Size**: 14px
- **HTML Font Size**: 16px

### Spacing
- **Base Unit**: 4px
- **Scale**: `[0, 4, 8, 12, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96]`

### Shape
- **Default**: 4px
- **Small**: 4px
- **Medium**: 8px
- **Large**: 12px
- **Extra Large**: 24px
- **Rounded (Pill)**: 9999px

---

## Theme Creation

The theme is created using `createMRSTheme()` function:

```typescript
import { createMRSTheme } from '@mrs/ui/theme';

// Light theme (default)
const theme = createMRSTheme('light');

// Dark theme
const darkTheme = createMRSTheme('dark');
```

---

## Usage Examples

### Complete Theme Usage

```tsx
import { ThemeProvider } from '@mrs/ui';
import { Box, Typography, Button } from '@mui/material';

function App() {
  return (
    <ThemeProvider colorScheme="light">
      <Box
        sx={{
          padding: (theme) => theme.spacing(4), // 16px
          borderRadius: (theme) => theme.shape.custom.md, // 8px
          transition: (theme) => theme.transitions.create('all'),
        }}
      >
        <Typography variant="h1">Heading</Typography>
        <Button
          sx={{
            marginTop: (theme) => theme.spacing(2), // 8px
          }}
        >
          Click me
        </Button>
      </Box>
    </ThemeProvider>
  );
}
```

### Responsive Design

```tsx
<Box
  sx={{
    width: { xs: '100%', sm: '50%', md: '33%' },
    padding: { xs: 2, sm: 3, md: 4 },
    fontSize: { xs: '1rem', md: '1.5rem' },
  }}
>
  Responsive content
</Box>
```

### Container Queries

```tsx
<Box sx={{ containerType: 'inline-size' }}>
  <Typography
    sx={{
      fontSize: {
        '@container (min-width: 600px)': '2rem',
        '@container (max-width: 599px)': '1rem',
      },
    }}
  >
    Container-responsive
  </Typography>
</Box>
```

---

## TypeScript Support

All theme customizations are fully typed:

```typescript
import { useTheme } from '@mui/material/styles';

function MyComponent() {
  const theme = useTheme();
  
  // Typed access to all theme properties
  const spacing = theme.spacing(2);
  const borderRadius = theme.shape.borderRadius;
  const customShape = theme.shape.custom.md;
  const breakpoint = theme.breakpoints.values.md;
  const zIndex = theme.zIndex.modal;
  const transition = theme.transitions.duration.standard;
}
```

---

## References

- [MUI Typography](https://mui.com/material-ui/customization/typography/)
- [MUI Spacing](https://mui.com/material-ui/customization/spacing/)
- [MUI Shape](https://mui.com/material-ui/customization/shape/)
- [MUI Breakpoints](https://mui.com/material-ui/customization/breakpoints/)
- [MUI Container Queries](https://mui.com/material-ui/customization/container-queries/)
- [MUI Density](https://mui.com/material-ui/customization/density/)
- [MUI z-index](https://mui.com/material-ui/customization/z-index/)
- [MUI Transitions](https://mui.com/material-ui/customization/transitions/)

---

**Last Updated**: December 2025  
**MUI Version**: 7.2.0  
**MRS Design System**: v1.0

