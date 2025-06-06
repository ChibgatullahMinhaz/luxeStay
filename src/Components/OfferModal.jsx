import React from "react";
import { motion } from "framer-motion";

const OfferModal = ({ isOpen, isClose }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50"
    >
      <motion.div
        className="relative rounded-xl shadow-lg overflow-hidden w-[90%] max-w-md text-white"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2070")',
          }}
        ></div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Modal content */}
        <div className="relative z-10 p-6 text-center">
          <h2 className="text-2xl font-bold mb-4 text-red-400 drop-shadow">
            🎉 Special Offer!
          </h2>
          <p className="mb-4 text-white drop-shadow">
            Get 25% off your first hotel booking! Book now to claim the deal.
          </p>
          <button
            onClick={isClose}
            className="mt-4 px-4 py-2 cursor-pointer bg-red-500 text-white rounded hover:bg-red-600"
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default OfferModal;
