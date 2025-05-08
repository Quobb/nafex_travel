import { motion, useAnimation } from 'framer-motion';
import { useEffect ,useState} from 'react';
import { useInView } from 'react-intersection-observer';
import EnquiryModalSpecial from './EnquiryModalSpecial';
export default function VisaProcurement() {
  const [showModal, setShowModal] = useState(false);
    const selectedsubject = { subject: "Visa Procument" };
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
      y: [-10, 10],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  const passportStamp = {
    animate: {
      rotate: [0, 10, -10, 5, -5, 0],
      scale: [1, 1.1, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity
      }
    }
  };

  return (
    <div className="font-sans bg-gray-50 overflow-x-hidden">
     
      {/* Hero Section */}
      <section className="hero-clip-path bg-gradient-to-r from-burntBlue to-blue-900 text-white pb-20 md:pb-32 relative overflow-hidden">
        {/* Animated decorative elements */}
        <motion.div 
          variants={passportStamp}
          animate="animate"
          className="absolute top-20 left-20 w-24 h-24 opacity-20 hidden md:block"
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2"/>
            <path d="M12 8V16" stroke="white" strokeWidth="2"/>
            <path d="M8 12H16" stroke="white" strokeWidth="2"/>
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
                Hassle-Free <span className="text-burntOrange">Visa Procurement</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-200">
                Let our experts handle your visa applications with a 98% success rate and stress-free process.
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
                  Apply Now
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#2A4B7C" }}
                  href="#countries" 
                  className="px-8 py-3 border-2 border-white text-white rounded-md text-lg font-semibold transition duration-300 text-center"
                >
                  Browse Countries
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
                  whileHover={{ rotate: 1 }}
                  src="/img/canada-visa.jpg" 
                  alt="Passport with visa" 
                  className="rounded-lg shadow-2xl w-full max-w-md mx-auto border-8 border-white"
                />
                {/* Animated badges */}
                <motion.div 
                  variants={floatVariants}
                  animate="float"
                  className="absolute -bottom-8 -left-8 bg-burntOrange p-4 rounded-lg shadow-lg hidden md:block"
                >
                  <div className="text-white font-bold">98% Success Rate</div>
                </motion.div>
                <motion.div 
                  variants={floatVariants}
                  animate="float"
                  initial={{ y: 0 }}
                  className="absolute -top-8 -right-8 bg-white p-4 rounded-lg shadow-lg hidden md:block"
                >
                  <div className="text-burntBlue font-bold">50+ Countries</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <motion.section 
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="container mx-auto px-6 py-12 -mt-16 md:-mt-24 z-10 relative"
      >
        <div className="bg-white rounded-xl shadow-xl p-6 grid grid-cols-1 md:grid-cols-4 gap-6">
          <motion.div variants={itemVariants} className="text-center p-6 hover:shadow-md transition duration-300 rounded-lg">
            <div className="text-4xl font-bold text-burntOrange mb-2">98%</div>
            <div className="text-gray-600">Approval Rate</div>
          </motion.div>
          <motion.div variants={itemVariants} className="text-center p-6 hover:shadow-md transition duration-300 rounded-lg">
            <div className="text-4xl font-bold text-burntOrange mb-2">50+</div>
            <div className="text-gray-600">Countries</div>
          </motion.div>
          <motion.div variants={itemVariants} className="text-center p-6 hover:shadow-md transition duration-300 rounded-lg">
            <div className="text-4xl font-bold text-burntOrange mb-2">24h</div>
            <div className="text-gray-600">Express Service</div>
          </motion.div>
          <motion.div variants={itemVariants} className="text-center p-6 hover:shadow-md transition duration-300 rounded-lg">
            <div className="text-4xl font-bold text-burntOrange mb-2">10K+</div>
            <div className="text-gray-600">Visas Processed</div>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section 
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        id="services" 
        className="bg-gray-50 py-20"
      >
        <div className="container mx-auto px-6">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-burntBlue mb-4">Our <span className="text-burntOrange">Visa Services</span></h2>
            <div className="w-20 h-1 bg-burntOrange mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-500"
            >
              <div className="w-16 h-16 bg-burntBlue rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-burntBlue mb-4 text-center">Tourist Visa</h3>
              <p className="text-gray-600 text-center mb-4 text-burntBlue">
                Comprehensive assistance for short-term travel visas to all popular destinations.
              </p>
              <div className="text-burntOrange font-semibold text-center">Schengen • USA • UK • Canada</div>
            </motion.div>
            
            {/* Service 2 */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-500"
            >
              <div className="w-16 h-16 bg-burntBlue rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-burntBlue mb-4 text-center">Business Visa</h3>
              <p className="text-gray-600 text-center mb-4">
                Specialized support for corporate travelers with expedited processing options.
              </p>
              <div className="text-burntOrange font-semibold text-center">China • UAE • Russia • Japan</div>
            </motion.div>
            
            {/* Service 3 */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-500"
            >
              <div className="w-16 h-16 bg-burntBlue rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-burntBlue mb-4 text-center">Student Visa</h3>
              <p className="text-gray-600 text-center mb-4">
                Complete guidance for educational visas including documentation and interviews.
              </p>
              <div className="text-burntOrange font-semibold text-center">USA • UK • Australia • Germany</div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Countries Section */}
      <motion.section 
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        id="countries" 
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-6">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-burntBlue mb-4">Popular <span className="text-burntOrange">Destinations</span></h2>
            <div className="w-20 h-1 bg-burntOrange mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {/* Country 1 */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1 }}
                className="w-20 h-20 bg-burntBlue rounded-full flex items-center justify-center mb-2"
              >
                <span className="text-white text-2xl">🇺🇸</span>
              </motion.div>
              <h3 className="font-bold text-burntBlue">USA</h3>
            </motion.div>
            
            {/* Country 2 */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1 }}
                className="w-20 h-20 bg-burntBlue rounded-full flex items-center justify-center mb-2"
              >
                <span className="text-white text-2xl">🇬🇧</span>
              </motion.div>
              <h3 className="font-bold text-burntBlue">UK</h3>
            </motion.div>
            
            {/* Country 3 */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1 }}
                className="w-20 h-20 bg-burntBlue rounded-full flex items-center justify-center mb-2"
              >
                <span className="text-white text-2xl">🇨🇦</span>
              </motion.div>
              <h3 className="font-bold text-burntBlue">Canada</h3>
            </motion.div>
            
            {/* Country 4 */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1 }}
                className="w-20 h-20 bg-burntBlue rounded-full flex items-center justify-center mb-2"
              >
                <span className="text-white text-2xl">🇦🇺</span>
              </motion.div>
              <h3 className="font-bold text-burntBlue">Australia</h3>
            </motion.div>
            
            {/* Country 5 */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1 }}
                className="w-20 h-20 bg-burntBlue rounded-full flex items-center justify-center mb-2"
              >
                <span className="text-white text-2xl">🇪🇺</span>
              </motion.div>
              <h3 className="font-bold text-burntBlue">Schengen</h3>
            </motion.div>
            
            {/* Country 6 */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1 }}
                className="w-20 h-20 bg-burntBlue rounded-full flex items-center justify-center mb-2"
              >
                <span className="text-white text-2xl">🇯🇵</span>
              </motion.div>
              <h3 className="font-bold text-burntBlue">Japan</h3>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section 
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        id="process" 
        className="py-20 bg-burntBlue text-white"
      >
        <div className="container mx-auto px-6">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Simple <span className="text-burntOrange">Process</span></h2>
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
                  src="/img/canada-visa.jpg" 
                  alt="Visa process steps" 
                  className="rounded-lg shadow-xl w-full max-w-md mx-auto"
                />
                <motion.div 
                  variants={passportStamp}
                  animate="animate"
                  className="absolute -top-12 -right-12 w-24 h-24 hidden md:block"
                >
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2"/>
                    <path d="M12 8V16" stroke="white" strokeWidth="2"/>
                    <path d="M8 12H16" stroke="white" strokeWidth="2"/>
                  </svg>
                </motion.div>
              </div>
            </motion.div>
            <motion.div 
              variants={containerVariants}
              className="md:w-1/2"
            >
              <motion.div variants={itemVariants} className="flex items-start p-4 bg-white bg-opacity-10 rounded-lg hover:shadow-md transition backdrop-filter backdrop-blur-sm">
                <div className="flex-shrink-0 bg-burntOrange rounded-full w-10 h-10 flex items-center justify-center text-white font-bold text-lg mr-4">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-burntBlue">Free Consultation</h3>
                  <p className=" text-burntBlue">We assess your needs and recommend the best visa options.</p>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-start p-4 bg-white bg-opacity-10 rounded-lg hover:shadow-md transition backdrop-filter backdrop-blur-sm mt-6">
                <div className="flex-shrink-0 bg-burntOrange rounded-full w-10 h-10 flex items-center justify-center text-white font-bold text-lg mr-4">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-burntBlue">Document Preparation</h3>
                  <p className="text-burntBlue">Our experts help gather and prepare all required documents.</p>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-start p-4 bg-white bg-opacity-10 rounded-lg hover:shadow-md transition backdrop-filter backdrop-blur-sm mt-6">
                <div className="flex-shrink-0 bg-burntOrange rounded-full w-10 h-10 flex items-center justify-center text-white font-bold text-lg mr-4">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-burntBlue">Application Submission</h3>
                  <p className="text-burntBlue">We handle the entire submission process with the embassy.</p>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-start p-4 bg-white bg-opacity-10 rounded-lg hover:shadow-md transition backdrop-filter backdrop-blur-sm mt-6">
                <div className="flex-shrink-0 bg-burntOrange rounded-full w-10 h-10 flex items-center justify-center text-white font-bold text-lg mr-4">4</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-burntBlue">Visa Delivery</h3>
                  <p className="text-burntBlue">Your visa is delivered to your doorstep, ready for travel.</p>
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
            Ready to Start Your Visa Application?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl mb-8 max-w-2xl mx-auto">
            Get expert guidance and maximize your chances of approval with Nafex Visa Services.
          </motion.p>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowModal(true)} 
            className="px-8 py-4 bg-burntBlue text-white rounded-md text-lg font-semibold hover:bg-blue-900 transition duration-300 inline-block"
          >
            Begin Application
          </motion.a>
        </div>
      </motion.section>
      {showModal && (
        <EnquiryModalSpecial showModal={showModal} setShowModal={setShowModal} selectedsubject={selectedsubject} />
      )}
     
    </div>
  );
}