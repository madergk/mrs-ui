/**
 * Divider Component Tests
 */

import { render, screen } from '@testing-library/react';
import { Divider } from './Divider';

describe('Divider', () => {
  it('renders horizontal divider by default', () => {
    const { container } = render(<Divider />);
    const divider = container.querySelector('.MuiDivider-root');
    expect(divider).toBeInTheDocument();
    expect(divider).not.toHaveClass('MuiDivider-vertical');
  });

  it('renders vertical divider', () => {
    const { container } = render(<Divider orientation="vertical" />);
    const divider = container.querySelector('.MuiDivider-vertical');
    expect(divider).toBeInTheDocument();
  });

  it('applies variant prop', () => {
    const { container } = render(<Divider variant="inset" />);
    const divider = container.querySelector('.MuiDivider-inset');
    expect(divider).toBeInTheDocument();
  });

  it('applies flexItem prop for vertical dividers', () => {
    const { container } = render(<Divider orientation="vertical" flexItem />);
    const divider = container.querySelector('.MuiDivider-flexItem');
    expect(divider).toBeInTheDocument();
  });

  it('passes through additional props', () => {
    render(<Divider data-testid="divider-test" />);
    expect(screen.getByTestId('divider-test')).toBeInTheDocument();
  });
});
