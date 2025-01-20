import React from 'react';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  id: number;
  name: string;
  price: string;
  category: string;
  image: string;
}

export default function ProductCard({ id, name, price, category, image }: ProductCardProps) {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { id, name, price, image },
    });
  };

  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-xl bg-[#F2F3F7]">
        <img
          src={image}
          alt={name}
          className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button
            onClick={handleAddToCart}
            className="bg-white text-primary px-8 py-3 rounded-full font-medium transform -translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary hover:text-white"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className="mt-4">
        <span className="text-sm text-secondary">{category}</span>
        <h3 className="text-lg font-medium text-primary mt-1">{name}</h3>
        <p className="text-xl font-semibold text-primary mt-1">{price}</p>
      </div>
    </div>
  );
}