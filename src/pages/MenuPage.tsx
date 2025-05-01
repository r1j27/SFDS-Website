import React, { useState, useEffect } from 'react';
import { Search, Filter, X } from 'lucide-react';
import FoodCard from '../components/FoodCard';
import { foodItems } from '../data/foodItems';
import { FoodItem } from '../types';

const MenuPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [timeOfDay, setTimeOfDay] = useState<string>('all');
  const [dietaryFilter, setDietaryFilter] = useState<string>('all');
  const [filteredItems, setFilteredItems] = useState<FoodItem[]>(foodItems);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Update filtered items whenever filters change
  useEffect(() => {
    let filtered = [...foodItems];
    
    // Apply search filter
    if (searchTerm.trim() !== '') {
      filtered = filtered.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    // Apply category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }
    
    // Apply time of day filter
    if (timeOfDay !== 'all') {
      filtered = filtered.filter(item => 
        item.timeOfDay === timeOfDay || item.timeOfDay === 'both'
      );
    }
    
    // Apply dietary filter
    if (dietaryFilter === 'vegetarian') {
      filtered = filtered.filter(item => item.isVegetarian);
    } else if (dietaryFilter === 'vegan') {
      filtered = filtered.filter(item => item.isVegan);
    } else if (dietaryFilter === 'gluten-free') {
      filtered = filtered.filter(item => item.isGlutenFree);
    }
    
    setFilteredItems(filtered);
  }, [searchTerm, selectedCategory, timeOfDay, dietaryFilter]);

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'breakfast', name: 'Breakfast' },
    { id: 'lunch', name: 'Lunch' },
    { id: 'dinner', name: 'Dinner' },
    { id: 'snacks', name: 'Snacks' }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Menu</h1>
        
        {/* Search and filters - Desktop */}
        <div className="hidden md:flex items-center justify-between mb-8">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={20} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search for meals..."
              className="input pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex space-x-4">
            <select 
              className="input max-w-[180px]"
              value={timeOfDay}
              onChange={(e) => setTimeOfDay(e.target.value)}
            >
              <option value="all">Any Time</option>
              <option value="morning">Morning</option>
              <option value="afternoon">Afternoon</option>
            </select>
            
            <select 
              className="input max-w-[180px]"
              value={dietaryFilter}
              onChange={(e) => setDietaryFilter(e.target.value)}
            >
              <option value="all">All Diets</option>
              <option value="vegetarian">Vegetarian</option>
              <option value="vegan">Vegan</option>
              <option value="gluten-free">Gluten-Free</option>
            </select>
          </div>
        </div>
        
        {/* Search and filter toggle - Mobile */}
        <div className="md:hidden mb-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={20} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search for meals..."
              className="input pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <button 
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="mt-4 w-full flex items-center justify-center px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm"
          >
            <Filter size={18} className="mr-2" />
            Filters {isFilterOpen ? <X size={18} className="ml-2" /> : null}
          </button>
          
          {isFilterOpen && (
            <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Time of Day
                </label>
                <select 
                  className="input"
                  value={timeOfDay}
                  onChange={(e) => setTimeOfDay(e.target.value)}
                >
                  <option value="all">Any Time</option>
                  <option value="morning">Morning</option>
                  <option value="afternoon">Afternoon</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Dietary Preference
                </label>
                <select 
                  className="input"
                  value={dietaryFilter}
                  onChange={(e) => setDietaryFilter(e.target.value)}
                >
                  <option value="all">All Diets</option>
                  <option value="vegetarian">Vegetarian</option>
                  <option value="vegan">Vegan</option>
                  <option value="gluten-free">Gluten-Free</option>
                </select>
              </div>
            </div>
          )}
        </div>
        
        {/* Category Tabs */}
        <div className="flex overflow-x-auto pb-2 mb-8 gap-2 md:gap-4 scrollbar-hide">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition ${
                selectedCategory === category.id
                  ? 'bg-orange-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Results count and sorting */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            Showing <span className="font-medium">{filteredItems.length}</span> items
          </p>
          
          <select className="input max-w-[150px] py-2">
            <option>Recommended</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Rating</option>
          </select>
        </div>
        
        {/* Food items grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map(item => (
              <FoodCard key={item.id} food={item} />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center">
            <div className="text-orange-500 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 11h.01" />
                <path d="M11 15h.01" />
                <path d="M16 16h.01" />
                <path d="M2 16l2 3h16l2-3" />
                <path d="M20 16c0-5-4-9-9-9h-2" />
                <path d="M5 8l0 2" />
                <path d="M3 7l0 3" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">No meals found</h3>
            <p className="text-gray-600 mb-6">
              We couldn't find any meals matching your search criteria.
            </p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setTimeOfDay('all');
                setDietaryFilter('all');
              }}
              className="btn-primary"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuPage;