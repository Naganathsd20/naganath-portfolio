import React from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { ExperienceCard } from '../components/ui/ExperienceCard';
import { Briefcase } from 'lucide-react';
import { experience } from '../data/portfolioData';

export function Experience() {
  return (
    <PageLayout title="Experience Dashboard">
      <div className="space-y-8 pb-12">
        
        {/* Header Section */}
        <div className="border-b border-[#CBD5E1] pb-5">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#7C3AED] mb-1">
            <Briefcase className="w-4 h-4 text-[#7C3AED]" /> Internship Timeline & Experience
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#172033] tracking-tight">
            Experience Timeline
          </h1>
          <p className="mt-1 text-sm text-[#475569] font-mono">
            Practical software development internship work, MERN stack development, and AI & Machine Learning training.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6">
          {experience.map((exp, idx) => (
            <ExperienceCard key={idx} exp={exp} />
          ))}
        </div>

      </div>
    </PageLayout>
  );
}
