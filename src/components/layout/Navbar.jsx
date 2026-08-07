import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Download, Sparkles } from 'lucide-react';
import { Button } from '../common/Button';
import { personalInfo } from '../../data/portfolioData';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Experience', path: '/experience' },
  { name: 'Certifications', path: '/achievements' },
  { name: 'Resume', path: '/resume' },
  { name: 'Contact', path: '/contact' }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B1120]/85 backdrop-blur-md border-b border-[#334155] shadow-md'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo with Professional Profile Photo */}
          <NavLink
            to="/"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#334155] group-hover:border-[#22D3EE] transition-colors flex-shrink-0 bg-[#111827]">
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg text-[#F8FAFC] tracking-tight font-sans">
                Naganath S Dharwadkar
              </span>
              <span className="text-[10px] font-mono text-[#22D3EE] font-medium">Final Year CS Student</span>
            </div>
          </NavLink>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#111827] p-1.5 rounded-full border border-[#334155]">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-[#22D3EE] text-[#0B1120] font-semibold shadow-md shadow-[#22D3EE]/20'
                      : 'text-[#94A3B8] hover:text-[#F8FAFC]'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-3">
            {/* Contact CTA button */}
            <div className="hidden sm:block">
              <Button
                variant="primary"
                size="sm"
                href="/contact"
                icon={Sparkles}
              >
                Contact Me
              </Button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl border border-[#334155] text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#111827]"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-5 h-5 text-[#22D3EE]" /> : <Menu className="w-5 h-5 text-[#22D3EE]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-[#0B1120]/95 border-b border-[#334155] backdrop-blur-xl px-4 pt-3 pb-6 shadow-2xl transition-all">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#22D3EE]/10 text-[#22D3EE] border border-[#22D3EE]/20 font-semibold'
                      : 'text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#111827]'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <div className="pt-4 mt-2 border-t border-[#334155] flex flex-col gap-2">
              <Button
                variant="primary"
                size="md"
                href="/contact"
                className="w-full"
                icon={Sparkles}
              >
                Contact Me
              </Button>
              <Button
                variant="outline"
                size="md"
                href={personalInfo.resumeUrl}
                target="_blank"
                className="w-full"
                icon={Download}
              >
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

