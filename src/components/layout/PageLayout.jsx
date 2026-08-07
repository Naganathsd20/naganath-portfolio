import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollProgress } from './ScrollProgress';
import { ScrollToTop } from './ScrollToTop';

export function PageLayout({ children, title }) {
  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);

    // Dynamic document title update
    if (title) {
      document.title = `${title} — Naganath S Dharwadkar`;
    } else {
      document.title = `Naganath S Dharwadkar — Final Year CS Student & Aspiring Developer`;
    }
  }, [title]);

  return (
    <div className="min-h-screen flex flex-col bg-[#0B1120] text-[#F8FAFC] selection:bg-[#22D3EE]/20 selection:text-[#22D3EE]">
      <ScrollProgress />
      <Navbar />

      <motion.main
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="flex-grow w-full"
      >
        {children}
      </motion.main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

