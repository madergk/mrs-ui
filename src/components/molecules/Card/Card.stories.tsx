/**
 * Card Component Stories
 *
 * Surface container component stories.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardContent } from './Card';
import { Stack, Box, Typography, Button } from '@mui/material';

const meta: Meta<typeof Card> = {
  title: 'Molecules/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Card component for displaying content in a contained surface. Uses theme tokens and follows MRS design system rules.',
      },
    },
  },
  argTypes: {
    elevation: {
      control: { type: 'number', min: 0, max: 24 },
      description: 'Elevation level (0-24)',
    },
    variant: {
      control: 'select',
      options: ['elevation', 'outlined'],
      description: 'Card variant',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card>
      <CardContent>
        <Typography variant="h6">Card Title</Typography>
        <Typography variant="body2" color="text.secondary">
          This is a basic card with content.
        </Typography>
      </CardContent>
    </Card>
  ),
};

export const Variants: Story = {
  render: () => (
    <Stack spacing={3} direction="row" flexWrap="wrap">
      <Box sx={{ minWidth: 300 }}>
        <Box sx={{ mb: 1, fontWeight: 600 }}>Elevation (default)</Box>
        <Card variant="elevation" elevation={2}>
          <CardContent>
            <Typography variant="h6">Elevated Card</Typography>
            <Typography variant="body2" color="text.secondary">
              This card has elevation shadow.
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ minWidth: 300 }}>
        <Box sx={{ mb: 1, fontWeight: 600 }}>Outlined</Box>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h6">Outlined Card</Typography>
            <Typography variant="body2" color="text.secondary">
              This card has an outline border.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Stack>
  ),
};

export const Elevations: Story = {
  render: () => (
    <Stack spacing={3} direction="row" flexWrap="wrap">
      {[0, 1, 2, 4, 8].map((elevation) => (
        <Box key={elevation} sx={{ minWidth: 250 }}>
          <Box sx={{ mb: 1, fontWeight: 600 }}>Elevation {elevation}</Box>
          <Card elevation={elevation}>
            <CardContent>
              <Typography variant="h6">Card Title</Typography>
              <Typography variant="body2" color="text.secondary">
                Elevation level: {elevation}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      ))}
    </Stack>
  ),
};

export const WithActions: Story = {
  render: () => (
    <Card>
      <CardContent>
        <Typography variant="h6">Card with Actions</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          This card includes action buttons.
        </Typography>
        <Stack direction="row" spacing={1}>
          <Button size="small" variant="contained">
            Primary
          </Button>
          <Button size="small" variant="outlined">
            Secondary
          </Button>
        </Stack>
      </CardContent>
    </Card>
  ),
};

export const ComplexContent: Story = {
  render: () => (
    <Card sx={{ maxWidth: 400 }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Complex Card
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          This card demonstrates more complex content with multiple sections and interactive elements.
        </Typography>
        <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
          <Button variant="contained" size="small">
            Action 1
          </Button>
          <Button variant="outlined" size="small">
            Action 2
          </Button>
        </Stack>
      </CardContent>
    </Card>
  ),
};

