import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, Code2, Sparkles } from 'lucide-react';
import { GithubIcon } from '../common/Icons';
import { Badge } from '../common/Badge';

export function ProjectCard({ project }) {
  const { id, name, category, description, image, techStack, liveDemo, github, featured } = project;
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div className={`flex flex-col h-full bg-white border ${
      featured ? 'border-[#7C3AED]/70 shadow-md' : 'border-[#CBD5E1] shadow-2xs'
    } hover:border-[#7C3AED] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 rounded-2xl overflow-hidden group`}>
      
      {/* Thumbnail Image Container */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
        {imgFailed ? (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 text-center space-y-2 text-white">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-purple-300">
              <Code2 className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold tracking-tight">{name}</h4>
          </div>
        ) : (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
            onError={() => setImgFailed(true)}
          />
        )}

        {/* Overlay Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
          {category && (
            <Badge variant="purple" className="shadow-xs bg-white/95 backdrop-blur-xs text-[#7C3AED] font-bold border-[#CBD5E1]">
              {category}
            </Badge>
          )}

          {featured && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-mono font-bold bg-[#7C3AED] text-white shadow-xs">
              <Sparkles className="w-3 h-3" /> Featured
            </span>
          )}
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow space-y-4">
        
        {/* Project Title */}
        <h3 className="text-xl font-extrabold text-[#172033] tracking-tight group-hover:text-[#7C3AED] transition-colors">
          {name}
        </h3>

        {/* Description */}
        <p className="text-sm text-[#475569] leading-relaxed font-sans line-clamp-2">
          {description}
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 pt-1 mt-auto">
          {techStack.slice(0, 5).map((tech, idx) => (
            <Badge key={idx} variant="cyan" className="text-[11px] font-mono py-0.5 px-2">
              {tech}
            </Badge>
          ))}
          {techStack.length > 5 && (
            <Badge variant="outline" className="text-[10px] font-mono py-0.5 px-1.5">
              +{techStack.length - 5}
            </Badge>
          )}
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-[#CBD5E1] flex flex-wrap items-center justify-between gap-2 mt-auto">
          <div className="flex items-center gap-2">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F1F5F9] hover:bg-white border border-[#CBD5E1] hover:border-[#7C3AED] text-xs font-mono font-medium text-[#172033] transition-colors"
                title="GitHub Repository"
              >
                <GithubIcon className="w-3.5 h-3.5 text-[#172033]" /> GitHub
              </a>
            )}
            {liveDemo && (
              <a
                href={liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#EDE9FE] hover:bg-purple-100 border border-[#7C3AED]/30 text-xs font-mono font-bold text-[#7C3AED] transition-colors"
                title="Live Demo"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#7C3AED]" /> Demo
              </a>
            )}
          </div>

          <Link
            to={`/projects/${id}`}
            className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-xs font-bold shadow-2xs transition-colors ml-auto"
          >
            Details <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>

    </div>
  );
}
