import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '@fortawesome/fontawesome-free/css/all.min.css';

function VisaCategory() {
  const [countVisaOptions, setCountVisaOptions] = useState(0);
  const [countExpertTeam, setCountExpertTeam] = useState(0);
  const [countSuccessfulProcesses, setCountSuccessfulProcesses] = useState(0);
  const [countSuccessRate, setCountSuccessRate] = useState(0);

  // Animate numbers independently
  useEffect(() => {
    const timer = setInterval(() => {
      setCountVisaOptions((prev) => {
        if (prev < 31) return prev + 1;
        clearInterval(timer);
        return prev;
      });
    }, 20);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountExpertTeam((prev) => {
        if (prev < 377) return prev + 1;
        clearInterval(timer);
        return prev;
      });
    }, 10);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountSuccessfulProcesses((prev) => {
        if (prev < 4.9) return +(prev + 0.1).toFixed(1);
        clearInterval(timer);
        return prev;
      });
    }, 100);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountSuccessRate((prev) => {
        if (prev < 98) return prev + 1;
        clearInterval(timer);
        return prev;
      });
    }, 15);
    return () => clearInterval(timer);
  }, []);

  const cards = [
    {
      icon: 'fa-passport',
      title: 'Diverse Visa Options',
      desc: 'Explore 31+ visa categories tailored to your needs.',
      value: countVisaOptions,
      suffix: '+',
    },
    {
      icon: 'fa-users',
      title: 'Expert Team',
      desc: 'Our 377+ specialists are here to assist you.',
      value: countExpertTeam,
      suffix: '+',
    },
    {
      icon: 'fa-user-check',
      title: 'Successful Processes',
      desc: "We've facilitated over 4.9K visa approvals.",
      value: countSuccessfulProcesses,
      suffix: 'K',
    },
    {
      icon: 'fa-handshake',
      title: 'High Success Rate',
      desc: '98% of our applicants achieve approval.',
      value: countSuccessRate,
      suffix: '%',
    },
  ];

  return (
    <div className="pt-5">
      <div className="max-w-7xl mx-auto py-10 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="relative group p-6 rounded-xl shadow-lg bg-white overflow-hidden text-center transform transition duration-300"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Background Fill Animation */}
              <div className="absolute inset-0 bg-blue-500/20 transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-in-out z-0 rounded-xl pointer-events-none" />

              {/* Foreground Content */}
              <div className="relative z-10 transition-colors duration-300 group-hover:text-white">
                <motion.div
                  className="mb-4 text-burntOrange"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 1 }}
                >
                  <i className={`fa-solid ${card.icon} text-5xl`} />
                </motion.div>

                <h3 className="text-xl font-semibold text-burtBlue mb-2 group-hover:text-white transition-colors">
                  {card.title}
                </h3>
                <p className="text-gray-600 mb-4 group-hover:text-white transition-colors">
                  {card.desc}
                </p>

                <div className="flex justify-center items-center">
                  <motion.span
                    className="text-4xl font-bold text-burntOrange group-hover:text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {card.value}
                  </motion.span>
                  <span className="text-3xl font-semibold text-burntOrange ml-1 group-hover:text-white transition-colors">
                    {card.suffix}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VisaCategory;
