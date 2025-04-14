import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import supabase from '../supabaseClient';

function EnquiryModal({ showModal, setShowModal }) {
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
      alert('Your enquiry has been submitted! You will be contacted by our team');
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
  }, [showModal, setShowModal]);

  if (!showModal) return null; // Don't render at all unless showModal is true

  return (
    <div className="fixed inset-0 bg-opacity-50 z-50 flex justify-end">
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

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="How can we help you?"
            rows="4"
            className="w-full p-3 border rounded-lg"
          />
          <button className="w-full bg-burtblue text-white py-3 rounded-lg">
            {loading ? (
              <>
                <i className="fa-solid fa-spinner animate-spin"></i>
                Sending...
              </>
            ) : (
              'Submit'
            )}
          </button>
        </form>
      </motion.div>
    </div>
  );
}

export default EnquiryModal;
