import { motion } from "framer-motion";
import { Link } from "react-router";
import useGetReviews from "../Hooks/useGetReviews";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import getFeaturedRooms from "../Service/getFeaturedRooms";

const FeaturedRooms = () => {
  const reviews = useGetReviews();

  const {
    data: featuredRooms,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["featured"],
    queryFn: getFeaturedRooms,
  });

  const avgRating = (id) => {
    const totalReviews = reviews.filter((r) => r.roomId === id);
    if (!totalReviews || totalReviews.length === 0) {
      return 0;
    }

    const total = totalReviews.reduce((sum, r) => sum + r.rating, 0);
    const avg = total / totalReviews.length;
    return avg.toFixed(1);
  };
  const handleFindTotalReview = (id) => {
    const totalReviews = reviews.filter((r) => r.roomId === id);
    return (
      <>
        <span>{totalReviews.length}</span>
      </>
    );
  };
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
            Featured{" "}
            <span className="bg-gradient-to-r from-[#2563EB]  dark:from-amber-50 bg-clip-text text-transparent">
              Rooms
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our handpicked selection of premium accommodations designed
            for unforgettable stays
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredRooms?.map((room, index) => (
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
                    ★ {avgRating(room.id)}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-200 mb-2">
                    {room.title}
                  </h3>

                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600 dark:text-gray-200">
                    <div className="flex items-center space-x-1">
                      <span className="material-icons text-base">group</span>
                      <span>{room.capacity} guests</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span className="material-icons text-base text-yellow-500">
                        star
                      </span>
                      <span>{handleFindTotalReview(room.id)} reviews</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {room?.featured?.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-2 mb-6">
                    {room?.amenities?.map((icon, idx) => (
                      <div key={idx} className="p-2 bg-gray-100 rounded-lg">
                        <span className="material-icons text-gray-600  text-base">
                          {icon}
                        </span>
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
