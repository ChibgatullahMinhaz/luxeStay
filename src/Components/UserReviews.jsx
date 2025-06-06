import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import axios from "axios";
import Slider from "react-slick";   
import ReviewCard from "./UI/ReviewCard";
import StatCard from "./UI/StatCard";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const UserReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch reviews from API
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { data } = await axios.get(
          "https://luxestayserver.vercel.app/all/reviews"
        );
        const sorted = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setReviews(sorted);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 3,       
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,   
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,    
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-20 overflow-hidden bg-gradient-to-b from-white to-blue-50 dark:bg-gray-700 dark:bg-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-amber-50 mb-4">
            Guest{" "}
            <span className="bg-gradient-to-r from-[#2563EB] to-[#1E3A8A] bg-clip-text text-transparent">
              Reviews
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-amber-50 max-w-2xl mx-auto">
            Don&apos;t just take our word for it – hear from our satisfied
            guests about their unforgettable experiences.
          </p>
        </motion.div>

        {/* Loading State */}
        {loading ? (
          <div className="text-center text-lg text-gray-600 dark:text-gray-200">
            Loading reviews...
          </div>
        ) : (
          // Use react-slick Slider instead of grid
          <Slider {...settings}>
            {reviews.map((review, index) => (
              <div key={review.id} className="px-4">
                <ReviewCard review={review} index={index} />
              </div>
            ))}
          </Slider>
        )}

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 dark:bg-gray-700 dark:bg-none rounded-xl p-8 inline-block">
            <div className="flex items-center justify-center space-x-8">
              <StatCard label="Average Rating" value="4.8" />
              <StatCard
                label="Total Reviews"
                value={<CountUp duration={10} end={1247} />}
              />
              <StatCard
                label="Recommend Us"
                value={
                  <>
                    <CountUp duration={20} end={96} />%
                  </>
                }
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UserReviews;
