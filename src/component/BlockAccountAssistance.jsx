import { motion, useAnimation } from 'framer-motion';
import { useEffect ,useState} from 'react';
import { useInView } from 'react-intersection-observer';
import EnquiryModalSpecial from './EnquiryModalSpecial';
export default function BlockAccountAssistance() {
   const [showModal, setShowModal] = useState(false);
    const selectedsubject = { subject: "Open Account" };

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

  const bankCardVariants = {
    animate: {
      rotate: [0, 5, -5, 2, -2, 0],
      scale: [1, 1.05, 1],
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
          variants={bankCardVariants}
          animate="animate"
          className="absolute top-20 left-20 w-24 h-24 opacity-20 hidden md:block"
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5Z" stroke="white" strokeWidth="2"/>
            <path d="M3 10H21" stroke="white" strokeWidth="2"/>
            <path d="M7 15H10" stroke="white" strokeWidth="2"/>
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
                Seamless <span className="text-burntOrange">Block Account</span> Setup
              </h1>
              <p className="text-lg md:text-xl mb-8 text-burtBlue">
                Expert assistance in opening German Block Accounts for international students with 100% approval rate.
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
                  Open Account Now
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#2A4B7C" }}
                  href="#banks" 
                  className="px-8 py-3 border-2 border-white text-white rounded-md text-lg font-semibold transition duration-300 text-center"
                >
                  View Partner Banks
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
                  src="https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Bank cards and documents" 
                  className="rounded-lg shadow-2xl w-full max-w-md mx-auto border-8 border-white"
                />
                {/* Animated badges */}
                <motion.div 
                  variants={floatVariants}
                  animate="float"
                  className="absolute -bottom-8 -left-8 bg-burntOrange p-4 rounded-lg shadow-lg hidden md:block"
                >
                  <div className="text-white font-bold">100% Approval</div>
                </motion.div>
                <motion.div 
                  variants={floatVariants}
                  animate="float"
                  initial={{ y: 0 }}
                  className="absolute -top-8 -right-8 bg-white p-4 rounded-lg shadow-lg hidden md:block"
                >
                  <div className="text-burntBlue font-bold">24h Processing</div>
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
            <div className="text-gray-600">Approval Rate</div>
          </motion.div>
          <motion.div variants={itemVariants} className="text-center p-6 hover:shadow-md transition duration-300 rounded-lg">
            <div className="text-4xl font-bold text-burntOrange mb-2">24h</div>
            <div className="text-gray-600">Fastest Processing</div>
          </motion.div>
          <motion.div variants={itemVariants} className="text-center p-6 hover:shadow-md transition duration-300 rounded-lg">
            <div className="text-4xl font-bold text-burntOrange mb-2">5+</div>
            <div className="text-gray-600">Partner Banks</div>
          </motion.div>
          <motion.div variants={itemVariants} className="text-center p-6 hover:shadow-md transition duration-300 rounded-lg">
            <div className="text-4xl font-bold text-burntOrange mb-2">10K+</div>
            <div className="text-gray-600">Accounts Opened</div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-burntBlue mb-4">Our <span className="text-burntOrange">Block Account Services</span></h2>
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10H21" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 15H10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-burntBlue mb-4 text-center">Standard Block Account</h3>
              <p className="text-gray-600 text-center mb-4">
                Traditional blocked account with all required features for student visa applications.
              </p>
              <div className="text-burntOrange font-semibold text-center">€10,332/year • German Banks</div>
            </motion.div>
            
            {/* Service 2 */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-500"
            >
              <div className="w-16 h-16 bg-burntBlue rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-burntBlue mb-4 text-center">Digital Block Account</h3>
              <p className="text-gray-600 text-center mb-4">
                Fully online account opening with digital management and faster processing.
              </p>
              <div className="text-burntOrange font-semibold text-center">€10,332/year • Online Banks</div>
            </motion.div>
            
            {/* Service 3 */}
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
              <h3 className="text-xl font-bold text-burntBlue mb-4 text-center">Premium Assistance</h3>
              <p className="text-gray-600 text-center mb-4">
                Complete package including account setup, document review, and visa support.
              </p>
              <div className="text-burntOrange font-semibold text-center">Full Service • End-to-End</div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Banks Section */}
      <motion.section 
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        id="banks" 
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-6">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-burntBlue mb-4">Our <span className="text-burntOrange">Partner Banks</span></h2>
            <div className="w-20 h-1 bg-burntOrange mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {/* Bank 1 */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center p-6 bg-gray-50 rounded-lg"
            >
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="w-20 h-20 mb-4"
              >
                <img src="https://logo.clearbit.com/deutsche-bank.de" alt="Deutsche Bank" className="w-full h-full object-contain" />
              </motion.div>
              <h3 className="font-bold text-burntBlue">Deutsche Bank</h3>
              <p className="text-sm text-gray-600">Standard Account</p>
            </motion.div>
            
            {/* Bank 2 */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center p-6 bg-gray-50 rounded-lg"
            >
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="w-20 h-20 mb-4"
              >
                <img src="https://logo.clearbit.com/sparkasse.de" alt="Sparkasse" className="w-full h-full object-contain" />
              </motion.div>
              <h3 className="font-bold text-burntBlue">Sparkasse</h3>
              <p className="text-sm text-gray-600">Local Branches</p>
            </motion.div>
            
            {/* Bank 3 */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center p-6 bg-gray-50 rounded-lg"
            >
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="w-20 h-20 mb-4"
              >
                <img src="https://logo.clearbit.com/fintiba.com" alt="Fintiba" className="w-full h-full object-contain" />
              </motion.div>
              <h3 className="font-bold text-burntBlue">Fintiba</h3>
              <p className="text-sm text-gray-600">Digital Solution</p>
            </motion.div>
            
            {/* Bank 4 */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center p-6 bg-gray-50 rounded-lg"
            >
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="w-20 h-20 mb-4"
              >
                <img src="https://logo.clearbit.com/coracle.de" alt="Coracle" className="w-full h-full object-contain" />
              </motion.div>
              <h3 className="font-bold text-burntBlue">Coracle</h3>
              <p className="text-sm text-gray-600">Online Account</p>
            </motion.div>
            
            {/* Bank 5 */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center p-6 bg-gray-50 rounded-lg"
            >
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="w-20 h-20 mb-4"
              >
                <img src="https://logo.clearbit.com/expatrio.com" alt="Expatrio" className="w-full h-full object-contain" />
              </motion.div>
              <h3 className="font-bold text-burntBlue">Expatrio</h3>
              <p className="text-sm text-gray-600">All-in-One</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple <span className="text-burntOrange">4-Step Process</span></h2>
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
                  src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Block account process" 
                  className="rounded-lg shadow-xl w-full max-w-md mx-auto"
                />
                <motion.div 
                  variants={bankCardVariants}
                  animate="animate"
                  className="absolute -top-12 -right-12 w-24 h-24 hidden md:block"
                >
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5Z" stroke="white" strokeWidth="2"/>
                    <path d="M3 10H21" stroke="white" strokeWidth="2"/>
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
                  <p className="text-burtBlue">We guide you through all required documents for your blocked account application.</p>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-start p-4 bg-white bg-opacity-10 rounded-lg hover:shadow-md transition backdrop-filter backdrop-blur-sm mt-6">
                <div className="flex-shrink-0 bg-burntOrange rounded-full w-10 h-10 flex items-center justify-center text-white font-bold text-lg mr-4">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-burtBlue">Bank Selection</h3>
                  <p className="text-burtBlue">We help you choose the best bank option based on your needs and location.</p>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-start p-4 bg-white bg-opacity-10 rounded-lg hover:shadow-md transition backdrop-filter backdrop-blur-sm mt-6">
                <div className="flex-shrink-0 bg-burntOrange rounded-full w-10 h-10 flex items-center justify-center text-white font-bold text-lg mr-4">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-burtBlue" >Account Opening</h3>
                  <p className="text-burtBlue">We handle the entire application process with the bank on your behalf.</p>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-start p-4 bg-white bg-opacity-10 rounded-lg hover:shadow-md transition backdrop-filter backdrop-blur-sm mt-6">
                <div className="flex-shrink-0 bg-burntOrange rounded-full w-10 h-10 flex items-center justify-center text-white font-bold text-lg mr-4">4</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-burtBlue">Confirmation Letter</h3>
                  <p className="text-burtBlue">Receive your official confirmation letter for visa application within days.</p>
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
            Need a German Blocked Account?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl mb-8 max-w-2xl mx-auto">
            Get expert assistance with 100% approval rate and fastest processing time.
          </motion.p>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            nClick={() => setShowModal(true)} 
            className="px-8 py-4 bg-burntBlue text-white rounded-md text-lg font-semibold hover:bg-blue-900 transition duration-300 inline-block"
          >
            Open Your Account Now
          </motion.a>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section 
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-6">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-burntBlue mb-4">Frequently Asked <span className="text-burntOrange">Questions</span></h2>
            <div className="w-20 h-1 bg-burntOrange mx-auto"></div>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            <motion.div variants={itemVariants} className="mb-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-burntBlue mb-2">What is a blocked account?</h3>
                <p className="text-gray-600">
                  A blocked account (Sperrkonto) is a special bank account required for international students applying for a German student visa. It proves you have sufficient funds (currently €10,332 per year) to cover your living expenses in Germany.
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="mb-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-burntBlue mb-2">How long does it take to open a blocked account?</h3>
                <p className="text-gray-600">
                  With our service, most accounts are opened within 1-3 business days. The confirmation letter for your visa application is typically available within 24-48 hours after approval.
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="mb-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-burntBlue mb-2">Can I access the money in my blocked account?</h3>
                <p className="text-gray-600">
                  Yes, once you arrive in Germany and open a local bank account, you can transfer €861 per month from your blocked account to your regular account for living expenses.
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="mb-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-burntBlue mb-2">What documents do I need to open a blocked account?</h3>
                <p className="text-gray-600">
                  Typically you'll need your passport, proof of university admission (if available), and sometimes proof of address. We provide a complete checklist based on your chosen bank.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {showModal && (
        <EnquiryModalSpecial showModal={showModal} setShowModal={setShowModal} selectedsubject={selectedsubject} />
      )}

    </div>
  );
}