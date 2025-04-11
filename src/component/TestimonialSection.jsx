import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import supabase from '../supabaseClient';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const zoomVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const slideInLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

const slideInRight = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

function Testimonial() {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
    });
  const modalRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      const { name, email, message } = formData;
  
      if (!name || !email || !message) {
        alert('Please fill out all fields');
        return;
      }
  
      setLoading(true);
  
      const { data, error } = await supabase
        .from('consult')
        .insert([{ name, email, message }]);
  
        setLoading(false);
        
      if (error) {
        console.error('Error saving enquiry:', error);
      } else {
        alert('Your enquiry has been submitted! you will contacted by our team');
        setFormData({ name: '', email: '', message: '' });
        setShowModal(false);
      }
    };

  const handleModalClose = () => setShowModal(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    };

    if (showModal) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showModal]);

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-burtBlue to-burntOrange text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="md:w-2/3"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              variants={itemVariants}
            >
              Success Stories
            </motion.h1>
            <motion.p 
              className="text-xl mb-8"
              variants={itemVariants}
            >
              Hear from our clients who have successfully traveled, obtained visas, and secured scholarships through our services.
            </motion.p>
            <motion.div 
              className="flex space-x-4"
              variants={itemVariants}
            >
              <a href="#" className="bg-white text-burtBlue px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition">View Services</a>
              {/* <a href="#" className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:bg-opacity-10 transition">Share Your Story</a> */}
            </motion.div>
          </motion.div>
          <motion.div 
            className="absolute -right-20 -bottom-20 opacity-20 md:opacity-100"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, type: 'spring' }}
          >
            {/* Replace with your Lottie player component */}
            <div style={{ width: '300px', height: '300px' }}></div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid md:grid-cols-4 gap-8 text-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div 
              className="p-6 hover:scale-105 transition duration-300"
              variants={zoomVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl font-bold text-burtBlue mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </motion.div>
            <motion.div 
              className="p-6 hover:scale-105 transition duration-300"
              variants={zoomVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl font-bold text-burntOrange mb-2">2,500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </motion.div>
            <motion.div 
              className="p-6 hover:scale-105 transition duration-300"
              variants={zoomVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl font-bold text-burtBlue mb-2">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </motion.div>
            <motion.div 
              className="p-6 hover:scale-105 transition duration-300"
              variants={zoomVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl font-bold text-burntOrange mb-2">50+</div>
              <div className="text-gray-600">Countries Served</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Featured Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Real experiences from our clients around the world</p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Testimonial 1 */}
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-500"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="Sarah Johnson" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-gray-500 text-sm">Student Visa to Canada</p>
                </div>
              </div>
              <div className="text-gray-600 mb-6">
                "Nafex made my dream of studying in Canada a reality. Their guidance through the visa process was impeccable. I was nervous about the interview, but their mock sessions prepared me perfectly. Within 3 months, I had my visa approved!"
              </div>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>
            
            {/* Testimonial 2 */}
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-500"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="Michael Chen" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Michael Chen</h4>
                  <p className="text-gray-500 text-sm">Work Visa to Germany</p>
                </div>
              </div>
              <div className="text-gray-600 mb-6">
                "I was struggling with the complex German work visa requirements. Nafex not only simplified the process but connected me with job opportunities. Their network of employers abroad is impressive. I'm now happily working in Berlin!"
              </div>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>
            
            {/* Testimonial 3 */}
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-500"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="Amina Diallo" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Amina Diallo</h4>
                  <p className="text-gray-500 text-sm">Scholarship to UK</p>
                </div>
              </div>
              <div className="text-gray-600 mb-6">
                "Thanks to Nafex, I received a full scholarship to study at the University of London! Their team identified programs I never would have found on my own and helped craft a winning application. I'm forever grateful for their expertise."
              </div>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Video Testimonials</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Hear directly from our clients about their experiences</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Video 1 */}
            <motion.div 
              className="relative rounded-xl overflow-hidden shadow-lg group"
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                <img src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Video thumbnail" className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-burtBlue bg-opacity-80 rounded-full flex items-center justify-center group-hover:bg-opacity-100 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">From Nigeria to Canada: My Study Visa Journey</h3>
                <p className="text-gray-600">David shares how Nafex helped him secure his Canadian study visa in record time.</p>
              </div>
            </motion.div>
            
            {/* Video 2 */}
            <motion.div 
              className="relative rounded-xl overflow-hidden shadow-lg group"
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Video thumbnail" className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-burtBlue bg-opacity-80 rounded-full flex items-center justify-center group-hover:bg-opacity-100 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">Full Scholarship to Harvard University</h3>
                <p className="text-gray-600">Maria explains how our scholarship advisors helped her win a full ride to an Ivy League school.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* More Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">More Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Read what others are saying about their experiences with us</p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Testimonial 4 */}
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
              variants={zoomVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="Emma Wilson" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Emma Wilson</h4>
                  <p className="text-gray-500 text-sm">Tourist Visa to Japan</p>
                </div>
              </div>
              <div className="text-gray-600 text-sm mb-4">
                "The Japan tourist visa process seemed daunting, but Nafex made it so simple. They handled everything from itinerary planning to document submission. Got my visa in just 5 working days!"
              </div>
              <div className="flex text-yellow-400 text-sm">
                ★★★★★
              </div>
            </motion.div>
            
            {/* Testimonial 5 */}
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
              variants={zoomVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                  <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="James Rodriguez" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">James Rodriguez</h4>
                  <p className="text-gray-500 text-sm">Work Visa to Australia</p>
                </div>
              </div>
              <div className="text-gray-600 text-sm mb-4">
                "As a skilled worker, I needed help with the Australian points system. Nafex' consultants optimized my application and I got invited to apply within 2 months. Now happily settled in Sydney!"
              </div>
              <div className="flex text-yellow-400 text-sm">
                ★★★★★
              </div>
            </motion.div>
            
            {/* Testimonial 6 */}
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
              variants={zoomVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                  <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="Sophia Kim" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Sophia Kim</h4>
                  <p className="text-gray-500 text-sm">Student Visa to USA</p>
                </div>
              </div>
              <div className="text-gray-600 text-sm mb-4">
                "My F1 visa interview was nerve-wracking, but the mock interviews with Nafex prepared me perfectly. The officer even complimented how well-prepared I was! Currently studying at NYU."
              </div>
              <div className="flex text-yellow-400 text-sm">
                ★★★★★
              </div>
            </motion.div>
            
            {/* Testimonial 7 */}
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
              variants={zoomVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                  <img src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="Kwame Nkrumah" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Kwame Nkrumah</h4>
                  <p className="text-gray-500 text-sm">Scholarship to France</p>
                </div>
              </div>
              <div className="text-gray-600 text-sm mb-4">
                "I received the Eiffel Excellence Scholarship thanks to Nafex' guidance. Their knowledge of European scholarship programs is unmatched. Now pursuing my Master's at Sorbonne University."
              </div>
              <div className="flex text-yellow-400 text-sm">
                ★★★★★
              </div>
            </motion.div>
            
            {/* Testimonial 8 */}
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
              variants={zoomVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                  <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="Olivia Martinez" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Olivia Martinez</h4>
                  <p className="text-gray-500 text-sm">Family Visa to UK</p>
                </div>
              </div>
              <div className="text-gray-600 text-sm mb-4">
                "Reuniting with my husband in the UK seemed impossible with the strict requirements. Nafex helped us build a strong case and we got approval in 3 weeks! Forever grateful."
              </div>
              <div className="flex text-yellow-400 text-sm">
                ★★★★★
              </div>
            </motion.div>
            
            {/* Testimonial 9 */}
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
              variants={zoomVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                  <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="Raj Patel" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Raj Patel</h4>
                  <p className="text-gray-500 text-sm">Business Visa to China</p>
                </div>
              </div>
              <div className="text-gray-600 text-sm mb-4">
                "As an entrepreneur needing frequent travel to China, Nafex secured me a 10-year business visa. Their knowledge of Chinese visa policies saved me countless hours and headaches."
              </div>
              <div className="flex text-red-400 text-sm">
                ★★★★★
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <a href="#" className="inline-block bg-burtBlue text-white px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition">Load More Testimonials</a>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="py-16 bg-burtBlue text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl font-bold mb-6"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Ready to Start Your Journey?
          </motion.h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Join thousands of satisfied clients who have achieved their international dreams with our help.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button 
              onClick={() => setShowModal(true)}
              className="bg-white text-burtBlue px-8 py-4 rounded-lg font-bold hover:bg-opacity-90 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Free Consultation
            </motion.button>
            <motion.a 
              href="tel:+2330553831241"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:bg-opacity-10 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Call Us Now
            </motion.a>
          </div>
        </div>
      </motion.section>
      {showModal && (
        <div className="fixed inset-0  bg-opacity-50 z-50 flex justify-end">
          <motion.div
            ref={modalRef}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4 }}
            className="bg-white w-full sm:w-[90%] md:w-[70%] lg:w-[40%] xl:w-[30%] h-full p-6 relative overflow-y-auto"
          >
            <button
              onClick={handleModalClose}
              className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            <h2 className="text-2xl font-bold text-burtBlue mb-4">Free Consultation</h2>
            <p className="text-gray-600 mb-6">
              Fill out the form below, and our team will reach out to you shortly!
            </p>

            {/* Sample Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input 
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name" 
              className="w-full p-3 border rounded-lg" />
              <input
               type="email"
               name="email"
               value={formData.email}
               onChange={handleInputChange} 
               placeholder="Your Email" 
               className="w-full p-3 border rounded-lg" />
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="How can we help you?" 
                rows="4" 
                className="w-full p-3 border rounded-lg" />
              <button className="w-full bg-burtblue text-white py-3 rounded-lg">
              {loading ? (
                <>
                  <i className="fa-solid fa-spinner animate-spin"></i>
                  Sending...
                </>
              ) : (
                'Submit '
              )}
                </button>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default Testimonial;