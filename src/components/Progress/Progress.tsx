import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const progressVariants = cva(
  'relative h-2 w-full overflow-hidden rounded-full bg-[#E5E7EB]',
  {
    variants: {
      size: {
        sm: 'h-1',
        md: 'h-2',
        lg: 'h-3',
        xl: 'h-4',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

const progressBarVariants = cva(
  'h-full transition-all duration-500 ease-out',
  {
    variants: {
      variant: {
        primary: 'bg-[#0070E0]',
        secondary: 'bg-[#4CAF50]',
        accent: 'bg-[#FF9800]',
        success: 'bg-[#10B981]',
        warning: 'bg-[#F59E0B]',
        error: 'bg-[#EF4444]',
        // Sustainability variants based on emission levels
        emissionsLow: 'bg-[#10B981]',
        emissionsMedium: 'bg-[#F59E0B]',
        emissionsHigh: 'bg-[#DC2626]',
        sustainability: 'bg-gradient-to-r from-[#0070E0] to-[#4CAF50]',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

export interface ProgressProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof progressVariants> {
  value?: number;
  max?: number;
  variant?: VariantProps<typeof progressBarVariants>['variant'];
  showLabel?: boolean;
  label?: string;
}

export const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  (
    {
      className,
      size,
      value = 0,
      max = 100,
      variant = 'primary',
      showLabel = false,
      label,
      ...props
    },
    ref
  ) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

    return (
      <div className="w-full">
        {(showLabel || label) && (
          <div className="flex justify-between mb-1.5">
            <span className="text-sm font-medium text-[#374151]">
              {label || 'Progress'}
            </span>
            <span className="text-sm font-medium text-[#6B7280]">
              {Math.round(percentage)}%
            </span>
          </div>
        )}

        <div
          ref={ref}
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={max}
          aria-valuenow={value}
          className={cn(progressVariants({ size, className }))}
          {...props}
        >
          <div
            className={cn(progressBarVariants({ variant }))}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    );
  }
);

Progress.displayName = 'Progress';
