import React from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { ProjectCard } from '../components/ui/ProjectCard';
import { projects } from '../data/portfolioData';

export function Projects() {
  return (
    <PageLayout title="Featured Projects — Naganath S Dharwadkar">
      <div className="min-h-screen bg-[#0B1120] text-[#F8FAFC]">
        
        {/* Title & Subtitle Section */}
        <section className="pt-12 pb-8 sm:pt-16 sm:pb-12 border-b border-[#334155]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#FFFFFF]">
              Featured <span className="text-[#FFFFFF]">Projects</span>
            </h1>
            <p className="mt-3 text-[18px] text-[#E2E8F0] font-medium leading-[1.8] tracking-[0.2px] max-w-3xl">
              A collection of projects that showcase my learning journey, technical skills, and hands-on experience in building modern web applications using Java, MERN Stack, and related technologies.
            </p>
          </div>
        </section>

        {/* Project Cards Section (Immediately Below Header) */}
        <section className="py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

      </div>
    </PageLayout>
  );
}
