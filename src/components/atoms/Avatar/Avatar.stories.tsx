/**
 * Avatar Component Stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import { Icon } from '../Icon';
import { Stack, Box } from '@mui/material';

const meta: Meta<typeof Avatar> = {
  title: 'Atoms/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Avatar component for user profiles. Supports images, initials, and icons.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['circular', 'rounded', 'square'],
      description: 'Avatar variant',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Avatar size',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    children: 'JD',
    variant: 'circular',
  },
};

export const WithInitials: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Avatar>JD</Avatar>
      <Avatar>AB</Avatar>
      <Avatar>CD</Avatar>
    </Stack>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Avatar>
        <Icon icon="person" />
      </Avatar>
      <Avatar color="secondary">
        <Icon icon="person" />
      </Avatar>
      <Avatar color="error">
        <Icon icon="person" />
      </Avatar>
    </Stack>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center">
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
        <Avatar size="small">JD</Avatar>
        <span>Small</span>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
        <Avatar size="medium">JD</Avatar>
        <span>Medium</span>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
        <Avatar size="large">JD</Avatar>
        <span>Large</span>
      </Box>
    </Stack>
  ),
};

export const Variants: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
        <Avatar variant="circular">JD</Avatar>
        <span>Circular</span>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
        <Avatar variant="rounded">JD</Avatar>
        <span>Rounded</span>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
        <Avatar variant="square">JD</Avatar>
        <span>Square</span>
      </Box>
    </Stack>
  ),
};

export const WithImage: Story = {
  render: () => <Avatar src="https://mui.com/static/images/avatar/1.jpg" alt="User avatar" />,
};
