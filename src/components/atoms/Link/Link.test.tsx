/**
 * Link Component Tests
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '../../../theme/ThemeProvider';
import { Link } from './Link';

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
};

describe('Link', () => {
  it('renders link text correctly', () => {
    renderWithTheme(<Link href="/test">Test Link</Link>);
    expect(screen.getByText('Test Link')).toBeInTheDocument();
  });

  it('applies href attribute', () => {
    renderWithTheme(<Link href="/test">Link</Link>);
    const link = screen.getByText('Link');
    expect(link).toHaveAttribute('href', '/test');
  });

  it('uses body1 variant by default', () => {
    const { container } = renderWithTheme(<Link href="/test">Link</Link>);
    const link = container.querySelector('.MuiLink-root');
    expect(link).toBeInTheDocument();
  });

  it('applies primary color by default', () => {
    const { container } = renderWithTheme(<Link href="/test">Link</Link>);
    const link = container.querySelector('.MuiLink-colorPrimary');
    expect(link).toBeInTheDocument();
  });

  it('applies hover underline by default', () => {
    const { container } = renderWithTheme(<Link href="/test">Link</Link>);
    const link = container.querySelector('.MuiLink-underlineHover');
    expect(link).toBeInTheDocument();
  });

  it('applies always underline', () => {
    const { container } = renderWithTheme(
      <Link href="/test" underline="always">
        Link
      </Link>
    );
    const link = container.querySelector('.MuiLink-underlineAlways');
    expect(link).toBeInTheDocument();
  });

  it('applies none underline', () => {
    const { container } = renderWithTheme(
      <Link href="/test" underline="none">
        Link
      </Link>
    );
    const link = container.querySelector('.MuiLink-underlineNone');
    expect(link).toBeInTheDocument();
  });

  it('passes through additional props', () => {
    renderWithTheme(
      <Link href="/test" data-testid="link-test">
        Link
      </Link>
    );
    expect(screen.getByTestId('link-test')).toBeInTheDocument();
  });
});
