import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Download, Menu, X, ChevronRight } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#CBD5E1] shadow-2xs antialiased font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo & Name */}
        <Link to="/about" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#7C3AED] via-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-xs group-hover:scale-105 transition-transform duration-200">
            ND
          </div>
          <div>
            <div className="font-extrabold text-sm sm:text-base text-[#172033] tracking-tight leading-none group-hover:text-[#7C3AED] transition-colors uppercase font-mono">
              {personalInfo.name}
            </div>
            <div className="text-[10px] font-mono text-[#7C3AED] font-bold mt-0.5">
              Software Developer
            </div>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#F1F5F9] border border-[#CBD5E1] p-1 rounded-xl">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path || location.pathname.startsWith(`${link.path}/`);
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold font-sans transition-all duration-200 ${
                  isActive
                    ? 'bg-[#7C3AED] text-white font-bold shadow-2xs'
                    : 'text-[#475569] hover:text-[#172033] hover:bg-white'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-xs font-bold transition-all shadow-xs"
          >
            <Download className="w-3.5 h-3.5" /> Download Resume
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-xl text-[#172033] hover:text-[#7C3AED] hover:bg-[#F1F5F9] transition-colors border border-[#CBD5E1]"
          aria-label="Toggle Navigation Menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileOpen(false)}
          />

          <div className="relative flex-1 w-full max-w-xs bg-white h-full flex flex-col z-10 shadow-2xl border-r border-[#CBD5E1]">
            <div className="p-4 border-b border-[#CBD5E1] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#7C3AED] flex items-center justify-center text-white font-bold text-xs shadow-xs">
                  ND
                </div>
                <div>
                  <div className="font-bold text-xs text-[#172033]">{personalInfo.name}</div>
                  <div className="text-[10px] font-mono text-[#7C3AED]">Software Developer</div>
                </div>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-1 rounded-lg text-[#64748B] hover:bg-[#F1F5F9]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path || location.pathname.startsWith(`${link.path}/`);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-xs font-semibold transition-all ${
                      isActive
                        ? 'bg-[#EDE9FE] text-[#7C3AED] font-bold border border-[#7C3AED]/30'
                        : 'text-[#475569] hover:bg-[#F1F5F9] hover:text-[#172033]'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <ChevronRight className="w-4 h-4 text-[#7C3AED]" />}
                  </Link>
                );
              })}
            </nav>

            <div className="p-4 border-t border-[#CBD5E1] bg-[#F1F5F9]">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-3 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-xs font-bold shadow-xs"
              >
                <Download className="w-4 h-4" /> Download Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
