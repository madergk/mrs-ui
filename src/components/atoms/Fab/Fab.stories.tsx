/**
 * Fab Component Stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Fab } from './Fab';
import { Icon } from '../Icon';
import { Stack, Box } from '@mui/material';

const meta: Meta<typeof Fab> = {
  title: 'Atoms/Fab',
  component: Fab,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Floating Action Button component. Uses theme tokens for styling.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['circular', 'extended'],
      description: 'Fab variant',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Fab size',
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
      description: 'Fab color',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Fab>;

export const Default: Story = {
  args: {
    children: <Icon icon="add" />,
    variant: 'circular',
    size: 'large',
    color: 'primary',
  },
};

export const Circular: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Fab>
        <Icon icon="add" />
      </Fab>
      <Fab color="secondary">
        <Icon icon="edit" />
      </Fab>
      <Fab color="error">
        <Icon icon="favorite" />
      </Fab>
    </Stack>
  ),
};

export const Extended: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Fab variant="extended">
        <Icon icon="add" />
        Create
      </Fab>
      <Fab variant="extended" color="secondary">
        <Icon icon="edit" />
        Edit
      </Fab>
    </Stack>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center">
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
        <Fab size="small">
          <Icon icon="add" />
        </Fab>
        <span>Small</span>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
        <Fab size="medium">
          <Icon icon="add" />
        </Fab>
        <span>Medium</span>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
        <Fab size="large">
          <Icon icon="add" />
        </Fab>
        <span>Large</span>
      </Box>
    </Stack>
  ),
};

export const States: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Fab>
        <Icon icon="add" />
      </Fab>
      <Fab disabled>
        <Icon icon="add" />
      </Fab>
    </Stack>
  ),
};
