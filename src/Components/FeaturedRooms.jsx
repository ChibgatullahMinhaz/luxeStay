import { motion } from 'framer-motion';
import { Link } from 'react-router';

const featuredRooms = [
  {
    id: 1,
    name: "Presidential Suite",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070",
    price: 299,
    rating: 4.9,
    reviews: 124,
    guests: 4,
    features: ["King Bed", "City View", "Balcony", "Jacuzzi"],
amenities: ["wifi", "directions_car", "local_cafe", "tv"]
  },
  {
    id: 2,
    name: "Deluxe Ocean View",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070",
    price: 199,
    rating: 4.8,
    reviews: 89,
    guests: 2,
    features: ["Queen Bed", "Ocean View", "Private Bathroom"],
    amenities: ["wifi", "local_cafe", "tv"]
  },
  {
    id: 3,
    name: "Executive Business Suite",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080",
    price: 249,
    rating: 4.7,
    reviews: 156,
    guests: 3,
    features: ["King Bed", "Work Desk", "Meeting Area"],
    amenities: ["wifi","directions_car", "local_cafe"]
  },
  {
    id: 4,
    name: "Romantic Honeymoon Suite",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070",
    price: 279,
    rating: 4.9,
    reviews: 67,
    guests: 2,
    features: ["King Bed", "Rose Petals", "Champagne", "Spa Access"],
    amenities: ["wifi", "coffee", "tv"]
  },
  {
    id: 5,
    name: "Family Adventure Room",
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2070",
    price: 179,
    rating: 4.6,
    reviews: 203,
    guests: 6,
    features: ["Bunk Beds", "Game Area", "Mini Fridge"],
    amenities: ["wifi", "tv"]
  },
  {
    id: 6,
    name: "Zen Garden Suite",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2074",
    price: 219,
    rating: 4.8,
    reviews: 91,
    guests: 2,
    features: ["Garden View", "Meditation Area", "Aromatherapy"],
    amenities: ["wifi", "coffee"]
  }
];

const FeaturedRooms = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50  to-white dark:bg-gray-700 dark:bg-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-amber-50 mb-4">
            Featured <span className="bg-gradient-to-r from-[#2563EB]  dark:from-amber-50 bg-clip-text text-transparent">Rooms</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our handpicked selection of premium accommodations designed for unforgettable stays
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredRooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: false }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-lg bg-blue-50 dark:bg-gray-800">
                <div className="relative overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-purple-700">
                    ${room.price}/night
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1 text-sm font-semibold text-yellow-600">
                    ★ {room.rating}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-200 mb-2">{room.name}</h3>

                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600 dark:text-gray-200">
                    <div className="flex items-center space-x-1">
                      <span className="material-icons text-base">group</span>
                      <span>{room.guests} guests</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span className="material-icons text-base text-yellow-500">star</span>
                      <span>{room.reviews} reviews</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {room.features.slice(0, 3).map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-2 mb-6">
                    {room.amenities.slice(0, 4).map((icon, idx) => (
                      <div key={idx} className="p-2 bg-gray-100 rounded-lg">
                        <span className="material-icons text-gray-600  text-base">{icon}</span>
                      </div>
                    ))}
                  </div>

                  <Link to={`/roomsDetails/${room.id}`}>
                    <button className="w-full cursor-pointer bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 rounded-md hover:from-purple-700 hover:to-purple-800 transition-all duration-200">
                      Book Now
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/rooms">
            <button className="px-8 cursor-pointer py-3 text-lg border border-purple-200 text-purple-700 hover:bg-purple-50 rounded-md">
              View All Rooms
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedRooms;