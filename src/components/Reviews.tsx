import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    content: 'ElevenSaaS has completely transformed our content creation process. The AI tools are incredibly intuitive and the results are amazing.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Digital Agency Owner',
    content: 'The white-label solution allowed us to expand our service offerings overnight. Our clients love the results!',
    rating: 5
  },
  {
    name: 'Emma Davis',
    role: 'Content Creator',
    content: 'I can now create a weeks worth of content in just a few hours. The AI understands exactly what I need.',
    rating: 5
  }
];

export function Reviews() {
  return (
    <section className="py-20 bg-background/50">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="p-6 rounded-lg card-gradient">
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">{review.content}</p>
              <div>
                <p className="font-semibold text-white">{review.name}</p>
                <p className="text-sm text-gray-400">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}