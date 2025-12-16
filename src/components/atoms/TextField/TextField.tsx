/**
 * TextField Component
 *
 * Text input field component.
 * Uses theme tokens for styling and follows MRS design system rules.
 */

import React from 'react';
import { useTheme } from '@mui/material/styles';
import { TextField as MuiTextField, TextFieldProps as MuiTextFieldProps } from '@mui/material';

export interface TextFieldProps extends Omit<MuiTextFieldProps, 'variant'> {
  /**
   * TextField variant
   * @default 'outlined'
   */
  variant?: 'standard' | 'filled' | 'outlined';
  /**
   * TextField size
   * @default 'medium'
   */
  size?: 'small' | 'medium';
  /**
   * TextField color
   * @default 'primary'
   */
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
}

/**
 * TextField component that consumes theme tokens
 *
 * @example
 * ```tsx
 * <TextField label="Label" />
 * <TextField variant="filled" label="Filled" />
 * <TextField variant="standard" label="Standard" />
 * ```
 */
export const TextField: React.FC<TextFieldProps> = ({
  variant = 'outlined',
  size = 'medium',
  color = 'primary',
  sx,
  ...props
}) => {
  return (
    <MuiTextField
      variant={variant}
      size={size}
      color={color}
      sx={{
        ...sx,
      }}
      {...props}
    />
  );
};

export default TextField;
