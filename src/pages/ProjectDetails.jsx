import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Code2, CheckCircle2 } from 'lucide-react';
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
          <h1 className="text-3xl font-extrabold text-[#172033]">Project Not Found</h1>
          <p className="text-sm text-[#475569]">The requested project ID "{id}" does not exist in the portfolio.</p>
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
    image,
    screenshots,
    gallery
  } = project;

  const primaryImage = image || (screenshots && screenshots[0]) || (gallery && gallery[0]);

  const [imgError, setImgError] = useState(false);

  const aboutParagraphs = typeof about === 'string' ? about.split('\n\n') : [about];

  return (
    <PageLayout title={`${name} — Case Study`}>
      <div className="max-w-4xl mx-auto space-y-8 pb-12">
        
        {/* Back Link */}
        <div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#475569] hover:text-[#7C3AED] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#7C3AED]" /> Back to Projects
          </Link>
        </div>

        {/* Header */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#172033] tracking-tight">
              {name}
            </h1>
            {category && (
              <Badge variant="purple" className="text-xs font-mono font-semibold py-1 px-3">
                {category}
              </Badge>
            )}
          </div>

          <p className="text-base sm:text-lg text-[#475569] font-sans leading-relaxed">
            {description}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#F1F5F9] hover:bg-white border border-[#CBD5E1] hover:border-[#7C3AED] text-xs font-mono font-bold text-[#172033] transition-colors shadow-2xs"
              >
                <GithubIcon className="w-4 h-4 text-[#172033]" /> GitHub Repository
              </a>
            )}
            {liveDemo && (
              <a
                href={liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-xs font-bold transition-all shadow-xs"
              >
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
            )}
          </div>
        </div>

        {/* Single Primary Project Screenshot Image */}
        {primaryImage && (
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-900 border border-[#CBD5E1] shadow-md p-2 sm:p-3 flex items-center justify-center">
            {imgError ? (
              <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 text-center space-y-3 text-white">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-purple-300">
                  <Code2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold">{name}</h3>
              </div>
            ) : (
              <img
                src={primaryImage}
                alt={name}
                className="w-full h-full object-contain rounded-xl shadow-xs"
                onError={() => setImgError(true)}
              />
            )}
          </div>
        )}

        {/* About Section */}
        {about && (
          <Card className="p-6 sm:p-8 space-y-4 bg-white border-[#CBD5E1]">
            <h2 className="text-xl font-extrabold text-[#172033] tracking-tight border-b border-[#CBD5E1] pb-3">
              About the Project
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#172033] leading-relaxed font-sans">
              {aboutParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </Card>
        )}

        {/* Technologies Used */}
        {techStack && techStack.length > 0 && (
          <Card className="p-6 sm:p-8 space-y-4 bg-white border-[#CBD5E1]">
            <h2 className="text-xl font-extrabold text-[#172033] tracking-tight border-b border-[#CBD5E1] pb-3">
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-2 pt-1">
              {techStack.map((tech, idx) => (
                <Badge key={idx} variant="cyan" className="text-xs sm:text-sm font-mono py-1 px-3">
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>
        )}

        {/* Key Features */}
        {keyFeatures && keyFeatures.length > 0 && (
          <Card className="p-6 sm:p-8 space-y-4 bg-white border-[#CBD5E1]">
            <h2 className="text-xl font-extrabold text-[#172033] tracking-tight border-b border-[#CBD5E1] pb-3">
              Key Features & Implementation
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-[#172033] font-sans">
              {keyFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#7C3AED] mt-0.5 flex-shrink-0" />
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
