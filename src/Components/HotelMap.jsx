import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for broken default icons (important)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});
const HotelMap = () => {
  const position = [23.8103, 90.4125];
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
            Find{" "}
            <span className="bg-gradient-to-r from-[#2563EB]  dark:text-gray-200 to-[#1E3A8A] bg-clip-text text-transparent">
              Us
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-200 max-w-2xl mx-auto">
            Located in the heart of the city with easy access to major
            attractions and business districts
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
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Hotel Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#DBEAFE] dark:bg-transparent p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-[#2563EB] dark:text-gray-200" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-200">
                      Address
                    </h4>
                    <p className="text-gray-600 dark:text-green-300">
                      123 Luxury Avenue, Downtown City, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#DBEAFE] dark:bg-transparent p-3 rounded-full">
                    <Phone className="w-6 h-6 text-[#2563EB] dark:text-gray-200" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-200">
                      Phone
                    </h4>
                    <p className="text-gray-600 dark:text-green-300">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#DBEAFE] dark:bg-transparent p-3 rounded-full">
                    <Mail className="w-6 h-6 text-[#2563EB] dark:text-gray-200" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-200">
                      Email
                    </h4>
                    <p className="text-gray-600 dark:text-green-300">
                      info@luxestay.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#DBEAFE] dark:bg-transparent p-3 rounded-full">
                    <Clock className="w-6 h-6 text-[#2563EB] dark:text-gray-200" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-200">
                      Check-in / Check-out
                    </h4>
                    <p className="text-gray-600 dark:text-green-300">
                      3:00 PM / 11:00 AM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gold-50 to-yellow-50 dark:bg-gray-800 dark:bg-none  p-6 rounded-xl">
              <h4 className="font-bold text-gray-900 dark:text-gray-200 mb-2">
                🌟 Prime Location Benefits
              </h4>
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
            <MapContainer
              center={position}
              zoom={13}
              scrollWheelZoom={false}
              style={{ height: "400px", width: "100%" }}
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>Dhaka City Center</Popup>
              </Marker>
            </MapContainer>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HotelMap;
