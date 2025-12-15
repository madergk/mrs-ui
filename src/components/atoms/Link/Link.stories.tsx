/**
 * Link Component Stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Link } from './Link';
import { Stack, Typography } from '@mui/material';

const meta: Meta<typeof Link> = {
  title: 'Atoms/Link',
  component: Link,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Link component for navigation. Uses theme tokens for styling.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['body1', 'body2', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'caption', 'overline'],
      description: 'Link typography variant',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'warning', 'info', 'success', 'inherit', 'textPrimary', 'textSecondary'],
      description: 'Link color',
    },
    underline: {
      control: 'select',
      options: ['none', 'hover', 'always'],
      description: 'Underline style',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    href: '#',
    children: 'Link',
    variant: 'body1',
    color: 'primary',
    underline: 'hover',
  },
};

export const UnderlineStyles: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Link href="#" underline="none">None</Link>
      <Link href="#" underline="hover">Hover</Link>
      <Link href="#" underline="always">Always</Link>
    </Stack>
  ),
};

export const Colors: Story = {
  render: () => (
    <Stack direction="row" spacing={2} flexWrap="wrap">
      <Link href="#" color="primary">Primary</Link>
      <Link href="#" color="secondary">Secondary</Link>
      <Link href="#" color="error">Error</Link>
      <Link href="#" color="inherit">Inherit</Link>
    </Stack>
  ),
};

export const InText: Story = {
  render: () => (
    <Typography>
      This is a paragraph with a <Link href="#">link</Link> in it.
    </Typography>
  ),
};

export const Variants: Story = {
  render: () => (
    <Stack spacing={2}>
      <Link href="#" variant="h1">Heading 1 Link</Link>
      <Link href="#" variant="h2">Heading 2 Link</Link>
      <Link href="#" variant="body1">Body 1 Link</Link>
      <Link href="#" variant="body2">Body 2 Link</Link>
      <Link href="#" variant="caption">Caption Link</Link>
    </Stack>
  ),
};

