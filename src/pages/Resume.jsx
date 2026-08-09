import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Share2, Check, ZoomIn, ZoomOut, RotateCcw, X, FileText, Eye } from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { personalInfo } from '../data/portfolioData';

export function Resume() {
  const [copied, setCopied] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(100);

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
    <PageLayout title="Resume Dashboard">
      <div className="space-y-8 pb-12">
        
        {/* Header */}
        <div className="border-b border-slate-200/80 pb-5">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-purple-600 mb-1">
            <FileText className="w-4 h-4" /> Official Candidate Resume
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Resume Dashboard
          </h1>
          <p className="mt-1 text-sm text-slate-600 font-mono">
            {personalInfo.name} • {personalInfo.title}
          </p>
        </div>

        {/* Resume Preview Card */}
        <div className="max-w-3xl mx-auto space-y-6">
          <Card
            onClick={() => setIsLightboxOpen(true)}
            className="p-3 bg-white border border-slate-200 hover:border-purple-300 transition-all rounded-2xl shadow-sm hover:shadow-md cursor-pointer group relative overflow-hidden"
          >
            <div className="w-full rounded-xl overflow-hidden bg-slate-100 relative border border-slate-200 min-h-[400px]">
              <img
                src={personalInfo.resumeImage}
                alt={`${personalInfo.name} Resume Preview`}
                className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]"
              />

              <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 text-white">
                <div className="p-3 rounded-full bg-white/90 text-purple-700 shadow-md">
                  <ZoomIn className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-semibold bg-slate-900/90 text-white px-3 py-1.5 rounded-lg shadow-sm">
                  Click to Expand Full Preview
                </span>
              </div>
            </div>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => setIsLightboxOpen(true)}
              icon={Eye}
            >
              Preview Resume
            </Button>

            <Button
              variant="primary"
              size="lg"
              href={personalInfo.resumeUrl}
              target="_blank"
              download="Naganath_S_Dharwadkar_Resume.pdf"
              icon={Download}
            >
              Download PDF
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={handleShare}
              icon={copied ? Check : Share2}
            >
              {copied ? 'Link Copied!' : 'Share Resume'}
            </Button>
          </div>
        </div>

      </div>

      {/* Responsive PDF Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsLightboxOpen(false)}
              className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs cursor-pointer"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-2xl p-5 shadow-2xl z-10 space-y-3 flex flex-col max-h-[90vh]"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="text-base font-bold text-slate-900 font-sans">
                  {personalInfo.name} — Official Resume
                </h3>
                <button
                  onClick={() => setIsLightboxOpen(false)}
                  className="p-1.5 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="flex-1 overflow-auto rounded-xl border border-slate-200 bg-slate-50 p-4 flex justify-center items-center">
                <img
                  src={personalInfo.resumeImage}
                  alt={`${personalInfo.name} Resume`}
                  className="max-h-[70vh] w-auto object-contain rounded-lg shadow-sm"
                />
              </div>

              <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                <Button
                  variant="primary"
                  size="sm"
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  download="Naganath_S_Dharwadkar_Resume.pdf"
                  icon={Download}
                >
                  Download Resume (PDF)
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
