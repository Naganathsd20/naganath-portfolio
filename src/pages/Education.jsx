import React from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { GraduationCap, Award, BookOpen, Building2 } from 'lucide-react';
import { education } from '../data/portfolioData';

export function Education() {
  return (
    <PageLayout title="Education Dashboard">
      <div className="space-y-8 pb-12">
        
        {/* Header */}
        <div className="border-b border-slate-200/80 pb-5">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-purple-600 mb-1">
            <GraduationCap className="w-4 h-4" /> Academic Foundation & Coursework
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Education Dashboard
          </h1>
          <p className="mt-1 text-sm text-slate-600 font-mono">
            Degree, academic performance, and foundational Computer Science engineering coursework.
          </p>
        </div>

        {/* Education Main Card */}
        {education.map((edu, idx) => (
          <Card key={idx} className="p-6 sm:p-8 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-purple-100 text-purple-700">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-extrabold text-slate-900">{edu.institution}</h2>
                    <p className="text-xs font-mono font-semibold text-purple-700">{edu.degree}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="purple">{edu.duration}</Badge>
                <Badge variant="emerald">{edu.grade}</Badge>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                <span className="text-xs font-mono text-slate-400">Semester Status</span>
                <p className="font-bold text-slate-900 text-sm">{edu.semester}</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                <span className="text-xs font-mono text-slate-400">Academic Standing</span>
                <p className="font-bold text-emerald-700 text-sm">CGPA: 8.4 / 10.0</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                <span className="text-xs font-mono text-slate-400">Specialization</span>
                <p className="font-bold text-purple-700 text-sm">Computer Science & Engineering</p>
              </div>
            </div>

            {/* Coursework Highlights */}
            {edu.highlights && edu.highlights.length > 0 && (
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  <BookOpen className="w-4 h-4 text-purple-600" /> Core Engineering Coursework
                </div>
                <div className="p-4 rounded-xl bg-purple-50/60 border border-purple-100 text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
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
