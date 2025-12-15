/**
 * Paper Component Tests
 */

import { render, screen } from '@testing-library/react';
import { Paper } from './Paper';

describe('Paper', () => {
  it('renders children correctly', () => {
    render(<Paper>Test Content</Paper>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies default elevation', () => {
    const { container } = render(<Paper>Content</Paper>);
    const paper = container.querySelector('.MuiPaper-elevation1');
    expect(paper).toBeInTheDocument();
  });

  it('applies custom elevation', () => {
    const { container } = render(<Paper elevation={4}>Content</Paper>);
    const paper = container.querySelector('.MuiPaper-elevation4');
    expect(paper).toBeInTheDocument();
  });

  it('applies outlined variant', () => {
    const { container } = render(<Paper variant="outlined">Content</Paper>);
    const paper = container.querySelector('.MuiPaper-outlined');
    expect(paper).toBeInTheDocument();
  });

  it('applies square prop', () => {
    const { container } = render(<Paper square>Content</Paper>);
    const paper = container.querySelector('.MuiPaper-root');
    expect(paper).toHaveStyle({ borderRadius: '0px' });
  });

  it('passes through additional props', () => {
    render(<Paper data-testid="paper-test">Content</Paper>);
    expect(screen.getByTestId('paper-test')).toBeInTheDocument();
  });
});

