/**
 * Typography Component Stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Atoms/Typography',
  component: Typography,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Typography component that uses theme typography tokens. Supports all Material-UI typography variants.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'subtitle1',
        'subtitle2',
        'body1',
        'body2',
        'caption',
        'overline',
      ],
      description: 'Typography variant from theme',
    },
    component: {
      control: 'text',
      description: 'HTML element or React component to render',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    children: 'Default body text (body1)',
  },
};

export const Heading1: Story = {
  args: {
    variant: 'h1',
    children: 'Heading 1',
  },
};

export const Heading2: Story = {
  args: {
    variant: 'h2',
    children: 'Heading 2',
  },
};

export const Heading3: Story = {
  args: {
    variant: 'h3',
    children: 'Heading 3',
  },
};

export const Body1: Story = {
  args: {
    variant: 'body1',
    children:
      'Body 1 text - This is the default body text style used for paragraphs and general content.',
  },
};

export const Body2: Story = {
  args: {
    variant: 'body2',
    children: 'Body 2 text - Smaller body text for secondary content.',
  },
};

export const Subtitle1: Story = {
  args: {
    variant: 'subtitle1',
    children: 'Subtitle 1',
  },
};

export const Subtitle2: Story = {
  args: {
    variant: 'subtitle2',
    children: 'Subtitle 2',
  },
};

export const Caption: Story = {
  args: {
    variant: 'caption',
    children: 'Caption text',
  },
};

export const Overline: Story = {
  args: {
    variant: 'overline',
    children: 'OVERLINE TEXT',
  },
};

export const CustomComponent: Story = {
  args: {
    component: 'span',
    variant: 'body1',
    children: 'Rendered as span element',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="h5">Heading 5</Typography>
      <Typography variant="h6">Heading 6</Typography>
      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>
      <Typography variant="body1">Body 1 - Main body text</Typography>
      <Typography variant="body2">Body 2 - Secondary body text</Typography>
      <Typography variant="caption">Caption text</Typography>
      <Typography variant="overline">OVERLINE TEXT</Typography>
    </div>
  ),
};
