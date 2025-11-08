# 🏥 Lighthouse Health Design System

A comprehensive branded design language system and UI component library for healthcare sustainability applications. Built for React.js (Next.js) and Framer, embodying the ethos of environmental consciousness and operational excellence in healthcare.

## 🌱 Brand Philosophy

### Core Values

- **"Be green, feel green"** - Environmental consciousness through sustainable design
- **"Less is more"** - Minimalist, purposeful, and accessible interfaces
- **"Sustainable footprint, sustainable financial health"** - Dual sustainability focus

### Design Principles

Inspired by forward-thinking healthcare sustainability leaders like [Providence Health](https://www.providence.org/about/advocacy-and-social-responsibility/environmental-stewardship/leadership), our design system emphasizes:

- **Trust & Safety** - Professional healthcare-grade UI with accessibility at its core
- **Clarity & Efficiency** - Clean, data-focused interfaces for complex metrics
- **Sustainability** - Green-first color palette reflecting environmental stewardship
- **Innovation** - Modern, forward-thinking design for healthcare technology

## 📦 Installation

```bash
npm install @lighthouse-hlth/ui
# or
yarn add @lighthouse-hlth/ui
# or
pnpm add @lighthouse-hlth/ui
```

## 🚀 Quick Start

### React / Next.js

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent } from '@lighthouse-hlth/ui';

function App() {
  return (
    <Card variant="sustainability">
      <CardHeader>
        <CardTitle>Carbon Emissions Dashboard</CardTitle>
      </CardHeader>
      <CardContent>
        <Button variant="primary">View Metrics</Button>
      </CardContent>
    </Card>
  );
}
```

### Framer

```tsx
import { Button, Card, framerAnimations } from '@lighthouse-hlth/ui/framer';
import { motion } from 'framer-motion';

export function Component() {
  return (
    <motion.div {...framerAnimations.fadeIn}>
      <Card hoverable>
        <Button variant="secondary">Get Started</Button>
      </Card>
    </motion.div>
  );
}
```

## 🎨 Design Tokens

### Color Palette

#### Primary - Healthcare Trust Blue
Professional blue conveying reliability and clinical trust.

```tsx
import { colors } from '@lighthouse-hlth/ui/tokens';

// colors.primary[500] = '#0070E0'
// colors.primary[600] = '#005DB8'
```

#### Secondary - Sustainable Growth Green
Represents environmental stewardship and sustainable practices.

```tsx
// colors.secondary[500] = '#4CAF50'
// colors.secondary[600] = '#43A047'
```

#### Sustainability-Specific Colors

```tsx
// Emissions tracking
colors.dataViz.emissions.high     // '#DC2626' - High emissions
colors.dataViz.emissions.medium   // '#F59E0B' - Medium emissions
colors.dataViz.emissions.low      // '#10B981' - Low emissions

// Sustainability ratings
colors.dataViz.sustainability.excellent  // '#047857'
colors.dataViz.sustainability.good       // '#10B981'
colors.dataViz.sustainability.fair       // '#F59E0B'
colors.dataViz.sustainability.poor       // '#DC2626'
```

### Typography

Clean, professional Inter font stack optimized for healthcare data display.

```tsx
import { typography } from '@lighthouse-hlth/ui/tokens';

// Font families
typography.fonts.sans     // Inter, system fonts
typography.fonts.mono     // JetBrains Mono for code/data

// Text styles
typography.textStyles.heading.h1
typography.textStyles.body.base
typography.textStyles.label.base
```

### Spacing

4px-based spacing system for consistent, harmonious layouts.

```tsx
import { spacing, semanticSpacing } from '@lighthouse-hlth/ui/tokens';

spacing[4]                          // '1rem' (16px)
semanticSpacing.componentPadding.md // '1rem' (16px)
semanticSpacing.section.lg          // '6rem' (96px)
```

## 🧩 Components

### Layout Components

#### Container
Responsive container with max-width constraints.

```tsx
<Container maxWidth="xl" padding="md">
  {/* Content */}
</Container>
```

#### Stack (VStack / HStack)
Flexible layout component for spacing children.

```tsx
<VStack spacing={4} align="start">
  <div>Item 1</div>
  <div>Item 2</div>
</VStack>

<HStack spacing={6} justify="between">
  <div>Left</div>
  <div>Right</div>
</HStack>
```

#### Grid
CSS Grid layout with responsive columns.

```tsx
<Grid cols={3} gap={6}>
  <Card>Card 1</Card>
  <Card>Card 2</Card>
  <Card>Card 3</Card>
</Grid>
```

### Core Components

#### Button

```tsx
<Button variant="primary" size="md">
  Primary Action
</Button>

<Button variant="secondary" leftIcon={<Icon />}>
  With Icon
</Button>

<Button variant="outline" loading>
  Loading...
</Button>
```

**Variants:** `primary`, `secondary`, `accent`, `outline`, `ghost`, `destructive`
**Sizes:** `sm`, `md`, `lg`, `xl`, `icon`

#### Card

```tsx
<Card variant="sustainability" hoverable>
  <CardHeader>
    <CardTitle>Emissions Report</CardTitle>
    <CardDescription>Monthly carbon footprint analysis</CardDescription>
  </CardHeader>
  <CardContent>
    {/* Content */}
  </CardContent>
  <CardFooter>
    <Button>View Details</Button>
  </CardFooter>
</Card>
```

**Variants:** `default`, `elevated`, `outline`, `ghost`, `sustainability`

#### Badge

```tsx
<Badge variant="emissionsLow" pill>
  23% Reduction
</Badge>

<Badge variant="secondary" size="sm">
  Active
</Badge>
```

**Variants:** `default`, `primary`, `secondary`, `success`, `warning`, `error`, `emissionsLow`, `emissionsMedium`, `emissionsHigh`

### Form Components

#### Input

```tsx
<Input
  label="Facility Name"
  placeholder="Enter name"
  helperText="Your healthcare facility name"
  leftIcon={<SearchIcon />}
/>

<Input
  label="Email"
  type="email"
  error="Invalid email address"
/>
```

#### Select

```tsx
<Select
  label="Facility Type"
  options={[
    { value: 'hospital', label: 'Hospital' },
    { value: 'clinic', label: 'Clinic' },
  ]}
/>
```

#### Checkbox & Radio

```tsx
<Checkbox label="I agree to terms" />

<RadioGroup label="Emission Level" orientation="vertical">
  <Radio value="low" label="Low" />
  <Radio value="medium" label="Medium" />
  <Radio value="high" label="High" />
</RadioGroup>
```

#### Textarea

```tsx
<Textarea
  label="Notes"
  rows={4}
  placeholder="Enter your notes..."
/>
```

### Feedback Components

#### Alert

```tsx
<Alert variant="success" title="Great Progress!">
  Your facility has reduced emissions by 23% this quarter.
</Alert>

<Alert variant="sustainability" onClose={() => {}}>
  Sustainable practices detected. Keep up the great work!
</Alert>
```

**Variants:** `info`, `success`, `warning`, `error`, `sustainability`

#### Progress

```tsx
<Progress
  value={77}
  max={100}
  variant="emissionsLow"
  showLabel
  label="Carbon Reduction Target"
/>
```

#### Modal

```tsx
const [open, setOpen] = useState(false);

<Modal open={open} onClose={() => setOpen(false)} size="md">
  <ModalHeader>
    <ModalTitle>Confirm Action</ModalTitle>
    <ModalDescription>Are you sure you want to proceed?</ModalDescription>
  </ModalHeader>
  <ModalContent>
    {/* Content */}
  </ModalContent>
  <ModalFooter>
    <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
    <Button variant="primary">Confirm</Button>
  </ModalFooter>
</Modal>
```

#### Tooltip

```tsx
<Tooltip content="Carbon emissions tracking" side="top">
  <Button variant="ghost">Hover me</Button>
</Tooltip>
```

### Navigation Components

#### Tabs

```tsx
<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="emissions">Emissions</TabsTrigger>
    <TabsTrigger value="energy">Energy</TabsTrigger>
  </TabsList>

  <TabsContent value="overview">
    Overview content
  </TabsContent>
  <TabsContent value="emissions">
    Emissions content
  </TabsContent>
</Tabs>
```

## 🎭 Framer Integration

The design system includes full Framer Motion support and Framer-specific utilities.

### Framer Animations

```tsx
import { framerAnimations } from '@lighthouse-hlth/ui/framer';
import { motion } from 'framer-motion';

<motion.div {...framerAnimations.fadeIn}>
  <Card>Animated Card</Card>
</motion.div>

<motion.div {...framerAnimations.slideInBottom}>
  <Button>Animated Button</Button>
</motion.div>
```

### Framer Code Components

All components work as Framer Code Components. See `examples/framer-usage.tsx` for detailed examples.

```tsx
// In Framer, import as Code Component
import { FramerCodeComponent } from './path/to/framer-usage';

// Use with Framer property controls
<FramerCodeComponent
  title="Carbon Emissions"
  value="85%"
  trend="+12%"
  variant="primary"
/>
```

## 🎯 Use Cases

### Healthcare Sustainability Dashboards

Perfect for building comprehensive sustainability tracking interfaces:

- Carbon footprint monitoring
- Energy efficiency metrics
- Waste reduction tracking
- Compliance reporting
- Financial sustainability analysis

### Carbon Accounting Platforms

Ideal for emissions tracking and reporting applications:

- Facility-level emissions tracking
- Supply chain carbon footprint
- Scope 1, 2, 3 emissions reporting
- Sustainability goal progress
- Comparative benchmarking

### Hospital Operations Software

Built for healthcare operational efficiency:

- Resource utilization tracking
- Cost savings dashboards
- Operational KPIs
- Environmental compliance
- Regulatory reporting

## 📚 Examples

Check the `/examples` directory for comprehensive usage examples:

- `examples/basic-usage.tsx` - Common patterns and layouts
- `examples/framer-usage.tsx` - Framer-specific implementations

## 🛠️ Development

```bash
# Install dependencies
npm install

# Run development mode
npm run dev

# Build library
npm run build

# Run Storybook
npm run storybook

# Type check
npm run type-check

# Lint
npm run lint

# Format code
npm run format
```

## 🏗️ Project Structure

```
lighthouse-hlth-ui/
├── src/
│   ├── tokens/           # Design tokens (colors, typography, etc.)
│   ├── components/       # UI components
│   ├── utils/           # Utility functions
│   ├── framer/          # Framer-specific exports
│   └── index.ts         # Main entry point
├── examples/            # Usage examples
├── .storybook/         # Storybook configuration
└── dist/               # Built library (generated)
```

## 🌍 Sustainability Focus

This design system is specifically crafted for healthcare sustainability applications, with:

- **Emissions tracking components** - Specialized badges, progress bars, and data viz
- **Sustainability-first color palette** - Greens and blues representing environmental health
- **Data-focused design** - Clear presentation of complex sustainability metrics
- **Accessibility** - WCAG 2.1 AA compliant for healthcare contexts

## 🤝 Contributing

This is a branded design system for Lighthouse Health applications. For feature requests or bug reports, please contact the maintainers.

## 📄 License

MIT

## 🔗 Resources

- [Providence Health Environmental Stewardship](https://www.providence.org/about/advocacy-and-social-responsibility/environmental-stewardship/leadership)
- [Healthcare Sustainability Best Practices](https://lighthousehlth.com)

---

**Built with care for sustainable healthcare operations** 🏥💚

*"Be green, feel green. Less is more. Sustainable footprint, sustainable financial health."*
