import React from 'react';
import { Link } from 'react-router-dom';
import {
  Code2,
  Cpu,
  Sparkles,
  ArrowRight,
  Download,
  Mail,
  CheckCircle2,
  FolderGit2,
  Briefcase,
  Trophy,
  Binary,
  ShieldCheck,
  ChevronRight,
  Award
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/common/Icons';
import { PageLayout } from '../components/layout/PageLayout';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { ProjectCard } from '../components/ui/ProjectCard';
import { personalInfo, stats, projects, skills, certifications } from '../data/portfolioData';

export function Home() {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 4);

  return (
    <PageLayout title="Software Developer Portfolio">
      <div className="space-y-8 pb-12">
        
        {/* 1. Hero Profile Card (#FFFFFF bg) */}
        <div className="rounded-2xl border border-[#CBD5E1] bg-white p-6 sm:p-8 shadow-2xs relative overflow-hidden">
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-[#EDE9FE] rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
            
            {/* Profile Picture */}
            <div className="relative flex-shrink-0">
              <div className="w-28 h-32 sm:w-32 sm:h-36 rounded-2xl overflow-hidden border-2 border-[#EDE9FE] shadow-xs bg-[#F1F5F9]">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-[#059669] text-white p-1.5 rounded-full border-2 border-white shadow-xs" title="Available for opportunities">
                <ShieldCheck className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Candidate Metadata */}
            <div className="flex-1 text-center md:text-left space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDE9FE] text-[#7C3AED] border border-[#7C3AED]/30 text-xs font-mono font-bold">
                <Sparkles className="w-3.5 h-3.5 text-[#7C3AED]" />
                <span>Software Developer • Full-Stack Developer • CS Student</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#172033]">
                {personalInfo.name}
              </h1>

              <p className="text-sm sm:text-base font-bold text-[#7C3AED] font-mono">
                {personalInfo.title} • {personalInfo.degree}
              </p>

              <p className="text-sm sm:text-base text-[#475569] leading-relaxed max-w-2xl font-sans">
                {personalInfo.bio}
              </p>

              {/* Action Buttons & Links */}
              <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-3">
                <Button variant="primary" size="md" href="/projects" icon={FolderGit2}>
                  View Featured Projects
                </Button>

                <Button variant="secondary" size="md" href={personalInfo.resumeUrl} target="_blank" icon={Download}>
                  Download Resume
                </Button>

                <div className="flex items-center gap-2 pl-2 border-l border-[#CBD5E1]">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-[#F1F5F9] border border-[#CBD5E1] hover:border-[#7C3AED] text-[#172033] hover:text-[#7C3AED] transition-colors shadow-2xs"
                    title="GitHub Profile"
                  >
                    <GithubIcon className="w-4 h-4 text-[#0891B2]" />
                  </a>

                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-[#F1F5F9] border border-[#CBD5E1] hover:border-[#7C3AED] text-[#172033] hover:text-[#7C3AED] transition-colors shadow-2xs"
                    title="LinkedIn Profile"
                  >
                    <LinkedinIcon className="w-4 h-4 text-[#7C3AED]" />
                  </a>

                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="p-2 rounded-xl bg-[#F1F5F9] border border-[#CBD5E1] hover:border-[#7C3AED] text-[#172033] hover:text-[#7C3AED] transition-colors shadow-2xs"
                    title="Send Email"
                  >
                    <Mail className="w-4 h-4 text-[#7C3AED]" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 2. Key Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <Card key={idx} className="p-5 space-y-1 bg-white border-[#CBD5E1]">
              <div className="text-xs font-mono font-bold text-[#475569] uppercase tracking-wider">
                {stat.label}
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#172033] tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-mono text-[#7C3AED] font-semibold">
                {stat.change}
              </div>
            </Card>
          ))}
        </div>

        {/* 3. Developer Snapshot & Technical Focus */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Candidate Overview Card (#FFFFFF bg) */}
          <Card className="p-6 md:col-span-2 space-y-4 bg-white border-[#CBD5E1]">
            <div className="flex items-center justify-between border-b border-[#CBD5E1] pb-3">
              <div className="flex items-center gap-2 font-extrabold text-[#172033] text-lg">
                Developer Overview
              </div>
              <Badge variant="purple" className="text-xs font-mono font-semibold">Verified Student Data</Badge>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="space-y-1 p-3 rounded-xl bg-[#F1F5F9] border border-[#CBD5E1]">
                <span className="text-xs font-mono text-[#475569] font-bold">Institution</span>
                <p className="font-semibold text-[#172033]">{personalInfo.college}</p>
              </div>

              <div className="space-y-1 p-3 rounded-xl bg-[#F1F5F9] border border-[#CBD5E1]">
                <span className="text-xs font-mono text-[#475569] font-bold">Academic Standing</span>
                <p className="font-semibold text-[#172033]">{personalInfo.semester} (CGPA: 7.83)</p>
              </div>

              <div className="space-y-1 p-3 rounded-xl bg-[#F1F5F9] border border-[#CBD5E1]">
                <span className="text-xs font-mono text-[#475569] font-bold">Core Stack</span>
                <p className="font-bold text-[#7C3AED]">Java • MERN Stack • React • Node</p>
              </div>

              <div className="space-y-1 p-3 rounded-xl bg-[#F1F5F9] border border-[#CBD5E1]">
                <span className="text-xs font-mono text-[#475569] font-bold">Problem Solving</span>
                <p className="font-bold text-[#059669]">350+ DSA Problems Solved</p>
              </div>
            </div>
          </Card>

          {/* Current Focus Card (#FFFFFF bg) */}
          <Card className="p-6 space-y-4 bg-white border-[#CBD5E1]">
            <div className="flex items-center gap-2 font-extrabold text-[#172033] text-lg border-b border-[#CBD5E1] pb-3">
              <Cpu className="w-5 h-5 text-[#7C3AED]" /> Technical Focus
            </div>

            <div className="space-y-2.5">
              {personalInfo.currentFocus.map((focus, idx) => (
                <div key={idx} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#EDE9FE] border border-[#7C3AED]/30 text-xs font-semibold text-[#7C3AED]">
                  <CheckCircle2 className="w-4 h-4 text-[#7C3AED] flex-shrink-0" />
                  <span>{focus}</span>
                </div>
              ))}
            </div>
          </Card>

        </div>

        {/* 4. Featured Projects Header & Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-extrabold text-[#172033] tracking-tight">
                Featured Projects
              </h2>
              <p className="text-xs sm:text-sm text-[#475569] font-mono mt-0.5">
                Full-stack web portals and AI applications
              </p>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-xs font-bold font-mono text-[#7C3AED] hover:text-[#6D28D9] bg-[#EDE9FE] px-3.5 py-2 rounded-xl border border-[#7C3AED]/30 transition-colors"
            >
              View All Projects <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* 5. Verified Credentials Highlight */}
        <Card className="p-6 space-y-4 bg-white border-[#CBD5E1]">
          <div className="flex items-center justify-between border-b border-[#CBD5E1] pb-3">
            <div className="flex items-center gap-2 font-extrabold text-[#172033] text-lg">
              <ShieldCheck className="w-5 h-5 text-[#7C3AED]" /> Verified Certifications & Simulation
            </div>
            <Link to="/achievements" className="text-xs font-mono text-[#7C3AED] hover:underline font-bold">
              View All Certifications →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#F1F5F9] border border-[#CBD5E1] space-y-2">
                <Badge variant="purple" className="text-[11px] font-mono font-semibold">
                  {item.issuer}
                </Badge>
                <h4 className="text-sm font-bold text-[#172033]">{item.title}</h4>
                <p className="text-xs text-[#475569] font-mono">Issued {item.issueDate}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* 6. Strategic Dark Contrast CTA Banner (#273449 bg) */}
        <div className="rounded-2xl bg-[#273449] p-8 text-white shadow-md border border-[#334155] flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#7C3AED]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-1 text-center sm:text-left relative z-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold">Open for Software Developer & Internship Roles</h3>
            <p className="text-xs sm:text-sm text-slate-300 font-mono">
              Ready to bring Java, DSA, and MERN stack skills to engineering teams.
            </p>
          </div>

          <Button variant="primary" size="lg" href="/contact" className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white border-transparent flex-shrink-0 relative z-10">
            Let's Connect
          </Button>
        </div>

      </div>
    </PageLayout>
  );
}
