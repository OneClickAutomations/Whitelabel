import { type LucideIcon, Shield, Package, LineChart, Zap } from 'lucide-react';

export interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const benefits: Benefit[] = [
  {
    icon: Shield,
    title: 'White-label solution',
    description: 'Brand and sell AI apps as your own'
  },
  {
    icon: Package,
    title: 'Comprehensive suite',
    description: '11+ powerful AI tools in one platform'
  },
  {
    icon: LineChart,
    title: 'Scalable pricing',
    description: 'Grow your business without breaking the bank'
  },
  {
    icon: Zap,
    title: 'Cutting-edge technology',
    description: 'Stay ahead with our constantly evolving AI'
  }
];