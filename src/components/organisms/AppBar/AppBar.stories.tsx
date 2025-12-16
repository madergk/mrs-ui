/**
 * AppBar Component Stories
 *
 * Application header bar component stories.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { AppBar, Toolbar } from './AppBar';
import { Typography, Button, IconButton, Box } from '@mui/material';
import { Menu as MenuIcon, Search as SearchIcon } from '@mui/icons-material';

const meta: Meta<typeof AppBar> = {
  title: 'Organisms/AppBar',
  component: AppBar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'AppBar component for application header. Uses theme tokens and follows MRS design system rules.',
      },
    },
  },
  argTypes: {
    position: {
      control: 'select',
      options: ['fixed', 'absolute', 'sticky', 'static', 'relative'],
      description: 'AppBar position',
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'transparent', 'inherit'],
      description: 'AppBar color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof AppBar>;

export const Default: Story = {
  render: () => (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MRS UI
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  ),
};

export const Positions: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <Box>
        <Box sx={{ mb: 1, fontWeight: 600 }}>Static (default)</Box>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Static AppBar
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Box>
        <Box sx={{ mb: 1, fontWeight: 600 }}>Fixed</Box>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Fixed AppBar
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Box>
        <Box sx={{ mb: 1, fontWeight: 600 }}>Sticky</Box>
        <AppBar position="sticky">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Sticky AppBar
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </Box>
  ),
};

export const Colors: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <Box>
        <Box sx={{ mb: 1, fontWeight: 600 }}>Default</Box>
        <AppBar color="default">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Default Color
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Box>
        <Box sx={{ mb: 1, fontWeight: 600 }}>Primary</Box>
        <AppBar color="primary">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Primary Color
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Box>
        <Box sx={{ mb: 1, fontWeight: 600 }}>Secondary</Box>
        <AppBar color="secondary">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Secondary Color
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Box>
        <Box sx={{ mb: 1, fontWeight: 600 }}>Transparent</Box>
        <AppBar color="transparent">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Transparent Color
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </Box>
  ),
};

export const WithMenu: Story = {
  render: () => (
    <AppBar>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MRS UI
        </Typography>
        <IconButton color="inherit" aria-label="search">
          <SearchIcon />
        </IconButton>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  ),
};

export const WithActions: Story = {
  render: () => (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Application Name
        </Typography>
        <Button color="inherit" sx={{ mr: 1 }}>
          Features
        </Button>
        <Button color="inherit" sx={{ mr: 1 }}>
          Pricing
        </Button>
        <Button color="inherit" variant="outlined" sx={{ mr: 1 }}>
          Sign In
        </Button>
        <Button color="inherit" variant="contained">
          Sign Up
        </Button>
      </Toolbar>
    </AppBar>
  ),
};

