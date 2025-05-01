import React, { useState } from 'react';
import { Check } from 'lucide-react';

interface Plan {
  id: string;
  name: string;
  price: number;
  period: string;
  features: string[];
  popular?: boolean;
}

const Subscription: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'quarterly'>('monthly');
  
  const plans: Plan[] = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: billingPeriod === 'monthly' ? 2999 : 7999,
      period: billingPeriod === 'monthly' ? 'month' : '3 months',
      features: [
        'One meal per day (lunch or dinner)',
        'Monday to Friday delivery',
        'Standard menu selection',
        'Regular delivery timing',
        'Email support'
      ]
    },
    {
      id: 'standard',
      name: 'Standard Plan',
      price: billingPeriod === 'monthly' ? 4999 : 13499,
      period: billingPeriod === 'monthly' ? 'month' : '3 months',
      features: [
        'Two meals per day (lunch and dinner)',
        'Monday to Saturday delivery',
        'Extended menu selection',
        'Flexible delivery timing',
        'Phone & email support',
        'Special weekend menu'
      ],
      popular: true
    },
    {
      id: 'premium',
      name: 'Premium Plan',
      price: billingPeriod === 'monthly' ? 6999 : 18999,
      period: billingPeriod === 'monthly' ? 'month' : '3 months',
      features: [
        'Three meals per day (all meals)',
        'All days delivery including holidays',
        'Full menu access with premium items',
        'Priority delivery slots',
        '24/7 dedicated support',
        'Customizable menu options',
        'Special diet accommodations'
      ]
    }
  ];

  return (
    <section id="subscription" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Subscribe to Daily Freshness</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose a subscription plan that works for you and enjoy the convenience of regular, hassle-free meal deliveries.
          </p>
          
          <div className="flex justify-center mt-8">
            <div className="bg-white p-1 rounded-lg shadow-sm inline-flex">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`px-5 py-2 rounded-md transition ${
                  billingPeriod === 'monthly'
                    ? 'bg-orange-500 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod('quarterly')}
                className={`px-5 py-2 rounded-md transition ${
                  billingPeriod === 'quarterly'
                    ? 'bg-orange-500 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Quarterly
                <span className="ml-1 text-xs font-bold text-orange-500 bg-orange-100 px-1.5 py-0.5 rounded">
                  Save 10%
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-white rounded-xl overflow-hidden shadow-md transition duration-300 hover:shadow-lg relative ${
                plan.popular ? 'transform md:-translate-y-4' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-orange-500 text-white text-center py-1 text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className={`p-6 ${plan.popular ? 'pt-9' : ''}`}>
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-3xl font-extrabold">₹{plan.price}</span>
                  <span className="text-gray-600 ml-2">/{plan.period}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check size={18} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  className={`w-full py-3 rounded-lg font-medium transition ${
                    plan.popular
                      ? 'bg-orange-500 text-white hover:bg-orange-600'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-center text-gray-500 mt-8">
          All plans include contactless delivery and eco-friendly packaging.
          <br />
          You can cancel or pause your subscription anytime.
        </p>
      </div>
    </section>
  );
};

export default Subscription;