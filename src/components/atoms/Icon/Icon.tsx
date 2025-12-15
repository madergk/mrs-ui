/**
 * Icon Component
 * 
 * Icon component using Material Symbols font.
 * Supports both font icons and custom icon instances.
 * Uses Material Symbols Rounded family with proper font-variation-settings.
 * 
 * Reference: https://developers.google.com/fonts/docs/material_symbols
 */

import React from 'react';
import { MaterialSymbol, MaterialSymbolProps } from './MaterialSymbol';

export interface IconProps extends Omit<MaterialSymbolProps, 'icon'> {
  /**
   * Icon name (snake_case format) for Material Symbols font icon
   * Example: 'home', 'settings', 'favorite', etc.
   */
  icon?: string;
  /**
   * Custom icon instance (React element)
   * If provided, this will be used instead of the icon name
   */
  iconInstance?: React.ReactNode | null;
  /**
   * Icon size
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large' | 'inherit';
  /**
   * Icon type
   * @default 'font'
   */
  type?: 'font' | 'svg';
}

// Size mapping based on Figma design
const SIZE_MAP = {
  small: 20,
  medium: 24,
  large: 35,
  inherit: 16,
} as const;

/**
 * Icon component that uses Material Symbols font icons
 * 
 * Follows MRS design system rules:
 * - Uses Material Symbols Rounded family
 * - Weight: 300 (Light)
 * - Optical size: 24 (matches Nunito 400 typography)
 * - Fill: 0 (outlined by default)
 * - Grade: 0
 * 
 * @example
 * ```tsx
 * <Icon icon="home" size="medium" />
 * <Icon icon="favorite" size="large" color="primary" />
 * <Icon icon="settings" size="small" fill={1} />
 * ```
 */
export const Icon: React.FC<IconProps> = ({
  icon = 'add',
  iconInstance = null,
  size = 'medium',
  type = 'font',
  fill = 0,
  weight = 300,
  grade = 0,
  opticalSize = 24,
  color = 'action',
  sx,
  ...props
}) => {
  // If custom icon instance is provided, render it
  if (iconInstance) {
    return <>{iconInstance}</>;
  }

  // If type is SVG, we could support SVG icons here in the future
  // For now, we only support font icons
  if (type === 'svg') {
    // Fallback to font icon if SVG type is specified but no instance provided
    console.warn('SVG icon type requires iconInstance prop. Falling back to font icon.');
  }

  // Calculate optical size based on icon size to match typography
  // Medium (24px) matches Nunito 400 typography optical size
  const calculatedOpticalSize = size === 'medium' ? 24 : size === 'large' ? 35 : size === 'small' ? 20 : 16;

  return (
    <MaterialSymbol
      icon={icon}
      size={SIZE_MAP[size]}
      fill={fill}
      weight={weight}
      grade={grade}
      opticalSize={calculatedOpticalSize}
      color={color}
      sx={sx}
      {...props}
    />
  );
};

export default Icon;

