import React, { useState } from 'react';
import supabase from '../supabaseClient';

function Footer() {

  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  // Fetch data from Supabase (newslet table)
 
  // Handle Email Subscription
  const handleSubscribe = async (e) => {
    e.preventDefault();
    
    if (!email) return;
    setLoading(true);

    const { data, error } = await supabase
      .from('newslet')
      .insert([{ email }]);

    setLoading(false);

    if (error) {
      console.error('Error subscribing:', error);
    } else {
      alert('Thank you for subscribing!');
      setEmail('');
    }
  };

  return (
    <footer className="w-full bg-burtBlue text-white">
      <div className="w-full py-10 px-4 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Contact Info */}
          <div className="flex flex-col gap-3">
            <h4 className="text-burntOrange text-2xl font-bold mb-4">Contact Info</h4>
            <a href="#" className="flex items-center gap-2">
              <i className="fa fa-map-marker-alt"></i> 123 Street, New York, USA
            </a>
            <a href="#" className="flex items-center gap-2">
              <i className="fas fa-envelope"></i> consultancynafex@example.com
            </a>
            <a href="#" className="flex items-center gap-2">
              <i className="fas fa-phone"></i> +233 553 831 241
            </a>
            <a href="#" className="flex items-center gap-2">
              <i className="fas fa-print"></i> +012 345 67890
            </a>
            <div className="flex items-center gap-2 mt-3">
              <i className="fas fa-share text-2xl text-burntOrange"></i>
              <div className="flex gap-2">
                <a className="hover:text-burntOrange" href="#"><i className="fab fa-facebook-f"></i></a>
                <a className="hover:text-burntOrange" href="#"><i className="fab fa-twitter"></i></a>
                <a className="hover:text-burntOrange" href="#"><i className="fab fa-instagram"></i></a>
                <a className="hover:text-burntOrange" href="#"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>

          {/* Opening Time */}
          <div className="flex flex-col gap-4">
            <h4 className="text-burntOrange text-2xl font-bold mb-4">Opening Time</h4>
            <div>
              <h6 className="text-gray-300">Mon - Friday:</h6>
              <p>09.00 am to 07.00 pm</p>
            </div>
            <div>
              <h6 className="text-gray-300">Saturday:</h6>
              <p>10.00 am to 05.00 pm</p>
            </div>
            <div>
              <h6 className="text-gray-300">Vacation:</h6>
              <p>All Sunday is our vacation</p>
            </div>
          </div>

          {/* Our Services */}
          <div className="flex flex-col gap-2">
            <h4 className="text-burntOrange text-2xl font-bold mb-4">Our Services</h4>
            {[
              "study abroad with scholarship",
              "Passport",
              "Tourist Visa",
              "Visa Procurement",
              "Flight Reservation",
              "Work & Study Abroad"
            ].map((service, index) => (
              <a key={index} href="#" className="flex items-center gap-2 hover:text-burntOrange">
                <i className="fas fa-angle-right"></i> {service}
              </a>
            ))}
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-burntOrange text-2xl font-bold mb-4">Newsletter</h4>
            <p className="mb-4">
              We are committed to providing high-quality services and ensuring customer satisfaction. Our team is dedicated to meeting your needs with professionalism and care.
            </p>

           

            {/* Newsletter Subscription Form */}
            <div className="relative w-full outline outline-2 outline-burntOrange focus:outline-burntOrange transition-all">
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full rounded-full py-3 pl-4 pr-28 text-black border-2 border-burntOrange focus:border-burntOrange transition-all"
              />

              <button
                onClick={handleSubscribe}
                type="button"
                className="absolute top-1 right-1 bg-burntOrange text-white rounded-full px-4 py-2 hover:bg-orange-700 transition-all"
              >
                 {loading ? (
                      <>
                        <i className="fa-solid fa-spinner animate-spin"></i>
                        Sending...
                      </>
                    ) : (
                      'SignUp'
                    )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
