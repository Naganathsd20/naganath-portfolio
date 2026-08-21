import React from 'react';
import { ExternalLink, Award, CheckCircle2, Calendar, Building2, FileText } from 'lucide-react';

export function CertificationCard({ cert }) {
  if (!cert) return null;

  const {
    title,
    name,
    issuer,
    type,
    category,
    issueDate,
    credentialId,
    verificationUrl,
    certificatePdf,
    image,
    description,
    about,
    skills = []
  } = cert;

  const certTitle = title || name || 'Deloitte Technology Job Simulation';
  const certIssuer = issuer || 'Deloitte Australia / Forage';
  const certType = type || category || 'Technology Job Simulation – Certificate of Completion';
  const certDate = issueDate || 'June 30, 2026';
  const certDesc = description || about || 'Completed practical coding and development tasks as part of the Deloitte Australia Technology Job Simulation on Forage.';
  const pdfUrl = certificatePdf || verificationUrl || '/Deloitte_Technology_Job_Simulation_Certificate.pdf';
  const previewImg = image || '/Deloitte_Technology_Job_Simulation_Certificate.png';

  return (
    <div className="group relative rounded-2xl bg-white border border-[#CBD5E1] hover:border-[#7C3AED]/70 p-6 md:p-7 transition-all duration-200 shadow-2xs hover:shadow-md overflow-hidden flex flex-col justify-between text-[#172033]">
      
      <div>
        {/* Top Header Row */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5 pb-4 border-b border-[#CBD5E1]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#EDE9FE] text-[#7C3AED] border border-[#7C3AED]/30 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-100 transition-colors shadow-2xs">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#7C3AED] uppercase tracking-wider font-mono flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-[#7C3AED]" />
                {certIssuer}
              </div>
              <div className="text-[11px] text-[#475569] font-mono mt-0.5 flex items-center gap-1">
                <Calendar className="w-3 h-3 text-[#475569]" />
                Issued {certDate}
              </div>
            </div>
          </div>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-mono bg-[#EDE9FE] text-[#7C3AED] border border-[#7C3AED]/30 shadow-2xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#7C3AED]" />
            Verified Credential
          </span>
        </div>

        {/* Content & Certificate Image Preview */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-start mb-6">
          
          {/* Certificate Image Preview */}
          {previewImg && (
            <div className="sm:col-span-4 lg:col-span-3">
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block group/img relative rounded-xl overflow-hidden border border-[#CBD5E1] bg-white hover:border-[#7C3AED] transition-all duration-200 shadow-2xs aspect-[4/3]"
                title="Click to view full certificate PDF"
              >
                <img
                  src={previewImg}
                  alt={certTitle}
                  className="w-full h-full object-cover object-top group-hover/img:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 flex items-end justify-center p-2">
                  <span className="text-[10px] font-mono font-bold text-white flex items-center gap-1 bg-slate-900/90 px-2 py-1 rounded border border-white/20">
                    <FileText className="w-3 h-3 text-[#7C3AED]" /> View Credential
                  </span>
                </div>
              </a>
            </div>
          )}

          {/* Details */}
          <div className={previewImg ? "sm:col-span-8 lg:col-span-9 space-y-3" : "sm:col-span-12 space-y-3"}>
            <div className="inline-block px-2.5 py-0.5 rounded bg-[#EDE9FE] text-[#7C3AED] text-[11px] font-mono font-semibold border border-[#7C3AED]/30">
              {certType}
            </div>

            <h3 className="text-xl font-extrabold text-[#172033] group-hover:text-[#7C3AED] transition-colors leading-tight">
              {certTitle}
            </h3>

            <p className="text-sm text-[#475569] leading-relaxed font-sans">
              {certDesc}
            </p>

            {/* Skills Tags */}
            {skills && skills.length > 0 && (
              <div className="pt-1 flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-mono text-[#475569] font-bold">Skills:</span>
                {skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 rounded-lg text-xs font-mono font-semibold bg-[#F1F5F9] text-[#0891B2] border border-[#CBD5E1]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer Action Bar */}
      <div className="pt-4 border-t border-[#CBD5E1] flex flex-wrap items-center justify-between gap-4 mt-auto">
        <div className="text-[11px] font-mono text-[#475569] flex items-center gap-1.5">
          <span>Credential ID:</span>
          <span className="text-[#172033] font-bold">{credentialId || '68d6c209e3024180422f4366'}</span>
        </div>

        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-xs shadow-xs transition-all duration-200 active:scale-[0.98]"
        >
          <FileText className="w-4 h-4" />
          <span>View Certificate</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

    </div>
  );
}
