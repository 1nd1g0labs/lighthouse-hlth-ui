# LighthouseHlth Design System

## Version 1.0.0 — "Luminous Climate Clinical"

**Design Language for Climate-Resilient Healthcare Operations**

---

## Brand Concept

**Core Idea:** "Operational clarity for climate‑resilient healthcare."

**Keywords:** luminous, precise, calm, intelligent, sustainable, clinical‑but‑warm

### Brand Pillars

| Pillar | Description |
|--------|-------------|
| **Guidance, not gadgets** | Lighthouse as metaphor: reduce operational fog |
| **Environmental intelligence** | Connect ops metrics with sustainability impact |
| **Clinical trust** | Healthcare tool aesthetic, not consumer wellness |
| **Quiet confidence** | Understated, premium, zero cartoon vibes |

---

## Color System

> **Dark Mode Support**: For comprehensive dark mode color specifications, see [DARK_MODE_SPECIFICATION.md](./DARK_MODE_SPECIFICATION.md).

### Primary Palette

| Color | Token | Hex | Usage |
|-------|-------|-----|-------|
| **Primary Deep Teal** | `primary-500` | `#066E76` | Main buttons, links, charts, primary actions |
| **Primary Soft Teal** | `primary-soft-500` | `#0E9BA7` | Hovers, secondary emphasis, gradients |
| **Sustainability Green** | `sustainability-500` | `#16A34A` | Positive metrics, success states, reduced emissions |
| **Lighthouse Lime** | `lime-500` | `#A3E635` | Accent highlights, gradient terminus (use sparingly) |

### Semantic Colors

| Color | Token | Hex | Usage |
|-------|-------|-----|-------|
| **Warning Amber** | `amber-500` | `#F97316` | Attention needed, alerts |
| **Critical Red** | `critical-600` | `#DC2626` | Errors, high emissions, critical alerts |
| **Info Blue** | `info-500` | `#3B82F6` | Informational states |

### Surfaces & Backgrounds

| Surface | Token | Hex | Usage |
|---------|-------|-----|-------|
| **Canvas** | `canvas` | `#F3F5F7` | Page backgrounds |
| **Surface** | `surface` | `#FFFFFF` | Cards, panels, content areas |
| **Surface Sunken** | `surface-sunken` | `#EDF2F7` | Inset areas, secondary backgrounds |
| **Border Subtle** | `border-subtle` | `#E2E8F0` | Dividers, card borders |

### Text Colors

| Text | Token | Hex | Usage |
|------|-------|-----|-------|
| **Main** | `text-main` | `#0F172A` | Primary content, headings |
| **Secondary** | `text-secondary` | `#475569` | Secondary content |
| **Muted** | `text-muted` | `#64748B` | Tertiary content, labels |
| **Disabled** | `text-disabled` | `#94A3B8` | Disabled states |
| **Inverse** | `text-inverse` | `#FFFFFF` | Text on dark backgrounds |

### GHG Emission Categories

| Category | Token | Hex | Usage |
|----------|-------|-----|-------|
| **Scope 1 (Direct)** | `scope1` | `#D97706` | On-site combustion, fleet, fugitive emissions |
| **Scope 2 (Energy)** | `scope2` | `#2563EB` | Purchased electricity, steam, chilled water |
| **Scope 3 (Supply Chain)** | `scope3` | `#0D9488` | Goods, services, waste, travel |
| **Waste** | `waste` | `#059669` | Waste management (Scope 3 subset) |

### Gradients — "Lighthouse Beam"

```css
/* Primary CTA gradient (hero buttons, landing page) */
--lh-gradient-lighthouse-beam: linear-gradient(135deg, #0E9BA7 0%, #16A34A 40%, #A3E635 100%);

/* Secondary gradient */
--lh-gradient-primary: linear-gradient(135deg, #066E76 0%, #0E9BA7 100%);

/* Success state (app only) */
--lh-gradient-success: linear-gradient(135deg, #16A34A 0%, #A3E635 100%);

/* Canvas background */
--lh-gradient-canvas: linear-gradient(180deg, #EDF2F7 0%, #F3F5F7 100%);
```

**Usage Rules:**
- **Landing page:** Hero CTAs, header accents
- **App:** Success states only (e.g., "Goal achieved!")
- **Never:** Overuse—gradient fatigue dilutes brand

---

## Typography

### Dual Scale System

LighthouseHlth uses two typography scales:

1. **Marketing Scale** — Generous sizes for `lighthousehlth.com` storytelling
2. **App Scale** — Dense typography for `app.lighthousehlth.com` dashboards

### Font Stack

```css
--lh-font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
--lh-font-mono: 'JetBrains Mono', 'Fira Code', Consolas, monospace;
```

### Marketing Scale (lighthousehlth.com)

| Style | Size | Line Height | Letter Spacing | Usage |
|-------|------|-------------|----------------|-------|
| `text-h1` | 54px | 1.2em | -0.045em | Hero headlines |
| `text-h2` | 42px | 1.25em | -0.04em | Section titles |
| `text-h3` | 38px | 1.25em | -0.03em | Subsections |
| `text-h4` | 32px | 1.3em | -0.025em | Card headers |
| `text-h5` | 28px | 1.35em | -0.02em | Secondary headers |
| `text-h6` | 24px | 1.4em | -0.015em | Tertiary headers |
| `text-body-xl` | 20px | 1.5em | 0em | Lead paragraphs |
| `text-body-lg` | 18px | 1.55em | 0em | Large body text |
| `text-body` | 16px | 1.6em | 0em | Standard body |
| `text-body-sm` | 14px | 1.65em | 0em | Small body |

### App Scale (app.lighthousehlth.com)

| Style | Size | Line Height | Usage |
|-------|------|-------------|-------|
| `text-app-page-title` | 32px | 1.2 | Dashboard, Reports page titles |
| `text-app-panel-header` | 24px | 1.25 | Panel headers |
| `text-app-card-title` | 20px | 1.3 | Card titles, section headers |
| `text-app-section-header` | 18px | 1.35 | Subsection headers |
| `text-app-widget-title` | 16px | 1.4 | Widget titles |
| `text-app-body-lg` | 15px | 1.5 | Large body, descriptions |
| `text-app-body` | 14px | 1.5 | **Primary body text for app** |
| `text-app-body-sm` | 13px | 1.5 | Secondary text, metadata |
| `text-app-body-xs` | 12px | 1.4 | Tertiary text, timestamps |
| `text-app-metric-hero` | 36px | 1.1 | Hero KPI values |
| `text-app-metric` | 28px | 1.1 | Standard KPI values |
| `text-app-metric-sm` | 20px | 1.2 | Secondary metrics |
| `text-app-table-header` | 12px | 1.4 | Table headers (uppercase) |
| `text-app-table-cell` | 13px | 1.4 | Table cell content |
| `text-app-label` | 12px | 1.4 | Labels |
| `text-app-badge` | 11px | 1.2 | Badge/tag text |

---

## Shadow System — "Soft Layered Surfaces"

### Philosophy

"Grown-up neumorphism" — bi-directional shadows create premium depth without accessibility issues.

### Soft Shadows (Cards, Panels)

```css
/* Standard soft surface */
--lh-shadow-soft: 10px 10px 30px rgba(15, 23, 42, 0.12),
                  -8px -8px 20px rgba(255, 255, 255, 0.9);

/* Hover state */
--lh-shadow-card-hover: 12px 12px 35px rgba(15, 23, 42, 0.14),
                        -10px -10px 24px rgba(255, 255, 255, 0.92);
```

### Inset Shadows (Inputs, Controls)

```css
/* Input fields */
--lh-shadow-input: inset 1px 1px 3px rgba(148, 163, 184, 0.4),
                   inset -1px -1px 3px rgba(255, 255, 255, 0.9);
```

### Focus States

```css
/* Primary focus (sustainability green) */
--lh-shadow-focus: 0 0 0 2px rgba(34, 197, 94, 0.6);

/* With offset for dark backgrounds */
--lh-shadow-focus-offset: 0 0 0 2px #FFFFFF, 0 0 0 4px rgba(34, 197, 94, 0.6);
```

### Workspace Shadows

```css
/* Left navigation */
--lh-shadow-nav: 4px 0 12px rgba(15, 23, 42, 0.08);

/* Right context panel */
--lh-shadow-context-panel: -4px 0 12px rgba(15, 23, 42, 0.08);
```

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `rounded-sm` | 4px | Small elements |
| `rounded` | 8px | Standard |
| `rounded-lg` | 12px | Buttons (app) |
| `rounded-xl` | 16px | Cards, panels |
| `rounded-2xl` | 20px | Large cards |
| `rounded-full` | 9999px | Pill buttons (CTAs) |

**Button Philosophy:**
- **Marketing CTAs:** `rounded-full` (pill)
- **App buttons:** `rounded-lg` (12px) for density

---

## Layout Architecture

### Workspace Model

LighthouseHlth uses a "workshop" workspace model instead of modal-heavy patterns:

```
┌──────────────────────────────────────────────────────────────────┐
│  APP LAYOUT                                                       │
│  ┌──────────┐  ┌────────────────────────┐  ┌──────────────────┐  │
│  │ LEFT     │  │ CENTER                 │  │ RIGHT            │  │
│  │ Nav      │  │ Primary Workspace      │  │ Context Panel    │  │
│  │          │  │                        │  │                  │  │
│  │ shadow-  │  │ • Data tables          │  │ shadow-context-  │  │
│  │ nav      │  │ • KPI cards            │  │ panel            │  │
│  │          │  │ • Charts               │  │                  │  │
│  │ Facility │  │ • Form sections        │  │ Shifts based on  │  │
│  │ hierarchy│  │                        │  │ center selection │  │
│  │ nav      │  │                        │  │                  │  │
│  └──────────┘  └────────────────────────┘  └──────────────────┘  │
└──────────────────────────────────────────────────────────────────┘
```

### Key Principles

1. **No modals for primary workflows** — everything lives in panels
2. **Context panel (right)** shifts based on center selection
3. **Left nav** provides hierarchy: Facility → Region → Enterprise
4. **Dense but scannable** — healthcare professionals need info at a glance

---

## User Workflows

### Facility Director

Primary workspace: **Energy footprint tracking & grooming**

```
1. Connect energy provider APIs
2. Groom backlog of line items (daily/weekly)
3. Set alerts for anomalous consumption
4. Quarterly: Action Planning dashboard with leadership
```

**Key UI needs:**
- Data tables: `text-app-table-cell` (13px)
- Alert items: `text-app-body-sm` (13px)
- Metric cards: `text-app-metric` + `text-app-metric-unit`

### CFO / CSO

Primary workspace: **Action Planning hub**

```
1. Review organizational KPIs (quarterly roll-up)
2. Scenario modeling for vendor/action selection
3. Sensitivity analysis and projection
4. Budget/resource allocation discussions
5. Commit to action plans with Facility Directors
```

**Key UI needs:**
- Scenario cards: `text-app-card-title` (20px)
- Comparison values: `text-app-metric-sm` (20px)
- Budget figures: `text-app-metric` with mono font

---

## Component Patterns

### Card Treatment

```jsx
// Tailwind classes
<div className="bg-surface rounded-xl border border-border-subtle shadow-card hover:shadow-card-hover transition-shadow">
  {/* content */}
</div>

// CSS utility class
<div className="lh-card">
  {/* content */}
</div>
```

### Input Treatment

```jsx
// Tailwind classes
<input className="bg-canvas rounded-lg border border-border-subtle shadow-input focus:shadow-input-focus" />

// CSS utility class
<input className="lh-input" />
```

### Primary Button (Marketing)

```jsx
// Gradient CTA for landing page
<button className="bg-lighthouse-beam text-text-inverse rounded-full shadow-button hover:shadow-button-hover font-semibold px-8 py-3 hover:scale-[1.01] transition-all">
  Get Started
</button>

// CSS utility class
<button className="lh-btn-primary px-8 py-3">
  Get Started
</button>
```

### Primary Button (App)

```jsx
// Solid button for in-app actions
<button className="bg-primary text-text-inverse rounded-lg shadow-button hover:bg-primary-soft font-semibold px-6 py-2 transition-all">
  Save Changes
</button>

// CSS utility class
<button className="lh-btn-solid px-6 py-2">
  Save Changes
</button>
```

### KPI Card

```jsx
<div className="lh-kpi-card p-6">
  <p className="text-app-label text-text-muted uppercase">Energy Consumption</p>
  <p className="text-app-metric font-bold text-text-main">1,234</p>
  <p className="text-app-metric-unit text-text-secondary">kWh</p>
</div>
```

---

## Data Visualization

### Chart Colors

Use 1-2 primary colors for most charts. Reserve red for alerts only.

```typescript
const chartPalette = [
  '#066E76',  // Primary deep teal (primary series)
  '#16A34A',  // Sustainability green (secondary)
  '#0E9BA7',  // Soft teal (tertiary)
  '#F97316',  // Amber (attention)
  '#3B82F6',  // Info blue
];
```

### Emission Severity

```typescript
const emissionSeverity = {
  high: '#DC2626',    // Critical red
  medium: '#F97316',  // Warning amber
  low: '#16A34A',     // Sustainability green
  neutral: '#64748B', // Muted gray
};
```

---

## Accessibility Guidelines

### WCAG 2.1 AA Compliance

- Color contrast ratios ≥ 4.5:1 for text
- Focus indicators visible (sustainability green glow)
- All components keyboard navigable
- Screen reader tested

### Focus States

Focus rings use sustainability green for brand consistency while meeting 3:1 contrast requirements:

```css
*:focus-visible {
  outline: 2px solid rgba(34, 197, 94, 0.6);
  outline-offset: 2px;
}
```

### Touch Targets

- Minimum 44x44px for mobile
- Adequate spacing between targets
- Clear active/pressed states

---

## Animation Philosophy

### Timing
- **Fast (150ms)**: Hover states, simple transitions
- **Normal (250ms)**: Most UI transitions
- **Slow (350ms)**: Modals, page transitions

### Motion Principles
1. **Purposeful** - Motion communicates, not decorates
2. **Performant** - Use transform/opacity for 60fps
3. **Respectful** - Honor `prefers-reduced-motion`
4. **Subtle** - Professional, non-distracting

---

## Migration from v0.x

### Color Changes

| Old Token | New Token |
|-----------|-----------|
| `primary-500: #057C8B` | `primary-500: #066E76` |
| `accent-500: #FF833B` (orange) | `amber-500: #F97316` |
| `success-main: #10B981` | `sustainability-500: #16A34A` |

### New Tokens

- `primary-soft-*` — Soft teal scale
- `lime-*` — Lighthouse beam accent
- `shadow-soft`, `shadow-card`, `shadow-inset` — Soft layered surfaces
- `text-app-*` — Dense app typography scale

---

## Technical Stack

- **React 18+** with TypeScript (strict mode)
- **Tailwind CSS 3.4** (pre-compiled)
- **Class Variance Authority** for variants
- **Framer Motion** for animations
- **tsup** bundler
- **Storybook 8.6** for documentation

---

## File Structure

```
src/
├── tokens/
│   ├── colors.ts       # Luminous Climate Clinical palette
│   ├── typography.ts   # Dual-scale type system
│   ├── shadows.ts      # Soft layered surfaces
│   ├── spacing.ts      # 4px base unit
│   ├── radii.ts        # Border radius tokens
│   ├── animation.ts    # Motion tokens
│   └── index.ts        # Barrel export
├── styles.css          # CSS variables + Tailwind
└── components/         # React components
```

---

**Version:** 1.0.0 — "Luminous Climate Clinical"
**Updated:** December 2024

---

*Proprietary and Confidential*
*© 2025 Indigo Labs LLC. All rights reserved.*
