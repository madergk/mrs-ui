/**
 * Card Component
 *
 * Surface container component for displaying content.
 * Uses theme tokens for styling and follows MRS design system rules.
 */

import React from 'react';
import { useTheme } from '@mui/material/styles';
import {
  Card as MuiCard,
  CardProps as MuiCardProps,
  CardContent as MuiCardContent,
  CardContentProps as MuiCardContentProps,
} from '@mui/material';

export interface CardProps extends MuiCardProps {
  /**
   * Elevation level (0-24)
   * @default 1
   */
  elevation?: number;
  /**
   * Card variant
   * @default 'elevation'
   */
  variant?: 'elevation' | 'outlined';
}

/**
 * Card component that consumes theme tokens
 *
 * @example
 * ```tsx
 * <Card>
 *   <CardContent>Content here</CardContent>
 * </Card>
 * ```
 */
export const Card: React.FC<CardProps> = ({
  elevation = 1,
  variant = 'elevation',
  sx,
  ...props
}) => {
  const theme = useTheme();

  return (
    <MuiCard
      elevation={variant === 'elevation' ? elevation : 0}
      variant={variant}
      sx={{
        borderRadius: theme.shape.custom?.md ?? theme.shape.borderRadius,
        ...sx,
      }}
      {...props}
    />
  );
};

export interface CardContentProps extends MuiCardContentProps {}

/**
 * CardContent component
 *
 * @example
 * ```tsx
 * <CardContent>Content</CardContent>
 * ```
 */
export const CardContent: React.FC<CardContentProps> = ({ sx, ...props }) => {
  return <MuiCardContent sx={sx} {...props} />;
};

export default Card;
