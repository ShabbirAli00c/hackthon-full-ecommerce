
export default function Contact() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-primary">Get In Touch With Us</h2>
        <p className="mt-4 text-gray-500">
          For more information about our products & services, please feel free
          to drop us an email. Our staff is always here to help you out. Do not
          hesitate!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8 text-gray-700">
          <div className="flex items-start space-x-4">
            <span className="text-2xl text-primary">📍</span>
            <div>
              <h3 className="font-semibold">Address</h3>
              <p>236 5th SE Avenue, New York NY10000, United States</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <span className="text-2xl text-primary">📞</span>
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p>Mobile: + (84) 546-6789</p>
              <p>Hotline: + (84) 456-6789</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <span className="text-2xl text-primary">⏰</span>
            <div>
              <h3 className="font-semibold">Working Time</h3>
              <p>Monday–Friday: 9:00–22:00</p>
              <p>Saturday–Sunday: 9:00–21:00</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Abc"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Abc@def.com"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="This is optional"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Hi! I'd like to ask about..."
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
