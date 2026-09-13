import React from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { AchievementCard } from '../components/ui/AchievementCard';
import { achievementsAndCertifications } from '../data/portfolioData';

export function Achievements() {
  return (
    <PageLayout title="Achievements & Certifications">
      <div className="space-y-6 pb-12">
        
        {/* Main Heading */}
        <div className="border-b border-[#CBD5E1] pb-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#172033] tracking-tight">
            Achievements & Certifications
          </h1>
        </div>

        {/* Single Combined Collection Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievementsAndCertifications.map((item, idx) => (
            <AchievementCard key={item.id || idx} item={item} />
          ))}
        </div>

      </div>
    </PageLayout>
  );
}
