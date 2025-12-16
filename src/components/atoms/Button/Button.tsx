/**
 * Button Component
 *
 * Primary action component with variants and sizes.
 * Uses theme tokens for styling and follows MRS design system rules.
 * Matches Figma design specification exactly.
 */

import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';

export interface ButtonProps extends Omit<MuiButtonProps, 'variant' | 'size' | 'color'> {
  /**
   * Button variant
   * @default 'contained'
   */
  variant?: 'contained' | 'outlined' | 'text';
  /**
   * Button size
   * - Small: 32px height
   * - Medium: 40px height
   * - Large: 48px height
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button color
   * - Primary: Teal/green primary color
   * - Secondary: Yellow/green secondary color
   * - Error: Red error color
   * - Inherit: Inherits color from parent
   * - Inherit (white): White color variant for dark backgrounds
   * @default 'primary'
   */
  color?: 'primary' | 'secondary' | 'error' | 'inherit' | 'inherit (white)';
}

/**
 * Button component that consumes theme tokens
 *
 * Follows MRS design system rules:
 * - Uses pill shape (rounded) border radius
 * - Uses theme color tokens and state tokens
 * - Typography: Nunito SemiBold with proper letter spacing
 * - Implements all states: enabled, hovered, focused, pressed, disabled
 *
 * @example
 * ```tsx
 * <Button variant="contained">Submit</Button>
 * <Button variant="outlined" size="small">Cancel</Button>
 * <Button variant="text" color="secondary">Learn More</Button>
 * <Button color="inherit (white)">White Button</Button>
 * ```
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'contained',
  size = 'medium',
  color = 'primary',
  sx,
  ...props
}) => {
  const theme = useTheme();

  // Map Figma color to MUI color prop
  const getMuiColor = (): 'primary' | 'secondary' | 'error' | 'inherit' => {
    if (color === 'inherit' || color === 'inherit (white)') {
      return 'inherit';
    }
    return color;
  };

  // Get color palette from theme
  const getColorPalette = () => {
    if (color === 'inherit' || color === 'inherit (white)') {
      return undefined;
    }
    return theme.palette[color as 'primary' | 'secondary' | 'error'];
  };

  const colorPalette = getColorPalette();
  const muiColor = getMuiColor();

  // Typography settings based on size (from Figma)
  const getTypographyStyles = () => {
    const baseStyles = {
      fontFamily: 'Nunito, Helvetica, Arial, sans-serif',
      fontWeight: 600, // SemiBold
      textTransform: 'none' as const,
    };

    switch (size) {
      case 'small':
        return {
          ...baseStyles,
          fontSize: '0.875rem', // 14px
          lineHeight: 1.5,
          letterSpacing: '0.4px',
        };
      case 'medium':
        return {
          ...baseStyles,
          fontSize: '0.9375rem', // 15px
          lineHeight: 1.5,
          letterSpacing: '0.43px',
        };
      case 'large':
        return {
          ...baseStyles,
          fontSize: '1rem', // 16px
          lineHeight: 1.25, // 20px / 16px
          letterSpacing: '0.46px',
        };
      default:
        return baseStyles;
    }
  };

  // Get height based on size (from Figma specifications)
  const getHeight = () => {
    switch (size) {
      case 'small':
        return '32px';
      case 'medium':
        return '40px';
      case 'large':
        return '48px';
      default:
        return '40px';
    }
  };

  // Get padding based on size
  const getPadding = () => {
    switch (size) {
      case 'small':
        return theme.spacing(1, 2); // 8px 16px
      case 'medium':
        return theme.spacing(1.5, 2.5); // 12px 20px
      case 'large':
        return theme.spacing(2, 3); // 16px 24px
      default:
        return theme.spacing(1.5, 2.5);
    }
  };

  // Handle "inherit (white)" color variant
  const isInheritWhite = color === 'inherit (white)';

  // Get state colors for different variants
  const getStateStyles = () => {
    const styles: any = {};

    // Handle inherit (white) color
    if (isInheritWhite) {
      const whiteStates = theme.palette.common.white._states;
      
      if (variant === 'contained') {
        styles.backgroundColor = whiteStates.main;
        styles.color = theme.palette.text.primary;
        styles['&:hover'] = {
          backgroundColor: whiteStates.hover || 'rgba(255, 255, 255, 0.92)',
        };
        styles['&:active'] = {
          backgroundColor: whiteStates.selected || 'rgba(255, 255, 255, 0.88)',
        };
        styles['&:focus-visible'] = {
          outline: `2px solid ${whiteStates.focusVisible}`,
          outlineOffset: '2px',
        };
        styles['&.Mui-disabled'] = {
          backgroundColor: theme.palette.action.disabledBackground,
          color: theme.palette.action.disabled,
        };
      } else if (variant === 'outlined') {
        styles.borderColor = whiteStates.outlinedBorder;
        styles.color = whiteStates.main;
        styles['&:hover'] = {
          borderColor: whiteStates.main,
          backgroundColor: whiteStates.hover,
        };
        styles['&:active'] = {
          backgroundColor: whiteStates.selected,
        };
        styles['&:focus-visible'] = {
          outline: `2px solid ${whiteStates.focusVisible}`,
          outlineOffset: '2px',
        };
        styles['&.Mui-disabled'] = {
          borderColor: theme.palette.action.disabled,
          color: theme.palette.action.disabled,
        };
      } else if (variant === 'text') {
        styles.color = whiteStates.main;
        styles['&:hover'] = {
          backgroundColor: whiteStates.hover,
        };
        styles['&:active'] = {
          backgroundColor: whiteStates.selected,
        };
        styles['&:focus-visible'] = {
          outline: `2px solid ${whiteStates.focusVisible}`,
          outlineOffset: '2px',
        };
        styles['&.Mui-disabled'] = {
          color: theme.palette.action.disabled,
        };
      }
      return styles;
    }

    // Handle regular colors with theme tokens
    if (!colorPalette || !('_states' in colorPalette)) {
      return styles;
    }

    const states = (colorPalette as any)._states;

    if (variant === 'contained') {
      // Contained variant: hover uses darker shade, active uses even darker
      styles['&:hover'] = {
        backgroundColor: colorPalette.dark || colorPalette.main,
      };
      styles['&:active'] = {
        backgroundColor: colorPalette.dark || colorPalette.main,
        // Slightly darker for pressed state
        filter: 'brightness(0.95)',
      };
      styles['&:focus-visible'] = {
        outline: `2px solid ${states.focusVisible || colorPalette.main}`,
        outlineOffset: '2px',
      };
    } else if (variant === 'outlined') {
      // Outlined variant: uses outlinedBorder for border, hover/active use state tokens
      styles.borderColor = states.outlinedBorder || colorPalette.main;
      styles['&:hover'] = {
        borderColor: colorPalette.main,
        backgroundColor: states.hover,
      };
      styles['&:active'] = {
        backgroundColor: states.selected,
      };
      styles['&:focus-visible'] = {
        outline: `2px solid ${states.focusVisible || colorPalette.main}`,
        outlineOffset: '2px',
      };
    } else if (variant === 'text') {
      // Text variant: hover/active use state tokens for background overlay
      styles['&:hover'] = {
        backgroundColor: states.hover,
      };
      styles['&:active'] = {
        backgroundColor: states.selected,
      };
      styles['&:focus-visible'] = {
        outline: `2px solid ${states.focusVisible || colorPalette.main}`,
        outlineOffset: '2px',
      };
    }

    return styles;
  };

  return (
    <MuiButton
      variant={variant}
      size={size}
      color={muiColor}
      sx={{
        // Pill shape (rounded) border radius from theme
        borderRadius: theme.shape.custom?.rounded ?? theme.shape.borderRadius ?? 9999,
        // Typography from Figma specification
        ...getTypographyStyles(),
        // Height from Figma specification
        minHeight: getHeight(),
        height: getHeight(),
        // Padding based on size
        padding: getPadding(),
        // State styles
        ...getStateStyles(),
        // Disabled state (applies to all variants)
        '&.Mui-disabled': {
          ...(variant === 'contained' && {
            backgroundColor: theme.palette.action.disabledBackground,
            color: theme.palette.action.disabled,
          }),
          ...(variant === 'outlined' && {
            borderColor: theme.palette.action.disabled,
            color: theme.palette.action.disabled,
          }),
          ...(variant === 'text' && {
            color: theme.palette.action.disabled,
          }),
        },
        // Icon spacing
        '& .MuiButton-startIcon': {
          marginRight: theme.spacing(1),
          marginLeft: size === 'small' ? theme.spacing(-0.5) : 0,
        },
        '& .MuiButton-endIcon': {
          marginLeft: theme.spacing(1),
          marginRight: size === 'small' ? theme.spacing(-0.5) : 0,
        },
        // Allow custom styles to override
        ...sx,
      }}
      {...props}
    />
  );
};

export default Button;
