# Design System Specification

Technical reference for design decisions and implementation patterns in the Lighthouse Health UI library.

## Brand Values

- **Environmental Consciousness**: "Be green, feel green" - Sustainability-first color palette
- **Minimalism**: "Less is more" - Clean, purposeful interfaces with generous whitespace
- **Dual Sustainability**: "Sustainable footprint, sustainable financial health" - Supporting both environmental and financial metrics

## Design Principles

1. **Trust & Safety**: Healthcare-grade reliability, high contrast, professional palette
2. **Clarity & Efficiency**: Data-focused, minimal cognitive load, clean typography
3. **Accessibility First**: WCAG 2.1 AA compliance, keyboard navigation, semantic HTML
4. **Responsive & Adaptive**: Mobile-first, 320px-1536px+ breakpoints, touch-friendly

## Color System

### Primary Palette

**Primary Teal** - `#1A8B8B`
- Usage: Primary actions, navigation, key UI elements
- Represents: Trust, healing, environmental stewardship
- Tailwind: `bg-primary-500`, `text-primary-600`, etc.
- Scale: 50-900 available

**Secondary Green** - `#4CAF50`
- Usage: Sustainability features, positive metrics, success states
- Represents: Growth, environmental health
- Tailwind: `bg-secondary-500`, etc.
- Scale: 50-900 available

**Accent Coral** - `#FF8B4B`
- Usage: CTAs, highlights, energy metrics
- Represents: Energy, warmth, action
- Tailwind: `bg-accent-500`, etc.
- Scale: 50-900 available

### Semantic Colors

- **Success**: `#10B981` - Positive feedback, low emissions
- **Warning**: `#F59E0B` - Caution, medium emissions
- **Error**: `#EF4444` - Errors, high emissions
- **Info**: `#3B82F6` - Informational messages

### Data Visualization

**Emissions Tracking**
- High: `#DC2626` (red) - Above target
- Medium: `#F59E0B` (amber) - On track
- Low: `#10B981` (green) - Below target
- Neutral: `#6B7280` (gray) - Baseline

**Sustainability Ratings**
- Excellent: `#047857` (dark green)
- Good: `#10B981` (green)
- Fair: `#F59E0B` (amber)
- Poor: `#DC2626` (red)

### Neutrals

9-step gray scale from white to black for text, backgrounds, and borders.

## Typography

### Font Stack

**Primary**: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- Highly legible at small sizes
- Excellent screen rendering
- Professional, modern appearance
- Loaded via Google Fonts automatically

**Monospace**: `'JetBrains Mono', 'Fira Code', Consolas, Monaco, monospace`
- Fixed-width for data alignment
- Used for code and numeric displays

### Type Scale (base 16px)

- Display: 48-72px - Hero sections
- Headings: 16-36px - Page titles, sections
- Body: 14-20px - Paragraphs, UI text
- Small: 12-14px - Labels, captions

### Line Heights

- Tight (1.25): Headlines, display text
- Normal (1.5): Body text, UI elements
- Relaxed (1.625): Long-form content

## Spacing System

**Base Unit**: 4px (0.25rem)

All spacing follows 4px increments for mathematical consistency:
- `4px` - Tight spacing
- `8px` - Small spacing
- `16px` - Base spacing
- `24px` - Medium spacing
- `32px` - Large spacing
- `48px` - XL spacing
- `64px` - XXL spacing

**Semantic Spacing**
- Component padding: 8-32px
- Gap between elements: 8-32px
- Section spacing: 32-128px
- Container padding: 16-64px

## Component Architecture

### Structure Pattern

All components follow:
1. **Variants**: Different visual styles
2. **Sizes**: Scale options (sm, md, lg, xl)
3. **States**: Hover, focus, active, disabled
4. **Accessibility**: ARIA attributes, keyboard support

### Implementation Pattern

```tsx
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const componentVariants = cva(
  'base-classes transition-colors', // Base classes
  {
    variants: {
      variant: {
        primary: 'bg-primary-500 hover:bg-primary-600',
        secondary: 'bg-secondary-500 hover:bg-secondary-600',
      },
      size: {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);
```

### Variant System

**Button Variants**
- `primary`: Brand teal, primary actions
- `secondary`: Green, secondary actions
- `accent`: Coral, CTAs
- `outline`: Bordered, subtle actions
- `ghost`: No background, minimal
- `destructive`: Red, delete actions

**Card Variants**
- `default`: Standard card
- `elevated`: With shadow
- `outline`: Bordered only
- `ghost`: No border/shadow
- `sustainability`: Green accent

## Animation Philosophy

### Timing
- Fast (150ms): Hover states, simple transitions
- Normal (250ms): Most UI transitions
- Slow (350-500ms): Modals, page transitions

### Easing
- `ease-out`: Objects entering view
- `ease-in`: Objects leaving
- `ease-in-out`: State changes, transforms

### Custom Animations (Tailwind)
- `animate-fade-in`: Opacity 0 to 1
- `animate-slide-in-bottom`: Slide up with fade
- `animate-slide-in-top`: Slide down with fade

### Motion Principles
1. Purposeful - Motion communicates, not decorates
2. Performant - Use transform/opacity for 60fps
3. Respectful - Honor `prefers-reduced-motion`
4. Subtle - Professional, non-distracting

## Accessibility Guidelines

### Color Contrast
- Normal text: Minimum 4.5:1
- Large text: Minimum 3:1
- UI components: Minimum 3:1 against adjacent colors

### Keyboard Navigation
- All interactive elements keyboard accessible
- Visible focus indicators (2px ring, primary color)
- Logical tab order
- Escape key closes modals/dropdowns

### Screen Readers
- Semantic HTML5 elements
- ARIA labels where needed
- Role attributes for complex widgets
- Live regions for dynamic content

### Touch Targets
- Minimum 44x44px (mobile)
- Adequate spacing between targets
- Clear active/pressed states

## Responsive Design

### Breakpoints
- xs: 320px - Mobile small
- sm: 640px - Mobile
- md: 768px - Tablet
- lg: 1024px - Laptop
- xl: 1280px - Desktop
- 2xl: 1536px - Large desktop

### Mobile-First Approach
- Stack layouts on mobile
- Grid layouts on desktop
- Collapsible navigation
- Touch-friendly interactions

## Best Practices

### Do's
- Use semantic color variants
- Maintain consistent spacing
- Follow accessibility guidelines
- Use proper component variants
- Test on multiple devices
- Honor user preferences (dark mode, reduced motion)

### Don'ts
- Override accessibility features
- Use custom colors outside the palette
- Ignore responsive breakpoints
- Skip keyboard navigation testing
- Use animations excessively
- Mix inconsistent spacing values

## Technical Implementation

### Stack
- React 18+ with TypeScript
- Tailwind CSS 3.4.0 (pre-compiled)
- Storybook 8.6.14
- tsup bundler
- Framer Motion for animations
- Class Variance Authority for variants

### Build Output
- ESM and CJS bundles
- Full TypeScript definitions
- Tree-shakeable exports
- Pre-compiled CSS
- Source maps

---

**Version 0.1.0** | Last Updated: January 2025
