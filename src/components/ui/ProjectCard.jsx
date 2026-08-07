import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { GithubIcon } from '../common/Icons';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';

export function ProjectCard({ project }) {
  const { id, name, description, image, techStack, liveDemo, github } = project;

  return (
    <Card className="flex flex-col h-full bg-[#1E293B] border-[#334155] hover:border-[#22D3EE]/40 transition-all duration-300 rounded-2xl overflow-hidden shadow-xl group">
      
      {/* Single Clean Project Thumbnail Image */}
      <div className="relative aspect-video w-full overflow-hidden bg-[#111827]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/70 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Card Content Body */}
      <div className="p-6 flex flex-col flex-grow space-y-4">
        
        {/* Project Name */}
        <h3 className="text-xl font-bold text-[#F8FAFC] tracking-tight group-hover:text-[#22D3EE] transition-colors">
          {name}
        </h3>

        {/* One-Line Description */}
        <p className="text-sm text-[#94A3B8] leading-relaxed font-sans line-clamp-2">
          {description}
        </p>

        {/* Technology Stack Badges */}
        <div className="flex flex-wrap gap-1.5 pt-1 mt-auto">
          {techStack.map((tech, idx) => (
            <Badge key={idx} variant="cyan" className="text-[11px] font-mono font-medium py-0.5 px-2">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Action Buttons (GitHub, Live Demo, View Details) */}
        <div className="pt-4 border-t border-[#334155] flex flex-wrap items-center justify-between gap-2 mt-auto">
          <div className="flex items-center gap-2">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#111827] border border-[#334155] text-xs font-mono text-[#F8FAFC] hover:text-[#22D3EE] hover:border-[#22D3EE] transition-colors"
                title="GitHub Repository"
              >
                <GithubIcon className="w-3.5 h-3.5 text-[#22D3EE]" /> GitHub
              </a>
            )}
            {liveDemo && (
              <a
                href={liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#22D3EE]/10 border border-[#22D3EE]/30 text-xs font-mono text-[#22D3EE] hover:bg-[#22D3EE]/20 transition-colors"
                title="Live Demo"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#22D3EE]" /> Live Demo
              </a>
            )}
          </div>

          <Link
            to={`/projects/${id}`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#22D3EE] text-[#0B1120] text-xs font-semibold hover:bg-[#06B6D4] transition-colors ml-auto"
          >
            View Details <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>

    </Card>
  );
}
