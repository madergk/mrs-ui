/**
 * Badge Component Stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';
import { IconButton } from '../IconButton';
import { Avatar } from '../Avatar';
import { Icon } from '../Icon';
import { Stack, Box } from '@mui/material';

const meta: Meta<typeof Badge> = {
  title: 'Atoms/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Badge component for showing notifications. Typically wraps Avatar or IconButton.',
      },
    },
  },
  argTypes: {
    badgeContent: {
      control: 'number',
      description: 'Badge content (number or text)',
    },
    max: {
      control: 'number',
      description: 'Maximum number before showing max+',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'warning', 'info', 'success', 'default'],
      description: 'Badge color',
    },
    variant: {
      control: 'select',
      options: ['standard', 'dot'],
      description: 'Badge variant',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    badgeContent: 4,
    children: (
      <IconButton>
        <Icon icon="mail" />
      </IconButton>
    ),
  },
};

export const WithIconButton: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Badge badgeContent={4}>
        <IconButton>
          <Icon icon="mail" />
        </IconButton>
      </Badge>
      <Badge badgeContent={10}>
        <IconButton>
          <Icon icon="notifications" />
        </IconButton>
      </Badge>
      <Badge badgeContent={99}>
        <IconButton>
          <Icon icon="shopping_cart" />
        </IconButton>
      </Badge>
    </Stack>
  ),
};

export const WithAvatar: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Badge badgeContent={4}>
        <Avatar>JD</Avatar>
      </Badge>
      <Badge badgeContent={99} max={99}>
        <Avatar>AB</Avatar>
      </Badge>
      <Badge variant="dot">
        <Avatar>CD</Avatar>
      </Badge>
    </Stack>
  ),
};

export const Colors: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Badge badgeContent={4} color="primary">
        <IconButton>
          <Icon icon="mail" />
        </IconButton>
      </Badge>
      <Badge badgeContent={4} color="secondary">
        <IconButton>
          <Icon icon="mail" />
        </IconButton>
      </Badge>
      <Badge badgeContent={4} color="error">
        <IconButton>
          <Icon icon="mail" />
        </IconButton>
      </Badge>
      <Badge badgeContent={4} color="warning">
        <IconButton>
          <Icon icon="mail" />
        </IconButton>
      </Badge>
    </Stack>
  ),
};

export const Variants: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Badge badgeContent={4} variant="standard">
        <IconButton>
          <Icon icon="mail" />
        </IconButton>
      </Badge>
      <Badge variant="dot">
        <IconButton>
          <Icon icon="mail" />
        </IconButton>
      </Badge>
    </Stack>
  ),
};

export const MaxValue: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Badge badgeContent={99} max={99}>
        <IconButton>
          <Icon icon="mail" />
        </IconButton>
      </Badge>
      <Badge badgeContent={150} max={99}>
        <IconButton>
          <Icon icon="mail" />
        </IconButton>
      </Badge>
    </Stack>
  ),
};

