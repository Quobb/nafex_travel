import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import EnquiryModal from './EnquiryModal';

const slides = [
  {
    image: "/img/carouse5.jpg",
    title: "Passport",
    heading: "Get Your Passport Easily!",
    text: "We help you with the entire process of obtaining your passport, making your journey smoother and faster.",
  },
  {
    image: "/img/birthcert.jpg",
    title: "Birth Certificate",
    heading: "Secure Your Birth Certificate!",
    text: "We assist you with obtaining and verifying your birth certificate, a crucial document for any immigration process.",
  },
  {
    image: "/img/carousel13.jpg",
    title: "Study Abroad with Scholarship",
    heading: "Your Education, Fully Funded",
    text: "Explore study abroad opportunities with scholarships and step into your future with full financial support.",
  },
  {
    image: "/img/carousel-4.jpg",
    title: "Tourist Visa",
    heading: "Travel the World With Ease",
    text: "Get your tourist visa to visit your dream destinations around the world without any hassle.",
  },
  {
    image: "/img/banksatment.jpg",
    title: "Bank Statement Support",
    heading: "Secure Your Financial Docs!",
    text: "We provide authentic and well-organized bank statements to support your visa or study applications.",
  },
  {
    image: "/img/study1.jpg",
    title: "Work & Study Abroad",
    heading: "Earn While You Learn!",
    text: "Get opportunities to study and work abroad simultaneously. Build your future with both experience and education.",
  },
  {
    image: "/img/carousel-1.jpg",
    title: "Business Visa Support",
    heading: "Expand Your Business Globally",
    text: "From paperwork to embassy interview support, we assist with every step of your business visa process.",
  },
  {
    image: "/img/carousel6.jpg",
    title: "American Lottery Program",
    heading: "Win the U.S. Green Card!",
    text: "Participate in the American DV Lottery with expert guidance and increase your chances of success.",
  },
  {
    image: "/img/Reservation.jpg",
    title: "Flight Reservation",
    heading: "Get Your Travel Itinerary",
    text: "We provide valid flight reservation documents for visa application without buying the ticket upfront.",
  },
  {
    image: "/img/traveling.jpg",
    title: "Internship Abroad",
    heading: "Start Your Global Career",
    text: "Gain international experience with internships abroad in your field of study or interest.",
  }
];

export default function Carousel() {
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative w-full h-[80vh] md:h-[100vh]">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentIndex ? 1 : 0 }}
            transition={{ duration: 0.7 }}
            className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background Image with subtle blur and darkening */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-20 scale-105 "
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>

            {/* Gradient Overlay (optional, but adds a nice warm touch) */}
            <div className="absolute inset-0 bg-gradient-to-r from-burtBlue to-burntOrange opacity-80 mix-blend-multiply"></div>

            {/* Foreground Text Content */}
            <div className="relative z-10 max-w-6xl mx-auto h-full flex flex-col justify-center items-center text-center px-6">
              <motion.h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold drop-shadow-md mb-4">
                {slide.heading}
              </motion.h2>
              <motion.p className="text-lg md:text-xl text-white/90 max-w-2xl mb-6 drop-shadow-sm">
                {slide.text}
              </motion.p>
              <button
                onClick={() => setShowModal(true)}
                className="bg-burntOrange text-burtBlue font-bold px-6 py-3 rounded-full text-lg hover:bg-white/90 transition duration-300 shadow-md"
              >
                Learn More
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-orange-600 text-white p-2 rounded-full shadow-md hover:bg-gray-700 z-20"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-orange-600 text-white p-2 rounded-full shadow-md hover:bg-gray-700 z-20"
      >
        <ChevronRight size={28} />
      </button>

      {/* Modal */}
      {showModal && (
        <EnquiryModal showModal={showModal} setShowModal={setShowModal} />
      )}
    </div>
  );
}
