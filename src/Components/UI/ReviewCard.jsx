import { motion } from "framer-motion";
import StarRating from "./StarRating";

const ReviewCard = ({ review, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    whileHover={{ y: -5 }}
    className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-600 dark:text-gray-200 relative overflow-hidden rounded-xl"
  >
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2563EB] to-[#1E3A8A]" />
    <div className="p-6">
      <div className="flex items-center mb-4">
        <img
          src={review.avatar}
          alt={review.name}
          className="w-12 h-12 rounded-full mr-4 object-cover"
        />
        <div>
          <h4 className="font-semibold">{review.name}</h4>
          <p className="text-sm text-gray-500 dark:text-gray-200">
            {review.room}
          </p>
        </div>
      </div>
      <div className="flex items-center mb-2">
        <StarRating rating={review.rating} />
        <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">
          {new Date(review.date).toLocaleDateString()}
        </span>
      </div>
      <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
        "{review.comment}"
      </p>
    </div>
  </motion.div>
);

export default ReviewCard;
