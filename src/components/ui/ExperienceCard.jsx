import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  MapPin,
  CheckCircle2,
  FileText,
  Award,
  Download,
  X,
  ZoomIn,
  ZoomOut,
  RotateCcw
} from 'lucide-react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';

export function ExperienceCard({ exp }) {
  const {
    company,
    role,
    location,
    workMode,
    duration,
    about,
    whatIWorkedOn,
    skillsGained,
    offerLetterUrl,
    offerLetterImage,
    certificateUrl,
    certificateImage
  } = exp;

  const [activeDoc, setActiveDoc] = useState(null); // { title, image, pdf }
  const [zoomLevel, setZoomLevel] = useState(1);

  // ESC key listener to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    if (activeDoc) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [activeDoc]);

  const closeModal = () => {
    setActiveDoc(null);
    setZoomLevel(1);
  };

  const zoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.25, 2.5));
  };

  const zoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.25, 0.6));
  };

  const resetZoom = () => {
    setZoomLevel(1);
  };

  return (
    <>
      <Card className="p-6 sm:p-8 bg-[#243447] border-[#334155] hover:border-[#22D3EE]/40 transition-all duration-300 rounded-[18px] shadow-xl space-y-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#334155] pb-6">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-2xl font-extrabold text-[#FFFFFF] tracking-tight">
                {company}
              </h3>
              <Badge variant="cyan">
                {workMode}
              </Badge>
            </div>

            <p className="text-base font-semibold text-[#CBD5E1] font-mono">
              {role}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#CBD5E1] pt-1">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#22D3EE]" /> {location}
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1.5 text-[#CBD5E1]">
                <Calendar className="w-3.5 h-3.5 text-[#22D3EE]" /> {duration}
              </span>
            </div>
          </div>
        </div>

        {/* About the Internship */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono text-[#CBD5E1] uppercase tracking-wider font-semibold">
            About the Internship
          </h4>
          <p className="text-[18px] text-[#E2E8F0] font-medium leading-[1.8] tracking-[0.2px]">
            {about}
          </p>
        </div>

        {/* What I Worked On */}
        {whatIWorkedOn && whatIWorkedOn.length > 0 && (
          <div className="space-y-3">
            <h4 className="text-xs font-mono text-[#CBD5E1] uppercase tracking-wider font-semibold">
              What I Worked On
            </h4>
            <ul className="space-y-2.5 text-[16px] text-[#E2E8F0] font-medium">
              {whatIWorkedOn.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#22D3EE] flex-shrink-0 mt-1" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Skills Gained */}
        {skillsGained && skillsGained.length > 0 && (
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono text-[#CBD5E1] uppercase tracking-wider font-semibold">
              Skills Gained
            </h4>
            <div className="flex flex-wrap gap-2">
              {skillsGained.map((skill, idx) => (
                <Badge key={idx} variant="cyan" className="text-xs font-mono py-1 px-3">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Documents Section (Only 2 Buttons) */}
        <div className="pt-4 border-t border-[#334155] flex flex-wrap items-center gap-4">
          {offerLetterUrl && (
            <Button
              variant="outline"
              size="md"
              icon={FileText}
              onClick={() => setActiveDoc({
                title: 'Internship Offer Letter — Codec Technologies',
                image: offerLetterImage,
                pdf: offerLetterUrl,
                downloadName: 'Codec_Technologies_Offer_Letter.pdf'
              })}
            >
              📄 View Offer Letter
            </Button>
          )}

          {certificateUrl && (
            <Button
              variant="primary"
              size="md"
              icon={Award}
              onClick={() => setActiveDoc({
                title: 'Internship Completion Certificate — Codec Technologies',
                image: certificateImage,
                pdf: certificateUrl,
                downloadName: 'Codec_Technologies_Internship_Certificate.pdf'
              })}
            >
              🎓 View Internship Completion Certificate
            </Button>
          )}
        </div>

      </Card>

      {/* Interactive Responsive Document Lightbox / Modal */}
      <AnimatePresence>
        {activeDoc && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            
            {/* Dark Blurred Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-[#0B1120]/85 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-4xl bg-[#1E293B] border border-[#22D3EE]/40 rounded-2xl p-4 sm:p-6 shadow-2xl shadow-[#22D3EE]/10 z-10 flex flex-col max-h-[92vh] overflow-hidden"
            >
              
              {/* Modal Top Controls Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#334155] pb-3 flex-shrink-0">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#22D3EE]" />
                  <h3 className="text-base sm:text-lg font-bold text-[#FFFFFF] tracking-tight">
                    {activeDoc.title}
                  </h3>
                </div>

                {/* Zoom Controls & Close Button */}
                <div className="flex items-center gap-2">
                  
                  <div className="flex items-center gap-1 bg-[#111827] border border-[#334155] rounded-xl p-1">
                    <button
                      onClick={zoomOut}
                      className="p-1.5 rounded-lg text-[#CBD5E1] hover:text-[#22D3EE] hover:bg-[#334155] transition-colors"
                      title="Zoom Out (-)"
                      aria-label="Zoom Out"
                    >
                      <ZoomOut className="w-4 h-4" />
                    </button>

                    <span className="text-xs font-mono text-[#22D3EE] px-1 font-semibold min-w-[40px] text-center">
                      {Math.round(zoomLevel * 100)}%
                    </span>

                    <button
                      onClick={zoomIn}
                      className="p-1.5 rounded-lg text-[#CBD5E1] hover:text-[#22D3EE] hover:bg-[#334155] transition-colors"
                      title="Zoom In (+)"
                      aria-label="Zoom In"
                    >
                      <ZoomIn className="w-4 h-4" />
                    </button>

                    <button
                      onClick={resetZoom}
                      className="p-1.5 rounded-lg text-[#CBD5E1] hover:text-[#22D3EE] hover:bg-[#334155] transition-colors"
                      title="Reset Zoom"
                      aria-label="Reset Zoom"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <button
                    onClick={closeModal}
                    className="p-2 rounded-xl bg-[#111827] border border-[#334155] text-[#94A3B8] hover:text-[#FFFFFF] hover:border-[#22D3EE] transition-colors"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Scrollable & Zoomable Document Container */}
              <div className="flex-1 overflow-auto rounded-xl border border-[#334155] bg-[#111827] flex items-center justify-center p-4 min-h-[300px] my-3">
                <div className="transition-transform duration-200 ease-out origin-top flex justify-center w-full">
                  <img
                    src={activeDoc.image}
                    alt={activeDoc.title}
                    style={{ transform: `scale(${zoomLevel})` }}
                    className="max-h-[70vh] w-auto object-contain rounded-lg shadow-lg transition-transform duration-200"
                  />
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-[#334155] flex-shrink-0">
                <p className="text-xs font-mono text-[#94A3B8]">
                  Tip: Use controls above to zoom, or scroll to read document.
                </p>

                <div className="flex items-center gap-3">
                  <Button
                    variant="primary"
                    size="sm"
                    href={activeDoc.pdf}
                    download={activeDoc.downloadName}
                    target="_blank"
                    icon={Download}
                  >
                    Download Document (PDF)
                  </Button>

                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={closeModal}
                  >
                    Close
                  </Button>
                </div>
              </div>

            </motion.div>

          </div>
        )}
      </AnimatePresence>
    </>
  );
}
