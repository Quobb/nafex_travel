import React, { useState } from 'react';
import supabase from '../supabaseClient';
import { Link } from "react-router-dom";
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
            {services.map((service, index) => (
              <Link key={index} to={service.link} className="flex items-center gap-2 hover:text-burntOrange">
                <i className="fas fa-angle-right"></i> {service.name}
              </Link>
            ))}
          </div>


          {/* Newsletter */}
          <div>
            <h4 className="text-burntOrange text-2xl font-bold mb-4">Newsletter</h4>
            <p className="mb-4">
              We are committed to providing high-quality services and ensuring customer satisfaction. Our team is dedicated to meeting your needs with professionalism and care.
            </p>

           

            {/* Newsletter Subscription Form */}
            <div className="relative w-full  transition-all">
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
                      'Subscribe'
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
