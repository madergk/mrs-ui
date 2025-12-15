/**
 * IconButton Component
 * 
 * Icon-only button component.
 * Uses theme tokens for styling and follows MRS design system rules.
 */

import React from 'react';
import { useTheme } from '@mui/material/styles';
import { IconButton as MuiIconButton, IconButtonProps as MuiIconButtonProps } from '@mui/material';

export interface IconButtonProps extends MuiIconButtonProps {
  /**
   * Icon button size
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Icon button color
   * @default 'primary'
   */
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success' | 'inherit' | 'default';
  /**
   * Edge position for icon
   */
  edge?: 'start' | 'end' | false;
}

/**
 * IconButton component that consumes theme tokens
 * 
 * @example
 * ```tsx
 * import { Icon } from '../Icon';
 * <IconButton><Icon icon="home" /></IconButton>
 * <IconButton>
 *   <Home />
 * </IconButton>
 * ```
 */
export const IconButton: React.FC<IconButtonProps> = ({
  size = 'medium',
  color = 'primary',
  edge = false,
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
    <MuiIconButton
      size={size}
      color={color}
      edge={edge}
      sx={{
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

export default IconButton;

