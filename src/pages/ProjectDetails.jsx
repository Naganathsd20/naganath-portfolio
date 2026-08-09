import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, ChevronLeft, ChevronRight, Code2, CheckCircle2 } from 'lucide-react';
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
        <div className="py-20 text-center space-y-6">
          <Badge variant="purple">404 Error</Badge>
          <h1 className="text-3xl font-extrabold text-slate-900">Project Not Found</h1>
          <p className="text-sm text-slate-600">The requested project ID "{id}" does not exist in the portfolio.</p>
          <Button variant="primary" onClick={() => navigate('/projects')} icon={ArrowLeft}>
            Back to Projects
          </Button>
        </div>
      </PageLayout>
    );
  }

  const {
    name,
    category,
    description,
    about,
    techStack,
    keyFeatures,
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
  const [failedImages, setFailedImages] = useState({});

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handleImageError = (index) => {
    setFailedImages((prev) => ({ ...prev, [index]: true }));
  };

  const aboutParagraphs = typeof about === 'string' ? about.split('\n\n') : [about];

  return (
    <PageLayout title={`${name} — Case Study`}>
      <div className="max-w-4xl mx-auto space-y-8 pb-12">
        
        {/* Back Link */}
        <div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-slate-500 hover:text-purple-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-purple-600" /> Back to Projects
          </Link>
        </div>

        {/* Header */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {name}
            </h1>
            {category && (
              <Badge variant="purple" className="text-xs font-mono py-1 px-3">
                {category}
              </Badge>
            )}
          </div>

          <p className="text-base sm:text-lg text-slate-700 font-sans leading-relaxed">
            {description}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            {github && (
              <Button
                variant="secondary"
                size="md"
                href={github}
                target="_blank"
                icon={GithubIcon}
              >
                GitHub Repository
              </Button>
            )}
            {liveDemo && (
              <Button
                variant="primary"
                size="md"
                href={liveDemo}
                target="_blank"
                icon={ExternalLink}
              >
                Live Demo
              </Button>
            )}
          </div>
        </div>

        {/* Screenshot Carousel */}
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/80 shadow-md group">
          {failedImages[currentIndex] ? (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 text-center space-y-3 text-white">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-purple-300">
                <Code2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold">{name}</h3>
              <p className="text-xs sm:text-sm text-slate-300 font-mono max-w-md">
                Screenshot {currentIndex + 1} of {slides.length} — Place screenshot files in the public directory to display app previews.
              </p>
              {liveDemo && (
                <a
                  href={liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-500/20 text-purple-300 border border-purple-400/30 text-xs font-mono transition-colors hover:bg-purple-500/30"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> View Live Application
                </a>
              )}
            </div>
          ) : (
            <img
              src={slides[currentIndex]}
              alt={`${name} screenshot ${currentIndex + 1}`}
              className="w-full h-full object-cover transition-opacity duration-300 ease-out"
              onError={() => handleImageError(currentIndex)}
            />
          )}

          {slides.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 border border-slate-700 text-white hover:text-purple-400 transition-all z-10"
                aria-label="Previous Screenshot"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 border border-slate-700 text-white hover:text-purple-400 transition-all z-10"
                aria-label="Next Screenshot"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {slides.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? 'w-6 bg-purple-500' : 'w-2 bg-white/40 hover:bg-white/70'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* About Section */}
        <Card className="p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight border-b border-slate-100 pb-3">
            About the Project
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed font-sans">
            {aboutParagraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </Card>

        {/* Technologies Used */}
        {techStack && techStack.length > 0 && (
          <Card className="p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight border-b border-slate-100 pb-3">
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-2 pt-1">
              {techStack.map((tech, idx) => (
                <Badge key={idx} variant="purple" className="text-xs sm:text-sm font-mono py-1 px-3">
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>
        )}

        {/* Key Features */}
        {keyFeatures && keyFeatures.length > 0 && (
          <Card className="p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight border-b border-slate-100 pb-3">
              Key Features & Implementation
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-700 font-sans">
              {keyFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </Card>
        )}

      </div>
    </PageLayout>
  );
}
