import React from 'react';
import { ExternalLink, ShieldCheck, Cloud, Code, Database, Server } from 'lucide-react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';

const iconMap = {
  Cloud: Cloud,
  Code: Code,
  Database: Database,
  Server: Server
};

export function CertificationCard({ cert }) {
  const { name, issuer, issueDate, expiryDate, credentialId, verificationUrl, skills, iconName } = cert;
  const IconComponent = iconMap[iconName] || ShieldCheck;

  return (
    <Card className="p-6 flex flex-col justify-between hover:border-[#22D3EE]/40 transition-all duration-300">
      <div>
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-[#22D3EE]/10 text-[#22D3EE] border border-[#22D3EE]/20 flex items-center justify-center flex-shrink-0">
            <IconComponent className="w-5 h-5" />
          </div>
          <Badge variant="cyan">Verified Credential</Badge>
        </div>

        <h3 className="text-lg font-bold text-[#F8FAFC] leading-snug mb-1">
          {name}
        </h3>

        <p className="text-xs font-semibold text-[#CBD5E1] mb-1">
          Issued by {issuer}
        </p>

        <p className="text-xs font-mono text-[#94A3B8] mb-4">
          Issued {issueDate} {expiryDate ? `• Valid thru ${expiryDate}` : ''}
        </p>

        {/* Skills covered */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#111827] text-[#CBD5E1] border border-[#334155]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-[#334155] flex items-center justify-between">
        <span className="text-[11px] font-mono text-[#94A3B8] truncate max-w-[150px]">
          ID: {credentialId}
        </span>

        {verificationUrl && (
          <a
            href={verificationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-semibold text-[#22D3EE] hover:text-[#06B6D4] transition-colors"
          >
            Verify <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </Card>
  );
}

