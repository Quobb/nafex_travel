import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [direction, setDirection] = useState(0);

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 150 : -150,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -150 : 150,
      opacity: 0,
      scale: 0.98,
    }),
  };

  return (
    <motion.div
      className="relative w-full overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative w-full h-[80vh] md:h-[100vh]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 180, damping: 26 },
              opacity: { duration: 0.4 },
              scale: { duration: 0.4 }
            }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Background */}
            <div
              className="absolute inset-0 bg-cover bg-center scale-105 filter opacity-20 brightness-85"
              style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-burtBlue to-burntOrange opacity-40 mix-blend-multiply"></div>

            {/* Foreground Text */}
            <div className="relative z-10 max-w-6xl mx-auto h-full flex flex-col justify-center items-center text-center px-6">
              <motion.span
                className="text-white text-base md:text-lg uppercase tracking-widest mb-2"
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
              >
                {slides[currentIndex].title}
              </motion.span>

              <motion.h2
                className="text-white text-3xl md:text-5xl lg:text-6xl font-bold drop-shadow-md mb-4"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 160, damping: 22 }}
              >
                {slides[currentIndex].heading}
              </motion.h2>

              <motion.p
                className="text-lg md:text-xl text-white/90 max-w-2xl mb-6 drop-shadow-sm"
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, type: "spring", stiffness: 150, damping: 20 }}
              >
                {slides[currentIndex].text}
              </motion.p>

              <motion.button
                onClick={() => setShowModal(true)}
                className="bg-white text-burtBlue font-bold px-6 py-3 rounded-full text-lg hover:bg-white/90 transition duration-300 shadow-md"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 150, damping: 18 }}
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-burtBlue p-2 rounded-full shadow-md hover:bg-white/90 z-20"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-burtBlue p-2 rounded-full shadow-md hover:bg-white/90 z-20"
      >
        <ChevronRight size={28} />
      </button>

      {showModal && (
        <EnquiryModal showModal={showModal} setShowModal={setShowModal} />
      )}
    </motion.div>
  );
}
