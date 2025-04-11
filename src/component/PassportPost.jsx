import React from "react";
import { motion } from "framer-motion";

const PassportPost = () => {
  return (
    <motion.div
      className="bg-gray-100 py-10 px-5 w-full flex justify-center items-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl shadow-lg rounded-lg overflow-hidden md:flex bg-white">
        {/* Image Section */}
        <motion.div
          className="md:w-1/2"
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src="/img/passport-4.jpg"
            alt="Passport"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Content Section */}
        <motion.div
          className="md:w-1/2 p-6 flex flex-col justify-center"
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Travel with Ease</h2>
          <p className="text-gray-600 text-sm mb-4">
            Get your passport quickly and hassle-free. We offer expert guidance on the application process, renewals, and documentation.
          </p>
          <ul className="text-gray-600 text-sm list-disc list-inside mb-4">
            <li>Fast & Reliable Processing</li>
            <li>Document Assistance</li>
            <li>Secure & Confidential</li>
          </ul>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700"
          >
            Apply Now
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PassportPost;
