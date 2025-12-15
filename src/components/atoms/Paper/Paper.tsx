/**
 * Paper Component
 * 
 * Surface container component that uses theme paper tokens.
 * Wraps Material-UI Paper with MRS design system styling.
 */

import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Paper as MuiPaper, PaperProps as MuiPaperProps } from '@mui/material';

export interface PaperProps extends MuiPaperProps {
  /**
   * Elevation level (0-24)
   * @default 1
   */
  elevation?: number;
  /**
   * Paper variant
   * @default 'elevation'
   */
  variant?: 'elevation' | 'outlined';
  /**
   * Square corners (no border radius)
   * @default false
   */
  square?: boolean;
}

/**
 * Paper component that consumes theme paper tokens
 * 
 * @example
 * ```tsx
 * <Paper elevation={2}>
 *   Content here
 * </Paper>
 * <Paper variant="outlined">
 *   Outlined paper
 * </Paper>
 * ```
 */
export const Paper: React.FC<PaperProps> = ({
  elevation = 1,
  variant = 'elevation',
  square = false,
  sx,
  ...props
}) => {
  const theme = useTheme();

  return (
    <MuiPaper
      elevation={variant === 'elevation' ? elevation : 0}
      variant={variant}
      square={square}
      sx={{
        // Use theme shape tokens for border radius
        borderRadius: square ? 0 : (theme.shape.custom?.md ?? theme.shape.borderRadius),
        ...sx,
      }}
      {...props}
    />
  );
};

export default Paper;

