
import { Twitter, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 p-10" id="contact">
      <div className="max-w-screen-xl mx-auto space-y-8 lg:space-y-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* About Section */}
        <div className="hidden lg:block">
          <h2 className="text-myRed text-lg font-semibold mb-4">About DoniaSweets</h2>
          <p className="text-gray-600">
            DoniaSweets brings you the finest selection of sweets for every occasion. We take pride in our quality and customer satisfaction.
          </p>
        </div>
        
        {/* Quick Links Section */}
        <div className="hidden lg:block">
          <h2 className="text-myRed text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-gray-600">
            <li><a href="/" className="hover:text-myRed transition-colors duration-200">Home</a></li>
            <li><a href="#cakes" className="hover:text-myRed transition-colors duration-200">Cake Gallery</a></li>
           
          </ul>
        </div>

        {/* Contact Information Section */}
        <div className="hidden md:block lg:block">
          <h2 className="text-myRed text-lg font-semibold mb-4">Contact Information</h2>
          <p className="text-gray-600 mb-2">123 Sweet St, Flavor Town</p>
          <p className="text-gray-600 mb-2">Email: contact@doniasweets.com</p>
          <p className="text-gray-600 mb-2">Phone: (123) 456-7890</p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter className="h-6 w-6 text-myRed hover:text-gray-700 transition-colors duration-200" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook className="h-6 w-6 text-myRed hover:text-gray-700 transition-colors duration-200" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="h-6 w-6 text-myRed hover:text-gray-700 transition-colors duration-200" />
            </a>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="lg:block max-w-md mx-auto w-full md:w-3/4 lg:w-full">
          <h2 className="text-myRed text-lg font-semibold mb-4">Newsletter</h2>
          <p className="text-gray-600 mb-4">Subscribe to our newsletter to stay updated on our latest offers and treats!</p>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-myRed"
              required
            />
            <button type="submit" className="bg-myRed text-white py-2 rounded-md hover:bg-gray-700 transition-colors duration-200">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Only show Contact Form and Social Icons below 640px */}
      <div className="block md:hidden text-center space-y-8 mt-8">
        {/* Social Icons */}
        <div className="flex justify-center space-x-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <Twitter className="h-6 w-6 text-myRed hover:text-gray-700 transition-colors duration-200" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <Facebook className="h-6 w-6 text-myRed hover:text-gray-700 transition-colors duration-200" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram className="h-6 w-6 text-myRed hover:text-gray-700 transition-colors duration-200" />
          </a>
        </div>

        {/* Contact Form */}
        <div className="max-w-md mx-auto w-full md:w-3/4 lg:w-full">
          <h2 className="text-center text-xl text-myRed mb-4">Contact Us</h2>
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-myRed"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-myRed"
              required
            />
            <textarea
              placeholder="Your Message"
              className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-myRed"
              rows={4}
              required
            />
            <button type="submit" className="bg-myRed text-white py-2 rounded-md hover:bg-gray-700 transition-colors duration-200">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 my-8"></div>

      {/* Bottom Footer */}
      <div className="text-center">
        <h1 className="text-lg text-myRed mb-4">Made by Donia Batool</h1>
        <p className="text-gray-500">&copy; {new Date().getFullYear()} Donia Batool. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
