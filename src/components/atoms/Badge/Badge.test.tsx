/**
 * Badge Component Tests
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '../../../theme/ThemeProvider';
import { Badge } from './Badge';
import { IconButton } from '../IconButton';
import { Icon } from '../Icon';

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
};

describe('Badge', () => {
  it('renders badge with content', () => {
    renderWithTheme(
      <Badge badgeContent={4}>
        <IconButton>
          <Icon icon="mail" />
        </IconButton>
      </Badge>
    );
    expect(screen.getByText('4')).toBeInTheDocument();
  });

  it('renders children correctly', () => {
    renderWithTheme(
      <Badge badgeContent={1}>
        <span>Child</span>
      </Badge>
    );
    expect(screen.getByText('Child')).toBeInTheDocument();
  });

  it('applies error color by default', () => {
    const { container } = renderWithTheme(
      <Badge badgeContent={1}>
        <span>Child</span>
      </Badge>
    );
    const badge = container.querySelector('.MuiBadge-colorError');
    expect(badge).toBeInTheDocument();
  });

  it('applies standard variant by default', () => {
    const { container } = renderWithTheme(
      <Badge badgeContent={1}>
        <span>Child</span>
      </Badge>
    );
    const badge = container.querySelector('.MuiBadge-standard');
    expect(badge).toBeInTheDocument();
  });

  it('applies dot variant', () => {
    const { container } = renderWithTheme(
      <Badge variant="dot">
        <span>Child</span>
      </Badge>
    );
    const badge = container.querySelector('.MuiBadge-dot');
    expect(badge).toBeInTheDocument();
  });

  it('respects max prop', () => {
    renderWithTheme(
      <Badge badgeContent={150} max={99}>
        <span>Child</span>
      </Badge>
    );
    expect(screen.getByText('99+')).toBeInTheDocument();
  });

  it('hides badge when badgeContent is 0 and showZero is false', () => {
    const { container } = renderWithTheme(
      <Badge badgeContent={0}>
        <span>Child</span>
      </Badge>
    );
    const badge = container.querySelector('.MuiBadge-badge');
    expect(badge).not.toBeInTheDocument();
  });
});

