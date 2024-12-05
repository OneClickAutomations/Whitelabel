export function SocialProof() {
  const companies = [
    { name: 'TechCorp', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop' },
    { name: 'Innovate AI', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop' },
    { name: 'Future Systems', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop' },
    { name: 'AI Solutions', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop' }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Trusted by Industry Leaders
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {companies.map((company, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={company.logo}
                alt={company.name}
                className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}