/**
 * Typography Component Tests
 */

import { render, screen } from '@testing-library/react';
import { Typography } from './Typography';

describe('Typography', () => {
  it('renders text content correctly', () => {
    render(<Typography>Test Content</Typography>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('uses body1 variant by default', () => {
    const { container } = render(<Typography>Default variant</Typography>);
    const element = container.querySelector('.MuiTypography-body1');
    expect(element).toBeInTheDocument();
  });

  it('applies custom variant', () => {
    const { container } = render(<Typography variant="h1">Heading</Typography>);
    const element = container.querySelector('.MuiTypography-h1');
    expect(element).toBeInTheDocument();
  });

  it('renders as custom component', () => {
    const { container } = render(<Typography component="span">Span text</Typography>);
    const element = container.querySelector('span');
    expect(element).toBeInTheDocument();
  });

  it('passes through additional props', () => {
    render(<Typography data-testid="typography-test">Test</Typography>);
    expect(screen.getByTestId('typography-test')).toBeInTheDocument();
  });
});

