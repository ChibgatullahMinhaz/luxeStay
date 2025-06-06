import { motion } from "framer-motion";
import CountUp from "react-countup";

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=150",
    rating: 5,
    comment:
      "Absolutely phenomenal experience! The staff went above and beyond to make our stay memorable. The Presidential Suite was pure luxury.",
    date: "2024-05-15",
    room: "Presidential Suite",
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150",
    rating: 5,
    comment:
      "Perfect for business trips. The Executive Suite had everything I needed, and the service was impeccable. Will definitely return!",
    date: "2024-05-10",
    room: "Executive Business Suite",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150",
    rating: 4,
    comment:
      "Beautiful ocean views and excellent amenities. The room was spacious and clean. Minor delay at check-in but overall fantastic!",
    date: "2024-05-08",
    room: "Deluxe Ocean View",
  },
  {
    id: 4,
    name: "David Thompson",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150",
    rating: 5,
    comment:
      "Our honeymoon was magical thanks to this hotel. The romantic suite exceeded all expectations. Every detail was perfect!",
    date: "2024-05-05",
    room: "Romantic Honeymoon Suite",
  },
  {
    id: 5,
    name: "Lisa Park",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150",
    rating: 4,
    comment:
      "Great family experience! Kids loved the bunk beds and game area. Hotel staff was very accommodating to families.",
    date: "2024-05-03",
    room: "Family Adventure Room",
  },
  {
    id: 6,
    name: "James Wilson",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150",
    rating: 5,
    comment:
      "The Zen Garden Suite provided the perfect peaceful retreat. Excellent for relaxation and the meditation area was a nice touch.",
    date: "2024-05-01",
    room: "Zen Garden Suite",
  },
];

const UserReviews = () => {
  return (
    <section className="py-20 overflow-hidden bg-gradient-to-b from-white to-blue-50 dark:bg-gray-700 dark:bg-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-amber-50 mb-4">
            Guest{" "}
            <span className="bg-gradient-to-r from-[#2563EB]  to-[#1E3A8A]  bg-clip-text text-transparent">
              Reviews
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-amber-50 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied guests
            about their unforgettable experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: false }}
              whileHover={{ y: -5 }}
            >
              <div className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-600 dark:text-gray-200 relative overflow-hidden rounded-xl">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2563EB] to-[#1E3A8A]"></div>

                <div className="p-6">
                  <div className="flex items-center mb-4 relative">
                    <svg
                      className="w-8 h-8 text-[#2563EB]   opacity-20 absolute top-0 right-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 7h.01M4 21h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H6V9a1 1 0 0 1 1-1h2V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4v4a1 1 0 0 1-1 1H4v0Zm11-7h.01M16 21h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-4V9a1 1 0 0 1 1-1h2V5a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4v4a1 1 0 0 1-1 1h-4Z" />
                    </svg>
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-200">
                        {review.name}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-200">
                        {review.room}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < review.rating
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.184 3.64a1 1 0 00.95.69h3.813c.969 0 1.371 1.24.588 1.81l-3.084 2.24a1 1 0 00-.364 1.118l1.184 3.64c.3.921-.755 1.688-1.538 1.118L10 13.011l-3.084 2.24c-.783.57-1.838-.197-1.538-1.118l1.184-3.64a1 1 0 00-.364-1.118L3.114 9.067c-.783-.57-.38-1.81.588-1.81h3.813a1 1 0 00.95-.69l1.184-3.64z" />
                      </svg>
                    ))}
                    <span className="ml-2 text-sm text-gray-600">
                      {new Date(review.date).toLocaleDateString()}
                    </span>
                  </div>

                  <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                    "{review.comment}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: false }}
          className="text-center mt-12 overflow-hidden"
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            className="bg-gradient-to-r from-primary-50 to-blue-50 dark:bg-gray-700 dark:bg-none rounded-xl p-8 inline-block"
          >
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#2563EB] dark:text-green-300">
                  4.8
                </div>
                <div className="flex items-center justify-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.184 3.64a1 1 0 00.95.69h3.813c.969 0 1.371 1.24.588 1.81l-3.084 2.24a1 1 0 00-.364 1.118l1.184 3.64c.3.921-.755 1.688-1.538 1.118L10 13.011l-3.084 2.24c-.783.57-1.838-.197-1.538-1.118l1.184-3.64a1 1 0 00-.364-1.118L3.114 9.067c-.783-.57-.38-1.81.588-1.81h3.813a1 1 0 00.95-.69l1.184-3.64z" />
                    </svg>
                  ))}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-200">
                  Average Rating
                </div>
              </div>
              <div className="text-center">
                <motion.div
                  viewport={{ once: false }}
                  className="text-3xl font-bold text-[#2563EB] dark:text-green-300 "
                >
                  <CountUp duration={10} end={1247} />
                </motion.div>
                <div className="text-sm text-gray-600 dark:text-gray-200">
                  Total Reviews
                </div>
              </div>
              <div className="text-center">
                <motion.div
                  viewport={{ once: false }}
                  className="text-3xl font-bold text-[#2563EB] dark:text-green-300"
                >
                  <CountUp duration={20} once={false} end={96} />%
                </motion.div>
                <div className="text-sm text-gray-600 dark:text-gray-200">
                  Recommend Us
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default UserReviews;
