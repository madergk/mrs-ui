/**
 * TextField Component Stories
 *
 * Text input field component stories.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from './TextField';
import { Stack, Box } from '@mui/material';

const meta: Meta<typeof TextField> = {
  title: 'Atoms/TextField',
  component: TextField,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'TextField component for text input. Uses theme tokens and follows MRS design system rules.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['standard', 'filled', 'outlined'],
      description: 'TextField variant',
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: 'TextField size',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'warning', 'info', 'success'],
      description: 'TextField color',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether TextField is disabled',
    },
    required: {
      control: 'boolean',
      description: 'Whether TextField is required',
    },
    error: {
      control: 'boolean',
      description: 'Whether TextField has error state',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    variant: 'outlined',
    size: 'medium',
  },
};

export const Variants: Story = {
  render: () => (
    <Stack spacing={3}>
      <Box>
        <Box sx={{ mb: 1, fontWeight: 600 }}>Outlined (default)</Box>
        <TextField variant="outlined" label="Outlined" placeholder="Enter text" />
      </Box>
      <Box>
        <Box sx={{ mb: 1, fontWeight: 600 }}>Filled</Box>
        <TextField variant="filled" label="Filled" placeholder="Enter text" />
      </Box>
      <Box>
        <Box sx={{ mb: 1, fontWeight: 600 }}>Standard</Box>
        <TextField variant="standard" label="Standard" placeholder="Enter text" />
      </Box>
    </Stack>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Stack spacing={3}>
      <Box>
        <Box sx={{ mb: 1, fontWeight: 600 }}>Small</Box>
        <TextField size="small" label="Small" placeholder="Enter text" />
      </Box>
      <Box>
        <Box sx={{ mb: 1, fontWeight: 600 }}>Medium (default)</Box>
        <TextField size="medium" label="Medium" placeholder="Enter text" />
      </Box>
    </Stack>
  ),
};

export const Colors: Story = {
  render: () => (
    <Stack spacing={3}>
      <Box>
        <Box sx={{ mb: 1, fontWeight: 600 }}>Primary</Box>
        <TextField color="primary" label="Primary" placeholder="Enter text" />
      </Box>
      <Box>
        <Box sx={{ mb: 1, fontWeight: 600 }}>Secondary</Box>
        <TextField color="secondary" label="Secondary" placeholder="Enter text" />
      </Box>
      <Box>
        <Box sx={{ mb: 1, fontWeight: 600 }}>Error</Box>
        <TextField color="error" label="Error" placeholder="Enter text" />
      </Box>
      <Box>
        <Box sx={{ mb: 1, fontWeight: 600 }}>Success</Box>
        <TextField color="success" label="Success" placeholder="Enter text" />
      </Box>
    </Stack>
  ),
};

export const States: Story = {
  render: () => (
    <Stack spacing={3}>
      <Box>
        <Box sx={{ mb: 1, fontWeight: 600 }}>Default</Box>
        <TextField label="Default" placeholder="Enter text" />
      </Box>
      <Box>
        <Box sx={{ mb: 1, fontWeight: 600 }}>With Value</Box>
        <TextField label="With Value" defaultValue="Sample text" />
      </Box>
      <Box>
        <Box sx={{ mb: 1, fontWeight: 600 }}>Required</Box>
        <TextField label="Required" required placeholder="Enter text" />
      </Box>
      <Box>
        <Box sx={{ mb: 1, fontWeight: 600 }}>Error</Box>
        <TextField label="Error" error helperText="Error message" placeholder="Enter text" />
      </Box>
      <Box>
        <Box sx={{ mb: 1, fontWeight: 600 }}>Disabled</Box>
        <TextField label="Disabled" disabled placeholder="Enter text" />
      </Box>
      <Box>
        <Box sx={{ mb: 1, fontWeight: 600 }}>Disabled with Value</Box>
        <TextField label="Disabled" disabled defaultValue="Disabled text" />
      </Box>
    </Stack>
  ),
};

export const WithHelperText: Story = {
  render: () => (
    <Stack spacing={3}>
      <Box>
        <Box sx={{ mb: 1, fontWeight: 600 }}>Helper Text</Box>
        <TextField label="Helper Text" helperText="This is helper text" placeholder="Enter text" />
      </Box>
      <Box>
        <Box sx={{ mb: 1, fontWeight: 600 }}>Error Helper Text</Box>
        <TextField label="Error" error helperText="This is an error message" placeholder="Enter text" />
      </Box>
    </Stack>
  ),
};

export const Types: Story = {
  render: () => (
    <Stack spacing={3}>
      <Box>
        <Box sx={{ mb: 1, fontWeight: 600 }}>Text</Box>
        <TextField label="Text" type="text" placeholder="Enter text" />
      </Box>
      <Box>
        <Box sx={{ mb: 1, fontWeight: 600 }}>Password</Box>
        <TextField label="Password" type="password" placeholder="Enter password" />
      </Box>
      <Box>
        <Box sx={{ mb: 1, fontWeight: 600 }}>Email</Box>
        <TextField label="Email" type="email" placeholder="Enter email" />
      </Box>
      <Box>
        <Box sx={{ mb: 1, fontWeight: 600 }}>Number</Box>
        <TextField label="Number" type="number" placeholder="Enter number" />
      </Box>
    </Stack>
  ),
};

