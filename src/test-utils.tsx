/**
 * Test Utilities
 *
 * Common utilities for testing components that require theme context.
 */

import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from './theme/ThemeProvider';

/**
 * Render component with ThemeProvider wrapper
 * Use this for all component tests that use MUI components
 */
export const renderWithTheme = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <ThemeProvider>{children}</ThemeProvider>
  );

  return render(ui, { wrapper: Wrapper, ...options });
};

// Re-export everything from @testing-library/react
export * from '@testing-library/react';
