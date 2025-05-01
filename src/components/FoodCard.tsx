import React from 'react';
import { Clock, Star, Plus, Check } from 'lucide-react';
import { FoodItem } from '../types';
import { useCart } from '../contexts/CartContext';

interface FoodCardProps {
  food: FoodItem;
}

const FoodCard: React.FC<FoodCardProps> = ({ food }) => {
  const { cartItems, addToCart } = useCart();
  const isInCart = cartItems.some(item => item.id === food.id);

  return (
    <div className="food-card group">
      <div className="relative overflow-hidden h-48">
        <img 
          src={food.image} 
          alt={food.name} 
          className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
        />
        
        <div className="absolute top-2 right-2 flex flex-col gap-2">
          {food.isVegetarian && (
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
              Veg
            </span>
          )}
          {food.isVegan && (
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
              Vegan
            </span>
          )}
        </div>
      </div>
      
      <div className="p-4">
        <div className="mb-2 flex justify-between items-start">
          <h3 className="text-lg font-semibold text-gray-800 group-hover:text-orange-500 transition-colors duration-200">
            {food.name}
          </h3>
          <div className="flex items-center bg-orange-50 px-2 py-1 rounded-full">
            <Star size={14} className="text-orange-500 mr-1" fill="currentColor" />
            <span className="text-sm font-medium text-orange-700">{food.rating}</span>
          </div>
        </div>
        
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{food.description}</p>
        
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <Clock size={16} className="mr-1" />
          <span>{food.preparationTime} mins</span>
          
          <div className="mx-2 h-1 w-1 rounded-full bg-gray-300"></div>
          
          <span className="capitalize">{food.timeOfDay === 'both' ? 'Any time' : food.timeOfDay}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-gray-900">₹{food.price}</span>
          
          <button
            onClick={() => addToCart(food)}
            className={`
              p-2 rounded-full transition-all duration-200 ${
                isInCart 
                  ? 'bg-green-100 text-green-600 hover:bg-green-200' 
                  : 'bg-orange-100 text-orange-600 hover:bg-orange-200'
              }
            `}
            aria-label={isInCart ? 'Added to cart' : 'Add to cart'}
          >
            {isInCart ? <Check size={20} /> : <Plus size={20} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;