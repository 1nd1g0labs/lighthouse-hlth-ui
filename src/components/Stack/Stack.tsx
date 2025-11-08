import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const stackVariants = cva(
  'flex',
  {
    variants: {
      direction: {
        row: 'flex-row',
        column: 'flex-col',
        rowReverse: 'flex-row-reverse',
        columnReverse: 'flex-col-reverse',
      },
      spacing: {
        0: 'gap-0',
        1: 'gap-1',
        2: 'gap-2',
        3: 'gap-3',
        4: 'gap-4',
        5: 'gap-5',
        6: 'gap-6',
        8: 'gap-8',
        10: 'gap-10',
        12: 'gap-12',
        16: 'gap-16',
      },
      align: {
        start: 'items-start',
        center: 'items-center',
        end: 'items-end',
        stretch: 'items-stretch',
        baseline: 'items-baseline',
      },
      justify: {
        start: 'justify-start',
        center: 'justify-center',
        end: 'justify-end',
        between: 'justify-between',
        around: 'justify-around',
        evenly: 'justify-evenly',
      },
      wrap: {
        true: 'flex-wrap',
        false: 'flex-nowrap',
      },
    },
    defaultVariants: {
      direction: 'column',
      spacing: 4,
      align: 'stretch',
      justify: 'start',
      wrap: false,
    },
  }
);

export interface StackProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof stackVariants> {}

export const Stack = forwardRef<HTMLDivElement, StackProps>(
  ({ className, direction, spacing, align, justify, wrap, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          stackVariants({ direction, spacing, align, justify, wrap, className })
        )}
        {...props}
      />
    );
  }
);

Stack.displayName = 'Stack';

// Convenience components
export const HStack = forwardRef<HTMLDivElement, Omit<StackProps, 'direction'>>(
  (props, ref) => <Stack ref={ref} direction="row" {...props} />
);

HStack.displayName = 'HStack';

export const VStack = forwardRef<HTMLDivElement, Omit<StackProps, 'direction'>>(
  (props, ref) => <Stack ref={ref} direction="column" {...props} />
);

VStack.displayName = 'VStack';
