import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center mb-4">
              <div className="text-orange-500 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 11h.01" />
                  <path d="M11 15h.01" />
                  <path d="M16 16h.01" />
                  <path d="M2 16l2 3h16l2-3" />
                  <path d="M20 16c0-5-4-9-9-9h-2" />
                  <path d="M5 8l0 2" />
                  <path d="M3 7l0 3" />
                </svg>
              </div>
              <span className="text-xl font-bold text-white">TiffinTime</span>
            </div>
            <p className="mb-6 opacity-80">
              Delivering homestyle meals and tiffins right to your doorstep. Fresh, delicious, and just like mom makes it.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition duration-200">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="opacity-80 hover:opacity-100 hover:text-orange-400 transition duration-200">Home</Link></li>
              <li><Link to="/menu" className="opacity-80 hover:opacity-100 hover:text-orange-400 transition duration-200">Menu</Link></li>
              <li><Link to="/cart" className="opacity-80 hover:opacity-100 hover:text-orange-400 transition duration-200">Cart</Link></li>
              <li><Link to="/profile" className="opacity-80 hover:opacity-100 hover:text-orange-400 transition duration-200">My Account</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-orange-400" />
                <span className="opacity-80">123 Food Street, Mumbai, Maharashtra - 400001</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-orange-400" />
                <span className="opacity-80">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-orange-400" />
                <span className="opacity-80">hello@tiffintime.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Newsletter</h3>
            <p className="mb-4 opacity-80">Subscribe to receive updates on new menu items and promotions.</p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button type="submit" className="btn-primary w-full">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-sm opacity-70 text-center">
          <p>&copy; {new Date().getFullYear()} TiffinTime. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;