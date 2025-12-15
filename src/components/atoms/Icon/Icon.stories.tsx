/**
 * Icon Component Stories
 * 
 * Icon component using Material Symbols font icons.
 * Uses Material Symbols Rounded family with proper font-variation-settings.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';
import { Stack, Box, Typography } from '@mui/material';

const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icon',
  component: Icon,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Icon component using Material Symbols Rounded font. Uses weight 300, optical size 24 (matching Nunito 400 typography), and rounded family by default.',
      },
    },
  },
  argTypes: {
    icon: {
      control: 'text',
      description: 'Icon name in snake_case format (e.g., "home", "settings")',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 'inherit'],
      description: 'Icon size',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'warning', 'info', 'success', 'action', 'disabled', 'inherit'],
      description: 'Icon color from theme',
    },
    fill: {
      control: 'select',
      options: [0, 1],
      description: 'Fill axis (0 = outlined, 1 = filled)',
    },
    weight: {
      control: 'select',
      options: [100, 200, 300, 400, 500, 600, 700],
      description: 'Weight axis (default: 300)',
    },
    type: {
      control: 'select',
      options: ['font', 'svg'],
      description: 'Icon type',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    icon: 'home',
    size: 'medium',
    color: 'action',
  },
};

export const Sizes: Story = {
  render: () => (
    <Stack direction="row" spacing={3} alignItems="center">
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
        <Icon icon="home" size="small" />
        <Typography variant="caption">Small (20px)</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
        <Icon icon="home" size="medium" />
        <Typography variant="caption">Medium (24px)</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
        <Icon icon="home" size="large" />
        <Typography variant="caption">Large (35px)</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
        <Icon icon="home" size="inherit" />
        <Typography variant="caption">Inherit (16px)</Typography>
      </Box>
    </Stack>
  ),
};

export const DifferentIcons: Story = {
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center">
      <Icon icon="home" color="action" />
      <Icon icon="settings" color="action" />
      <Icon icon="person" color="action" />
      <Icon icon="favorite" color="action" />
      <Icon icon="search" color="action" />
      <Icon icon="add" color="action" />
      <Icon icon="delete" color="action" />
      <Icon icon="edit" color="action" />
    </Stack>
  ),
};

export const Colors: Story = {
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
      <Icon icon="home" color="primary" />
      <Icon icon="home" color="secondary" />
      <Icon icon="home" color="error" />
      <Icon icon="home" color="warning" />
      <Icon icon="home" color="info" />
      <Icon icon="home" color="success" />
      <Icon icon="home" color="action" />
      <Icon icon="home" color="disabled" />
    </Stack>
  ),
};

export const FillVariants: Story = {
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center">
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
        <Icon icon="favorite" fill={0} />
        <Typography variant="caption">Outlined (fill=0)</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
        <Icon icon="favorite" fill={1} />
        <Typography variant="caption">Filled (fill=1)</Typography>
      </Box>
    </Stack>
  ),
};

export const WeightVariants: Story = {
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
        <Icon icon="home" weight={100} />
        <Typography variant="caption">100</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
        <Icon icon="home" weight={300} />
        <Typography variant="caption">300 (default)</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
        <Icon icon="home" weight={400} />
        <Typography variant="caption">400</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
        <Icon icon="home" weight={700} />
        <Typography variant="caption">700</Typography>
      </Box>
    </Stack>
  ),
};

