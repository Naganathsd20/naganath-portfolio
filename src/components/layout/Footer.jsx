import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import { personalInfo } from '../../data/portfolioData';
import { Badge } from '../common/Badge';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#273449] border-t border-[#334155] text-[#94A3B8] pt-12 pb-8 mt-auto font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-[#334155]">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#7C3AED] flex items-center justify-center text-white font-bold text-sm shadow-xs">
                ND
              </div>
              <span className="font-extrabold text-base text-white tracking-tight font-sans">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#94A3B8] max-w-md leading-relaxed font-sans">
              Final-Year Computer Science & Engineering student at Sahyadri College of Engineering & Management. Focused on Java, Data Structures & Algorithms, Full-Stack Web Development, and AI fundamentals.
            </p>
            <div className="pt-1">
              <Badge variant="emerald" pulse className="text-xs font-mono font-semibold">
                {personalInfo.availability || "Open to Software Developer Roles"}
              </Badge>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-sans text-[#94A3B8]">
              <li>
                <Link to="/about" className="hover:text-purple-300 transition-colors">About Me</Link>
              </li>
              <li>
                <Link to="/skills" className="hover:text-purple-300 transition-colors">Skills & Technologies</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-purple-300 transition-colors">Featured Projects</Link>
              </li>
              <li>
                <Link to="/experience" className="hover:text-purple-300 transition-colors">Internship Experience</Link>
              </li>
              <li>
                <Link to="/achievements" className="hover:text-purple-300 transition-colors">Achievements & Certifications</Link>
              </li>
              <li>
                <Link to="/resume" className="hover:text-purple-300 transition-colors">Official Resume</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-purple-300 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Connect
            </h4>
            <ul className="space-y-2 text-xs font-mono text-[#94A3B8]">
              <li>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-purple-300 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-[#0891B2] flex-shrink-0" /> GitHub Profile <ArrowUpRight className="w-3 h-3 text-[#94A3B8] flex-shrink-0" />
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-purple-300 transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" /> LinkedIn Profile <ArrowUpRight className="w-3 h-3 text-[#94A3B8] flex-shrink-0" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center gap-1.5 hover:text-purple-300 transition-colors break-all"
                >
                  <Mail className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" /> <span className="break-all">{personalInfo.email}</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#94A3B8] gap-3 font-mono">
          <p>© {currentYear} Naganath S Dharwadkar. All rights reserved.</p>
          <span className="text-[#94A3B8]/80">Software Developer Portfolio</span>
        </div>
      </div>
    </footer>
  );
}
