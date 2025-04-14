import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import supabase from '../supabaseClient';


const services = [
  {
    img: 'img/passort.jpg',
    title: 'Passport',
    description: 'Get assistance in obtaining your passport quickly and efficiently.',
  },
  {
    img: 'img/birthcert.jpg',
    title: 'Birth Certificate',
    description: 'Secure your birth certificate hassle-free with our professional services.',
  },
  {
    img: 'img/study-3.jpg',
    title: 'Study Abroad with Scholarship',
    description: 'Explore opportunities to study overseas with scholarship assistance.',
  },
  {
    img: 'img/service-1.jpg',
    title: 'Tourist Visa',
    description: 'Plan your dream trip with our seamless tourist visa application process.',
  },
 
];

function ServiceSection() {
  const [loading, setLoading] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const modalRef = useRef(null);

  const handleModalOpen = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

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
      .insert([{ name, email, message, service_title: selectedService?.title }]);

      setLoading(false);
      
    if (error) {
      console.error('Error saving enquiry:', error);
    } else {
      alert('Your enquiry has been submitted!');
      setFormData({ name: '', email: '', message: '' });
      setShowModal(false);
    }
  };

  return (
    <section className="service overflow-hidden pt-10 bg-white">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h5 className="text-burtblue text-lg font-semibold">Visa Categories</h5>
          <h2 className="text-4xl font-bold text-burtblue mt-2">Enabling Your Immigration Successfully</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We provide expert guidance for various immigration services, ensuring a smooth and hassle-free process for you.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative group rounded-xl overflow-hidden bg-white shadow-lg p-0"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute bottom-0 left-0 w-full h-full z-0 bg-burtBlue/20 scale-y-0 origin-bottom transition-transform duration-500 ease-in-out group-hover:scale-y-100" />
              <div className="relative z-10">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-60 object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'img/default.jpg';
                  }}
                />
                <div className="p-5 text-center">
                  <h4 className="text-burtblue text-xl font-bold mb-3">{service.title}</h4>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <motion.button
                    onClick={() => handleModalOpen(service)}
                    className="inline-block bg-burntOrange text-white rounded-full py-2 px-5 text-sm font-medium transition duration-300 hover:bg-burtBlue/90 hover:bg-burntOrange"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="fa-solid fa-arrow-right mr-2"></i>
                    Explore More
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {showModal && (
          <div
            className="fixed inset-0 z-50  bg-opacity-50 flex justify-end"
            onClick={(e) => {
              if (modalRef.current && !modalRef.current.contains(e.target)) {
                handleModalClose();
              }
            }}
          >
            <motion.div
              ref={modalRef}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3 }}
              className="bg-white w-full sm:w-[90%] md:w-[70%] lg:w-[50%] xl:w-[30%] h-full p-6 overflow-y-auto relative"
            >
              {/* Close Button */}
              <button
                onClick={handleModalClose}
                className="absolute top-2 right-2 text-gray-500 hover:text-black z-10"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>

              {/* Modal Content */}
              <div className=" md:flex-row gap-6">
                {/* Left Side: Image + Title + Description */}
                <div className=" space-y-4">
                  <img
                    src={selectedService?.img}
                    alt={selectedService?.title}
                    className="w-full h-52 md:h-60 object-cover rounded-md"
                  />
                  <div className=' ml-5'>
                    <h3 className="text-xl font-bold text-burtblue">{selectedService?.title}</h3>
                    <p className="text-gray-600 mt-1">{selectedService?.description}</p>
                  </div>
                </div>

                {/* Right Side: Form */}
                <div className="">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      className="w-full p-2 border rounded-lg"
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your Email"
                      className="w-full p-2 border rounded-lg"
                    />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your Message"
                      className="w-full p-2 border rounded-lg"
                      rows="4"
                    />
                    <button
                      type="submit"
                      className="w-full bg-burntOrange text-white py-2 rounded-lg flex items-center justify-center gap-2"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <i className="fa-solid fa-spinner animate-spin"></i>
                          Sending...
                        </>
                      ) : (
                        'Submit Enquiry'
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        )}


      </div>
    </section>
  );
}

export default ServiceSection;
