import React from 'react';
import { Badge } from '../common/Badge';

export function AchievementCard({ item }) {
  if (!item) return null;

  const {
    title,
    name,
    organization,
    issuer,
    date,
    issueDate,
    badge,
    type,
    category,
    certificateImage,
    image,
    certificateUrl,
    verificationUrl,
    certificatePdf
  } = item;

  const cardTitle = title || name;
  const cardOrg = organization || issuer;
  const cardDate = date || issueDate || null;
  const cardBadge = badge || type || category || 'Credential';
  const cardImg = certificateImage || image;
  const cardUrl = certificateUrl || verificationUrl || certificatePdf || cardImg;

  return (
    <div className="rounded-2xl border border-[#CBD5E1] bg-white p-4 flex flex-col justify-between hover:border-[#7C3AED]/70 shadow-2xs hover:shadow-xs transition-all duration-200 text-[#172033] h-full">
      
      <div className="space-y-2.5">
        {/* 1. Small type badge & Date */}
        <div className="flex items-center justify-between gap-2">
          <Badge variant="purple" className="text-[11px] font-mono font-semibold py-0.5 px-2">
            {cardBadge}
          </Badge>
          {cardDate && (
            <span className="text-[11px] font-mono font-semibold text-[#475569]">
              {cardDate}
            </span>
          )}
        </div>

        {/* 2. Title & 3. Conducted/Organized by */}
        <div className="space-y-0.5">
          <h3 className="text-sm sm:text-base font-extrabold text-[#172033] leading-snug tracking-tight">
            {cardTitle}
          </h3>
          {cardOrg && (
            <p className="text-xs font-mono font-bold text-[#7C3AED]">
              {cardOrg}
            </p>
          )}
        </div>

        {/* 4. Small Certificate Image Preview Thumbnail */}
        {cardImg && (
          <div className="pt-1 flex justify-center">
            <a
              href={cardUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative w-full max-w-[220px] rounded-xl overflow-hidden border border-[#CBD5E1] bg-[#F8FAFC] hover:border-[#7C3AED] transition-all duration-200 aspect-[16/10] group p-1"
              title="Click to view full certificate"
            >
              <img
                src={cardImg}
                alt={cardTitle}
                className="w-full h-full object-contain rounded-lg transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </a>
          </div>
        )}
      </div>

      {/* 5. Small View Certificate Button */}
      {cardUrl && (
        <div className="pt-3">
          <a
            href={cardUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 w-full py-1.5 px-3 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-xs shadow-2xs transition-colors"
          >
            <span>View Certificate ↗</span>
          </a>
        </div>
      )}

    </div>
  );
}
