import React from 'react';

const features = [
  { title: 'Free Shipping', icon: '🚚', description: 'Lorem, ipsum dolor.' },
  { title: 'Best Price Guarantee', icon: '🏷️', description: 'Lorem, ipsum dolor.' },
  { title: 'Free Curbside Pickup', icon: '🏬', description: 'Lorem, ipsum dolor.' },
  { title: 'Support 24/7', icon: '📞', description: 'Lorem, ipsum dolor.' },
];

const Feature = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((feature) => (
          <div key={feature.title} className="flex items-center space-x-4 p-4 bg-white shadow rounded-lg text-left hover:scale-105 transition-transform">
            <span className="text-5xl">{feature.icon}</span>
            <div>
              <h3 className="text-green-800 font-semibold">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
