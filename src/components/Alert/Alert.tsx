import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';
import { AlertCircle, CheckCircle2, Info, AlertTriangle, X } from 'lucide-react';

const alertVariants = cva(
  [
    'relative w-full rounded-[0.5rem] border p-4',
    'transition-all duration-250',
  ].join(' '),
  {
    variants: {
      variant: {
        info: [
          'bg-[#DBEAFE] border-[#3B82F6] text-[#1E3A8A]',
        ].join(' '),
        success: [
          'bg-[#D1FAE5] border-[#10B981] text-[#065F46]',
        ].join(' '),
        warning: [
          'bg-[#FEF3C7] border-[#F59E0B] text-[#78350F]',
        ].join(' '),
        error: [
          'bg-[#FEE2E2] border-[#EF4444] text-[#7F1D1D]',
        ].join(' '),
        sustainability: [
          'bg-gradient-to-r from-[#0070E0]/10 to-[#4CAF50]/10',
          'border-[#4CAF50]',
          'text-[#1B5E20]',
        ].join(' '),
      },
    },
    defaultVariants: {
      variant: 'info',
    },
  }
);

const iconMap = {
  info: Info,
  success: CheckCircle2,
  warning: AlertTriangle,
  error: AlertCircle,
  sustainability: CheckCircle2,
};

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  title?: string;
  onClose?: () => void;
  icon?: React.ReactNode;
}

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = 'info', title, onClose, icon, children, ...props }, ref) => {
    const Icon = iconMap[variant as keyof typeof iconMap] || iconMap.info;

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(alertVariants({ variant, className }))}
        {...props}
      >
        <div className="flex gap-3">
          <div className="flex-shrink-0">
            {icon || <Icon className="h-5 w-5" />}
          </div>

          <div className="flex-1">
            {title && (
              <h5 className="mb-1 font-semibold leading-none tracking-tight">
                {title}
              </h5>
            )}
            <div className="text-sm leading-relaxed">{children}</div>
          </div>

          {onClose && (
            <button
              onClick={onClose}
              className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity"
              aria-label="Close alert"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    );
  }
);

Alert.displayName = 'Alert';
