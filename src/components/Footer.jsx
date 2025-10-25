import React from 'react';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-emerald-600 p-2 rounded-lg">
                <Heart className="text-white" size={20} fill="white" />
              </div>
              <span className="text-xl font-bold text-white">HopeConnect</span>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering communities through meaningful volunteer work. Together, we create lasting change and build a better future for all.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-emerald-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="/events" className="hover:text-emerald-400 transition-colors">Events</a>
              </li>
              <li>
                <a href="/my-volunteering" className="hover:text-emerald-400 transition-colors">My Volunteering</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Mail size={18} className="text-emerald-500 mt-0.5" />
                <span className="text-sm">info@hopeconnect.org</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone size={18} className="text-emerald-500 mt-0.5" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="text-emerald-500 mt-0.5" />
                <span className="text-sm">123 Hope Street, City, State 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} HopeConnect. All rights reserved. Making the world a better place, one volunteer at a time.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
