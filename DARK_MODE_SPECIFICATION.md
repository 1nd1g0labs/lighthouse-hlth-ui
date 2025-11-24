# Dark Mode Specification - Lighthouse HLTH Design System

**Version 1.0.0** | **Status: Implementation Ready**

## Mission Context

Dark mode serves our healthcare professionals who often work extended shifts in varying lighting conditions—from brightly lit surgical suites to dimly lit monitoring stations. By reducing eye strain and adapting to their environment, we enable caregivers to focus on what matters most: patient care and sustainable operations. This is compassion through design, respecting the physical well-being of those who use our tools daily.

---

## Design Philosophy

### Professional Healthcare Aesthetic

Dark mode for Lighthouse HLTH is **not**:
- A pure black background (harsh, lacks depth)
- A "gamer aesthetic" with neon colors
- A simple color inversion

Dark mode for Lighthouse HLTH **is**:
- **Sophisticated**: Elevated surfaces with subtle depth
- **Clinical**: High contrast for critical data readability
- **Professional**: Enterprise-grade healthcare software
- **Accessible**: WCAG 2.1 AA compliant in both themes
- **Adaptive**: Respects user preference and system settings

### Core Principles

1. **Readability First**: Healthcare data must remain crystal clear
2. **Depth Through Elevation**: Surface hierarchy using subtle shadows and tints
3. **Reduced Eye Strain**: Warm-tinted dark backgrounds, not pure black
4. **Consistent Brand**: Primary teal and accent coral work in both themes
5. **Accessibility Always**: 4.5:1 text contrast minimum in both modes

---

## Color System - Dark Mode Palette

### Surface Colors (Background Hierarchy)

```typescript
// Dark mode surfaces - warm-tinted dark gray (not pure black)
surfaces: {
  // Base background - Slightly warm dark gray
  base: '#0F1419',        // Darkest level (not pure black #000000)

  // Elevated surfaces (cards, modals, dropdowns)
  elevated: '#1A1F26',    // +1 elevation
  elevatedHover: '#232930', // Hover state

  // Higher elevation (tooltips, popovers)
  floating: '#2A3038',    // +2 elevation

  // Overlays and modals
  overlay: 'rgba(0, 0, 0, 0.6)', // Backdrop
}
```

**Rationale**:
- Warm-tinted grays (#0F1419 instead of #0D0D0D) reduce blue light and feel less harsh
- Subtle elevation changes create depth without harsh shadows
- Progressive lightening mimics material elevation in physical space

### Text Colors (Hierarchy)

```typescript
text: {
  // Primary text - High contrast for critical data
  primary: '#F5F6F7',     // 14.8:1 contrast on base

  // Secondary text - Labels, descriptions
  secondary: '#B4B8BC',   // 7.2:1 contrast on base

  // Tertiary text - Metadata, captions
  tertiary: '#7F8489',    // 4.6:1 contrast on base (WCAG AA minimum)

  // Disabled text
  disabled: '#53575C',    // 3.2:1 contrast (non-critical)

  // Inverted text (on colored backgrounds)
  inverse: '#0F1419',
}
```

**WCAG Compliance**:
- Primary: 14.8:1 ✓ (AAA)
- Secondary: 7.2:1 ✓ (AAA)
- Tertiary: 4.6:1 ✓ (AA)
- All body text meets or exceeds WCAG 2.1 AA standards

### Brand Colors - Dark Mode Adaptations

**Primary Teal** - Lightened for dark backgrounds
```typescript
primary: {
  50: '#E6F5F7',   // Very light tint
  100: '#CCE9EE',
  200: '#99D4DD',
  300: '#66BECC',
  400: '#33A9BB',  // Use for text on dark backgrounds
  500: '#057C8B',  // Original brand (use sparingly)
  600: '#04677A',
  700: '#035268',
  800: '#023C56',
  900: '#012744',

  // Dark mode specific tokens
  darkModeText: '#66BECC',    // primary-300 for text (4.8:1 contrast)
  darkModeBg: '#035268',      // primary-700 for backgrounds
  darkModeHover: '#04677A',   // primary-600 for hover states
}
```

**Accent Coral/Orange** - Maintained with adjustments
```typescript
accent: {
  50: '#FFF4ED',
  100: '#FFE8DB',
  200: '#FFD1B7',
  300: '#FFBA93',
  400: '#FFA36F',  // Use for text on dark backgrounds
  500: '#FF833B',  // Original (use for emphasis)
  600: '#F77A3A',
  700: '#E96929',
  800: '#D15518',
  900: '#B94107',

  // Dark mode specific
  darkModeText: '#FFA36F',    // accent-400 (5.1:1 contrast)
  darkModeBg: '#D15518',      // accent-800 for backgrounds
  darkModeHover: '#E96929',   // accent-700
}
```

**Secondary Green** - Environmental sustainability
```typescript
secondary: {
  50: '#E8F5E9',
  100: '#C8E6C9',
  200: '#A5D6A7',
  300: '#81C784',  // Use for success states
  400: '#66BB6A',
  500: '#4CAF50',  // Original
  600: '#43A047',
  700: '#388E3C',
  800: '#2E7D32',
  900: '#1B5E20',

  // Dark mode
  darkModeText: '#81C784',    // secondary-300 (5.3:1 contrast)
  darkModeBg: '#2E7D32',      // secondary-800
  darkModeHover: '#388E3C',   // secondary-700
}
```

### Semantic Colors - Dark Mode

```typescript
semantic: {
  success: {
    light: '#1E4620',      // Dark mode background
    main: '#81C784',       // Dark mode text (5.3:1)
    dark: '#A5D6A7',       // Dark mode emphasis
    contrast: '#F5F6F7',   // Text on success background
  },
  warning: {
    light: '#4D3A0A',      // Dark mode background
    main: '#FFBA93',       // Dark mode text (5.8:1)
    dark: '#FFD1B7',       // Dark mode emphasis
    contrast: '#0F1419',   // Text on warning background (dark)
  },
  error: {
    light: '#4A1818',      // Dark mode background
    main: '#FF8A80',       // Dark mode text (5.5:1)
    dark: '#FFAB91',       // Dark mode emphasis
    contrast: '#F5F6F7',   // Text on error background
  },
  info: {
    light: '#0D2741',      // Dark mode background
    main: '#64B5F6',       // Dark mode text (4.9:1)
    dark: '#90CAF9',       // Dark mode emphasis
    contrast: '#F5F6F7',   // Text on info background
  },
}
```

### Border Colors

```typescript
borders: {
  // Subtle borders for separators
  subtle: '#232930',      // Low contrast, gentle separation

  // Default borders for cards, inputs
  default: '#2A3038',     // Medium contrast

  // Strong borders for emphasis
  strong: '#3A4048',      // Higher contrast

  // Focus borders
  focus: '#66BECC',       // Primary-300 (visible, accessible)

  // Hover borders
  hover: '#33A9BB',       // Primary-400
}
```

### Data Visualization - Dark Mode

**Critical**: Healthcare data visualizations must remain distinguishable and accessible.

```typescript
dataViz: {
  // Emissions tracking (adjusted for dark backgrounds)
  emissions: {
    high: '#FF8A80',      // Light red (5.5:1)
    medium: '#FFBA93',    // Light amber (5.8:1)
    low: '#81C784',       // Light green (5.3:1)
    neutral: '#B4B8BC',   // Gray (7.2:1)
  },

  // Sustainability ratings
  sustainability: {
    excellent: '#A5D6A7',  // Lightest green (6.2:1)
    good: '#81C784',       // Light green (5.3:1)
    fair: '#FFBA93',       // Light amber (5.8:1)
    poor: '#FF8A80',       // Light red (5.5:1)
  },

  // Chart colors (8-color palette for dark mode)
  chart: [
    '#66BECC',  // Primary teal (4.8:1)
    '#81C784',  // Secondary green (5.3:1)
    '#FFA36F',  // Accent orange (5.1:1)
    '#64B5F6',  // Info blue (4.9:1)
    '#A5D6A7',  // Success green (6.2:1)
    '#FFBA93',  // Warning amber (5.8:1)
    '#B39DDB',  // Purple (5.7:1)
    '#F48FB1',  // Pink (5.4:1)
  ],

  // Gradient backgrounds for charts
  chartGradients: {
    primary: 'linear-gradient(135deg, rgba(102, 190, 204, 0.1) 0%, rgba(102, 190, 204, 0.05) 100%)',
    secondary: 'linear-gradient(135deg, rgba(129, 199, 132, 0.1) 0%, rgba(129, 199, 132, 0.05) 100%)',
    accent: 'linear-gradient(135deg, rgba(255, 163, 111, 0.1) 0%, rgba(255, 163, 111, 0.05) 100%)',
  }
}
```

**Design Note**: All chart colors tested for:
- Minimum 4.5:1 contrast on dark backgrounds
- Color-blind friendly palette (no red-green only encoding)
- Distinguishable when printed in grayscale

---

## Component-Specific Dark Mode Guidelines

### Buttons

```typescript
// Primary button
variant: 'primary' {
  light: 'bg-primary-500 text-white hover:bg-primary-600',
  dark: 'dark:bg-primary-600 dark:text-white dark:hover:bg-primary-500',
}

// Secondary button
variant: 'secondary' {
  light: 'bg-white text-primary-500 border border-primary-500',
  dark: 'dark:bg-surfaces-elevated dark:text-primary-300 dark:border-primary-700 dark:hover:bg-surfaces-elevatedHover',
}

// Ghost button
variant: 'ghost' {
  light: 'bg-transparent text-neutral-700 hover:bg-neutral-100',
  dark: 'dark:bg-transparent dark:text-text-secondary dark:hover:bg-surfaces-elevated',
}
```

### Cards

```typescript
// Default card
variant: 'default' {
  light: 'bg-white border border-gray-200 shadow-sm',
  dark: 'dark:bg-surfaces-elevated dark:border-borders-default dark:shadow-md',
}

// Elevated card (higher z-index, modals)
variant: 'elevated' {
  light: 'bg-white shadow-md',
  dark: 'dark:bg-surfaces-floating dark:shadow-lg dark:border dark:border-borders-subtle',
}

// Sustainability card (brand accent)
variant: 'sustainability' {
  light: 'bg-gradient-to-br from-primary-50 to-secondary-50 border border-secondary-200',
  dark: 'dark:bg-gradient-to-br dark:from-primary-900/20 dark:to-secondary-900/20 dark:border-secondary-800/30',
}
```

### Inputs

```typescript
// Text input
input {
  light: 'bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-primary-500 focus:ring-primary-500',
  dark: 'dark:bg-surfaces-elevated dark:border-borders-default dark:text-text-primary dark:placeholder:text-text-tertiary dark:focus:border-primary-400 dark:focus:ring-primary-400/20',
}

// Disabled input
input:disabled {
  light: 'bg-gray-50 text-gray-400 border-gray-200',
  dark: 'dark:bg-surfaces-base dark:text-text-disabled dark:border-borders-subtle',
}
```

### Alerts

```typescript
// Success alert
variant: 'success' {
  light: 'bg-success-light text-success-dark border-success-main',
  dark: 'dark:bg-semantic-success-light dark:text-semantic-success-dark dark:border-semantic-success-main',
}

// Error alert
variant: 'error' {
  light: 'bg-error-light text-error-dark border-error-main',
  dark: 'dark:bg-semantic-error-light dark:text-semantic-error-dark dark:border-semantic-error-main',
}
```

### Modals & Overlays

```typescript
// Modal backdrop
overlay: 'bg-black/50 dark:bg-black/70',

// Modal panel
panel: {
  light: 'bg-white shadow-xl',
  dark: 'dark:bg-surfaces-floating dark:shadow-2xl dark:border dark:border-borders-strong',
}

// Modal header/footer
header: {
  light: 'border-b border-gray-200',
  dark: 'dark:border-b dark:border-borders-default',
}
```

### Charts & Data Visualizations

**Special Considerations for Healthcare Data**:

1. **Line Charts**: Use thicker lines (2-3px) in dark mode for better visibility
2. **Bar Charts**: Add subtle borders to distinguish overlapping elements
3. **Pie Charts**: Increase border width between segments
4. **Grid Lines**: Reduce opacity (10-15%) to avoid visual clutter
5. **Tooltips**: Use elevated surface with strong border

```typescript
// Chart background
chartContainer: {
  light: 'bg-white',
  dark: 'dark:bg-surfaces-elevated',
}

// Grid lines
gridLines: {
  light: 'stroke-gray-200',
  dark: 'dark:stroke-borders-subtle',
}

// Axis labels
axisLabels: {
  light: 'fill-gray-600',
  dark: 'dark:fill-text-secondary',
}

// Tooltip
tooltip: {
  light: 'bg-white shadow-lg border border-gray-200',
  dark: 'dark:bg-surfaces-floating dark:shadow-xl dark:border-borders-strong',
}
```

---

## ThemeToggle Component Specification

### Visual Design

**Location Options**:
1. **Primary**: App header (top-right, near user profile/settings)
2. **Secondary**: Settings page (under "Appearance" section)
3. **Persistent**: Floating action button (bottom-right corner)

**Recommended**: Option 1 (header placement) for immediate access

### Component Design

```
┌─────────────────────────────────────────────────────┐
│  Light Mode:                                         │
│  ┌─────────────────┐                                │
│  │  ☀️  |  🌙  ●   │  (Sun selected, Moon not)       │
│  └─────────────────┘                                │
│                                                       │
│  Dark Mode:                                          │
│  ┌─────────────────┐                                │
│  │  ●  ☀️  |  🌙   │  (Sun not, Moon selected)       │
│  └─────────────────┘                                │
│                                                       │
│  System Preference:                                  │
│  ┌─────────────────┐                                │
│  │  ●  Auto  💻    │  (Auto mode active)             │
│  └─────────────────┘                                │
└─────────────────────────────────────────────────────┘
```

### Interaction States

**Three-State Toggle**:
1. **Light**: Forces light mode (ignores system preference)
2. **Dark**: Forces dark mode (ignores system preference)
3. **Auto**: Follows system preference (`prefers-color-scheme`)

**User Flow**:
```
User clicks toggle → Immediate theme switch → Save preference to localStorage
                                           → Update HTML data-theme attribute
                                           → Announce change to screen reader
```

### Accessibility Requirements

```typescript
// ARIA attributes
<button
  role="switch"
  aria-checked={theme === 'dark'}
  aria-label="Toggle dark mode"
  // Announce to screen readers
  aria-live="polite"
>
  {/* Icon content */}
</button>

// Keyboard support
- Tab: Focus toggle
- Space/Enter: Activate toggle
- Escape: Close if in dropdown variant
```

### TypeScript Interface

```typescript
export interface ThemeToggleProps {
  /**
   * Visual variant of the toggle
   * @default 'switch'
   */
  variant?: 'switch' | 'dropdown' | 'segmented';

  /**
   * Size of the toggle
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Show labels alongside icons
   * @default false
   */
  showLabels?: boolean;

  /**
   * Enable three-state mode (light/dark/auto)
   * @default true
   */
  enableAuto?: boolean;

  /**
   * Callback when theme changes
   */
  onThemeChange?: (theme: 'light' | 'dark' | 'auto') => void;

  /**
   * Custom storage key for localStorage
   * @default 'lh-theme-preference'
   */
  storageKey?: string;
}

export type Theme = 'light' | 'dark' | 'auto';
export type ResolvedTheme = 'light' | 'dark'; // Actual applied theme
```

### Component Implementation Specification

**File Structure**:
```
src/components/ThemeToggle/
├── ThemeToggle.tsx           # Main component
├── ThemeToggle.stories.tsx   # Storybook stories
├── useTheme.ts               # Theme management hook
├── ThemeProvider.tsx         # Context provider
├── types.ts                  # TypeScript interfaces
└── index.ts                  # Barrel export
```

**Core Logic** (useTheme hook):

```typescript
export function useTheme() {
  const [theme, setTheme] = useState<Theme>('auto');
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>('light');

  // Initialize from localStorage or system preference
  useEffect(() => {
    const stored = localStorage.getItem('lh-theme-preference');
    if (stored === 'light' || stored === 'dark' || stored === 'auto') {
      setTheme(stored);
    }
  }, []);

  // Listen to system preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e: MediaQueryListEvent) => {
      if (theme === 'auto') {
        setResolvedTheme(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  // Apply theme
  useEffect(() => {
    const root = document.documentElement;

    if (theme === 'auto') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
      setResolvedTheme(systemTheme);
      root.setAttribute('data-theme', systemTheme);
      root.classList.toggle('dark', systemTheme === 'dark');
    } else {
      setResolvedTheme(theme);
      root.setAttribute('data-theme', theme);
      root.classList.toggle('dark', theme === 'dark');
    }

    // Persist to localStorage
    localStorage.setItem('lh-theme-preference', theme);
  }, [theme]);

  return { theme, resolvedTheme, setTheme };
}
```

**Visual Variants**:

1. **Switch** (Default - iOS-style toggle)
```
┌──────────────┐
│  ☀️  ●──○   │  Light mode
└──────────────┘

┌──────────────┐
│   ○──●  🌙  │  Dark mode
└──────────────┘
```

2. **Dropdown** (Menu with all options)
```
┌────────────────┐
│ Current: Dark ▼│
└────────────────┘
    ↓
┌────────────────┐
│ ☀️  Light      │
│ 🌙  Dark    ✓  │
│ 💻  Auto       │
└────────────────┘
```

3. **Segmented** (Three-button group)
```
┌────────────────────────┐
│  ☀️  │  🌙  │  💻  │
│      │  ●   │      │  (Dark selected)
└────────────────────────┘
```

### Placement in App

**Next.js App Router Setup**:

```typescript
// app/layout.tsx
import { ThemeProvider } from '@1nd1g0labs/lighthouse-hlth-ui';

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('lh-theme-preference') || 'auto';
                const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                const resolved = theme === 'auto' ? systemTheme : theme;
                document.documentElement.setAttribute('data-theme', resolved);
                document.documentElement.classList.toggle('dark', resolved === 'dark');
              })();
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

// app/components/AppHeader.tsx
import { ThemeToggle } from '@1nd1g0labs/lighthouse-hlth-ui';

export function AppHeader() {
  return (
    <header>
      <nav>
        {/* Logo, navigation, etc. */}
        <ThemeToggle variant="switch" size="md" />
      </nav>
    </header>
  );
}
```

**Framer Implementation** (Code Component):

```typescript
// components/ThemeToggle.tsx (Framer Code Component)
import { addPropertyControls, ControlType } from 'framer';
import { ThemeToggle as LibThemeToggle } from '@1nd1g0labs/lighthouse-hlth-ui';

export function ThemeToggle(props) {
  return <LibThemeToggle {...props} />;
}

addPropertyControls(ThemeToggle, {
  variant: {
    type: ControlType.Enum,
    options: ['switch', 'dropdown', 'segmented'],
    defaultValue: 'switch',
  },
  size: {
    type: ControlType.Enum,
    options: ['sm', 'md', 'lg'],
    defaultValue: 'md',
  },
  showLabels: {
    type: ControlType.Boolean,
    defaultValue: false,
  },
});
```

---

## Implementation Guide

### Step 1: Update Tailwind Configuration

```javascript
// tailwind.config.js
module.exports = {
  // Enable dark mode via class strategy
  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        // Add dark mode surface colors
        surfaces: {
          base: '#0F1419',
          elevated: '#1A1F26',
          elevatedHover: '#232930',
          floating: '#2A3038',
          overlay: 'rgba(0, 0, 0, 0.6)',
        },

        // Add dark mode text colors
        text: {
          primary: '#F5F6F7',
          secondary: '#B4B8BC',
          tertiary: '#7F8489',
          disabled: '#53575C',
          inverse: '#0F1419',
        },

        // Add dark mode border colors
        borders: {
          subtle: '#232930',
          default: '#2A3038',
          strong: '#3A4048',
          focus: '#66BECC',
          hover: '#33A9BB',
        },

        // Existing colors remain (primary, secondary, accent, etc.)
        // ...
      },
    },
  },
  plugins: [],
};
```

### Step 2: Update Color Tokens

```typescript
// src/tokens/colors.ts
export const colors = {
  // ... existing light mode colors ...

  // Dark mode surfaces
  dark: {
    surfaces: {
      base: '#0F1419',
      elevated: '#1A1F26',
      elevatedHover: '#232930',
      floating: '#2A3038',
      overlay: 'rgba(0, 0, 0, 0.6)',
    },
    text: {
      primary: '#F5F6F7',
      secondary: '#B4B8BC',
      tertiary: '#7F8489',
      disabled: '#53575C',
      inverse: '#0F1419',
    },
    borders: {
      subtle: '#232930',
      default: '#2A3038',
      strong: '#3A4048',
      focus: '#66BECC',
      hover: '#33A9BB',
    },
  },
} as const;
```

### Step 3: Update Existing Components

**Example: Button Component**

```typescript
// src/components/Button/Button.tsx
const buttonVariants = cva(
  [
    'inline-flex items-center justify-center',
    'font-body text-body font-medium',
    'rounded-full',
    'px-4 py-2',
    'transition-all duration-200',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    // Add dark mode focus ring
    'dark:focus:ring-offset-surfaces-elevated',
  ].join(' '),
  {
    variants: {
      variant: {
        'green-right': [
          'bg-primary-500 text-white',
          'hover:bg-primary-600',
          'active:bg-primary-700',
          // Dark mode
          'dark:bg-primary-600',
          'dark:hover:bg-primary-500',
          'dark:active:bg-primary-700',
        ].join(' '),

        'white-right': [
          'bg-white text-primary-500 border border-primary-500',
          'hover:bg-primary-50',
          'active:bg-primary-100',
          // Dark mode
          'dark:bg-surfaces-elevated',
          'dark:text-primary-300',
          'dark:border-primary-700',
          'dark:hover:bg-surfaces-elevatedHover',
          'dark:active:bg-surfaces-floating',
        ].join(' '),
      },
    },
  }
);
```

**Example: Card Component**

```typescript
// src/components/Card/Card.tsx
const cardVariants = cva(
  [
    'rounded-xl transition-all duration-300 overflow-hidden',
    // Add dark mode base styles
    'dark:border-borders-default',
  ].join(' '),
  {
    variants: {
      variant: {
        default: [
          'bg-white border border-gray-200 shadow-sm',
          // Dark mode
          'dark:bg-surfaces-elevated',
          'dark:shadow-md',
        ].join(' '),

        elevated: [
          'bg-white shadow-md',
          // Dark mode
          'dark:bg-surfaces-floating',
          'dark:shadow-lg',
          'dark:border dark:border-borders-subtle',
        ].join(' '),

        sustainability: [
          'bg-gradient-to-br from-primary-500/5 to-secondary-500/5',
          'border border-secondary-500/20',
          // Dark mode
          'dark:from-primary-900/20',
          'dark:to-secondary-900/20',
          'dark:border-secondary-800/30',
        ].join(' '),
      },
    },
  }
);
```

### Step 4: Testing Checklist

**Visual Testing**:
- [ ] All components render correctly in dark mode
- [ ] Text contrast meets WCAG 2.1 AA (4.5:1 minimum)
- [ ] Focus indicators visible in both modes
- [ ] Charts and data visualizations remain distinguishable
- [ ] No pure white or pure black backgrounds
- [ ] Shadows provide appropriate depth

**Functional Testing**:
- [ ] Theme toggle switches instantly (no flash)
- [ ] Preference persists across page reloads
- [ ] System preference auto-detection works
- [ ] No FOUC (Flash of Unstyled Content) on load
- [ ] Theme applies before first paint (SSR check)

**Accessibility Testing**:
- [ ] Screen reader announces theme changes
- [ ] Keyboard navigation works in both modes
- [ ] Color contrast validated with tools (Stark, axe DevTools)
- [ ] Focus indicators clearly visible
- [ ] `prefers-color-scheme` respected when set to auto

**Cross-Browser Testing**:
- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (macOS/iOS)
- [ ] Mobile browsers (iOS Safari, Chrome Android)

---

## Migration Strategy

### Phase 1: Foundation (Week 1)
- [ ] Add dark mode color tokens to Tailwind config
- [ ] Create ThemeToggle component
- [ ] Create ThemeProvider context
- [ ] Add SSR-safe theme initialization script
- [ ] Update color token exports

### Phase 2: Core Components (Week 2)
- [ ] Update Button variants with dark mode
- [ ] Update Card variants
- [ ] Update Input components
- [ ] Update Alert/Badge components
- [ ] Update Modal/Dialog components

### Phase 3: Complex Components (Week 3)
- [ ] Update chart components (ensure data visibility)
- [ ] Update table components
- [ ] Update navigation components
- [ ] Update form components
- [ ] Update metric cards

### Phase 4: Testing & Refinement (Week 4)
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] Visual regression testing
- [ ] Cross-browser testing
- [ ] Healthcare staff user testing
- [ ] Performance optimization (reduce CSS bundle)

### Phase 5: Documentation & Launch
- [ ] Update Storybook with dark mode examples
- [ ] Create migration guide for consumers
- [ ] Update DESIGN_SYSTEM.md
- [ ] Publish v2.0.0 with dark mode
- [ ] Notify consuming applications

---

## Best Practices

### Do's ✓

1. **Use semantic dark mode classes**:
   ```typescript
   'dark:bg-surfaces-elevated' // Good
   'dark:bg-[#1A1F26]'         // Bad (arbitrary values)
   ```

2. **Test with real healthcare data**:
   - Verify chart legibility with actual metrics
   - Ensure critical alerts stand out
   - Test with color-blind simulation tools

3. **Respect user preferences**:
   - Default to 'auto' (system preference)
   - Persist user choice in localStorage
   - Never override without user action

4. **Provide smooth transitions**:
   ```typescript
   'transition-colors duration-200' // Smooth theme switch
   ```

5. **Test in actual use environments**:
   - Dimly lit monitoring stations
   - Brightly lit clinical areas
   - Mobile devices in various lighting

### Don'ts ✗

1. **Don't use pure black backgrounds**:
   ```typescript
   'dark:bg-black'       // Too harsh
   'dark:bg-[#0F1419]'   // Better (warm-tinted)
   ```

2. **Don't invert colors blindly**:
   - Test each color for contrast
   - Adjust lightness as needed
   - Maintain brand recognition

3. **Don't forget about images**:
   - Test logo visibility in both modes
   - Consider providing dark mode variants
   - Use `mix-blend-mode` for SVGs if needed

4. **Don't ignore motion preferences**:
   ```typescript
   // Always respect prefers-reduced-motion
   'motion-reduce:transition-none'
   ```

5. **Don't ship without healthcare staff feedback**:
   - Get feedback from actual users
   - Test in real work environments
   - Iterate based on usage patterns

---

## Troubleshooting

### Issue: Flash of Light Theme on Load

**Solution**: Ensure theme initialization script runs before React hydration:

```html
<!-- app/layout.tsx - in <head> -->
<script dangerouslySetInnerHTML={{
  __html: `
    (function() {
      const theme = localStorage.getItem('lh-theme-preference') || 'auto';
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      const resolved = theme === 'auto' ? systemTheme : theme;
      document.documentElement.classList.toggle('dark', resolved === 'dark');
    })();
  `
}} />
```

### Issue: Charts Not Visible in Dark Mode

**Solution**: Use dark mode specific chart colors:

```typescript
const chartColor = resolvedTheme === 'dark'
  ? colors.dataViz.chart // Light colors for dark backgrounds
  : colors.primary[500];  // Dark colors for light backgrounds
```

### Issue: Poor Contrast in Semantic Colors

**Solution**: Use dark mode specific semantic tokens:

```typescript
// Light mode
'text-success-dark' // #047857 on white

// Dark mode
'dark:text-success-main' // #81C784 on dark (#0F1419)
```

### Issue: Focus Indicators Not Visible

**Solution**: Adjust ring offset for dark mode:

```typescript
'focus:ring-2 focus:ring-primary-500 focus:ring-offset-2'
'dark:focus:ring-primary-400 dark:ring-offset-surfaces-elevated'
```

---

## Performance Considerations

### CSS Bundle Size

**Expected Impact**: +15-20% CSS bundle size (dark mode classes)

**Optimization Strategies**:

1. **Tree-shake unused utilities**:
   ```javascript
   // tailwind.config.js
   purge: ['./src/**/*.{ts,tsx}'], // Remove unused classes
   ```

2. **Lazy load theme toggle**:
   ```typescript
   const ThemeToggle = lazy(() => import('./ThemeToggle'));
   ```

3. **Use `@apply` sparingly**:
   - Prefer inline Tailwind classes
   - Only use `@apply` for repeated patterns

### Runtime Performance

**Theme Switch Speed**: < 50ms (instant visual feedback)

**Optimization**:
- Use CSS classes, not inline styles
- Leverage GPU acceleration (`transform`, `opacity`)
- Minimize JavaScript in theme switching logic

---

## Future Enhancements

### v2.1 (Q2 2025)
- [ ] Automatic theme based on time of day
- [ ] Custom theme picker (beyond light/dark)
- [ ] High contrast mode for accessibility

### v2.2 (Q3 2025)
- [ ] Per-page theme overrides
- [ ] Theme preview without applying
- [ ] Theme sync across devices (via user profile)

### v3.0 (Q4 2025)
- [ ] Fully customizable color themes
- [ ] Department-specific themes (radiology, surgery, etc.)
- [ ] Enhanced data visualization palettes

---

## Resources

### Design Tools
- **Contrast Checker**: [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- **Color-Blind Simulator**: [Coblis](https://www.color-blindness.com/coblis-color-blindness-simulator/)
- **Dark Mode Inspiration**: [Apple Human Interface Guidelines - Dark Mode](https://developer.apple.com/design/human-interface-guidelines/dark-mode)

### Testing Tools
- **axe DevTools**: Accessibility testing browser extension
- **Stark**: Contrast and vision simulation plugin (Figma/Sketch)
- **Percy**: Visual regression testing platform

### Code References
- **Tailwind Dark Mode**: [Official Docs](https://tailwindcss.com/docs/dark-mode)
- **Next.js Themes**: [next-themes package](https://github.com/pacocoursey/next-themes)
- **Healthcare Design**: [VA Design System](https://design.va.gov/)

---

**Document Version**: 1.0.0
**Last Updated**: January 2025
**Author**: Lighthouse HLTH Design Team
**Status**: ✅ Ready for Implementation

---

**Related Documentation**:
- [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) - Overall design system
- [ACCESSIBILITY_COMPLIANCE_v1.0.0.md](./ACCESSIBILITY_COMPLIANCE_v1.0.0.md) - Accessibility guidelines
- [CHANGELOG.md](./CHANGELOG.md) - Version history
