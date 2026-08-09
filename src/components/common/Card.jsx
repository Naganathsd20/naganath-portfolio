import React from 'react';
import { cn } from '../../utils/cn';

export function Card({ children, className, hoverEffect = true, ...props }) {
  return (
    <div
      className={cn(
        "rounded-2xl border bg-white border-slate-200/80 p-6 shadow-sm transition-all duration-300 text-slate-900",
        hoverEffect && "hover:border-purple-300/80 hover:shadow-md hover:-translate-y-0.5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
