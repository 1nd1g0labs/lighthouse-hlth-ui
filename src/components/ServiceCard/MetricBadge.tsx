import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { cn } from '../../utils/cn';

const metricBadgeVariants = cva(
  [
    'inline-flex items-center gap-2',
    'px-3 py-1.5',
    'rounded-lg',
    'text-sm font-semibold',
    'backdrop-blur-sm',
    'transition-all duration-200',
  ].join(' '),
  {
    variants: {
      trend: {
        up: 'bg-red-500/10 text-red-700 dark:text-red-400',
        down: 'bg-secondary-500/10 text-secondary-700 dark:text-secondary-400',
        neutral: 'bg-gray-500/10 text-gray-700 dark:text-gray-400',
      },
      size: {
        sm: 'text-xs px-2 py-1',
        md: 'text-sm px-3 py-1.5',
        lg: 'text-base px-4 py-2',
      },
    },
    defaultVariants: {
      trend: 'neutral',
      size: 'md',
    },
  }
);

export interface MetricBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof metricBadgeVariants> {
  /**
   * Label for the metric (e.g., "avg. reduction", "annual savings")
   */
  label: string;

  /**
   * The metric value to display (e.g., "23%", "$4.2M")
   */
  value: string;

  /**
   * Trend direction
   * - 'down': Shows green with down arrow (good for reductions)
   * - 'up': Shows red with up arrow (bad for increases)
   * - 'neutral': Shows gray with minus icon
   * @default 'neutral'
   */
  trend?: 'up' | 'down' | 'neutral';

  /**
   * Whether to show the trend icon
   * @default true
   */
  showIcon?: boolean;

  /**
   * Size variant
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
}

/**
 * MetricBadge Component
 *
 * Displays a metric value with an optional trend indicator.
 * Commonly used in cards and dashboards to show outcome metrics.
 *
 * Color coding:
 * - Green (down): Represents improvement/reduction (lower emissions, costs)
 * - Red (up): Represents worsening/increase (higher emissions, costs)
 * - Gray (neutral): Represents stable metrics
 *
 * @example
 * ```tsx
 * <MetricBadge
 *   label="avg. reduction"
 *   value="23%"
 *   trend="down"
 * />
 * ```
 */
export const MetricBadge = React.forwardRef<HTMLDivElement, MetricBadgeProps>(
  (
    {
      label,
      value,
      trend = 'neutral',
      showIcon = true,
      size = 'md',
      className,
      ...props
    },
    ref
  ) => {
    const TrendIcon =
      trend === 'up'
        ? TrendingUp
        : trend === 'down'
        ? TrendingDown
        : Minus;

    const iconSize = size === 'sm' ? 14 : size === 'lg' ? 20 : 16;

    return (
      <div
        ref={ref}
        className={cn(metricBadgeVariants({ trend, size }), className)}
        role="status"
        aria-label={`${label}: ${value}, trend ${trend}`}
        {...props}
      >
        {showIcon && (
          <TrendIcon
            size={iconSize}
            className="flex-shrink-0"
            aria-hidden="true"
          />
        )}
        <div className="flex flex-col leading-tight">
          <span className="font-bold">{value}</span>
          <span className="text-xs opacity-80 font-normal">{label}</span>
        </div>
      </div>
    );
  }
);

MetricBadge.displayName = 'MetricBadge';
