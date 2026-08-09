import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, Code2 } from 'lucide-react';
import { GithubIcon } from '../common/Icons';
import { Badge } from '../common/Badge';

export function ProjectCard({ project }) {
  const { id, name, category, description, image, techStack, liveDemo, github } = project;
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div className="flex flex-col h-full bg-white border border-slate-200/80 hover:border-purple-300/90 transition-all duration-300 rounded-2xl overflow-hidden shadow-xs hover:shadow-md group">
      
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
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            onError={() => setImgFailed(true)}
          />
        )}

        {/* Category Overlay Badge */}
        {category && (
          <div className="absolute top-3 left-3 z-10">
            <Badge variant="purple" className="shadow-xs bg-white/95 backdrop-blur-xs text-purple-700 font-semibold border-purple-200">
              {category}
            </Badge>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow space-y-4">
        
        {/* Project Title */}
        <h3 className="text-lg font-extrabold text-slate-900 tracking-tight group-hover:text-purple-600 transition-colors">
          {name}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans line-clamp-2">
          {description}
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 pt-1 mt-auto">
          {techStack.slice(0, 5).map((tech, idx) => (
            <Badge key={idx} variant="blue" className="text-[11px] font-mono py-0.5 px-2">
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
        <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 mt-auto">
          <div className="flex items-center gap-2">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-mono font-medium text-slate-700 hover:text-slate-900 transition-colors"
                title="GitHub Repository"
              >
                <GithubIcon className="w-3.5 h-3.5" /> GitHub
              </a>
            )}
            {liveDemo && (
              <a
                href={liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-purple-50 hover:bg-purple-100 border border-purple-200/80 text-xs font-mono font-medium text-purple-700 transition-colors"
                title="Live Demo"
              >
                <ExternalLink className="w-3.5 h-3.5 text-purple-600" /> Demo
              </a>
            )}
          </div>

          <Link
            to={`/projects/${id}`}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-xs font-semibold shadow-2xs transition-colors ml-auto"
          >
            Details <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>

    </div>
  );
}
