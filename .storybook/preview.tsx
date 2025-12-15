import type { Preview } from '@storybook/react';
import { ThemeProvider } from '../src/theme/ThemeProvider';
import React from 'react';
import '../src/styles/material-symbols.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#121212',
        },
      ],
    },
  },
  decorators: [
    (Story, context) => {
      const colorScheme = context.globals.backgrounds?.value === '#121212' ? 'dark' : 'light';
      
      return (
        <ThemeProvider colorScheme={colorScheme}>
          <Story />
        </ThemeProvider>
      );
    },
  ],
};

export default preview;

