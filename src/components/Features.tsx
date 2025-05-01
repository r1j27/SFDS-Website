import React from 'react';
import { Clock, Utensils, Calendar, Truck, Gift, Leaf } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Clock size={36} className="text-orange-500" />,
      title: 'On-Time Delivery',
      description: 'Get your meals delivered right when you need them, every single day.'
    },
    {
      icon: <Utensils size={36} className="text-orange-500" />,
      title: 'Home-Style Cooking',
      description: 'Authentic recipes prepared with love, just like home-cooked meals.'
    },
    {
      icon: <Calendar size={36} className="text-orange-500" />,
      title: 'Flexible Subscriptions',
      description: 'Choose daily, weekly, or monthly plans that fit your lifestyle.'
    },
    {
      icon: <Truck size={36} className="text-orange-500" />,
      title: 'Hygienic Packaging',
      description: 'Safely sealed containers that keep your food fresh and warm.'
    },
    {
      icon: <Gift size={36} className="text-orange-500" />,
      title: 'Special Occasion Meals',
      description: 'Festive specials and celebration menus for your important days.'
    },
    {
      icon: <Leaf size={36} className="text-orange-500" />,
      title: 'Dietary Options',
      description: 'Vegetarian, vegan, and gluten-free options to suit your preferences.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Tiffin Service</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're committed to making your daily meals convenient, healthy, and delicious with our premium tiffin service.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-xl p-6 transition duration-300 hover:shadow-md hover:transform hover:-translate-y-1"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;