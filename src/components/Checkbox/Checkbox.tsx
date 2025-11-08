import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { Check } from 'lucide-react';

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'aria-invalid'> {
  label?: string;
  helperText?: string;
  error?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, helperText, error, id, ...props }, ref) => {
    const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <div className="relative">
            <input
              id={checkboxId}
              type="checkbox"
              ref={ref}
              className={cn(
                'peer h-5 w-5 shrink-0',
                'appearance-none rounded-[0.375rem]',
                'border-2 border-[#D1D5DB]',
                'bg-white',
                'transition-all duration-150',
                'checked:bg-[#0070E0] checked:border-[#0070E0]',
                'focus:outline-none focus:ring-2 focus:ring-[#0070E0]/20',
                'disabled:cursor-not-allowed disabled:opacity-50',
                error && 'border-[#EF4444]',
                className
              )}
              aria-invalid={error ? 'true' : 'false'}
              aria-describedby={
                error ? `${checkboxId}-error` : helperText ? `${checkboxId}-helper` : undefined
              }
              {...props}
            />
            <Check
              className="absolute top-0 left-0 h-5 w-5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none p-0.5"
              strokeWidth={3}
            />
          </div>
        </div>

        {(label || helperText || error) && (
          <div className="ml-3 text-sm">
            {label && (
              <label
                htmlFor={checkboxId}
                className="font-medium text-[#374151] cursor-pointer select-none"
              >
                {label}
              </label>
            )}

            {helperText && !error && (
              <p id={`${checkboxId}-helper`} className="text-[#6B7280]">
                {helperText}
              </p>
            )}

            {error && (
              <p id={`${checkboxId}-error`} className="text-[#EF4444]">
                {error}
              </p>
            )}
          </div>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
