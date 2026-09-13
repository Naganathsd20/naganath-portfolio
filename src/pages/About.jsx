import React from 'react';
import { GraduationCap, Sparkles, Code2, Compass, Target, BookOpen, CheckCircle2, MapPin, Award, Briefcase } from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';
import { Card } from '../components/common/Card';
import { personalInfo } from '../data/portfolioData';

export function About() {
  const genuineInterests = [
    'Java Programming & OOPs',
    'Data Structures & Algorithms',
    'Full-Stack Web Development (MERN)',
    'AI Fundamentals',
    'Building Practical Software Applications'
  ];

  const currentActivities = [
    'Practicing Java & DSA problem solving',
    'Building full-stack web applications',
    'Exploring AI fundamentals and API workflows',
    'Preparing for software developer internships and placement opportunities'
  ];

  const whyHireMePoints = [
    'Strong foundation in Java, OOP, Data Structures & Algorithms',
    'Hands-on experience building full-stack web applications',
    'Practical problem-solving and debugging mindset',
    'Quick learner who adapts to new technologies',
    'Good time management and consistent work ethic',
    'Focused on writing clean, maintainable, and practical solutions'
  ];

  return (
    <PageLayout title="About Me">
      <div className="space-y-8 pb-12">
        
        {/* Header */}
        <div className="border-b border-[#CBD5E1] pb-5">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#7C3AED] mb-1">
            <Compass className="w-4 h-4" /> Personal Background & Overview
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#172033] tracking-tight">
            About Me
          </h1>
          <p className="mt-1 text-sm text-[#475569] font-mono">
            Final-year Computer Science & Engineering student at Sahyadri College of Engineering & Management.
          </p>
        </div>

        {/* Top Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Profile Card (#FFFFFF bg, normal document flow) */}
          <div className="lg:col-span-5">
            <Card className="p-6 sm:p-7 space-y-6 bg-white border-[#CBD5E1] shadow-xs">
              
              {/* Prominent Profile Photo */}
              <div className="relative aspect-square w-full max-w-[270px] mx-auto rounded-2xl overflow-hidden border-2 border-[#EDE9FE] shadow-sm bg-[#F1F5F9]">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Name & Title */}
              <div className="space-y-1 text-center">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#172033]">{personalInfo.name}</h2>
                <p className="text-xs sm:text-sm font-mono font-bold text-[#7C3AED]">CS & Engineering Student</p>
                <p className="text-xs sm:text-sm text-[#475569] font-medium">Sahyadri College of Engineering & Management</p>
              </div>

              {/* Integrated Academic Focus Section */}
              <div className="pt-4 border-t border-[#CBD5E1] space-y-4 text-left">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#0891B2] uppercase tracking-wide">
                  <GraduationCap className="w-4 h-4 text-[#0891B2]" /> Academic Focus
                </div>
                
                <div className="bg-[#F8FAFC] p-3.5 rounded-xl border border-[#CBD5E1] space-y-1">
                  <h3 className="text-sm font-extrabold text-[#172033]">BE in Computer Science & Engineering</h3>
                  <p className="text-xs text-[#475569] font-medium">Sahyadri College of Engineering & Management</p>
                </div>

                <div className="space-y-2 text-xs font-mono text-[#475569] bg-white p-1">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
                    <span>Status:</span>
                    <span className="font-semibold text-[#172033]">7th Semester (Final Year)</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
                    <span>Expected Graduation:</span>
                    <span className="font-semibold text-[#172033]">May 2027</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Current CGPA:</span>
                    <span className="font-bold text-[#059669]">7.83 / 10.0</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#CBD5E1] space-y-1.5">
                  <p className="text-xs font-mono font-bold text-[#172033] uppercase">Relevant Coursework:</p>
                  <p className="text-xs text-[#475569] leading-relaxed font-sans">
                    Data Structures & Algorithms, Java OOP, DBMS, Web Technologies, Computer Networks, Operating Systems
                  </p>
                </div>
              </div>

              {/* Open to Work & Relocation Rows */}
              <div className="pt-4 border-t border-[#CBD5E1] space-y-3">
                <div className="p-3 rounded-xl bg-[#EDE9FE]/50 border border-[#7C3AED]/20 space-y-0.5">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#7C3AED] uppercase">
                    <Briefcase className="w-3.5 h-3.5 text-[#7C3AED]" /> Open to Work
                  </div>
                  <p className="text-xs font-semibold text-[#172033]">
                    Software Developer & Full-Stack Opportunities
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-200/60 space-y-0.5">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-700 uppercase">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600" /> Open to Relocation
                  </div>
                  <p className="text-xs text-[#475569] leading-snug">
                    Willing to relocate for suitable software development opportunities across India.
                  </p>
                </div>
              </div>

            </Card>
          </div>

          {/* RIGHT: Developer Journey, Internship Roles, Why Hire Me */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Developer Journey Card */}
            <Card className="p-6 sm:p-7 space-y-3.5 bg-white border-[#CBD5E1]">
              <div className="flex items-center gap-2 text-xl font-extrabold text-[#172033] border-b border-[#CBD5E1] pb-3">
                <BookOpen className="w-5 h-5 text-[#7C3AED]" /> Developer Journey & Background
              </div>

              <p className="text-sm sm:text-base text-[#172033] leading-relaxed font-sans">
                I am <strong className="text-[#172033] font-bold">Naganath S Dharwadkar</strong>, a Computer Science & Engineering student at Sahyadri College of Engineering & Management in my 7th semester / final year (expected graduation: May 2027). As an aspiring Software Developer and Full-Stack Developer, I build practical software applications.
              </p>
              
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-sans">
                My core focus centers on Java programming, Data Structures & Algorithms, full-stack web development (MERN stack), REST APIs, relational & NoSQL databases, and foundational AI workflows.
              </p>
            </Card>

            {/* Internship & Graduate Roles Card (Vertical Line-by-Line List) */}
            <Card className="p-6 sm:p-7 space-y-4 bg-white border-[#CBD5E1]">
              <div className="flex items-center justify-between border-b border-[#CBD5E1] pb-3">
                <div className="flex items-center gap-2 text-lg sm:text-xl font-extrabold text-[#172033]">
                  <Target className="w-5 h-5 text-[#7C3AED]" /> Internship & Graduate Roles
                </div>
                <span className="text-xs font-mono font-bold text-[#7C3AED] bg-[#EDE9FE] px-2.5 py-1 rounded-full border border-[#7C3AED]/30">
                  Actively Seeking
                </span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm font-sans pt-1">
                <li className="flex items-center gap-2.5 text-[#172033] font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#7C3AED] flex-shrink-0" />
                  <span>Software Developer Internships</span>
                </li>
                <li className="flex items-center gap-2.5 text-[#172033] font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#7C3AED] flex-shrink-0" />
                  <span>Full-Stack Developer Internships</span>
                </li>
                <li className="flex items-center gap-2.5 text-[#172033] font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#7C3AED] flex-shrink-0" />
                  <span>Entry-Level Software Engineering Roles</span>
                </li>
                <li className="flex items-center gap-2.5 text-[#059669] font-medium pt-2 border-t border-slate-100">
                  <MapPin className="w-4 h-4 text-[#059669] flex-shrink-0" />
                  <span>Open to Relocation — Willing to relocate anywhere in India for suitable opportunities</span>
                </li>
              </ul>
            </Card>

            {/* Why Hire Me Card */}
            <Card className="p-6 sm:p-7 space-y-4 bg-white border-[#CBD5E1]">
              <div className="flex items-center gap-2 text-lg sm:text-xl font-extrabold text-[#172033] border-b border-[#CBD5E1] pb-3">
                <Award className="w-5 h-5 text-[#0891B2]" /> Why Hire Me
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-sans pt-1">
                {whyHireMePoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-[#475569] bg-[#F8FAFC] p-2.5 rounded-xl border border-[#E2E8F0]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0891B2] flex-shrink-0 mt-1.5" />
                    <span className="text-[#172033] font-medium leading-snug">{point}</span>
                  </div>
                ))}
              </div>
            </Card>

          </div>

        </div>

        {/* BOTTOM SECTION: Full-Width Card for Technical Focus Areas & Current Activities */}
        <Card className="p-6 sm:p-8 space-y-6 bg-white border-[#CBD5E1]">
          
          {/* Technical Focus Areas */}
          <div className="space-y-3">
            <h3 className="text-lg sm:text-xl font-extrabold text-[#172033] border-b border-[#CBD5E1] pb-2 flex items-center gap-2">
              <Code2 className="w-5 h-5 text-[#7C3AED]" /> Technical Focus Areas
            </h3>
            <div className="flex flex-wrap gap-2.5 pt-1">
              {genuineInterests.map((interest, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-semibold bg-[#F1F5F9] text-[#172033] border border-[#CBD5E1]"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          {/* Current Activities */}
          <div className="space-y-3 pt-2">
            <h3 className="text-lg sm:text-xl font-extrabold text-[#172033] border-b border-[#CBD5E1] pb-2 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500" /> Current Activities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {currentActivities.map((activity, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#475569] font-sans bg-[#F8FAFC] p-3 rounded-xl border border-[#CBD5E1]/60">
                  <div className="w-2 h-2 rounded-full bg-[#7C3AED] flex-shrink-0 mt-1.5" />
                  <span className="text-[#172033] font-medium">{activity}</span>
                </div>
              ))}
            </div>
          </div>

        </Card>

      </div>
    </PageLayout>
  );
}
