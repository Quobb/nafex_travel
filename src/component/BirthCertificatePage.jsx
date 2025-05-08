import { motion, useAnimation } from 'framer-motion';
import { useEffect ,useState} from 'react';
import { useInView } from 'react-intersection-observer';
import EnquiryModalSpecial from './EnquiryModalSpecial';
export default function BirthCertificatePage() {
  const [showModal, setShowModal] = useState(false);
  const selectedsubject = { subject: "Birth Certification" };
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

  const documentVariants = {
    animate: {
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 3,
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
          variants={documentVariants}
          animate="animate"
          className="absolute top-20 left-20 w-24 h-24 opacity-20 hidden md:block"
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="white" strokeWidth="2"/>
            <path d="M14 2V8H20" stroke="white" strokeWidth="2"/>
            <path d="M16 13H8" stroke="white" strokeWidth="2"/>
            <path d="M16 17H8" stroke="white" strokeWidth="2"/>
            <path d="M10 9H9H8" stroke="white" strokeWidth="2"/>
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
                Hassle-Free <span className="text-burntOrange">Birth Certificate</span> Assistance
              </h1>
              <p className="text-lg md:text-xl mb-8 text-burtBlue">
                Get official birth certificates from any country with our expert document procurement service.
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
                  Request Certificate
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
                  src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Birth certificate documents" 
                  className="rounded-lg shadow-2xl w-full max-w-md mx-auto border-8 border-white"
                />
                {/* Animated badges */}
                <motion.div 
                  variants={floatVariants}
                  animate="float"
                  className="absolute -bottom-8 -left-8 bg-burntOrange p-4 rounded-lg shadow-lg hidden md:block"
                >
                  <div className="text-white font-bold">100% Legal</div>
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
            <div className="text-4xl font-bold text-burntOrange mb-2">100%</div>
            <div className="text-gray-600">Legal Compliance</div>
          </motion.div>
          <motion.div variants={itemVariants} className="text-center p-6 hover:shadow-md transition duration-300 rounded-lg">
            <div className="text-4xl font-bold text-burntOrange mb-2">50+</div>
            <div className="text-gray-600">Countries Covered</div>
          </motion.div>
          <motion.div variants={itemVariants} className="text-center p-6 hover:shadow-md transition duration-300 rounded-lg">
            <div className="text-4xl font-bold text-burntOrange mb-2">7-14d</div>
            <div className="text-gray-600">Average Processing</div>
          </motion.div>
          <motion.div variants={itemVariants} className="text-center p-6 hover:shadow-md transition duration-300 rounded-lg">
            <div className="text-4xl font-bold text-burntOrange mb-2">10K+</div>
            <div className="text-gray-600">Certificates Issued</div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-burntBlue mb-4">Our <span className="text-burntOrange">Services</span></h2>
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-burntBlue mb-4 text-center">Original Birth Certificate</h3>
              <p className="text-gray-600 text-center mb-4">
                Obtain an official, government-issued birth certificate from your country of birth.
              </p>
              <div className="text-burntOrange font-semibold text-center">Legal • Apostilled • Multilingual</div>
            </motion.div>
            
            {/* Service 2 */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-500"
            >
              <div className="w-16 h-16 bg-burntBlue rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-burntBlue mb-4 text-center">Certified Translation</h3>
              <p className="text-gray-600 text-center mb-4">
                Professionally translated birth certificates with notarization for official use.
              </p>
              <div className="text-burntOrange font-semibold text-center">100+ Languages • Notarized</div>
            </motion.div>
            
            {/* Service 3 */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-500"
            >
              <div className="w-16 h-16 bg-burntBlue rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-burntBlue mb-4 text-center">Apostille/Legalization</h3>
              <p className="text-gray-600 text-center mb-4">
                Hague Apostille or embassy legalization for international document recognition.
              </p>
              <div className="text-burntOrange font-semibold text-center">Hague Convention • Embassy Stamped</div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-burntBlue mb-4">Supported <span className="text-burntOrange">Countries</span></h2>
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
              <p className="text-sm text-gray-600">All States</p>
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
              <p className="text-sm text-gray-600">England, Scotland</p>
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
              <p className="text-sm text-gray-600">All Provinces</p>
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
              <p className="text-sm text-gray-600">All States</p>
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
                <span className="text-white text-2xl">🇮🇳</span>
              </motion.div>
              <h3 className="font-bold text-burntBlue">India</h3>
              <p className="text-sm text-gray-600">All States</p>
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
                <span className="text-white text-2xl">🇳🇬</span>
              </motion.div>
              <h3 className="font-bold text-burntBlue">Nigeria</h3>
              <p className="text-sm text-gray-600">All States</p>
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
                  src="https://images.unsplash.com/photo-1581092921461-39b2f2f8a0b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Birth certificate process steps" 
                  className="rounded-lg shadow-xl w-full max-w-md mx-auto"
                />
                <motion.div 
                  variants={documentVariants}
                  animate="animate"
                  className="absolute -top-12 -right-12 w-24 h-24 hidden md:block"
                >
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="white" strokeWidth="2"/>
                    <path d="M14 2V8H20" stroke="white" strokeWidth="2"/>
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
                  <h3 className="text-xl font-bold mb-2 text-burtBlue">Document Collection</h3>
                  <p className="text-burtBlue">We guide you through all required information and documents.</p>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-start p-4 bg-white bg-opacity-10 rounded-lg hover:shadow-md transition backdrop-filter backdrop-blur-sm mt-6">
                <div className="flex-shrink-0 bg-burntOrange rounded-full w-10 h-10 flex items-center justify-center text-white font-bold text-lg mr-4">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-burtBlue">Application Submission</h3>
                  <p className="text-burtBlue">Our experts submit your application to the proper authorities.</p>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-start p-4 bg-white bg-opacity-10 rounded-lg hover:shadow-md transition backdrop-filter backdrop-blur-sm mt-6">
                <div className="flex-shrink-0 bg-burntOrange rounded-full w-10 h-10 flex items-center justify-center text-white font-bold text-lg mr-4">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-burtBlue">Processing & Follow-up</h3>
                  <p className="text-burtBlue">We monitor progress and handle all government follow-ups.</p>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-start p-4 bg-white bg-opacity-10 rounded-lg hover:shadow-md transition backdrop-filter backdrop-blur-sm mt-6">
                <div className="flex-shrink-0 bg-burntOrange rounded-full w-10 h-10 flex items-center justify-center text-white font-bold text-lg mr-4">4</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-burtBlue">Delivery</h3>
                  <p className="text-burtBlue">Your birth certificate is delivered to your doorstep.</p>
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
            Need an Official Birth Certificate?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl mb-8 max-w-2xl mx-auto">
            Get expert assistance with 100% legal compliance and fast processing.
          </motion.p>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowModal(true)}
            className="px-8 py-4 bg-burntBlue text-white rounded-md text-lg font-semibold hover:bg-blue-900 transition duration-300 inline-block"
          >
            Request Your Certificate
          </motion.a>
        </div>
      </motion.section>
      {showModal && (
        <EnquiryModalSpecial showModal={showModal} setShowModal={setShowModal} selectedsubject={selectedsubject} />
      )}
     
    </div>
  );
}