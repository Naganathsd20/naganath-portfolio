import React from 'react';
import { Card } from '../common/Card';
import { TechIcon } from '../common/TechLogos';

export function SkillCard({ skill }) {
  const { name, desc } = skill;

  return (
    <div className="p-4 rounded-xl border border-slate-200/80 bg-white hover:border-purple-300 hover:shadow-xs transition-all duration-200 flex items-center gap-3.5 group">
      {/* Official Logo / Icon */}
      <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-100 transition-colors">
        <TechIcon name={name} className="w-5 h-5 text-purple-700" />
      </div>

      {/* Skill Name & Description */}
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-bold text-slate-900 tracking-tight group-hover:text-purple-700 transition-colors truncate">
          {name}
        </h4>
        {desc && (
          <p className="text-xs text-slate-500 font-sans mt-0.5 truncate">
            {desc}
          </p>
        )}
      </div>
    </div>
  );
}
