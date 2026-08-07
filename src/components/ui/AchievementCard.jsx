import React from 'react';
import { Trophy } from 'lucide-react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';

export function AchievementCard({ item }) {
  const { title, organization, date, description, badge, impact } = item;

  return (
    <Card className="p-6 flex flex-col justify-between hover:border-[#22D3EE]/40 transition-all duration-300">
      <div>
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-[#22D3EE]/10 text-[#22D3EE] border border-[#22D3EE]/20 flex items-center justify-center flex-shrink-0">
            <Trophy className="w-5 h-5" />
          </div>
          <Badge variant="cyan">{badge}</Badge>
        </div>

        <h3 className="text-lg font-bold text-[#F8FAFC] leading-snug mb-1">
          {title}
        </h3>

        <div className="flex items-center gap-2 text-xs font-mono text-[#22D3EE] mb-3">
          <span>{organization}</span>
          <span>•</span>
          <span className="text-[#94A3B8]">{date}</span>
        </div>

        <p className="text-sm text-[#94A3B8] leading-relaxed mb-4">
          {description}
        </p>
      </div>

      {impact && (
        <div className="pt-3 border-t border-[#334155] text-xs font-mono text-[#10B981] font-semibold">
          Impact: {impact}
        </div>
      )}
    </Card>
  );
}

