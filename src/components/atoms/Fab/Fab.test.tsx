/**
 * Fab Component Tests
 */

import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '../../../theme/ThemeProvider';
import { Fab } from './Fab';
import { Icon } from '../Icon';

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
};

describe('Fab', () => {
  it('renders fab correctly', () => {
    const { container } = renderWithTheme(
      <Fab>
        <Icon icon="add" />
      </Fab>
    );
    expect(container.querySelector('.MuiFab-root')).toBeInTheDocument();
  });

  it('uses circular variant by default', () => {
    const { container } = renderWithTheme(
      <Fab>
        <Icon icon="add" />
      </Fab>
    );
    const fab = container.querySelector('.MuiFab-circular');
    expect(fab).toBeInTheDocument();
  });

  it('applies extended variant', () => {
    const { container } = renderWithTheme(
      <Fab variant="extended">
        <Icon icon="add" />
        Create
      </Fab>
    );
    const fab = container.querySelector('.MuiFab-extended');
    expect(fab).toBeInTheDocument();
  });

  it('applies large size by default', () => {
    const { container } = renderWithTheme(
      <Fab>
        <Icon icon="add" />
      </Fab>
    );
    const fab = container.querySelector('.MuiFab-sizeLarge');
    expect(fab).toBeInTheDocument();
  });

  it('applies small size', () => {
    const { container } = renderWithTheme(
      <Fab size="small">
        <Icon icon="add" />
      </Fab>
    );
    const fab = container.querySelector('.MuiFab-sizeSmall');
    expect(fab).toBeInTheDocument();
  });

  it('handles click events', async () => {
    const handleClick = jest.fn();
    const { container } = renderWithTheme(
      <Fab onClick={handleClick}>
        <Icon icon="add" />
      </Fab>
    );

    const button = container.querySelector('button');
    if (button) {
      await userEvent.click(button);
      expect(handleClick).toHaveBeenCalledTimes(1);
    }
  });

  it('disables fab when disabled prop is true', () => {
    const { container } = renderWithTheme(
      <Fab disabled>
        <Icon icon="add" />
      </Fab>
    );
    const button = container.querySelector('button');
    expect(button).toBeDisabled();
  });
});
