import { type LucideIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function BenefitCard({ icon: Icon, title, description }: BenefitCardProps) {
  return (
    <Card className="p-6 card-gradient">
      <div className="flex flex-col items-center text-center">
        <div className="w-12 h-12 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </Card>
  );
}