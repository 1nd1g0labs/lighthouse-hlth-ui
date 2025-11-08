# Contributing

Quick guide to adding components and submitting changes.

## Adding a New Component

### Component File Template

`src/components/MyComponent/MyComponent.tsx`:

```tsx
import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const myComponentVariants = cva(
  'inline-flex items-center justify-center rounded-lg transition-colors',
  {
    variants: {
      variant: {
        primary: 'bg-primary-500 text-white hover:bg-primary-600',
        secondary: 'bg-secondary-500 text-white hover:bg-secondary-600',
      },
      size: {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  }
);

export interface MyComponentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof myComponentVariants> {}

export const MyComponent = React.forwardRef<HTMLDivElement, MyComponentProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(myComponentVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);

MyComponent.displayName = 'MyComponent';
```

### Exports & Story

`src/components/MyComponent/index.ts`:
```tsx
export { MyComponent, type MyComponentProps } from './MyComponent';
```

`src/index.ts`:
```tsx
export { MyComponent, type MyComponentProps } from './components/MyComponent';
```

`src/components/MyComponent/MyComponent.stories.tsx`:
```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { MyComponent } from './MyComponent';

const meta = {
  title: 'Components/MyComponent',
  component: MyComponent,
  tags: ['autodocs'],
} satisfies Meta<typeof MyComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { variant: 'primary', children: 'My Component' },
};
```

## Code Standards

- Use Tailwind classes: `bg-primary-500`, `text-secondary-600`, `hover:bg-primary-600`
- Add TypeScript types and export them
- Use `React.forwardRef` for ref support
- Include ARIA labels and keyboard navigation
- Ensure 4.5:1 color contrast minimum

## PR Process

1. Create branch: `feature/component-name` or `fix/description`
2. Make changes following template above
3. Test:
   ```bash
   npm run storybook  # View at localhost:6006
   npm run build      # Ensure builds
   npm run type-check # No TS errors
   npm run lint       # No lint errors
   ```
4. Commit with clear messages
5. Open PR with description, screenshots, breaking changes noted

## Test Locally in Another App

```bash
# In lighthouse-hlth-ui
npm run build && npm link

# In your app
npm link @lighthouse-hlth/ui
```
