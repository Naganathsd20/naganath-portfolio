import React from 'react';
import { Download, Mail, GraduationCap, Building2, Code2, Layers, Cpu, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/common/Icons';
import { PageLayout } from '../components/layout/PageLayout';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { personalInfo } from '../data/portfolioData';

export function Home() {
  const currentFocusItems = [
    { name: 'Java', icon: Code2, desc: 'Core Programming & OOPs' },
    { name: 'MERN Stack', icon: Layers, desc: 'React, Node, Express & MongoDB' },
    { name: 'Data Structures & Algorithms', icon: Cpu, desc: 'Problem Solving & Logic' },
    { name: 'AI Fundamentals', icon: Sparkles, desc: 'Concepts & Integration Workflows' }
  ];

  return (
    <PageLayout title="Naganath S Dharwadkar — Final Year CS Engineering Student">
      <section className="py-12 sm:py-16 md:py-20 bg-[#0B1120] text-[#F8FAFC] min-h-[calc(100vh-80px)] flex items-center bg-grid-pattern">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-10">
          
          {/* Main Hero Header: Photo + Name + Role + Short About Me */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            
            {/* Professional Photo */}
            <div className="w-40 h-48 sm:w-48 sm:h-56 rounded-[18px] overflow-hidden border border-[#22D3EE]/30 bg-[#243447] flex-shrink-0 shadow-xl shadow-[#0B1120] transition-all duration-300">
              <img
                src={personalInfo.profileImage}
                alt="Naganath S Dharwadkar"
                className="w-full h-full object-cover object-top"
                loading="eager"
              />
            </div>

            {/* Name, Role & 3-4 Line Short About Me */}
            <div className="space-y-3 text-center md:text-left flex-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#FFFFFF]">
                Naganath S Dharwadkar
              </h1>
              
              <p className="text-base sm:text-lg font-semibold text-[#CBD5E1] font-mono">
                Final Year Computer Science Engineering Student
              </p>

              <p className="text-[18px] text-[#E2E8F0] font-medium leading-[1.8] tracking-[0.2px] max-w-2xl">
                I am a final-year Computer Science & Engineering student at Sahyadri College of Engineering & Management. I enjoy building web applications using the MERN stack and solving algorithmic problems with Java. I am passionate about creating clean, functional software and continuously expanding my technical skills.
              </p>

              {/* Action Buttons & Social Icons */}
              <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-4">
                <Button
                  variant="primary"
                  size="md"
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  icon={Download}
                >
                  Download Resume
                </Button>

                <Button
                  variant="secondary"
                  size="md"
                  href="/contact"
                  icon={Mail}
                >
                  Contact Me
                </Button>

                <div className="flex items-center gap-2 pl-2 border-l border-[#334155]">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-[#111827] border border-[#334155] hover:border-[#22D3EE] text-[#CBD5E1] hover:text-[#22D3EE] transition-colors"
                    title="GitHub Profile"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon className="w-4 h-4 text-[#22D3EE]" />
                  </a>

                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-[#111827] border border-[#334155] hover:border-[#22D3EE] text-[#CBD5E1] hover:text-[#22D3EE] transition-colors"
                    title="LinkedIn Profile"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon className="w-4 h-4 text-[#22D3EE]" />
                  </a>

                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="p-2.5 rounded-xl bg-[#111827] border border-[#334155] hover:border-[#22D3EE] text-[#CBD5E1] hover:text-[#22D3EE] transition-colors"
                    title="Email Direct"
                    aria-label="Email Direct"
                  >
                    <Mail className="w-4 h-4 text-[#22D3EE]" />
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Separate Information Cards for Education & College */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Education Card */}
            <Card className="p-6 bg-[#1E293B] border-[#334155] space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#22D3EE] font-semibold uppercase">
                <GraduationCap className="w-4 h-4 text-[#22D3EE]" /> Education
              </div>
              <h3 className="text-lg font-bold text-[#F8FAFC]">Bachelor of Engineering</h3>
              <p className="text-sm text-[#94A3B8] font-mono">Computer Science & Engineering</p>
            </Card>

            {/* College Card (Separate Information Card) */}
            <Card className="p-6 bg-[#1E293B] border-[#334155] space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#22D3EE] font-semibold uppercase">
                <Building2 className="w-4 h-4 text-[#22D3EE]" /> College
              </div>
              <h3 className="text-lg font-bold text-[#F8FAFC]">Sahyadri College of Engineering & Management</h3>
              <p className="text-sm text-[#94A3B8] font-mono">Mangaluru, Karnataka</p>
            </Card>

          </div>

          {/* Current Focus: 4 Modern Cards */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono text-[#94A3B8] font-semibold uppercase tracking-wider">
              Current Focus
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {currentFocusItems.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <Card key={idx} className="p-5 bg-[#1E293B] border-[#334155] hover:border-[#22D3EE]/40 transition-all">
                    <div className="w-9 h-9 rounded-xl bg-[#22D3EE]/10 border border-[#22D3EE]/20 flex items-center justify-center text-[#22D3EE] mb-3">
                      <IconComponent className="w-5 h-5 text-[#22D3EE]" />
                    </div>
                    <h4 className="text-base font-bold text-[#F8FAFC]">{item.name}</h4>
                    <p className="text-xs text-[#94A3B8] mt-1">{item.desc}</p>
                  </Card>
                );
              })}
            </div>
          </div>

        </div>
      </section>
    </PageLayout>
  );
}
