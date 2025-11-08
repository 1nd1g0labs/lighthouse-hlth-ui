import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const inputVariants = cva(
  [
    'flex w-full rounded-[0.5rem]',
    'border border-[#D1D5DB]',
    'bg-white px-3 py-2',
    'text-base text-[#111827]',
    'placeholder:text-[#9CA3AF]',
    'transition-colors duration-150',
    'focus:outline-none focus:ring-2 focus:ring-[#0070E0]/20 focus:border-[#0070E0]',
    'disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[#F3F4F6]',
    'file:border-0 file:bg-transparent file:text-sm file:font-medium',
  ].join(' '),
  {
    variants: {
      variant: {
        default: '',
        error: [
          'border-[#EF4444]',
          'focus:ring-[#EF4444]/20 focus:border-[#EF4444]',
        ].join(' '),
        success: [
          'border-[#10B981]',
          'focus:ring-[#10B981]/20 focus:border-[#10B981]',
        ].join(' '),
      },
      inputSize: {
        sm: 'h-8 text-sm px-2',
        md: 'h-10 text-base px-3',
        lg: 'h-12 text-lg px-4',
      },
    },
    defaultVariants: {
      variant: 'default',
      inputSize: 'md',
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  error?: string;
  helperText?: string;
  label?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      variant,
      inputSize,
      type = 'text',
      leftIcon,
      rightIcon,
      error,
      helperText,
      label,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    const hasError = error || variant === 'error';

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-[#374151] mb-1.5"
          >
            {label}
          </label>
        )}

        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7280]">
              {leftIcon}
            </div>
          )}

          <input
            id={inputId}
            type={type}
            className={cn(
              inputVariants({
                variant: hasError ? 'error' : variant,
                inputSize,
                className
              }),
              leftIcon && 'pl-10',
              rightIcon && 'pr-10'
            )}
            ref={ref}
            aria-invalid={hasError}
            aria-describedby={
              error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined
            }
            {...props}
          />

          {rightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7280]">
              {rightIcon}
            </div>
          )}
        </div>

        {error && (
          <p id={`${inputId}-error`} className="mt-1.5 text-sm text-[#EF4444]">
            {error}
          </p>
        )}

        {helperText && !error && (
          <p id={`${inputId}-helper`} className="mt-1.5 text-sm text-[#6B7280]">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
