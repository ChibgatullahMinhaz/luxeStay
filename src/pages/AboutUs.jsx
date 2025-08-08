import React from "react";
import { Users } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="px-4 py-16 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full shadow-md bg-gradient-to-r from-teal-500 to-cyan-500">
            <Users className="w-10 h-10 text-white" />
          </div>
        </div>

        {/* Heading */}
        <h2 className="mb-4 text-3xl font-bold text-gray-800">About Us</h2>

        {/* Description */}
        <p className="max-w-3xl mx-auto text-lg leading-relaxed">
          We are a passionate team dedicated to providing top-quality transport
          services with comfort, safety, and reliability. Our mission is to
          connect people to their destinations while making every journey an
          enjoyable experience.
        </p>

        {/* Stats or highlights */}
        <div className="grid grid-cols-1 gap-8 mt-10 sm:grid-cols-3">
          <div>
            <h3 className="text-4xl font-bold text-teal-600">10+</h3>
            <p className="text-gray-500">Years of Experience</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-teal-600">5k+</h3>
            <p className="text-gray-500">Happy Customers</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-teal-600">100%</h3>
            <p className="text-gray-500">Service Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
