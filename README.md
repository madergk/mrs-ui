# MRS UI - Material-UI v7.2.0 Design System

A comprehensive component library built on Material-UI v7.2.0, following the MRS Design System specifications.

## 🎯 Overview

This design system provides a complete set of React components built with Material-UI, following atomic design principles and consuming design tokens from `theme.json`.

## 📦 Installation

```bash
npm install
```

## 🚀 Development

### Start Development Server
```bash
npm run dev
```

### Start Storybook
```bash
npm run storybook
```

### Run Tests
```bash
npm test
```

### Run Tests in Watch Mode
```bash
npm run test:watch
```

### Type Checking
```bash
npm run type-check
```

### Linting
```bash
npm run lint
npm run lint:fix
```

### Formatting
```bash
npm run format
npm run format:check
```

## 🏗️ Build

### Build Library
```bash
npm run build
```

This creates a distributable build in the `dist/` directory.

## 📁 Project Structure

```
src/
  components/
    atoms/          # Basic building blocks (Button, Typography, etc.)
    molecules/      # Simple component combinations
    organisms/      # Complex component groups
  theme/            # Theme configuration and provider
  utils/            # Utility functions
  assets/           # Images, icons, fonts
  types/            # Shared TypeScript types
```

## 🎨 Theme System

The theme is configured from `theme.json` and supports:
- Light and dark color schemes
- Typography scale
- Spacing system (8px grid)
- Shape tokens (border radius)
- Component-specific tokens
- State tokens (hover, focus, etc.)

### Usage

```tsx
import { ThemeProvider } from '@mrs/ui';

function App() {
  return (
    <ThemeProvider colorScheme="light">
      <YourApp />
    </ThemeProvider>
  );
}
```

## 📚 Documentation

- [Implementation Plan](./IMPLEMENTATION_PLAN.md) - Complete implementation roadmap
- [Component Dependency Map](./COMPONENT_DEPENDENCY_MAP.md) - Component relationships
- [Design System Rules](./DESIGN_SYSTEM_RULES.md) - Design system guidelines

## 🧪 Testing

Tests are written using Jest and React Testing Library. Run tests with:

```bash
npm test
```

## 📖 Storybook

Storybook is configured for component documentation and development. Access it at:

```
http://localhost:6006
```

## 🔧 Configuration Files

- `package.json` - Dependencies and scripts
- `tsconfig.json` - TypeScript configuration
- `vite.config.ts` - Build configuration
- `.eslintrc.cjs` - ESLint rules
- `.prettierrc` - Prettier formatting rules
- `jest.config.cjs` - Jest test configuration
- `.storybook/` - Storybook configuration

## 📝 Development Guidelines

1. **Token-First Approach**: Always use theme tokens, never hardcoded values
2. **TypeScript**: All components must be fully typed
3. **Testing**: Write tests for all components
4. **Documentation**: Create Storybook stories for each component
5. **Accessibility**: Follow WCAG 2.1 AA standards

## 🎯 Next Steps

See [IMPLEMENTATION_PLAN.md](./IMPLEMENTATION_PLAN.md) for the complete implementation roadmap.

## 📄 License

MIT

