/**
 * Theme Configuration
 *
 * This module exports the theme configuration for Material-UI v7.2.0
 * The theme is based on theme.json which contains all design tokens.
 *
 * Maintains MRS Design System:
 * - Palette: Verones (MRS brand colors)
 * - Typography: Nunito font family
 * - Spacing: Custom 4px-based array
 * - Shape: Custom border radius values
 *
 * Includes comprehensive MUI customization:
 * - Typography (with Nunito)
 * - Spacing (array-based function)
 * - Shape (border radius)
 * - Breakpoints (responsive design)
 * - z-index (component layering)
 * - Transitions (animations)
 * - Container queries (MUI v7)
 * - Density (component spacing)
 */

import { createTheme, ThemeOptions } from '@mui/material/styles';
import themeJson from '../../theme.json';

/**
 * Converts spacing array to MUI spacing function
 *
 * MUI spacing can be:
 * - A number (multiplier for base unit)
 * - A function (factor) => string
 * - An array (index-based access)
 *
 * We use array-based spacing with interpolation support.
 */
const createSpacingFunction = (spacingArray: number[]) => {
  return (factor: number | 'auto' = 1): string => {
    if (factor === 'auto') {
      return 'auto';
    }

    // Handle negative values
    const sign = factor >= 0 ? 1 : -1;
    const factorAbs = Math.abs(factor);

    // If integer, use direct array access
    if (Number.isInteger(factorAbs)) {
      const index = Math.min(Math.floor(factorAbs), spacingArray.length - 1);
      return `${spacingArray[index] * sign}px`;
    }

    // Interpolate for non-integer values
    const floor = Math.floor(factorAbs);
    const ceil = Math.ceil(factorAbs);
    const diff = factorAbs - floor;

    const floorIndex = Math.min(floor, spacingArray.length - 1);
    const ceilIndex = Math.min(ceil, spacingArray.length - 1);

    const floorValue = spacingArray[floorIndex];
    const ceilValue = spacingArray[ceilIndex];
    const interpolated = floorValue + (ceilValue - floorValue) * diff;

    return `${interpolated * sign}px`;
  };
};

/**
 * Converts MRS shape format to MUI shape format
 *
 * MRS format: { sm: 4, md: 8, lg: 12, xl: 24, rounded: 9999, borderRadius: 4 }
 * MUI format: { borderRadius: number }
 *
 * We preserve custom shape values in a custom property for component usage.
 */
const convertShape = (shape: typeof themeJson.shape) => {
  return {
    borderRadius: shape.borderRadius || 4,
    // Preserve custom shape values for component usage
    // These can be accessed via theme.shape.custom.sm, etc.
    custom: {
      sm: shape.sm,
      md: shape.md,
      lg: shape.lg,
      xl: shape.xl,
      rounded: shape.rounded,
    },
  };
};

/**
 * Processes typography configuration
 *
 * Ensures Nunito font family is applied to all variants
 * and sets proper base font size.
 */
const processTypography = (typography: typeof themeJson.typography) => {
  // Base font family (Nunito)
  const fontFamily = 'Nunito, Helvetica, Arial, sans-serif';

  // Base font size (14px default, can be customized)
  const fontSize = 14;

  // HTML font size for rem calculations (16px default)
  const htmlFontSize = 16;

  // Process each variant to ensure Nunito is set
  // Remove fontSize from typography if it exists to avoid duplication
  const { fontSize: _, ...typographyWithoutFontSize } = typography as any;
  const processedTypography: any = {
    fontFamily,
    fontSize,
    htmlFontSize,
    ...typographyWithoutFontSize,
  };

  // Ensure all variants have Nunito font family
  const variants = [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'body1',
    'body2',
    'subtitle1',
    'subtitle2',
    'overline',
    'caption',
    'button',
  ];
  variants.forEach((variant) => {
    if (processedTypography[variant]) {
      processedTypography[variant] = {
        fontFamily,
        ...processedTypography[variant],
      };
    }
  });

  return processedTypography;
};

/**
 * Creates a Material-UI theme from the theme.json configuration
 *
 * Includes comprehensive MUI customization options while preserving
 * MRS Design System values (Verones palette, Nunito typography).
 *
 * @param colorScheme - Color scheme to use ('light' or 'dark')
 * @returns Configured Material-UI theme
 *
 * @example
 * ```tsx
 * const theme = createMRSTheme('light');
 * <ThemeProvider theme={theme}>...</ThemeProvider>
 * ```
 */
export const createMRSTheme = (colorScheme: 'light' | 'dark' = 'light') => {
  const colorSchemeConfig = themeJson.colorSchemes[colorScheme];

  const themeOptions: ThemeOptions = {
    // Color schemes (preserves Verones palette)
    colorSchemes: {
      [colorScheme]: {
        palette: colorSchemeConfig.palette,
      },
    },

    // Typography (preserves Nunito font family)
    typography: processTypography(themeJson.typography),

    // Shape (border radius)
    shape: convertShape(themeJson.shape),

    // Spacing (array-based function)
    spacing: createSpacingFunction(themeJson.spacing as number[]),

    // Breakpoints (responsive design)
    breakpoints: themeJson.breakpoints || {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
      unit: 'px',
      step: 5,
    },

    // z-index (component layering)
    zIndex: themeJson.zIndex || {
      mobileStepper: 1000,
      speedDial: 1050,
      appBar: 1100,
      drawer: 1200,
      modal: 1300,
      snackbar: 1400,
      tooltip: 1500,
    },

    // Transitions (animations)
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
      // create is a function, not a string - MUI will provide it
    },

    // Component overrides
    components: themeJson.components,
  };

  return createTheme(themeOptions);
};

/**
 * Default light theme
 */
export const theme = createMRSTheme('light');

/**
 * Dark theme
 */
export const darkTheme = createMRSTheme('dark');

// Export ThemeProvider
export { ThemeProvider } from './ThemeProvider';
export type { ThemeProviderProps } from './ThemeProvider';

export default theme;
