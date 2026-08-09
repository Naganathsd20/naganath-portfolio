import React, { useState } from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { ProjectCard } from '../components/ui/ProjectCard';
import { FolderGit2, Filter } from 'lucide-react';
import { projects } from '../data/portfolioData';

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

  return (
    <PageLayout title="Projects Showcase">
      <div className="space-y-8 pb-12">
        
        {/* Header & Filter Tabs */}
        <div className="border-b border-slate-200/80 pb-5 space-y-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-purple-600 mb-1">
              <FolderGit2 className="w-4 h-4" /> Portfolio Showcase
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Projects Dashboard
            </h1>
            <p className="mt-1 text-sm text-slate-600 font-mono">
              A curated collection of my full-stack MERN, AI-powered platforms, and web applications.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pt-2">
            <span className="text-xs font-mono font-semibold text-slate-400 flex items-center gap-1 mr-1">
              <Filter className="w-3.5 h-3.5" /> Filter:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all duration-200 ${
                  filter === cat
                    ? 'bg-purple-600 text-white shadow-2xs'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </PageLayout>
  );
}
