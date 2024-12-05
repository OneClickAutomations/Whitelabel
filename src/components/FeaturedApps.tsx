import { AppCard } from '@/components/ui/app-card';
import { apps } from '@/data/apps';

export function FeaturedApps() {
  return (
    <section className="py-20 bg-background/50">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          Powerful AI Tools at Your Fingertips
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {apps.map((app, index) => (
            <AppCard
              key={index}
              icon={app.icon}
              name={app.name}
              description={app.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}