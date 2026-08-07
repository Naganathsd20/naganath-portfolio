import React from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { SkillCard } from '../components/ui/SkillCard';
import { skills } from '../data/portfolioData';

export function Skills() {
  const skillCategories = [
    { title: 'Programming Languages', items: skills.programmingLanguages || [] },
    { title: 'Frontend', items: skills.frontend || [] },
    { title: 'Backend', items: skills.backend || [] },
    { title: 'Database', items: skills.database || [] },
    { title: 'Tools & Platforms', items: skills.toolsAndPlatforms || [] },
    { title: 'Currently Learning', items: skills.currentlyLearning || [] }
  ];

  return (
    <PageLayout title="Skills — Naganath S Dharwadkar">
      <div className="min-h-screen bg-[#0B1120] text-[#F8FAFC]">
        
        {/* Header Section */}
        <section className="pt-12 pb-8 sm:pt-16 sm:pb-12 border-b border-[#334155]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#FFFFFF]">
              Skills
            </h1>
            <p className="mt-3 text-[18px] text-[#E2E8F0] font-medium leading-[1.8] tracking-[0.2px] max-w-2xl">
              Technologies and tools I use for building modern web applications.
            </p>
          </div>
        </section>

        {/* Category Sections */}
        <section className="py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {skillCategories.map((category, idx) => (
              <div key={idx} className="bg-[#243447] border border-[#334155] rounded-[18px] p-6 sm:p-8 shadow-xl space-y-6">
                <h2 className="text-xl sm:text-2xl font-bold text-[#FFFFFF] tracking-tight border-b border-[#334155] pb-3">
                  {category.title}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.items.map((skill, itemIdx) => (
                    <SkillCard key={itemIdx} skill={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </PageLayout>
  );
}
