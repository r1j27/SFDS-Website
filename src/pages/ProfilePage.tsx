import React, { useState } from 'react';
import { User, MapPin, CreditCard, Clock, Package, Bell, LogOut } from 'lucide-react';

const ProfilePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');
  
  // Mock user data
  const user = {
    name: 'Rahul Kumar',
    email: 'rahul.kumar@example.com',
    phone: '+1 (555) 123-4567',
    addresses: [
      {
        id: '1',
        type: 'home',
        address: '123 Main Street, Apt 4B',
        city: 'Mumbai',
        state: 'Maharashtra',
        zipCode: '400001',
        isDefault: true
      },
      {
        id: '2',
        type: 'work',
        address: '456 Office Park, Building C',
        city: 'Mumbai',
        state: 'Maharashtra',
        zipCode: '400051',
        isDefault: false
      }
    ],
    paymentMethods: [
      {
        id: '1',
        type: 'card',
        last4: '4242',
        expiry: '04/25',
        isDefault: true
      }
    ]
  };
  
  // Mock order history
  const orders = [
    {
      id: 'ORD123456',
      date: 'May 15, 2025',
      total: 42.97,
      status: 'delivered',
      items: [
        { name: 'Executive Lunch Thali', quantity: 2 },
        { name: 'Classic Breakfast Tiffin', quantity: 1 }
      ]
    },
    {
      id: 'ORD123455',
      date: 'May 10, 2025',
      total: 28.99,
      status: 'delivered',
      items: [
        { name: 'North Indian Breakfast Box', quantity: 1 },
        { name: 'Regional Rice Special', quantity: 1 }
      ]
    }
  ];
  
  // Mock subscription data
  const subscription = {
    plan: 'Standard Plan',
    billing: 'Monthly',
    nextDelivery: 'Tomorrow, 12:00 PM',
    status: 'active',
    amount: 249.00
  };
  
  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input type="text" className="input" defaultValue={user.name} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input type="email" className="input" defaultValue={user.email} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input type="tel" className="input" defaultValue={user.phone} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                    <input type="password" className="input" defaultValue="********" />
                  </div>
                </div>
                
                <button className="btn-primary mt-6">
                  Save Changes
                </button>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mb-6">Delivery Addresses</h2>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
              <div className="divide-y">
                {user.addresses.map(address => (
                  <div key={address.id} className="p-6">
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center">
                        <span className="capitalize font-medium text-lg">
                          {address.type} Address
                        </span>
                        {address.isDefault && (
                          <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                            Default
                          </span>
                        )}
                      </div>
                      
                      <div className="flex space-x-3">
                        <button className="text-blue-600 text-sm font-medium">Edit</button>
                        {!address.isDefault && (
                          <button className="text-red-600 text-sm font-medium">Delete</button>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-gray-600">
                      {address.address}, {address.city}, {address.state} {address.zipCode}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="p-6 bg-gray-50">
                <button className="btn-outline">
                  + Add New Address
                </button>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mb-6">Payment Methods</h2>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="divide-y">
                {user.paymentMethods.map(method => (
                  <div key={method.id} className="p-6">
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center">
                        <div className="bg-blue-100 p-2 rounded mr-3">
                          <CreditCard className="text-blue-600" size={20} />
                        </div>
                        <div>
                          <p className="font-medium">
                            •••• •••• •••• {method.last4}
                            {method.isDefault && (
                              <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                                Default
                              </span>
                            )}
                          </p>
                          <p className="text-sm text-gray-500">Expires {method.expiry}</p>
                        </div>
                      </div>
                      
                      <div className="flex space-x-3">
                        <button className="text-red-600 text-sm font-medium">Remove</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="p-6 bg-gray-50">
                <button className="btn-outline">
                  + Add Payment Method
                </button>
              </div>
            </div>
          </div>
        );
      
      case 'orders':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6">Order History</h2>
            
            {orders.length > 0 ? (
              <div className="bg-white rounded-xl shadow-md overflow-hidden divide-y">
                {orders.map(order => (
                  <div key={order.id} className="p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                      <div>
                        <h3 className="font-semibold text-lg">{order.id}</h3>
                        <p className="text-gray-500">{order.date}</p>
                      </div>
                      
                      <div className="mt-2 md:mt-0 flex items-center">
                        <span className={`
                          px-2 py-1 rounded-full text-xs font-medium 
                          ${order.status === 'delivered' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}
                        `}>
                          {order.status === 'delivered' ? 'Delivered' : 'In Progress'}
                        </span>
                        <span className="ml-4 font-medium">${order.total.toFixed(2)}</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 border-t pt-4">
                      <h4 className="font-medium mb-2">Items</h4>
                      <ul className="text-gray-600">
                        {order.items.map((item, index) => (
                          <li key={index} className="flex justify-between py-1">
                            <span>{item.name}</span>
                            <span>x{item.quantity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-4 flex justify-end">
                      <button className="text-orange-500 font-medium">View Details</button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-md p-8 text-center">
                <div className="text-orange-500 mb-4">
                  <Package size={48} className="mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No orders yet</h3>
                <p className="text-gray-600 mb-4">
                  You haven't placed any orders with us yet.
                </p>
              </div>
            )}
          </div>
        );
      
      case 'subscription':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6">Your Subscription</h2>
            
            {subscription ? (
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
                    <div>
                      <h3 className="font-semibold text-lg">{subscription.plan}</h3>
                      <p className="text-gray-500">{subscription.billing} billing</p>
                    </div>
                    
                    <div className="mt-2 md:mt-0">
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full font-medium">
                        Active
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-500 text-sm mb-1">Next Delivery</p>
                      <p className="font-medium">{subscription.nextDelivery}</p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-500 text-sm mb-1">Billing Amount</p>
                      <p className="font-medium">${subscription.amount.toFixed(2)}/month</p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-500 text-sm mb-1">Next Billing</p>
                      <p className="font-medium">June 15, 2025</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-4">
                    <button className="btn-primary">
                      Manage Plan
                    </button>
                    <button className="btn-outline text-orange-500 border-orange-500">
                      Pause Subscription
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-md p-8 text-center">
                <div className="text-orange-500 mb-4">
                  <Clock size={48} className="mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No active subscription</h3>
                <p className="text-gray-600 mb-6">
                  Subscribe to our meal plans to get regular, hassle-free deliveries.
                </p>
                <button className="btn-primary">
                  Explore Plans
                </button>
              </div>
            )}
            
            <h2 className="text-2xl font-bold mb-6">Meal Preferences</h2>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="mb-6">
                  <h3 className="font-medium mb-4">Dietary Preferences</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {['Vegetarian', 'Non-Vegetarian', 'Vegan', 'Gluten-Free'].map(diet => (
                      <div key={diet} className="relative">
                        <input 
                          type="checkbox" 
                          id={diet} 
                          className="sr-only peer" 
                          defaultChecked={diet === 'Vegetarian'}
                        />
                        <label 
                          htmlFor={diet} 
                          className="flex p-3 border rounded-lg cursor-pointer transition peer-checked:border-orange-500 peer-checked:bg-orange-50"
                        >
                          {diet}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-medium mb-4">Spice Level</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {['Mild', 'Medium', 'Spicy'].map(spice => (
                      <div key={spice} className="relative">
                        <input 
                          type="radio" 
                          id={spice} 
                          name="spice" 
                          className="sr-only peer" 
                          defaultChecked={spice === 'Medium'}
                        />
                        <label 
                          htmlFor={spice} 
                          className="flex p-3 border rounded-lg text-center cursor-pointer transition peer-checked:border-orange-500 peer-checked:bg-orange-50"
                        >
                          {spice}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-4">Allergies & Ingredients to Avoid</h3>
                  <textarea 
                    className="input"
                    rows={3}
                    placeholder="e.g., nuts, dairy, shellfish"
                  ></textarea>
                </div>
                
                <button className="btn-primary mt-6">
                  Save Preferences
                </button>
              </div>
            </div>
          </div>
        );
      
      case 'settings':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6">Account Settings</h2>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-4">Notifications</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Order Updates</p>
                      <p className="text-sm text-gray-500">Receive notifications about your order status</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                    </label>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Special Offers</p>
                      <p className="text-sm text-gray-500">Receive notifications about discounts and promotions</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                    </label>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">New Menu Items</p>
                      <p className="text-sm text-gray-500">Get notified when we add new items to our menu</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-4">Account Actions</h3>
                
                <button className="w-full btn border border-red-500 bg-white text-red-500 hover:bg-red-50 mb-3">
                  Deactivate Account
                </button>
                
                <button className="w-full btn border border-red-700 bg-white text-red-700 hover:bg-red-50">
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };
  
  const tabs = [
    { id: 'profile', label: 'Profile', icon: <User size={20} /> },
    { id: 'orders', label: 'Orders', icon: <Package size={20} /> },
    { id: 'subscription', label: 'Subscription', icon: <Clock size={20} /> },
    { id: 'settings', label: 'Settings', icon: <Bell size={20} /> }
  ];
  
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">My Account</h1>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="md:w-1/4">
            <div className="bg-white rounded-xl shadow-md overflow-hidden sticky top-24">
              <div className="p-6 border-b">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
                    {user.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold">{user.name}</p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                </div>
              </div>
              
              <nav className="p-4">
                <ul className="space-y-1">
                  {tabs.map(tab => (
                    <li key={tab.id}>
                      <button
                        onClick={() => setActiveTab(tab.id)}
                        className={`
                          w-full flex items-center p-3 rounded-lg transition
                          ${activeTab === tab.id 
                            ? 'bg-orange-50 text-orange-600 font-medium' 
                            : 'text-gray-700 hover:bg-gray-100'
                          }
                        `}
                      >
                        <span className="mr-3">{tab.icon}</span>
                        {tab.label}
                      </button>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4 mt-4 border-t">
                  <button className="w-full flex items-center p-3 rounded-lg text-gray-700 hover:bg-gray-100 transition">
                    <LogOut size={20} className="mr-3" />
                    Logout
                  </button>
                </div>
              </nav>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="md:w-3/4">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;