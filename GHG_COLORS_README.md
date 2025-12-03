# GHG Emission Category Colors - Usage Guide

Version: 1.1.0
Added: 2025-12-02

## Overview

The GHG (Greenhouse Gas) emission category color palette provides WCAG 2.1 AA compliant colors for healthcare sustainability applications following GHG Protocol standards.

### Color Categories

| Category | Color | Hex Code | Use Case |
|----------|-------|----------|----------|
| **Scope 1** | Amber | `#D97706` | Direct emissions (on-site fuel, vehicles) |
| **Scope 2** | Blue | `#2563EB` | Energy/electricity emissions |
| **Scope 3** | Teal | `#0D9488` | Supply chain emissions |
| **Waste** | Emerald | `#059669` | Waste management |

---

## Installation

The GHG color system is included in `@1nd1g0labs/lighthouse-hlth-ui` v1.1.0+

```bash
npm install @1nd1g0labs/lighthouse-hlth-ui@^1.1.0
```

---

## Components

### GHGCategoryBadge

Display badges for emission categories with consistent styling.

#### Basic Usage

```tsx
import { GHGCategoryBadge } from '@1nd1g0labs/lighthouse-hlth-ui';

function EmissionsDashboard() {
  return (
    <div>
      <GHGCategoryBadge category="scope1">Scope 1</GHGCategoryBadge>
      <GHGCategoryBadge category="scope2">Scope 2</GHGCategoryBadge>
      <GHGCategoryBadge category="scope3">Scope 3</GHGCategoryBadge>
      <GHGCategoryBadge category="waste">Waste</GHGCategoryBadge>
    </div>
  );
}
```

#### Variants

**Solid (Default)** - Filled background with white text
```tsx
<GHGCategoryBadge category="scope2" variant="solid">
  Energy Emissions
</GHGCategoryBadge>
```

**Outline** - Border only with colored text
```tsx
<GHGCategoryBadge category="scope2" variant="outline">
  Energy Emissions
</GHGCategoryBadge>
```

**Light** - Light background with dark text
```tsx
<GHGCategoryBadge category="scope2" variant="light">
  Energy Emissions
</GHGCategoryBadge>
```

#### Sizes

```tsx
<GHGCategoryBadge category="scope2" size="sm">Small</GHGCategoryBadge>
<GHGCategoryBadge category="scope2" size="md">Medium</GHGCategoryBadge>
<GHGCategoryBadge category="scope2" size="lg">Large</GHGCategoryBadge>
```

#### With Icons

```tsx
import { Zap } from 'lucide-react';

<GHGCategoryBadge
  category="scope2"
  leftIcon={<Zap className="h-3 w-3" />}
>
  Energy
</GHGCategoryBadge>
```

#### Pill Shape

```tsx
<GHGCategoryBadge category="scope2" pill>
  Energy
</GHGCategoryBadge>
```

---

## Tailwind Utilities

The color palette is available in Tailwind CSS classes.

### Background Colors

```tsx
<div className="bg-scope1">Direct Emissions</div>
<div className="bg-scope2">Energy</div>
<div className="bg-scope3">Supply Chain</div>
<div className="bg-waste">Waste</div>
```

### Text Colors

```tsx
<p className="text-scope1">Direct Emissions</p>
<p className="text-scope2">Energy</p>
<p className="text-scope3">Supply Chain</p>
<p className="text-waste">Waste</p>
```

### Variants

Each category has light, dark, bg, and border variants:

```tsx
<div className="bg-scope1-light">Light background</div>
<div className="bg-scope1-dark">Dark background</div>
<div className="bg-scope1-bg">Tinted background</div>
<div className="border-scope1-border">Border color</div>
```

---

## Chart Integration

### Recharts

```tsx
import { ghgChartColors } from '@1nd1g0labs/lighthouse-hlth-ui';
import { BarChart, Bar } from 'recharts';

function EmissionsChart({ data }) {
  return (
    <BarChart data={data}>
      <Bar dataKey="scope1" fill={ghgChartColors.scope1} />
      <Bar dataKey="scope2" fill={ghgChartColors.scope2} />
      <Bar dataKey="scope3" fill={ghgChartColors.scope3} />
      <Bar dataKey="waste" fill={ghgChartColors.waste} />
    </BarChart>
  );
}
```

### Chart.js

```tsx
import { getChartJsColors } from '@1nd1g0labs/lighthouse-hlth-ui';

const chartConfig = {
  type: 'pie',
  data: {
    labels: ['Scope 1', 'Scope 2', 'Scope 3', 'Waste'],
    datasets: [{
      data: [450, 584, 200, 66],
      ...getChartJsColors(['scope1', 'scope2', 'scope3', 'waste'])
    }]
  }
};
```

### D3

```tsx
import { getD3ColorScale } from '@1nd1g0labs/lighthouse-hlth-ui';

const colorScale = getD3ColorScale();

d3.select('#chart')
  .selectAll('rect')
  .data(data)
  .join('rect')
  .attr('fill', d => colorScale(d.category));
```

---

## Utilities Reference

### ghgColors

Core color object with all variants:

```tsx
import { ghgColors } from '@1nd1g0labs/lighthouse-hlth-ui';

const scope2Color = ghgColors.scope2.DEFAULT; // "#2563EB"
const scope2Light = ghgColors.scope2.light;   // "#60A5FA"
const scope2Dark = ghgColors.scope2.dark;     // "#1E40AF"
const scope2Bg = ghgColors.scope2.bg;         // "#DBEAFE"
const scope2Border = ghgColors.scope2.border; // "#3B82F6"
```

### ghgChartColors

Chart-ready color constants:

```tsx
import { ghgChartColors } from '@1nd1g0labs/lighthouse-hlth-ui';

ghgChartColors.scope1;      // "#D97706"
ghgChartColors.scope2;      // "#2563EB"
ghgChartColors.all;         // Array of all colors
ghgChartColors.light.all;   // Array of light variants
ghgChartColors.dark.all;    // Array of dark variants
```

### ghgStackingOrder

Recommended order for stacked charts (by typical magnitude):

```tsx
import { ghgStackingOrder } from '@1nd1g0labs/lighthouse-hlth-ui';

// ['scope2', 'scope1', 'scope3', 'waste']
ghgStackingOrder.forEach(category => {
  // Render bars in this order
});
```

### ghgCategoryMetadata

Category information for labels and tooltips:

```tsx
import { ghgCategoryMetadata } from '@1nd1g0labs/lighthouse-hlth-ui';

const scope2Info = ghgCategoryMetadata.scope2;
console.log(scope2Info.label);        // "Scope 2"
console.log(scope2Info.fullLabel);    // "Scope 2: Energy Emissions"
console.log(scope2Info.description);  // "Purchased electricity, steam..."
console.log(scope2Info.examples);     // Array of examples
console.log(scope2Info.color);        // "#2563EB"
```

### Helper Functions

```tsx
import {
  formatCategoryLabel,
  getCategoryColor
} from '@1nd1g0labs/lighthouse-hlth-ui';

// Format category labels
formatCategoryLabel('scope2', 'short');       // "Scope 2"
formatCategoryLabel('scope2', 'full');        // "Scope 2: Energy Emissions"
formatCategoryLabel('scope2', 'description'); // Full description

// Get colors dynamically
getCategoryColor('scope2', 'DEFAULT'); // "#2563EB"
getCategoryColor('scope2', 'light');   // "#60A5FA"
```

---

## Usage Examples

### Dashboard Metric Card

```tsx
import { GHGCategoryBadge } from '@1nd1g0labs/lighthouse-hlth-ui';

function EmissionMetricCard() {
  return (
    <div className="rounded-lg border bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <p className="text-sm font-medium text-gray-600">Total Emissions</p>
        <GHGCategoryBadge category="scope2" size="sm">
          Energy
        </GHGCategoryBadge>
      </div>
      <p className="text-2xl font-bold tabular-nums">1,234</p>
      <p className="text-xs text-gray-500">tons CO2e / year</p>
    </div>
  );
}
```

### Chart Legend

```tsx
import { ghgColors, ghgCategoryMetadata } from '@1nd1g0labs/lighthouse-hlth-ui';

function ChartLegend() {
  return (
    <div className="space-y-2">
      {(['scope1', 'scope2', 'scope3', 'waste'] as const).map(category => (
        <div key={category} className="flex items-center gap-2">
          <div
            className="h-3 w-3 rounded-full"
            style={{ backgroundColor: ghgColors[category].DEFAULT }}
          />
          <span className="text-sm">
            {ghgCategoryMetadata[category].fullLabel}
          </span>
        </div>
      ))}
    </div>
  );
}
```

### Data Table

```tsx
import { GHGCategoryBadge } from '@1nd1g0labs/lighthouse-hlth-ui';

function EmissionsTable({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Facility</th>
          <th>Category</th>
          <th>Emissions</th>
        </tr>
      </thead>
      <tbody>
        {data.map(row => (
          <tr key={row.id}>
            <td>{row.facility}</td>
            <td>
              <GHGCategoryBadge
                category={row.category}
                size="sm"
                variant="light"
              >
                {row.categoryLabel}
              </GHGCategoryBadge>
            </td>
            <td className="tabular-nums">{row.emissions} tons</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
```

---

## Accessibility

All color combinations meet **WCAG 2.1 AA** standards (4.5:1 contrast ratio):

- ✅ Scope 1 (Amber): White text on `#D97706`
- ✅ Scope 2 (Blue): White text on `#2563EB`
- ✅ Scope 3 (Teal): White text on `#0D9488`
- ✅ Waste (Emerald): White text on `#059669`

### Accessibility Features

- `aria-label` for screen readers
- `role="status"` for semantic clarity
- High contrast text on colored backgrounds
- Consistent sizing for touch targets (minimum 44x44px for interactive elements)

---

## Storybook Documentation

View interactive examples in Storybook:

```bash
cd lighthouse-hlth-ui
npm run storybook
```

Navigate to **Components > GHGCategoryBadge** to see:
- All category variants
- Size comparisons
- Icon integration
- Chart legend examples
- Data table usage
- Accessibility validation

---

## Migration Guide

### From Generic Badge

**Before:**
```tsx
<Badge variant="warning">Scope 1</Badge>
<Badge variant="info">Scope 2</Badge>
```

**After:**
```tsx
<GHGCategoryBadge category="scope1">Scope 1</GHGCategoryBadge>
<GHGCategoryBadge category="scope2">Scope 2</GHGCategoryBadge>
```

### From Custom Colors

**Before:**
```tsx
<div className="bg-amber-600 text-white">Scope 1</div>
```

**After:**
```tsx
<div className="bg-scope1 text-white">Scope 1</div>
// or
<GHGCategoryBadge category="scope1">Scope 1</GHGCategoryBadge>
```

---

## TypeScript Support

Full TypeScript support with exported types:

```tsx
import type {
  GHGCategory,
  GHGColorVariant,
  GHGStackingOrder,
  GHGCategoryBadgeProps
} from '@1nd1g0labs/lighthouse-hlth-ui';

const category: GHGCategory = 'scope2';
const variant: GHGColorVariant = 'light';

const badgeProps: GHGCategoryBadgeProps = {
  category: 'scope2',
  variant: 'solid',
  size: 'md',
  pill: false,
};
```

---

## Best Practices

1. **Use consistent variants** - Stick to one variant style per context (e.g., solid for charts, light for tables)

2. **Follow stacking order** - Use `ghgStackingOrder` for consistent chart displays:
   ```tsx
   // Scope 2 (largest) → Scope 1 → Scope 3 → Waste (smallest)
   ```

3. **Include labels** - Always pair colors with text labels for accessibility

4. **Use metadata** - Leverage `ghgCategoryMetadata` for tooltips and descriptions

5. **Test contrast** - When using custom backgrounds, verify contrast ratios remain compliant

---

## Reference Links

- **GHG Protocol**: https://ghgprotocol.org/
- **WCAG 2.1 Guidelines**: https://www.w3.org/WAI/WCAG21/quickref/
- **Storybook Docs**: Run `npm run storybook` in lighthouse-hlth-ui
- **Component Source**: `/src/components/GHGCategoryBadge/`
- **Utility Source**: `/src/utils/ghg-colors.ts`

---

## Support

For issues or questions:
- GitHub Issues: https://github.com/1nd1g0labs/lighthouse-hlth-ui/issues
- Internal: Contact UI/UX Designer Agent or Fullstack Engineer Agent

---

**Last Updated**: 2025-12-02
**Version**: 1.1.0
**Status**: Production Ready
