import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white text-primary pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="max-w-xs">
            <h3 className="text-2xl font-bold mb-6">DINE MARKET</h3>
            <p className="text-secondary mb-6">
              Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-[#F1F1F1] p-2 rounded-lg hover:bg-gray-200 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-[#F1F1F1] p-2 rounded-lg hover:bg-gray-200 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-[#F1F1F1] p-2 rounded-lg hover:bg-gray-200 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-secondary">
              <li className="hover:text-primary cursor-pointer">About</li>
              <li className="hover:text-primary cursor-pointer">Terms of Use</li>
              <li className="hover:text-primary cursor-pointer">Privacy Policy</li>
              <li className="hover:text-primary cursor-pointer">How it Works</li>
              <li className="hover:text-primary cursor-pointer">Contact Us</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Support</h4>
            <ul className="space-y-4 text-secondary">
              <li className="hover:text-primary cursor-pointer">Support Carrer</li>
              <li className="hover:text-primary cursor-pointer">24h Service</li>
              <li className="hover:text-primary cursor-pointer">Quick Chat</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-secondary">
              <li className="hover:text-primary cursor-pointer">Whatsapp</li>
              <li className="hover:text-primary cursor-pointer">Support 24h</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-secondary">
          <p>© 2024 DINE Market. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Designed by <span className="font-medium text-primary">Shabbir Ali</span></p>
        </div>
      </div>
    </footer>
  );
}