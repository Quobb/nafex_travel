import { motion, useAnimation } from 'framer-motion';
import { useEffect ,useState} from 'react';
import { useInView } from 'react-intersection-observer';
import EnquiryModalSpecial from './EnquiryModalSpecial';
export default function InvitationLetterAssistance() {
 const [showModal, setShowModal] = useState(false);
  const selectedsubject = { subject: "Request Letter" };

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

  const letterVariants = {
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
          variants={letterVariants}
          animate="animate"
          className="absolute top-20 left-20 w-24 h-24 opacity-20 hidden md:block"
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6C2 4.89543 2.89543 4 4 4Z" stroke="white" strokeWidth="2"/>
            <path d="M22 6L12 13L2 6" stroke="white" strokeWidth="2"/>
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
                Professional <span className="text-burntOrange">Invitation Letters</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-burtBlue">
                Legally compliant invitation letters for visas, guaranteed acceptance by embassies worldwide.
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
                  Request Letter Now
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#2A4B7C" }}
                  href="#types" 
                  className="px-8 py-3 border-2 border-white text-white rounded-md text-lg font-semibold transition duration-300 text-center"
                >
                  View Letter Types
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
                  src="https://images.unsplash.com/photo-1604999333679-b86d54738315?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Professional invitation letter" 
                  className="rounded-lg shadow-2xl w-full max-w-md mx-auto border-8 border-white"
                />
                {/* Animated badges */}
                <motion.div 
                  variants={floatVariants}
                  animate="float"
                  className="absolute -bottom-8 -left-8 bg-burntOrange p-4 rounded-lg shadow-lg hidden md:block"
                >
                  <div className="text-white font-bold">100% Acceptance</div>
                </motion.div>
                <motion.div 
                  variants={floatVariants}
                  animate="float"
                  initial={{ y: 0 }}
                  className="absolute -top-8 -right-8 bg-white p-4 rounded-lg shadow-lg hidden md:block"
                >
                  <div className="text-burntBlue font-bold">24h Service</div>
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
            <div className="text-gray-600">Embassy Acceptance</div>
          </motion.div>
          <motion.div variants={itemVariants} className="text-center p-6 hover:shadow-md transition duration-300 rounded-lg">
            <div className="text-4xl font-bold text-burntOrange mb-2">24h</div>
            <div className="text-gray-600">Express Service</div>
          </motion.div>
          <motion.div variants={itemVariants} className="text-center p-6 hover:shadow-md transition duration-300 rounded-lg">
            <div className="text-4xl font-bold text-burntOrange mb-2">50+</div>
            <div className="text-gray-600">Countries Covered</div>
          </motion.div>
          <motion.div variants={itemVariants} className="text-center p-6 hover:shadow-md transition duration-300 rounded-lg">
            <div className="text-4xl font-bold text-burntOrange mb-2">5K+</div>
            <div className="text-gray-600">Letters Issued</div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-burntBlue mb-4">Our <span className="text-burntOrange">Invitation Services</span></h2>
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-burntBlue mb-4 text-center">Personal Invitation</h3>
              <p className="text-gray-600 text-center mb-4">
                For visiting friends/family with full sponsorship details and accommodation proof.
              </p>
              <div className="text-burntOrange font-semibold text-center">Notarized • Embassy-Ready</div>
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
              <h3 className="text-xl font-bold text-burntBlue mb-4 text-center">Business Invitation</h3>
              <p className="text-gray-600 text-center mb-4">
                Official company letters for conferences, meetings, or training with company letterhead.
              </p>
              <div className="text-burntOrange font-semibold text-center">On Letterhead • Chamber Certified</div>
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
              <h3 className="text-xl font-bold text-burntBlue mb-4 text-center">Event Invitation</h3>
              <p className="text-gray-600 text-center mb-4">
                For weddings, graduations or special events with full event details and host verification.
              </p>
              <div className="text-burntOrange font-semibold text-center">Customized • Legalized</div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Letter Types Section */}
      <motion.section 
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        id="types" 
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-6">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-burntBlue mb-4">Invitation Letter <span className="text-burntOrange">Types</span></h2>
            <div className="w-20 h-1 bg-burntOrange mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Type 1 */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-50 p-6 rounded-lg border-l-4 border-burntOrange"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-burntOrange rounded-full flex items-center justify-center text-white mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="font-bold text-burntBlue">Visitor Visa</h3>
              </div>
              <p className="text-gray-600 text-sm">
                For family visits, tourism, or personal reasons with proof of relationship and financial support.
              </p>
            </motion.div>
            
            {/* Type 2 */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-50 p-6 rounded-lg border-l-4 border-burntOrange"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-burntOrange rounded-full flex items-center justify-center text-white mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-burntBlue">Business Visa</h3>
              </div>
              <p className="text-gray-600 text-sm">
                For meetings, conferences, or training with company details and purpose of visit.
              </p>
            </motion.div>
            
            {/* Type 3 */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-50 p-6 rounded-lg border-l-4 border-burntOrange"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-burntOrange rounded-full flex items-center justify-center text-white mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-burntBlue">Special Events</h3>
              </div>
              <p className="text-gray-600 text-sm">
                For weddings, graduations, or ceremonies with event details and host verification.
              </p>
            </motion.div>
            
            {/* Type 4 */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-50 p-6 rounded-lg border-l-4 border-burntOrange"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-burntOrange rounded-full flex items-center justify-center text-white mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-bold text-burntBlue">Student Visa</h3>
              </div>
              <p className="text-gray-600 text-sm">
                For university admissions with proof of enrollment and accommodation arrangements.
              </p>
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
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Invitation letter process" 
                  className="rounded-lg shadow-xl w-full max-w-md mx-auto"
                />
                <motion.div 
                  variants={letterVariants}
                  animate="animate"
                  className="absolute -top-12 -right-12 w-24 h-24 hidden md:block"
                >
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6C2 4.89543 2.89543 4 4 4Z" stroke="white" strokeWidth="2"/>
                    <path d="M22 6L12 13L2 6" stroke="white" strokeWidth="2"/>
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
                  <h3 className="text-xl font-bold mb-2 text-burtBlue">Information Collection</h3>
                  <p className="text-burtBlue">We gather all required details about inviter and invitee.</p>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-start p-4 bg-white bg-opacity-10 rounded-lg hover:shadow-md transition backdrop-filter backdrop-blur-sm mt-6">
                <div className="flex-shrink-0 bg-burntOrange rounded-full w-10 h-10 flex items-center justify-center text-white font-bold text-lg mr-4">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-burtBlue">Document Drafting</h3>
                  <p className="text-burtBlue">Our experts prepare the letter according to embassy requirements.</p>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-start p-4 bg-white bg-opacity-10 rounded-lg hover:shadow-md transition backdrop-filter backdrop-blur-sm mt-6">
                <div className="flex-shrink-0 bg-burntOrange rounded-full w-10 h-10 flex items-center justify-center text-white font-bold text-lg mr-4">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-burtBlue">Review & Notarization</h3>
                  <p className="text-burtBlue">Letter is verified and notarized if required.</p>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-start p-4 bg-white bg-opacity-10 rounded-lg hover:shadow-md transition backdrop-filter backdrop-blur-sm mt-6">
                <div className="flex-shrink-0 bg-burntOrange rounded-full w-10 h-10 flex items-center justify-center text-white font-bold text-lg mr-4">4</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-burtBlue">Delivery</h3>
                  <p className="text-burtBlue">Receive your invitation letter via email/courier.</p>
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
            Need an Invitation Letter?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl mb-8 max-w-2xl mx-auto">
            Get a professionally drafted invitation letter with 100% embassy acceptance guarantee.
          </motion.p>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowModal(true)} 
            className="px-8 py-4 bg-burntBlue text-white rounded-md text-lg font-semibold hover:bg-blue-900 transition duration-300 inline-block"
          >
            Request Your Letter Now
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
                <h3 className="text-xl font-bold text-burntBlue mb-2">What documents do I need to provide?</h3>
                <p className="text-gray-600">
                  Typically you'll need copies of your ID, proof of address, and details about the invitee (passport copy, relationship proof). For business letters, company registration documents may be required.
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="mb-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-burntBlue mb-2">How long does it take to get the invitation letter?</h3>
                <p className="text-gray-600">
                  Standard service takes 2-3 business days. Express 24-hour service is available for urgent requests.
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="mb-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-burntBlue mb-2">Do you provide notarized letters?</h3>
                <p className="text-gray-600">
                  Yes, we can arrange notarization and legalization based on the destination country's requirements.
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