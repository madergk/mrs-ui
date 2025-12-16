/**
 * Button Component Stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { Box, Stack } from '@mui/material';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Button component with variants and sizes. Uses theme tokens and follows MRS design system rules (pill shape, sentence case).',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['contained', 'outlined', 'text'],
      description: 'Button variant',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Button size',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'warning', 'info', 'success', 'inherit'],
      description: 'Button color',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'contained',
    size: 'medium',
    color: 'primary',
  },
};

export const Variants: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="text">Text</Button>
    </Stack>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center">
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </Stack>
  ),
};

export const Colors: Story = {
  render: () => (
    <Stack direction="row" spacing={2} flexWrap="wrap">
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="error">Error</Button>
      <Button color="warning">Warning</Button>
      <Button color="info">Info</Button>
      <Button color="success">Success</Button>
    </Stack>
  ),
};

export const States: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Button>Default</Button>
      <Button disabled>Disabled</Button>
    </Stack>
  ),
};

export const AllVariantsAndSizes: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Stack direction="row" spacing={2} alignItems="center">
        <Button variant="contained" size="small">
          Small Contained
        </Button>
        <Button variant="contained" size="medium">
          Medium Contained
        </Button>
        <Button variant="contained" size="large">
          Large Contained
        </Button>
      </Stack>
      <Stack direction="row" spacing={2} alignItems="center">
        <Button variant="outlined" size="small">
          Small Outlined
        </Button>
        <Button variant="outlined" size="medium">
          Medium Outlined
        </Button>
        <Button variant="outlined" size="large">
          Large Outlined
        </Button>
      </Stack>
      <Stack direction="row" spacing={2} alignItems="center">
        <Button variant="text" size="small">
          Small Text
        </Button>
        <Button variant="text" size="medium">
          Medium Text
        </Button>
        <Button variant="text" size="large">
          Large Text
        </Button>
      </Stack>
    </Box>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" startIcon={<span>←</span>}>
        Back
      </Button>
      <Button variant="contained" endIcon={<span>→</span>}>
        Next
      </Button>
    </Stack>
  ),
};
