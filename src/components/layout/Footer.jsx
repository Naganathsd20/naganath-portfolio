import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import { personalInfo } from '../../data/portfolioData';
import { Badge } from '../common/Badge';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white border-t border-slate-200 text-slate-600 pt-12 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-100">
          
          {/* Col 1: Brand */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xs shadow-xs">
                ND
              </div>
              <span className="font-extrabold text-base text-slate-900 tracking-tight uppercase font-mono">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md leading-relaxed">
              Final Year Computer Science & Engineering Student at Sahyadri College. Building full-stack web applications and AI-powered platforms.
            </p>
            <div className="pt-1">
              <Badge variant="emerald" pulse className="text-xs">
                Open to Software Developer Roles
              </Badge>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono">
              Platform Links
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-600">
              <li>
                <Link to="/about" className="hover:text-purple-600 transition-colors">About Me</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-purple-600 transition-colors">Featured Projects</Link>
              </li>
              <li>
                <Link to="/experience" className="hover:text-purple-600 transition-colors">Internship Experience</Link>
              </li>
              <li>
                <Link to="/achievements" className="hover:text-purple-600 transition-colors">Achievements & Certifications</Link>
              </li>
              <li>
                <Link to="/resume" className="hover:text-purple-600 transition-colors">Official Resume</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-purple-600 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Social & Contact */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono">
              Connect
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-purple-600 transition-colors font-mono"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-purple-600" /> GitHub Profile <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-purple-600 transition-colors font-mono"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-purple-600" /> LinkedIn Profile <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center gap-1.5 hover:text-purple-600 transition-colors font-mono"
                >
                  <Mail className="w-3.5 h-3.5 text-purple-600" /> {personalInfo.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3 font-mono">
          <p>© {currentYear} Naganath S Dharwadkar. All rights reserved.</p>
          <span>Personal Developer Platform</span>
        </div>
      </div>
    </footer>
  );
}
