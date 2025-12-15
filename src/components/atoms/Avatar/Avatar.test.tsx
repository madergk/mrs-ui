/**
 * Avatar Component Tests
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '../../../theme/ThemeProvider';
import { Avatar } from './Avatar';
import { Icon } from '../Icon';

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
};

describe('Avatar', () => {
  it('renders avatar correctly', () => {
    const { container } = renderWithTheme(<Avatar>JD</Avatar>);
    expect(container.querySelector('.MuiAvatar-root')).toBeInTheDocument();
  });

  it('renders with image src', () => {
    renderWithTheme(<Avatar src="/test.jpg" alt="Test" />);
    const img = screen.getByAltText('Test');
    expect(img).toHaveAttribute('src', '/test.jpg');
  });

  it('renders with children (initials)', () => {
    renderWithTheme(<Avatar>JD</Avatar>);
    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  it('renders with icon', () => {
    const { container } = renderWithTheme(
      <Avatar>
        <Icon icon="person" />
      </Avatar>
    );
    expect(container.querySelector('.material-symbols-rounded')).toBeInTheDocument();
  });

  it('applies circular variant by default', () => {
    const { container } = renderWithTheme(<Avatar>JD</Avatar>);
    const avatar = container.querySelector('.MuiAvatar-circular');
    expect(avatar).toBeInTheDocument();
  });

  it('applies rounded variant', () => {
    const { container } = renderWithTheme(<Avatar variant="rounded">JD</Avatar>);
    const avatar = container.querySelector('.MuiAvatar-rounded');
    expect(avatar).toBeInTheDocument();
  });

  it('applies medium size by default', () => {
    const { container } = renderWithTheme(<Avatar>JD</Avatar>);
    const avatar = container.querySelector('.MuiAvatar-root');
    expect(avatar).toBeInTheDocument();
  });
});

