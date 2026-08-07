import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Download, X, Award, ZoomIn, ZoomOut, RotateCcw, Building2 } from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { certifications } from '../data/portfolioData';

export function Achievements() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  const cert = certifications[0]; // Single Deloitte certification

  // ESC key listener to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    if (selectedCert) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedCert]);

  const closeModal = () => {
    setSelectedCert(null);
    setZoomLevel(1);
  };

  const zoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 2.5));
  const zoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 0.6));
  const resetZoom = () => setZoomLevel(1);

  return (
    <PageLayout title="Certifications — Naganath S Dharwadkar">
      <div className="min-h-screen bg-[#0B1120] text-[#F8FAFC]">
        
        {/* Page Title & Subtitle */}
        <section className="pt-12 pb-8 sm:pt-16 sm:pb-12 border-b border-[#334155]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#FFFFFF]">
              Certifications
            </h1>
            <p className="mt-3 text-[18px] text-[#E2E8F0] font-medium leading-[1.8] tracking-[0.2px] max-w-3xl">
              A collection of certifications that reflect my continuous learning in software development, web technologies, artificial intelligence, and programming.
            </p>
          </div>
        </section>

        {/* Single Centered Wide Certification Card */}
        <section className="py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
            
            {cert && (
              <div className="w-full max-w-[780px]">
                <Card className="bg-[#243447] border-[#334155] hover:border-[#22D3EE]/40 transition-all duration-300 rounded-[18px] overflow-hidden shadow-2xl space-y-6 p-6 sm:p-8">
                  
                  {/* Certificate Image Preview Banner */}
                  <div
                    onClick={() => setSelectedCert(cert)}
                    className="relative aspect-[16/9] w-full overflow-hidden bg-[#111827] rounded-xl border border-[#334155] cursor-pointer group"
                  >
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-[#0B1120]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-xs font-mono font-semibold text-[#22D3EE] bg-[#0B1120]/90 px-3 py-1.5 rounded-full border border-[#22D3EE]/40 shadow-lg">
                        Click to Preview Certificate
                      </span>
                    </div>
                  </div>

                  {/* Certification Header Details */}
                  <div className="space-y-3">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FFFFFF] tracking-tight">
                      {cert.name}
                    </h2>
                    
                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#CBD5E1]">
                      <span className="inline-flex items-center gap-1.5 text-[#22D3EE] font-semibold">
                        <Building2 className="w-4 h-4 text-[#22D3EE]" /> {cert.issuer}
                      </span>
                      <span>•</span>
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#22D3EE]" /> Completed: {cert.issueDate}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-2 pt-2 border-t border-[#334155]">
                    <h3 className="text-xs font-mono text-[#CBD5E1] uppercase tracking-wider font-semibold">
                      About the Certification
                    </h3>
                    <p className="text-[18px] text-[#E2E8F0] font-medium leading-[1.8] tracking-[0.2px]">
                      {cert.about}
                    </p>
                  </div>

                  {/* Skills Gained */}
                  <div className="space-y-2.5 pt-2 border-t border-[#334155]">
                    <h3 className="text-xs font-mono text-[#CBD5E1] uppercase tracking-wider font-semibold">
                      Skills Gained
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, idx) => (
                        <Badge key={idx} variant="cyan" className="text-xs font-mono py-1 px-3">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Single View Certificate Button */}
                  <div className="pt-4 border-t border-[#334155]">
                    <Button
                      variant="primary"
                      size="lg"
                      icon={Award}
                      onClick={() => setSelectedCert(cert)}
                      className="w-full justify-center"
                    >
                      🏅 View Certificate
                    </Button>
                  </div>

                </Card>
              </div>
            )}

          </div>
        </section>

      </div>

      {/* Modern Certificate Viewer Lightbox / Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            
            {/* Dark Blurred Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-[#0B1120]/80 backdrop-blur-md cursor-pointer"
            />

            {/* Centered Popup Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-4xl bg-[#1E293B] border border-[#22D3EE]/40 rounded-2xl p-4 sm:p-6 shadow-2xl shadow-[#22D3EE]/10 z-10 space-y-4 overflow-hidden max-h-[92vh] flex flex-col"
            >
              
              {/* Modal Top Header & Zoom Controls */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#334155] pb-3 flex-shrink-0">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#FFFFFF] tracking-tight">
                    {selectedCert.name}
                  </h3>
                  <p className="text-xs font-mono font-semibold text-[#22D3EE] mt-0.5">
                    Issued by {selectedCert.issuer} • Completed: {selectedCert.issueDate}
                  </p>
                </div>

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

              {/* Large Scrollable & Zoomable Certificate Preview */}
              <div className="flex-1 overflow-auto rounded-xl border border-[#334155] bg-[#111827] flex items-center justify-center p-4 min-h-[300px]">
                <div className="transition-transform duration-200 ease-out origin-top flex justify-center w-full">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.name}
                    style={{ transform: `scale(${zoomLevel})` }}
                    className="max-h-[65vh] w-auto object-contain rounded-lg shadow-md transition-transform duration-200"
                  />
                </div>
              </div>

              {/* Modal Footer Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-[#334155] flex-shrink-0">
                <p className="text-xs font-mono text-[#CBD5E1]">
                  Tip: Use zoom controls above or scroll to inspect the certificate.
                </p>

                <div className="flex items-center gap-3">
                  <Button
                    variant="primary"
                    size="sm"
                    href={selectedCert.verificationUrl}
                    download={`${selectedCert.name.replace(/\s+/g, '_')}_Certificate.pdf`}
                    target="_blank"
                    icon={Download}
                  >
                    Download Certificate (PDF)
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

    </PageLayout>
  );
}
