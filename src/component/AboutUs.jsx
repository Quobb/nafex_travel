import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import EnquiryModal from './EnquiryModal';

function AboutUs() {
  const [showModal, setShowModal] = useState(false);
  
 
  return (
    <div>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:flex items-center gap-12"
          >
            <motion.div className="lg:w-1/2 mb-12 lg:mb-0" initial={{ scale: 0.95 }} whileInView={{ scale: 1 }} transition={{ duration: 0.5 }}>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Team meeting"
                  className="rounded-xl shadow-2xl w-full"
                />
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-lg w-3/4"
                >
                  <h3 className="text-xl font-bold mb-2">15+ Years Experience</h3>
                  <p className="text-gray-600">Helping clients achieve their international dreams since 2008.</p>
                </motion.div>
              </div>
            </motion.div>

            <div className="lg:w-1/2">
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold mb-6"
              >
                Who We Are
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-gray-600 mb-6"
              >
                Nafex is a premier travel and education consultancy...
              </motion.p>

              <div className="space-y-6">
                {/* Mission */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex"
                >
                  <div className="mr-4">
                    <div className="bg-primary bg-opacity-10 p-3 rounded-full">
                      {/* Icon */}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                    <p className="text-gray-600">To empower individuals...</p>
                  </div>
                </motion.div>

                {/* Vision */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex"
                >
                  <div className="mr-4">
                    <div className="bg-secondary bg-opacity-10 p-3 rounded-full">
                      {/* Icon */}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                    <p className="text-gray-600">To be the most trusted...</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">By The Numbers</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">Our impact...</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Successful Visa Applications', value: '10,000+', color: 'text-burntOrange' },
              { label: 'Countries We Operate In', value: '50+', color: 'text-burntOrange' },
              { label: 'Scholarships Secured', value: '5,000+', color: 'text-burntOrange' },
              { label: 'Client Satisfaction Rate', value: '98%', color: 'text-burntOrange' }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-gray-800 p-8 rounded-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2 }}
              >
                <div className={`text-4xl font-bold ${item.color} mb-2`}>{item.value}</div>
                <div className="text-gray-300">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Meet Our Leadership</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our team of experts...</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[{
              name: "Sarah Johnson", role: "Founder & CEO", desc: "With 20 years...", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            }, {
              name: "Michael Chen", role: "Director of Visa Services", desc: "Former immigration...", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            }, {
              name: "Amina Diallo", role: "Director of Scholarship Programs", desc: "Education specialist...", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            }].map((leader, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.3 }}
              >
                <img src={leader.img} alt={leader.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
                  <p className="text-primary mb-4">{leader.role}</p>
                  <p className="text-gray-600">{leader.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-6"
          >
            Ready to Begin Your Global Journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8 max-w-3xl mx-auto"
          >
            Whether it's travel, visas, or scholarships...
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <button onClick={() => setShowModal(true)} className="bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-opacity-90 transition">
              Get Free Consultation
            </button>
            <a href="#" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:bg-opacity-10 transition">
              Call Us Now
            </a>
          </motion.div>
        </div>
      </section>
      {showModal && (
       <EnquiryModal showModal={showModal} setShowModal={setShowModal} />
      )}
    </div>
  );
}

export default AboutUs;
