import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  User,
  Code2,
  FolderGit2,
  Briefcase,
  GraduationCap,
  Award,
  Trophy,
  Binary,
  FileText,
  Mail,
  Menu,
  X,
  Download,
  ExternalLink,
  Sparkles,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import { personalInfo } from '../../data/portfolioData';

export function DashboardLayout({ children }) {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: 'Dashboard', path: '/', icon: LayoutDashboard },
    { name: 'About Me', path: '/about', icon: User },
    { name: 'Skills', path: '/skills', icon: Code2 },
    { name: 'Projects', path: '/projects', icon: FolderGit2 },
    { name: 'Experience', path: '/experience', icon: Briefcase },
    { name: 'Education', path: '/education', icon: GraduationCap },
    { name: 'Certifications', path: '/certifications', icon: Award },
    { name: 'Achievements', path: '/achievements', icon: Trophy },
    { name: 'DSA Progress', path: '/dsa', icon: Binary },
    { name: 'Resume', path: '/resume', icon: FileText },
    { name: 'Contact', path: '/contact', icon: Mail },
  ];

  const currentNav = navItems.find((item) =>
    item.path === '/'
      ? location.pathname === '/'
      : location.pathname.startsWith(item.path)
  ) || navItems[0];

  return (
    <div className="min-h-screen bg-[#0B1120] text-[#F8FAFC] flex flex-col md:flex-row antialiased font-sans">
      
      {/* Mobile Top Header */}
      <header className="md:hidden sticky top-0 z-40 bg-[#0B1120]/90 backdrop-blur-md border-b border-[#334155] px-4 py-3 flex items-center justify-between shadow-xs">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#8B5CF6] to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-xs">
            ND
          </div>
          <div>
            <div className="font-bold text-sm text-[#F8FAFC] leading-none">{personalInfo.shortName}</div>
            <div className="text-[10px] font-mono text-purple-600 mt-0.5">Developer OS</div>
          </div>
        </Link>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 rounded-xl text-slate-600 hover:text-purple-600 hover:bg-purple-50 transition-colors border border-slate-200"
          aria-label="Toggle navigation drawer"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </header>

      {/* Desktop Persistent Left Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-slate-200/80 sticky top-0 h-screen overflow-y-auto flex-shrink-0 z-30 shadow-xs">
        
        {/* Brand Header */}
        <div className="p-5 border-b border-slate-100">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-pink-500 flex items-center justify-center text-white font-bold text-base shadow-sm group-hover:scale-105 transition-transform duration-300">
              ND
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="font-bold text-sm text-slate-900 truncate leading-tight group-hover:text-purple-600 transition-colors">
                {personalInfo.name}
              </h2>
              <p className="text-xs text-slate-500 font-mono truncate mt-0.5">
                CS Student • Final Year
              </p>
            </div>
          </Link>

          {/* Status Badge */}
          <div className="mt-3.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60 text-[11px] font-mono font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Open for Opportunities</span>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 p-3 space-y-1">
          <div className="px-3 py-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
            Developer Menu
          </div>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.path === '/'
              ? location.pathname === '/'
              : location.pathname.startsWith(item.path);

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-purple-50 text-purple-700 font-bold border border-purple-200/70 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-transparent'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-purple-600' : 'text-slate-400'}`} />
                <span className="flex-1">{item.name}</span>
                {isActive && <ChevronRight className="w-3.5 h-3.5 text-purple-500" />}
              </Link>
            );
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50/50 space-y-3">
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2 px-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-semibold transition-all shadow-xs hover:shadow-sm"
          >
            <Download className="w-3.5 h-3.5" /> Download Resume
          </a>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-2 pt-1">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-purple-600 hover:border-purple-200 transition-colors shadow-2xs"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4 text-slate-700" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-purple-600 hover:border-purple-200 transition-colors shadow-2xs"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4 text-purple-600" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-purple-600 hover:border-purple-200 transition-colors shadow-2xs"
              title="Send Email"
            >
              <Mail className="w-4 h-4 text-pink-600" />
            </a>
          </div>
        </div>
      </aside>

      {/* Mobile Navigation Overlay Drawer */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileOpen(false)}
          />

          {/* Slide-out Drawer */}
          <div className="relative flex-1 w-full max-w-xs bg-white h-full flex flex-col z-10 shadow-2xl">
            <div className="p-4 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center text-white font-bold text-sm shadow-xs">
                  ND
                </div>
                <div>
                  <div className="font-bold text-sm text-slate-900">{personalInfo.name}</div>
                  <div className="text-[11px] font-mono text-purple-600">Developer OS Navigation</div>
                </div>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = item.path === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(item.path);

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-3 px-3.5 py-3 rounded-xl text-xs font-semibold transition-all ${
                      isActive
                        ? 'bg-purple-50 text-purple-700 font-bold border border-purple-200'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-purple-600' : 'text-slate-400'}`} />
                    <span className="flex-1">{item.name}</span>
                    {isActive && <ChevronRight className="w-4 h-4 text-purple-600" />}
                  </Link>
                );
              })}
            </nav>

            <div className="p-4 border-t border-slate-200 bg-slate-50 space-y-2">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-3 rounded-xl bg-purple-600 text-white text-xs font-semibold shadow-xs"
              >
                <Download className="w-4 h-4" /> Download Resume
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Main Developer OS Workspace Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-x-hidden">
        
        {/* Desktop Top Workspace Bar */}
        <header className="hidden md:flex items-center justify-between px-8 py-4 bg-white/80 backdrop-blur-md border-b border-slate-200/80 sticky top-0 z-20 shadow-2xs">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
            <span className="font-semibold text-slate-900">{personalInfo.shortName}'s Portfolio</span>
            <span className="text-slate-300">/</span>
            <span className="text-purple-700 font-bold bg-purple-50 border border-purple-200/60 px-2 py-0.5 rounded-md">
              {currentNav.name}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-mono text-slate-600">
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              <span>IST (UTC+5:30) • Dharwad</span>
            </div>

            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 hover:border-purple-300 text-xs font-semibold text-slate-700 hover:text-purple-700 transition-all shadow-2xs"
            >
              <Download className="w-3.5 h-3.5 text-purple-600" /> Resume
            </a>
          </div>
        </header>

        {/* Workspace Body */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>

    </div>
  );
}
