import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import { personalInfo } from '../../data/portfolioData';
import { Badge } from '../common/Badge';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0B1120] border-t border-[#334155] text-[#94A3B8] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#334155]">
          
          {/* Col 1: Brand & Student Bio */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#334155] flex-shrink-0 bg-[#111827]">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <span className="font-bold text-xl text-[#F8FAFC] tracking-tight">
                Naganath S Dharwadkar
              </span>
            </div>
            <p className="text-sm text-[#CBD5E1] max-w-md leading-relaxed">
              Final Year Computer Science & Engineering Student passionate about MERN stack development, Java, and building clean web applications.
            </p>
            <div className="pt-2">
              <Badge variant="success" pulse>
                {personalInfo.availability}
              </Badge>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-[#F8FAFC] uppercase tracking-wider font-mono">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-[#CBD5E1]">
              <li>
                <Link to="/" className="hover:text-[#22D3EE] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#22D3EE] transition-colors">About</Link>
              </li>
              <li>
                <Link to="/skills" className="hover:text-[#22D3EE] transition-colors">Technical Skills</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-[#22D3EE] transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/experience" className="hover:text-[#22D3EE] transition-colors">Experience</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Social & Contact Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-[#F8FAFC] uppercase tracking-wider font-mono">
              Connect
            </h4>
            <ul className="space-y-2 text-sm text-[#CBD5E1]">
              <li>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#22D3EE] transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-[#22D3EE]" /> GitHub <ArrowUpRight className="w-3 h-3 text-[#94A3B8]" />
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#22D3EE] transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#22D3EE]" /> LinkedIn <ArrowUpRight className="w-3 h-3 text-[#94A3B8]" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center gap-1.5 hover:text-[#22D3EE] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#22D3EE]" /> Email Me <ArrowUpRight className="w-3 h-3 text-[#94A3B8]" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#94A3B8] gap-4 font-mono">
          <p>© {currentYear} Naganath S Dharwadkar. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Built with React + Vite + Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

