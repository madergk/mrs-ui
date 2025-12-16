/**
 * Switch Component Stories
 *
 * Toggle switch component stories.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';
import { Stack, Box, FormControlLabel } from '@mui/material';
import { useState } from 'react';

const meta: Meta<typeof Switch> = {
  title: 'Atoms/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Switch component for toggle selections. Uses theme tokens and follows MRS design system rules.',
      },
    },
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'warning', 'info', 'success', 'default'],
      description: 'Switch color',
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: 'Switch size',
    },
    checked: {
      control: 'boolean',
      description: 'Whether switch is checked',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether switch is disabled',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    checked: false,
    color: 'primary',
    size: 'medium',
  },
};

export const Sizes: Story = {
  render: () => {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);

    return (
      <Stack spacing={3}>
        <Box>
          <Box sx={{ mb: 1, fontWeight: 600 }}>Small</Box>
          <FormControlLabel
            control={<Switch size="small" checked={checked1} onChange={(e) => setChecked1(e.target.checked)} />}
            label="Small Switch"
          />
        </Box>
        <Box>
          <Box sx={{ mb: 1, fontWeight: 600 }}>Medium (default)</Box>
          <FormControlLabel
            control={<Switch size="medium" checked={checked2} onChange={(e) => setChecked2(e.target.checked)} />}
            label="Medium Switch"
          />
        </Box>
      </Stack>
    );
  },
};

export const Colors: Story = {
  render: () => {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
    const [checked4, setChecked4] = useState(false);

    return (
      <Stack spacing={3}>
        <Box>
          <Box sx={{ mb: 1, fontWeight: 600 }}>Primary</Box>
          <FormControlLabel
            control={<Switch color="primary" checked={checked1} onChange={(e) => setChecked1(e.target.checked)} />}
            label="Primary"
          />
        </Box>
        <Box>
          <Box sx={{ mb: 1, fontWeight: 600 }}>Secondary</Box>
          <FormControlLabel
            control={<Switch color="secondary" checked={checked2} onChange={(e) => setChecked2(e.target.checked)} />}
            label="Secondary"
          />
        </Box>
        <Box>
          <Box sx={{ mb: 1, fontWeight: 600 }}>Error</Box>
          <FormControlLabel
            control={<Switch color="error" checked={checked3} onChange={(e) => setChecked3(e.target.checked)} />}
            label="Error"
          />
        </Box>
        <Box>
          <Box sx={{ mb: 1, fontWeight: 600 }}>Success</Box>
          <FormControlLabel
            control={<Switch color="success" checked={checked4} onChange={(e) => setChecked4(e.target.checked)} />}
            label="Success"
          />
        </Box>
      </Stack>
    );
  },
};

export const States: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);

    return (
      <Stack spacing={3}>
        <Box>
          <Box sx={{ mb: 1, fontWeight: 600 }}>Unchecked</Box>
          <FormControlLabel
            control={<Switch checked={false} onChange={() => {}} />}
            label="Unchecked"
          />
        </Box>
        <Box>
          <Box sx={{ mb: 1, fontWeight: 600 }}>Checked</Box>
          <FormControlLabel
            control={<Switch checked={true} onChange={() => {}} />}
            label="Checked"
          />
        </Box>
        <Box>
          <Box sx={{ mb: 1, fontWeight: 600 }}>Interactive</Box>
          <FormControlLabel
            control={<Switch checked={checked} onChange={(e) => setChecked(e.target.checked)} />}
            label="Toggle me"
          />
        </Box>
        <Box>
          <Box sx={{ mb: 1, fontWeight: 600 }}>Disabled Unchecked</Box>
          <FormControlLabel
            control={<Switch checked={false} disabled />}
            label="Disabled"
          />
        </Box>
        <Box>
          <Box sx={{ mb: 1, fontWeight: 600 }}>Disabled Checked</Box>
          <FormControlLabel
            control={<Switch checked={true} disabled />}
            label="Disabled"
          />
        </Box>
      </Stack>
    );
  },
};

