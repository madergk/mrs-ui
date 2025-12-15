/**
 * IconButton Component Tests
 */

import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '../../../theme/ThemeProvider';
import { IconButton } from './IconButton';
import { Icon } from '../Icon';

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
};

describe('IconButton', () => {
  it('renders icon correctly', () => {
    const { container } = renderWithTheme(
      <IconButton>
        <Icon icon="home" />
      </IconButton>
    );
    expect(container.querySelector('.material-symbols-rounded')).toBeInTheDocument();
  });

  it('handles click events', async () => {
    const handleClick = jest.fn();
    const { container } = renderWithTheme(
      <IconButton onClick={handleClick}>
        <Icon icon="home" />
      </IconButton>
    );
    
    const button = container.querySelector('button');
    if (button) {
      await userEvent.click(button);
      expect(handleClick).toHaveBeenCalledTimes(1);
    }
  });

  it('applies small size', () => {
    const { container } = renderWithTheme(
      <IconButton size="small">
        <Icon icon="home" />
      </IconButton>
    );
    const button = container.querySelector('.MuiIconButton-sizeSmall');
    expect(button).toBeInTheDocument();
  });

  it('applies medium size by default', () => {
    const { container } = renderWithTheme(
      <IconButton>
        <Icon icon="home" />
      </IconButton>
    );
    const button = container.querySelector('.MuiIconButton-sizeMedium');
    expect(button).toBeInTheDocument();
  });

  it('applies large size', () => {
    const { container } = renderWithTheme(
      <IconButton size="large">
        <Icon icon="home" />
      </IconButton>
    );
    const button = container.querySelector('.MuiIconButton-sizeLarge');
    expect(button).toBeInTheDocument();
  });

  it('disables button when disabled prop is true', () => {
    const { container } = renderWithTheme(
      <IconButton disabled>
        <Icon icon="home" />
      </IconButton>
    );
    const button = container.querySelector('button');
    expect(button).toBeDisabled();
  });

  it('applies edge prop', () => {
    const { container } = renderWithTheme(
      <IconButton edge="start">
        <Icon icon="home" />
      </IconButton>
    );
    const button = container.querySelector('.MuiIconButton-edgeStart');
    expect(button).toBeInTheDocument();
  });
});

