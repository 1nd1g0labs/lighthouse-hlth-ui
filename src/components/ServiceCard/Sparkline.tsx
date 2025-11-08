import React from 'react';
import { cn } from '../../utils/cn';

export interface SparklineProps extends React.HTMLAttributes<SVGElement> {
  /**
   * Array of numeric data points to visualize
   */
  data: number[];

  /**
   * Width of the sparkline in pixels
   * @default 120
   */
  width?: number;

  /**
   * Height of the sparkline in pixels
   * @default 40
   */
  height?: number;

  /**
   * Color of the sparkline
   * @default 'currentColor'
   */
  color?: string;

  /**
   * Stroke width of the line
   * @default 2
   */
  strokeWidth?: number;

  /**
   * Whether to show a gradient fill under the line
   * @default false
   */
  showFill?: boolean;

  /**
   * Whether to show a dot on the last data point
   * @default true
   */
  showDot?: boolean;
}

/**
 * Sparkline Component
 *
 * A minimal line chart for displaying trends in small spaces.
 * Commonly used in dashboard cards and metric displays.
 *
 * @example
 * ```tsx
 * <Sparkline
 *   data={[100, 95, 88, 85, 80, 77, 72, 68]}
 *   color="#1A8B8B"
 *   showFill
 * />
 * ```
 */
export const Sparkline = React.forwardRef<SVGSVGElement, SparklineProps>(
  (
    {
      data,
      width = 120,
      height = 40,
      color = 'currentColor',
      strokeWidth = 2,
      showFill = false,
      showDot = true,
      className,
      ...props
    },
    ref
  ) => {
    if (!data || data.length < 2) {
      return null;
    }

    // Calculate min and max values
    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min || 1; // Prevent division by zero

    // Add padding to the chart
    const padding = strokeWidth + 2;
    const chartHeight = height - padding * 2;
    const chartWidth = width - padding * 2;

    // Convert data points to coordinates
    const points = data.map((value, index) => {
      const x = padding + (index / (data.length - 1)) * chartWidth;
      const y = padding + chartHeight - ((value - min) / range) * chartHeight;
      return { x, y };
    });

    // Create polyline path
    const pathData = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x},${p.y}`).join(' ');

    // Create fill path (for gradient fill)
    const fillPathData = showFill
      ? `${pathData} L ${points[points.length - 1].x},${height} L ${padding},${height} Z`
      : '';

    // Last point for the dot
    const lastPoint = points[points.length - 1];

    return (
      <svg
        ref={ref}
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className={cn('overflow-visible', className)}
        role="img"
        aria-label={`Sparkline chart showing trend from ${data[0]} to ${data[data.length - 1]}`}
        {...props}
      >
        {/* Gradient fill (if enabled) */}
        {showFill && (
          <>
            <defs>
              <linearGradient id="sparkline-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor={color} stopOpacity={0.2} />
                <stop offset="100%" stopColor={color} stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <path
              d={fillPathData}
              fill="url(#sparkline-gradient)"
              strokeWidth={0}
            />
          </>
        )}

        {/* Line path */}
        <path
          d={pathData}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-all duration-300"
        />

        {/* End point dot */}
        {showDot && (
          <circle
            cx={lastPoint.x}
            cy={lastPoint.y}
            r={strokeWidth + 1}
            fill={color}
            className="transition-all duration-300"
          />
        )}
      </svg>
    );
  }
);

Sparkline.displayName = 'Sparkline';
