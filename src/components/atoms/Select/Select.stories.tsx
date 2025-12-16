/**
 * Select Component Stories
 *
 * Dropdown selection component stories.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Select, MenuItem } from './Select';
import { Stack, Box, FormControl, InputLabel } from '@mui/material';
import { useState } from 'react';

const meta: Meta<typeof Select> = {
  title: 'Atoms/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Select component for dropdown selections. Uses theme tokens and follows MRS design system rules.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['standard', 'filled', 'outlined'],
      description: 'Select variant',
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: 'Select size',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'warning', 'info', 'success'],
      description: 'Select color',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether select is disabled',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel>Select Option</InputLabel>
        <Select value={value} onChange={(e) => setValue(e.target.value as string)} label="Select Option">
          <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
          <MenuItem value="option3">Option 3</MenuItem>
        </Select>
      </FormControl>
    );
  },
};

export const Variants: Story = {
  render: () => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');

    return (
      <Stack spacing={3}>
        <Box>
          <Box sx={{ mb: 1, fontWeight: 600 }}>Outlined (default)</Box>
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel>Outlined</InputLabel>
            <Select value={value1} onChange={(e) => setValue1(e.target.value as string)} label="Outlined">
              <MenuItem value="1">Option 1</MenuItem>
              <MenuItem value="2">Option 2</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box>
          <Box sx={{ mb: 1, fontWeight: 600 }}>Filled</Box>
          <FormControl variant="filled" sx={{ minWidth: 200 }}>
            <InputLabel>Filled</InputLabel>
            <Select value={value2} onChange={(e) => setValue2(e.target.value as string)} variant="filled" label="Filled">
              <MenuItem value="1">Option 1</MenuItem>
              <MenuItem value="2">Option 2</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box>
          <Box sx={{ mb: 1, fontWeight: 600 }}>Standard</Box>
          <FormControl variant="standard" sx={{ minWidth: 200 }}>
            <InputLabel>Standard</InputLabel>
            <Select value={value3} onChange={(e) => setValue3(e.target.value as string)} variant="standard" label="Standard">
              <MenuItem value="1">Option 1</MenuItem>
              <MenuItem value="2">Option 2</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Stack>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');

    return (
      <Stack spacing={3}>
        <Box>
          <Box sx={{ mb: 1, fontWeight: 600 }}>Small</Box>
          <FormControl size="small" sx={{ minWidth: 200 }}>
            <InputLabel>Small</InputLabel>
            <Select value={value1} onChange={(e) => setValue1(e.target.value as string)} size="small" label="Small">
              <MenuItem value="1">Option 1</MenuItem>
              <MenuItem value="2">Option 2</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box>
          <Box sx={{ mb: 1, fontWeight: 600 }}>Medium (default)</Box>
          <FormControl size="medium" sx={{ minWidth: 200 }}>
            <InputLabel>Medium</InputLabel>
            <Select value={value2} onChange={(e) => setValue2(e.target.value as string)} size="medium" label="Medium">
              <MenuItem value="1">Option 1</MenuItem>
              <MenuItem value="2">Option 2</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Stack>
    );
  },
};

export const Colors: Story = {
  render: () => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');

    return (
      <Stack spacing={3}>
        <Box>
          <Box sx={{ mb: 1, fontWeight: 600 }}>Primary</Box>
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel>Primary</InputLabel>
            <Select value={value1} onChange={(e) => setValue1(e.target.value as string)} color="primary" label="Primary">
              <MenuItem value="1">Option 1</MenuItem>
              <MenuItem value="2">Option 2</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box>
          <Box sx={{ mb: 1, fontWeight: 600 }}>Secondary</Box>
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel>Secondary</InputLabel>
            <Select value={value2} onChange={(e) => setValue2(e.target.value as string)} color="secondary" label="Secondary">
              <MenuItem value="1">Option 1</MenuItem>
              <MenuItem value="2">Option 2</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box>
          <Box sx={{ mb: 1, fontWeight: 600 }}>Error</Box>
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel>Error</InputLabel>
            <Select value={value3} onChange={(e) => setValue3(e.target.value as string)} color="error" label="Error">
              <MenuItem value="1">Option 1</MenuItem>
              <MenuItem value="2">Option 2</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Stack>
    );
  },
};

export const States: Story = {
  render: () => {
    const [value, setValue] = useState('option1');

    return (
      <Stack spacing={3}>
        <Box>
          <Box sx={{ mb: 1, fontWeight: 600 }}>Enabled</Box>
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel>Enabled</InputLabel>
            <Select value={value} onChange={(e) => setValue(e.target.value as string)} label="Enabled">
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box>
          <Box sx={{ mb: 1, fontWeight: 600 }}>Disabled</Box>
          <FormControl disabled sx={{ minWidth: 200 }}>
            <InputLabel>Disabled</InputLabel>
            <Select value="option1" disabled label="Disabled">
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Stack>
    );
  },
};

