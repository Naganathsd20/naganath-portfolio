import React from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { SkillCard } from '../components/ui/SkillCard';
import { Card } from '../components/common/Card';
import { Code2, Terminal } from 'lucide-react';
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
    <PageLayout title="Skills Dashboard">
      <div className="space-y-8 pb-12">
        
        {/* Header Section */}
        <div className="border-b border-slate-200/80 pb-5">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-purple-600 mb-1">
            <Terminal className="w-4 h-4" /> Technical Competencies & Stack
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Skills Dashboard
          </h1>
          <p className="mt-1 text-sm text-slate-600 font-mono">
            Verified technologies, frameworks, and developer tools used across my full-stack projects.
          </p>
        </div>

        {/* Category Grid */}
        <div className="space-y-6">
          {skillCategories.map((category, idx) => (
            <Card key={idx} className="p-6 space-y-4">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight border-b border-slate-100 pb-3 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-purple-600" />
                {category.title}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {category.items.map((skill, itemIdx) => (
                  <SkillCard key={itemIdx} skill={skill} />
                ))}
              </div>
            </Card>
          ))}
        </div>

      </div>
    </PageLayout>
  );
}
