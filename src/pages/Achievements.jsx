import React from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { Trophy, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { achievements } from '../data/portfolioData';

export function Achievements() {
  return (
    <PageLayout title="Achievements Dashboard">
      <div className="space-y-8 pb-12">
        
        {/* Header */}
        <div className="border-b border-slate-200/80 pb-5">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-600 mb-1">
            <Trophy className="w-4 h-4 text-amber-500" /> Milestones & Recognition
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Achievements Dashboard
          </h1>
          <p className="mt-1 text-sm text-slate-600 font-mono">
            Hackathon awards, algorithmic coding streaks, and open-source contributions.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((item, idx) => (
            <Card key={idx} className="p-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <Badge variant="warning" className="text-xs">
                    {item.badge}
                  </Badge>
                  <span className="text-xs font-mono text-slate-400">{item.date}</span>
                </div>

                <h3 className="text-base font-bold text-slate-900 leading-snug">{item.title}</h3>
                
                <p className="text-xs font-mono font-semibold text-purple-700">{item.organization}</p>

                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>

              {item.impact && (
                <div className="p-3 rounded-xl bg-amber-50/60 border border-amber-200/70 text-xs font-medium text-amber-800 flex items-center gap-2 mt-auto">
                  <Sparkles className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>{item.impact}</span>
                </div>
              )}
            </Card>
          ))}
        </div>

      </div>
    </PageLayout>
  );
}
