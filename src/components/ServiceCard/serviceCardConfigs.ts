import {
  BarChart3,
  Zap,
  Package,
  Activity,
  Droplets,
  FileCheck,
} from 'lucide-react';
import type { ServiceCardProps } from './ServiceCard';
import type { PatternType } from './patterns';

/**
 * Service Card Configuration
 *
 * Pre-configured settings for all 6 Lighthouse HLTH services.
 * These configurations ensure visual consistency and appropriate
 * data visualization for each service type.
 */

export interface ServiceConfig
  extends Omit<ServiceCardProps, 'onClick' | 'className'> {
  /**
   * Unique identifier for the service
   */
  id: string;
}

/**
 * Carbon Intelligence Service Configuration
 *
 * Real-time emissions tracking and carbon reduction strategies.
 * Focus: Environmental impact, CO2e metrics, molecular patterns.
 */
export const carbonIntelligenceConfig: ServiceConfig = {
  id: 'carbon-intelligence',
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
  sparklineData: [100, 95, 88, 85, 80, 77, 72, 68],
  gradientFrom: 'from-primary-500/10',
  gradientTo: 'to-secondary-500/5',
  patternType: 'molecules' as PatternType,
  patternColor: '#1A8B8B',
  accentColor: '#1A8B8B',
};

/**
 * Energy & Facilities Optimization Service Configuration
 *
 * Building automation, HVAC optimization, and energy efficiency.
 * Focus: Real-time monitoring, system efficiency, circuit patterns.
 */
export const energyOptimizationConfig: ServiceConfig = {
  id: 'energy-optimization',
  variant: 'energy',
  title: 'Energy & Facilities Optimization',
  description:
    'Intelligent building automation and HVAC optimization for maximum efficiency',
  icon: Zap,
  metric: {
    label: 'cost savings',
    value: '$4.2M',
    trend: 'down',
  },
  sparklineData: [120, 115, 108, 100, 95, 88, 82, 75],
  gradientFrom: 'from-accent-500/10',
  gradientTo: 'to-accent-300/5',
  patternType: 'circuit' as PatternType,
  patternColor: '#FF8B4B',
  accentColor: '#FF8B4B',
};

/**
 * Sustainable Supply Chain Service Configuration
 *
 * Procurement optimization, vendor management, circular economy.
 * Focus: Network connections, supply flow, hexagon patterns.
 */
export const supplyChainConfig: ServiceConfig = {
  id: 'supply-chain',
  variant: 'supply',
  title: 'Sustainable Supply Chain',
  description:
    'Optimize procurement and vendor management with sustainability-focused analytics',
  icon: Package,
  metric: {
    label: 'waste reduction',
    value: '31%',
    trend: 'down',
  },
  sparklineData: [100, 98, 92, 85, 80, 75, 72, 69],
  gradientFrom: 'from-secondary-500/10',
  gradientTo: 'to-secondary-300/5',
  patternType: 'hexagon' as PatternType,
  patternColor: '#4CAF50',
  accentColor: '#4CAF50',
};

/**
 * Clinical Decarbonization Service Configuration
 *
 * Emission reduction across clinical operations.
 * Focus: Clinical workflows, care quality metrics, grid patterns.
 */
export const clinicalDecarbonizationConfig: ServiceConfig = {
  id: 'clinical-decarbonization',
  variant: 'clinical',
  title: 'Clinical Decarbonization',
  description:
    'Reduce emissions across clinical operations while maintaining exceptional care quality',
  icon: Activity,
  metric: {
    label: 'procedures optimized',
    value: '1,247',
    trend: 'neutral',
  },
  sparklineData: [100, 98, 96, 94, 92, 90, 88, 86],
  gradientFrom: 'from-primary-500/10',
  gradientTo: 'to-primary-300/5',
  patternType: 'grid' as PatternType,
  patternColor: '#1A8B8B',
  accentColor: '#1A8B8B',
};

/**
 * Waste & Water Management Service Configuration
 *
 * Comprehensive tracking and reduction strategies.
 * Focus: Resource flow, conservation, wave patterns.
 */
export const wasteWaterConfig: ServiceConfig = {
  id: 'waste-water',
  variant: 'waste',
  title: 'Waste & Water Management',
  description:
    'Comprehensive tracking and reduction strategies for water and waste streams',
  icon: Droplets,
  metric: {
    label: 'diversion rate',
    value: '67%',
    trend: 'down',
  },
  sparklineData: [40, 45, 52, 58, 62, 65, 66, 67],
  gradientFrom: 'from-blue-500/10',
  gradientTo: 'to-blue-300/5',
  patternType: 'waves' as PatternType,
  patternColor: '#3B82F6',
  accentColor: '#3B82F6',
};

/**
 * Compliance & Reporting Service Configuration
 *
 * Automated regulatory reporting and documentation.
 * Focus: Structured data, documentation, dot grid patterns.
 */
export const complianceReportingConfig: ServiceConfig = {
  id: 'compliance-reporting',
  variant: 'compliance',
  title: 'Compliance & Reporting',
  description:
    'Automated regulatory reporting and comprehensive sustainability documentation',
  icon: FileCheck,
  metric: {
    label: 'reports generated',
    value: '184',
    trend: 'neutral',
  },
  sparklineData: [50, 65, 82, 98, 120, 145, 165, 184],
  gradientFrom: 'from-gray-500/10',
  gradientTo: 'to-gray-300/5',
  patternType: 'dots' as PatternType,
  patternColor: '#6B7280',
  accentColor: '#6B7280',
};

/**
 * All service configurations in a single array
 *
 * Use this for rendering service grids or iterating over all services.
 *
 * @example
 * ```tsx
 * {allServiceConfigs.map((config) => (
 *   <ServiceCard key={config.id} {...config} onClick={() => handleClick(config.id)} />
 * ))}
 * ```
 */
export const allServiceConfigs: ServiceConfig[] = [
  carbonIntelligenceConfig,
  energyOptimizationConfig,
  supplyChainConfig,
  clinicalDecarbonizationConfig,
  wasteWaterConfig,
  complianceReportingConfig,
];

/**
 * Get service configuration by ID
 *
 * @param id - Service identifier
 * @returns Service configuration or undefined if not found
 *
 * @example
 * ```tsx
 * const config = getServiceConfig('carbon-intelligence');
 * if (config) {
 *   return <ServiceCard {...config} onClick={handleClick} />;
 * }
 * ```
 */
export function getServiceConfig(id: string): ServiceConfig | undefined {
  return allServiceConfigs.find((config) => config.id === id);
}
