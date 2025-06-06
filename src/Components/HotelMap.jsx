import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const HotelMap = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-amber-50 mb-4">
            Find <span className="bg-gradient-to-r from-[#2563EB]  dark:text-gray-200 to-[#1E3A8A] bg-clip-text text-transparent">Us</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-200 max-w-2xl mx-auto">
            Located in the heart of the city with easy access to major attractions and business districts
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-r from-primary-50 to-blue-50 dark:bg-gray-800 dark:bg-none p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Hotel Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#DBEAFE] dark:bg-transparent p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-[#2563EB] dark:text-gray-200" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-200">Address</h4>
                    <p className="text-gray-600 dark:text-green-300">123 Luxury Avenue, Downtown City, NY 10001</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#DBEAFE] dark:bg-transparent p-3 rounded-full">
                    <Phone className="w-6 h-6 text-[#2563EB] dark:text-gray-200" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-200">Phone</h4>
                    <p className="text-gray-600 dark:text-green-300">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#DBEAFE] dark:bg-transparent p-3 rounded-full">
                    <Mail className="w-6 h-6 text-[#2563EB] dark:text-gray-200" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-200">Email</h4>
                    <p className="text-gray-600 dark:text-green-300">info@luxestay.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#DBEAFE] dark:bg-transparent p-3 rounded-full">
                    <Clock className="w-6 h-6 text-[#2563EB] dark:text-gray-200" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-200">Check-in / Check-out</h4>
                    <p className="text-gray-600 dark:text-green-300">3:00 PM / 11:00 AM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gold-50 to-yellow-50 dark:bg-gray-800 dark:bg-none  p-6 rounded-xl">
              <h4 className="font-bold text-gray-900 dark:text-gray-200 mb-2">🌟 Prime Location Benefits</h4>
              <ul className="text-gray-600 dark:text-green-300 space-y-1">
                <li>• 5 minutes walk to Central Station</li>
                <li>• 2 blocks from shopping district</li>
                <li>• Walking distance to major attractions</li>
                <li>• Easy airport access via express train</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.03481985154!2d-74.30932777647464!3d40.69753995303451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1703234567890!5m2!1sen!2sbd"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-96"
              ></iframe>
            </div>
            
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-gray-900">LuxeStay Hotel</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HotelMap;