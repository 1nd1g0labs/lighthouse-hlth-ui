import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const textareaVariants = cva(
  [
    'flex w-full rounded-[0.5rem]',
    'border border-[#D1D5DB]',
    'bg-white px-3 py-3',
    'text-base text-[#111827]',
    'placeholder:text-[#9CA3AF]',
    'min-h-[120px]',
    'transition-colors duration-150',
    'focus:outline-none focus:ring-2 focus:ring-[#0070E0]/20 focus:border-[#0070E0]',
    'disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[#F3F4F6]',
    'resize-y',
  ].join(' '),
  {
    variants: {
      variant: {
        default: '',
        error: [
          'border-[#EF4444]',
          'focus:ring-[#EF4444]/20 focus:border-[#EF4444]',
        ].join(' '),
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface TextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'aria-invalid'>,
    VariantProps<typeof textareaVariants> {
  error?: string;
  helperText?: string;
  label?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, error, helperText, label, id, ...props }, ref) => {
    const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;
    const hasError = error || variant === 'error';

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-[#374151] mb-1.5"
          >
            {label}
          </label>
        )}

        <textarea
          id={textareaId}
          className={cn(
            textareaVariants({
              variant: hasError ? 'error' : variant,
              className,
            })
          )}
          ref={ref}
          aria-invalid={hasError ? 'true' : 'false'}
          aria-describedby={
            error
              ? `${textareaId}-error`
              : helperText
              ? `${textareaId}-helper`
              : undefined
          }
          {...props}
        />

        {error && (
          <p id={`${textareaId}-error`} className="mt-1.5 text-sm text-[#EF4444]">
            {error}
          </p>
        )}

        {helperText && !error && (
          <p id={`${textareaId}-helper`} className="mt-1.5 text-sm text-[#6B7280]">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
