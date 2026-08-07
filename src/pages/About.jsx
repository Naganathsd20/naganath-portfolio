import React from 'react';
import { GraduationCap, Sparkles, Code2, Layers, Cpu } from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';
import { personalInfo } from '../data/portfolioData';

export function About() {
  const currentlyLearningItems = [
    {
      name: 'Java',
      description: 'Core concepts, OOPs principles & clean code practices',
      icon: Code2,
    },
    {
      name: 'MERN Stack',
      description: 'Full stack development with React, Node.js, Express & MongoDB',
      icon: Layers,
    },
    {
      name: 'Data Structures & Algorithms',
      description: 'Problem-solving, complexity analysis & algorithmic thinking',
      icon: Cpu,
    },
    {
      name: 'AI Fundamentals',
      description: 'Understanding AI concepts & integrating modern API workflows',
      icon: Sparkles,
    },
  ];

  return (
    <PageLayout title="About — Naganath S Dharwadkar">
      <div className="min-h-screen bg-[#0B1120] text-[#F8FAFC]">
        {/* Header Section */}
        <section className="pt-12 pb-8 sm:pt-16 sm:pb-12 border-b border-[#334155]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F8FAFC]">
              About <span className="text-[#22D3EE]">Me</span>
            </h1>
            <p className="mt-3 text-base sm:text-lg text-[#94A3B8] max-w-2xl">
              Learn more about my background, education, and current learning.
            </p>
          </div>
        </section>

        {/* Main Content Grid */}
        <section className="py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* 1. Professional Photo Card */}
              <div className="lg:col-span-4">
                <div className="bg-[#1E293B] border border-[#334155] rounded-2xl p-6 shadow-xl relative overflow-hidden group transition-all duration-300 hover:border-[#22D3EE]/40">
                  {/* Profile Photo */}
                  <div className="relative aspect-square w-full rounded-xl overflow-hidden border border-[#334155] bg-[#111827] mb-5">
                    <img
                      src={personalInfo.profileImage}
                      alt="Naganath S Dharwadkar"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Name & Title */}
                  <div className="text-center sm:text-left space-y-1.5">
                    <h2 className="text-xl font-bold text-[#F8FAFC] tracking-tight">
                      Naganath S Dharwadkar
                    </h2>
                    <p className="text-xs font-semibold text-[#22D3EE] leading-relaxed">
                      Final Year Computer Science Engineering Student
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column (About Me, Education, Currently Learning) */}
              <div className="lg:col-span-8 space-y-8">
                
                {/* 2. About Me (Story / Journey) */}
                <div className="bg-[#1E293B] border border-[#334155] rounded-2xl p-6 sm:p-8 shadow-xl transition-all duration-300 hover:border-[#334155]/80">
                  <h3 className="text-2xl font-bold text-[#F8FAFC] mb-4">
                    About Me
                  </h3>
                  <p className="text-base text-[#CBD5E1] leading-relaxed">
                    My interest in technology began with a curiosity about how software powers everyday digital experiences, leading me to pursue Computer Science & Engineering. During my engineering studies, I discovered a strong passion for Full Stack Development, where logic meets user interface design. Building web applications from scratch transformed theoretical concepts into practical skills, teaching me how to structure databases, design REST APIs, and craft responsive frontends. Through hands-on project work and algorithmic problem-solving, I learned the importance of writing clean, maintainable code. I enjoy exploring new tools, strengthening my core computer science fundamentals, and applying emerging web technologies to create functional, real-world solutions while preparing for my career in software development.
                  </p>
                </div>

                {/* 3. Education */}
                <div className="bg-[#1E293B] border border-[#334155] rounded-2xl p-6 sm:p-8 shadow-xl transition-all duration-300 hover:border-[#334155]/80">
                  <h3 className="text-xl font-bold text-[#F8FAFC] mb-6">
                    Education
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Degree */}
                    <div className="bg-[#111827] border border-[#334155] rounded-xl p-4 transition-colors hover:border-[#22D3EE]/30">
                      <div className="text-xs font-mono text-[#94A3B8] uppercase tracking-wider mb-1">
                        Degree
                      </div>
                      <div className="text-sm font-semibold text-[#F8FAFC]">
                        Bachelor of Engineering
                      </div>
                    </div>

                    {/* Branch */}
                    <div className="bg-[#111827] border border-[#334155] rounded-xl p-4 transition-colors hover:border-[#22D3EE]/30">
                      <div className="text-xs font-mono text-[#94A3B8] uppercase tracking-wider mb-1">
                        Branch
                      </div>
                      <div className="text-sm font-semibold text-[#F8FAFC]">
                        Computer Science & Engineering
                      </div>
                    </div>

                    {/* College */}
                    <div className="bg-[#111827] border border-[#334155] rounded-xl p-4 transition-colors hover:border-[#22D3EE]/30">
                      <div className="text-xs font-mono text-[#94A3B8] uppercase tracking-wider mb-1">
                        College
                      </div>
                      <div className="text-sm font-semibold text-[#F8FAFC]">
                        Sahyadri College of Engineering & Management
                      </div>
                    </div>

                    {/* Current Status */}
                    <div className="bg-[#111827] border border-[#334155] rounded-xl p-4 transition-colors hover:border-[#22D3EE]/30">
                      <div className="text-xs font-mono text-[#94A3B8] uppercase tracking-wider mb-1">
                        Current Status
                      </div>
                      <div className="text-sm font-semibold text-[#22D3EE] flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22D3EE] opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22D3EE]"></span>
                        </span>
                        Final Year Student
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4. Currently Learning */}
                <div className="bg-[#1E293B] border border-[#334155] rounded-2xl p-6 sm:p-8 shadow-xl transition-all duration-300 hover:border-[#334155]/80">
                  <h3 className="text-xl font-bold text-[#F8FAFC] mb-6">
                    Currently Learning
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {currentlyLearningItems.map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <div
                          key={index}
                          className="bg-[#111827] border border-[#334155] rounded-xl p-4 flex items-start gap-3.5 transition-all duration-300 hover:border-[#22D3EE]/40 hover:-translate-y-0.5 group"
                        >
                          <div className="p-2.5 rounded-lg bg-[#22D3EE]/10 border border-[#22D3EE]/20 text-[#22D3EE] group-hover:bg-[#22D3EE]/20 transition-colors shrink-0">
                            <IconComponent className="w-5 h-5 text-[#22D3EE]" />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-[#F8FAFC] group-hover:text-[#22D3EE] transition-colors">
                              {item.name}
                            </h4>
                            <p className="text-xs text-[#94A3B8] mt-1 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}



