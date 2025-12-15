/**
 * Button Component Tests
 */

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

describe('Button', () => {
  it('renders button text correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('uses contained variant by default', () => {
    const { container } = render(<Button>Button</Button>);
    const button = container.querySelector('.MuiButton-contained');
    expect(button).toBeInTheDocument();
  });

  it('applies outlined variant', () => {
    const { container } = render(<Button variant="outlined">Button</Button>);
    const button = container.querySelector('.MuiButton-outlined');
    expect(button).toBeInTheDocument();
  });

  it('applies text variant', () => {
    const { container } = render(<Button variant="text">Button</Button>);
    const button = container.querySelector('.MuiButton-text');
    expect(button).toBeInTheDocument();
  });

  it('applies small size', () => {
    const { container } = render(<Button size="small">Button</Button>);
    const button = container.querySelector('.MuiButton-sizeSmall');
    expect(button).toBeInTheDocument();
  });

  it('applies medium size by default', () => {
    const { container } = render(<Button>Button</Button>);
    const button = container.querySelector('.MuiButton-sizeMedium');
    expect(button).toBeInTheDocument();
  });

  it('applies large size', () => {
    const { container } = render(<Button size="large">Button</Button>);
    const button = container.querySelector('.MuiButton-sizeLarge');
    expect(button).toBeInTheDocument();
  });

  it('handles click events', async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    const button = screen.getByText('Click me');
    await userEvent.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('disables button when disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByText('Disabled');
    expect(button).toBeDisabled();
  });

  it('applies primary color by default', () => {
    const { container } = render(<Button>Button</Button>);
    const button = container.querySelector('.MuiButton-colorPrimary');
    expect(button).toBeInTheDocument();
  });

  it('applies secondary color', () => {
    const { container } = render(<Button color="secondary">Button</Button>);
    const button = container.querySelector('.MuiButton-colorSecondary');
    expect(button).toBeInTheDocument();
  });

  it('passes through additional props', () => {
    render(<Button data-testid="button-test">Button</Button>);
    expect(screen.getByTestId('button-test')).toBeInTheDocument();
  });
});

