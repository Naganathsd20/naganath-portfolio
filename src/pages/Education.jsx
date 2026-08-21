import React from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { GraduationCap, BookOpen, Building2 } from 'lucide-react';
import { education } from '../data/portfolioData';

export function Education() {
  return (
    <PageLayout title="Education & Coursework">
      <div className="space-y-8 pb-12">
        
        {/* Header */}
        <div className="border-b border-[#334155] pb-5">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#8B5CF6] mb-1">
            <GraduationCap className="w-4 h-4" /> Academic Foundation & Coursework
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] tracking-tight">
            Education & Academic Background
          </h1>
          <p className="mt-1 text-sm text-[#94A3B8] font-mono">
            Degree, academic performance, and foundational Computer Science engineering coursework.
          </p>
        </div>

        {/* Education Main Card */}
        {education.map((edu, idx) => (
          <Card key={idx} className="p-6 sm:p-8 space-y-6 bg-[#172033] border-[#334155]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#334155] pb-6">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-purple-950/60 text-[#8B5CF6] border border-purple-500/30">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-extrabold text-[#F8FAFC]">{edu.institution}</h2>
                    <p className="text-xs font-mono font-bold text-[#8B5CF6]">{edu.degree}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="purple">{edu.duration}</Badge>
                <Badge variant="emerald">{edu.grade || "CGPA: 7.83 / 10.0"}</Badge>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-[#1E293B] border border-[#334155] space-y-1">
                <span className="text-xs font-mono text-[#94A3B8]">Semester Status</span>
                <p className="font-bold text-[#F8FAFC] text-sm">{edu.semester}</p>
              </div>

              <div className="p-4 rounded-xl bg-[#1E293B] border border-[#334155] space-y-1">
                <span className="text-xs font-mono text-[#94A3B8]">Academic Standing</span>
                <p className="font-bold text-[#34D399] text-sm">CGPA: 7.83 / 10.0</p>
              </div>

              <div className="p-4 rounded-xl bg-[#1E293B] border border-[#334155] space-y-1">
                <span className="text-xs font-mono text-[#94A3B8]">Specialization</span>
                <p className="font-bold text-[#8B5CF6] text-sm">Computer Science & Engineering</p>
              </div>
            </div>

            {/* Coursework Highlights */}
            {edu.highlights && edu.highlights.length > 0 && (
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#94A3B8]">
                  <BookOpen className="w-4 h-4 text-[#8B5CF6]" /> Core Engineering Coursework
                </div>
                <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-500/30 text-xs sm:text-sm text-[#F8FAFC] leading-relaxed font-sans">
                  {edu.highlights[0]}
                </div>
              </div>
            )}
          </Card>
        ))}

      </div>
    </PageLayout>
  );
}
