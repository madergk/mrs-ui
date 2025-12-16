/**
 * Stack Component
 *
 * Layout component for arranging items in a vertical or horizontal stack.
 * Wraps Material-UI Stack with MRS design system tokens.
 */

import React from 'react';
import { Stack as MuiStack, StackProps as MuiStackProps } from '@mui/material';

export interface StackProps extends MuiStackProps {
  /**
   * Stack direction
   * @default 'column'
   */
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  /**
   * Spacing between items
   * @default 2
   */
  spacing?: number | string;
  /**
   * Alignment of items
   */
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
  /**
   * Justification of items
   */
  justifyContent?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
}

/**
 * Stack component for layout
 *
 * @example
 * ```tsx
 * <Stack spacing={2}>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </Stack>
 * ```
 */
export const Stack: React.FC<StackProps> = ({ direction = 'column', spacing = 2, ...props }) => {
  return <MuiStack direction={direction} spacing={spacing} {...props} />;
};

export default Stack;
