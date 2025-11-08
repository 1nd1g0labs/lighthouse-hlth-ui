import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const buttonVariants = cva(
  // Base styles
  [
    'inline-flex items-center justify-center',
    'font-medium',
    'transition-all duration-150',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    'disabled:opacity-50 disabled:pointer-events-none',
    'select-none',
  ].join(' '),
  {
    variants: {
      variant: {
        // Primary - Main actions, healthcare trust blue
        primary: [
          'bg-[#0070E0] text-white',
          'hover:bg-[#005DB8]',
          'active:bg-[#004A90]',
          'focus:ring-[#0070E0]/20',
        ].join(' '),

        // Secondary - Sustainable green actions
        secondary: [
          'bg-[#4CAF50] text-white',
          'hover:bg-[#43A047]',
          'active:bg-[#388E3C]',
          'focus:ring-[#4CAF50]/20',
        ].join(' '),

        // Accent - Energy & innovation
        accent: [
          'bg-[#FF9800] text-white',
          'hover:bg-[#FB8C00]',
          'active:bg-[#F57C00]',
          'focus:ring-[#FF9800]/20',
        ].join(' '),

        // Outline - Subtle actions
        outline: [
          'border-2 border-[#0070E0] text-[#0070E0]',
          'hover:bg-[#0070E0]/5',
          'active:bg-[#0070E0]/10',
          'focus:ring-[#0070E0]/20',
        ].join(' '),

        // Ghost - Minimal visual weight
        ghost: [
          'text-[#374151]',
          'hover:bg-[#F3F4F6]',
          'active:bg-[#E5E7EB]',
          'focus:ring-[#6B7280]/20',
        ].join(' '),

        // Destructive - Error states
        destructive: [
          'bg-[#EF4444] text-white',
          'hover:bg-[#DC2626]',
          'active:bg-[#B91C1C]',
          'focus:ring-[#EF4444]/20',
        ].join(' '),
      },
      size: {
        sm: 'h-8 px-3 text-sm rounded-[0.375rem]',
        md: 'h-10 px-4 text-base rounded-[0.5rem]',
        lg: 'h-12 px-6 text-lg rounded-[0.5rem]',
        xl: 'h-14 px-8 text-xl rounded-[0.75rem]',
        icon: 'h-10 w-10 rounded-[0.5rem]',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      loading,
      disabled,
      leftIcon,
      rightIcon,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {!loading && leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {!loading && rightIcon && <span className="ml-2">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';
