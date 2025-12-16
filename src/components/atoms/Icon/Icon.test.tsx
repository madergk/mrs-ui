/**
 * Icon Component Tests
 */

import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '../../../theme/ThemeProvider';
import { Icon } from './Icon';

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
};

describe('Icon', () => {
  it('renders icon correctly', () => {
    const { container } = renderWithTheme(<Icon icon="home" />);
    const iconElement = container.querySelector('.material-symbols-rounded');
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveTextContent('home');
  });

  it('applies medium size by default', () => {
    const { container } = renderWithTheme(<Icon icon="home" />);
    const iconElement = container.querySelector('.material-symbols-rounded');
    expect(iconElement).toHaveStyle({ fontSize: '24px' });
  });

  it('applies small size', () => {
    const { container } = renderWithTheme(<Icon icon="home" size="small" />);
    const iconElement = container.querySelector('.material-symbols-rounded');
    expect(iconElement).toHaveStyle({ fontSize: '20px' });
  });

  it('applies large size', () => {
    const { container } = renderWithTheme(<Icon icon="home" size="large" />);
    const iconElement = container.querySelector('.material-symbols-rounded');
    expect(iconElement).toHaveStyle({ fontSize: '35px' });
  });

  it('applies inherit size', () => {
    const { container } = renderWithTheme(<Icon icon="home" size="inherit" />);
    const iconElement = container.querySelector('.material-symbols-rounded');
    expect(iconElement).toHaveStyle({ fontSize: '16px' });
  });

  it('applies default font-variation-settings', () => {
    const { container } = renderWithTheme(<Icon icon="home" />);
    const iconElement = container.querySelector('.material-symbols-rounded');
    expect(iconElement).toHaveStyle({
      fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24",
    });
  });

  it('applies custom fill', () => {
    const { container } = renderWithTheme(<Icon icon="favorite" fill={1} />);
    const iconElement = container.querySelector('.material-symbols-rounded');
    expect(iconElement).toHaveStyle({
      fontVariationSettings: expect.stringContaining("'FILL' 1"),
    });
  });

  it('passes through additional props', () => {
    const { container } = renderWithTheme(<Icon icon="home" data-testid="icon-test" />);
    expect(container.querySelector('[data-testid="icon-test"]')).toBeInTheDocument();
  });
});
