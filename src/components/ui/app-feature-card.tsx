import { LucideIcon } from 'lucide-react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface AppFeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  whitelabelInfo: string;
  benefits: string[];
}

export function AppFeatureCard({ icon: Icon, title, description, whitelabelInfo, benefits }: AppFeatureCardProps) {
  return (
    <Card className="relative overflow-hidden group">
      <div className="p-6 card-gradient h-full flex flex-col">
        <div className="mb-4">
          <div className="inline-block p-3 rounded-lg bg-primary/10">
            <Icon className="h-8 w-8 text-primary" />
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-400 mb-4 flex-grow">
          {description}
        </p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-primary mb-2">
            White-Label Features:
          </h4>
          <p className="text-gray-400 text-sm">
            {whitelabelInfo}
          </p>
        </div>
        
        <div className="space-y-2 mb-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-2">
              <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
              <span className="text-gray-400 text-sm">{benefit}</span>
            </div>
          ))}
        </div>
        
        <Button 
          variant="ghost" 
          className="w-full mt-auto border border-primary hover:bg-primary/10 transition-colors"
        >
          Learn More
        </Button>
      </div>
    </Card>
  );
}