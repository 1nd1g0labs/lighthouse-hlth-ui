import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const badgeVariants = cva(
  [
    'inline-flex items-center justify-center',
    'font-medium',
    'transition-colors duration-150',
    'select-none',
  ].join(' '),
  {
    variants: {
      variant: {
        default: 'bg-[#E5E7EB] text-[#374151]',
        primary: 'bg-[#0070E0] text-white',
        secondary: 'bg-[#4CAF50] text-white',
        accent: 'bg-[#FF9800] text-white',
        success: 'bg-[#10B981] text-white',
        warning: 'bg-[#F59E0B] text-[#111827]',
        error: 'bg-[#EF4444] text-white',
        info: 'bg-[#3B82F6] text-white',
        outline: 'border-2 border-[#E5E7EB] text-[#374151] bg-transparent',
        // Sustainability badges
        emissionsHigh: 'bg-[#DC2626] text-white',
        emissionsMedium: 'bg-[#F59E0B] text-white',
        emissionsLow: 'bg-[#10B981] text-white',
      },
      size: {
        sm: 'text-xs px-2 py-0.5 rounded-[0.25rem]',
        md: 'text-sm px-2.5 py-0.5 rounded-[0.375rem]',
        lg: 'text-base px-3 py-1 rounded-[0.5rem]',
      },
      pill: {
        true: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, size, pill, leftIcon, rightIcon, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(badgeVariants({ variant, size, pill, className }))}
        {...props}
      >
        {leftIcon && <span className="mr-1">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="ml-1">{rightIcon}</span>}
      </div>
    );
  }
);

Badge.displayName = 'Badge';
