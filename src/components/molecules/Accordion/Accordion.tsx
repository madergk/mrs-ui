/**
 * Accordion Component
 *
 * Expandable content section component.
 * Uses theme tokens for styling and follows MRS design system rules.
 */

import React from 'react';
import { useTheme } from '@mui/material/styles';
import {
  Accordion as MuiAccordion,
  AccordionProps as MuiAccordionProps,
  AccordionSummary as MuiAccordionSummary,
  AccordionSummaryProps as MuiAccordionSummaryProps,
  AccordionDetails as MuiAccordionDetails,
  AccordionDetailsProps as MuiAccordionDetailsProps,
} from '@mui/material';

export interface AccordionProps extends MuiAccordionProps {
  /**
   * Whether the accordion is expanded
   */
  expanded?: boolean;
  /**
   * Callback fired when the expand/collapse state is changed
   */
  onChange?: (event: React.SyntheticEvent, expanded: boolean) => void;
}

/**
 * Accordion component that consumes theme tokens
 *
 * @example
 * ```tsx
 * <Accordion>
 *   <AccordionSummary>Summary</AccordionSummary>
 *   <AccordionDetails>Details</AccordionDetails>
 * </Accordion>
 * ```
 */
export const Accordion: React.FC<AccordionProps> = ({ sx, ...props }) => {
  const theme = useTheme();

  return (
    <MuiAccordion
      sx={{
        // Accordion uses lg (12px) border radius from theme
        borderRadius: theme.shape.custom?.lg ?? theme.shape.borderRadius,
        '&:first-of-type': {
          borderTopLeftRadius: theme.shape.custom?.lg ?? theme.shape.borderRadius,
          borderTopRightRadius: theme.shape.custom?.lg ?? theme.shape.borderRadius,
        },
        '&:last-of-type': {
          borderBottomLeftRadius: theme.shape.custom?.lg ?? theme.shape.borderRadius,
          borderBottomRightRadius: theme.shape.custom?.lg ?? theme.shape.borderRadius,
        },
        ...sx,
      }}
      {...props}
    />
  );
};

export interface AccordionSummaryProps extends MuiAccordionSummaryProps {}

/**
 * AccordionSummary component
 */
export const AccordionSummary: React.FC<AccordionSummaryProps> = (props) => {
  return <MuiAccordionSummary {...props} />;
};

export interface AccordionDetailsProps extends MuiAccordionDetailsProps {}

/**
 * AccordionDetails component
 */
export const AccordionDetails: React.FC<AccordionDetailsProps> = (props) => {
  return <MuiAccordionDetails {...props} />;
};

export default Accordion;
