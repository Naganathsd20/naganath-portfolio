import React from 'react';
import { cn } from '../../utils/cn';

export function Badge({ children, variant = 'purple', className, pulse = false }) {
  const base = "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-mono font-medium transition-all";
  
  const variants = {
    default: "bg-slate-100 text-slate-700 border border-slate-200",
    purple: "bg-purple-50 text-purple-700 border border-purple-200/60",
    blue: "bg-blue-50 text-blue-700 border border-blue-200/60",
    cyan: "bg-indigo-50 text-indigo-700 border border-indigo-200/60",
    emerald: "bg-emerald-50 text-emerald-700 border border-emerald-200/60",
    success: "bg-emerald-50 text-emerald-700 border border-emerald-200/60",
    danger: "bg-rose-50 text-rose-700 border border-rose-200/60",
    warning: "bg-amber-50 text-amber-700 border border-amber-200/60",
    outline: "border border-slate-200 text-slate-600 bg-white"
  };

  return (
    <span className={cn(base, variants[variant] || variants.purple, className)}>
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
      )}
      {children}
    </span>
  );
}
