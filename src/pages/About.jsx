import React from 'react';
import { GraduationCap, Sparkles, Code2, Layers, Cpu, Compass, Target, BookOpen } from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { personalInfo } from '../data/portfolioData';

export function About() {
  const currentlyLearningItems = [
    {
      name: 'Java & Algorithms',
      description: 'Core concepts, OOPs principles & Data Structures problem-solving.',
      icon: Code2,
    },
    {
      name: 'MERN Stack & Next.js',
      description: 'Full stack development with React, Node.js, Express, Next.js & MongoDB.',
      icon: Layers,
    },
    {
      name: 'Data Structures',
      description: '350+ solved problems focusing on time & space complexity optimization.',
      icon: Cpu,
    },
    {
      name: 'AI Fundamentals',
      description: 'Integrating modern AI models and voice agent API workflows.',
      icon: Sparkles,
    },
  ];

  return (
    <PageLayout title="About Me">
      <div className="space-y-8 pb-12">
        
        {/* Header */}
        <div className="border-b border-slate-200/80 pb-5">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-purple-600 mb-1">
            <Compass className="w-4 h-4" /> Personal Background & Philosophy
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            About Me
          </h1>
          <p className="mt-1 text-sm text-slate-600 font-mono">
            Final-year CS student passionate about building practical full-stack software and algorithmic problem solving.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Profile Card */}
          <div className="lg:col-span-4">
            <Card className="p-6 text-center space-y-4 sticky top-24">
              <div className="relative aspect-square w-full max-w-[220px] mx-auto rounded-2xl overflow-hidden border-2 border-purple-200 shadow-md bg-slate-100">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="space-y-1">
                <h2 className="text-xl font-bold text-slate-900">{personalInfo.name}</h2>
                <p className="text-xs font-mono font-semibold text-purple-700">{personalInfo.title}</p>
                <p className="text-xs text-slate-500">{personalInfo.college}</p>
              </div>

              <div className="pt-2 flex flex-wrap justify-center gap-1.5 border-t border-slate-100">
                <Badge variant="purple">Full-Stack MERN</Badge>
                <Badge variant="blue">Java OOP</Badge>
                <Badge variant="emerald">DSA 350+</Badge>
              </div>
            </Card>
          </div>

          {/* Details Content */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Story & Philosophy */}
            <Card className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
                <BookOpen className="w-5 h-5 text-purple-600" /> My Developer Journey
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-sans">
                My interest in technology began with a curiosity about how software powers everyday digital experiences, leading me to pursue Computer Science & Engineering at Sahyadri College of Engineering & Management. Throughout my degree, I built full-stack web applications using the MERN stack and developed algorithmic problem-solving habits in Java.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-sans">
                Building applications from scratch transformed theoretical computer science into practical engineering skills — teaching me how to design database schemas, write modular REST APIs, and craft intuitive user interfaces. I enjoy writing clean, maintainable code and applying modern tools to solve practical problems.
              </p>
            </Card>

            {/* Career Goal & Technical Interests */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="p-6 space-y-2 bg-purple-50/50 border-purple-200/70">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-purple-700 uppercase">
                  <Target className="w-4 h-4" /> Career Goal
                </div>
                <h3 className="text-base font-bold text-slate-900">Software Developer Roles</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  {personalInfo.careerGoal}
                </p>
              </Card>

              <Card className="p-6 space-y-2 bg-blue-50/50 border-blue-200/70">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-700 uppercase">
                  <GraduationCap className="w-4 h-4" /> Academic Focus
                </div>
                <h3 className="text-base font-bold text-slate-900">Sahyadri College (BE CS)</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  CGPA: 8.4 / 10.0 • 7th Semester (Final Year) • Coursework: DSA, DBMS, Web Technologies, OS.
                </p>
              </Card>
            </div>

            {/* Currently Learning */}
            <Card className="p-6 sm:p-8 space-y-4">
              <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
                Current Technical Focus
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentlyLearningItems.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-purple-100 text-purple-700 flex-shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">{item.name}</h4>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>

          </div>

        </div>

      </div>
    </PageLayout>
  );
}
