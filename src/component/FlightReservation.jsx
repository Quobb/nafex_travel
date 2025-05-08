import { motion, useAnimation } from 'framer-motion';
import { useEffect ,useState} from 'react';
import { useInView } from 'react-intersection-observer';
import EnquiryModalSpecial from './EnquiryModalSpecial';
export default function FlightReservation() {
  const [showModal, setShowModal] = useState(false);
    const selectedsubject = { subject: "Flight" };
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
  
      controls.start('visible');
  
  }, [controls, inView]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const floatVariants = {
    float: {
      y: [-15, 15],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  const planeFly = {
    fly: {
      x: [0, 100, 0],
      y: [0, -20, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear"
      }
    }
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "loop"
      }
    }
  };

  return (
    <div className="font-sans bg-gray-50 overflow-x-hidden">

      <section className="hero-clip-path bg-gradient-to-r from-burtBlue to-blue-900 text-white pb-20 md:pb-32 relative overflow-hidden">
        {/* Animated decorative elements */}
        <motion.div 
          variants={planeFly}
          animate="fly"
          className="absolute top-1/4 left-0 w-24 h-24 opacity-30 hidden md:block"
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 16.21V15.79C22 15.54 21.81 15.33 21.56 15.3L17.45 14.87L12.4 2.5C12.28 2.22 12.03 2.03 11.73 2H11.57C11.14 2 10.79 2.35 10.79 2.79V14.38L7.03 13.63L5.79 13.42L4.58 10.84L3.56 10.63C3.22 10.56 2.89 10.77 2.81 11.12L2.01 14.4C1.92 14.78 2.15 15.16 2.53 15.25L4.31 15.62L7.03 16.21H22Z" fill="white"/>
          </svg>
        </motion.div>
        
        <motion.div 
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.5
          }}
          className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-white rounded-full"
        ></motion.div>
        
        <div className="container mx-auto px-6 pt-20 md:pt-32 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 mb-12 md:mb-0"
            >
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Book Your <span className="text-burntOrange">Dream Flight</span> With Ease
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-200">
                Discover the best flight deals and travel the world with Nafex Flight Reservations.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  variants={pulseVariants}
                  animate="pulse"
                  onClick={() => setShowModal(true)}
                  className="px-8 py-3 bg-burntOrange text-white rounded-md text-lg font-semibold hover:bg-orange-700 transition duration-300 text-center"
                >
                  Search Flights
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#2A4B7C" }}
                  href="#deals" 
                  className="px-8 py-3 border-2 border-white text-white rounded-md text-lg font-semibold transition duration-300 text-center"
                >
                  View Deals
                </motion.a>
              </div>
            </motion.div>
            <motion.div 
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="md:w-1/2"
            >
              <div className="relative">
                <motion.img 
                  whileHover={{ scale: 1.02 }}
                  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Airplane flying" 
                  className="rounded-lg shadow-2xl w-full max-w-md mx-auto border-8 border-white"
                />
                {/* Animated badges */}
                <motion.div 
                  variants={floatVariants}
                  animate="float"
                  className="absolute -bottom-8 -left-8 bg-burntOrange p-4 rounded-lg shadow-lg hidden md:block"
                >
                  <div className="text-white font-bold">500+ Airlines</div>
                </motion.div>
                <motion.div 
                  variants={floatVariants}
                  animate="float"
                  initial={{ y: 0 }}
                  className="absolute -top-8 -right-8 bg-white p-4 rounded-lg shadow-lg hidden md:block"
                >
                  <div className="text-burtBlue font-bold">24/7 Support</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Flight Search Section */}
      <motion.section 
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        id="search" 
        className="container mx-auto px-6 py-12 -mt-16 md:-mt-24 z-10 relative"
      >
        {/* <motion.div 
          variants={itemVariants}
          className="bg-white rounded-xl shadow-xl p-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="col-span-1 md:col-span-2">
              <label className="block text-gray-700 mb-2">From</label>
              <motion.div whileHover={{ scale: 1.02 }} className="relative">
                <input 
                  type="text" 
                  placeholder="City or Airport" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-burntOrange"
                />
              </motion.div>
            </div>
            <div className="col-span-1 md:col-span-2">
              <label className="block text-gray-700 mb-2">To</label>
              <motion.div whileHover={{ scale: 1.02 }} className="relative">
                <input 
                  type="text" 
                  placeholder="City or Airport" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-burntOrange"
                />
              </motion.div>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Departure</label>
              <motion.div whileHover={{ scale: 1.02 }}>
                <input 
                  type="date" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-burntOrange"
                />
              </motion.div>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Return</label>
              <motion.div whileHover={{ scale: 1.02 }}>
                <input 
                  type="date" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-burntOrange"
                />
              </motion.div>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Passengers</label>
              <motion.div whileHover={{ scale: 1.02 }}>
                <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-burntOrange">
                  <option>1 Adult</option>
                  <option>2 Adults</option>
                  <option>3 Adults</option>
                  <option>Family</option>
                </select>
              </motion.div>
            </div>
            <div className="flex items-end">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 bg-burntOrange text-white rounded-md font-semibold hover:bg-orange-700 transition duration-300"
              >
                Search Flights
              </motion.button>
            </div>
          </div>
        </motion.div> */}
      </motion.section>

      {/* Popular Destinations */}
      <motion.section 
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        id="destinations" 
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-6">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-burtBlue mb-4">Popular <span className="text-burntOrange">Destinations</span></h2>
            <div className="w-20 h-1 bg-burntOrange mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Destination 1 */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-500"
            >
              <div className="relative h-48 overflow-hidden">
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Paris" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-xl font-bold text-white">Paris, France</h3>
                  <div className="text-burntOrange font-semibold">From $399</div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Daily flights</span>
                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    className="text-burntOrange font-semibold"
                  >
                    View deals →
                  </motion.button>
                </div>
              </div>
            </motion.div>
            
            {/* Destination 2 */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-500"
            >
              <div className="relative h-48 overflow-hidden">
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  src="https://images.unsplash.com/photo-1538970272646-f61fabb3bfbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Tokyo" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-xl font-bold text-white">Tokyo, Japan</h3>
                  <div className="text-burntOrange font-semibold">From $899</div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Daily flights</span>
                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    className="text-burntOrange font-semibold"
                  >
                    View deals →
                  </motion.button>
                </div>
              </div>
            </motion.div>
            
            {/* Destination 3 */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-500"
            >
              <div className="relative h-48 overflow-hidden">
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  src="https://images.unsplash.com/photo-1518391846015-55a9cc003b25?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="New York" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-xl font-bold text-white">New York, USA</h3>
                  <div className="text-burntOrange font-semibold">From $299</div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Hourly flights</span>
                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    className="text-burntOrange font-semibold"
                  >
                    View deals →
                  </motion.button>
                </div>
              </div>
            </motion.div>
            
            {/* Destination 4 */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-500"
            >
              <div className="relative h-48 overflow-hidden">
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  src="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Dubai" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-xl font-bold text-white">Dubai, UAE</h3>
                  <div className="text-burntOrange font-semibold">From $599</div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Daily flights</span>
                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    className="text-burntOrange font-semibold"
                  >
                    View deals →
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Special Deals */}
      <motion.section 
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        id="deals" 
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-6">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-burtBlue mb-4">Special <span className="text-burntOrange">Flight Deals</span></h2>
            <div className="w-20 h-1 bg-burntOrange mx-auto"></div>
          </motion.div>
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div 
              variants={itemVariants}
              className="md:w-1/2 mb-12 md:mb-0"
            >
              <div className="relative">
                <motion.img 
                  whileHover={{ scale: 1.02 }}
                  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Special flight deals" 
                  className="rounded-lg shadow-xl w-full max-w-md mx-auto"
                />
                <motion.div 
                  variants={pulseVariants}
                  animate="pulse"
                  className="absolute -top-6 -right-6 bg-burntOrange text-white px-4 py-2 rounded-lg shadow-lg hidden md:block"
                >
                  <div className="font-bold">LIMITED TIME</div>
                </motion.div>
              </div>
            </motion.div>
            <motion.div 
              variants={containerVariants}
              className="md:w-1/2"
            >
              <motion.div variants={itemVariants} className="flex items-start p-4 bg-gray-50 rounded-lg hover:shadow-md transition">
                <div className="flex-shrink-0 bg-burntOrange rounded-full w-10 h-10 flex items-center justify-center text-white font-bold text-lg mr-4">1</div>
                <div>
                  <h3 className="text-xl font-bold text-burtBlue mb-2">Europe Summer Sale</h3>
                  <p className="text-gray-600">Up to 40% off flights to major European destinations. Book by June 30.</p>
                  <div className="mt-2 text-burntOrange font-semibold">From $399 roundtrip</div>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-start p-4 bg-gray-50 rounded-lg hover:shadow-md transition mt-6">
                <div className="flex-shrink-0 bg-burntOrange rounded-full w-10 h-10 flex items-center justify-center text-white font-bold text-lg mr-4">2</div>
                <div>
                  <h3 className="text-xl font-bold text-burtBlue mb-2">Asia Explorer Package</h3>
                  <p className="text-gray-600">Combo deals for multiple Asian cities. Includes hotel discounts.</p>
                  <div className="mt-2 text-burntOrange font-semibold">From $1299</div>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-start p-4 bg-gray-50 rounded-lg hover:shadow-md transition mt-6">
                <div className="flex-shrink-0 bg-burntOrange rounded-full w-10 h-10 flex items-center justify-center text-white font-bold text-lg mr-4">3</div>
                <div>
                  <h3 className="text-xl font-bold text-burtBlue mb-2">Last Minute Getaways</h3>
                  <p className="text-gray-600">Amazing deals for spontaneous travelers. Departures within 7 days.</p>
                  <div className="mt-2 text-burntOrange font-semibold">Up to 60% off</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="py-20 bg-burntOrange text-white"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h2 
            animate={{
              scale: [1, 1.03, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready for Your Next Adventure?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl mb-8 max-w-2xl mx-auto">
            Sign up now and get exclusive access to our best flight deals and discounts.
          </motion.p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.input 
              whileFocus={{ scale: 1.02 }}
              type="email" 
              placeholder="Your email address" 
              className="px-4 py-3 rounded-md text-gray-800 w-full max-w-md"
            />
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-burtBlue text-white rounded-md text-lg font-semibold hover:bg-blue-900 transition duration-300"
            >
              Subscribe
            </motion.button>
          </div>
        </div>
      </motion.section>

         {showModal && (
              <EnquiryModalSpecial showModal={showModal} setShowModal={setShowModal} selectedsubject={selectedsubject} />
            )}
    </div>
  );
}