import type { Meta, StoryObj } from '@storybook/react';
import { ServiceCard } from './ServiceCard';
import { Heart, Zap, Droplet, Activity, FileText, Package } from 'lucide-react';

const meta: Meta<typeof ServiceCard> = {
  title: 'Data Display/ServiceCard',
  component: ServiceCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Image-based service card with overlay text and action button. Used to showcase service offerings on the homepage.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ServiceCard>;

const sampleImage = 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80';

export const CarbonIntelligence: Story = {
  args: {
    title: 'Carbon intelligence',
    image: sampleImage,
    icon: <Heart size={24} />,
    onActionClick: () => console.log('Action clicked'),
  },
};

export const EnergyOptimization: Story = {
  args: {
    title: 'Energy & facilities optimization',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80',
    icon: <Zap size={24} />,
    onActionClick: () => console.log('Action clicked'),
  },
};

export const SustainableSupplyChain: Story = {
  args: {
    title: 'Sustainable supply chain',
    image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80',
    icon: <Package size={24} />,
    onActionClick: () => console.log('Action clicked'),
  },
};

export const WithDescription: Story = {
  args: {
    title: 'Clinical decarbonization',
    description: 'Reduce emissions across clinical operations while maintaining care quality',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80',
    icon: <Activity size={24} />,
    onActionClick: () => console.log('Action clicked'),
  },
};

export const WasteManagement: Story = {
  args: {
    title: 'Waste & water management',
    description: 'Comprehensive tracking and reduction strategies',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80',
    icon: <Droplet size={24} />,
    onActionClick: () => console.log('Action clicked'),
  },
};

export const ComplianceReporting: Story = {
  args: {
    title: 'Compliance & reporting',
    description: 'Automated reporting for regulatory requirements',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80',
    icon: <FileText size={24} />,
    onActionClick: () => console.log('Action clicked'),
  },
};

export const ServiceGrid: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8 max-w-7xl">
      <ServiceCard
        title="Carbon intelligence"
        image={sampleImage}
        icon={<Heart size={24} />}
        onActionClick={() => console.log('Carbon intelligence')}
      />
      <ServiceCard
        title="Energy & facilities optimization"
        image="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80"
        icon={<Zap size={24} />}
        onActionClick={() => console.log('Energy optimization')}
      />
      <ServiceCard
        title="Sustainable supply chain"
        image="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80"
        icon={<Package size={24} />}
        onActionClick={() => console.log('Supply chain')}
      />
      <ServiceCard
        title="Clinical decarbonization"
        image="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80"
        icon={<Activity size={24} />}
        onActionClick={() => console.log('Clinical')}
      />
      <ServiceCard
        title="Waste & water management"
        image="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80"
        icon={<Droplet size={24} />}
        onActionClick={() => console.log('Waste')}
      />
      <ServiceCard
        title="Compliance & reporting"
        image="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80"
        icon={<FileText size={24} />}
        onActionClick={() => console.log('Compliance')}
      />
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'gray' },
  },
};
