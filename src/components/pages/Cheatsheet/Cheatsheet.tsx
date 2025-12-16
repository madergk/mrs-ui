/**
 * Cheatsheet Page Component
 *
 * Component showcase page displaying all design system components.
 * Based on Figma design: https://www.figma.com/design/ESNP5KunFotGObfcuXZ9Op/MRS---Material-UI-v.7.2.0?node-id=11242-161350
 */

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Card,
  CardContent,
  Stack,
  Typography,
  Button,
  Chip,
  IconButton,
  Switch,
  Rating,
  TextField,
  Select,
  MenuItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableFooter,
  Alert,
  Tabs,
  Tab,
  Avatar,
  Badge,
  Divider,
  Paper,
} from '@mui/material';
import {
  Add as AddIcon,
  Menu as MenuIcon,
  ArrowDropDown as ArrowDropDownIcon,
  Favorite,
  Share,
  ExpandMore,
  ChevronLeft,
  ChevronRight,
} from '@mui/icons-material';
import { Icon } from '../../atoms/Icon';

/**
 * Cheatsheet page component
 *
 * @example
 * ```tsx
 * <Cheatsheet />
 * ```
 */
export const Cheatsheet: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);
  const [accordionExpanded, setAccordionExpanded] = useState<string | false>('panel1');
  const [switchChecked, setSwitchChecked] = useState(true);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleAccordionChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setAccordionExpanded(isExpanded ? panel : false);
    };

  return (
    <Stack spacing={0} sx={{ minHeight: '100vh' }}>
      {/* AppBar */}
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1, ml: 2 }}>
            MRS Design System
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <Stack alignItems="flex-end">
              <Typography variant="subtitle2">Paula Sapúlveda</Typography>
              <Typography variant="caption" color="text.secondary">
                Cuenta principal
              </Typography>
            </Stack>
            <Avatar src="/avatar.png" alt="User" />
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Stack spacing={3} sx={{ p: 3, maxWidth: 1200, mx: 'auto', width: '100%' }}>
        <Card>
          <CardContent>
            <Stack spacing={3}>
              {/* Typography Section */}
              <Stack spacing={1}>
                <Typography variant="h3">Typography</Typography>
                <Typography variant="body2">Typography</Typography>
              </Stack>

              {/* Buttons Section */}
              <Stack direction="row" spacing={1} flexWrap="wrap">
                <Button variant="contained" size="large">
                  Label
                </Button>
                <Button variant="outlined" size="large">
                  Label
                </Button>
                <Button variant="text" size="large">
                  Label
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  disabled
                  startIcon={<Icon icon="refresh" />}
                >
                  Loading
                </Button>
              </Stack>

              <Stack direction="row" spacing={1} flexWrap="wrap">
                <Button variant="contained" size="medium">
                  Label
                </Button>
                <Button variant="outlined" size="medium">
                  Label
                </Button>
                <Button variant="text" size="medium">
                  Label
                </Button>
                <Button
                  variant="contained"
                  size="medium"
                  disabled
                  startIcon={<Icon icon="refresh" />}
                >
                  Loading
                </Button>
              </Stack>

              <Stack direction="row" spacing={1} flexWrap="wrap">
                <Button variant="contained" size="small">
                  Label
                </Button>
                <Button variant="outlined" size="small">
                  Label
                </Button>
                <Button variant="text" size="small">
                  Label
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  disabled
                  startIcon={<Icon icon="refresh" />}
                >
                  Loading
                </Button>
              </Stack>

              {/* Tabs Section */}
              <Stack>
                <Tabs value={tabValue} onChange={handleTabChange}>
                  <Tab label="Tab" icon={<AddIcon />} />
                  <Tab label="Tab" icon={<AddIcon />} />
                  <Tab label="Tab" icon={<AddIcon />} />
                  <Tab label="Tab" icon={<AddIcon />} />
                </Tabs>
              </Stack>

              {/* Icon Buttons and Switch Section */}
              <Stack direction="row" spacing={1} alignItems="center">
                <IconButton>
                  <Favorite />
                </IconButton>
                <IconButton>
                  <Share />
                </IconButton>
                <Switch
                  checked={switchChecked}
                  onChange={(e) => setSwitchChecked(e.target.checked)}
                />
              </Stack>

              {/* Rating Section */}
              <Stack>
                <Rating value={2.5} precision={0.5} readOnly />
              </Stack>

              {/* Chips Section */}
              <Stack direction="row" spacing={1} flexWrap="wrap">
                <Chip label="Primary" color="primary" onDelete={() => {}} />
                <Chip label="Secondary" color="secondary" onDelete={() => {}} />
                <Chip label="Error" color="error" onDelete={() => {}} />
                <Chip label="Warning" color="warning" onDelete={() => {}} />
                <Chip label="Info" color="info" onDelete={() => {}} />
              </Stack>

              <Stack direction="row" spacing={1} flexWrap="wrap">
                <Chip label="Deletable" onDelete={() => {}} />
                <Chip
                  label="Thumbnail"
                  avatar={
                    <Avatar>
                      <Badge variant="dot" color="success">
                        <Typography variant="caption">OP</Typography>
                      </Badge>
                    </Avatar>
                  }
                  onDelete={() => {}}
                />
                <Chip label="Small" size="small" onDelete={() => {}} />
                <Chip label="Outlined" variant="outlined" onDelete={() => {}} />
                <Chip label="Default" />
              </Stack>

              {/* TextField Section */}
              <Stack direction="row" spacing={3}>
                <TextField label="Label" variant="standard" defaultValue="Value" fullWidth />
                <TextField label="Label" variant="filled" defaultValue="Value" fullWidth />
                <TextField label="Label" variant="outlined" defaultValue="Value" fullWidth />
              </Stack>

              {/* Select Section */}
              <Stack direction="row" spacing={3}>
                <TextField
                  select
                  label="Label"
                  variant="standard"
                  defaultValue="Value"
                  fullWidth
                  SelectProps={{
                    IconComponent: ArrowDropDownIcon,
                  }}
                >
                  <MenuItem value="Value">Value</MenuItem>
                </TextField>
                <TextField
                  select
                  label="Label"
                  variant="filled"
                  defaultValue="Value"
                  fullWidth
                  SelectProps={{
                    IconComponent: ArrowDropDownIcon,
                  }}
                >
                  <MenuItem value="Value">Value</MenuItem>
                </TextField>
                <TextField
                  select
                  label="Label"
                  variant="outlined"
                  defaultValue="Value"
                  fullWidth
                  SelectProps={{
                    IconComponent: ArrowDropDownIcon,
                  }}
                >
                  <MenuItem value="Value">Value</MenuItem>
                </TextField>
              </Stack>

              {/* Accordion Section */}
              <Stack>
                <Accordion
                  expanded={accordionExpanded === 'panel1'}
                  onChange={handleAccordionChange('panel1')}
                >
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Stack direction="row" spacing={2} sx={{ width: '100%' }}>
                      <Typography>Typography</Typography>
                      <Typography color="text.secondary">Typography</Typography>
                    </Stack>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Paper
                      sx={{
                        p: 2,
                        bgcolor: 'rgba(151, 71, 255, 0.04)',
                        border: '1px dashed #9747ff',
                        borderRadius: 1,
                      }}
                    >
                      <Typography variant="caption" color="#9747ff">
                        Instance Slot
                      </Typography>
                    </Paper>
                  </AccordionDetails>
                </Accordion>
                <Divider />
                <Accordion
                  expanded={accordionExpanded === 'panel2'}
                  onChange={handleAccordionChange('panel2')}
                >
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Stack direction="row" spacing={2} sx={{ width: '100%' }}>
                      <Typography>Typography</Typography>
                      <Typography color="text.secondary">Typography</Typography>
                    </Stack>
                  </AccordionSummary>
                </Accordion>
                <Divider />
                <Accordion disabled>
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Stack direction="row" spacing={2} sx={{ width: '100%' }}>
                      <Typography color="text.disabled">Typography</Typography>
                      <Typography color="text.disabled">Typography</Typography>
                    </Stack>
                  </AccordionSummary>
                </Accordion>
              </Stack>

              {/* Table Section */}
              <Paper elevation={1}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Head</TableCell>
                      <TableCell>Head</TableCell>
                      <TableCell>Head</TableCell>
                      <TableCell>Head</TableCell>
                      <TableCell>Head</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {[1, 2, 3, 4, 5].map((row) => (
                      <TableRow key={row}>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                  <TableFooter>
                    <TableRow>
                      <TableCell colSpan={3}>
                        <Stack direction="row" spacing={1} alignItems="center">
                          <Typography variant="caption">Rows per page:</Typography>
                          <Select size="small" defaultValue={10}>
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={25}>25</MenuItem>
                            <MenuItem value={50}>50</MenuItem>
                          </Select>
                        </Stack>
                      </TableCell>
                      <TableCell colSpan={2} align="right">
                        <Stack
                          direction="row"
                          spacing={1}
                          alignItems="center"
                          justifyContent="flex-end"
                        >
                          <Typography variant="caption">1-5 of 13</Typography>
                          <IconButton size="small">
                            <ChevronLeft />
                          </IconButton>
                          <IconButton size="small">
                            <ChevronRight />
                          </IconButton>
                        </Stack>
                      </TableCell>
                    </TableRow>
                  </TableFooter>
                </Table>
              </Paper>

              {/* Alert Section */}
              <Stack spacing={3}>
                <Alert severity="error" variant="filled" title="Error Title" onClose={() => {}}>
                  Error description
                </Alert>
                <Alert severity="error" variant="outlined" title="Error Title">
                  Error description
                </Alert>
                <Alert
                  severity="error"
                  variant="standard"
                  title="Error Title"
                  action={<Button size="small">Label</Button>}
                >
                  Error description
                </Alert>
              </Stack>

              <Stack spacing={3}>
                <Alert
                  severity="warning"
                  variant="standard"
                  title="Warning Title"
                  action={<Button size="small">Label</Button>}
                  onClose={() => {}}
                >
                  Warning description
                </Alert>
                <Alert
                  severity="info"
                  variant="standard"
                  title="Info Title"
                  action={<Button size="small">Label</Button>}
                  onClose={() => {}}
                >
                  Info description
                </Alert>
                <Alert
                  severity="success"
                  variant="standard"
                  title="Success Title"
                  action={<Button size="small">Label</Button>}
                  onClose={() => {}}
                >
                  Success description
                </Alert>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </Stack>
  );
};

export default Cheatsheet;
