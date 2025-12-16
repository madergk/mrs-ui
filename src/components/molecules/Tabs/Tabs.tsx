/**
 * Tabs Component
 *
 * Tab navigation component.
 * Uses theme tokens for styling and follows MRS design system rules.
 */

import React from 'react';
import { useTheme } from '@mui/material/styles';
import {
  Tabs as MuiTabs,
  TabsProps as MuiTabsProps,
  Tab as MuiTab,
  TabProps as MuiTabProps,
} from '@mui/material';

export interface TabsProps extends Omit<MuiTabsProps, 'variant'> {
  /**
   * Tabs variant
   * @default 'standard'
   */
  variant?: 'standard' | 'scrollable' | 'fullWidth';
  /**
   * Tabs orientation
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * Selected tab index
   */
  value?: number | string;
  /**
   * Callback fired when tab changes
   */
  onChange?: (event: React.SyntheticEvent, newValue: number | string) => void;
}

/**
 * Tabs component that consumes theme tokens
 *
 * @example
 * ```tsx
 * <Tabs value={value} onChange={handleChange}>
 *   <Tab label="Tab 1" />
 *   <Tab label="Tab 2" />
 * </Tabs>
 * ```
 */
export const Tabs: React.FC<TabsProps> = ({
  variant = 'standard',
  orientation = 'horizontal',
  value,
  onChange,
  sx,
  ...props
}) => {
  const theme = useTheme();

  return (
    <MuiTabs
      variant={variant}
      orientation={orientation}
      value={value}
      onChange={onChange}
      sx={{
        ...sx,
      }}
      {...props}
    />
  );
};

export interface TabProps extends Omit<MuiTabProps, 'icon'> {
  /**
   * Tab label
   */
  label: React.ReactNode;
  /**
   * Tab icon
   */
  icon?: React.ReactElement;
  /**
   * Tab icon position
   * @default 'top'
   */
  iconPosition?: 'top' | 'bottom' | 'start' | 'end';
}

/**
 * Tab component
 */
export const Tab: React.FC<TabProps> = ({ label, icon, iconPosition = 'top', ...props }) => {
  return <MuiTab label={label} icon={icon} iconPosition={iconPosition} {...props} />;
};

export default Tabs;
