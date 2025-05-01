import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../../components/Header';
import { CartProvider } from '../../contexts/CartContext';

// Mock the CartContext
jest.mock('../../contexts/CartContext', () => ({
  useCart: () => ({
    cartItems: [],
  }),
  CartProvider: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

describe('Header Component', () => {
  const renderHeader = () => {
    return render(
      <BrowserRouter>
        <CartProvider>
          <Header />
        </CartProvider>
      </BrowserRouter>
    );
  };

  test('renders logo text', () => {
    renderHeader();
    expect(screen.getByText('TiffinTime')).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    renderHeader();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Menu')).toBeInTheDocument();
    expect(screen.getByText('Profile')).toBeInTheDocument();
  });
}); 