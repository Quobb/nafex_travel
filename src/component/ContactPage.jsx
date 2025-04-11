import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import supabase from '../supabaseClient';


const ContactPage = () => {

const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: ''
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message, subject } = formData;

    setLoading(true);

    if (!name || !email || !message || !subject) {
      alert('Please fill out all fields');
      return;
    }

    const { data, error } = await supabase
      .from('contact')
      .insert([{ name, email, message,subject}]);

      setLoading(false);

    if (error) {
      console.error('Error saving contact:', error);
    } else {
      alert('thank you for contacting us!');
      setFormData({ name: '', email: '', message: '' ,subject: ''});
   
    }
  };



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
      <section className="relative bg-gradient-to-r from-burtBlue to-burntOrange text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Contact NAFEX
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl max-w-3xl mx-auto mb-8"
            >
              We're here to help you with your international journey. Reach out anytime.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {/* Contact Form */}
            <motion.div 
              variants={fadeInUp}
              className="bg-gray-50 p-8 md:p-10 rounded-xl shadow-lg"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-burtBlue mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit}  className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-burtBlue focus:border-burtBlue transition"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-burtBlue focus:border-burtBlue transition"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input
                     name="subject"
                     value={formData.subject}
                     onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-burtBlue focus:border-burtBlue transition"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-burtBlue focus:border-burtBlue transition"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-burntOrange text-white py-4 px-6 rounded-lg font-bold hover:bg-opacity-90 transition"
                >
                   {loading ? (
                      <>
                        <i className="fa-solid fa-spinner animate-spin"></i>
                        Sending...
                      </>
                    ) : (
                      'send message'
                    )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              variants={fadeInUp}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-burtBlue mb-6">Get in touch</h2>
                <p className="text-gray-600 mb-8">
                  Have questions about our services? Our team is ready to assist you with any inquiries regarding visas, scholarships, or travel arrangements.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-burtBlue/10 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-burtBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Our Office</h3>
                    <p className="text-gray-600">123 International Plaza, Suite 500<br />New York, NY 10001</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-burtBlue/10 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-burtBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                    <p className="text-gray-600">Main: +1 (555) 123-4567<br />Support: +1 (555) 987-6543</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-burtBlue/10 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-burtBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">info@nafex.com<br />support@nafex.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-burtBlue/10 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-burtBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9am - 6pm<br />Saturday: 10am - 3pm<br />Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-10 h-10 bg-burtBlue/10 text-burtBlue rounded-full flex items-center justify-center hover:bg-burtBlue hover:text-white transition"
                    >
                      <span className="sr-only">{social}</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d={`M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z`} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215573291234!2d-73.9878449241641!3d40.74844097138968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1629997976903!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="NAFEX Office Location"
            ></iframe>
          </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need immediate assistance?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Our customer support team is available to help you with urgent inquiries.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a
                href="tel:+2330553831241"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-burtBlue px-8 py-4 rounded-lg font-bold hover:bg-opacity-90 transition"
              >
                Call Now
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:bg-opacity-10 transition"
              >
                Live Chat
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;