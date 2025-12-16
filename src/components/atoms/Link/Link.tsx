/**
 * Link Component
 *
 * Text link component.
 * Uses theme tokens for styling.
 */

import React from 'react';
import { Link as MuiLink, LinkProps as MuiLinkProps } from '@mui/material';

export interface LinkProps extends MuiLinkProps {
  /**
   * Link variant
   * @default 'body1'
   */
  variant?:
    | 'body1'
    | 'body2'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'caption'
    | 'overline';
  /**
   * Link color
   * @default 'primary'
   */
  color?:
    | 'primary'
    | 'secondary'
    | 'error'
    | 'warning'
    | 'info'
    | 'success'
    | 'inherit'
    | 'textPrimary'
    | 'textSecondary';
  /**
   * Underline style
   * @default 'hover'
   */
  underline?: 'none' | 'hover' | 'always';
  /**
   * Link href
   */
  href?: string;
  /**
   * Link content
   */
  children: React.ReactNode;
}

/**
 * Link component that consumes theme tokens
 *
 * @example
 * ```tsx
 * <Link href="/about">About</Link>
 * <Link href="/contact" underline="always">Contact</Link>
 * ```
 */
export const Link: React.FC<LinkProps> = ({
  variant = 'body1',
  color = 'primary',
  underline = 'hover',
  href,
  children,
  sx,
  ...props
}) => {
  return (
    <MuiLink href={href} variant={variant} color={color} underline={underline} sx={sx} {...props}>
      {children}
    </MuiLink>
  );
};

export default Link;
