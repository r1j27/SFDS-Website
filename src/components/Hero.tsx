import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-amber-50 to-orange-100 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')] bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-20 lg:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <div className="slide-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
                Homestyle <span className="text-orange-500">Tiffin</span> Delivered Fresh Daily
              </h1>
              
              <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
                Experience the convenience of home-cooked meals without the hassle. Nutritious breakfasts and lunches delivered right to your door.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/menu" 
                  className="btn-primary text-center sm:text-left px-8 py-3 text-lg flex items-center justify-center sm:justify-start"
                >
                  Explore Menu
                  <ArrowRight size={20} className="ml-2" />
                </Link>
                
                <a 
                  href="#subscription" 
                  className="btn-outline text-center sm:text-left px-8 py-3 text-lg"
                >
                  Start Subscription
                </a>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 fade-in">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-orange-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-teal-400 rounded-full opacity-20"></div>
              
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl relative z-10">
                <img 
                  src="https://images.pexels.com/photos/5835364/pexels-photo-5835364.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                  alt="Delicious packed tiffin meal" 
                  className="w-full h-64 sm:h-80 object-cover"
                />
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">Today's Special Tiffin</h3>
                    <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">Limited</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    Paneer butter masala, jeera rice, dal, 3 rotis, raita, and gulab jamun.
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500">
                      <Clock size={18} className="mr-2" />
                      <span>Order before 10 AM</span>
                    </div>
                    
                    <span className="text-xl font-bold text-gray-900">₹299</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;