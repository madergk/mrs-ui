/**
 * Rating Component Stories
 *
 * Star rating input component stories.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Rating } from './Rating';
import { Stack, Box } from '@mui/material';

const meta: Meta<typeof Rating> = {
  title: 'Atoms/Rating',
  component: Rating,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Rating component for displaying and selecting star ratings. Uses theme tokens and follows MRS design system rules.',
      },
    },
  },
  argTypes: {
    value: {
      control: { type: 'number', min: 0, max: 5, step: 0.5 },
      description: 'Rating value',
    },
    max: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'Maximum rating value',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Rating size',
    },
    readOnly: {
      control: 'boolean',
      description: 'Whether rating is read-only',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether rating is disabled',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Rating>;

export const Default: Story = {
  args: {
    value: 3,
    max: 5,
    size: 'medium',
  },
};

export const Sizes: Story = {
  render: () => (
    <Stack spacing={3}>
      <Box>
        <Box sx={{ mb: 1, fontWeight: 600 }}>Small</Box>
        <Rating value={3} size="small" />
      </Box>
      <Box>
        <Box sx={{ mb: 1, fontWeight: 600 }}>Medium</Box>
        <Rating value={3} size="medium" />
      </Box>
      <Box>
        <Box sx={{ mb: 1, fontWeight: 600 }}>Large</Box>
        <Rating value={3} size="large" />
      </Box>
    </Stack>
  ),
};

export const Values: Story = {
  render: () => (
    <Stack spacing={3}>
      <Box>
        <Box sx={{ mb: 1, fontWeight: 600 }}>0 Stars</Box>
        <Rating value={0} />
      </Box>
      <Box>
        <Box sx={{ mb: 1, fontWeight: 600 }}>2.5 Stars</Box>
        <Rating value={2.5} />
      </Box>
      <Box>
        <Box sx={{ mb: 1, fontWeight: 600 }}>5 Stars</Box>
        <Rating value={5} />
      </Box>
    </Stack>
  ),
};

export const States: Story = {
  render: () => (
    <Stack spacing={3}>
      <Box>
        <Box sx={{ mb: 1, fontWeight: 600 }}>Interactive</Box>
        <Rating value={3} />
      </Box>
      <Box>
        <Box sx={{ mb: 1, fontWeight: 600 }}>Read Only</Box>
        <Rating value={4} readOnly />
      </Box>
      <Box>
        <Box sx={{ mb: 1, fontWeight: 600 }}>Disabled</Box>
        <Rating value={3} disabled />
      </Box>
    </Stack>
  ),
};

export const CustomMax: Story = {
  render: () => (
    <Stack spacing={3}>
      <Box>
        <Box sx={{ mb: 1, fontWeight: 600 }}>Max 5 (default)</Box>
        <Rating value={3} max={5} />
      </Box>
      <Box>
        <Box sx={{ mb: 1, fontWeight: 600 }}>Max 10</Box>
        <Rating value={7} max={10} />
      </Box>
    </Stack>
  ),
};

