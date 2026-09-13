import React from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { ExperienceCard } from '../components/ui/ExperienceCard';
import { experience } from '../data/portfolioData';

export function Experience() {
  return (
    <PageLayout title="Experience Dashboard">
      <div className="space-y-8 pb-12">
        
        {/* Header Section */}
        <div className="border-b border-[#CBD5E1] pb-5">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#172033] tracking-tight">
            Experience
          </h1>
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
