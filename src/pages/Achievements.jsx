import React from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { Badge } from '../components/common/Badge';
import { AchievementCard } from '../components/ui/AchievementCard';
import { CertificationCard } from '../components/ui/CertificationCard';
import { Award, Trophy } from 'lucide-react';
import { achievements, certifications } from '../data/portfolioData';

export function Achievements() {
  return (
    <PageLayout title="Achievements & Certifications">
      <div className="space-y-10 pb-12">
        
        {/* Header */}
        <div className="border-b border-[#CBD5E1] pb-5">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#7C3AED] mb-1">
            <Trophy className="w-4 h-4 text-[#7C3AED]" /> Honors & Credentials
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#172033] tracking-tight">
            Achievements & Certifications
          </h1>
          <p className="mt-1 text-sm text-[#475569] font-mono">
            Recognized hackathon achievements, problem-solving streaks, and verified professional certifications.
          </p>
        </div>

        {/* SECTION 1: ACHIEVEMENTS */}
        <section className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-[#CBD5E1]">
            <h2 className="flex items-center gap-2 text-2xl font-extrabold text-[#172033] tracking-tight">
              <Trophy className="w-5 h-5 text-amber-500" />
              <span>ACHIEVEMENTS</span>
            </h2>
            <Badge variant="warning" className="text-xs font-mono font-bold">
              Recognized Milestones
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((item, idx) => (
              <AchievementCard key={idx} item={item} />
            ))}
          </div>
        </section>

        {/* SECTION 2: CERTIFICATIONS */}
        <section className="space-y-6 pt-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#CBD5E1]">
            <h2 className="flex items-center gap-2 text-2xl font-extrabold text-[#172033] tracking-tight">
              <Award className="w-5 h-5 text-[#7C3AED]" />
              <span>CERTIFICATIONS</span>
            </h2>
            <Badge variant="purple" className="text-xs font-mono font-bold">
              Verified Credentials
            </Badge>
          </div>

          <div className="max-w-5xl space-y-6">
            {certifications.map((cert) => (
              <CertificationCard key={cert.id || cert.title} cert={cert} />
            ))}
          </div>
        </section>

      </div>
    </PageLayout>
  );
}
