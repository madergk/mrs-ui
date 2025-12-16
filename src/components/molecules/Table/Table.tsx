/**
 * Table Component
 *
 * Data table component for displaying structured data.
 * Uses theme tokens for styling and follows MRS design system rules.
 */

import React from 'react';
import { useTheme } from '@mui/material/styles';
import {
  Table as MuiTable,
  TableProps as MuiTableProps,
  TableHead as MuiTableHead,
  TableHeadProps as MuiTableHeadProps,
  TableBody as MuiTableBody,
  TableBodyProps as MuiTableBodyProps,
  TableRow as MuiTableRow,
  TableRowProps as MuiTableRowProps,
  TableCell as MuiTableCell,
  TableCellProps as MuiTableCellProps,
  TableFooter as MuiTableFooter,
  TableFooterProps as MuiTableFooterProps,
} from '@mui/material';

export interface TableProps extends MuiTableProps {}

/**
 * Table component that consumes theme tokens
 *
 * @example
 * ```tsx
 * <Table>
 *   <TableHead>
 *     <TableRow>
 *       <TableCell>Header</TableCell>
 *     </TableRow>
 *   </TableHead>
 *   <TableBody>
 *     <TableRow>
 *       <TableCell>Cell</TableCell>
 *     </TableRow>
 *   </TableBody>
 * </Table>
 * ```
 */
export const Table: React.FC<TableProps> = ({ sx, ...props }) => {
  return <MuiTable sx={sx} {...props} />;
};

export interface TableHeadProps extends MuiTableHeadProps {}

export const TableHead: React.FC<TableHeadProps> = (props) => {
  return <MuiTableHead {...props} />;
};

export interface TableBodyProps extends MuiTableBodyProps {}

export const TableBody: React.FC<TableBodyProps> = (props) => {
  return <MuiTableBody {...props} />;
};

export interface TableRowProps extends MuiTableRowProps {}

export const TableRow: React.FC<TableRowProps> = (props) => {
  return <MuiTableRow {...props} />;
};

export interface TableCellProps extends MuiTableCellProps {}

export const TableCell: React.FC<TableCellProps> = (props) => {
  return <MuiTableCell {...props} />;
};

export interface TableFooterProps extends MuiTableFooterProps {}

export const TableFooter: React.FC<TableFooterProps> = (props) => {
  return <MuiTableFooter {...props} />;
};

export default Table;
