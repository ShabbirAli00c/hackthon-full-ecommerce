import React from 'react';
import { ArrowRight, ShoppingBag } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-yellow-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="bg-[#E1EDFF] text-[#0000FF] px-4 py-2 rounded-md font-medium">Sale 70%</span>
            <h1 className="text-5xl font-bold mt-6 mb-4 text-primary leading-tight">Rocket single<br></br>
            seater</h1>
            <p className="text-secondary mb-8 text-lg max-w-md">
              Transform your space with our curated collection of contemporary furniture pieces.
            </p>
            <button className="bg-button-primary text-white px-8 py-4 flex items-center space-x-2 hover:bg-primary transition-colors">
              <ShoppingBag className="h-5 w-5" />
              <span className="font-medium underline">Shop Now</span>
            </button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-[#FFECE3] rounded-full transform scale-125"></div>
            <img
              src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3"
              alt="Modern Interior"
              className="relative z-10 w-full h-[600px] object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Promotions Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <span className="text-sm text-blue-600 font-medium">PROMOTIONS</span>
          <h2 className="text-3xl font-bold text-primary mt-2">Special Offers</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="col-span-2 bg-[#D6D6D8] p-8 rounded-lg flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-primary">GET UP TO 60%</h3>
              <p className="text-lg text-secondary">On all furniture</p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-4.0.3"
              alt="Furniture Collection"
              className="h-48 object-cover rounded-lg"
            />
          </div>
          <div className="bg-primary text-white p-8 rounded-lg flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold mb-2">30% OFF</h3>
              <p className="text-lg">NEW ARRIVALS</p>
            </div>
            <button className="bg-[#474747] text-white px-6 py-2 rounded-md mt-4">
              Shop Now
            </button>
          </div>
          <div className="bg-[#EFE1C7] p-8 rounded-lg">
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">NEW COLLECTION</h3>
              <img
                src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?ixlib=rb-4.0.3"
                alt="New Collection"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <span className="text-sm text-blue-600 font-medium">FEATURED</span>
          <h2 className="text-3xl font-bold text-primary mt-2">Popular Right Now</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Modern Leather Sofa",
              price: "$1,299",
              image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3"
            },
            {
              title: "Velvet Accent Chair",
              price: "$445",
              image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3"
            },
            {
              title: "Wooden Dining Table",
              price: "$875",
              image: "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?ixlib=rb-4.0.3"
            },
            {
              title: "Glass Coffee Table",
              price: "$395",
              image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?ixlib=rb-4.0.3"
            }
          ].map((product, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl bg-[#F2F3F7]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-lg font-medium text-primary mt-4">{product.title}</h3>
              <p className="text-xl font-semibold text-primary">{product.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#FBFCFF] py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <ShoppingBag className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Free Shipping</h3>
              <p className="text-secondary">Free shipping on all orders</p>
            </div>
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <ShoppingBag className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Money Guarantee</h3>
              <p className="text-secondary">30 days money back</p>
            </div>
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <ShoppingBag className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">24/7 Support</h3>
              <p className="text-secondary">Friendly 24/7 support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}