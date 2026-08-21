import React from 'react';
import { cn } from '../../utils/cn';

export function Badge({ children, variant = 'purple', className, pulse = false }) {
  const base = "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-mono font-semibold transition-all";
  
  const variants = {
    default: "bg-[#F1F5F9] text-[#172033] border border-[#CBD5E1]",
    purple: "bg-[#EDE9FE] text-[#7C3AED] border border-[#7C3AED]/30",
    blue: "bg-blue-50 text-blue-700 border border-blue-200",
    cyan: "bg-cyan-50 text-[#0891B2] border border-[#0891B2]/30",
    emerald: "bg-emerald-50 text-[#059669] border border-[#059669]/30",
    success: "bg-emerald-50 text-[#059669] border border-[#059669]/30",
    danger: "bg-rose-50 text-rose-700 border border-rose-200",
    warning: "bg-amber-50 text-amber-800 border border-amber-200",
    outline: "border border-[#CBD5E1] text-[#475569] bg-[#F1F5F9]"
  };

  return (
    <span className={cn(base, variants[variant] || variants.purple, className)}>
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#059669] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#059669]"></span>
        </span>
      )}
      {children}
    </span>
  );
}
