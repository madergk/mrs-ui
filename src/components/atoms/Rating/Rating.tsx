/**
 * Rating Component
 *
 * Star rating input component.
 * Uses theme tokens for styling and follows MRS design system rules.
 */

import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Rating as MuiRating, RatingProps as MuiRatingProps } from '@mui/material';

export interface RatingProps extends MuiRatingProps {
  /**
   * Rating value
   */
  value?: number | null;
  /**
   * Maximum rating value
   * @default 5
   */
  max?: number;
  /**
   * Rating size
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Whether rating is read-only
   * @default false
   */
  readOnly?: boolean;
  /**
   * Whether rating is disabled
   * @default false
   */
  disabled?: boolean;
}

/**
 * Rating component that consumes theme tokens
 *
 * @example
 * ```tsx
 * <Rating value={3} />
 * <Rating value={4} readOnly />
 * ```
 */
export const Rating: React.FC<RatingProps> = ({
  value = null,
  max = 5,
  size = 'medium',
  readOnly = false,
  disabled = false,
  sx,
  ...props
}) => {
  const theme = useTheme();

  return (
    <MuiRating
      value={value}
      max={max}
      size={size}
      readOnly={readOnly}
      disabled={disabled}
      sx={{
        ...sx,
      }}
      {...props}
    />
  );
};

export default Rating;
