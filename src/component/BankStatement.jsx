import { motion, useAnimation } from 'framer-motion';
import { useEffect ,useState} from 'react';
import { useInView } from 'react-intersection-observer';
import EnquiryModalSpecial from './EnquiryModalSpecial';
export default function BankStatement() {
  const [showModal, setShowModal] = useState(false);
  const selectedsubject = { subject: "Bank Statement" };
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

  const documentShake = {
    shake: {
      x: [0, -5, 5, -5, 5, 0],
      rotate: [0, -5, 5, -5, 5, 0],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 3
      }
    }
  };

  return (
    <div className="font-sans bg-gray-50 overflow-x-hidden">

      <section className="hero-clip-path bg-gradient-to-r from-burtBlue to-blue-900 text-white pb-20 md:pb-32 relative overflow-hidden">
        {/* Animated decorative elements */}
        <motion.div 
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute top-20 left-20 w-16 h-16 bg-burntOrange rounded-full"
        ></motion.div>
        
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
                Professional <span className="text-burntOrange">Bank Statement</span> Assistance
              </h1>
              <p className="text-lg md:text-xl mb-8 text-burtBlue">
                Get expert help with bank statement preparation for visas, loans, and financial documentation.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4" onClick={() => setShowModal(true)} >
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    scale: [1, 1.03, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity
                  }}
                  onClick={() => setShowModal(true)}
                  className="px-8 py-3 bg-burntOrange text-white rounded-md text-lg font-semibold hover:bg-orange-700 transition duration-300 text-center"
                >
                  Request Service
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#2A4B7C" }}
                  href="#services" 
                  className="px-8 py-3 border-2 border-white text-white rounded-md text-lg font-semibold transition duration-300 text-center"
                >
                  Learn More
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
                  variants={documentShake}
                  animate="shake"
                  src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Bank statement documents" 
                  className="rounded-lg shadow-2xl w-full max-w-md mx-auto border-8 border-white"
                />
                {/* Animated badges */}
                <motion.div 
                  variants={floatVariants}
                  animate="float"
                  className="absolute -bottom-8 -left-8 bg-burntOrange p-4 rounded-lg shadow-lg hidden md:block"
                >
                  <div className="text-white font-bold">100% Compliance</div>
                </motion.div>
                <motion.div 
                  variants={floatVariants}
                  animate="float"
                  initial={{ y: 0 }}
                  className="absolute -top-8 -right-8 bg-white p-4 rounded-lg shadow-lg hidden md:block"
                >
                  <div className="text-burtBlue font-bold">24h Express Service</div>
                </motion.div>
                <motion.img 
                  variants={floatVariants}
                  animate="float"
                  src="https://svgshare.com/i/12Q5.svg" 
                  className="absolute -top-16 right-16 w-20 h-20 hidden md:block" 
                  alt="Document icon"
                />
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
            <div className="text-gray-600">Acceptance Rate</div>
          </motion.div>
          <motion.div variants={itemVariants} className="text-center p-6 hover:shadow-md transition duration-300 rounded-lg">
            <div className="text-4xl font-bold text-burntOrange mb-2">24h</div>
            <div className="text-gray-600">Express Service</div>
          </motion.div>
          <motion.div variants={itemVariants} className="text-center p-6 hover:shadow-md transition duration-300 rounded-lg">
            <div className="text-4xl font-bold text-burntOrange mb-2">5000+</div>
            <div className="text-gray-600">Clients Served</div>
          </motion.div>
          <motion.div variants={itemVariants} className="text-center p-6 hover:shadow-md transition duration-300 rounded-lg">
            <div className="text-4xl font-bold text-burntOrange mb-2">50+</div>
            <div className="text-gray-600">Banks Supported</div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-burtBlue mb-4">Our <span className="text-burntOrange">Bank Statement</span> Services</h2>
            <div className="w-20 h-1 bg-burntOrange mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-500"
            >
              <div className="w-16 h-16 bg-burtBlue rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-burtBlue mb-4 text-center">Statement Formatting</h3>
              <p className="text-gray-600 text-center mb-4">
                Professionally format your bank statements to meet official requirements.
              </p>
              <div className="text-burntOrange font-semibold text-center">All Bank Formats</div>
            </motion.div>
            
            {/* Service 2 */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-500"
            >
              <div className="w-16 h-16 bg-burtBlue rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-burtBlue mb-4 text-center">Balance Certification</h3>
              <p className="text-gray-600 text-center mb-4">
                Official certification of account balances for visa and immigration purposes.
              </p>
              <div className="text-burntOrange font-semibold text-center">Bank-Standard Certificates</div>
            </motion.div>
            
            {/* Service 3 */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-500"
            >
              <div className="w-16 h-16 bg-burtBlue rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-burtBlue mb-4 text-center">Transaction Analysis</h3>
              <p className="text-gray-600 text-center mb-4">
                Detailed analysis and explanation of transactions for financial documentation.
              </p>
              <div className="text-burntOrange font-semibold text-center">Comprehensive Reports</div>
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
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-6">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-burtBlue mb-4">Our Simple <span className="text-burntOrange">Process</span></h2>
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
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Bank statement process" 
                  className="rounded-lg shadow-xl w-full max-w-md mx-auto"
                />
                <motion.img 
                  variants={floatVariants}
                  animate="float"
                  src="https://svgshare.com/i/12Q5.svg" 
                  className="absolute -top-12 -right-12 w-24 h-24 hidden md:block" 
                  alt="Document icon"
                />
              </div>
            </motion.div>
            <motion.div 
              variants={containerVariants}
              className="md:w-1/2"
            >
              <motion.div variants={itemVariants} className="flex items-start p-4 bg-gray-50 rounded-lg hover:shadow-md transition">
                <div className="flex-shrink-0 bg-burntOrange rounded-full w-10 h-10 flex items-center justify-center text-white font-bold text-lg mr-4">1</div>
                <div>
                  <h3 className="text-xl font-bold text-burtBlue mb-2">Submit Your Documents</h3>
                  <p className="text-gray-600">Upload your current bank statements securely through our platform.</p>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-start p-4 bg-gray-50 rounded-lg hover:shadow-md transition mt-6">
                <div className="flex-shrink-0 bg-burntOrange rounded-full w-10 h-10 flex items-center justify-center text-white font-bold text-lg mr-4">2</div>
                <div>
                  <h3 className="text-xl font-bold text-burtBlue mb-2">Expert Review</h3>
                  <p className="text-gray-600">Our specialists analyze and prepare your statements according to requirements.</p>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-start p-4 bg-gray-50 rounded-lg hover:shadow-md transition mt-6">
                <div className="flex-shrink-0 bg-burntOrange rounded-full w-10 h-10 flex items-center justify-center text-white font-bold text-lg mr-4">3</div>
                <div>
                  <h3 className="text-xl font-bold text-burtBlue mb-2">Final Approval</h3>
                  <p className="text-gray-600">You review the prepared documents and request any adjustments.</p>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-start p-4 bg-gray-50 rounded-lg hover:shadow-md transition mt-6">
                <div className="flex-shrink-0 bg-burntOrange rounded-full w-10 h-10 flex items-center justify-center text-white font-bold text-lg mr-4">4</div>
                <div>
                  <h3 className="text-xl font-bold text-burtBlue mb-2">Delivery</h3>
                  <p className="text-gray-600">Receive your professionally prepared bank statements ready for submission.</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section 
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        id="testimonials" 
        className="py-20 bg-burtBlue text-white"
      >
        <div className="container mx-auto px-6">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Client <span className="text-burntOrange">Testimonials</span></h2>
            <div className="w-20 h-1 bg-burntOrange mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-filter backdrop-blur-sm hover:shadow-lg transition duration-500"
            >
              <div className="flex items-center mb-4">
                <motion.img 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 1 }}
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                  className="w-12 h-12 rounded-full mr-4" 
                  alt="Client"
                />
                <div>
                  <h4 className="font-bold  text-burtBlue">Sarah Johnson</h4>
                  <div className="text-burntOrange">Visa Applicant</div>
                </div>
              </div>
              <p className="italic mb-4 text-burtBlue">"Nafex prepared my bank statements perfectly for my UK visa application. The documents were accepted without any questions."</p>
              <div className="text-yellow-300">★★★★★</div>
            </motion.div>
            
            {/* Testimonial 2 */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-filter backdrop-blur-sm hover:shadow-lg transition duration-500"
            >
              <div className="flex items-center mb-4">
                <motion.img 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 1 }}
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                  className="w-12 h-12 rounded-full mr-4" 
                  alt="Client"
                />
                <div>
                  <h4 className="font-bold text-burtBlue ">David Müller</h4>
                  <div className="text-burntOrange">Business Owner</div>
                </div>
              </div>
              <p className="italic mb-4 text-burtBlue">"The balance certification service helped me secure a business loan. The bank was impressed with the professional presentation."</p>
              <div className="text-yellow-300">★★★★★</div>
            </motion.div>
            
            {/* Testimonial 3 */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-filter backdrop-blur-sm hover:shadow-lg transition duration-500"
            >
              <div className="flex items-center mb-4">
                <motion.img 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 1 }}
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                  className="w-12 h-12 rounded-full mr-4" 
                  alt="Client"
                />
                <div>
                  <h4 className="font-bold text-burtBlue">Amina Chen</h4>
                  <div className="text-burntOrange">Student Visa Applicant</div>
                </div>
              </div>
              <p className="italic mb-4 text-burtBlue">"I needed my parents' bank statements formatted for my student visa. Nafex did it overnight and saved my application!"</p>
              <div className="text-yellow-300">★★★★★</div>
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
            Need Bank Statement Assistance?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl mb-8 max-w-2xl mx-auto">
            Let our experts handle your financial documentation with precision and confidentiality.
          </motion.p>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowModal(true)} 
            className="px-8 py-4 bg-burtBlue text-white rounded-md text-lg font-semibold hover:bg-blue-900 transition duration-300 inline-block"
          >
            Get Started Now
          </motion.a>
        </div>
      </motion.section>
      {showModal && (
        <EnquiryModalSpecial showModal={showModal} setShowModal={setShowModal} selectedsubject={selectedsubject} />
      )}

    </div>
  );
}