/**
 * AppBar Component
 *
 * Application header bar component.
 * Uses theme tokens for styling and follows MRS design system rules.
 */

import React from 'react';
import { useTheme } from '@mui/material/styles';
import {
  AppBar as MuiAppBar,
  AppBarProps as MuiAppBarProps,
  Toolbar as MuiToolbar,
  ToolbarProps as MuiToolbarProps,
} from '@mui/material';

export interface AppBarProps extends MuiAppBarProps {
  /**
   * AppBar position
   * @default 'static'
   */
  position?: 'fixed' | 'absolute' | 'sticky' | 'static' | 'relative';
  /**
   * AppBar color
   * @default 'default'
   */
  color?: 'default' | 'primary' | 'secondary' | 'transparent' | 'inherit';
}

/**
 * AppBar component that consumes theme tokens
 *
 * @example
 * ```tsx
 * <AppBar>
 *   <Toolbar>Content</Toolbar>
 * </AppBar>
 * ```
 */
export const AppBar: React.FC<AppBarProps> = ({
  position = 'static',
  color = 'default',
  sx,
  ...props
}) => {
  const theme = useTheme();

  return (
    <MuiAppBar
      position={position}
      color={color}
      elevation={1}
      sx={{
        borderBottom: `1px solid ${theme.palette.divider}`,
        ...sx,
      }}
      {...props}
    />
  );
};

export interface ToolbarProps extends MuiToolbarProps {}

/**
 * Toolbar component
 */
export const Toolbar: React.FC<ToolbarProps> = (props) => {
  return <MuiToolbar {...props} />;
};

export default AppBar;
