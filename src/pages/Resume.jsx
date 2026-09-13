import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, ZoomIn, Eye, X, ExternalLink } from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { personalInfo } from '../data/portfolioData';

export function Resume() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsLightboxOpen(false);
    };
    if (isLightboxOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isLightboxOpen]);

  const handleViewResume = () => {
    window.open(personalInfo.resumeImage, '_blank', 'noopener,noreferrer');
  };

  return (
    <PageLayout title="Resume">
      <div className="space-y-8 pb-12">
        
        {/* Header */}
        <div className="border-b border-[#CBD5E1] pb-5 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#172033] tracking-tight">
              Resume
            </h1>
            <p className="mt-1 text-sm text-[#475569] font-mono">
              {personalInfo.name} • {personalInfo.title}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={handleViewResume}
              icon={ExternalLink}
            >
              View Resume
            </Button>

            <Button
              variant="primary"
              size="sm"
              href={personalInfo.resumeUrl}
              target="_blank"
              download="Naganath_S_Dharwadkar_Resume.png"
              icon={Download}
            >
              Download Resume
            </Button>
          </div>
        </div>

        {/* Resume Preview Card */}
        <div className="max-w-4xl mx-auto space-y-6">
          <Card
            onClick={() => setIsLightboxOpen(true)}
            className="p-3 sm:p-4 bg-white border border-[#CBD5E1] hover:border-[#7C3AED] transition-all rounded-2xl shadow-2xs cursor-pointer group relative overflow-hidden"
          >
            <div className="w-full rounded-xl overflow-hidden bg-white relative border border-[#CBD5E1]">
              <img
                src={personalInfo.resumeImage}
                alt={`${personalInfo.name} Resume`}
                className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.005]"
              />

              <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-2 text-white">
                <div className="p-3 rounded-full bg-[#7C3AED] text-white shadow-md">
                  <ZoomIn className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold bg-white text-[#172033] px-3.5 py-1.5 rounded-lg shadow-xs border border-[#CBD5E1]">
                  Click to View Full Size Preview
                </span>
              </div>
            </div>
          </Card>

          {/* Bottom Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button
              variant="secondary"
              size="md"
              onClick={() => setIsLightboxOpen(true)}
              icon={Eye}
            >
              View Resume
            </Button>

            <Button
              variant="primary"
              size="md"
              href={personalInfo.resumeUrl}
              target="_blank"
              download="Naganath_S_Dharwadkar_Resume.png"
              icon={Download}
            >
              Download Resume
            </Button>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsLightboxOpen(false)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs cursor-pointer"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl bg-white border border-[#CBD5E1] rounded-2xl p-4 sm:p-5 shadow-2xl z-10 space-y-3 flex flex-col max-h-[92vh]"
            >
              <div className="flex items-center justify-between border-b border-[#CBD5E1] pb-3">
                <h3 className="text-base sm:text-lg font-extrabold text-[#172033] font-sans">
                  {personalInfo.name} — Resume
                </h3>
                <button
                  onClick={() => setIsLightboxOpen(false)}
                  className="p-1.5 rounded-lg bg-[#F1F5F9] text-[#64748B] hover:bg-[#CBD5E1] transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="flex-1 overflow-auto rounded-xl border border-[#CBD5E1] bg-[#F8FAFC] p-2 sm:p-4 flex justify-center items-start">
                <img
                  src={personalInfo.resumeImage}
                  alt={`${personalInfo.name} Resume Preview`}
                  className="w-full h-auto object-contain rounded-lg shadow-sm"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#CBD5E1] pt-3">
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleViewResume}
                    icon={ExternalLink}
                  >
                    Open in New Tab
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    href={personalInfo.resumeUrl}
                    target="_blank"
                    download="Naganath_S_Dharwadkar_Resume.png"
                    icon={Download}
                  >
                    Download Resume
                  </Button>
                </div>
                <Button variant="secondary" size="sm" onClick={() => setIsLightboxOpen(false)}>
                  Close
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </PageLayout>
  );
}

