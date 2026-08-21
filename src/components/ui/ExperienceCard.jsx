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
  ZoomOut
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

  const [activeDoc, setActiveDoc] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
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

  const zoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 2.5));
  const zoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 0.6));

  return (
    <>
      <Card className="p-6 sm:p-8 space-y-6 bg-white border-[#CBD5E1]">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#CBD5E1] pb-6">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-2xl font-extrabold text-[#172033] tracking-tight">
                {company}
              </h3>
              <Badge variant="purple">
                {workMode}
              </Badge>
            </div>

            <p className="text-base font-bold text-[#7C3AED] font-mono">
              {role}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#475569] pt-1">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#7C3AED]" /> {location}
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#7C3AED]" /> {duration}
              </span>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono text-[#475569] uppercase tracking-wider font-bold">
            About the Internship
          </h4>
          <p className="text-sm sm:text-base text-[#172033] leading-relaxed font-sans">
            {about}
          </p>
        </div>

        {/* What I Worked On */}
        {whatIWorkedOn && whatIWorkedOn.length > 0 && (
          <div className="space-y-3">
            <h4 className="text-xs font-mono text-[#475569] uppercase tracking-wider font-bold">
              What I Worked On
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-[#172033] font-sans">
              {whatIWorkedOn.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#7C3AED] flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Skills Gained */}
        {skillsGained && skillsGained.length > 0 && (
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono text-[#475569] uppercase tracking-wider font-bold">
              Skills Gained
            </h4>
            <div className="flex flex-wrap gap-2">
              {skillsGained.map((skill, idx) => (
                <Badge key={idx} variant="cyan" className="text-xs font-mono py-0.5 px-2.5">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Document Action Buttons */}
        <div className="pt-4 border-t border-[#CBD5E1] flex flex-wrap items-center gap-3">
          {offerLetterUrl && (
            <Button
              variant="secondary"
              size="md"
              icon={FileText}
              onClick={() => setActiveDoc({
                title: `Offer Letter — ${company}`,
                image: offerLetterImage,
                pdf: offerLetterUrl,
                downloadName: `${company}_Offer_Letter.pdf`
              })}
            >
              View Offer Letter
            </Button>
          )}

          {certificateUrl && (
            <Button
              variant="primary"
              size="md"
              icon={Award}
              onClick={() => setActiveDoc({
                title: `Completion Certificate — ${company}`,
                image: certificateImage,
                pdf: certificateUrl,
                downloadName: `${company}_Certificate.pdf`
              })}
            >
              View Internship Certificate
            </Button>
          )}
        </div>

      </Card>

      {/* Modal Lightbox */}
      <AnimatePresence>
        {activeDoc && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs cursor-pointer"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-4xl bg-white border border-[#CBD5E1] rounded-2xl p-6 shadow-2xl z-10 flex flex-col max-h-[90vh] overflow-hidden"
            >
              <div className="flex items-center justify-between border-b border-[#CBD5E1] pb-4">
                <h3 className="text-lg font-bold text-[#172033] font-sans">{activeDoc.title}</h3>
                <div className="flex items-center gap-2">
                  <button onClick={zoomOut} className="p-1.5 rounded-lg bg-[#F1F5F9] text-[#172033] hover:bg-[#CBD5E1]"><ZoomOut className="w-4 h-4" /></button>
                  <span className="text-xs font-mono font-semibold text-[#475569]">{Math.round(zoomLevel * 100)}%</span>
                  <button onClick={zoomIn} className="p-1.5 rounded-lg bg-[#F1F5F9] text-[#172033] hover:bg-[#CBD5E1]"><ZoomIn className="w-4 h-4" /></button>
                  <button onClick={closeModal} className="p-1.5 rounded-lg bg-[#F1F5F9] text-[#64748B] hover:bg-[#CBD5E1] ml-2"><X className="w-4 h-4" /></button>
                </div>
              </div>

              <div className="flex-1 overflow-auto rounded-xl border border-[#CBD5E1] bg-[#F1F5F9] p-4 my-4 flex justify-center items-center">
                <img
                  src={activeDoc.image}
                  alt={activeDoc.title}
                  style={{ transform: `scale(${zoomLevel})` }}
                  className="max-h-[65vh] w-auto object-contain rounded-lg shadow-md transition-transform"
                />
              </div>

              <div className="flex items-center justify-between border-t border-[#CBD5E1] pt-3">
                <Button variant="primary" size="sm" href={activeDoc.pdf} download={activeDoc.downloadName} target="_blank" icon={Download}>
                  Download Document
                </Button>
                <Button variant="secondary" size="sm" onClick={closeModal}>
                  Close
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
