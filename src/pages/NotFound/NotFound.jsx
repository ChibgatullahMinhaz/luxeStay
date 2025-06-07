import { useLocation } from "react-router";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import Lottie from "lottie-react";
import notFoundGif from '../../assets/notFoundGif.json'
const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EFF6FF] via-white to-blue-50 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* 404 Animation */}
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
            className="mb-8"
          >
             <Lottie animationData={notFoundGif} loop={true} />
          </motion.div>


          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            Oops! Room Not Found
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-xl text-gray-600 mb-8 leading-relaxed"
          >
            It seems like you've wandered into an area of our hotel that doesn't
            exist. Don't worry, our concierge is here to help you find your way
            back!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/">
              <button className="w-full sm:w-sm justify-center text-lg px-8 py-3 flex items-center bg-gradient-to-r from-[var(--primary)] to-[#1D4ED8] hover:from-[#1D4ED8] hover:to-[var(--primary)] transition-all duration-200 cursor-pointer rounded">
                <Home className="w-5 h-5 mr-2" />
                Back to Home
              </button>
            </Link>

            <button
              onClick={() => window.history.back()}
              className="w-full sm:max-w-sm justify-center text-lg px-8 py-3 flex items-center bg-gradient-to-r from-[var(--primary)] to-[#1D4ED8] hover:from-[#1D4ED8] hover:to-[var(--primary)] transition-all duration-200 cursor-pointer rounded"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-12 p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-primary-100"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Need Assistance?
            </h3>
            <p className="text-gray-600 mb-4">
              Our 24/7 concierge team is always ready to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center text-sm text-gray-600">
              <span>📞 +1 (555) 123-4567</span>
              <span className="hidden sm:inline">|</span>
              <span>✉️ info@luxestay.com</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
