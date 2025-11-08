import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'aria-invalid'> {
  label?: string;
  helperText?: string;
  error?: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ className, label, helperText, error, id, ...props }, ref) => {
    const radioId = id || `radio-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <div className="relative">
            <input
              id={radioId}
              type="radio"
              ref={ref}
              className={cn(
                'peer h-5 w-5 shrink-0',
                'appearance-none rounded-full',
                'border-2 border-[#D1D5DB]',
                'bg-white',
                'transition-all duration-150',
                'checked:border-[6px] checked:border-[#0070E0]',
                'focus:outline-none focus:ring-2 focus:ring-[#0070E0]/20',
                'disabled:cursor-not-allowed disabled:opacity-50',
                error && 'border-[#EF4444]',
                className
              )}
              aria-invalid={error ? 'true' : 'false'}
              aria-describedby={
                error ? `${radioId}-error` : helperText ? `${radioId}-helper` : undefined
              }
              {...props}
            />
          </div>
        </div>

        {(label || helperText || error) && (
          <div className="ml-3 text-sm">
            {label && (
              <label
                htmlFor={radioId}
                className="font-medium text-[#374151] cursor-pointer select-none"
              >
                {label}
              </label>
            )}

            {helperText && !error && (
              <p id={`${radioId}-helper`} className="text-[#6B7280]">
                {helperText}
              </p>
            )}

            {error && (
              <p id={`${radioId}-error`} className="text-[#EF4444]">
                {error}
              </p>
            )}
          </div>
        )}
      </div>
    );
  }
);

Radio.displayName = 'Radio';

// RadioGroup component for managing multiple radios
export interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  error?: string;
  helperText?: string;
  orientation?: 'horizontal' | 'vertical';
}

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ className, label, error, helperText, orientation = 'vertical', children, ...props }, ref) => {
    const groupId = `radio-group-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div ref={ref} className="w-full" {...props}>
        {label && (
          <label className="block text-sm font-medium text-[#374151] mb-2">
            {label}
          </label>
        )}

        <div
          role="radiogroup"
          className={cn(
            'flex',
            orientation === 'horizontal' ? 'flex-row gap-6' : 'flex-col gap-3',
            className
          )}
        >
          {children}
        </div>

        {error && (
          <p id={`${groupId}-error`} className="mt-1.5 text-sm text-[#EF4444]">
            {error}
          </p>
        )}

        {helperText && !error && (
          <p id={`${groupId}-helper`} className="mt-1.5 text-sm text-[#6B7280]">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

RadioGroup.displayName = 'RadioGroup';
