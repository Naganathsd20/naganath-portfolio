import React from 'react';
import { cn } from '../../utils/cn';

export function Card({ children, className, hoverEffect = true, ...props }) {
  return (
    <div
      className={cn(
        "rounded-[18px] border bg-[#243447] border-[#334155] p-6 shadow-md transition-all duration-300",
        hoverEffect && "hover:border-[#22D3EE]/40 hover:shadow-lg hover:-translate-y-0.5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

