import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Subscription from '../components/Subscription';
import Testimonials from '../components/Testimonials';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { foodItems } from '../data/foodItems';
import FoodCard from '../components/FoodCard';

const HomePage: React.FC = () => {
  const currentHour = new Date().getHours();
  const isAfternoon = currentHour >= 12;
  
  // Get recommended items based on time of day
  const recommendedItems = foodItems.filter(item => 
    item.timeOfDay === (isAfternoon ? 'afternoon' : 'morning') || item.timeOfDay === 'both'
  ).slice(0, 4);

  return (
    <div>
      <Hero />
      
      {/* Featured meals */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl font-bold mb-2">
                {isAfternoon ? 'Afternoon Delights' : 'Start Your Day Right'}
              </h2>
              <p className="text-gray-600">
                {isAfternoon 
                  ? 'Perfect lunch options to keep you energized all afternoon.' 
                  : 'Nutritious breakfast tiffins for a productive morning.'}
              </p>
            </div>
            <Link 
              to="/menu" 
              className="mt-4 md:mt-0 flex items-center text-orange-500 font-medium hover:text-orange-600 transition"
            >
              View full menu
              <ArrowRight size={18} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendedItems.map(item => (
              <FoodCard key={item.id} food={item} />
            ))}
          </div>
        </div>
      </section>
      
      <Features />
      
      {/* How it works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our simple 4-step process to get delicious, homestyle meals delivered to your doorstep.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Choose Your Plan',
                description: 'Select from our flexible meal plans based on your needs.'
              },
              {
                step: '02',
                title: 'Customize Menu',
                description: 'Pick your favorite dishes or let us surprise you.'
              },
              {
                step: '03',
                title: 'Schedule Delivery',
                description: 'Set your preferred delivery time slots.'
              },
              {
                step: '04',
                title: 'Enjoy Fresh Food',
                description: 'Receive and enjoy your delicious, homecooked meals.'
              }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 font-bold text-xl mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                
                {index < 3 && (
                  <div className="hidden md:block w-24 h-px bg-orange-200 absolute left-1/2 top-1/2 transform translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/menu" className="btn-primary inline-flex items-center px-8 py-3">
              Order Now <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      <Testimonials />
      <Subscription />
      
      {/* Call to action */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Simplify Your Meals?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of satisfied customers who enjoy fresh, homestyle meals delivered daily.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/menu" className="btn bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 text-lg">
              Explore Menu
            </Link>
            <a href="#subscription" className="btn bg-orange-600 text-white hover:bg-orange-700 px-8 py-3 text-lg">
              Subscribe Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;