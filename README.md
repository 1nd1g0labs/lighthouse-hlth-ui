# Lighthouse Health UI

Healthcare sustainability design system. Brand-aligned components for carbon tracking, operations dashboards, and mission-driven health systems.

## Quick Start

### Install

**Note:** This package is hosted on GitHub Package Registry. See [PUBLISHING.md](./PUBLISHING.md) for setup instructions.

```bash
npm install @1nd1g0labs/lighthouse-hlth-ui
```

### Use
```tsx
// Import styles in your root file (_app.tsx, layout.tsx, etc.)
import '@1nd1g0labs/lighthouse-hlth-ui/dist/styles.css';

// Import and use components
import { Button, Card, MetricCard, IconButton, ServiceCard } from '@1nd1g0labs/lighthouse-hlth-ui';

function App() {
  return (
    <>
      <Button variant="primary">Contact us</Button>
      <MetricCard value="$4m+" label="Total saved" />
      <IconButton ariaLabel="View more" />
    </>
  );
}
```

### Develop
```bash
git clone <repo-url>
cd lighthouse-hlth-ui
npm install
npm run storybook    # View components at localhost:6006
npm run build        # Build library
```

## Current Components

### Production Ready (Tailwind + Brand Colors)
| Component | Variants | Description |
|-----------|----------|-------------|
| **Button** | primary, secondary, accent, outline, ghost, destructive | Action buttons with icons, loading states |
| **IconButton** | primary, secondary, accent, outline, ghost | Circular icon CTAs |
| **Card** | default, elevated, outline, ghost, sustainability | Content containers with header/footer |
| **MetricCard** | - | Large stat display with trends |
| **ServiceCard** | - | Image-based showcase with overlay text |

### Available (Legacy Styling)
Badge, Alert, Progress, Modal, Tooltip, Tabs, Input, Select, Checkbox, Radio, Textarea, Container, Stack, Grid

These work but use older styling and will be refactored.

## Key Info

### Brand Colors
- **Primary (Teal)**: `#1A8B8B` - Trust, healing, environmental stewardship
- **Secondary (Green)**: `#4CAF50` - Sustainability, growth
- **Accent (Coral)**: `#FF8B4B` - Warmth, energy, action

Use as Tailwind classes: `bg-primary-500`, `text-secondary-600`, `border-accent-500`

### Typography
- **Font**: Inter (loaded automatically)
- **Scales**: 12px-72px
- **Use**: `font-sans` for UI text, `font-mono` for data/code

### Spacing
- **System**: 4px base unit
- **Tailwind**: `p-4`, `gap-6`, `space-y-8`

### Tech Requirements
- **React**: 18+
- **Tailwind**: v3.4.0 (styles pre-compiled, no need to install in your app)
- **TypeScript**: Full support included

## Commands

```bash
npm run dev          # Build in watch mode
npm run build        # Build for production
npm run storybook    # Run Storybook at localhost:6006
npm run type-check   # TypeScript validation
npm run lint         # ESLint
npm run format       # Prettier
```

## Examples

### Metric Dashboard
```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <MetricCard value="$4m+" label="Total saved" trend="up" trendValue="+23%" />
  <MetricCard value="147t" label="CO2 reduced" trend="down" />
  <MetricCard value="330+" label="Facilities" showArrow />
</div>
```

### Service Grid
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <ServiceCard
    title="Carbon intelligence"
    description="Track and reduce footprint"
    image="/carbon.jpg"
    onActionClick={() => {}}
  />
  <ServiceCard
    title="Energy optimization"
    description="Real-time monitoring"
    image="/energy.jpg"
    onActionClick={() => {}}
  />
</div>
```

### With Framer Motion
```tsx
import { motion } from 'framer-motion';
import { Button } from '@1nd1g0labs/lighthouse-hlth-ui';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
>
  <Button variant="primary">Animated</Button>
</motion.div>
```

## Troubleshooting

**Styles not showing?**
Import in root: `import '@1nd1g0labs/lighthouse-hlth-ui/dist/styles.css'`

**TypeScript errors?**
Update package: `npm install @1nd1g0labs/lighthouse-hlth-ui@latest`

**Tailwind v4 conflicts?**
Styles are pre-compiled, no conflicts. Just import the CSS.

## Design Tokens

```tsx
import { colors, spacing, typography } from '@1nd1g0labs/lighthouse-hlth-ui/tokens';

// Access brand values programmatically
colors.primary[500]      // #1A8B8B
spacing[4]               // 1rem (16px)
typography.fonts.sans    // 'Inter', system fonts
```

## Project Structure

```
src/
├── components/          # UI components
│   ├── Button/
│   ├── Card/
│   └── ...
├── tokens/             # Design tokens (colors, spacing, typography)
├── utils/              # Helper functions
├── framer/             # Framer Motion exports
├── styles.css          # Tailwind base + animations
└── index.ts            # Main entry point
```

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for component template and PR process.

## Publishing (for Maintainers)

This package is published to GitHub Package Registry. See [PUBLISHING.md](./PUBLISHING.md) for:
- One-time authentication setup
- Complete publishing workflow
- Versioning guidelines (semantic versioning)
- Troubleshooting guide

**Quick publish workflow:**
```bash
npm run build:lib           # Build the library
npm version patch          # Bump version (patch/minor/major)
npm publish                # Publish to GitHub Packages
git push --tags            # Push version tags
```

## Mission Alignment

Built for healthcare sustainability:
- Carbon footprint tracking
- Energy efficiency metrics
- Waste reduction dashboards
- Financial sustainability reporting
- Compliance and regulatory tools

**"Be green, feel green. Less is more. Sustainable footprint, sustainable financial health."**

## License

MIT

---

**Built with care for sustainable healthcare operations**
