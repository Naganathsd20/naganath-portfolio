import React from 'react';
import { Badge } from './Badge';

export function SectionHeading({ badge, title, highlight, description, align = 'center' }) {
  const alignmentClass = align === 'left' ? 'text-left' : 'text-center mx-auto';

  return (
    <div className={`max-w-3xl mb-12 sm:mb-16 ${alignmentClass}`}>
      {badge && (
        <div className={`mb-4 flex ${align === 'left' ? 'justify-start' : 'justify-center'}`}>
          <Badge variant="cyan">{badge}</Badge>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F8FAFC] leading-tight">
        {title}{' '}
        {highlight && <span className="text-[#22D3EE]">{highlight}</span>}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

