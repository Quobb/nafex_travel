import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import supabase from '../supabaseClient';

const ServicesPage = () => {
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
        .from('enquiry')
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



  const services = [
    {
      category: "Study Abroad",
      items: [
        "Study abroad with scholarship",
        "Work & Study Abroad",
        "University Application Assistance"
      ],
      icon: "🎓"
    },
    {
      category: "Visa Services",
      items: [
        "Tourist Visa",
        "Visa Procurement",
        "Visa Interview Preparation",
        "Tourist Visa Assistance"
      ],
      icon: "🛂"
    },
    {
      category: "Travel Documents",
      items: [
        "Passport Application",
        "Flight Reservation",
        "Invitation Letter",
        "Conference Abroad Support"
      ],
      icon: "✈️"
    },
    {
      category: "Financial Services",
      items: [
        "Bank Statement Support",
        "Block Account Assistance",
        "Financial Documentation"
      ],
      icon: "💰"
    },
    {
      category: "Business Services",
      items: [
        "Company Registration",
        "Business Visa Support",
        "Corporate Immigration"
      ],
      icon: "🏢"
    },
    {
      category: "Special Programs",
      items: [
        "American Lottery (DV Program)",
        "Cultural Exchange Programs",
        "Internship Abroad"
      ],
      icon: "🎰"
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-burtBlue to-burntOrange text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center md:text-left"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Our Services
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl max-w-3xl mx-auto md:mx-0 mb-8"
            >
              Comprehensive solutions for your international education, travel, and business needs.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <a 
                href="#services" 
                className="inline-block bg-white text-burtBlue px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition duration-300"
              >
                Explore Services
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-burtBlue">What We Offer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              NAFEX provides end-to-end solutions for all your international needs with personalized service.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-4">{service.icon}</span>
                    <h3 className="text-2xl font-bold text-burtBlue">{service.category}</h3>
                  </div>
                  <ul className="space-y-3">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-5 w-5 text-burntOrange mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button  onClick={() => setShowModal(true)} className="mt-6 text-burtBlue font-medium hover:text-burntOrange transition flex items-center">
                    Learn more
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
                        <h2 className="text-2xl font-bold text-burtBlue mb-4">Enquiry</h2>
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
                          <button className="w-full bg-burntOrange text-white py-3 rounded-lg">
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



      {/* How It Works */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-burtBlue/5 to-burntOrange/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-burtBlue">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our simple 4-step process to get you where you want to be
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Free initial assessment of your needs" },
              { step: "02", title: "Documentation", desc: "We handle all paperwork requirements" },
              { step: "03", title: "Application", desc: "Submission and follow-up with authorities" },
              { step: "04", title: "Approval", desc: "Celebrate your successful application" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-burtBlue text-white text-2xl font-bold flex items-center justify-center mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-burtBlue mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-burtBlue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Journey?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact NAFEX today and let us handle all the complexities of your international plans.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-burtBlue px-8 py-4 rounded-lg font-bold hover:bg-opacity-90 transition"
              >
                Get Started
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:bg-opacity-10 transition"
              >
                Call Us Now
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;