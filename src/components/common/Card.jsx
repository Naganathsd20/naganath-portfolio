import React from 'react';
import { cn } from '../../utils/cn';

export function Card({ children, className, hoverEffect = true, elevated = false, ...props }) {
  return (
    <div
      className={cn(
        "rounded-2xl border bg-white border-[#CBD5E1] p-6 shadow-2xs transition-all duration-200 text-[#172033]",
        hoverEffect && "hover:border-[#7C3AED]/70 hover:shadow-md hover:-translate-y-0.5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
