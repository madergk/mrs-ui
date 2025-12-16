/**
 * Button Component
 *
 * Primary action component with variants and sizes.
 * Uses theme tokens for styling and follows MRS design system rules.
 */

import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';

export interface ButtonProps extends Omit<MuiButtonProps, 'variant' | 'size'> {
  /**
   * Button variant
   * @default 'contained'
   */
  variant?: 'contained' | 'outlined' | 'text';
  /**
   * Button size
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button color
   * @default 'primary'
   */
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success' | 'inherit';
}

/**
 * Button component that consumes theme tokens
 *
 * Follows MRS design system rules:
 * - Uses pill shape (rounded) border radius
 * - Uses theme color tokens and state tokens
 * - Sentence case labels recommended
 *
 * @example
 * ```tsx
 * <Button variant="contained">Submit</Button>
 * <Button variant="outlined" size="small">Cancel</Button>
 * <Button variant="text" color="secondary">Learn More</Button>
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

  // Get color palette (handle 'inherit' case)
  const getColorPalette = () => {
    if (color === 'inherit') return undefined;
    return theme.palette[
      color as 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'
    ];
  };

  const colorPalette = getColorPalette();

  return (
    <MuiButton
      variant={variant}
      size={size}
      color={color}
      sx={{
        // Use theme shape token for pill shape (rounded)
        borderRadius: theme.shape.custom?.rounded ?? theme.shape.borderRadius,
        // Remove default text transform (use sentence case)
        textTransform: 'none',
        // Use theme state tokens for hover and focus
        '&:hover': {
          backgroundColor:
            variant === 'contained' && colorPalette && '._states' in colorPalette
              ? (colorPalette as any)._states?.hover
              : undefined,
        },
        '&:focus-visible': {
          outline:
            colorPalette && '_states' in colorPalette
              ? `2px solid ${(colorPalette as any)._states?.focusVisible}`
              : undefined,
          outlineOffset: '2px',
        },
        ...sx,
      }}
      {...props}
    />
  );
};

export default Button;
