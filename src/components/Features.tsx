import { Check } from 'lucide-react';
import { AppFeatureCard } from '@/components/ui/app-feature-card';
import { appFeatures } from '@/data/app-features';

export function Features() {
  return (
    <section className="py-20 bg-background" id="features">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Transform Your Business with AI
          </h2>
          <p className="text-gray-400 text-lg">
            Our comprehensive suite of AI tools can be fully white-labeled and customized to match your brand identity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {appFeatures.map((feature, index) => (
            <AppFeatureCard key={index} {...feature} />
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-gray-900/50 rounded-lg p-8 backdrop-blur-sm border border-gray-800/50">
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
            Additional Platform Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Custom Domain Support',
              'Multi-Language Interface',
              'Advanced Analytics Dashboard',
              'Team Collaboration Tools',
              'API Access & Integration',
              'Custom Branding Options',
              'Automated Workflows',
              'Priority Support',
              'Regular AI Updates',
              'Content Templates Library',
              'Bulk Processing',
              'Export & Backup Tools'
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 p-2 hover:bg-gray-800/30 rounded-lg transition-colors">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}