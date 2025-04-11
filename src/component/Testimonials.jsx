/* eslint-disable no-unused-vars */
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import { motion } from 'framer-motion';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Testimonials = () => {
  const options = {
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    dots: true,
    nav: false,
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      1000: { items: 1 }
    }
  };

  const testimonials = [
    {
      content: "The team exceeded my expectations with their professionalism and attention to detail. Highly recommended!",
      clientName: "John Doe",
      role: "Business Owner",
      image: "img/testimonial-1.jpg"
    },
    {
      content: "Exceptional service! They made the entire process seamless and stress-free. I couldn't be happier.",
      clientName: "Jane Smith",
      role: "Marketing Specialist",
      image: "img/testimonial-2.jpg"
    }
  ];

  return (
    <div className="container-fluid training overflow-hidden">
      <motion.div 
        className="container-fluid testimonial w-[120vh] pb-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container py-5">
          <motion.div 
            className="section-title text-center mb-5"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="sub-style">
              <h5 className="sub-title text-burtBlue px-3">OUR CLIENTS REVIEWS</h5>
            </div>
            <h1 className="display-5 mb-4">What Our Clients Say</h1>
            <p className="mb-0">
              Our clients appreciate our commitment to excellence and personalized service. Here's what they have to say about us.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <OwlCarousel className="owl-theme testimonial-carousel" {...options}>
              {testimonials.map((testimonial, index) => (
                <div className="testimonial-item" key={index}>
                  <div className="testimonial-content p-4 mb-5">
                    <p className="fs-5 mb-0">{testimonial.content}</p>
                    <div className="d-flex justify-content-end">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="fas fa-star text-secondary"></i>
                      ))}
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="rounded-circle me-4" style={{ width: '100px', height: '100px' }}>
                      <img className="img-fluid rounded-circle" src={testimonial.image} alt={testimonial.clientName} />
                    </div>
                    <div className="my-auto">
                      <h5>{testimonial.clientName}</h5>
                      <p className="mb-0">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </OwlCarousel>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Testimonials;
