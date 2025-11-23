# CLAUDE.md - Lighthouse HLTH UI Design System

## Mission
Building a healthcare-native design system that serves operational sustainability and mission-driven values.

---

## 🎨 Design System Principles

### 1. Accessibility First
- WCAG 2.1 AA compliance is non-negotiable
- All components keyboard navigable
- Screen reader tested with NVDA/JAWS
- Color contrast ratios ≥ 4.5:1 for text
- Focus indicators visible and obvious

### 2. Healthcare Context
- Designed for clinical and operational users
- High-information density without overwhelming
- Quick-scan layouts for busy healthcare professionals
- Data visualization optimized for sustainability metrics
- Mission-aligned aesthetics (hope, care, stewardship)

### 3. Performance
- Components lazy-loadable
- Tree-shakeable exports
- No runtime CSS-in-JS (use Tailwind + CVA)
- Bundle size monitored (<50KB per component)
- First contentful paint < 1.5s

### 4. Developer Experience
- TypeScript-first with full type coverage
- Storybook for all components
- Comprehensive prop documentation
- Copy-paste examples
- Minimal breaking changes

---

## 🏗️ Component Architecture

### Tech Stack
```yaml
framework: React 18+
styling: Tailwind CSS 3.x + class-variance-authority
typescript: 5.x (strict mode)
testing: Vitest + React Testing Library
accessibility: axe-core, jest-axe
storybook: 7.x
build: Vite
package_manager: npm
```

### Component Structure
```
src/components/
├── Button/
│   ├── Button.tsx           # Component implementation
│   ├── Button.stories.tsx   # Storybook stories
│   ├── Button.test.tsx      # Unit tests
│   ├── Button.module.css    # Component-specific styles (if needed)
│   └── index.ts             # Exports
└── index.ts                 # Barrel export
```

### Component Template
```typescript
import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';

const componentVariants = cva(
  // Base styles
  'base-classes-here',
  {
    variants: {
      variant: {
        primary: 'variant-specific-classes',
        secondary: 'variant-specific-classes',
      },
      size: {
        sm: 'size-specific-classes',
        md: 'size-specific-classes',
        lg: 'size-specific-classes',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ComponentProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof componentVariants> {
  // Additional props
}

export const Component = forwardRef<HTMLElement, ComponentProps>(
  ({ variant, size, className, ...props }, ref) => {
    return (
      <element
        ref={ref}
        className={componentVariants({ variant, size, className })}
        {...props}
      />
    );
  }
);

Component.displayName = 'Component';
```

---

## 🎯 Brand Guidelines

### Color Palette
```typescript
// Lighthouse HLTH Brand Colors (Tailwind config)
colors: {
  // Primary: Hope & Trust (Blue-Green)
  primary: {
    50: '#E6F7F5',
    100: '#CCEFE8',
    500: '#0D9488',  // Main brand color
    700: '#0F766E',
    900: '#134E4A',
  },

  // Secondary: Care & Warmth (Amber)
  secondary: {
    50: '#FFFBEB',
    100: '#FEF3C7',
    500: '#F59E0B',
    700: '#B45309',
  },

  // Success: Sustainability (Green)
  success: {
    500: '#10B981',
    700: '#059669',
  },

  // Warning: Attention Needed (Yellow)
  warning: {
    500: '#FBBF24',
    700: '#D97706',
  },

  // Error: Critical (Red)
  error: {
    500: '#EF4444',
    700: '#DC2626',
  },

  // Neutrals: Clinical Clarity
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    500: '#6B7280',
    700: '#374151',
    900: '#111827',
  },
}
```

### Typography
```typescript
fontFamily: {
  sans: ['Inter var', 'system-ui', 'sans-serif'],
  display: ['Inter var', 'sans-serif'],
  mono: ['JetBrains Mono', 'monospace'],
}

fontSize: {
  xs: ['0.75rem', { lineHeight: '1rem' }],
  sm: ['0.875rem', { lineHeight: '1.25rem' }],
  base: ['1rem', { lineHeight: '1.5rem' }],
  lg: ['1.125rem', { lineHeight: '1.75rem' }],
  xl: ['1.25rem', { lineHeight: '1.75rem' }],
  '2xl': ['1.5rem', { lineHeight: '2rem' }],
  '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
  '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
}
```

### Spacing
Use Tailwind's default spacing scale (4px base unit).
- Tight layouts: 2, 3, 4 (8px, 12px, 16px)
- Standard: 4, 6, 8 (16px, 24px, 32px)
- Generous: 8, 12, 16 (32px, 48px, 64px)

---

## 📋 GitHub Projects Integration

### Overview
All UI work is tracked in **GitHub Project #1: Lighthouse HLTH Delivery**
- **URL:** https://github.com/orgs/1nd1g0labs/projects/1
- **Purpose:** Link design system work to product features and strategic OKRs

### How to Find Component Work

**Query the Agent Backlog:**
```bash
gh api graphql -f query='
query {
  organization(login: "1nd1g0labs") {
    projectV2(number: 1) {
      items(first: 20, filters: {
        field: "Epic",
        value: "Design System"
      }) {
        nodes {
          content {
            ... on Issue {
              title
              url
              repository { name }
            }
          }
        }
      }
    }
  }
}
'
```

**Filter by:**
- **Epic:** "Design System" (components), "OPEX Dashboard" (dashboard-specific UI)
- **Stakeholder:** "Multi-Stakeholder" (reusable components), "CFO" (data viz)
- **Priority:** P0/P1 for current phase work
- **Effort:** XS/S for quick wins, M/L for complex components

### Linking to Strategy

Every component issue should reference:
- **Strategic Phase:** Which quarter needs this? (from `product/product_roadmap.md`)
- **Use Case:** Which feature uses it? (from `product/prd_opex_visibility_mvp.md`)
- **Stakeholder:** Who benefits? (from `market/personas/`)

**Example:**
```
Component: MetricCard
├── Strategic Phase: Q4 2024 Foundation
├── Epic: Design System
├── Used in: OPEX Dashboard (Epic 2)
├── Stakeholder: CFO, Sustainability Officer
└── OKR Impact: Enables $50K ARR (required for design partner)
```

### Component Development Workflow

**1. Read Strategic Context**
```bash
# Clone strategy repo alongside UI repo
cd /Users/nmvinson/Projects/IndigoLabs/lighthouse_hlth/
git clone git@github.com:1nd1g0labs/lighthouse-hlth-northstar-strategy.git

# Before implementing component, read:
cat lighthouse-hlth-northstar-strategy/product/prd_opex_visibility_mvp.md | grep -A 20 "OPEX Dashboard"
cat lighthouse-hlth-northstar-strategy/market/personas/hospital_cfo.md
```

**2. Implement Component**
```bash
# Create component structure
mkdir -p src/components/MetricCard
touch src/components/MetricCard/{MetricCard.tsx,MetricCard.stories.tsx,MetricCard.test.tsx,index.ts}

# Implement with:
# - TypeScript strict mode
# - Tailwind + CVA for styling
# - Accessibility attributes
# - Props for all variants
```

**3. Document in Storybook**
```tsx
// MetricCard.stories.tsx
export default {
  title: 'Components/MetricCard',
  component: MetricCard,
  parameters: {
    docs: {
      description: {
        component: 'Displays KPI metrics with optional trend indicators. Used in OPEX Dashboard for CFO visibility (Q4 2024 Foundation phase).',
      },
    },
  },
  argTypes: {
    // Document all props with descriptions
  },
};

export const Default: Story = {
  args: {
    title: 'Energy Consumption',
    value: '1,234',
    unit: 'kWh',
    trend: 'down',
    trendValue: 12,
    status: 'success',
  },
};

// Add stories for all variants
export const AllStatuses: Story = { ... };
export const WithoutTrend: Story = { ... };
export const Loading: Story = { ... };
```

**4. Test Accessibility**
```tsx
// MetricCard.test.tsx
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { MetricCard } from './MetricCard';

describe('MetricCard', () => {
  it('should not have accessibility violations', async () => {
    const { container } = render(
      <MetricCard title="Test" value="100" unit="kWh" />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('announces value to screen readers', () => {
    const { getByRole } = render(
      <MetricCard
        title="Energy"
        value="1,234"
        unit="kWh"
        trend="down"
        trendValue={12}
      />
    );
    expect(getByRole('article')).toHaveAccessibleName('Energy: 1,234 kWh, trend down 12');
  });

  // More tests...
});
```

**5. Update GitHub Project**
```bash
# When component is complete
gh issue comment $ISSUE_URL --body "✅ Component implemented
- TypeScript with full type coverage
- Storybook stories for all variants
- Unit tests: 95% coverage
- Accessibility: 0 axe violations
- Mobile responsive: tested 320px-1920px
- Dark mode: supported

Ready for review."

# Agent updates status in project (via web UI or GraphQL API)
```

---

## 🧪 Testing Standards

### Unit Tests (Required)
- **Coverage:** ≥80% for all components
- **Framework:** Vitest + React Testing Library
- **Run:** `npm run test`

```typescript
describe('Component', () => {
  it('renders with default props', () => { ... });
  it('applies variant styles correctly', () => { ... });
  it('forwards ref to underlying element', () => { ... });
  it('handles user interactions', () => { ... });
});
```

### Accessibility Tests (Required)
```typescript
it('should not have accessibility violations', async () => {
  const { container } = render(<Component />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});

it('is keyboard navigable', () => {
  const { getByRole } = render(<Component />);
  const element = getByRole('button');
  element.focus();
  expect(element).toHaveFocus();
});

it('has proper ARIA attributes', () => {
  const { getByRole } = render(<Component aria-label="Test" />);
  expect(getByRole('button')).toHaveAccessibleName('Test');
});
```

### Visual Regression Tests (Recommended)
- **Tool:** Chromatic (via Storybook)
- **Run:** Automatically on PR to main

---

## 🚀 Development Workflow

### Local Development
```bash
# Install dependencies
npm install

# Start Storybook (hot reload)
npm run storybook

# Run tests in watch mode
npm run test:watch

# Type check
npm run type-check

# Lint
npm run lint

# Build library
npm run build
```

### Creating a New Component

**1. Use the component generator (if available):**
```bash
npm run generate:component -- ComponentName
```

**2. Or manually:**
```bash
# Create component structure
mkdir -p src/components/ComponentName
cd src/components/ComponentName

# Create files
touch ComponentName.tsx ComponentName.stories.tsx ComponentName.test.tsx index.ts
```

**3. Implement using the component template above**

**4. Add to barrel export:**
```typescript
// src/components/index.ts
export * from './ComponentName';
```

**5. Document in Storybook**

**6. Write tests (unit + accessibility)**

**7. Create PR linking to GitHub Project issue**

### PR Checklist
- [ ] TypeScript compiles without errors
- [ ] All tests pass (npm run test)
- [ ] Accessibility tests pass (0 axe violations)
- [ ] Storybook stories added for all variants
- [ ] Component documented in README
- [ ] No console warnings/errors
- [ ] Mobile responsive (tested 320px-1920px)
- [ ] Dark mode supported
- [ ] Links to GitHub Project issue

---

## 📚 Key Documentation

### Internal
- **Component Catalog:** Storybook (run `npm run storybook`)
- **Architecture:** `docs/architecture.md`
- **Contributing:** `CONTRIBUTING.md`
- **Changelog:** `CHANGELOG.md`

### External (Strategy Repo)
- **Product Roadmap:** `lighthouse-hlth-northstar-strategy/product/product_roadmap.md`
- **PRD:** `lighthouse-hlth-northstar-strategy/product/prd_opex_visibility_mvp.md`
- **Personas:** `lighthouse-hlth-northstar-strategy/market/personas/`
- **GitHub Project Workflow:** `lighthouse-hlth-northstar-strategy/docs/AGENT-GITHUB-PROJECT-WORKFLOW.md`

---

## 🤖 Agent Workflow

### For healthtech-ui-designer Agent

**When assigned component work:**

1. **Read issue from GitHub Project:**
   ```bash
   ISSUE_URL="https://github.com/1nd1g0labs/lighthouse-hlth-ui/issues/XX"
   gh issue view $ISSUE_URL
   ```

2. **Read strategic context:**
   ```bash
   # Based on custom fields in project:
   # - Strategic Phase → product/product_roadmap.md
   # - Epic/Use Case → product/prd_opex_visibility_mvp.md
   # - Stakeholder → market/personas/
   ```

3. **Implement component:**
   - Follow component template
   - Use Tailwind + CVA for styling
   - Implement all variants
   - Add TypeScript types

4. **Write Storybook stories:**
   - Document all props
   - Show all variants
   - Include usage examples

5. **Test accessibility:**
   - Run axe audit
   - Test keyboard navigation
   - Verify screen reader experience

6. **Create PR:**
   ```bash
   gh pr create --title "feat(ui): Add ComponentName" --body "Closes #XX

   Component for [use case] in [epic].

   - TypeScript implementation
   - Storybook stories (all variants)
   - Tests: 95% coverage, 0 axe violations
   - Mobile responsive
   - Dark mode support

   Strategic Context:
   - Phase: Q4 2024 Foundation
   - Epic: OPEX Dashboard
   - Stakeholder: CFO
   "
   ```

7. **Update project status:**
   - Set Agent Assignment = "healthtech-ui-designer"
   - Transition status: Ready → In Progress → In Review → Done

---

## 🎨 Brand Assets

### Logo Usage
- **Primary:** Full color logo on light backgrounds
- **Secondary:** White logo on primary brand color
- **Minimum size:** 120px wide
- **Clear space:** Equal to height of "L" in logo

### Iconography
- **Library:** Heroicons (outline for navigation, solid for actions)
- **Custom icons:** Use 24x24 grid, 2px stroke width
- **Accessibility:** Always include descriptive `aria-label`

### Illustrations
- **Style:** Geometric, optimistic, healthcare-appropriate
- **Colors:** Use brand palette
- **Context:** Operational sustainability, mission-driven values

---

*Updated: November 2024 | Version: 1.0*
*For: Lighthouse HLTH UI Design System Development*

---

**Proprietary and Confidential**
© 2025 Indigo Labs LLC. All rights reserved.
