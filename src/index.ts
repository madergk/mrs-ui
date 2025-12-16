/**
 * MRS UI Component Library
 *
 * Main entry point for the design system component library.
 * Export all public components, utilities, and theme here.
 */

// Theme exports
export { ThemeProvider, createMRSTheme, theme, darkTheme } from './theme';
export type { ThemeProviderProps } from './theme';

// Foundation Components (Atoms)
export {
  Typography,
  Icon,
  Divider,
  Paper,
  Button,
  IconButton,
  Fab,
  Avatar,
  Badge,
  Chip,
  Link,
} from './components/atoms';

export type {
  TypographyProps,
  IconProps,
  DividerProps,
  PaperProps,
  ButtonProps,
  IconButtonProps,
  FabProps,
  AvatarProps,
  BadgeProps,
  ChipProps,
  LinkProps,
  TextFieldProps,
  SelectProps,
  MenuItemProps,
  RatingProps,
  SwitchProps,
} from './components/atoms';

// Molecule Components
export {
  Card,
  CardContent,
  Stack,
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
  AlertTitle,
  Tabs,
  Tab,
} from './components/molecules';

export type {
  CardProps,
  CardContentProps,
  StackProps,
  AccordionProps,
  AccordionSummaryProps,
  AccordionDetailsProps,
  TableProps,
  TableHeadProps,
  TableBodyProps,
  TableRowProps,
  TableCellProps,
  TableFooterProps,
  AlertProps,
  AlertTitleProps,
  TabsProps,
  TabProps,
} from './components/molecules';

// Organism Components
export { AppBar, Toolbar } from './components/organisms';

export type { AppBarProps, ToolbarProps } from './components/organisms';

// Types
export type {} from './types';
