import React, { useState } from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { Award, ExternalLink, ShieldCheck, FileText } from 'lucide-react';
import { certifications } from '../data/portfolioData';

export function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <PageLayout title="Certifications Dashboard">
      <div className="space-y-8 pb-12">
        
        {/* Header */}
        <div className="border-b border-slate-200/80 pb-5">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-purple-600 mb-1">
            <Award className="w-4 h-4" /> Professional Credentials & Training
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Certifications Dashboard
          </h1>
          <p className="mt-1 text-sm text-slate-600 font-mono">
            Verified certifications, job simulations, and skill specializations from recognized industry providers.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <Card key={cert.id} className="p-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-3">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 leading-snug">{cert.name}</h3>
                    <p className="text-xs font-mono text-purple-700 font-medium mt-0.5">{cert.issuer}</p>
                  </div>
                  <Badge variant="purple" className="text-[11px] font-mono flex-shrink-0">
                    {cert.issueDate}
                  </Badge>
                </div>

                {cert.about && (
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    {cert.about}
                  </p>
                )}

                {/* Skills Badges */}
                {cert.skills && cert.skills.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cert.skills.map((skill, idx) => (
                      <Badge key={idx} variant="blue" className="text-[10px] font-mono">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Link */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between mt-auto">
                <span className="text-[11px] font-mono text-slate-400 truncate">
                  ID: {cert.credentialId}
                </span>

                {cert.verificationUrl && (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-purple-50 hover:bg-purple-100 text-purple-700 border border-purple-200 text-xs font-mono font-medium transition-colors"
                  >
                    Verify <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>

      </div>
    </PageLayout>
  );
}
