import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Share2, Check, ZoomIn, X, FileText, Eye, ShieldCheck } from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { personalInfo } from '../data/portfolioData';

export function Resume() {
  const [copied, setCopied] = useState(false);
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

  const handleShare = async () => {
    const fullResumeUrl = window.location.origin + personalInfo.resumeUrl;
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(fullResumeUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <PageLayout title="Official Resume">
      <div className="space-y-8 pb-12">
        
        {/* Header */}
        <div className="border-b border-[#CBD5E1] pb-5">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#7C3AED] mb-1">
            <FileText className="w-4 h-4 text-[#7C3AED]" /> Official Candidate Resume
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#172033] tracking-tight">
            Official Resume
          </h1>
          <p className="mt-1 text-sm text-[#475569] font-mono">
            {personalInfo.name} • {personalInfo.title}
          </p>
        </div>

        {/* Action Buttons Top Bar */}
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-[#CBD5E1] shadow-2xs">
          <div className="flex items-center gap-2">
            <Badge variant="emerald" pulse className="text-xs font-mono font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" /> Verified Latest Version
            </Badge>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={handleShare}
              icon={copied ? Check : Share2}
            >
              {copied ? 'Link Copied!' : 'Share Link'}
            </Button>

            <Button
              variant="primary"
              size="sm"
              href={personalInfo.resumeUrl}
              target="_blank"
              download="Naganath_S_Dharwadkar_Resume.pdf"
              icon={Download}
            >
              Download PDF Resume
            </Button>
          </div>
        </div>

        {/* Resume Preview Container */}
        <div className="max-w-4xl mx-auto space-y-6">
          <Card
            onClick={() => setIsLightboxOpen(true)}
            className="p-4 bg-white border border-[#CBD5E1] hover:border-[#7C3AED] transition-all rounded-2xl shadow-2xs cursor-pointer group relative overflow-hidden"
          >
            <div className="w-full rounded-xl overflow-hidden bg-white relative border border-[#CBD5E1] min-h-[450px]">
              <img
                src={personalInfo.resumeImage}
                alt={`${personalInfo.name} Resume Preview`}
                className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]"
              />

              <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-2 text-white">
                <div className="p-3 rounded-full bg-[#7C3AED] text-white shadow-md">
                  <ZoomIn className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold bg-white text-[#172033] px-3 py-1.5 rounded-lg shadow-xs border border-[#CBD5E1]">
                  Click to View Full Size Preview
                </span>
              </div>
            </div>
          </Card>

          {/* Bottom Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button
              variant="secondary"
              size="md"
              onClick={() => setIsLightboxOpen(true)}
              icon={Eye}
            >
              Preview Full Screen
            </Button>

            <Button
              variant="primary"
              size="md"
              href={personalInfo.resumeUrl}
              target="_blank"
              download="Naganath_S_Dharwadkar_Resume.pdf"
              icon={Download}
            >
              Download PDF Resume
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
              className="relative w-full max-w-4xl bg-white border border-[#CBD5E1] rounded-2xl p-5 shadow-2xl z-10 space-y-3 flex flex-col max-h-[90vh]"
            >
              <div className="flex items-center justify-between border-b border-[#CBD5E1] pb-3">
                <h3 className="text-lg font-extrabold text-[#172033] font-sans">
                  {personalInfo.name} — Official Resume
                </h3>
                <button
                  onClick={() => setIsLightboxOpen(false)}
                  className="p-1.5 rounded-lg bg-[#F1F5F9] text-[#64748B] hover:bg-[#CBD5E1]"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="flex-1 overflow-auto rounded-xl border border-[#CBD5E1] bg-[#F1F5F9] p-4 flex justify-center items-center">
                <img
                  src={personalInfo.resumeImage}
                  alt={`${personalInfo.name} Resume`}
                  className="max-h-[70vh] w-auto object-contain rounded-lg shadow-sm"
                />
              </div>

              <div className="flex items-center justify-between border-t border-[#CBD5E1] pt-3">
                <Button
                  variant="primary"
                  size="sm"
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  download="Naganath_S_Dharwadkar_Resume.pdf"
                  icon={Download}
                >
                  Download PDF Resume
                </Button>
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
