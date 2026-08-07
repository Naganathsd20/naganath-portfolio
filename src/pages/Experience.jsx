import React from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { ExperienceCard } from '../components/ui/ExperienceCard';
import { experience } from '../data/portfolioData';

export function Experience() {
  return (
    <PageLayout title="Experience — Naganath S Dharwadkar">
      <div className="min-h-screen bg-[#0B1120] text-[#F8FAFC]">
        
        {/* Header Section */}
        <section className="pt-12 pb-8 sm:pt-16 sm:pb-12 border-b border-[#334155]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#FFFFFF]">
              Experience
            </h1>
            <p className="mt-3 text-[18px] text-[#E2E8F0] font-medium leading-[1.8] tracking-[0.2px] max-w-3xl">
              A summary of my internship experience, practical work, and the technical skills I developed while working on real-world projects.
            </p>
          </div>
        </section>

        {/* Internship Experience Cards Section */}
        <section className="py-12 sm:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            {experience.map((exp, idx) => (
              <ExperienceCard key={idx} exp={exp} />
            ))}
          </div>
        </section>

      </div>
    </PageLayout>
  );
}
