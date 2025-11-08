import type { Meta, StoryObj } from '@storybook/react';
import { ServiceCard } from './ServiceCard';
import {
  allServiceConfigs,
  carbonIntelligenceConfig,
  energyOptimizationConfig,
  supplyChainConfig,
  clinicalDecarbonizationConfig,
  wasteWaterConfig,
  complianceReportingConfig,
} from './serviceCardConfigs';
import { BarChart3 } from 'lucide-react';

const meta: Meta<typeof ServiceCard> = {
  title: 'Data Display/ServiceCard',
  component: ServiceCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# ServiceCard - Data-Driven Design

A modern, analytics-focused service card that replaces photographic imagery with data visualizations, metrics, and abstract patterns. Designed for enterprise healthcare sustainability dashboards.

## Key Features

- **Data-first approach**: Sparklines and metric badges show real impact
- **Abstract patterns**: SVG-generated backgrounds (molecules, circuits, waves, etc.)
- **Service-specific gradients**: Color-coded for quick identification
- **Accessible**: WCAG 2.1 AA compliant with keyboard navigation
- **Responsive**: Mobile-friendly and adapts to container width
- **Performance**: Respects \`prefers-reduced-motion\`

## Design Philosophy

The ServiceCard represents a paradigm shift from aspirational photography to measurable impact:

- **Before**: Stock photos of hospitals, nature, solar panels
- **After**: Actual metrics, trend data, and professional abstract patterns

This approach signals "serious analytics platform" rather than "marketing website," which aligns with our enterprise healthcare positioning.

## Usage

Use pre-configured service objects from \`serviceCardConfigs\` for consistency across the application.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['carbon', 'energy', 'supply', 'clinical', 'waste', 'compliance'],
      description: 'Service variant affects colors and hover effects',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Card height',
    },
    patternType: {
      control: 'select',
      options: ['dots', 'grid', 'waves', 'molecules', 'circuit', 'hexagon'],
      description: 'Background pattern type',
    },
    showArrow: {
      control: 'boolean',
      description: 'Show arrow icon in top-right corner',
    },
    disableAnimation: {
      control: 'boolean',
      description: 'Disable hover animations (respects prefers-reduced-motion)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ServiceCard>;

/**
 * Default story showing a complete ServiceCard with all features
 */
export const Default: Story = {
  args: {
    ...carbonIntelligenceConfig,
    onClick: () => console.log('Card clicked'),
  },
};

/**
 * Carbon Intelligence Service
 *
 * Real-time emissions tracking and carbon reduction strategies.
 * Features molecular pattern representing CO2 molecules.
 */
export const CarbonIntelligence: Story = {
  args: {
    ...carbonIntelligenceConfig,
    onClick: () => console.log('Carbon Intelligence clicked'),
  },
};

/**
 * Energy & Facilities Optimization Service
 *
 * Building automation and HVAC optimization.
 * Features circuit pattern representing electrical systems.
 */
export const EnergyOptimization: Story = {
  args: {
    ...energyOptimizationConfig,
    onClick: () => console.log('Energy Optimization clicked'),
  },
};

/**
 * Sustainable Supply Chain Service
 *
 * Procurement and vendor management optimization.
 * Features hexagon pattern representing interconnected networks.
 */
export const SustainableSupplyChain: Story = {
  args: {
    ...supplyChainConfig,
    onClick: () => console.log('Supply Chain clicked'),
  },
};

/**
 * Clinical Decarbonization Service
 *
 * Emission reduction across clinical operations.
 * Features grid pattern representing structured clinical workflows.
 */
export const ClinicalDecarbonization: Story = {
  args: {
    ...clinicalDecarbonizationConfig,
    onClick: () => console.log('Clinical Decarbonization clicked'),
  },
};

/**
 * Waste & Water Management Service
 *
 * Comprehensive resource tracking and reduction.
 * Features wave pattern representing water flow.
 */
export const WasteWaterManagement: Story = {
  args: {
    ...wasteWaterConfig,
    onClick: () => console.log('Waste & Water clicked'),
  },
};

/**
 * Compliance & Reporting Service
 *
 * Automated regulatory reporting and documentation.
 * Features dot pattern representing structured data points.
 */
export const ComplianceReporting: Story = {
  args: {
    ...complianceReportingConfig,
    onClick: () => console.log('Compliance clicked'),
  },
};

/**
 * Without Metric Badge
 *
 * Service card can be displayed without the metric badge.
 * Useful when metric data is unavailable or not relevant.
 */
export const WithoutMetric: Story = {
  args: {
    variant: 'carbon',
    title: 'Carbon Intelligence',
    description:
      'Real-time emissions tracking and reduction strategies powered by advanced analytics',
    icon: BarChart3,
    sparklineData: [100, 95, 88, 85, 80, 77, 72, 68],
    gradientFrom: 'from-primary-500/10',
    gradientTo: 'to-secondary-500/5',
    patternType: 'molecules',
    onClick: () => console.log('Card clicked'),
  },
};

/**
 * Without Sparkline
 *
 * Service card can be displayed without sparkline data.
 * Useful when historical trend data is unavailable.
 */
export const WithoutSparkline: Story = {
  args: {
    variant: 'carbon',
    title: 'Carbon Intelligence',
    description:
      'Real-time emissions tracking and reduction strategies powered by advanced analytics',
    icon: BarChart3,
    metric: {
      label: 'avg. reduction',
      value: '23%',
      trend: 'down',
    },
    gradientFrom: 'from-primary-500/10',
    gradientTo: 'to-secondary-500/5',
    patternType: 'molecules',
    onClick: () => console.log('Card clicked'),
  },
};

/**
 * Minimal Configuration
 *
 * Service card with only required props.
 * Shows the minimum viable card configuration.
 */
export const Minimal: Story = {
  args: {
    title: 'Service Title',
    description: 'Brief description of the service offering',
    icon: BarChart3,
    gradientFrom: 'from-primary-500/10',
    gradientTo: 'to-secondary-500/5',
    onClick: () => console.log('Card clicked'),
  },
};

/**
 * Small Size Variant
 */
export const SmallSize: Story = {
  args: {
    ...carbonIntelligenceConfig,
    size: 'sm',
    onClick: () => console.log('Card clicked'),
  },
};

/**
 * Large Size Variant
 */
export const LargeSize: Story = {
  args: {
    ...carbonIntelligenceConfig,
    size: 'lg',
    onClick: () => console.log('Card clicked'),
  },
};

/**
 * Without Arrow Icon
 */
export const NoArrow: Story = {
  args: {
    ...carbonIntelligenceConfig,
    showArrow: false,
    onClick: () => console.log('Card clicked'),
  },
};

/**
 * Animations Disabled
 *
 * Useful for users who prefer reduced motion.
 * Application should detect prefers-reduced-motion and pass this prop.
 */
export const AnimationsDisabled: Story = {
  args: {
    ...carbonIntelligenceConfig,
    disableAnimation: true,
    onClick: () => console.log('Card clicked'),
  },
};

/**
 * Pattern Variations
 *
 * Demonstrates all available background patterns on the same service.
 * Each pattern has unique characteristics suited to different contexts.
 */
export const PatternShowcase: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8 max-w-7xl">
      {(['dots', 'grid', 'waves', 'molecules', 'circuit', 'hexagon'] as const).map((pattern) => (
        <ServiceCard
          key={pattern}
          variant="carbon"
          title={`${pattern.charAt(0).toUpperCase() + pattern.slice(1)} Pattern`}
          description="Same service with different background pattern"
          icon={BarChart3}
          metric={{
            label: 'avg. reduction',
            value: '23%',
            trend: 'down',
          }}
          sparklineData={[100, 95, 88, 85, 80, 77, 72, 68]}
          gradientFrom="from-primary-500/10"
          gradientTo="to-secondary-500/5"
          patternType={pattern}
          onClick={() => console.log(`${pattern} clicked`)}
        />
      ))}
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};

/**
 * Service Grid - Responsive Layout
 *
 * All 6 Lighthouse HLTH services in a responsive grid.
 * This is the recommended layout for homepage service sections.
 *
 * **Grid Behavior:**
 * - Mobile: 1 column
 * - Tablet: 2 columns
 * - Desktop: 3 columns
 */
export const ServiceGrid: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8 max-w-7xl mx-auto">
      {allServiceConfigs.map((config) => (
        <ServiceCard
          key={config.id}
          {...config}
          onClick={() => console.log(`${config.title} clicked`)}
        />
      ))}
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'gray' },
  },
};

/**
 * Service Grid - Two Column Layout
 *
 * Alternative layout with 2 columns for larger card display.
 * Better for pages with more space per service.
 */
export const ServiceGridTwoColumn: Story = {
  render: () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 max-w-6xl mx-auto">
      {allServiceConfigs.map((config) => (
        <ServiceCard
          key={config.id}
          {...config}
          size="lg"
          onClick={() => console.log(`${config.title} clicked`)}
        />
      ))}
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'gray' },
  },
};

/**
 * Interactive States Demo
 *
 * Demonstrates hover, focus, and active states.
 * Try using keyboard navigation (Tab to focus, Enter/Space to activate).
 */
export const InteractiveStates: Story = {
  render: () => (
    <div className="space-y-8 p-8 max-w-4xl">
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-900">
          Keyboard Navigation Instructions:
        </h3>
        <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
          <li>Press Tab to move between cards</li>
          <li>Press Enter or Space to activate focused card</li>
          <li>Notice the focus ring indicator (accessibility feature)</li>
        </ul>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ServiceCard
          {...carbonIntelligenceConfig}
          onClick={() => alert('Carbon Intelligence clicked!')}
        />
        <ServiceCard
          {...energyOptimizationConfig}
          onClick={() => alert('Energy Optimization clicked!')}
        />
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'gray' },
  },
};

/**
 * Accessibility Testing
 *
 * Demonstrates accessibility features:
 * - Proper ARIA labels
 * - Keyboard navigation
 * - Focus indicators
 * - Screen reader friendly content
 */
export const AccessibilityDemo: Story = {
  render: () => (
    <div className="space-y-8 p-8 max-w-4xl">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-2 text-blue-900">
          Accessibility Features
        </h3>
        <ul className="list-disc list-inside text-blue-800 space-y-2 text-sm">
          <li>
            <strong>Keyboard Navigation:</strong> Full Tab/Enter/Space support
          </li>
          <li>
            <strong>Focus Indicators:</strong> Visible 2px ring on focus
          </li>
          <li>
            <strong>ARIA Labels:</strong> Descriptive labels for screen readers
          </li>
          <li>
            <strong>Semantic HTML:</strong> Proper heading hierarchy and roles
          </li>
          <li>
            <strong>Color Contrast:</strong> WCAG 2.1 AA compliant (4.5:1 minimum)
          </li>
          <li>
            <strong>Motion Sensitivity:</strong> disableAnimation prop for reduced motion
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ServiceCard
          {...carbonIntelligenceConfig}
          onClick={() => console.log('Accessible card clicked')}
        />
        <ServiceCard
          {...energyOptimizationConfig}
          disableAnimation
          onClick={() => console.log('No animation card clicked')}
        />
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'gray' },
  },
};
