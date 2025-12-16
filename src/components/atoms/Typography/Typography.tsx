/**
 * Typography Component
 *
 * Text display component that uses theme typography tokens.
 * Wraps Material-UI Typography with MRS design system tokens.
 */

import React from 'react';
import { Typography as MuiTypography, TypographyProps as MuiTypographyProps } from '@mui/material';

export interface TypographyProps extends MuiTypographyProps {
  /**
   * Typography variant from theme
   * @default 'body1'
   */
  variant?: MuiTypographyProps['variant'];
  /**
   * Component to render
   * @default 'p'
   */
  component?: React.ElementType;
  /**
   * Text content
   */
  children: React.ReactNode;
}

/**
 * Typography component that consumes theme typography tokens
 *
 * @example
 * ```tsx
 * <Typography variant="h1">Heading 1</Typography>
 * <Typography variant="body1">Body text</Typography>
 * ```
 */
export const Typography: React.FC<TypographyProps> = ({
  variant = 'body1',
  component,
  children,
  ...props
}) => {
  return (
    <MuiTypography variant={variant} component={component} {...props}>
      {children}
    </MuiTypography>
  );
};

export default Typography;
