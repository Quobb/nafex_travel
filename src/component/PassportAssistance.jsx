import { useEffect ,useState} from 'react';
import EnquiryModalSpecial from './EnquiryModalSpecial';

function PassportAssistance() {
   const [showModal, setShowModal] = useState(false);
    const selectedsubject = { subject: "PassPort" };

  useEffect(() => {
    // Add animation classes on scroll
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementPosition < windowHeight - 100) {
          element.classList.add('animate__animated', 'animate__fadeInUp');
        }
      });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load

    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  return (
    <div className="font-sans bg-gray-50 overflow-x-hidden">
     
      <section className="hero-clip-path bg-gradient-to-r from-burtBlue to-blue-900 text-white pb-20 md:pb-32 relative overflow-hidden">
        {/* Decorative passport stamps */}
        <div className="passport-stamp w-64 h-64 bg-[url('https://svgshare.com/i/12JQ.svg')] -top-20 -left-20 animate-[float_3s_ease-in-out_infinite]" style={{animationDelay: '0.3s'}}></div>
        <div className="passport-stamp w-48 h-48 bg-[url('https://svgshare.com/i/12JQ.svg')] bottom-10 right-20 animate-[float_3s_ease-in-out_infinite]" style={{animationDelay: '0.7s'}}></div>
        <div className="passport-stamp w-32 h-32 bg-[url('https://svgshare.com/i/12JQ.svg')] top-1/3 right-1/4animate-[float_3s_ease-in-out_infinite]" style={{animationDelay: '1.1s'}}></div>
        
        <div className="container mx-auto px-6 pt-20 md:pt-32 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0 aanimate-[fade-in-left_1s_ease-in-out]">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                <span className="text-burntOrange">Passport</span> Assistance Made Simple
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-200">
                From application to renewal, our experts guide you through every step of the passport process with confidence.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a onClick={() => setShowModal(true)} className="px-8 py-3 bg-burntOrange text-white rounded-md text-lg font-semibold hover:bg-orange-700 transition duration-300 transform hover:scale-105 text-center animate__animated animate__pulse animate__infinite animate__slower">
                  Start Your Application
                </a>
                <a href="#services" className="px-8 py-3 border-2 border-white text-white rounded-md text-lg font-semibold hover:bg-white hover:text-burtBlue transition duration-300 transform hover:scale-105 text-center">
                  Learn More
                </a>
              </div>
            </div>
            <div className="md:w-1/2 animate-[float_3s_ease-in-out_infinite]">
              <div className="relative">
                <img src="/img/passort.jpg"  
                     alt="Passport documents" 
                     className="rounded-lg shadow-2xl transform rotate-2 w-full max-w-md mx-auto border-8 border-white"/>
                <div className="absolute -bottom-8 -left-8 bg-burntOrange p-4 rounded-lg shadow-lg animate-float hidden md:block">
                  <div className="text-white font-bold">98% Success Rate</div>
                </div>
                <div className="absolute -top-8 -right-8 bg-white p-4 rounded-lg shadow-lg animate-float hidden md:block" style={{animationDelay: '0.5s'}}>
                  <div className="text-burtBlue font-bold">Fast Processing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-6 py-12 -mt-16 md:-mt-24 z-10 relative">
        <div className="bg-white rounded-xl shadow-xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 hover:shadow-md transition duration-300 rounded-lg animate-on-scroll">
            <div className="text-4xl font-bold text-burntOrange mb-2">98%</div>
            <div className="text-gray-600">Application Success</div>
          </div>
          <div className="text-center p-6 hover:shadow-md transition duration-300 rounded-lg animate-on-scroll">
            <div className="text-4xl font-bold text-burntOrange mb-2">24-48h</div>
            <div className="text-gray-600">Express Service</div>
          </div>
          <div className="text-center p-6 hover:shadow-md transition duration-300 rounded-lg animate-on-scroll">
            <div className="text-4xl font-bold text-burntOrange mb-2">1000+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-burtBlue mb-4">Our <span className="text-burntOrange">Passport</span> Services</h2>
            <div className="w-20 h-1 bg-burntOrange mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-500 transform hover:-translate-y-2 animate-on-scroll">
              <div className="w-16 h-16 bg-burtBlue rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-burtBlue mb-4 text-center">New Passport Application</h3>
              <p className="text-gray-600 text-center">
                Complete guidance for first-time passport applicants with document preparation and submission.
              </p>
            </div>
            
            {/* Service 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-500 transform hover:-translate-y-2 animate-on-scroll" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 bg-burtBlue rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-burtBlue mb-4 text-center">Passport Renewal</h3>
              <p className="text-gray-600 text-center">
                Hassle-free renewal service for expiring passports with expedited processing options.
              </p>
            </div>
            
            {/* Service 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-500 transform hover:-translate-y-2 animate-on-scroll" style={{animationDelay: '0.4s'}}>
              <div className="w-16 h-16 bg-burtBlue rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-burtBlue mb-4 text-center">Emergency Passport</h3>
              <p className="text-gray-600 text-center">
                Fast-track service for lost/stolen passports or urgent travel needs with 24-48 hour processing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-burtBlue mb-4">Our Simple <span className="text-burntOrange">Process</span></h2>
            <div className="w-20 h-1 bg-burntOrange mx-auto"></div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-1/2 mb-12 md:mb-0 animate-on-scroll">
              <div className="relative">
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-burntOrange opacity-10 rounded-full animate-pulse-slow"></div>
                <img src="/img/passort.jpg" 
                     alt="Passport process steps" 
                     className="relative z-10 rounded-lg shadow-xl w-full max-w-md mx-auto"/>
              </div>
            </div>
            <div className="md:w-1/2 animate-on-scroll">
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-burntOrange rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl mr-4">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-burtBlue mb-2">Initial Consultation</h3>
                    <p className="text-gray-600">We assess your needs and recommend the best service option for your situation.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-burntOrange rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl mr-4">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-burtBlue mb-2">Document Preparation</h3>
                    <p className="text-gray-600">Our experts help you gather and prepare all required documents and forms.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-burntOrange rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl mr-4">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-burtBlue mb-2">Application Submission</h3>
                    <p className="text-gray-600">We handle the entire submission process, including appointments if required.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-burntOrange rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl mr-4">4</div>
                  <div>
                    <h3 className="text-xl font-bold text-burtBlue mb-2">Passport Delivery</h3>
                    <p className="text-gray-600">Your new passport is delivered to your doorstep, ready for your travels.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-burtBlue text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our <span className="text-burntOrange">Clients</span> Say</h2>
            <div className="w-20 h-1 bg-burntOrange mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-filter backdrop-blur-sm hover:shadow-lg transition duration-500 transform hover:scale-105 animate-on-scroll">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-burntOrange rounded-full flex items-center justify-center text-white font-bold mr-4">JS</div>
                <div>
                  <h4 className="font-bold">John Smith</h4>
                  <div className="flex text-yellow-300">
                    ★★★★★
                  </div>
                </div>
              </div>
              <p className="italic">"Nafex made my passport renewal incredibly easy. They handled everything and I got my new passport in just 3 days!"</p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-filter backdrop-blur-sm hover:shadow-lg transition duration-500 transform hover:scale-105 animate-on-scroll" style={{animationDelay: '0.2s'}}>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-burntOrange rounded-full flex items-center justify-center text-white font-bold mr-4">MP</div>
                <div>
                  <h4 className="font-bold">Maria Perez</h4>
                  <div className="flex text-yellow-300">
                    ★★★★★
                  </div>
                </div>
              </div>
              <p className="italic">"I was stressed about my lost passport before an important trip. Nafex's emergency service saved my vacation!"</p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-filter backdrop-blur-sm hover:shadow-lg transition duration-500 transform hover:scale-105 animate-on-scroll" style={{animationDelay: '0.4s'}}>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-burntOrange rounded-full flex items-center justify-center text-white font-bold mr-4">AK</div>
                <div>
                  <h4 className="font-bold">Aisha Khan</h4>
                  <div className="flex text-yellow-300">
                    ★★★★★
                  </div>
                </div>
              </div>
              <p className="italic">"First-time passport application was confusing until I found Nafex. Their guidance was worth every penny."</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-burntOrange text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate__animated animate__pulse animate__infinite animate__slower">
            Ready to Get Your Passport?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our passport experts handle the paperwork while you prepare for your next adventure.
          </p>
          <a onClick={() => setShowModal(true)} className="px-8 py-4 bg-burtBlue text-white rounded-md text-lg font-semibold hover:bg-blue-900 transition duration-300 transform hover:scale-105 inline-block animate-wave">
            Start Your Application Today
          </a>
        </div>
      </section>

       {showModal && (
          <EnquiryModalSpecial showModal={showModal} setShowModal={setShowModal} selectedsubject={selectedsubject} />
        )}
    </div>
  );
}

export default PassportAssistance;