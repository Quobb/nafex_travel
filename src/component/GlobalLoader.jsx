// components/GlobalLoader.jsx
import { motion } from "framer-motion";

export default function GlobalLoader() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-white flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="w-14 h-14 border-4 border-burtBlue border-t-transparent rounded-full animate-spin"></div>
    </motion.div>
  );
}
