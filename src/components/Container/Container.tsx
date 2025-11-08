import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const containerVariants = cva(
  'mx-auto w-full',
  {
    variants: {
      maxWidth: {
        sm: 'max-w-[640px]',
        md: 'max-w-[768px]',
        lg: 'max-w-[1024px]',
        xl: 'max-w-[1280px]',
        '2xl': 'max-w-[1536px]',
        full: 'max-w-full',
      },
      padding: {
        none: 'px-0',
        sm: 'px-4',
        md: 'px-6',
        lg: 'px-8',
      },
    },
    defaultVariants: {
      maxWidth: 'xl',
      padding: 'md',
    },
  }
);

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, maxWidth, padding, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(containerVariants({ maxWidth, padding, className }))}
        {...props}
      />
    );
  }
);

Container.displayName = 'Container';
