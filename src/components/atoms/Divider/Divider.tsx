/**
 * Divider Component
 *
 * Separator component that uses theme divider tokens.
 * Wraps Material-UI Divider with MRS design system styling.
 */

import React from 'react';
import { Divider as MuiDivider, DividerProps as MuiDividerProps } from '@mui/material';

export interface DividerProps extends MuiDividerProps {
  /**
   * Divider orientation
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * Divider variant
   * @default 'fullWidth'
   */
  variant?: 'fullWidth' | 'inset' | 'middle';
  /**
   * Flex item prop (for vertical dividers)
   */
  flexItem?: boolean;
}

/**
 * Divider component that consumes theme divider tokens
 *
 * @example
 * ```tsx
 * <Divider />
 * <Divider orientation="vertical" />
 * <Divider variant="inset" />
 * ```
 */
export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  variant = 'fullWidth',
  flexItem,
  ...props
}) => {
  return <MuiDivider orientation={orientation} variant={variant} flexItem={flexItem} {...props} />;
};

export default Divider;
