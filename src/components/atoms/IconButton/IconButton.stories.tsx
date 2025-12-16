/**
 * IconButton Component Stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './IconButton';
import { Icon } from '../Icon';
import { Stack, Box } from '@mui/material';

const meta: Meta<typeof IconButton> = {
  title: 'Atoms/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Icon-only button component. Uses theme tokens for styling.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Icon button size',
    },
    color: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'error',
        'warning',
        'info',
        'success',
        'inherit',
        'default',
      ],
      description: 'Icon button color',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: {
    children: <Icon icon="home" />,
    size: 'medium',
    color: 'primary',
  },
};

export const Sizes: Story = {
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center">
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
        <IconButton size="small">
          <Icon icon="home" />
        </IconButton>
        <span>Small</span>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
        <IconButton size="medium">
          <Icon icon="home" />
        </IconButton>
        <span>Medium</span>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
        <IconButton size="large">
          <Icon icon="home" />
        </IconButton>
        <span>Large</span>
      </Box>
    </Stack>
  ),
};

export const Colors: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <IconButton color="primary">
        <Icon icon="home" />
      </IconButton>
      <IconButton color="secondary">
        <Icon icon="home" />
      </IconButton>
      <IconButton color="error">
        <Icon icon="delete" />
      </IconButton>
      <IconButton color="default">
        <Icon icon="settings" />
      </IconButton>
    </Stack>
  ),
};

export const DifferentIcons: Story = {
  args: {
    color: 'error',
    size: 'large',
  },

  render: () => (
    <Stack direction="row" spacing={2}>
      <IconButton>
        <Icon icon="home" />
      </IconButton>
      <IconButton>
        <Icon icon="favorite" />
      </IconButton>
      <IconButton>
        <Icon icon="settings" />
      </IconButton>
      <IconButton>
        <Icon icon="search" />
      </IconButton>
      <IconButton>
        <Icon icon="delete" />
      </IconButton>
    </Stack>
  ),
};

export const States: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <IconButton>
        <Icon icon="home" />
      </IconButton>
      <IconButton disabled>
        <Icon icon="home" />
      </IconButton>
    </Stack>
  ),
};

export const WithEdge: Story = {
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center">
      <IconButton edge="start">
        <Icon icon="home" />
      </IconButton>
      <span>Content</span>
      <IconButton edge="end">
        <Icon icon="settings" />
      </IconButton>
    </Stack>
  ),
};
