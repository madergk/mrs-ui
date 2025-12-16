/**
 * Badge Component
 *
 * Notification indicator component.
 * Typically wraps an Avatar or IconButton to show notifications.
 */

import React from 'react';
import { Badge as MuiBadge, BadgeProps as MuiBadgeProps } from '@mui/material';

export interface BadgeProps extends Omit<MuiBadgeProps, 'badgeContent'> {
  /**
   * Badge content (number or text)
   */
  badgeContent?: React.ReactNode;
  /**
   * Maximum number to show before showing max+
   */
  max?: number;
  /**
   * Badge color
   * @default 'error'
   */
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success' | 'default';
  /**
   * Badge variant
   * @default 'standard'
   */
  variant?: 'standard' | 'dot';
  /**
   * Show badge even when badgeContent is 0
   * @default false
   */
  showZero?: boolean;
  /**
   * Badge anchor origin
   */
  anchorOrigin?: {
    vertical: 'top' | 'bottom';
    horizontal: 'left' | 'right';
  };
  /**
   * Child element to wrap
   */
  children: React.ReactNode;
}

/**
 * Badge component that consumes theme tokens
 *
 * @example
 * ```tsx
 * <Badge badgeContent={4}>
 *   <IconButton><Mail /></IconButton>
 * </Badge>
 * <Badge badgeContent={99} max={99}>
 *   <Avatar>JD</Avatar>
 * </Badge>
 * ```
 */
export const Badge: React.FC<BadgeProps> = ({
  badgeContent,
  max = 99,
  color = 'error',
  variant = 'standard',
  showZero = false,
  anchorOrigin,
  children,
  ...props
}) => {
  return (
    <MuiBadge
      badgeContent={badgeContent}
      max={max}
      color={color}
      variant={variant}
      showZero={showZero}
      anchorOrigin={anchorOrigin}
      {...props}
    >
      {children}
    </MuiBadge>
  );
};

export default Badge;
