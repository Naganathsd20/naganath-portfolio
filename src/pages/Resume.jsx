import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Share2, Check, ZoomIn, X, FileText } from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { personalInfo } from '../data/portfolioData';

export function Resume() {
  const [copied, setCopied] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // ESC key listener to close lightbox modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsLightboxOpen(false);
      }
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

  const handleShare = async () => {
    const shareData = {
      title: "Naganath S Dharwadkar — Resume",
      text: "Check out the official resume of Naganath S Dharwadkar (Final Year Computer Science Engineering Student).",
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        if (err.name !== 'AbortError') {
          copyToClipboard();
        }
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <PageLayout title="Resume — Naganath S Dharwadkar">
      <div className="min-h-screen bg-[#0B1120] text-[#F8FAFC] py-12 sm:py-16 flex flex-col justify-center items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center space-y-10">
          
          {/* 1. Page Title & Subtitle */}
          <div className="space-y-3 max-w-2xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#FFFFFF]">
              Resume
            </h1>
            <p className="text-[18px] text-[#E2E8F0] font-medium leading-[1.8] tracking-[0.2px]">
              A quick overview of my resume. You can preview it below or download a copy for future reference.
            </p>
          </div>

          {/* 2. Large Resume Preview Card (70-80% Desktop Width, A4 Aspect Ratio) */}
          <div className="w-full max-w-3xl mx-auto">
            <Card
              onClick={() => setIsLightboxOpen(true)}
              className="p-2 sm:p-3 bg-[#1E293B] border border-[#22D3EE]/30 hover:border-[#22D3EE]/60 transition-all duration-300 rounded-2xl shadow-2xl shadow-[#22D3EE]/10 overflow-hidden relative group cursor-pointer"
            >
              {/* Aspect Ratio Container for A4 Format */}
              <div className="aspect-[1/1.414] w-full rounded-xl overflow-hidden bg-[#111827] relative border border-[#334155]">
                
                {/* Resume Image */}
                <img
                  src={personalInfo.resumeImage}
                  alt={`${personalInfo.name} Resume Preview`}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />

                {/* Hover Click Lightbox Overlay */}
                <div className="absolute inset-0 bg-[#0B1120]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 text-[#22D3EE]">
                  <div className="p-3 rounded-full bg-[#111827]/90 border border-[#22D3EE] text-[#22D3EE] shadow-lg">
                    <ZoomIn className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-semibold text-[#F8FAFC] bg-[#0B1120]/80 px-3 py-1 rounded-full border border-[#334155]">
                    Click to Enlarge Preview
                  </span>
                </div>

                {/* Top Badge Overlay */}
                <div className="absolute top-3 left-3 bg-[#0B1120]/90 border border-[#334155] px-3 py-1 rounded-lg text-xs font-mono text-[#22D3EE] font-semibold flex items-center gap-1.5 shadow-md">
                  <FileText className="w-3.5 h-3.5 text-[#22D3EE]" /> Official Resume Preview
                </div>

              </div>
            </Card>
          </div>

          {/* 3. Action Buttons: Download & Share */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            
            {/* Primary Button: Download Resume */}
            <Button
              variant="primary"
              size="lg"
              href={personalInfo.resumeUrl}
              target="_blank"
              download="Naganath_S_Dharwadkar_Resume.pdf"
              icon={Download}
            >
              Download Resume
            </Button>

            {/* Secondary Button: Share Resume */}
            <Button
              variant="secondary"
              size="lg"
              onClick={handleShare}
              icon={copied ? Check : Share2}
            >
              {copied ? 'Link Copied to Clipboard!' : 'Share Resume'}
            </Button>

          </div>

          {/* Copy Toast Feedback */}
          {copied && (
            <p className="text-xs font-mono text-[#10B981] animate-fade-in">
              ✓ Portfolio link copied to your clipboard!
            </p>
          )}

        </div>
      </div>

      {/* Large Lightbox / Modal for Reading Resume */}
      <AnimatePresence>
        {isLightboxOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            
            {/* Dark Blurred Overlay Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsLightboxOpen(false)}
              className="fixed inset-0 bg-[#0B1120]/85 backdrop-blur-md cursor-pointer"
            />

            {/* Centered Lightbox Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-4xl bg-[#1E293B] border border-[#22D3EE]/40 rounded-2xl p-4 sm:p-6 shadow-2xl shadow-[#22D3EE]/10 z-10 space-y-4 overflow-hidden max-h-[95vh] flex flex-col"
            >
              
              {/* Lightbox Header */}
              <div className="flex items-center justify-between border-b border-[#334155] pb-3 flex-shrink-0">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#22D3EE]" />
                  <h3 className="text-lg font-bold text-[#F8FAFC]">
                    {personalInfo.name} — Official Resume
                  </h3>
                </div>

                <button
                  onClick={() => setIsLightboxOpen(false)}
                  className="p-2 rounded-xl bg-[#111827] border border-[#334155] text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#22D3EE] transition-colors"
                  aria-label="Close lightbox"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* High-Resolution Resume Image Display */}
              <div className="flex-1 overflow-auto rounded-xl border border-[#334155] bg-[#111827] flex items-center justify-center p-2 min-h-[350px]">
                <img
                  src={personalInfo.resumeImage}
                  alt={`${personalInfo.name} Resume High Resolution`}
                  className="max-h-[75vh] w-auto object-contain rounded-lg shadow-md"
                />
              </div>

              {/* Lightbox Footer Buttons */}
              <div className="flex flex-wrap items-center justify-end gap-3 pt-2 border-t border-[#334155] flex-shrink-0">
                <Button
                  variant="primary"
                  size="md"
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  download="Naganath_S_Dharwadkar_Resume.pdf"
                  icon={Download}
                >
                  Download Resume (PDF)
                </Button>

                <Button
                  variant="secondary"
                  size="md"
                  onClick={() => setIsLightboxOpen(false)}
                >
                  Close Preview
                </Button>
              </div>

            </motion.div>

          </div>
        )}
      </AnimatePresence>

    </PageLayout>
  );
}
