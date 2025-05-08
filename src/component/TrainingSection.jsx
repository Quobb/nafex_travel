import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated, config } from '@react-spring/web';
import { Link } from "react-router-dom";

const TrainingSection = () => {
  const fadeIn = useSpring({ 
    opacity: 1, 
    from: { opacity: 0 }, 
    delay: 500,
    config: config.molasses
  });

  const services = [
    { id: 1, name: 'Passport Assistance', image: '/img/passort.jpg', link: '/passport' },
    { id: 2, name: 'Birth Certificate Assistance', image: '/img/training-1.jpg', link: '/BirthCert' },
    { id: 3, name: 'Study Abroad with Scholarship', image: '/img/country-3.jpg', link: '/study-abroad' },
    { id: 4, name: 'Bank Statement Assistance', image: '/img/banksatment.jpg', link: '/bank' },
    { id: 5, name: 'Block Account Assistance', image: '/img/training-3.jpg', link: '/Block' },
    { id: 6, name: 'Work & Study Abroad', image: '/img/work.jpg', link: '/WorkStudy' },
    { id: 7, name: 'Flight Reservation', image: '/img/training-4.jpg', link: '/Flight' },
    { id: 8, name: 'Visa Procurement', image: '/img/canada-visa.jpg', link: '/VisaProcument' },
    { id: 9, name: 'Company Registration', image: '/img/register.jpg', link: '/Company' },
    { id: 10, name: 'Invitation Letter', image: '/img/Reservation.jpg', link: '/InvitationLetter' },
    { id: 11, name: 'Tourist Visa Assistance', image: '/img/block.jpg', link: '/visa-assist' },
  ];

  const getItemsPerPage = () => {
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 768) return 2;
    if (window.innerWidth < 1024) return 3;
    return 4;
  };

  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());
  const [displayedCards, setDisplayedCards] = useState([]);
  const animationRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getItemsPerPage());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setDisplayedCards(services.slice(0, itemsPerPage));
  }, [itemsPerPage]);

  const cardAnimation = useSpring({
    from: { opacity: 0, transform: 'translateX(100px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    config: { tension: 300, friction: 20 },
  });

  useEffect(() => {
    const cycleCards = () => {
      setDisplayedCards(current => {
        const currentFirstId = current[0]?.id;
        const currentIndex = services.findIndex(item => item.id === currentFirstId);
        const nextIndex = (currentIndex + 1) % services.length;

        const nextCards = [];
        for (let i = 0; i < itemsPerPage; i++) {
          const index = (nextIndex + i) % services.length;
          nextCards.push(services[index]);
        }

        return nextCards;
      });
    };

    animationRef.current = setInterval(cycleCards, 3000);
    return () => clearInterval(animationRef.current);
  }, [itemsPerPage]);

  const handleMouseEnter = () => {
    clearInterval(animationRef.current);
  };

  const handleMouseLeave = () => {
    animationRef.current = setInterval(() => {
      setDisplayedCards(current => {
        const currentFirstId = current[0]?.id;
        const currentIndex = services.findIndex(item => item.id === currentFirstId);
        const nextIndex = (currentIndex + 1) % services.length;

        const nextCards = [];
        for (let i = 0; i < itemsPerPage; i++) {
          const index = (nextIndex + i) % services.length;
          nextCards.push(services[index]);
        }

        return nextCards;
      });
    }, 3000);
  };

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <animated.div style={fadeIn} className="mb-8">
          <h5 className="text-blue-500 font-semibold text-sm sm:text-base">CHECK OUR TRAINING</h5>
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold">
            Get the Best Coaching Service Training
          </h1>
          <p className="text-gray-400 mt-2 text-sm sm:text-base">
            We provide expert coaching services in various fields, ensuring you have the skills you need for success.
          </p>
        </animated.div>

        <div
          className="flex flex-wrap justify-center gap-6"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {displayedCards.map((service, index) => (
            <animated.div
              key={`${service.id}-${index}`}
              style={{ ...cardAnimation, delay: index * 150 }}
              className="w-full sm:w-[90%] md:w-[45%] lg:w-[22%] bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <img src={service.image} className="w-full h-48 object-cover rounded-t-lg" alt={service.name} />
              <div className="p-4">
                <h4 className="text-lg text-white font-semibold">{service.name} Coaching</h4>
                <p className="text-gray-400 text-sm">
                  Get expert guidance and personalized training to succeed in your goals.
                </p>
                <Link to={service.link} className="text-burntOrange hover:underline mt-2 inline-block text-sm">
                    Read More
                </Link>
              </div>
            </animated.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainingSection;
