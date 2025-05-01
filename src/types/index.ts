export interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'breakfast' | 'lunch' | 'dinner' | 'snacks';
  tags: string[];
  timeOfDay: 'morning' | 'afternoon' | 'both';
  rating: number;
  preparationTime: number;
  isVegetarian: boolean;
  isVegan?: boolean;
  isGlutenFree?: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  addresses: Address[];
  favorites: string[];
}

export interface Address {
  id: string;
  type: 'home' | 'work' | 'other';
  address: string;
  city: string;
  state: string;
  zipCode: string;
  isDefault: boolean;
}

export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  status: 'pending' | 'confirmed' | 'preparing' | 'out-for-delivery' | 'delivered' | 'cancelled';
  totalAmount: number;
  deliveryAddress: Address;
  paymentMethod: 'card' | 'cash' | 'wallet';
  createdAt: string;
  deliveryTime?: string;
}

export interface OrderItem {
  foodItemId: string;
  name: string;
  price: number;
  quantity: number;
}

export interface Subscription {
  id: string;
  userId: string;
  plan: 'daily' | 'weekly' | 'monthly';
  mealType: 'breakfast' | 'lunch' | 'dinner' | 'all';
  startDate: string;
  endDate?: string;
  status: 'active' | 'paused' | 'cancelled';
  price: number;
}