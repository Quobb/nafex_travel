import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from 'react-router-dom';
  
  import Home from '../Screens/Home';
  import About from '../Screens/About';
  import Contact from '../Screens/Contact';
  import Services from '../Screens/Services';
import Testimonial from '../Screens/Testimonial';
import Navbar from '../component/Navbar';
import Passport from '../Screens/Passport';
import StudyAbrod from '../Screens/StudyAbrod';
import TouristVisa from '../Screens/TouristVisa';
  
  function RouterApp() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/passport" element={<Passport />} />
          <Route path="/study-abroad" element={<StudyAbrod />} />
          <Route path="/tourist-visa" element={<TouristVisa />} />
        </Routes>
      </Router>
    );
  }
  
  export default RouterApp;
  