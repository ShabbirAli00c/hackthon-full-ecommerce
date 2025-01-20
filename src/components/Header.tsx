import React from 'react';
import { ShoppingCart, Menu, Search, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { state } = useCart();
  const cartItemsCount = state.items.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Menu className="h-6 w-6 mr-4 cursor-pointer md:hidden" />
            <Link to="/" className="text-2xl font-bold text-primary">
              DINE MARKET
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-12">
            <Link to="/" className="text-primary hover:text-accent font-medium">Home</Link>
            <Link to="/products" className="text-primary hover:text-accent font-medium">Products</Link>
            <Link to="/about" className="text-primary hover:text-accent font-medium">About</Link>
            <Link to="/contact" className="text-primary hover:text-accent font-medium">Contact</Link>
          </nav>

          <div className="flex items-center space-x-6">
            <Search className="h-6 w-6 text-primary cursor-pointer" />
            <User className="h-6 w-6 text-primary cursor-pointer" />
            <div className="relative">
              <ShoppingCart className="h-6 w-6 text-primary cursor-pointer" />
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                {cartItemsCount}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}