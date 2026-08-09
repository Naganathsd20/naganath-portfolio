import React from 'react';
import { Link } from 'react-router-dom';
import {
  Code2,
  Layers,
  Cpu,
  Sparkles,
  ArrowRight,
  Download,
  Mail,
  ExternalLink,
  CheckCircle2,
  FolderGit2,
  Briefcase,
  GraduationCap,
  Trophy,
  Binary,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/common/Icons';
import { PageLayout } from '../components/layout/PageLayout';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { ProjectCard } from '../components/ui/ProjectCard';
import { personalInfo, stats, projects, skills, achievements } from '../data/portfolioData';

export function Home() {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 4);

  return (
    <PageLayout title="Developer Dashboard">
      <div className="space-y-8 pb-12">
        
        {/* 1. Welcome / Hero Command Center Card */}
        <div className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-xs relative overflow-hidden">
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-purple-100/60 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
            {/* Profile Picture */}
            <div className="relative flex-shrink-0">
              <div className="w-28 h-32 sm:w-32 sm:h-36 rounded-2xl overflow-hidden border-2 border-purple-200/80 shadow-md bg-slate-100">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white p-1.5 rounded-full border-2 border-white shadow-xs" title="Available for opportunities">
                <ShieldCheck className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* User Meta Information */}
            <div className="flex-1 text-center md:text-left space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200/70 text-xs font-mono font-medium">
                <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                <span>Software Developer • Full-Stack Developer • AI Enthusiast</span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
                {personalInfo.name}
              </h1>

              <p className="text-sm sm:text-base font-medium text-slate-600 font-mono">
                {personalInfo.title} • {personalInfo.degree}
              </p>

              <p className="text-sm text-slate-600 leading-relaxed max-w-2xl">
                {personalInfo.bio}
              </p>

              {/* CTAs & Social Buttons */}
              <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-3">
                <Button variant="primary" size="md" href="/projects" icon={FolderGit2}>
                  View My Work
                </Button>

                <Button variant="secondary" size="md" href={personalInfo.resumeUrl} target="_blank" icon={Download}>
                  Download Resume
                </Button>

                <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-slate-50 border border-slate-200 hover:border-purple-300 text-slate-700 hover:text-purple-600 transition-colors shadow-2xs"
                    title="GitHub Profile"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>

                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-slate-50 border border-slate-200 hover:border-purple-300 text-slate-700 hover:text-purple-600 transition-colors shadow-2xs"
                    title="LinkedIn Profile"
                  >
                    <LinkedinIcon className="w-4 h-4 text-purple-600" />
                  </a>

                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="p-2 rounded-xl bg-slate-50 border border-slate-200 hover:border-purple-300 text-slate-700 hover:text-purple-600 transition-colors shadow-2xs"
                    title="Send Email"
                  >
                    <Mail className="w-4 h-4 text-pink-600" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Quick Dashboard Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <Card key={idx} className="p-5 space-y-1">
              <div className="text-xs font-mono font-medium text-slate-500 uppercase tracking-wider">
                {stat.label}
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-mono text-purple-700 font-medium">
                {stat.change}
              </div>
            </Card>
          ))}
        </div>

        {/* 3. "My Snapshot" & Current Focus Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* My Snapshot Card */}
          <Card className="p-6 md:col-span-2 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-base">
                <div className="w-7 h-7 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center font-mono text-xs">
                  01
                </div>
                Developer Snapshot
              </div>
              <Badge variant="purple">Verified Data</Badge>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="space-y-1 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-xs font-mono text-slate-500">Institution</span>
                <p className="font-semibold text-slate-800">{personalInfo.college}</p>
              </div>

              <div className="space-y-1 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-xs font-mono text-slate-500">Current Semester</span>
                <p className="font-semibold text-slate-800">{personalInfo.semester}</p>
              </div>

              <div className="space-y-1 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-xs font-mono text-slate-500">Primary Stack</span>
                <p className="font-semibold text-purple-700">Java • MERN Stack • React • Node</p>
              </div>

              <div className="space-y-1 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-xs font-mono text-slate-500">Algorithmic Practice</span>
                <p className="font-semibold text-emerald-700">350+ DSA Problems Solved</p>
              </div>
            </div>
          </Card>

          {/* Current Focus Card */}
          <Card className="p-6 space-y-4">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-base border-b border-slate-100 pb-3">
              <Cpu className="w-5 h-5 text-purple-600" /> Current Focus
            </div>

            <div className="space-y-2.5">
              {personalInfo.currentFocus.map((focus, idx) => (
                <div key={idx} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-purple-50/60 border border-purple-100 text-xs font-semibold text-purple-900">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0" />
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
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Featured Projects
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-mono mt-0.5">
                Major full-stack and AI applications from my portfolio
              </p>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-xs font-bold font-mono text-purple-600 hover:text-purple-700 bg-purple-50 hover:bg-purple-100 px-3 py-1.5 rounded-xl border border-purple-200 transition-colors"
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

        {/* 5. Tech Stack & DSA Progress Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Tech Stack Dashboard Overview */}
          <Card className="lg:col-span-2 p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-base">
                <Code2 className="w-5 h-5 text-purple-600" /> Technology Stack
              </div>
              <Link to="/skills" className="text-xs font-mono text-purple-600 hover:underline">
                Explore Skills →
              </Link>
            </div>

            <div className="space-y-4">
              {/* Programming Languages */}
              <div className="space-y-1.5">
                <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">Languages</span>
                <div className="flex flex-wrap gap-2">
                  {skills.programmingLanguages.map((lang, idx) => (
                    <Badge key={idx} variant="purple" className="text-xs">
                      {lang.name}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Frontend */}
              <div className="space-y-1.5">
                <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">Frontend</span>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((item, idx) => (
                    <Badge key={idx} variant="blue" className="text-xs">
                      {item.name}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Backend & Database */}
              <div className="space-y-1.5">
                <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">Backend & Database</span>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.concat(skills.database).map((item, idx) => (
                    <Badge key={idx} variant="cyan" className="text-xs">
                      {item.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* DSA Progress Card */}
          <Card className="p-6 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-base">
                  <Binary className="w-5 h-5 text-emerald-600" /> DSA Progress
                </div>
                <Badge variant="emerald">Ongoing</Badge>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200/70 text-center space-y-1">
                <div className="text-3xl font-extrabold text-emerald-800">350+</div>
                <div className="text-xs font-mono text-emerald-700 font-medium">
                  Problems Solved on LeetCode & GeeksforGeeks
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                Focused practice in Java covering Arrays, Linked Lists, Binary Trees, Stacks, Queues, and Sorting Algorithms.
              </p>
            </div>

            <Link
              to="/dsa"
              className="inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors mt-auto"
            >
              View DSA Dashboard <ChevronRight className="w-4 h-4" />
            </Link>
          </Card>

        </div>

        {/* 6. Recent Achievements Preview Card */}
        <Card className="p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-base">
              <Trophy className="w-5 h-5 text-amber-500" /> Recent Achievements & Milestones
            </div>
            <Link to="/achievements" className="text-xs font-mono text-purple-600 hover:underline">
              View All Achievements →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {achievements.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                <Badge variant="warning" className="text-[11px]">
                  {item.badge}
                </Badge>
                <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                <p className="text-xs text-slate-500 font-mono">{item.organization} • {item.date}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* 7. Contact CTA Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 p-8 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-extrabold">Let's build something meaningful.</h3>
            <p className="text-sm text-purple-100 font-mono">
              Open for Software Developer & Full Stack Opportunities.
            </p>
          </div>
          <Button variant="secondary" size="lg" href="/contact" className="bg-white text-purple-700 hover:bg-slate-100 border-transparent flex-shrink-0">
            Contact Me
          </Button>
        </div>

      </div>
    </PageLayout>
  );
}
