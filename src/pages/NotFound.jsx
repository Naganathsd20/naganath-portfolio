import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';

export function NotFound() {
  return (
    <PageLayout title="404 — Page Not Found">
      <div className="min-h-[70vh] flex items-center justify-center py-20 bg-grid-pattern bg-[#0B1120]">
        <div className="max-w-md mx-auto px-4 text-center space-y-6">
          <Badge variant="cyan" className="mx-auto">404 Error</Badge>
          <h1 className="text-6xl sm:text-7xl font-extrabold text-[#22D3EE] font-mono tracking-tight">
            404
          </h1>
          <h2 className="text-2xl font-bold text-[#F8FAFC]">Page Not Found</h2>
          <p className="text-sm text-[#94A3B8] leading-relaxed">
            The page you are looking for doesn't exist or has been moved to a new route.
          </p>

          <div className="pt-4 flex justify-center gap-3">
            <Button variant="primary" href="/" icon={Home}>
              Return Home
            </Button>
            <Button variant="outline" href="/projects" icon={ArrowLeft}>
              View Projects
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

