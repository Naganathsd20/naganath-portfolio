import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function LoadingScreen({ onComplete }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      if (onComplete) onComplete();
    }, 700);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.25, ease: 'easeInOut' } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F8FAFC] text-[#0F172A] select-none"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-pink-500 flex items-center justify-center shadow-sm">
              <span className="font-bold text-sm text-white tracking-tight font-sans">ND</span>
            </div>
            <span className="text-xl sm:text-2xl font-extrabold tracking-tight font-sans text-slate-900">
              Naganath S Dharwadkar
            </span>
          </motion.div>

          <div className="w-48 h-1.5 bg-slate-200 rounded-full overflow-hidden border border-slate-300/60">
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="h-full bg-purple-600 rounded-full"
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 0.15 }}
            className="text-xs text-purple-700 mt-4 tracking-widest uppercase font-mono font-medium"
          >
            Initializing Developer OS...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
