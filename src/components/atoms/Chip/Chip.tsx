/**
 * Chip Component
 *
 * Tag/label component for displaying information.
 * Uses theme tokens for styling and follows MRS design system rules.
 */

import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Chip as MuiChip, ChipProps as MuiChipProps } from '@mui/material';

export interface ChipProps extends Omit<MuiChipProps, 'variant' | 'size' | 'color'> {
  /**
   * Chip variant
   * @default 'filled'
   */
  variant?: 'filled' | 'outlined';
  /**
   * Chip size
   * @default 'medium'
   */
  size?: 'small' | 'medium';
  /**
   * Chip color
   * @default 'default'
   */
  color?: 'default' | 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
  /**
   * Chip label
   */
  label: React.ReactNode;
  /**
   * Delete icon (shows when provided)
   */
  onDelete?: () => void;
  /**
   * Avatar element
   */
  avatar?: React.ReactElement;
  /**
   * Icon element
   */
  icon?: React.ReactElement;
  /**
   * Clickable chip
   */
  clickable?: boolean;
}

/**
 * Chip component that consumes theme tokens
 *
 * Follows MRS design system rules:
 * - Uses pill shape (rounded) border radius
 * - Uses theme color tokens
 *
 * @example
 * ```tsx
 * <Chip label="Tag" />
 * <Chip label="Deletable" onDelete={() => {}} />
 * <Chip label="With Icon" icon={<Star />} />
 * ```
 */
export const Chip: React.FC<ChipProps> = ({
  variant = 'filled',
  size = 'medium',
  color = 'default',
  label,
  onDelete,
  avatar,
  icon,
  clickable = false,
  sx,
  ...props
}) => {
  const theme = useTheme();

  return (
    <MuiChip
      variant={variant}
      size={size}
      color={color}
      label={label}
      onDelete={onDelete}
      avatar={avatar}
      icon={icon}
      clickable={clickable}
      sx={{
        // Use theme shape token for pill shape (rounded)
        borderRadius: theme.shape.custom?.rounded ?? theme.shape.borderRadius,
        ...sx,
      }}
      {...props}
    />
  );
};

export default Chip;
