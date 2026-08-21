import React from 'react';
import { Sparkles } from 'lucide-react';
import { Badge } from '../common/Badge';

export function AchievementCard({ item }) {
  const { title, organization, date, description, badge, impact } = item;

  return (
    <div className="rounded-2xl border border-[#CBD5E1] bg-white p-6 flex flex-col justify-between hover:border-[#7C3AED]/70 shadow-2xs transition-all duration-200 text-[#172033]">
      <div className="space-y-3">
        <div className="flex items-center justify-between border-b border-[#CBD5E1] pb-3">
          <Badge variant="warning" className="text-xs font-mono font-semibold">
            {badge}
          </Badge>
          <span className="text-xs font-mono font-semibold text-[#475569]">{date}</span>
        </div>

        <h3 className="text-lg font-extrabold text-[#172033] leading-snug">{title}</h3>
        
        <p className="text-xs font-mono font-bold text-[#7C3AED]">{organization}</p>

        <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-sans">
          {description}
        </p>
      </div>

      {impact && (
        <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs font-semibold text-amber-900 flex items-center gap-2 mt-4">
          <Sparkles className="w-4 h-4 text-amber-600 flex-shrink-0" />
          <span>{impact}</span>
        </div>
      )}
    </div>
  );
}
