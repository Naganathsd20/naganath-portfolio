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
        <div className="border-b border-slate-200/80 pb-5">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-purple-600 mb-1">
            <Briefcase className="w-4 h-4" /> Internship Timeline & Experience
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Experience Dashboard
          </h1>
          <p className="mt-1 text-sm text-slate-600 font-mono">
            Practical software development internship work, MERN stack experience, and AI & Machine Learning training.
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
