/**
 * Select Component
 *
 * Dropdown selection component.
 * Uses theme tokens for styling and follows MRS design system rules.
 */

import React from 'react';
import { useTheme } from '@mui/material/styles';
import {
  Select as MuiSelect,
  SelectProps as MuiSelectProps,
  MenuItem as MuiMenuItem,
  MenuItemProps as MuiMenuItemProps,
} from '@mui/material';

export interface SelectProps extends Omit<MuiSelectProps, 'variant'> {
  /**
   * Select variant
   * @default 'outlined'
   */
  variant?: 'standard' | 'filled' | 'outlined';
  /**
   * Select size
   * @default 'medium'
   */
  size?: 'small' | 'medium';
  /**
   * Select color
   * @default 'primary'
   */
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
}

/**
 * Select component that consumes theme tokens
 *
 * @example
 * ```tsx
 * <Select value={value} onChange={handleChange}>
 *   <MenuItem value="1">Option 1</MenuItem>
 *   <MenuItem value="2">Option 2</MenuItem>
 * </Select>
 * ```
 */
export const Select: React.FC<SelectProps> = ({
  variant = 'outlined',
  size = 'medium',
  color = 'primary',
  sx,
  ...props
}) => {
  return <MuiSelect variant={variant} size={size} color={color} sx={sx} {...props} />;
};

export interface MenuItemProps extends MuiMenuItemProps {}

/**
 * MenuItem component for Select
 */
export const MenuItem: React.FC<MenuItemProps> = (props) => {
  return <MuiMenuItem {...props} />;
};

export default Select;
