import { motion } from "framer-motion";
import { X } from "lucide-react";
import React, { useState } from 'react';
import supabase from '../supabaseClient';

export default function NewsletterModal({ show, onClose }) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email) return;
    setLoading(true);

    const { data, error } = await supabase
      .from('newslet')
      .insert([{ email }]);

    setLoading(false);

    if (error) {
      console.error('Subscription error:', error);
      alert('Something went wrong. Please try again.');
    } else {
      alert('Thank you for subscribing!');
      setEmail('');
      onClose();
    }
  };

  if (!show) return null;

  return (
    <div className="fixed top-4 right-4 z-50 max-w-sm w-full px-4 sm:px-0">
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: -20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="relative bg-white p-6 rounded-xl shadow-xl text-left"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>

        <h2 className="text-lg font-bold mb-1 text-burtBlue">Subscribe to Newsletter</h2>
        <p className="text-sm text-gray-600 mb-4">
          Get travel tips, offers & updates in your inbox!
        </p>

        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full py-2 px-4 rounded-full border-2 border-burntOrange focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-burntOrange text-white rounded-full px-4 py-2 hover:bg-orange-700 transition-all whitespace-nowrap"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <i className="fa-solid fa-spinner animate-spin" />
                Sending...
              </span>
            ) : (
              'Subscribe'
            )}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
