import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, User, Menu, X } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { cartItems } = useCart();
  
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <div className="text-orange-500 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 11h.01" />
                <path d="M11 15h.01" />
                <path d="M16 16h.01" />
                <path d="M2 16l2 3h16l2-3" />
                <path d="M20 16c0-5-4-9-9-9h-2" />
                <path d="M5 8l0 2" />
                <path d="M3 7l0 3" />
              </svg>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">TiffinTime</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/" label="Home" currentPath={location.pathname} />
            <NavLink to="/menu" label="Menu" currentPath={location.pathname} />
            <NavLink to="/profile" label="Profile" currentPath={location.pathname} />
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/profile" className="text-gray-700 hover:text-orange-500 transition">
              <User size={24} />
            </Link>
            <Link to="/cart" className="relative text-gray-700 hover:text-orange-500 transition">
              <ShoppingBag size={24} />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 hover:text-orange-500 transition"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-5 space-y-4">
            <MobileNavLink to="/" label="Home" onClick={() => setIsMobileMenuOpen(false)} />
            <MobileNavLink to="/menu" label="Menu" onClick={() => setIsMobileMenuOpen(false)} />
            <MobileNavLink to="/cart" label="Cart" count={cartItemCount} onClick={() => setIsMobileMenuOpen(false)} />
            <MobileNavLink to="/profile" label="Profile" onClick={() => setIsMobileMenuOpen(false)} />
          </div>
        </div>
      )}
    </header>
  );
};

interface NavLinkProps {
  to: string;
  label: string;
  currentPath: string;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label, currentPath }) => {
  const isActive = currentPath === to || (to !== '/' && currentPath.startsWith(to));
  
  return (
    <Link
      to={to}
      className={`font-medium transition-colors duration-200 hover:text-orange-500 ${
        isActive ? 'text-orange-500' : 'text-gray-700'
      }`}
    >
      {label}
    </Link>
  );
};

interface MobileNavLinkProps {
  to: string;
  label: string;
  count?: number;
  onClick: () => void;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ to, label, count, onClick }) => {
  return (
    <Link
      to={to}
      className="flex items-center justify-between py-2 text-lg font-medium text-gray-700"
      onClick={onClick}
    >
      <span>{label}</span>
      {count && count > 0 && (
        <span className="bg-orange-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
          {count}
        </span>
      )}
    </Link>
  );
};

export default Header;