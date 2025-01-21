const Footer = () => {
  return (
    <footer>
      {/* Instagram Section */}
      <div className="bg-gray-100 text-center py-12">
        <h2 className="text-2xl font-bold mb-3">Our Instagram</h2>
        <p className="text-gray-600 mb-6">Follow our store on Instagram</p>
        <button className="bg-black text-white py-2 px-6 rounded-full hover:bg-gray-800">
          Follow Us
        </button>
      </div>

      {/* Footer Links Section */}
      <div className="bg-white py-8 border-t border-gray-300">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {/* Address */}
          <div>
            <p className="text-gray-600">
              400 University Drive Suite 200 Coral Gables, <br />
              FL 33134 USA
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links</h4>
            <ul>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Help</h4>
            <ul>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Payment Options
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Privacy Policies
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <form>
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="w-full mb-4 px-4 py-2 border border-gray-300 rounded"
              />
              <button
                type="submit"
                className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-gray-100 text-center py-4">
        <p className="text-gray-600 text-sm">
          2022 Meubel House. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
