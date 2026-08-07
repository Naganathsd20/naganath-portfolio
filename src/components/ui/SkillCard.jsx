import React from 'react';
import { Card } from '../common/Card';
import { TechIcon } from '../common/TechLogos';

export function SkillCard({ skill }) {
  const { name, desc } = skill;

  return (
    <Card className="p-4 sm:p-5 flex items-center gap-4 hover:border-[#22D3EE]/50 transition-all duration-300 bg-[#1E293B] group rounded-2xl">
      {/* Official Logo / Icon (LEFT SIDE) */}
      <div className="w-11 h-11 rounded-xl bg-[#111827] border border-[#334155] flex items-center justify-center flex-shrink-0 group-hover:border-[#22D3EE]/40 transition-colors">
        <TechIcon name={name} className="w-5 h-5 text-[#22D3EE]" />
      </div>

      {/* Skill Name & Optional Description */}
      <div className="flex-1 min-w-0">
        <h4 className="text-base font-bold text-[#F8FAFC] tracking-tight group-hover:text-[#22D3EE] transition-colors truncate">
          {name}
        </h4>
        {desc && (
          <p className="text-xs text-[#94A3B8] font-sans mt-0.5 truncate">
            {desc}
          </p>
        )}
      </div>
    </Card>
  );
}
