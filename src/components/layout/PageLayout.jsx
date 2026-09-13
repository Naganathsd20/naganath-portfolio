import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { DeveloperBackground } from './DeveloperBackground';

export function PageLayout({ children, title }) {
  useEffect(() => {
    window.scrollTo(0, 0);

    if (title) {
      document.title = `${title} — Naganath S Dharwadkar`;
    } else {
      document.title = `Naganath S Dharwadkar — Developer Platform`;
    }
  }, [title]);

  return (
    <div className="min-h-screen bg-[#E8EDF5] text-[#172033] flex flex-col antialiased font-sans relative">
      <DeveloperBackground />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <motion.main
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="flex-1 w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8"
        >
          {children}
        </motion.main>

        <Footer />
      </div>
    </div>
  );
}

