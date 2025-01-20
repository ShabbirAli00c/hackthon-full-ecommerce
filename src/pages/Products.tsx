import React from 'react';
import { Filter } from 'lucide-react';
import ProductCard from '../components/ProductCard';

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Modern Leather Sofa",
      price: "$1,299.00",
      category: "Sofa",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3"
    },
    {
      id: 2,
      name: "Velvet Accent Chair",
      price: "$445.00",
      category: "Chair",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3"
    },
    {
      id: 3,
      name: "Wooden Dining Table",
      price: "$875.00",
      category: "Table",
      image: "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?ixlib=rb-4.0.3"
    },
    {
      id: 4,
      name: "Mid-Century Sofa",
      price: "$1,175.00",
      category: "Sofa",
      image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3"
    },
    {
      id: 5,
      name: "Modern Coffee Table",
      price: "$395.00",
      category: "Table",
      image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?ixlib=rb-4.0.3"
    },
    {
      id: 6,
      name: "Ergonomic Office Chair",
      price: "$550.00",
      category: "Chair",
      image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?ixlib=rb-4.0.3"
    },
    {
      id: 7,
      name: "Sectional Corner Sofa",
      price: "$2,150.00",
      category: "Sofa",
      image: "https://images.unsplash.com/photo-1550254478-ead40cc54513?ixlib=rb-4.0.3"
    },
    {
      id: 8,
      name: "Glass Dining Table",
      price: "$995.00",
      category: "Table",
      image: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?ixlib=rb-4.0.3"
    },
    {
      id: 9,
      name: "Rocking Armchair",
      price: "$475.00",
      category: "Chair",
      image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?ixlib=rb-4.0.3"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex justify-between items-center mb-12">
        <div>
          <h1 className="text-4xl font-bold text-primary mb-2">Our Furniture</h1>
          <p className="text-secondary">Explore our curated collection of premium furniture</p>
        </div>
        <button className="flex items-center space-x-2 px-6 py-3 border-2 border-primary rounded-lg hover:bg-primary hover:text-white transition-colors">
          <Filter className="h-5 w-5" />
          <span className="font-medium">Filters</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}