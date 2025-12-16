/**
 * Tabs Component Stories
 *
 * Tab navigation component stories.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, Tab } from './Tabs';
import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import { Home as HomeIcon, Settings as SettingsIcon, Person as PersonIcon } from '@mui/icons-material';

const meta: Meta<typeof Tabs> = {
  title: 'Molecules/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Tabs component for navigation. Uses theme tokens and follows MRS design system rules.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['standard', 'scrollable', 'fullWidth'],
      description: 'Tabs variant',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Tabs orientation',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

function TabPanel({ children, value, index }: { children: React.ReactNode; value: number; index: number }) {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState(0);

    return (
      <Box sx={{ width: '100%' }}>
        <Tabs value={value} onChange={(e, newValue) => setValue(newValue as number)}>
          <Tab label="Tab 1" />
          <Tab label="Tab 2" />
          <Tab label="Tab 3" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Typography>Content for Tab 1</Typography>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Typography>Content for Tab 2</Typography>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Typography>Content for Tab 3</Typography>
        </TabPanel>
      </Box>
    );
  },
};

export const Variants: Story = {
  render: () => {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [value3, setValue3] = useState(0);

    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <Box>
          <Box sx={{ mb: 1, fontWeight: 600 }}>Standard (default)</Box>
          <Tabs value={value1} onChange={(_e, newValue) => setValue1(newValue as number)} variant="standard">
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs>
        </Box>
        <Box>
          <Box sx={{ mb: 1, fontWeight: 600 }}>Scrollable</Box>
          <Tabs value={value2} onChange={(_e, newValue) => setValue2(newValue as number)} variant="scrollable" scrollButtons="auto">
            <Tab label="Tab 1" />
            <Tab label="Tab 2" />
            <Tab label="Tab 3" />
            <Tab label="Tab 4" />
            <Tab label="Tab 5" />
            <Tab label="Tab 6" />
          </Tabs>
        </Box>
        <Box>
          <Box sx={{ mb: 1, fontWeight: 600 }}>Full Width</Box>
          <Tabs value={value3} onChange={(_e, newValue) => setValue3(newValue as number)} variant="fullWidth">
            <Tab label="Full Width 1" />
            <Tab label="Full Width 2" />
            <Tab label="Full Width 3" />
          </Tabs>
        </Box>
      </Box>
    );
  },
};

export const WithIcons: Story = {
  render: () => {
    const [value, setValue] = useState(0);

    return (
      <Box sx={{ width: '100%' }}>
        <Tabs value={value} onChange={(e, newValue) => setValue(newValue as number)}>
          <Tab icon={<HomeIcon />} label="Home" />
          <Tab icon={<SettingsIcon />} label="Settings" />
          <Tab icon={<PersonIcon />} label="Profile" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Typography>Home content</Typography>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Typography>Settings content</Typography>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Typography>Profile content</Typography>
        </TabPanel>
      </Box>
    );
  },
};

export const IconOnly: Story = {
  render: () => {
    const [value, setValue] = useState(0);

    return (
      <Box sx={{ width: '100%' }}>
        <Tabs value={value} onChange={(e, newValue) => setValue(newValue as number)}>
          <Tab icon={<HomeIcon />} />
          <Tab icon={<SettingsIcon />} />
          <Tab icon={<PersonIcon />} />
        </Tabs>
      </Box>
    );
  },
};

export const Vertical: Story = {
  render: () => {
    const [value, setValue] = useState(0);

    return (
      <Box sx={{ display: 'flex', height: 300 }}>
        <Tabs
          orientation="vertical"
          value={value}
          onChange={(_e, newValue) => setValue(newValue as number)}
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          <Tab label="Tab 1" />
          <Tab label="Tab 2" />
          <Tab label="Tab 3" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Typography>Vertical Tab 1 content</Typography>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Typography>Vertical Tab 2 content</Typography>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Typography>Vertical Tab 3 content</Typography>
        </TabPanel>
      </Box>
    );
  },
};

