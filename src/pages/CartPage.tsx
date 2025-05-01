import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Minus, Plus, ArrowLeft, ArrowRight } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, cartTotal } = useCart();
  const [deliveryTime, setDeliveryTime] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [step, setStep] = useState(1);
  
  const deliveryFee = 2.99;
  const taxRate = 0.05; // 5%
  const taxes = cartTotal * taxRate;
  const totalWithTaxAndDelivery = cartTotal + taxes + deliveryFee;
  
  const timeSlots = [
    '8:00 AM - 9:00 AM',
    '12:00 PM - 1:00 PM',
    '5:00 PM - 6:00 PM'
  ];
  
  const handleProceedToCheckout = () => {
    if (step === 1) {
      setStep(2);
    } else {
      // Here would be payment processing logic
      alert('Order placed successfully!');
      clearCart();
      setStep(1);
    }
  };
  
  if (cartItems.length === 0) {
    return (
      <div className="bg-gray-50 min-h-screen py-10">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl font-bold mb-8 text-center">Your Cart</h1>
          
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <div className="text-orange-500 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added any meals to your cart yet.
            </p>
            <Link to="/menu" className="btn-primary">
              Browse Menu
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Your Cart</h1>
          
          {/* Checkout steps indicator */}
          <div className="hidden md:flex items-center">
            <div className={`flex items-center ${step >= 1 ? 'text-orange-500' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-600'}`}>
                1
              </div>
              <span className="ml-2 font-medium">Cart</span>
            </div>
            
            <div className={`w-12 h-1 mx-2 ${step >= 2 ? 'bg-orange-500' : 'bg-gray-200'}`}></div>
            
            <div className={`flex items-center ${step >= 2 ? 'text-orange-500' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-600'}`}>
                2
              </div>
              <span className="ml-2 font-medium">Delivery</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Cart Items */}
          <div className={`md:w-2/3 ${step === 2 ? 'hidden md:block' : ''}`}>
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-4">
              <div className="p-4 border-b">
                <h2 className="text-xl font-semibold">Items ({cartItems.length})</h2>
              </div>
              
              <div className="divide-y">
                {cartItems.map(item => (
                  <div key={item.id} className="p-4 flex flex-col sm:flex-row">
                    <div className="sm:w-24 h-24 rounded-lg overflow-hidden mb-4 sm:mb-0">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    
                    <div className="flex-grow sm:ml-4">
                      <div className="flex justify-between mb-2">
                        <h3 className="font-medium">{item.name}</h3>
                        <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                      
                      <p className="text-sm text-gray-500 mb-4 line-clamp-1">{item.description}</p>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center border rounded-lg">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-2 py-1 text-gray-600 hover:text-orange-500"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={16} />
                          </button>
                          
                          <span className="px-3 py-1 text-center w-10">{item.quantity}</span>
                          
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-2 py-1 text-gray-600 hover:text-orange-500"
                            aria-label="Increase quantity"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                        
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-600 flex items-center"
                          aria-label="Remove item"
                        >
                          <Trash2 size={18} className="mr-1" />
                          <span className="hidden sm:inline">Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="p-4 bg-gray-50">
                <button 
                  onClick={clearCart}
                  className="text-gray-600 hover:text-gray-800 text-sm font-medium flex items-center"
                >
                  <Trash2 size={16} className="mr-1" />
                  Clear cart
                </button>
              </div>
            </div>
            
            <Link 
              to="/menu" 
              className="text-orange-500 hover:text-orange-600 font-medium flex items-center"
            >
              <ArrowLeft size={16} className="mr-1" />
              Continue Shopping
            </Link>
          </div>
          
          {/* Delivery Details */}
          <div className={`md:w-2/3 ${step === 1 ? 'hidden md:block' : ''}`}>
            {step === 2 && (
              <>
                <div className="bg-white rounded-xl shadow-md overflow-hidden mb-4">
                  <div className="p-4 border-b">
                    <h2 className="text-xl font-semibold">Delivery Details</h2>
                  </div>
                  
                  <div className="p-4">
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Select Delivery Time
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {timeSlots.map(slot => (
                          <div key={slot}>
                            <input 
                              type="radio" 
                              id={slot} 
                              name="time-slot" 
                              className="hidden peer" 
                              checked={deliveryTime === slot}
                              onChange={() => setDeliveryTime(slot)}
                            />
                            <label 
                              htmlFor={slot} 
                              className={`
                                block p-3 border rounded-lg text-center cursor-pointer transition
                                peer-checked:border-orange-500 peer-checked:bg-orange-50
                                ${deliveryTime === slot ? 'border-orange-500 bg-orange-50' : 'border-gray-300 hover:bg-gray-50'}
                              `}
                            >
                              {slot}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Delivery Address
                      </label>
                      <textarea 
                        className="input" 
                        rows={3}
                        placeholder="Enter your full address"
                        value={deliveryAddress}
                        onChange={(e) => setDeliveryAddress(e.target.value)}
                      ></textarea>
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Special Instructions (Optional)
                      </label>
                      <textarea 
                        className="input" 
                        rows={2}
                        placeholder="Any delivery instructions, allergies, or preferences?"
                      ></textarea>
                    </div>
                  </div>
                </div>
                
                <button 
                  onClick={() => setStep(1)}
                  className="text-orange-500 hover:text-orange-600 font-medium flex items-center"
                >
                  <ArrowLeft size={16} className="mr-1" />
                  Back to Cart
                </button>
              </>
            )}
          </div>
          
          {/* Order Summary */}
          <div className="md:w-1/3">
            <div className="bg-white rounded-xl shadow-md overflow-hidden sticky top-24">
              <div className="p-4 border-b">
                <h2 className="text-xl font-semibold">Order Summary</h2>
              </div>
              
              <div className="p-4">
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Delivery Fee</span>
                    <span>${deliveryFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Taxes</span>
                    <span>${taxes.toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="border-t pt-3 mb-6">
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>${totalWithTaxAndDelivery.toFixed(2)}</span>
                  </div>
                </div>
                
                <button 
                  onClick={handleProceedToCheckout}
                  disabled={step === 2 && (!deliveryTime || !deliveryAddress)}
                  className={`
                    w-full btn-primary py-3 flex items-center justify-center
                    ${step === 2 && (!deliveryTime || !deliveryAddress) ? 'opacity-50 cursor-not-allowed' : ''}
                  `}
                >
                  {step === 1 ? (
                    <>
                      Proceed to Delivery
                      <ArrowRight size={20} className="ml-2" />
                    </>
                  ) : (
                    'Place Order'
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;