/**
 * Chip Component Tests
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '../../../theme/ThemeProvider';
import { Chip } from './Chip';
import { Icon } from '../Icon';

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
};

describe('Chip', () => {
  it('renders chip label correctly', () => {
    renderWithTheme(<Chip label="Test Chip" />);
    expect(screen.getByText('Test Chip')).toBeInTheDocument();
  });

  it('uses filled variant by default', () => {
    const { container } = renderWithTheme(<Chip label="Chip" />);
    const chip = container.querySelector('.MuiChip-filled');
    expect(chip).toBeInTheDocument();
  });

  it('applies outlined variant', () => {
    const { container } = renderWithTheme(<Chip label="Chip" variant="outlined" />);
    const chip = container.querySelector('.MuiChip-outlined');
    expect(chip).toBeInTheDocument();
  });

  it('applies small size', () => {
    const { container } = renderWithTheme(<Chip label="Chip" size="small" />);
    const chip = container.querySelector('.MuiChip-sizeSmall');
    expect(chip).toBeInTheDocument();
  });

  it('applies medium size by default', () => {
    const { container } = renderWithTheme(<Chip label="Chip" />);
    const chip = container.querySelector('.MuiChip-sizeMedium');
    expect(chip).toBeInTheDocument();
  });

  it('shows delete icon when onDelete is provided', () => {
    const { container } = renderWithTheme(<Chip label="Chip" onDelete={() => {}} />);
    const deleteIcon = container.querySelector('.MuiChip-deleteIcon');
    expect(deleteIcon).toBeInTheDocument();
  });

  it('calls onDelete when delete icon is clicked', async () => {
    const handleDelete = jest.fn();
    const { container } = renderWithTheme(<Chip label="Chip" onDelete={handleDelete} />);

    const deleteIcon = container.querySelector('.MuiChip-deleteIcon');
    if (deleteIcon) {
      await userEvent.click(deleteIcon);
      expect(handleDelete).toHaveBeenCalledTimes(1);
    }
  });

  it('renders with icon', () => {
    const { container } = renderWithTheme(<Chip label="Chip" icon={<Icon icon="star" />} />);
    expect(container.querySelector('.material-symbols-rounded')).toBeInTheDocument();
  });

  it('applies default color', () => {
    const { container } = renderWithTheme(<Chip label="Chip" />);
    const chip = container.querySelector('.MuiChip-colorDefault');
    expect(chip).toBeInTheDocument();
  });
});
