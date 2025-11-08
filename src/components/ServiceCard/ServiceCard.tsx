import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { ArrowRight, type LucideIcon } from 'lucide-react';
import { cn } from '../../utils/cn';
import { MetricBadge } from './MetricBadge';
import { Sparkline } from './Sparkline';
import { getPattern, type PatternType } from './patterns';

const serviceCardVariants = cva(
  [
    'group relative',
    'rounded-2xl overflow-hidden',
    'bg-white',
    'border border-gray-200',
    'transition-all duration-300',
    'hover:shadow-xl hover:border-primary-300',
    'cursor-pointer',
  ].join(' '),
  {
    variants: {
      variant: {
        carbon: 'hover:shadow-primary-500/20',
        energy: 'hover:shadow-accent-500/20',
        supply: 'hover:shadow-secondary-500/20',
        clinical: 'hover:shadow-primary-500/20',
        waste: 'hover:shadow-blue-500/20',
        compliance: 'hover:shadow-gray-500/20',
      },
      size: {
        sm: 'h-64',
        md: 'h-80',
        lg: 'h-96',
      },
    },
    defaultVariants: {
      variant: 'carbon',
      size: 'md',
    },
  }
);

export interface MetricData {
  /**
   * Label for the metric (e.g., "avg. reduction")
   */
  label: string;

  /**
   * The metric value (e.g., "23%")
   */
  value: string;

  /**
   * Trend direction
   */
  trend?: 'up' | 'down' | 'neutral';
}

export interface ServiceCardProps
  extends Omit<
      React.HTMLAttributes<HTMLDivElement>,
      | 'onClick'
      | 'onDrag'
      | 'onDragStart'
      | 'onDragEnd'
      | 'onAnimationStart'
      | 'onAnimationEnd'
      | 'onAnimationIteration'
    >,
    VariantProps<typeof serviceCardVariants> {
  /**
   * Service title (e.g., "Carbon Intelligence")
   */
  title: string;

  /**
   * Brief service description
   */
  description: string;

  /**
   * Lucide icon component
   */
  icon: LucideIcon;

  /**
   * Primary metric to display
   */
  metric?: MetricData;

  /**
   * Optional sparkline data array
   */
  sparklineData?: number[];

  /**
   * Tailwind gradient start class (e.g., "from-primary-500/10")
   */
  gradientFrom: string;

  /**
   * Tailwind gradient end class (e.g., "to-secondary-500/5")
   */
  gradientTo: string;

  /**
   * Background pattern type
   */
  patternType?: PatternType;

  /**
   * Pattern color (hex)
   * @default Based on variant
   */
  patternColor?: string;

  /**
   * Accent color for sparkline (hex)
   * @default Based on variant
   */
  accentColor?: string;

  /**
   * Click handler
   */
  onClick?: () => void;

  /**
   * Show arrow icon
   * @default true
   */
  showArrow?: boolean;

  /**
   * Disable hover animations (for reduced motion)
   * @default false
   */
  disableAnimation?: boolean;
}

/**
 * ServiceCard Component - Data-Driven Design
 *
 * A modern, analytics-focused service card that replaces photographic
 * imagery with data visualizations, metrics, and abstract patterns.
 * Designed for enterprise healthcare sustainability dashboards.
 *
 * **Key Features:**
 * - Data-first approach with sparklines and metric badges
 * - Abstract SVG patterns instead of stock photography
 * - Service-specific gradient backgrounds
 * - Accessible with keyboard navigation and ARIA labels
 * - Responsive and mobile-friendly
 * - Respects prefers-reduced-motion
 *
 * @example
 * ```tsx
 * <ServiceCard
 *   variant="carbon"
 *   title="Carbon Intelligence"
 *   description="Real-time emissions tracking and reduction strategies"
 *   icon={BarChart3}
 *   metric={{
 *     label: "avg. reduction",
 *     value: "23%",
 *     trend: "down"
 *   }}
 *   sparklineData={[100, 95, 88, 85, 80, 77, 72, 68]}
 *   gradientFrom="from-primary-500/10"
 *   gradientTo="to-secondary-500/5"
 *   patternType="molecules"
 *   onClick={() => navigate('/carbon')}
 * />
 * ```
 */
export const ServiceCard = forwardRef<HTMLDivElement, ServiceCardProps>(
  (
    {
      className,
      variant = 'carbon',
      size = 'md',
      title,
      description,
      icon: Icon,
      metric,
      sparklineData,
      gradientFrom,
      gradientTo,
      patternType = 'dots',
      patternColor,
      accentColor,
      onClick,
      showArrow = true,
      disableAnimation = false,
      ...props
    },
    ref
  ) => {
    // Default colors based on variant
    const defaultColors = {
      carbon: { pattern: '#1A8B8B', accent: '#1A8B8B' },
      energy: { pattern: '#FF8B4B', accent: '#FF8B4B' },
      supply: { pattern: '#4CAF50', accent: '#4CAF50' },
      clinical: { pattern: '#1A8B8B', accent: '#1A8B8B' },
      waste: { pattern: '#3B82F6', accent: '#3B82F6' },
      compliance: { pattern: '#6B7280', accent: '#6B7280' },
    };

    const colors = defaultColors[variant || 'carbon'];
    const finalPatternColor = patternColor || colors.pattern;
    const finalAccentColor = accentColor || colors.accent;

    // Generate background pattern
    const patternUrl = getPattern(patternType, {
      color: finalPatternColor,
      opacity: 0.1,
    });

    // Handle keyboard interaction
    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if ((e.key === 'Enter' || e.key === ' ') && onClick) {
        e.preventDefault();
        onClick();
      }
    };

    const cardContent = (
      <>
        {/* Background gradient with pattern */}
        <div
          className={cn(
            'absolute inset-0',
            'bg-gradient-to-br',
            gradientFrom,
            gradientTo
          )}
          style={{
            backgroundImage: `url("${patternUrl}")`,
            backgroundSize: patternType === 'waves' ? '100px 20px' : 'auto',
            backgroundRepeat: 'repeat',
          }}
        />

        {/* Content Container */}
        <div className="relative h-full flex flex-col p-6">
          {/* Header Section */}
          <div className="flex items-start justify-between mb-4">
            {/* Icon */}
            <div
              className={cn(
                'p-3 rounded-xl',
                'bg-white shadow-sm',
                'text-primary-600',
                'transition-transform duration-300 group-hover:scale-110'
              )}
            >
              <Icon size={24} strokeWidth={2} aria-hidden="true" />
            </div>

            {/* Arrow Icon */}
            {showArrow && (
              <div
                className={cn(
                  'p-2 rounded-lg',
                  'bg-white/60 backdrop-blur-sm',
                  'text-gray-600',
                  'transition-all duration-300',
                  'group-hover:bg-primary-500 group-hover:text-white',
                  'group-hover:translate-x-1'
                )}
                aria-hidden="true"
              >
                <ArrowRight size={20} strokeWidth={2} />
              </div>
            )}
          </div>

          {/* Title & Description */}
          <div className="flex-1 flex flex-col justify-center mb-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">
              {title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
              {description}
            </p>
          </div>

          {/* Data Visualization Section */}
          <div className="space-y-3">
            {/* Metric Badge */}
            {metric && (
              <MetricBadge
                label={metric.label}
                value={metric.value}
                trend={metric.trend}
              />
            )}

            {/* Sparkline */}
            {sparklineData && sparklineData.length >= 2 && (
              <div className="flex items-center gap-2 px-3 py-2 bg-white/60 backdrop-blur-sm rounded-lg">
                <Sparkline
                  data={sparklineData}
                  width={120}
                  height={40}
                  color={finalAccentColor}
                  strokeWidth={2}
                  showFill
                  showDot
                />
                <div className="text-xs text-gray-600 font-medium">
                  Trend
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Focus indicator for keyboard navigation */}
        <div
          className={cn(
            'absolute inset-0 rounded-2xl',
            'ring-2 ring-primary-500 ring-offset-2',
            'opacity-0 focus-within:opacity-100',
            'pointer-events-none',
            'transition-opacity duration-200'
          )}
          aria-hidden="true"
        />
      </>
    );

    if (disableAnimation) {
      return (
        <div
          ref={ref}
          className={cn(serviceCardVariants({ variant, size }), className)}
          onClick={onClick}
          onKeyDown={handleKeyDown}
          role="button"
          tabIndex={0}
          aria-label={`${title}: ${description}`}
          {...props}
        >
          {cardContent}
        </div>
      );
    }

    return (
      <motion.div
        ref={ref}
        className={cn(serviceCardVariants({ variant, size }), className)}
        onClick={onClick}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-label={`${title}: ${description}`}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        {...props}
      >
        {cardContent}
      </motion.div>
    );
  }
);

ServiceCard.displayName = 'ServiceCard';
