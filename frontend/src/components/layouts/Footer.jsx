import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-footer-linear text-gray-300 pt-12 pb-6">
      {/* Social Icons */}
      <div className="container mx-auto px-4 flex justify-center gap-6 mb-8">
        <a href="#" className="bg-white rounded-full p-2 w-10 h-10 flex items-center justify-center">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
          </svg>
        </a>
        <a href="#" className="bg-white rounded-full p-2 w-10 h-10 flex items-center justify-center">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.5 18.75c-.584.073-1.17.12-1.76.12-3.312 0-6-2.688-6-6s2.688-6 6-6c.59 0 1.176.047 1.76.12.484.063.904.27 1.24.606.336.336.543.756.606 1.24.073.584.12 1.17.12 1.76 0 3.312-2.688 6-6 6zm-4.5-6c0 2.485 2.015 4.5 4.5 4.5s4.5-2.015 4.5-4.5-2.015-4.5-4.5-4.5-4.5 2.015-4.5 4.5z"/>
          </svg>
        </a>
        <a href="#" className="bg-white rounded-full p-2 w-10 h-10 flex items-center justify-center">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>
        </a>
        <a href="#" className="bg-white rounded-full p-2 w-10 h-10 flex items-center justify-center">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
          </svg>
        </a>
        <a href="#" className="bg-white rounded-full p-2 w-10 h-10 flex items-center justify-center">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0a12 12 0 0 0-3.801 23.388c.6.114.819-.258.819-.577l-.012-2.086c-3.338.711-4.042-1.582-4.042-1.582a3.199 3.199 0 0 0-1.365-1.772c-1.087-.731.084-.716.084-.716a2.5 2.5 0 0 1 1.838 1.236 2.5 2.5 0 0 0 3.444.97A2.5 2.5 0 0 1 9.7 17.66c-2.665-.3-5.466-1.332-5.466-5.93A4.634 4.634 0 0 1 5.497 8.3a4.267 4.267 0 0 1 .116-3.167s1.008-.322 3.3 1.23a11.318 11.318 0 0 1 6 0c2.29-1.552 3.298-1.23 3.298-1.23a4.267 4.267 0 0 1 .116 3.167 4.634 4.634 0 0 1 1.263 3.43c0 4.6-2.801 5.63-5.466 5.93.362.312.675.912.675 1.846l-.012 2.748c0 .319.219.694.825.577A12 12 0 0 0 12 0z"/>
          </svg>
        </a>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="col-span-1">
            <h2 className="text-2xl font-semibold mb-4">
              <span className="text-pink-400">Bloom</span> Beauty
            </h2>
            <p className="text-sm mb-4 text-white">
              Discover nature's beauty with our natural care products.
            </p>
            <div className="space-y-2 text-sm text-white">
              <p className="flex items-center gap-2">
                <Phone size={16} className="text-pink-400" />
                +254 722556093
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} className="text-pink-400" />
                bloombeauty@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={16} className="text-pink-400" />
                Nairobi, kenya
              </p>
            </div>
          </div>

          {/* HELP Section */}
          <div className="col-span-1">
            <h3 className="text-base font-medium text-[#B0A6BD] mb-4">HELP</h3>
            <ul className="space-y-2 text-white">
              <li><a href="#" className="hover:text-pink-400">Contact us</a></li>
              <li><a href="/about" className="hover:text-pink-400">FAQ</a></li>
              <li><a href="#" className="hover:text-pink-400">Shipping & Returns</a></li>
            </ul>
          </div>

          {/* MY ACCOUNT Section */}
          <div className="col-span-1">
            <h3 className="text-base font-medium text-[#B0A6BD] mb-4">MY ACCOUNT</h3>
            <ul className="space-y-2 text-white">
              <li><a href="#" className="hover:text-pink-400">Addresses</a></li>
              <li><a href="#" className="hover:text-pink-400">Order Status</a></li>
              <li><a href="#" className="hover:text-pink-400">Wishlist</a></li>
            </ul>
          </div>

          {/* CUSTOMER CARE Section */}
          <div className="col-span-1">
            <h3 className="text-base font-medium text-[#B0A6BD] mb-4">CUSTOMER CARE</h3>
            <ul className="space-y-2 text-white">
              <li><a href="#" className="hover:text-pink-400">About us</a></li>
              <li><a href="#" className="hover:text-pink-400">Blog</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="col-span-1">
            <h3 className="text-base font-medium text-[#B0A6BD] mb-4">SIGN UP FOR EMAILS</h3>
            <p className="text-sm text-white mb-4">Stay informed, subscribe to our newsletter now!</p>
            <div className="flex flex-col gap-[10px] items-center">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 bg-white rounded-[4px] focus:outline-none text-gray-900"
              />
              <button className="bg-transparent text-[#B0A6BD] text-start w-full">
                Subscribe →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t text-[#B0A6BD] border-[#B0A6BD] mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm ">
          <p>© {currentYear} Bloom Beauty</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-pink-400">Privacy Policy</a>
            <a href="#" className="hover:text-pink-400">Terms And Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;