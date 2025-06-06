import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, MapPin } from 'lucide-react';
import { Link } from 'react-router';

const slides = [
  {
    id: 1,
    title: "Luxury Awaits You",
    description: "Experience unparalleled comfort in our premium rooms with breathtaking city views",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070",
    cta: "Explore Rooms"
  },
  {
    id: 2,
    title: "Unmatched Hospitality",
    description: "From elegant suites to cozy rooms, find your perfect getaway destination",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070",
    cta: "Book Now"
  },
  {
    id: 3,
    title: "Your Dream Vacation",
    description: "Create unforgettable memories in our world-class hotel facilities",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080",
    cta: "Discover More"
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center text-white max-w-4xl mx-auto px-4">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="flex items-center justify-center mb-4"
              >
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="ml-2 text-lg">5-Star Luxury Hotel</span>
              </motion.div>

              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              >
                {slides[currentSlide].title}
              </motion.h1>

              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto"
              >
                {slides[currentSlide].description}
              </motion.p>

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link to="/rooms">
                  <button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-lg px-8 py-3">
                    {slides[currentSlide].cta}
                  </button>
                </Link>
                <button 
                  size="lg" 
                  variant="outline" 
                  className="border-white flex items-center text-white hover:bg-white hover:text-black text-lg px-8 py-3 bg-white/10 backdrop-blur-sm"
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  View Location
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
