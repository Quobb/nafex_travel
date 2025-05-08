import { motion } from "framer-motion";

const NafexVisaPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <section className="hero-clip-path bg-gradient-to-r from-burtBlue to-blue-900 text-white pb-20 md:pb-32">
        <div className="container mx-auto px-6 pt-20 md:pt-32">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-1/2 mb-12 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Your <span className="text-burntOrange">Visa Success</span> Journey Starts Here
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-200">
                Expert coaching to navigate the complex tourist visa application process with confidence and ease.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="#contact"
                  className="px-8 py-3 bg-burntOrange text-white rounded-md text-lg font-semibold hover:bg-orange-700 transition duration-300 transform hover:scale-105 text-center"
                >
                  Get Started
                </a>
                <a
                  href="#services"
                  className="px-8 py-3 border-2 border-white text-white rounded-md text-lg font-semibold hover:bg-white hover:text-burtBlue transition duration-300 transform hover:scale-105 text-center"
                >
                  Learn More
                </a>
              </div>
            </motion.div>

            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Passport and travel documents"
                  className="rounded-lg shadow-2xl transform rotate-2 w-full max-w-md mx-auto"
                />
                <div className="absolute -bottom-8 -left-8 bg-burntOrange p-4 rounded-lg shadow-lg hidden md:block">
                  <div className="text-white font-bold">95% Success Rate</div>
                </div>
                <div
                  className="absolute -top-8 -right-8 bg-white p-4 rounded-lg shadow-lg hidden md:block"
                >
                  <div className="text-burtBlue font-bold">500+ Happy Clients</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-12 -mt-16 md:-mt-24 z-10 relative">
        <div className="bg-white rounded-xl shadow-xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {["95%", "50+", "24/7"].map((stat, i) => (
            <motion.div
              key={i}
              className="text-center p-6 hover:shadow-md transition duration-300 rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-burntOrange mb-2">{stat}</div>
              <div className="text-gray-600">{["Visa Approval Rate", "Countries Covered", "Expert Support"][i]}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="services" className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-burtBlue mb-4">
              Our <span className="text-burntOrange">Visa Assistance</span> Services
            </h2>
            <div className="w-20 h-1 bg-burntOrange mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Document Preparation",
                text: "We guide you through compiling all necessary documents to meet embassy requirements perfectly.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                )
              },
              {
                title: "Appointment Scheduling",
                text: "We help secure the best possible interview slots and manage all scheduling complexities.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                )
              },
              {
                title: "Interview Coaching",
                text: "Personalized mock interviews and coaching to help you ace your visa interview with confidence.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                )
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-500 transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-burtBlue rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {service.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-burtBlue mb-4 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-burtBlue mb-4">
              How It Works
            </h2>
            <div className="w-20 h-1 bg-burntOrange mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { step: "1", label: "Free Consultation" },
              { step: "2", label: "Document Review & Prep" },
              { step: "3", label: "Visa Interview Coaching" },
              { step: "4", label: "Submission & Follow-up" },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl font-bold text-burntOrange mb-4">{step.step}</div>
                <div className="text-lg text-burtBlue font-semibold">{step.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      

    </div>
  );
};

export default NafexVisaPage;
