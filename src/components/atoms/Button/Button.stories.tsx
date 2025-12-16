/**
 * Button Component Stories
 *
 * Matches Figma design specification:
 * - Variants: Contained, Outlined, Text
 * - Sizes: Small (32px), Medium (40px), Large (48px)
 * - Colors: Primary, Secondary, Error, Inherit, Inherit (white)
 * - States: Enabled, Hovered, Focused, Pressed, Disabled
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { Box, Stack, Paper } from '@mui/material';
import { Add as AddIcon, ArrowForward as ArrowForwardIcon } from '@mui/icons-material';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Button component matching Figma design specification. Uses theme tokens and follows MRS design system rules (pill shape, Nunito SemiBold typography).',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['contained', 'outlined', 'text'],
      description: 'Button variant',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Button size (Small: 32px, Medium: 40px, Large: 48px)',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'inherit', 'inherit (white)'],
      description: 'Button color',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'BUTTON',
    variant: 'contained',
    size: 'large',
    color: 'primary',
  },
};

export const Variants: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="text">Text</Button>
    </Stack>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center">
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </Stack>
  ),
};

export const Colors: Story = {
  render: () => (
    <Stack direction="row" spacing={2} flexWrap="wrap">
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="error">Error</Button>
      <Button color="inherit">Inherit</Button>
      <Paper sx={{ p: 2, bgcolor: 'grey.900', display: 'inline-block' }}>
        <Button color="inherit (white)">Inherit (white)</Button>
      </Paper>
    </Stack>
  ),
};

export const States: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Button>Enabled</Button>
      <Button disabled>Disabled</Button>
    </Stack>
  ),
};

/**
 * Complete matrix matching Figma design
 * Shows all variants, sizes, and colors
 */
export const AllVariantsAndSizes: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {/* Contained Variant */}
      <Box>
        <Box sx={{ mb: 2, fontWeight: 600 }}>Contained</Box>
        <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
          <Button variant="contained" size="small" color="primary">
            Small
          </Button>
          <Button variant="contained" size="medium" color="primary">
            Medium
          </Button>
          <Button variant="contained" size="large" color="primary">
            Large
          </Button>
        </Stack>
      </Box>

      {/* Outlined Variant */}
      <Box>
        <Box sx={{ mb: 2, fontWeight: 600 }}>Outlined</Box>
        <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
          <Button variant="outlined" size="small" color="primary">
            Small
          </Button>
          <Button variant="outlined" size="medium" color="primary">
            Medium
          </Button>
          <Button variant="outlined" size="large" color="primary">
            Large
          </Button>
        </Stack>
      </Box>

      {/* Text Variant */}
      <Box>
        <Box sx={{ mb: 2, fontWeight: 600 }}>Text</Box>
        <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
          <Button variant="text" size="small" color="primary">
            Small
          </Button>
          <Button variant="text" size="medium" color="primary">
            Medium
          </Button>
          <Button variant="text" size="large" color="primary">
            Large
          </Button>
        </Stack>
      </Box>
    </Box>
  ),
};

/**
 * All colors across variants
 * Matches Figma color specification
 */
export const AllColors: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      {/* Primary Color */}
      <Box>
        <Box sx={{ mb: 2, fontWeight: 600 }}>Primary</Box>
        <Stack direction="row" spacing={2} flexWrap="wrap">
          <Button variant="contained" color="primary">
            Contained
          </Button>
          <Button variant="outlined" color="primary">
            Outlined
          </Button>
          <Button variant="text" color="primary">
            Text
          </Button>
        </Stack>
      </Box>

      {/* Secondary Color */}
      <Box>
        <Box sx={{ mb: 2, fontWeight: 600 }}>Secondary</Box>
        <Stack direction="row" spacing={2} flexWrap="wrap">
          <Button variant="contained" color="secondary">
            Contained
          </Button>
          <Button variant="outlined" color="secondary">
            Outlined
          </Button>
          <Button variant="text" color="secondary">
            Text
          </Button>
        </Stack>
      </Box>

      {/* Error Color */}
      <Box>
        <Box sx={{ mb: 2, fontWeight: 600 }}>Error</Box>
        <Stack direction="row" spacing={2} flexWrap="wrap">
          <Button variant="contained" color="error">
            Contained
          </Button>
          <Button variant="outlined" color="error">
            Outlined
          </Button>
          <Button variant="text" color="error">
            Text
          </Button>
        </Stack>
      </Box>

      {/* Inherit Colors */}
      <Box>
        <Box sx={{ mb: 2, fontWeight: 600 }}>Inherit</Box>
        <Stack direction="row" spacing={2} flexWrap="wrap">
          <Button variant="contained" color="inherit">
            Contained
          </Button>
          <Button variant="outlined" color="inherit">
            Outlined
          </Button>
          <Button variant="text" color="inherit">
            Text
          </Button>
        </Stack>
      </Box>

      {/* Inherit (white) - on dark background */}
      <Box>
        <Box sx={{ mb: 2, fontWeight: 600 }}>Inherit (white)</Box>
        <Paper sx={{ p: 2, bgcolor: 'grey.900', display: 'inline-block' }}>
          <Stack direction="row" spacing={2} flexWrap="wrap">
            <Button variant="contained" color="inherit (white)">
              Contained
            </Button>
            <Button variant="outlined" color="inherit (white)">
              Outlined
            </Button>
            <Button variant="text" color="inherit (white)">
              Text
            </Button>
          </Stack>
        </Paper>
      </Box>
    </Box>
  ),
};

/**
 * All states demonstration
 * Shows enabled, hover (on hover), focus (on focus), pressed (on click), and disabled
 */
export const AllStates: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Box>
        <Box sx={{ mb: 2, fontWeight: 600 }}>Contained - Primary</Box>
        <Stack direction="row" spacing={2} flexWrap="wrap">
          <Button variant="contained" color="primary">
            Enabled
          </Button>
          <Button variant="contained" color="primary" disabled>
            Disabled
          </Button>
        </Stack>
      </Box>

      <Box>
        <Box sx={{ mb: 2, fontWeight: 600 }}>Outlined - Primary</Box>
        <Stack direction="row" spacing={2} flexWrap="wrap">
          <Button variant="outlined" color="primary">
            Enabled
          </Button>
          <Button variant="outlined" color="primary" disabled>
            Disabled
          </Button>
        </Stack>
      </Box>

      <Box>
        <Box sx={{ mb: 2, fontWeight: 600 }}>Text - Primary</Box>
        <Stack direction="row" spacing={2} flexWrap="wrap">
          <Button variant="text" color="primary">
            Enabled
          </Button>
          <Button variant="text" color="primary" disabled>
            Disabled
          </Button>
        </Stack>
      </Box>
    </Box>
  ),
};

/**
 * Buttons with icons
 * Matches Figma startIcon and endIcon support
 */
export const WithIcons: Story = {
  render: () => (
    <Stack direction="row" spacing={2} flexWrap="wrap">
      <Button variant="contained" startIcon={<AddIcon />}>
        Add Item
      </Button>
      <Button variant="contained" endIcon={<ArrowForwardIcon />}>
        Continue
      </Button>
      <Button variant="outlined" startIcon={<AddIcon />}>
        Add Item
      </Button>
      <Button variant="text" endIcon={<ArrowForwardIcon />}>
        Learn More
      </Button>
    </Stack>
  ),
};

/**
 * Complete Figma matrix
 * Shows all combinations as in Figma design
 */
export const FigmaMatrix: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {/* Large Size */}
      <Box>
        <Box sx={{ mb: 2, fontWeight: 600, fontSize: '1.2rem' }}>Large (48px)</Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {/* Contained Large */}
          <Stack direction="row" spacing={2} flexWrap="wrap" alignItems="center">
            <Button variant="contained" size="large" color="primary">
              Primary
            </Button>
            <Button variant="contained" size="large" color="secondary">
              Secondary
            </Button>
            <Button variant="contained" size="large" color="error">
              Error
            </Button>
            <Button variant="contained" size="large" color="inherit">
              Inherit
            </Button>
            <Paper sx={{ p: 1, bgcolor: 'grey.900', display: 'inline-block' }}>
              <Button variant="contained" size="large" color="inherit (white)">
                Inherit (white)
              </Button>
            </Paper>
          </Stack>
          {/* Outlined Large */}
          <Stack direction="row" spacing={2} flexWrap="wrap" alignItems="center">
            <Button variant="outlined" size="large" color="primary">
              Primary
            </Button>
            <Button variant="outlined" size="large" color="secondary">
              Secondary
            </Button>
            <Button variant="outlined" size="large" color="error">
              Error
            </Button>
            <Button variant="outlined" size="large" color="inherit">
              Inherit
            </Button>
            <Paper sx={{ p: 1, bgcolor: 'grey.900', display: 'inline-block' }}>
              <Button variant="outlined" size="large" color="inherit (white)">
                Inherit (white)
              </Button>
            </Paper>
          </Stack>
          {/* Text Large */}
          <Stack direction="row" spacing={2} flexWrap="wrap" alignItems="center">
            <Button variant="text" size="large" color="primary">
              Primary
            </Button>
            <Button variant="text" size="large" color="secondary">
              Secondary
            </Button>
            <Button variant="text" size="large" color="error">
              Error
            </Button>
            <Button variant="text" size="large" color="inherit">
              Inherit
            </Button>
            <Paper sx={{ p: 1, bgcolor: 'grey.900', display: 'inline-block' }}>
              <Button variant="text" size="large" color="inherit (white)">
                Inherit (white)
              </Button>
            </Paper>
          </Stack>
        </Box>
      </Box>

      {/* Medium Size */}
      <Box>
        <Box sx={{ mb: 2, fontWeight: 600, fontSize: '1.2rem' }}>Medium (40px)</Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Stack direction="row" spacing={2} flexWrap="wrap" alignItems="center">
            <Button variant="contained" size="medium" color="primary">
              Primary
            </Button>
            <Button variant="contained" size="medium" color="secondary">
              Secondary
            </Button>
            <Button variant="contained" size="medium" color="error">
              Error
            </Button>
          </Stack>
          <Stack direction="row" spacing={2} flexWrap="wrap" alignItems="center">
            <Button variant="outlined" size="medium" color="primary">
              Primary
            </Button>
            <Button variant="outlined" size="medium" color="secondary">
              Secondary
            </Button>
            <Button variant="outlined" size="medium" color="error">
              Error
            </Button>
          </Stack>
          <Stack direction="row" spacing={2} flexWrap="wrap" alignItems="center">
            <Button variant="text" size="medium" color="primary">
              Primary
            </Button>
            <Button variant="text" size="medium" color="secondary">
              Secondary
            </Button>
            <Button variant="text" size="medium" color="error">
              Error
            </Button>
          </Stack>
        </Box>
      </Box>

      {/* Small Size */}
      <Box>
        <Box sx={{ mb: 2, fontWeight: 600, fontSize: '1.2rem' }}>Small (32px)</Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Stack direction="row" spacing={2} flexWrap="wrap" alignItems="center">
            <Button variant="contained" size="small" color="primary">
              Primary
            </Button>
            <Button variant="contained" size="small" color="secondary">
              Secondary
            </Button>
            <Button variant="contained" size="small" color="error">
              Error
            </Button>
          </Stack>
          <Stack direction="row" spacing={2} flexWrap="wrap" alignItems="center">
            <Button variant="outlined" size="small" color="primary">
              Primary
            </Button>
            <Button variant="outlined" size="small" color="secondary">
              Secondary
            </Button>
            <Button variant="outlined" size="small" color="error">
              Error
            </Button>
          </Stack>
          <Stack direction="row" spacing={2} flexWrap="wrap" alignItems="center">
            <Button variant="text" size="small" color="primary">
              Primary
            </Button>
            <Button variant="text" size="small" color="secondary">
              Secondary
            </Button>
            <Button variant="text" size="small" color="error">
              Error
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  ),
};
