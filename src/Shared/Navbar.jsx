import React, { useState } from "react";
import ThemeToggleButton from "./ThemeToggleButton";
import { Menu, X, MapPin, Calendar, User } from "lucide-react";
import { Link, useLocation } from "react-router";
import { motion } from "framer-motion";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: MapPin },
    { name: "Rooms", path: "/rooms", icon: Calendar },
    { name: "My Bookings", path: "/bookings", icon: User },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white/95 dark:bg-gray-700 backdrop-blur-md shadow-lg sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 gap-x-2">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-[#2563EB] to-[#1E3A8A] rounded-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white dark:text-amber-50" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-[#2563EB]  dark:from-amber-50  bg-clip-text text-transparent">
              LuxeStay
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <ThemeToggleButton />
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                    location.pathname === item.path
                      ? "bg-[#EFF6FF] dark:bg-amber-50 text-[#2563EB]"
                      : "text-gray-700 dark:text-amber-50 hover:text-gray-700 hover:bg-gray-50 "
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
            <Link to="/login">
              <button className="px-4  py-2 text-white rounded-md bg-gradient-to-r from-[var(--primary)] to-[#1D4ED8] hover:from-[#1D4ED8] hover:to-[var(--primary)] transition duration-300">
                Login
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <ThemeToggleButton />
            <button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="w-6 h-6 cursor-pointer" />
              ) : (
                <Menu className="w-6 h-6 cursor-pointer" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0
                
             }}
            transition={{ duration: 0.2 }}
            className="lg:hidden "
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-800">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                      location.pathname === item.path
                        ? "bg-[#EFF6FF] dark:bg-amber-50 text-[#2563EB]"
                        : "text-gray-700 dark:text-amber-50 hover:text-gray-700 hover:bg-gray-50 "
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              <Link to="/login" onClick={() => setIsOpen(false)}>
                <button className="w-full p-3 cursor-pointer mt-2 bg-gradient-to-r from-[var(--primary)] to-[#1D4ED8] hover:from-[#1D4ED8] hover:to-[var(--primary)] transition duration-300">
                  Login
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
