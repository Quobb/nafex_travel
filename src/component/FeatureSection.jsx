import React from 'react';
import { motion } from 'framer-motion';
import '@fortawesome/fontawesome-free/css/all.min.css';

const features = [
  {
    title: "Cost-Effective",
    icon: "fa-dollar-sign",
    text: "Affordable solutions designed to maximize value without compromising quality.",
  },
  {
    title: "Visa Assistance",
    icon: "fa-cc-visa",
    text: "Expert guidance to streamline the visa application and approval process.",
  },
  {
    title: "Faster Processing",
    icon: "fa-atlas",
    text: "Efficient handling to ensure quick and hassle-free service delivery.",
  },
  {
    title: "Direct Interviews",
    icon: "fa-users",
    text: "Get direct access to interviews with top employers in your industry.",
  },
];

function FeatureSection() {
  return (
    <div className=" py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h5 className="text-burtBlue text-lg font-semibold mb-2">Why Choose Us</h5>
          <h1 className="text-4xl font-bold mb-4">
            We Provide Customized Services Tailored to Your Needs
          </h1>
          <p className="text-gray-600">
            Our solutions are designed to meet your specific requirements, ensuring efficiency, affordability, and reliability.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <motion.div
              key={index}
              className="relative group text-center p-6 rounded-xl shadow-lg bg-white overflow-hidden"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Background water fill on hover */}
              <div className="absolute bottom-0 left-0 w-full h-full z-0 bg-burtBlue/20 scale-y-0 origin-bottom transition-transform duration-500 ease-in-out group-hover:scale-y-100" />

              {/* Card Content */}
              <div className="relative z-10">
                {/* Rotating Icon */}
                <motion.div
                  className="mb-4 text-burntOrange"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 1 }}
                >
                  <i className={`fas ${item.icon} text-5xl`} />
                </motion.div>

                <h5 className="text-xl font-semibold mb-2">{item.title}</h5>
                <p className="text-gray-600 mb-4">{item.text}</p>
                <motion.a
                  href="#"
                  className="inline-block bg-burntOrange text-white rounded-full px-5 py-2 text-sm font-medium transition duration-300 hover:bg-burtBlue/90"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read More <i className="fas fa-arrow-right ml-2"></i>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;
