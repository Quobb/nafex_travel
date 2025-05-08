import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import { useEffect } from 'react';
import Home from '../Screens/Home';
import About from '../Screens/About';
import Contact from '../Screens/Contact';
import Services from '../Screens/Services';
import Testimonial from '../Screens/Testimonial';
import Navbar from '../component/Navbar';
import Passport from '../Screens/Passport';
import StudyAbrod from '../Screens/StudyAbrod';
import TouristVisa from '../Screens/TouristVisa';
import AppLayout from '../component/AppLayout';
import VisaaAssist from '../Screens/VisaaAssist';
import BankStatementPage from '../Screens/BankStatementPage';
import VisaProcument from '../Screens/VisaProcument';
import WithScholarShip from '../Screens/WithScholarShip';
import BirthCert from '../Screens/BirthCert';
import Flight from '../Screens/Flight';
import InvitationLetter from '../Screens/InvitationLetter';
import Block from '../Screens/Block';
import Company from '../Screens/Company';
import WorkStudy from '../Screens/WorkStudy';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

// Component to handle progress bar on route change
function RouteChangeHandler() {
  const location = useLocation();

  useEffect(() => {
    NProgress.start();

    // Slight delay to allow rendering before stopping
    const timeout = setTimeout(() => {
      NProgress.done();
    }, 300); // you can tweak this timing

    return () => {
      clearTimeout(timeout);
    };
  }, [location]);

  return null;
}

function RouterApp() {
  return (
    <Router>
      <RouteChangeHandler />
      <Navbar />
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/passport" element={<Passport />} />
          <Route path="/study-abroad" element={<StudyAbrod />} />
          <Route path="/tourist-visa" element={<TouristVisa />} />
          <Route path="/visa-assist" element={<VisaaAssist />} />
          <Route path="/bank" element={<BankStatementPage />} />
          <Route path="/Flight" element={<Flight />} />
          <Route path="/VisaProcument" element={<VisaProcument />} />
          <Route path="/WithScholarShip" element={<WithScholarShip />} />
          <Route path="/BirthCert" element={<BirthCert />} />
          <Route path="/Company" element={<Company />} />
          <Route path="/Block" element={<Block />} />
          <Route path="/WorkStudy" element={<WorkStudy />} />
          <Route path="/InvitationLetter" element={<InvitationLetter />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default RouterApp;
