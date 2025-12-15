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
} from './components/atoms';

// Types
export type { } from './types';

