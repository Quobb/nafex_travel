import React, { useState, useEffect } from 'react';
import Footer from '../component/Footer';
import TrainingSection from '../component/TrainingSection';
import NafexVisaPage from '../component/NafexVisaPage';

function VisaaAssist() {
     const [showBackToTop, setShowBackToTop] = useState(false);
    
      useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 300) {
            setShowBackToTop(true);
          } else {
            setShowBackToTop(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
      const scrollToTop = (e) => {
        e.preventDefault(); // Prevent default anchor link behavior
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };
  return (
    <div>
    <NafexVisaPage />
    <TrainingSection />
      <Footer />
            
    {showBackToTop && (
        <a
        href="#"
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full shadow-lg transition-all hover:bg-blue-600 hover:scale-105"
        style={{ zIndex: 1000 }}
        >
        <i className="fa fa-arrow-up"></i>
        </a>
    )}
    </div>
  )
}

export default VisaaAssist