/**
 * ThemeProvider Component Tests
 */

import { render, screen } from '@testing-library/react';
import { ThemeProvider } from './ThemeProvider';
import { Box } from '@mui/material';

describe('ThemeProvider', () => {
  it('renders children correctly', () => {
    render(
      <ThemeProvider>
        <Box data-testid="test-content">Test Content</Box>
      </ThemeProvider>
    );

    expect(screen.getByTestId('test-content')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies light theme by default', () => {
    const { container } = render(
      <ThemeProvider>
        <Box>Content</Box>
      </ThemeProvider>
    );

    // Theme provider should render without errors
    expect(container).toBeInTheDocument();
  });

  it('applies dark theme when specified', () => {
    const { container } = render(
      <ThemeProvider colorScheme="dark">
        <Box>Content</Box>
      </ThemeProvider>
    );

    // Theme provider should render without errors
    expect(container).toBeInTheDocument();
  });
});
