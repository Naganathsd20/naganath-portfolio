import React from 'react';
import { cn } from '../../utils/cn';

export function Badge({ children, variant = 'default', className, pulse = false }) {
  const base = "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium transition-all";
  
  const variants = {
    default: "bg-[#1E293B] text-[#CBD5E1] border border-[#334155]",
    purple: "bg-[#22D3EE]/10 text-[#22D3EE] border border-[#22D3EE]/20",
    blue: "bg-[#22D3EE]/10 text-[#22D3EE] border border-[#22D3EE]/20",
    cyan: "bg-[#22D3EE]/10 text-[#22D3EE] border border-[#22D3EE]/20",
    emerald: "bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20",
    success: "bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20",
    danger: "bg-[#EF4444]/10 text-[#EF4444] border border-[#EF4444]/20",
    warning: "bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/20",
    outline: "border border-[#334155] text-[#94A3B8]"
  };

  return (
    <span className={cn(base, variants[variant] || variants.default, className)}>
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
        </span>
      )}
      {children}
    </span>
  );
}

