import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Marketing Professional',
      avatar: 'https://randomuser.me/api/portraits/women/11.jpg',
      content: "TiffinTime has revolutionized my lunch breaks! As someone who works from home, I used to waste so much time preparing lunch. Now I get delicious, home-style meals delivered right to my door. The food quality is consistently excellent.",
      rating: 5
    },
    {
      id: 2,
      name: 'Rahul Joshi',
      role: 'Software Engineer',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      content: "I've tried several tiffin services, but this one stands out for its variety and taste. It reminds me of my mom's cooking - something I really miss while working away from home. The subscription plan is super convenient too!",
      rating: 5
    },
    {
      id: 3,
      name: 'Anjali Desai',
      role: 'College Professor',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      content: "Between lectures and research, I hardly have time to cook. TiffinTime delivers nutritious meals that keep me energized throughout the day. I particularly appreciate their vegetarian options and portion sizes.",
      rating: 4
    },
    {
      id: 4,
      name: 'Vikram Sinha',
      role: 'Healthcare Worker',
      avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
      content: "Working long shifts at the hospital means I rarely have time to cook healthy meals. TiffinTime's delivery is always on time, and the food is both delicious and nutritious. It's been a life-saver during busy weeks!",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience with our tiffin service.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 flex flex-col items-center mb-6 md:mb-0">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                  <img 
                    src={testimonials[currentIndex].avatar} 
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center">{testimonials[currentIndex].name}</h3>
                <p className="text-gray-500 text-center">{testimonials[currentIndex].role}</p>
                <div className="flex items-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      className={i < testimonials[currentIndex].rating ? "text-yellow-400 fill-current" : "text-gray-300"}
                    />
                  ))}
                </div>
              </div>
              
              <div className="md:w-2/3 md:pl-10">
                <blockquote className="italic text-gray-700 text-lg">
                  "{testimonials[currentIndex].content}"
                </blockquote>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow-md text-gray-700 hover:bg-orange-500 hover:text-white transition duration-200"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow-md text-gray-700 hover:bg-orange-500 hover:text-white transition duration-200"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 mx-1 rounded-full transition-all duration-200 ${
                  currentIndex === index ? 'bg-orange-500 w-6' : 'bg-gray-300 hover:bg-orange-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;