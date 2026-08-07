import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, ChevronLeft, ChevronRight, Layers, ShieldCheck, CheckCircle2, Database, Server } from 'lucide-react';
import { GithubIcon } from '../components/common/Icons';
import { PageLayout } from '../components/layout/PageLayout';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { Card } from '../components/common/Card';
import { projects } from '../data/portfolioData';

export function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <PageLayout title="Project Not Found">
        <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-6 bg-[#0B1120]">
          <Badge variant="cyan">404 Error</Badge>
          <h1 className="text-4xl font-bold text-[#F8FAFC]">Project Not Found</h1>
          <p className="text-[#94A3B8]">The requested project ID "{id}" does not exist in the portfolio.</p>
          <Button variant="primary" onClick={() => navigate('/projects')} icon={ArrowLeft}>
            Back to Projects
          </Button>
        </div>
      </PageLayout>
    );
  }

  const {
    name,
    description,
    about,
    highlights,
    liveDemo,
    github,
    screenshots,
    gallery,
    image
  } = project;

  const slides = (screenshots && screenshots.length > 0)
    ? screenshots
    : (gallery && gallery.length > 0)
    ? gallery
    : [image];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <PageLayout title={`${name} — Project Showcase`}>
      <div className="min-h-screen bg-[#0B1120] text-[#F8FAFC] py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* 1. ← Back to Projects Link */}
          <div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-mono font-medium text-[#94A3B8] hover:text-[#22D3EE] transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-[#22D3EE]" /> Back to Projects
            </Link>
          </div>

          {/* 2. Project Name & 3. One-line Project Description */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight">
              {name}
            </h1>
            <p className="text-base sm:text-lg text-[#22D3EE] font-mono font-medium leading-relaxed">
              {description}
            </p>
          </div>

          {/* 4. Project Screenshot Carousel */}
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-[#111827] border border-[#334155] shadow-2xl group">
            <img
              src={slides[currentIndex]}
              alt={`${name} screenshot ${currentIndex + 1}`}
              className="w-full h-full object-cover transition-opacity duration-300 ease-out"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/60 via-transparent to-transparent pointer-events-none" />

            {/* Left & Right Arrows */}
            {slides.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#0B1120]/80 border border-[#334155] text-[#F8FAFC] hover:text-[#22D3EE] hover:border-[#22D3EE] transition-all opacity-80 hover:opacity-100 z-10"
                  aria-label="Previous Screenshot"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#0B1120]/80 border border-[#334155] text-[#F8FAFC] hover:text-[#22D3EE] hover:border-[#22D3EE] transition-all opacity-80 hover:opacity-100 z-10"
                  aria-label="Next Screenshot"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Small Pagination Dots */}
            {slides.length > 1 && (
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentIndex === idx
                        ? 'w-6 bg-[#22D3EE]'
                        : 'w-2 bg-[#F8FAFC]/40 hover:bg-[#F8FAFC]/70'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* 5. About the Project (5-6 lines paragraph) */}
          <Card className="p-6 sm:p-8 bg-[#1E293B] border-[#334155] space-y-3 rounded-2xl">
            <h3 className="text-xl font-bold text-[#F8FAFC]">About the Project</h3>
            <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed font-sans">
              {about}
            </p>
          </Card>

          {/* 6. Key Highlights (Scannable Bullet Points) */}
          {highlights && (
            <Card className="p-6 sm:p-8 bg-[#1E293B] border-[#334155] space-y-6 rounded-2xl">
              <h3 className="text-xl font-bold text-[#F8FAFC]">Key Highlights</h3>

              <div className="space-y-4 text-sm font-sans">
                {/* Tech Stack */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 font-semibold text-[#22D3EE] font-mono text-xs uppercase">
                    <Layers className="w-4 h-4 text-[#22D3EE]" /> Tech Stack
                  </div>
                  <div className="flex flex-wrap gap-1.5 pl-6">
                    {highlights.techStack.map((tech, idx) => (
                      <Badge key={idx} variant="cyan" className="text-xs font-mono py-0.5 px-2.5">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Authentication */}
                {highlights.authentication && (
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 font-semibold text-[#22D3EE] font-mono text-xs uppercase">
                      <ShieldCheck className="w-4 h-4 text-[#22D3EE]" /> Authentication
                    </div>
                    <p className="text-[#CBD5E1] pl-6">{highlights.authentication}</p>
                  </div>
                )}

                {/* Main Features */}
                {highlights.mainFeatures && highlights.mainFeatures.length > 0 && (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 font-semibold text-[#22D3EE] font-mono text-xs uppercase">
                      <CheckCircle2 className="w-4 h-4 text-[#22D3EE]" /> Main Features
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-6 text-[#CBD5E1]">
                      {highlights.mainFeatures.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="text-[#22D3EE]">•</span> {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Database */}
                {highlights.database && (
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 font-semibold text-[#22D3EE] font-mono text-xs uppercase">
                      <Database className="w-4 h-4 text-[#22D3EE]" /> Database
                    </div>
                    <p className="text-[#CBD5E1] pl-6">{highlights.database}</p>
                  </div>
                )}

                {/* REST API */}
                {highlights.restApi && (
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 font-semibold text-[#22D3EE] font-mono text-xs uppercase">
                      <Server className="w-4 h-4 text-[#22D3EE]" /> REST API
                    </div>
                    <p className="text-[#CBD5E1] pl-6">{highlights.restApi}</p>
                  </div>
                )}
              </div>
            </Card>
          )}

          {/* 7. Action Buttons: GitHub & Live Demo */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {github && (
              <Button
                variant="secondary"
                size="lg"
                href={github}
                target="_blank"
                icon={GithubIcon}
              >
                GitHub
              </Button>
            )}
            {liveDemo && (
              <Button
                variant="primary"
                size="lg"
                href={liveDemo}
                target="_blank"
                icon={ExternalLink}
              >
                Live Demo
              </Button>
            )}
          </div>

        </div>
      </div>
    </PageLayout>
  );
}
