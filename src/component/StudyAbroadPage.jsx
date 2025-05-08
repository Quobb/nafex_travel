import { useState, useEffect } from 'react';
import EnquiryModalSpecial from './EnquiryModalSpecial';

const StudyAbroadPage = () => {
    const [showModal, setShowModal] = useState(false);
    const selectedsubject = { subject: "Study abroad" };
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Scholarship data
  const scholarships = [
    {
      title: "Undergraduate Excellence",
      amount: "$10,000",
      description: "For outstanding academic achievement in high school",
      deadline: "May 15, 2023"
    },
    {
      title: "Graduate Research",
      amount: "$15,000",
      description: "Support for innovative research projects",
      deadline: "June 30, 2023"
    },
    {
      title: "Cultural Diversity",
      amount: "$8,000",
      description: "Promoting international student diversity",
      deadline: "April 20, 2023"
    }
  ];

  // Auto-rotate scholarships
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % scholarships.length);
        setIsAnimating(false);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, [scholarships.length]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
     

     
      {/* Hero Section with Animation */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900 opacity-30"></div>
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-20">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block text-blue-800 xl:inline">Study Abroad</span>
                  <span className="block text-orange-600 xl:inline">with NAFEX Scholarships</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Unlock global education opportunities with our exclusive scholarship programs. Your dream university is waiting.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 md:py-4 md:text-lg md:px-10 transform hover:scale-105 transition-transform duration-300">
                      Explore Scholarships
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-orange-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transform hover:scale-105 transition-transform duration-300">
                      Browse Programs
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-orange-600 opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-float text-white text-6xl font-bold opacity-90">🌍</div>
              <div className="animate-float-delay text-white text-6xl font-bold opacity-90 ml-20">✈️</div>
              <div className="animate-float-delay-2 text-white text-6xl font-bold opacity-90 -ml-32 mt-20">🎓</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scholarship Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-orange-600 font-semibold tracking-wide uppercase">Financial Support</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-blue-800 sm:text-4xl">
              Available Scholarships
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We offer various scholarship opportunities to help you achieve your international education goals.
            </p>
          </div>

          <div className="mt-10">
            <div className="relative h-96 overflow-hidden">
              {scholarships.map((scholarship, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'} ${isAnimating ? 'animate-fade' : ''}`}
                >
                  <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-xl shadow-xl p-8 h-full flex flex-col justify-between border-l-8 border-orange-600 transform hover:scale-102 transition-transform duration-300">
                    <div>
                      <h3 className="text-2xl font-bold text-blue-800">{scholarship.title}</h3>
                      <p className="mt-4 text-gray-600">{scholarship.description}</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-orange-600">{scholarship.amount}</p>
                      <p className="mt-2 text-sm text-gray-500">Deadline: {scholarship.deadline}</p>
                      <button className="mt-4 px-6 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-900 transition-colors duration-300 transform hover:scale-105">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-6 space-x-2">
              {scholarships.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAnimating(true);
                    setTimeout(() => {
                      setCurrentSlide(index);
                      setIsAnimating(false);
                    }, 500);
                  }}
                  className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-orange-600' : 'bg-gray-300'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-gradient-to-r from-blue-800 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-white font-semibold tracking-wide uppercase">Why Choose NAFEX</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Your Gateway to Global Education
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
                <div className="p-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white mb-4">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">100+ Destinations</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Partner universities across six continents offering diverse programs.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
                <div className="p-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-600 text-white mb-4">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">$5M+ in Scholarships</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Financial support awarded annually to deserving students.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
                <div className="p-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white mb-4">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">Visa Support</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Expert guidance through the entire visa application process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-orange-600 font-semibold tracking-wide uppercase">Success Stories</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-blue-800 sm:text-4xl">
              What Our Students Say
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">JS</div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-blue-800">Jessica S.</h4>
                  <p className="text-sm text-gray-500">University of London, 2022</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600">
                "NAFEX made my dream of studying in the UK a reality. The scholarship covered 60% of my tuition!"
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold">AM</div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-blue-800">Ahmed M.</h4>
                  <p className="text-sm text-gray-500">University of Toronto, 2021</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600">
                "The visa support team was incredible. They handled everything so I could focus on preparing for Canada."
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">LP</div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-blue-800">Linh P.</h4>
                  <p className="text-sm text-gray-500">University of Sydney, 2023</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600">
                "I wouldn't have discovered the perfect program for me without NAFEX's personalized matching service."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to begin your journey?</span>
            <span className="block text-orange-400">Apply for a scholarship today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-800 bg-orange-400 hover:bg-orange-500 transform hover:scale-105 transition-transform duration-300"
              >
                Get started
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-600 transform hover:scale-105 transition-transform duration-300"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>

     

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float 6s ease-in-out 1s infinite;
        }
        .animate-float-delay-2 {
          animation: float 6s ease-in-out 2s infinite;
        }
        .animate-fade {
          animation: fadeIn 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default StudyAbroadPage;