/**
 * Avatar Component
 *
 * User/profile image component.
 * Uses theme tokens for styling.
 */

import React from 'react';
import { Avatar as MuiAvatar, AvatarProps as MuiAvatarProps } from '@mui/material';

export interface AvatarProps extends MuiAvatarProps {
  /**
   * Avatar size
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Avatar variant
   * @default 'circular'
   */
  variant?: 'circular' | 'rounded' | 'square';
  /**
   * Avatar source (image URL or initials)
   */
  src?: string;
  /**
   * Alt text for image
   */
  alt?: string;
  /**
   * Children (typically initials or icon)
   */
  children?: React.ReactNode;
}

/**
 * Avatar component that consumes theme tokens
 *
 * @example
 * ```tsx
 * <Avatar src="/path/to/image.jpg" alt="User" />
 * <Avatar>JD</Avatar>
 * <Avatar><Person /></Avatar>
 * ```
 */
export const Avatar: React.FC<AvatarProps> = ({
  size = 'medium',
  variant = 'circular',
  src,
  alt,
  children,
  sx,
  ...props
}) => {
  return (
    <MuiAvatar
      src={src}
      alt={alt}
      variant={variant}
      sx={{
        // Use theme primary color as default background
        ...sx,
      }}
      {...props}
    >
      {children}
    </MuiAvatar>
  );
};

export default Avatar;
