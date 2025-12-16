/**
 * Divider Component Stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';
import { Box, Typography } from '@mui/material';

const meta: Meta<typeof Divider> = {
  title: 'Atoms/Divider',
  component: Divider,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Divider component that uses theme divider tokens. Used to separate content sections.',
      },
    },
  },
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Divider orientation',
    },
    variant: {
      control: 'select',
      options: ['fullWidth', 'inset', 'middle'],
      description: 'Divider variant',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {
    orientation: 'horizontal',
    variant: 'fullWidth',
  },
};

export const Horizontal: Story = {
  render: () => (
    <Box sx={{ width: '100%' }}>
      <Typography>Content above</Typography>
      <Divider orientation="horizontal" />
      <Typography>Content below</Typography>
    </Box>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Box sx={{ display: 'flex', height: '100px', alignItems: 'center' }}>
      <Typography>Left content</Typography>
      <Divider orientation="vertical" flexItem />
      <Typography>Right content</Typography>
    </Box>
  ),
};

export const Variants: Story = {
  render: () => (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Box>
        <Typography>Full Width</Typography>
        <Divider variant="fullWidth" />
      </Box>
      <Box>
        <Typography>Inset</Typography>
        <Divider variant="inset" />
      </Box>
      <Box>
        <Typography>Middle</Typography>
        <Divider variant="middle" />
      </Box>
    </Box>
  ),
};

export const InList: Story = {
  render: () => (
    <Box sx={{ width: '100%', maxWidth: 360 }}>
      <Typography variant="h6" sx={{ p: 2 }}>
        List Items
      </Typography>
      <Divider />
      <Typography variant="body1" sx={{ p: 2 }}>
        Item 1
      </Typography>
      <Divider />
      <Typography variant="body1" sx={{ p: 2 }}>
        Item 2
      </Typography>
      <Divider />
      <Typography variant="body1" sx={{ p: 2 }}>
        Item 3
      </Typography>
    </Box>
  ),
};
