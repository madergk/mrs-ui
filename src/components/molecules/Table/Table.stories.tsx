/**
 * Table Component Stories
 *
 * Data table component stories.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Table, TableHead, TableBody, TableRow, TableCell, TableFooter } from './Table';
import { Paper } from '@mui/material';

const meta: Meta<typeof Table> = {
  title: 'Molecules/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Table component for displaying structured data. Uses theme tokens and follows MRS design system rules.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: () => (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>John Doe</TableCell>
            <TableCell>john@example.com</TableCell>
            <TableCell>Admin</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Jane Smith</TableCell>
            <TableCell>jane@example.com</TableCell>
            <TableCell>User</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Bob Johnson</TableCell>
            <TableCell>bob@example.com</TableCell>
            <TableCell>User</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Product A</TableCell>
            <TableCell align="right">2</TableCell>
            <TableCell align="right">$10.00</TableCell>
            <TableCell align="right">$20.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Product B</TableCell>
            <TableCell align="right">1</TableCell>
            <TableCell align="right">$15.00</TableCell>
            <TableCell align="right">$15.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Product C</TableCell>
            <TableCell align="right">3</TableCell>
            <TableCell align="right">$8.00</TableCell>
            <TableCell align="right">$24.00</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3} align="right">
              <strong>Total</strong>
            </TableCell>
            <TableCell align="right">
              <strong>$59.00</strong>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </Paper>
  ),
};

export const Dense: Story = {
  render: () => (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>001</TableCell>
            <TableCell>Item 1</TableCell>
            <TableCell>Active</TableCell>
            <TableCell>2024-01-01</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>002</TableCell>
            <TableCell>Item 2</TableCell>
            <TableCell>Inactive</TableCell>
            <TableCell>2024-01-02</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>003</TableCell>
            <TableCell>Item 3</TableCell>
            <TableCell>Active</TableCell>
            <TableCell>2024-01-03</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  ),
};

export const Striped: Story = {
  render: () => (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Department</TableCell>
            <TableCell>Salary</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[
            { name: 'Alice', department: 'Engineering', salary: '$100,000' },
            { name: 'Bob', department: 'Design', salary: '$90,000' },
            { name: 'Charlie', department: 'Marketing', salary: '$80,000' },
            { name: 'Diana', department: 'Sales', salary: '$85,000' },
          ].map((row, index) => (
            <TableRow
              key={row.name}
              sx={{
                backgroundColor: index % 2 === 0 ? 'action.hover' : 'transparent',
              }}
            >
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.department}</TableCell>
              <TableCell>{row.salary}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  ),
};

