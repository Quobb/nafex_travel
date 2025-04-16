
import RouterApp from './Router/Router'
import './styles.css'
import './App.css'
import './index.css'
import NewsletterModal from './component/NewsletterModal'
import { useEffect, useState } from "react";

function App() {

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const hasSeenModal = localStorage.getItem("seenNewsletterModal");

    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setShowModal(true);
        localStorage.setItem("seenNewsletterModal", "true");
      }, 5000); // 5 seconds delay

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <RouterApp />
      <NewsletterModal show={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}

export default App
