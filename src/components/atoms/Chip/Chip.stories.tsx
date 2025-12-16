/**
 * Chip Component Stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from './Chip';
import { Icon } from '../Icon';
import { Stack } from '@mui/material';

const meta: Meta<typeof Chip> = {
  title: 'Atoms/Chip',
  component: Chip,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Chip component for tags and labels. Uses theme tokens and follows MRS design system rules (pill shape).',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outlined'],
      description: 'Chip variant',
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: 'Chip size',
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'error', 'warning', 'info', 'success'],
      description: 'Chip color',
    },
    onDelete: {
      action: 'delete',
      description: 'Delete handler',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: {
    label: 'Chip',
    variant: 'filled',
    size: 'medium',
    color: 'default',
  },
};

export const Variants: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Chip label="Filled" variant="filled" />
      <Chip label="Outlined" variant="outlined" />
    </Stack>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center">
      <Chip label="Small" size="small" />
      <Chip label="Medium" size="medium" />
    </Stack>
  ),
};

export const Colors: Story = {
  render: () => (
    <Stack direction="row" spacing={2} flexWrap="wrap">
      <Chip label="Default" color="default" />
      <Chip label="Primary" color="primary" />
      <Chip label="Secondary" color="secondary" />
      <Chip label="Error" color="error" />
      <Chip label="Warning" color="warning" />
      <Chip label="Info" color="info" />
      <Chip label="Success" color="success" />
    </Stack>
  ),
};

export const Deletable: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Chip label="Deletable" onDelete={() => {}} />
      <Chip label="Deletable Outlined" variant="outlined" onDelete={() => {}} />
    </Stack>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Chip label="With Icon" icon={<Icon icon="star" />} />
      <Chip label="Success" icon={<Icon icon="check_circle" />} color="success" />
    </Stack>
  ),
};

export const Clickable: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Chip label="Clickable" clickable />
      <Chip label="Clickable Outlined" variant="outlined" clickable />
    </Stack>
  ),
};
