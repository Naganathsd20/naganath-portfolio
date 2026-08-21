import React from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { CertificationCard } from '../components/ui/CertificationCard';
import { Award } from 'lucide-react';
import { certifications } from '../data/portfolioData';

export function Certifications() {
  return (
    <PageLayout title="Certifications & Credentials">
      <div className="space-y-8 pb-12">
        
        {/* Header */}
        <div className="border-b border-slate-300 pb-5">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-purple-600 mb-1">
            <Award className="w-4 h-4 text-purple-600" /> Verified Credentials
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Verified Certifications
          </h1>
          <p className="mt-1 text-sm text-slate-600 font-mono">
            Professional certifications and job simulations from recognized industry organizations.
          </p>
        </div>

        {/* Certifications Container */}
        <div className="max-w-4xl space-y-6">
          {certifications.map((cert) => (
            <CertificationCard key={cert.id || cert.title} cert={cert} />
          ))}
        </div>

      </div>
    </PageLayout>
  );
}
