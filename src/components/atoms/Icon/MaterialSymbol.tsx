/**
 * MaterialSymbol Component
 *
 * Material Symbols font icon component using Google Fonts.
 * Uses Material Symbols Rounded family with proper font-variation-settings.
 *
 * Reference: https://developers.google.com/fonts/docs/material_symbols
 */

import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, BoxProps } from '@mui/material';

export interface MaterialSymbolProps extends Omit<BoxProps, 'children'> {
  /**
   * Icon name (snake_case format)
   * Example: 'home', 'settings', 'favorite', etc.
   */
  icon: string;
  /**
   * Icon size in pixels
   * @default 24
   */
  size?: number;
  /**
   * Fill axis (0 = outlined, 1 = filled)
   * @default 0
   */
  fill?: 0 | 1;
  /**
   * Weight axis (100-700)
   * @default 300
   */
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700;
  /**
   * Grade axis (-50 to 200)
   * @default 0
   */
  grade?: number;
  /**
   * Optical size axis (20-48)
   * Should match typography size for visual harmony
   * @default 24
   */
  opticalSize?: number;
  /**
   * Icon color from theme
   * @default 'action'
   */
  color?:
    | 'primary'
    | 'secondary'
    | 'error'
    | 'warning'
    | 'info'
    | 'success'
    | 'action'
    | 'disabled'
    | 'inherit';
}

/**
 * MaterialSymbol component that renders Material Symbols font icons
 *
 * Uses Material Symbols Rounded family with proper font-variation-settings
 * to match typography (Nunito 400) optical size.
 *
 * @example
 * ```tsx
 * <MaterialSymbol icon="home" size={24} />
 * <MaterialSymbol icon="favorite" fill={1} weight={400} />
 * <MaterialSymbol icon="settings" color="primary" />
 * ```
 */
export const MaterialSymbol: React.FC<MaterialSymbolProps> = ({
  icon,
  size = 24,
  fill = 0,
  weight = 300,
  grade = 0,
  opticalSize = 24,
  color = 'action',
  sx,
  ...props
}) => {
  const theme = useTheme();

  // Map color to theme palette
  const getColor = () => {
    switch (color) {
      case 'primary':
        return theme.palette.primary.main;
      case 'secondary':
        return theme.palette.secondary.main;
      case 'error':
        return theme.palette.error.main;
      case 'warning':
        return theme.palette.warning.main;
      case 'info':
        return theme.palette.info.main;
      case 'success':
        return theme.palette.success.main;
      case 'action':
        return theme.palette.action.active;
      case 'disabled':
        return theme.palette.action.disabled;
      case 'inherit':
        return 'inherit';
      default:
        return theme.palette.action.active;
    }
  };

  return (
    <Box
      component="span"
      className="material-symbols-rounded"
      sx={{
        fontFamily: 'Material Symbols Rounded',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontSize: `${size}px`,
        lineHeight: 1,
        letterSpacing: 'normal',
        textTransform: 'none',
        display: 'inline-block',
        whiteSpace: 'nowrap',
        wordWrap: 'normal',
        direction: 'ltr',
        fontFeatureSettings: 'liga',
        fontVariationSettings: `'FILL' ${fill}, 'wght' ${weight}, 'GRAD' ${grade}, 'opsz' ${opticalSize}`,
        color: getColor(),
        userSelect: 'none',
        ...sx,
      }}
      {...props}
    >
      {icon}
    </Box>
  );
};

export default MaterialSymbol;
