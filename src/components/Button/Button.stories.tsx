import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { ArrowRight, Download, Plus } from 'lucide-react';

const meta: Meta<typeof Button> = {
  title: 'Core/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile button component with multiple variants, sizes, and states. Follows the Lighthouse HLTH brand design language.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'accent', 'outline', 'ghost', 'destructive'],
      description: 'Visual style variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'icon'],
      description: 'Button size',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Makes button full width',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables button',
    },
    loading: {
      control: 'boolean',
      description: 'Shows loading state',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Contact us',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Learn more',
    variant: 'secondary',
  },
};

export const Accent: Story = {
  args: {
    children: 'Get started',
    variant: 'accent',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline button',
    variant: 'outline',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Ghost button',
    variant: 'ghost',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Delete',
    variant: 'destructive',
  },
};

export const WithRightIcon: Story = {
  args: {
    children: 'Continue',
    rightIcon: <ArrowRight size={18} />,
  },
};

export const WithLeftIcon: Story = {
  args: {
    children: 'Download',
    leftIcon: <Download size={18} />,
  },
};

export const Loading: Story = {
  args: {
    children: 'Loading...',
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
};

export const Small: Story = {
  args: {
    children: 'Small button',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    children: 'Large button',
    size: 'lg',
  },
};

export const ExtraLarge: Story = {
  args: {
    children: 'Extra large',
    size: 'xl',
  },
};

export const FullWidth: Story = {
  args: {
    children: 'Full width button',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-center">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="accent">Accent</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-center">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
    </div>
  ),
};
