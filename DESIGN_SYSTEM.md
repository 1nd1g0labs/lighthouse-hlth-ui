# Lighthouse Health Design System - Technical Specification

## Overview

The Lighthouse Health Design System is a comprehensive design language system purpose-built for healthcare sustainability applications. It embodies the brand values of environmental consciousness, operational efficiency, and financial sustainability.

## Brand Identity

### Mission Statement
To provide healthcare organizations with a trusted, professional design system that enables them to build sustainable operations software that reduces environmental impact while improving financial health.

### Brand Values

1. **Environmental Consciousness ("Be green, feel green")**
   - Sustainability-first color palette
   - Green and blue themes representing environmental health and trust
   - Specialized components for emissions tracking and environmental metrics

2. **Minimalism ("Less is more")**
   - Clean, uncluttered interfaces
   - Purposeful use of color and decoration
   - Focus on data and content over decoration
   - Generous whitespace for improved readability

3. **Dual Sustainability ("Sustainable footprint, sustainable financial health")**
   - Components supporting both environmental and financial metrics
   - Cost savings visualization
   - ROI tracking and reporting capabilities

## Design Principles

### 1. Trust & Safety
Healthcare-grade reliability and professionalism:
- High color contrast for accessibility
- Clear visual hierarchy
- Professional color palette
- Consistent, predictable interactions

### 2. Clarity & Efficiency
Data-focused design for complex metrics:
- Clean typography for readability
- Effective data visualization
- Minimal cognitive load
- Efficient workflows

### 3. Accessibility First
WCAG 2.1 AA compliance:
- Minimum 4.5:1 contrast ratios for text
- Keyboard navigation support
- Screen reader compatibility
- Focus management
- Semantic HTML

### 4. Responsive & Adaptive
Works across all devices:
- Mobile-first approach
- Breakpoint system (320px - 1536px+)
- Flexible layouts
- Touch-friendly interactions

## Color System

### Color Philosophy

The color system is built around two primary themes:

1. **Healthcare Blue** - Trust, professionalism, clinical reliability
2. **Sustainability Green** - Environmental health, growth, renewal

### Primary Palette

#### Primary Blue (#0070E0)
- **Usage:** Primary actions, navigation, key UI elements
- **Accessibility:** AA contrast on white backgrounds
- **Associations:** Trust, reliability, healthcare, technology

#### Secondary Green (#4CAF50)
- **Usage:** Sustainability features, positive environmental metrics, success states
- **Accessibility:** AA contrast on white backgrounds
- **Associations:** Growth, sustainability, environmental health

#### Accent Orange (#FF9800)
- **Usage:** Calls-to-action, highlights, energy metrics
- **Accessibility:** Contrast checked for text use
- **Associations:** Energy, innovation, warmth

### Semantic Colors

#### Success (#10B981)
Used for positive feedback, successful operations, low emissions.

#### Warning (#F59E0B)
Used for caution states, medium emissions, attention needed.

#### Error (#EF4444)
Used for errors, high emissions, critical states.

#### Info (#3B82F6)
Used for informational messages, neutral states.

### Data Visualization Colors

#### Emissions Tracking
- **High:** #DC2626 (Red) - Above target, needs attention
- **Medium:** #F59E0B (Amber) - On track, monitor
- **Low:** #10B981 (Green) - Below target, excellent
- **Neutral:** #6B7280 (Gray) - Baseline, no data

#### Sustainability Ratings
- **Excellent:** #047857 (Dark Green)
- **Good:** #10B981 (Green)
- **Fair:** #F59E0B (Amber)
- **Poor:** #DC2626 (Red)

### Neutral Palette

9-step gray scale from white (#FFFFFF) to black (#000000):
- Used for text, backgrounds, borders
- Ensures proper contrast ratios
- Creates visual hierarchy

## Typography

### Font Stack

#### Sans-serif (Primary)
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
```

**Rationale:**
- Inter is highly legible at small sizes (critical for data display)
- Excellent screen rendering
- Professional, modern appearance
- Wide character set support

#### Monospace (Code/Data)
```css
font-family: 'JetBrains Mono', 'Fira Code', Consolas, Monaco, 'Courier New', monospace;
```

**Rationale:**
- Fixed-width for data alignment
- Clear distinction between UI text and data
- Good for numeric displays

### Type Scale

Based on a modular scale with base size 16px (1rem):

- **Display (48-72px):** Hero sections, landing pages
- **Headings (16-36px):** Page titles, section headers
- **Body (14-20px):** Paragraphs, UI text
- **Small (12-14px):** Labels, captions, helper text

### Line Height

- **Tight (1.25):** Headlines, display text
- **Normal (1.5):** Body text, UI elements
- **Relaxed (1.625):** Long-form content

## Spacing System

### Base Unit: 4px

All spacing follows a 4px base unit for mathematical consistency:

```
4px (0.25rem)   → Tight spacing
8px (0.5rem)    → Small spacing
16px (1rem)     → Base spacing
24px (1.5rem)   → Medium spacing
32px (2rem)     → Large spacing
48px (3rem)     → XL spacing
64px (4rem)     → XXL spacing
```

### Semantic Spacing

- **Component Padding:** 8px - 32px
- **Gap Between Elements:** 8px - 32px
- **Section Spacing:** 32px - 128px
- **Container Padding:** 16px - 64px

## Component Architecture

### Component Structure

All components follow a consistent structure:

1. **Variants** - Different visual styles
2. **Sizes** - Different scale options
3. **States** - Interactive states (hover, focus, active, disabled)
4. **Accessibility** - ARIA attributes, keyboard navigation

### Component Hierarchy

```
Layout Components
  ├── Container
  ├── Stack (VStack, HStack)
  └── Grid

Core Components
  ├── Button
  ├── Card
  └── Badge

Form Components
  ├── Input
  ├── Textarea
  ├── Select
  ├── Checkbox
  └── Radio

Feedback Components
  ├── Alert
  ├── Progress
  ├── Modal
  └── Tooltip

Navigation Components
  └── Tabs
```

## Animation Philosophy

### Timing

- **Fast (150ms):** Hover states, simple transitions
- **Normal (250ms):** Most UI transitions
- **Slow (350-500ms):** Modal entrances, page transitions

### Easing

- **Ease-out:** Most transitions (objects entering view)
- **Ease-in:** Objects leaving view
- **Ease-in-out:** State changes, transforms

### Motion Principles

1. **Purposeful** - Motion should communicate, not decorate
2. **Performant** - Use transform and opacity for smooth 60fps animations
3. **Respectful** - Honor `prefers-reduced-motion`
4. **Subtle** - Healthcare context requires professional, non-distracting motion

## Accessibility Guidelines

### Color Contrast

- **Normal text:** Minimum 4.5:1 contrast ratio
- **Large text:** Minimum 3:1 contrast ratio
- **UI components:** Minimum 3:1 against adjacent colors

### Keyboard Navigation

- All interactive elements must be keyboard accessible
- Visible focus indicators (2px ring, primary color)
- Logical tab order
- Escape key closes modals/dropdowns

### Screen Readers

- Semantic HTML5 elements
- ARIA labels where needed
- Role attributes for complex widgets
- Live regions for dynamic content

### Touch Targets

- Minimum 44x44px touch targets (mobile)
- Adequate spacing between targets
- Clear active/pressed states

## Responsive Design

### Breakpoints

- **xs:** 320px - Mobile small
- **sm:** 640px - Mobile
- **md:** 768px - Tablet
- **lg:** 1024px - Laptop
- **xl:** 1280px - Desktop
- **2xl:** 1536px - Large desktop

### Mobile-First Approach

Design for mobile first, enhance for larger screens:
- Stack layouts on mobile
- Grid layouts on desktop
- Collapsible navigation
- Touch-friendly interactions

## Usage Guidelines

### When to Use This System

- Healthcare sustainability applications
- Carbon footprint tracking platforms
- Hospital operations software
- Environmental compliance tools
- Sustainability reporting dashboards

### Brand Alignment

Always maintain alignment with core brand values:
- Use sustainability green for environmental features
- Use healthcare blue for trust/reliability features
- Maintain "less is more" minimalism
- Emphasize data clarity over decoration

### Customization

The design system supports customization through:
- Design token overrides
- Component prop variants
- CSS custom properties
- Theme configuration

However, maintain:
- Brand color palette integrity
- Accessibility standards
- Component API consistency

## Best Practices

### Do's
✅ Use semantic color variants (success, warning, error)
✅ Maintain consistent spacing
✅ Follow accessibility guidelines
✅ Use proper component variants
✅ Test on multiple devices
✅ Honor user preferences (dark mode, reduced motion)

### Don'ts
❌ Override accessibility features
❌ Use custom colors outside the palette
❌ Ignore responsive breakpoints
❌ Skip keyboard navigation testing
❌ Use animations excessively
❌ Mix inconsistent spacing values

## Technical Implementation

### Technology Stack

- **React 18+** - Component framework
- **TypeScript** - Type safety
- **Framer Motion** - Animation library
- **Class Variance Authority** - Variant management
- **Tailwind-inspired utilities** - Styling approach

### Build System

- **tsup** - Fast TypeScript bundler
- **ESM + CJS** - Module format support
- **Tree-shaking** - Optimized bundle size
- **Type definitions** - Full TypeScript support

### File Organization

```
src/
├── tokens/              # Design tokens
│   ├── colors.ts
│   ├── typography.ts
│   ├── spacing.ts
│   └── ...
├── components/          # UI components
│   ├── Button/
│   │   ├── Button.tsx
│   │   └── index.ts
│   └── ...
├── utils/              # Utilities
├── framer/             # Framer exports
└── index.ts            # Main entry
```

## Version History

- **v0.1.0** - Initial release with core components and design tokens

## Future Roadmap

### Planned Components
- Data visualization components (charts, graphs)
- Navigation components (Nav, Breadcrumb, Pagination)
- Advanced form components (Date picker, Multi-select)
- Data display (Table, List, DataGrid)
- Loading states (Skeleton, Spinner)

### Planned Features
- Dark mode support
- Additional accessibility features
- Performance optimizations
- Extended Framer integration
- Figma design file

## Support & Resources

For questions, feature requests, or bug reports, contact the Lighthouse Health development team.

---

**Version 0.1.0** | Last Updated: January 2025
