import { Link } from "react-router";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Star,
  Heart,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-50 to-blue-100 dark:bg-gray-900 dark:text-gray-300 dark:bg-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 dark:text-white text-[#2563EB]" />
              </div>
              <span className="text-2xl font-bold dark:text-white text-[#2563EB]">LuxeStay</span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Experience luxury hospitality at its finest. We create
              unforgettable moments with exceptional service and world-class
              amenities.
            </p>
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-gold-400 fill-current" />
              ))}
              <span className="ml-2 text-sm">5-Star Luxury Hotel</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="hover:text-primary-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/rooms"
                  className="hover:text-primary-400 transition-colors"
                >
                  Rooms & Suites
                </Link>
              </li>
              <li>
                <Link
                  to="/bookings"
                  className="hover:text-primary-400 transition-colors"
                >
                  My Bookings
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-primary-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-primary-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="hover:text-primary-400 transition-colors"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold dark:text-white mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <span className="hover:text-primary-400 transition-colors cursor-pointer">
                  Room Service
                </span>
              </li>
              <li>
                <span className="hover:text-primary-400 transition-colors cursor-pointer">
                  Spa & Wellness
                </span>
              </li>
              <li>
                <span className="hover:text-primary-400 transition-colors cursor-pointer">
                  Fine Dining
                </span>
              </li>
              <li>
                <span className="hover:text-primary-400 transition-colors cursor-pointer">
                  Event Planning
                </span>
              </li>
              <li>
                <span className="hover:text-primary-400 transition-colors cursor-pointer">
                  Airport Transfer
                </span>
              </li>
              <li>
                <span className="hover:text-primary-400 transition-colors cursor-pointer">
                  Concierge
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold dark:text-white mb-4">
              Contact Info
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <span className="text-sm">
                  123 Luxury Avenue
                  <br />
                  Downtown City, NY 10001
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <span className="text-sm">info@luxestay.com</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="dark:text-white font-medium mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-8 h-8 dark:bg-gray-800 hover:bg-[#2563EB] hover:text-white rounded-full flex items-center justify-center transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 dark:bg-gray-800 hover:bg-[#2563EB] hover:text-white rounded-full flex items-center justify-center transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 dark:bg-gray-800 hover:bg-[#2563EB] hover:text-white rounded-full flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 dark:bg-gray-800 hover:bg-[#2563EB] hover:text-white rounded-full flex items-center justify-center transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} LuxeStay Hotel. All rights reserved.
            </div>
            <div className="flex items-center space-x-1 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>for exceptional hospitality</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
