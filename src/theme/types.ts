/**
 * Theme Type Definitions
 *
 * TypeScript type declarations for MRS Design System theme extensions.
 * Extends MUI theme types with custom properties.
 */

import '@mui/material/styles';

declare module '@mui/material/styles' {
  /**
   * Extended shape interface with custom MRS shape values
   */
  interface Shape {
    /**
     * Default border radius (4px)
     */
    borderRadius: number;
    /**
     * Custom MRS shape values
     * Access via theme.shape.custom.sm, theme.shape.custom.md, etc.
     */
    custom?: {
      /**
       * Small border radius (4px)
       */
      sm: number;
      /**
       * Medium border radius (8px)
       */
      md: number;
      /**
       * Large border radius (12px)
       */
      lg: number;
      /**
       * Extra large border radius (24px)
       */
      xl: number;
      /**
       * Rounded (pill shape) border radius (9999px)
       */
      rounded: number;
    };
  }

  /**
   * Extended PaletteColor interface with MRS _states property
   */
  interface PaletteColor {
    /**
     * MRS state tokens for hover, focus, selected, etc.
     */
    _states?: {
      hover?: string;
      selected?: string;
      focus?: string;
      focusVisible?: string;
      outlinedBorder?: string;
    };
  }

  /**
   * Extended theme interface
   */
  interface Theme {
    /**
     * Custom MRS theme properties
     */
    mrs?: {
      /**
       * Design system version
       */
      version: string;
      /**
       * Brand name
       */
      brand: 'Verones';
    };
  }
}

/**
 * Re-export theme types for convenience
 */
export type { Theme, ThemeOptions } from '@mui/material/styles';
