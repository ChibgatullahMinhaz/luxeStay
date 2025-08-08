import React, { useState } from "react";
import ThemeToggleButton from "./ThemeToggleButton";
import { Menu, X, MapPin, Calendar, User,Info  } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router";
import { motion } from "framer-motion";
import useAuth from "../Hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../Service/Firebase.init";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
const Navbar = () => {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const navItems = [
    { name: "Home", path: "/", icon: MapPin },
    { name: "Rooms", path: "/rooms", icon: Calendar },
    { name: "My Bookings", path: "/bookings", icon: User },
    { name: "About", path: "/about", icon: Info  },
  ];
  const handleLogout = async () => {
    signOut(auth)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Logout successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="shadow-lg bg-white/95 dark:bg-gray-700 backdrop-blur-md"
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-x-2">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-[#2563EB] to-[#1E3A8A] rounded-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white dark:text-amber-50" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-[#2563EB]  dark:from-amber-50  bg-clip-text text-transparent">
              LuxeStay
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="items-center justify-between hidden space-x-8 lg:flex">
            <ThemeToggleButton />
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex justify-around items-center  px-3 py-2 rounded-lg transition-all duration-200 ${
                    location.pathname === item.path
                      ? "bg-[#EFF6FF] dark:bg-amber-50 text-[#2563EB]"
                      : "text-gray-700 dark:text-amber-50 hover:text-gray-700 hover:bg-gray-50 "
                  }`}
                >
                  <Icon className="w-4 h-4 ml-1" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
            {user ? (
              <button
                onClick={handleLogout}
                className="w-full p-3 cursor-pointer rounded-lg mt-2 bg-gradient-to-r from-[var(--primary)] to-[#1D4ED8] hover:from-[#1D4ED8] hover:to-[var(--primary)] transition duration-300"
              >
                Logout
              </button>
            ) : (
              <Link to="/login" onClick={() => setIsOpen(false)}>
                <button className="w-full p-3 rounded-lg cursor-pointer mt-2 bg-gradient-to-r from-[var(--primary)] to-[#1D4ED8] hover:from-[#1D4ED8] hover:to-[var(--primary)] transition duration-300">
                  Login
                </button>
              </Link>
            )}
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
            exit={{ opacity: 0, height: 0 }}
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
              {user ? (
                <button
                  onClick={handleLogout}
                  className="w-full p-3 cursor-pointer mt-2 bg-gradient-to-r from-[var(--primary)] to-[#1D4ED8] hover:from-[#1D4ED8] hover:to-[var(--primary)] transition duration-300"
                >
                  Logout
                </button>
              ) : (
                <Link to="/login" onClick={() => setIsOpen(false)}>
                  <button className="w-full p-3 cursor-pointer mt-2 bg-gradient-to-r from-[var(--primary)] to-[#1D4ED8] hover:from-[#1D4ED8] hover:to-[var(--primary)] transition duration-300">
                    Login
                  </button>
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
