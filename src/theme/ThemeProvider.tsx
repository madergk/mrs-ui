/**
 * Theme Provider Component
 * 
 * Wraps the application with Material-UI ThemeProvider
 * and provides theme context to all child components.
 */

import React from 'react';
import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';
import { createMRSTheme } from './index';
import '../styles/material-symbols.css';

export interface ThemeProviderProps {
  /**
   * Color scheme to use ('light' or 'dark')
   * @default 'light'
   */
  colorScheme?: 'light' | 'dark';
  /**
   * Child components
   */
  children: React.ReactNode;
}

/**
 * ThemeProvider component that wraps the application with Material-UI theme
 * 
 * @example
 * ```tsx
 * <ThemeProvider colorScheme="light">
 *   <App />
 * </ThemeProvider>
 * ```
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  colorScheme = 'light',
  children,
}) => {
  const theme = createMRSTheme(colorScheme);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;

