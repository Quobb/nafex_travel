// components/AppLayout.jsx
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import GlobalLoader from "./GlobalLoader";

export default function AppLayout({ children }) {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 700); // Adjust based on actual fetch/delay

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <>
      {loading && <GlobalLoader />}
      {children}
    </>
  );
}
