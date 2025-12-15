/**
 * Fab (Floating Action Button) Component
 * 
 * Floating action button component.
 * Uses theme tokens for styling and follows MRS design system rules.
 */

import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Fab as MuiFab, FabProps as MuiFabProps } from '@mui/material';

export interface FabProps extends Omit<MuiFabProps, 'variant' | 'size'> {
  /**
   * Fab variant
   * @default 'circular'
   */
  variant?: 'circular' | 'extended';
  /**
   * Fab size
   * @default 'large'
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Fab color
   * @default 'primary'
   */
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success' | 'inherit' | 'default';
}

/**
 * Fab component that consumes theme tokens
 * 
 * @example
 * ```tsx
 * import { Icon } from '../Icon';
 * <Fab><Icon icon="add" /></Fab>
 * <Fab>
 *   <Add />
 * </Fab>
 * <Fab variant="extended">
 *   <Add />
 *   Create
 * </Fab>
 * ```
 */
export const Fab: React.FC<FabProps> = ({
  variant = 'circular',
  size = 'large',
  color = 'primary',
  sx,
  ...props
}) => {
  const theme = useTheme();

  // Get color palette (handle 'inherit' and 'default' cases)
  const getColorPalette = () => {
    if (color === 'inherit' || color === 'default') return theme.palette.primary;
    return theme.palette[color as 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'];
  };

  const colorPalette = getColorPalette();

  return (
    <MuiFab
      variant={variant}
      size={size}
      color={color}
      sx={{
        // Use theme shape token for circular shape
        borderRadius: variant === 'circular' 
          ? theme.shape.custom?.rounded ?? theme.shape.borderRadius
          : theme.shape.custom?.md ?? theme.shape.borderRadius,
        // Use theme state tokens for hover and focus
        '&:focus-visible': {
          outline: '_states' in colorPalette
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

export default Fab;

