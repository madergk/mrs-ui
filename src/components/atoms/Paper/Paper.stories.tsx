/**
 * Paper Component Stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Paper } from './Paper';
import { Typography, Box } from '@mui/material';

const meta: Meta<typeof Paper> = {
  title: 'Atoms/Paper',
  component: Paper,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Paper component that uses theme paper tokens. Provides a surface container with elevation and styling.',
      },
    },
  },
  argTypes: {
    elevation: {
      control: { type: 'range', min: 0, max: 24, step: 1 },
      description: 'Elevation level (0-24)',
    },
    variant: {
      control: 'select',
      options: ['elevation', 'outlined'],
      description: 'Paper variant',
    },
    square: {
      control: 'boolean',
      description: 'Square corners (no border radius)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Paper>;

export const Default: Story = {
  args: {
    children: 'Paper content',
    elevation: 1,
  },
  render: (args) => (
    <Paper {...args}>
      <Box sx={{ p: 2 }}>
        <Typography>Paper content with default elevation</Typography>
      </Box>
    </Paper>
  ),
};

export const DifferentElevations: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
      {[0, 1, 2, 4, 8].map((elevation) => (
        <Paper key={elevation} elevation={elevation} sx={{ p: 2, minWidth: 100 }}>
          <Typography variant="body2">Elevation {elevation}</Typography>
        </Paper>
      ))}
    </Box>
  ),
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: 'Outlined paper',
  },
  render: (args) => (
    <Paper {...args}>
      <Box sx={{ p: 2 }}>
        <Typography>Outlined paper variant</Typography>
      </Box>
    </Paper>
  ),
};

export const Square: Story = {
  args: {
    square: true,
    children: 'Square paper',
  },
  render: (args) => (
    <Paper {...args}>
      <Box sx={{ p: 2 }}>
        <Typography>Square corners (no border radius)</Typography>
      </Box>
    </Paper>
  ),
};

export const WithContent: Story = {
  args: {
    elevation: 24,
    variant: 'outlined',
    square: true,
  },

  render: () => (
    <Paper elevation={2} sx={{ p: 3, maxWidth: 400 }}>
      <Typography variant="h6" gutterBottom>
        Paper Title
      </Typography>
      <Typography variant="body1" color="text.secondary">
        This is an example of a Paper component with content. It uses theme tokens for styling and
        elevation.
      </Typography>
    </Paper>
  ),
};
