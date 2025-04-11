import React from 'react';
import { motion } from 'framer-motion';

const CountriesWeOffer = () => {
  const countries = [
    { name: 'Brazil', flag: 'brazil.jpg', bg: 'country-1.jpg' },
    { name: 'India', flag: 'india.jpg', bg: 'country-2.jpg' },
    { name: 'USA', flag: 'usa.jpg', bg: 'country-3.jpg' },
    { name: 'Italy', flag: 'italy.jpg', bg: 'country-4.jpg' },
  ];

  return (
    <div className="">
      <div className="w-[80%] px-4 py-5 mx-auto">
        <div className="container">
          {/* Section Title */}
          <div className="text-center mb-16">
            <div className="px-3">
              <motion.h5
                className="text-primary text-xl font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                COUNTRIES WE OFFER
              </motion.h5>
            </div>
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 text-burtblue"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Visa Services for the Following Countries
            </motion.h1>
            <motion.p
              className="text-gray-700 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              We provide expert visa assistance for various countries worldwide. Whether you're traveling for tourism, study, work, or immigration, our experienced consultants will guide you through the application process and ensure a smooth experience. Explore our services for the countries listed below.
            </motion.p>
          </div>

          {/* Country Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            {countries.map((country, idx) => (
              <motion.div
                key={country.name}
                className="relative group rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-500 ease-in-out"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + idx * 0.2, duration: 0.5 }}
              >
                {/* Background Image */}
                <img src={`img/${country.bg}`} className="w-[40vh] h-[40vh] object-cover rounded" alt={country.name} />

                {/* Hover Fill Effect */}
                <div className="absolute inset-0 bg-blue-500/30 transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-in-out z-0 rounded-lg pointer-events-none" />

                {/* Flag Overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <img
                    src={`img/${country.flag}`}
                    className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
                    alt={`${country.name} Flag`}
                  />
                </div>

                {/* Country Name */}
                <div className="relative z-20 mt-4">
                  <a href="#" className="text-burtBlue text-lg sm:text-xl font-semibold group-hover:text-white transition-colors duration-300">
                    {country.name}
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* More Countries Button */}
          <div className="text-center mt-8">
            <motion.a
              href="#"
              className="inline-block bg-burntOrange text-burtBlue rounded-full py-3 px-6 hover:bg-primary-dark transition duration-300"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.0, duration: 0.5 }}
            >
              More Countries
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountriesWeOffer;
