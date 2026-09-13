import React from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { ProjectCard } from '../components/ui/ProjectCard';
import { FolderGit2 } from 'lucide-react';
import { projects } from '../data/portfolioData';

export function Projects() {
  return (
    <PageLayout title="Projects Showcase">
      <div className="space-y-8 pb-12">
        
        {/* Header Section */}
        <div className="border-b border-[#CBD5E1] pb-5">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#7C3AED] mb-1">
            <FolderGit2 className="w-4 h-4" /> Portfolio Showcase
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#172033] tracking-tight">
            Projects Showcase
          </h1>
          <p className="mt-1 text-sm text-[#475569] font-mono">
            Full-stack MERN, AI-powered applications, and business web portals built with modern web technologies.
          </p>
          <p className="mt-1 text-sm text-[#475569] font-sans">
            Projects I built to turn what I’ve learned into real applications, strengthen my problem-solving skills, and grow as a software developer.
          </p>
        </div>

        {/* All Projects Grid */}
        <div className="space-y-4">
          <h2 className="text-xl font-extrabold text-[#172033] tracking-tight font-sans">
            All Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

      </div>
    </PageLayout>
  );
}
