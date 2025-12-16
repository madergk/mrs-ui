/**
 * Accordion Component Stories
 *
 * Expandable content section component stories.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Accordion, AccordionSummary, AccordionDetails } from './Accordion';
import { Stack, Box, Typography } from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { useState } from 'react';

const meta: Meta<typeof Accordion> = {
  title: 'Molecules/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Accordion component for expandable content sections. Uses theme tokens and follows MRS design system rules.',
      },
    },
  },
  argTypes: {
    expanded: {
      control: 'boolean',
      description: 'Whether the accordion is expanded',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the accordion is disabled',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: () => {
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

    return (
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    );
  },
};

export const Multiple: Story = {
  render: () => {
    const [expanded, setExpanded] = useState<string | false>('panel1');

    const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

    return (
      <Stack spacing={1}>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Section 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Content for section 1. This can contain any React components or text.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Section 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Content for section 2. Each accordion section can have different content.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Section 3</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Content for section 3. Only one section can be expanded at a time by default.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Stack>
    );
  },
};

export const States: Story = {
  render: () => {
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

    return (
      <Stack spacing={1}>
        <Box>
          <Box sx={{ mb: 1, fontWeight: 600 }}>Enabled</Box>
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Enabled Accordion</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>This accordion is enabled and can be expanded.</Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
        <Box>
          <Box sx={{ mb: 1, fontWeight: 600 }}>Disabled</Box>
          <Accordion disabled>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Disabled Accordion</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>This accordion is disabled.</Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Stack>
    );
  },
};

export const WithComplexContent: Story = {
  render: () => {
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

    return (
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Complex Content Accordion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack spacing={2}>
            <Typography variant="body1" fontWeight={600}>
              Section Title
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This accordion demonstrates complex content with multiple elements, lists, and interactive components.
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </Box>
          </Stack>
        </AccordionDetails>
      </Accordion>
    );
  },
};

