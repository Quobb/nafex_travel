import { motion, useAnimation } from 'framer-motion';
import { useEffect ,useState} from 'react';
import { useInView } from 'react-intersection-observer';
import EnquiryModalSpecial from './EnquiryModalSpecial';

function StudyAbroadSection() {
  const [showModal, setShowModal] = useState(false);
   const selectedsubject = { subject: "Study Abroad" };
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
 
      controls.start('visible');
    
  }, [controls, inView]);

  // Variants for animations
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

  const bounceVariants = {
    bounce: {
      y: [0, -20, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeOut"
      }
    }
  };

  const waveVariants = {
    wave: {
      rotate: [0, 14, -8, 14, -4, 10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="font-sans bg-gray-50 overflow-x-hidden">
    

      {/* Hero Section */}
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
                Study Abroad with <span className="text-burntOrange">Scholarship</span> Support
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-200">
                Unlock global education opportunities with our expert guidance on admissions and scholarship applications.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
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
                  Find Your Program
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#2A4B7C" }}
                  href="#scholarships" 
                  className="px-8 py-3 border-2 border-white text-white rounded-md text-lg font-semibold transition duration-300 text-center"
                >
                  Explore Scholarships
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
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Students studying abroad" 
                  className="rounded-lg shadow-2xl w-full max-w-md mx-auto border-8 border-white"
                />
                {/* Animated badges */}
                <motion.div 
                  variants={floatVariants}
                  animate="float"
                  className="absolute -bottom-8 -left-8 bg-burntOrange p-4 rounded-lg shadow-lg hidden md:block"
                >
                  <div className="text-white font-bold">90% Success Rate</div>
                </motion.div>
                <motion.div 
                  variants={floatVariants}
                  animate="float"
                  initial={{ y: 0 }}
                  className="absolute -top-8 -right-8 bg-white p-4 rounded-lg shadow-lg hidden md:block"
                >
                  <div className="text-burtBlue font-bold">$5M+ in Scholarships</div>
                </motion.div>
            
                <motion.svg 
                variants={floatVariants}
                animate="float"
                xmlns="http://www.w3.org/2000/svg" className="absolute -top-16 right-16 w-20 h-20 hidden md:block"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </motion.svg>
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
            <div className="text-4xl font-bold text-burntOrange mb-2">50+</div>
            <div className="text-gray-600">Countries</div>
          </motion.div>
          <motion.div variants={itemVariants} className="text-center p-6 hover:shadow-md transition duration-300 rounded-lg">
            <div className="text-4xl font-bold text-burntOrange mb-2">500+</div>
            <div className="text-gray-600">Universities</div>
          </motion.div>
          <motion.div variants={itemVariants} className="text-center p-6 hover:shadow-md transition duration-300 rounded-lg">
            <div className="text-4xl font-bold text-burntOrange mb-2">90%</div>
            <div className="text-gray-600">Success Rate</div>
          </motion.div>
          <motion.div variants={itemVariants} className="text-center p-6 hover:shadow-md transition duration-300 rounded-lg">
            <div className="text-4xl font-bold text-burntOrange mb-2">$5M+</div>
            <div className="text-gray-600">Scholarships Won</div>
          </motion.div>
        </div>
      </motion.section>

      {/* Programs Section */}
      <motion.section 
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        id="programs" 
        className="bg-gray-50 py-20"
      >
        <div className="container mx-auto px-6">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-burtBlue mb-4">Popular <span className="text-burntOrange">Study Abroad</span> Programs</h2>
            <div className="w-20 h-1 bg-burntOrange mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Program 1 */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-500"
            >
              <div className="w-16 h-16 bg-burtBlue rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-burtBlue mb-4 text-center">Undergraduate Degrees</h3>
              <p className="text-gray-600 text-center mb-4">
                Bachelor's programs at top universities worldwide with scholarship opportunities.
              </p>
              <div className="text-burntOrange font-semibold text-center">USA • UK • Canada • Australia</div>
            </motion.div>
            
            {/* Program 2 */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-500"
            >
              <div className="w-16 h-16 bg-burtBlue rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-burtBlue mb-4 text-center">Graduate Programs</h3>
              <p className="text-gray-600 text-center mb-4">
                Master's and PhD programs with research opportunities and funding options.
              </p>
              <div className="text-burntOrange font-semibold text-center">Germany • France • Netherlands • Sweden</div>
            </motion.div>
            
            {/* Program 3 */}
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
              <h3 className="text-xl font-bold text-burtBlue mb-4 text-center">Language Courses</h3>
              <p className="text-gray-600 text-center mb-4">
                Intensive language preparation for university admission requirements.
              </p>
              <div className="text-burntOrange font-semibold text-center">Spain • Japan • China • Italy</div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Scholarships Section */}
      <motion.section 
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        id="scholarships" 
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-6">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-burtBlue mb-4">Scholarship <span className="text-burntOrange">Opportunities</span></h2>
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
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Scholarship documents" 
                  className="rounded-lg shadow-xl w-full max-w-md mx-auto"
                />
               
                <motion.svg 
                variants={floatVariants}
                animate="float"
                xmlns="http://www.w3.org/2000/svg" className="absolute -top-12 -right-12 w-24 h-24 hidden md:block"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </motion.svg>
              </div>
            </motion.div>
            <motion.div 
              variants={containerVariants}
              className="md:w-1/2"
            >
              <motion.div variants={itemVariants} className="flex items-start p-4 bg-gray-50 rounded-lg hover:shadow-md transition">
                <div className="flex-shrink-0 bg-burntOrange rounded-full w-10 h-10 flex items-center justify-center text-white font-bold text-lg mr-4">$</div>
                <div>
                  <h3 className="text-xl font-bold text-burtBlue mb-2">Merit-Based Scholarships</h3>
                  <p className="text-gray-600">Awarded for academic excellence, test scores, and outstanding achievements.</p>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-start p-4 bg-gray-50 rounded-lg hover:shadow-md transition mt-6">
                <div className="flex-shrink-0 bg-burntOrange rounded-full w-10 h-10 flex items-center justify-center text-white font-bold text-lg mr-4">🌍</div>
                <div>
                  <h3 className="text-xl font-bold text-burtBlue mb-2">International Student Grants</h3>
                  <p className="text-gray-600">Special funding opportunities exclusively for international applicants.</p>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-start p-4 bg-gray-50 rounded-lg hover:shadow-md transition mt-6">
                <div className="flex-shrink-0 bg-burntOrange rounded-full w-10 h-10 flex items-center justify-center text-white font-bold text-lg mr-4">🔬</div>
                <div>
                  <h3 className="text-xl font-bold text-burtBlue mb-2">Research Fellowships</h3>
                  <p className="text-gray-600">Funding for graduate students engaged in innovative research projects.</p>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-start p-4 bg-gray-50 rounded-lg hover:shadow-md transition mt-6">
                <div className="flex-shrink-0 bg-burntOrange rounded-full w-10 h-10 flex items-center justify-center text-white font-bold text-lg mr-4">🏆</div>
                <div>
                  <h3 className="text-xl font-bold text-burtBlue mb-2">Country-Specific Awards</h3>
                  <p className="text-gray-600">Scholarships targeting students from specific regions or countries.</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Success Stories Section */}
      <motion.section 
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        id="success" 
        className="py-20 bg-burtBlue text-white"
      >
        <div className="container mx-auto px-6">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Student <span className="text-burntOrange">Success</span> Stories</h2>
            <div className="w-20 h-1 bg-burntOrange mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Story 1 */}
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
                  alt="Student"
                />
                <div>
                  <h4 className="font-bold text-burtBlue">Sarah Johnson</h4>
                  <div className="text-burntOrange">University of Toronto, Canada</div>
                </div>
              </div>
              <p className="italic mb-4 text-burtBlue">"Nafex helped me secure a $40,000 scholarship for my Computer Science degree. Their guidance on the application process was invaluable."</p>
              <div className="text-yellow-300">★★★★★</div>
            </motion.div>
            
            {/* Story 2 */}
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
                  alt="Student"
                />
                <div>
                  <h4 className="font-bold text-burtBlue">David Müller</h4>
                  <div className="text-burntOrange">Technical University of Munich, Germany</div>
                </div>
              </div>
              <p className="italic mb-4 text-burtBlue">"Thanks to Nafex, I'm now studying engineering in Germany with a full tuition waiver and monthly stipend."</p>
              <div className="text-yellow-300">★★★★★</div>
            </motion.div>
            
            {/* Story 3 */}
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
                  alt="Student"
                />
                <div>
                  <h4 className="font-bold text-burtBlue">Amina Chen</h4>
                  <div className="text-burntOrange">University of Tokyo, Japan</div>
                </div>
              </div>
              <p className="italic mb-4 text-burtBlue">"The MEXT scholarship I received with Nafex's help covers all my expenses in Japan. Their expertise made all the difference."</p>
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
            Ready to Study Abroad?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl mb-8 max-w-2xl mx-auto">
            Let our experts help you find the perfect program and maximize your scholarship opportunities.
          </motion.p>
          <motion.a 
            variants={waveVariants}
            animate="wave"
            onClick={() => setShowModal(true)} 
            className="px-8 py-4 bg-burtBlue text-white rounded-md text-lg font-semibold hover:bg-blue-900 transition duration-300 inline-block"
          >
            Get Free Consultation
          </motion.a>
        </div>
      </motion.section>
      {showModal && (
        <EnquiryModalSpecial showModal={showModal} setShowModal={setShowModal} selectedsubject={selectedsubject} />
      )}
     
    </div>
  );
}

export default StudyAbroadSection;