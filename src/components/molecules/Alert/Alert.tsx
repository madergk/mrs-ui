/**
 * Alert Component
 *
 * Status message component for displaying alerts.
 * Uses theme tokens for styling and follows MRS design system rules.
 */

import React from 'react';
import { useTheme } from '@mui/material/styles';
import {
  Alert as MuiAlert,
  AlertProps as MuiAlertProps,
  AlertTitle as MuiAlertTitle,
  AlertTitleProps as MuiAlertTitleProps,
  IconButton as MuiIconButton,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

export interface AlertProps extends Omit<MuiAlertProps, 'variant' | 'severity'> {
  /**
   * Alert variant
   * @default 'standard'
   */
  variant?: 'filled' | 'outlined' | 'standard';
  /**
   * Alert severity
   * @default 'info'
   */
  severity?: 'error' | 'warning' | 'info' | 'success';
  /**
   * Alert title
   */
  title?: React.ReactNode;
  /**
   * Alert action element
   */
  action?: React.ReactNode;
  /**
   * Show close button
   * @default false
   */
  onClose?: () => void;
}

/**
 * Alert component that consumes theme tokens
 *
 * @example
 * ```tsx
 * <Alert severity="error" title="Error" onClose={() => {}}>
 *   Error message
 * </Alert>
 * ```
 */
export const Alert: React.FC<AlertProps> = ({
  variant = 'standard',
  severity = 'info',
  title,
  action,
  onClose,
  children,
  sx,
  ...props
}) => {
  const theme = useTheme();

  return (
    <MuiAlert
      severity={severity}
      variant={variant}
      action={action}
      onClose={onClose}
      sx={{
        borderRadius: theme.shape.custom?.md ?? theme.shape.borderRadius,
        ...sx,
      }}
      {...props}
    >
      {title && <AlertTitle>{title}</AlertTitle>}
      {children}
    </MuiAlert>
  );
};

export interface AlertTitleProps extends MuiAlertTitleProps {}

/**
 * AlertTitle component
 */
export const AlertTitle: React.FC<AlertTitleProps> = (props) => {
  return <MuiAlertTitle {...props} />;
};

export default Alert;
