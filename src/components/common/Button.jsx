import React from 'react';
import { cn } from '../../utils/cn';

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  icon: Icon,
  iconPosition = 'left',
  onClick,
  href,
  target,
  download,
  disabled = false,
  ...props
}) {
  const base = "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/30 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]";

  const sizes = {
    sm: "px-3.5 py-1.5 text-xs gap-1.5",
    md: "px-4.5 py-2 text-sm gap-2",
    lg: "px-6 py-3 text-base gap-2.5"
  };

  const variants = {
    primary: "bg-[#7C3AED] hover:bg-[#6D28D9] text-white shadow-2xs hover:shadow-md hover:-translate-y-0.5",
    secondary: "bg-white hover:bg-slate-50 text-[#172033] border border-[#CBD5E1] hover:border-[#7C3AED] hover:text-[#7C3AED] shadow-2xs",
    outline: "bg-transparent border border-[#CBD5E1] text-[#172033] hover:border-[#7C3AED] hover:text-[#7C3AED]",
    ghost: "bg-transparent hover:bg-[#EDE9FE] text-[#475569] hover:text-[#7C3AED]",
    gradient: "bg-gradient-to-r from-[#7C3AED] via-indigo-600 to-[#0891B2] hover:from-[#6D28D9] hover:to-[#0891B2] text-white shadow-md"
  };

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4" />}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        download={download}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={cn(base, sizes[size], variants[variant], className)}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cn(base, sizes[size], variants[variant], className)}
      {...props}
    >
      {content}
    </button>
  );
}
