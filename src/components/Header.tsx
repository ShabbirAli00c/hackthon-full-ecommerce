import React, { useState } from 'react';
import { ShoppingCart, Menu, Search, User, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { state } = useCart();
  const cartItemsCount = state.items.reduce((total, item) => total + item.quantity, 0);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Mobile Menu Toggle */}
          <div className="flex items-center">
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-primary" />
              ) : (
                <Menu className="h-6 w-6 text-primary" />
              )}
            </button>
            <Link to="/" className="text-2xl font-bold text-primary ml-4 md:ml-0">
              DINE MARKET
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-12">
            <Link to="/" className="text-primary hover:text-accent font-medium">
              Home
            </Link>
            <Link to="/products" className="text-primary hover:text-accent font-medium">
              Products
            </Link>
            <Link to="/about" className="text-primary hover:text-accent font-medium">
              About
            </Link>
            <Link to="/contact" className="text-primary hover:text-accent font-medium">
              Contact
            </Link>
          </nav>

          {/* Icons Section */}
          <div className="flex items-center space-x-6">
            <Search className="h-6 w-6 text-primary cursor-pointer" />
            <User className="h-6 w-6 text-primary cursor-pointer" />
            <div className="relative">
              <ShoppingCart className="h-6 w-6 text-primary cursor-pointer" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  {cartItemsCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col space-y-4 px-4 py-6">
            <li>
              <Link
                to="/"
                className="text-primary hover:text-accent font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="text-primary hover:text-accent font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-primary hover:text-accent font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-primary hover:text-accent font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
