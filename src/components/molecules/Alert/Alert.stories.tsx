/**
 * Alert Component Stories
 *
 * Status message component stories.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';
import { Stack, Box } from '@mui/material';

const meta: Meta<typeof Alert> = {
  title: 'Molecules/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Alert component for displaying status messages. Uses theme tokens and follows MRS design system rules.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outlined', 'standard'],
      description: 'Alert variant',
    },
    severity: {
      control: 'select',
      options: ['error', 'warning', 'info', 'success'],
      description: 'Alert severity',
    },
    onClose: {
      action: 'closed',
      description: 'Callback fired when close button is clicked',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    severity: 'info',
    variant: 'standard',
    children: 'This is an alert message',
  },
};

export const Severities: Story = {
  render: () => (
    <Stack spacing={2}>
      <Alert severity="error" variant="standard">
        This is an error alert
      </Alert>
      <Alert severity="warning" variant="standard">
        This is a warning alert
      </Alert>
      <Alert severity="info" variant="standard">
        This is an info alert
      </Alert>
      <Alert severity="success" variant="standard">
        This is a success alert
      </Alert>
    </Stack>
  ),
};

export const Variants: Story = {
  render: () => (
    <Stack spacing={2}>
      <Box>
        <Box sx={{ mb: 1, fontWeight: 600 }}>Standard</Box>
        <Alert severity="info" variant="standard">
          Standard variant alert
        </Alert>
      </Box>
      <Box>
        <Box sx={{ mb: 1, fontWeight: 600 }}>Outlined</Box>
        <Alert severity="info" variant="outlined">
          Outlined variant alert
        </Alert>
      </Box>
      <Box>
        <Box sx={{ mb: 1, fontWeight: 600 }}>Filled</Box>
        <Alert severity="info" variant="filled">
          Filled variant alert
        </Alert>
      </Box>
    </Stack>
  ),
};

export const WithTitle: Story = {
  render: () => (
    <Stack spacing={2}>
      <Alert severity="error" variant="standard" title="Error Title">
        This is an error alert with a title
      </Alert>
      <Alert severity="warning" variant="outlined" title="Warning Title">
        This is a warning alert with a title
      </Alert>
      <Alert severity="info" variant="filled" title="Info Title">
        This is an info alert with a title
      </Alert>
      <Alert severity="success" variant="standard" title="Success Title">
        This is a success alert with a title
      </Alert>
    </Stack>
  ),
};

export const WithCloseButton: Story = {
  render: () => (
    <Stack spacing={2}>
      <Alert severity="error" variant="standard" onClose={() => {}}>
        Error alert with close button
      </Alert>
      <Alert severity="warning" variant="outlined" onClose={() => {}}>
        Warning alert with close button
      </Alert>
      <Alert severity="info" variant="filled" onClose={() => {}}>
        Info alert with close button
      </Alert>
      <Alert severity="success" variant="standard" onClose={() => {}}>
        Success alert with close button
      </Alert>
    </Stack>
  ),
};

export const AllCombinations: Story = {
  render: () => (
    <Stack spacing={3}>
      <Box>
        <Box sx={{ mb: 2, fontWeight: 600 }}>Error</Box>
        <Stack spacing={2}>
          <Alert severity="error" variant="standard">
            Standard error alert
          </Alert>
          <Alert severity="error" variant="outlined">
            Outlined error alert
          </Alert>
          <Alert severity="error" variant="filled">
            Filled error alert
          </Alert>
        </Stack>
      </Box>
      <Box>
        <Box sx={{ mb: 2, fontWeight: 600 }}>Warning</Box>
        <Stack spacing={2}>
          <Alert severity="warning" variant="standard">
            Standard warning alert
          </Alert>
          <Alert severity="warning" variant="outlined">
            Outlined warning alert
          </Alert>
          <Alert severity="warning" variant="filled">
            Filled warning alert
          </Alert>
        </Stack>
      </Box>
      <Box>
        <Box sx={{ mb: 2, fontWeight: 600 }}>Info</Box>
        <Stack spacing={2}>
          <Alert severity="info" variant="standard">
            Standard info alert
          </Alert>
          <Alert severity="info" variant="outlined">
            Outlined info alert
          </Alert>
          <Alert severity="info" variant="filled">
            Filled info alert
          </Alert>
        </Stack>
      </Box>
      <Box>
        <Box sx={{ mb: 2, fontWeight: 600 }}>Success</Box>
        <Stack spacing={2}>
          <Alert severity="success" variant="standard">
            Standard success alert
          </Alert>
          <Alert severity="success" variant="outlined">
            Outlined success alert
          </Alert>
          <Alert severity="success" variant="filled">
            Filled success alert
          </Alert>
        </Stack>
      </Box>
    </Stack>
  ),
};

