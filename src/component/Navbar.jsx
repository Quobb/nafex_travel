import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaBars as Menu,
  FaTimes as X,
  FaEnvelope,
  FaPhoneAlt,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import brandLogo from "../assets/logo.png"; // Adjust path if needed

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="bg-burtBlue text-white text-sm px-">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center py-2 gap-2 md:gap-0">
          <div className="flex flex-wrap justify-center md:justify-start space-x-4 text-xs sm:text-sm">
            <a
              href="mailto:consultancynafex@gmail.com"
              className="flex items-center space-x-1 text-gray-300 hover:text-burntOrange"
            >
              <FaEnvelope className="text-burntOrange" />
              <span>consultancynafex@gmail.com</span>
            </a>
            <a
              href="tel:+2330553831241"
              className="flex items-center space-x-1 text-gray-300 hover:text-burntOrange"
            >
              <FaPhoneAlt className="text-burntOrange" />
              <span>+233 0553 831 241</span>
            </a>
          </div>
          <div className="flex justify-center md:justify-end space-x-3 text-gray-300">
            <a href="#" className="hover:text-burntOrange"><FaTwitter /></a>
            <a href="#" className="hover:text-burntOrange"><FaFacebookF /></a>
            <a href="#" className="hover:text-burntOrange"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-burntOrange"><FaInstagram /></a>
            <a href="#" className="hover:text-burntOrange"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <nav className={`bg-white shadow-md px-5 transition-all ${isScrolled ? "fixed top-0 left-0 w-full z-50 shadow-lg" : ""}`}>
        <div className="max-w-7xl mx-auto px-4  flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img src={brandLogo} alt="Brand Logo" className="w-[120px]" />
          </Link>

          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-burtBlue font-medium hover:text-burntOrange">Home</Link>
            
            <Link to="/testimonial" className="text-burtBlue font-medium hover:text-burntOrange">Testimonials</Link>
            <Link to="/service" className="text-burtBlue font-medium hover:text-burntOrange">Services</Link>
            <Link to="/contact" className="text-burtBlue font-medium hover:text-burntOrange">Contact</Link>
            <div 
              className="relative group"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className="block lg:inline-block text-burtBlue hover:text-burntOrange focus:outline-none "
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                more
              </button>
              {/* Dropdown */}
              {dropdownOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg z-10">
                  <Link to="/passport" className="block px-4 py-2 text-burtBlue hover:text-burntOrange">Passport</Link>
                  <Link to="/BirthCert" className="block px-4 py-2 text-burntOrange hover:bg-gray-100">Birth Certificate</Link>
                  <Link to="/study-abroad" className="block px-4 py-2 text-burtBlue hover:text-burntOrange">Study Abroad</Link>
                  <Link to="/visa-assist" className="block px-4 py-2 text-burtBlue hover:text-burntOrange">Tourist Visa</Link>
                  <Link to="/bank" className="block px-4 py-2 text-burntOrange hover:bg-gray-100">Bank Statement</Link>
                  <Link to="/WorkStudy" className="block px-4 py-2 text-burntOrange hover:bg-gray-100">Work & Study Abroad</Link>
                  <Link to="/VisaProcument" className="block px-4 py-2 text-burntOrange hover:bg-gray-100">Visa Procurement</Link>
                  <Link to="/Company" className="block px-4 py-2 text-burntOrange hover:bg-gray-100">Company Registration</Link>
                  <Link to="/Flight" className="block px-4 py-2 text-burntOrange hover:bg-gray-100">Flight Reversation</Link>
                  <Link to="/Block" className="block px-4 py-2 text-burntOrange hover:bg-gray-100">Block account </Link>
                  <Link to="/InvitationLetter" className="block px-4 py-2 text-burntOrange hover:bg-gray-100">Invitation Letter </Link>
                </div>
              )}
            </div>
            <Link to="/about" className="text-burtBlue font-medium hover:text-burntOrange">About</Link>
            <Link to="/" className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">Get Started</Link>
          </div>

          <button className="md:hidden text-burtBlue" onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? "Close menu" : "Open menu"}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white px-4 pb-4 space-y-2">
            <Link to="/" className="block text-burtBlue hover:text-burntOrange">Home</Link>
            <Link to="/about" className="block text-burtBlue hover:text-burntOrange">About</Link>
            <Link to="/testimonial" className="block text-burtBlue hover:text-burntOrange">Testimonials</Link>
            <Link to="/service" className="block text-burtBlue hover:text-burntOrange">Services</Link>
            <Link to="/contact" className="block text-burtBlue hover:text-burntOrange">Contact</Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
