import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function LoadingScreen({ onComplete }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      if (onComplete) onComplete();
    }, 1000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.3, ease: 'easeInOut' } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0B1120] text-[#F8FAFC] select-none"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-10 h-10 rounded-xl bg-[#22D3EE] flex items-center justify-center shadow-md shadow-[#22D3EE]/20">
              <span className="font-bold text-sm text-[#0B1120] tracking-tight font-sans">NSD</span>
            </div>
            <span className="text-xl sm:text-2xl font-bold tracking-tight font-sans text-[#F8FAFC]">
              Naganath S Dharwadkar
            </span>
          </motion.div>

          <div className="w-48 h-1.5 bg-[#111827] rounded-full overflow-hidden border border-[#334155]">
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              className="h-full bg-[#22D3EE] rounded-full"
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 0.2 }}
            className="text-xs text-[#94A3B8] mt-4 tracking-widest uppercase font-mono"
          >
            Computer Science & Engineering Student
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

