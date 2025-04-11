/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const StudyAbroadSection = () => {
  const countries = [
    { id: 1, name: "Study in UK", image: "/img/uk-country.jpg" },
    { id: 2, name: "Study in USA", image: "/img/usa-country-1.jpg" },
    { id: 3, name: "Study in Canada", image: "/img/canada-country.jpg" },
    { id: 4, name: "Study in China", image: "/img/china-country.jpg" },
    { id: 5, name: "Study in Australia", image: "/img/austrial-country.jpg" },
    { id: 6, name: "Study in Netherlands", image: "/img/netherland-country.jpg" }
  ];

  return (
    <div className="bg-gray-100 py-12 px-4">
      <motion.div 
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-center mb-6">Study Abroad</h1>
        
        <p className="text-lg text-gray-700 text-center mb-4 max-w-3xl mx-auto">
          At <span className="text-burtBlue">N</span>A<span className="text-burtBlue">FE</span>X, every aspect of your study abroad programme will be extensively planned for your convenience and total satisfaction. 
          We assist prospective students to write English Proficiency and aptitude tests such as IELTS, SAT, GMAT, TOEFL, etc., which aid them in 
          gaining scholarships and easy admission to various institutions abroad.
        </p>
        
        <p className="text-lg text-gray-700 text-center mb-10 max-w-3xl mx-auto">
          We also offer affiliate services to institutions locally and internationally. 
          You can share in our <span className="font-semibold">Study Abroad</span> services by taking advantage of the enormous experience our study abroad team offers. 
          We are open to all your questions concerning your college or university options and placements.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {countries.map((country, index) => (
            <motion.div
              key={country.id}
              className="bg-white p-4 rounded-xl shadow-md text-center"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <img 
                src={country.image} 
                alt={country.name} 
                className="w-full h-48 object-cover rounded-lg" 
              />
              <h2 className="text-xl font-semibold mt-4">{country.name}</h2>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default StudyAbroadSection;
