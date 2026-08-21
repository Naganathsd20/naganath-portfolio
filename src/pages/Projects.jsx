import React, { useState } from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { ProjectCard } from '../components/ui/ProjectCard';
import { FolderGit2, Filter, Sparkles, ExternalLink } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { GithubIcon } from '../components/common/Icons';

export function Projects() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'AI', 'Full Stack', 'Frontend'];

  const filteredProjects = projects.filter((p) => {
    if (filter === 'All') return true;
    if (filter === 'AI') return p.category?.toLowerCase().includes('ai') || p.techStack?.some(t => t.toLowerCase().includes('vapi') || t.toLowerCase().includes('ai'));
    if (filter === 'Full Stack') return p.category?.toLowerCase().includes('full stack') || p.category?.toLowerCase().includes('mern');
    if (filter === 'Frontend') return p.category?.toLowerCase().includes('frontend') || p.category?.toLowerCase().includes('business');
    return true;
  });

  const spotlightProject = projects.find(p => p.id === 'udyog-mitra') || projects[0];

  return (
    <PageLayout title="Projects Showcase">
      <div className="space-y-8 pb-12">
        
        {/* Header Section */}
        <div className="border-b border-[#CBD5E1] pb-5 space-y-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#7C3AED] mb-1">
              <FolderGit2 className="w-4 h-4" /> Portfolio Showcase
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#172033] tracking-tight">
              Projects Showcase
            </h1>
            <p className="mt-1 text-sm text-[#475569] font-mono">
              Full-stack MERN, AI-powered applications, and business web portals built with modern web technologies.
            </p>
          </div>

          {/* Category Filter Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pt-2">
            <span className="text-xs font-mono font-semibold text-[#475569] flex items-center gap-1 mr-1 flex-shrink-0">
              <Filter className="w-3.5 h-3.5" /> Filter:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all duration-200 flex-shrink-0 ${
                  filter === cat
                    ? 'bg-[#7C3AED] text-white shadow-2xs'
                    : 'bg-white text-[#172033] hover:bg-[#F1F5F9] border border-[#CBD5E1]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Spotlight Banner (#273449 dark contrast bg) */}
        {spotlightProject && (
          <div className="rounded-2xl bg-[#273449] text-white p-6 sm:p-8 border border-[#334155] shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#7C3AED]/15 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#7C3AED]/30 text-purple-200 border border-[#7C3AED]/50 text-xs font-mono font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-purple-300" /> Featured Platform Spotlight
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                  {spotlightProject.name}
                </h2>

                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  {spotlightProject.tagline || spotlightProject.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {spotlightProject.techStack.slice(0, 6).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono font-semibold bg-slate-800 text-[#22D3EE] border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  {spotlightProject.liveDemo && (
                    <a
                      href={spotlightProject.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-xs font-bold transition-all shadow-xs"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Portal
                    </a>
                  )}

                  {spotlightProject.github && (
                    <a
                      href={spotlightProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 text-xs font-mono font-medium transition-all"
                    >
                      <GithubIcon className="w-4 h-4 text-[#22D3EE]" /> Source Code
                    </a>
                  )}
                </div>
              </div>

              {spotlightProject.image && (
                <div className="lg:col-span-5">
                  <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-700 bg-slate-900 shadow-md">
                    <img
                      src={spotlightProject.image}
                      alt={spotlightProject.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* All Projects Grid */}
        <div className="space-y-4">
          <h2 className="text-xl font-extrabold text-[#172033] tracking-tight font-sans">
            All Projects ({filteredProjects.length})
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

      </div>
    </PageLayout>
  );
}
