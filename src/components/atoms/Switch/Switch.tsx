/**
 * Switch Component
 *
 * Toggle switch component.
 * Uses theme tokens for styling and follows MRS design system rules.
 */

import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Switch as MuiSwitch, SwitchProps as MuiSwitchProps } from '@mui/material';

export interface SwitchProps extends Omit<MuiSwitchProps, 'color'> {
  /**
   * Switch color
   * @default 'primary'
   */
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success' | 'default';
  /**
   * Switch size
   * @default 'medium'
   */
  size?: 'small' | 'medium';
  /**
   * Whether switch is checked
   */
  checked?: boolean;
  /**
   * Whether switch is disabled
   * @default false
   */
  disabled?: boolean;
}

/**
 * Switch component that consumes theme tokens
 *
 * @example
 * ```tsx
 * <Switch checked={checked} onChange={handleChange} />
 * <Switch color="secondary" />
 * ```
 */
export const Switch: React.FC<SwitchProps> = ({
  color = 'primary',
  size = 'medium',
  checked = false,
  disabled = false,
  sx,
  ...props
}) => {
  return (
    <MuiSwitch
      color={color}
      size={size}
      checked={checked}
      disabled={disabled}
      sx={{
        ...sx,
      }}
      {...props}
    />
  );
};

export default Switch;
