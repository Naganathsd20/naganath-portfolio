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
  const base = "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-purple-500/30 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]";

  const sizes = {
    sm: "px-3.5 py-1.5 text-xs gap-1.5",
    md: "px-4.5 py-2 text-sm gap-2",
    lg: "px-6 py-3 text-base gap-2.5"
  };

  const variants = {
    primary: "bg-purple-600 hover:bg-purple-700 text-white shadow-sm hover:shadow hover:-translate-y-0.5",
    secondary: "bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 shadow-sm hover:border-purple-300 hover:text-purple-700",
    outline: "bg-transparent border border-slate-300 text-slate-700 hover:border-purple-600 hover:text-purple-600",
    ghost: "bg-transparent hover:bg-purple-50 text-slate-600 hover:text-purple-700",
    gradient: "bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-md hover:shadow-lg"
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
