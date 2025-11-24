# Dark Mode Quick Reference - Lighthouse HLTH

**Quick reference guide for implementing dark mode in components**

---

## Color Tokens

### Surfaces

| Token | Light Mode | Dark Mode | Usage |
|-------|------------|-----------|-------|
| `bg-white` / `bg-surfaces-base` | `#FFFFFF` | `#0F1419` | Page background |
| `bg-surfaces-elevated` | `#F9FAFB` | `#1A1F26` | Cards, panels |
| `bg-surfaces-elevated-hover` | `#F3F4F6` | `#232930` | Hover state |
| `bg-surfaces-floating` | `#FFFFFF` | `#2A3038` | Modals, tooltips |

### Text

| Token | Light Mode | Dark Mode | Contrast (Dark) |
|-------|------------|-----------|-----------------|
| `text-primary` / `text-gray-900` | `#111827` | `#F5F6F7` | 14.8:1 ✓ |
| `text-secondary` / `text-gray-600` | `#4B5563` | `#B4B8BC` | 7.2:1 ✓ |
| `text-tertiary` / `text-gray-500` | `#6B7280` | `#7F8489` | 4.6:1 ✓ |
| `text-disabled` | `#9CA3AF` | `#53575C` | 3.2:1 |

### Borders

| Token | Light Mode | Dark Mode | Usage |
|-------|------------|-----------|-------|
| `border-gray-200` / `border-borders-subtle` | `#E5E7EB` | `#232930` | Subtle dividers |
| `border-gray-300` / `border-borders-default` | `#D1D5DB` | `#2A3038` | Default borders |
| `border-borders-strong` | `#9CA3AF` | `#3A4048` | Emphasis borders |

### Brand Colors (Adjusted for Dark)

| Brand Color | Light Mode | Dark Mode Text | Dark Mode BG |
|-------------|------------|----------------|--------------|
| Primary Teal | `#057C8B` | `#66BECC` (300) | `#035268` (700) |
| Accent Orange | `#FF833B` | `#FFA36F` (400) | `#D15518` (800) |
| Secondary Green | `#4CAF50` | `#81C784` (300) | `#2E7D32` (800) |

### Semantic Colors (Dark Mode)

| State | Background | Text | Border |
|-------|------------|------|--------|
| Success | `#1E4620` | `#81C784` | `#2E7D32` |
| Warning | `#4D3A0A` | `#FFBA93` | `#D97706` |
| Error | `#4A1818` | `#FF8A80` | `#DC2626` |
| Info | `#0D2741` | `#64B5F6` | `#1D4ED8` |

---

## Component Patterns

### Button

```tsx
// Primary button
<button className="
  bg-primary-500 text-white
  hover:bg-primary-600
  dark:bg-primary-600
  dark:hover:bg-primary-500
">
  Primary Action
</button>

// Secondary button
<button className="
  bg-white text-primary-500 border border-primary-500
  hover:bg-primary-50
  dark:bg-surfaces-elevated
  dark:text-primary-300
  dark:border-primary-700
  dark:hover:bg-surfaces-elevated-hover
">
  Secondary Action
</button>

// Ghost button
<button className="
  bg-transparent text-gray-700
  hover:bg-gray-100
  dark:text-text-secondary
  dark:hover:bg-surfaces-elevated
">
  Ghost Action
</button>
```

### Card

```tsx
// Default card
<div className="
  bg-white border border-gray-200 shadow-sm
  dark:bg-surfaces-elevated
  dark:border-borders-default
  dark:shadow-md
">
  Card content
</div>

// Elevated card (modals, popovers)
<div className="
  bg-white shadow-md
  dark:bg-surfaces-floating
  dark:shadow-lg
  dark:border dark:border-borders-subtle
">
  Elevated content
</div>
```

### Input

```tsx
<input className="
  bg-white
  border-gray-300
  text-gray-900
  placeholder:text-gray-400
  focus:border-primary-500
  focus:ring-primary-500
  dark:bg-surfaces-elevated
  dark:border-borders-default
  dark:text-text-primary
  dark:placeholder:text-text-tertiary
  dark:focus:border-primary-400
  dark:focus:ring-primary-400/20
"/>
```

### Alert

```tsx
// Success alert
<div className="
  bg-success-light text-success-dark border-success-main
  dark:bg-[#1E4620]
  dark:text-[#81C784]
  dark:border-[#2E7D32]
">
  Success message
</div>

// Error alert
<div className="
  bg-error-light text-error-dark border-error-main
  dark:bg-[#4A1818]
  dark:text-[#FF8A80]
  dark:border-[#DC2626]
">
  Error message
</div>
```

### Modal

```tsx
// Backdrop
<div className="
  bg-black/50
  dark:bg-black/70
" />

// Modal panel
<div className="
  bg-white shadow-xl
  dark:bg-surfaces-floating
  dark:shadow-2xl
  dark:border dark:border-borders-strong
">
  Modal content
</div>
```

---

## Chart Colors (Dark Mode)

Use these for data visualizations on dark backgrounds:

```typescript
const darkModeChartColors = [
  '#66BECC',  // Primary teal (4.8:1)
  '#81C784',  // Secondary green (5.3:1)
  '#FFA36F',  // Accent orange (5.1:1)
  '#64B5F6',  // Info blue (4.9:1)
  '#A5D6A7',  // Success green (6.2:1)
  '#FFBA93',  // Warning amber (5.8:1)
  '#B39DDB',  // Purple (5.7:1)
  '#F48FB1',  // Pink (5.4:1)
];
```

**Usage**:
```tsx
const chartColor = theme === 'dark'
  ? darkModeChartColors[index]
  : lightModeChartColors[index];
```

---

## Common Patterns

### Text Hierarchy

```tsx
// Page title
<h1 className="text-gray-900 dark:text-text-primary">

// Section heading
<h2 className="text-gray-800 dark:text-text-primary">

// Card title
<h3 className="text-gray-900 dark:text-text-primary">

// Body text
<p className="text-gray-700 dark:text-text-secondary">

// Caption/metadata
<span className="text-gray-500 dark:text-text-tertiary">

// Disabled text
<span className="text-gray-400 dark:text-text-disabled">
```

### Focus States

```tsx
// Always adjust ring offset for dark mode
className="
  focus:ring-2
  focus:ring-primary-500
  focus:ring-offset-2
  dark:focus:ring-primary-400
  dark:ring-offset-surfaces-elevated
"
```

### Hover States

```tsx
// Subtle hover (cards, list items)
className="
  hover:bg-gray-50
  dark:hover:bg-surfaces-elevated
"

// Medium hover (buttons, links)
className="
  hover:bg-gray-100
  dark:hover:bg-surfaces-elevated-hover
"
```

### Shadows

```tsx
// Subtle shadow (cards)
className="
  shadow-sm
  dark:shadow-md
"

// Medium shadow (dropdowns)
className="
  shadow-md
  dark:shadow-lg
  dark:border dark:border-borders-subtle
"

// Large shadow (modals)
className="
  shadow-xl
  dark:shadow-2xl
  dark:border dark:border-borders-strong
"
```

---

## Testing Checklist

When adding dark mode to a component:

- [ ] Text contrast meets 4.5:1 minimum (use [WebAIM](https://webaim.org/resources/contrastchecker/))
- [ ] Focus indicators visible in both modes
- [ ] Hover states work in both modes
- [ ] Borders provide adequate separation
- [ ] Charts/data visualizations remain distinguishable
- [ ] No pure white (`#FFFFFF`) or pure black (`#000000`) backgrounds in dark mode
- [ ] Shadows adjusted for dark surfaces
- [ ] Test with `prefers-color-scheme` media query
- [ ] No FOUC (flash of unstyled content) on theme switch

---

## Tailwind Config Setup

```javascript
// tailwind.config.js
module.exports = {
  darkMode: 'class', // Enable class-based dark mode

  theme: {
    extend: {
      colors: {
        surfaces: {
          base: '#0F1419',
          elevated: '#1A1F26',
          elevatedHover: '#232930',
          floating: '#2A3038',
        },
        text: {
          primary: '#F5F6F7',
          secondary: '#B4B8BC',
          tertiary: '#7F8489',
          disabled: '#53575C',
        },
        borders: {
          subtle: '#232930',
          default: '#2A3038',
          strong: '#3A4048',
        },
      },
    },
  },
};
```

---

## ThemeToggle Component Usage

```tsx
import { ThemeToggle } from '@1nd1g0labs/lighthouse-hlth-ui';

// In app header
<header>
  <nav>
    {/* Logo, navigation */}
    <ThemeToggle variant="switch" size="md" />
  </nav>
</header>

// In settings page
<section>
  <h2>Appearance</h2>
  <ThemeToggle
    variant="segmented"
    size="lg"
    showLabels
    onThemeChange={(theme) => console.log('Theme changed to:', theme)}
  />
</section>
```

---

## Resources

- **Full Specification**: [DARK_MODE_SPECIFICATION.md](./DARK_MODE_SPECIFICATION.md)
- **Design System**: [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)
- **Contrast Checker**: https://webaim.org/resources/contrastchecker/
- **Color-Blind Simulator**: https://www.color-blindness.com/coblis-color-blindness-simulator/

---

**Version**: 1.0.0
**Last Updated**: January 2025
