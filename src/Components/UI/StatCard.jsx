import StarRating from "./StarRating";
import { motion } from "framer-motion";

const StatCard = ({ label, value }) => (
  <div className="text-center">
    <div className="text-3xl font-bold text-[#2563EB] dark:text-green-300">
      {value}
    </div>
    {label === "Average Rating" && (
      <motion.div
        initial={{ y: 0, opacity: 1 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        className="flex items-center justify-center"
      >
        <StarRating rating={value} />
      </motion.div>
    )}
    <div className="text-sm text-gray-600 dark:text-gray-200">{label}</div>
  </div>
);
export default StatCard;
