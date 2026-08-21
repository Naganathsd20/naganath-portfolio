import React from 'react';
import { GraduationCap, Sparkles, Code2, Compass, Target, BookOpen, CheckCircle2 } from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
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
    'Practicing Java & DSA problem solving on LeetCode and GeeksforGeeks',
    'Developing full-stack web applications with React, Node.js & MongoDB',
    'Exploring AI fundamentals and RESTful API workflows',
    'Preparing for Software Developer placement opportunities and internships'
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
          
          {/* LEFT: Profile Card (#FFFFFF bg) */}
          <div className="lg:col-span-4">
            <Card className="p-6 text-center space-y-5 sticky top-24 bg-white border-[#CBD5E1]">
              <div className="relative aspect-square w-full max-w-[210px] mx-auto rounded-2xl overflow-hidden border-2 border-[#EDE9FE] shadow-xs bg-[#F1F5F9]">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="space-y-1">
                <h2 className="text-xl font-extrabold text-[#172033]">{personalInfo.name}</h2>
                <p className="text-xs font-mono font-bold text-[#7C3AED]">CS & Engineering Student</p>
                <p className="text-xs text-[#475569] font-medium">Sahyadri College of Engineering & Management</p>
              </div>

              <div className="pt-3 border-t border-[#CBD5E1] space-y-2 text-left text-xs font-mono">
                <div className="flex items-center justify-between text-[#475569]">
                  <span>Semester:</span>
                  <span className="font-semibold text-[#172033]">7th Sem (Final Year)</span>
                </div>
                <div className="flex items-center justify-between text-[#475569]">
                  <span>Graduation:</span>
                  <span className="font-semibold text-[#172033]">May 2027</span>
                </div>
                <div className="flex items-center justify-between text-[#475569]">
                  <span>Academic CGPA:</span>
                  <span className="font-bold text-[#059669]">7.83 / 10.0</span>
                </div>
              </div>

              <div className="pt-3 flex flex-wrap justify-center gap-1.5 border-t border-[#CBD5E1]">
                <Badge variant="purple">Full-Stack MERN</Badge>
                <Badge variant="cyan">Java / OOP</Badge>
                <Badge variant="emerald" pulse>Open to Work</Badge>
              </div>
            </Card>
          </div>

          {/* RIGHT: Developer Journey & Overview */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Developer Journey Card (#FFFFFF bg) */}
            <Card className="p-6 sm:p-8 space-y-4 bg-white border-[#CBD5E1]">
              <div className="flex items-center gap-2 text-xl font-extrabold text-[#172033] border-b border-[#CBD5E1] pb-3">
                <BookOpen className="w-5 h-5 text-[#7C3AED]" /> Developer Journey & Background
              </div>

              <p className="text-base text-[#172033] leading-relaxed font-sans">
                I am <strong className="text-[#172033] font-bold">Naganath S Dharwadkar</strong>, a Computer Science & Engineering student at Sahyadri College of Engineering & Management, currently in my 7th semester / final year (expected graduation: May 2027). As an aspiring Software Developer and Full-Stack Developer, I am focused on building reliable web applications and practicing data structures and algorithms in Java.
              </p>
              
              <p className="text-base text-[#475569] leading-relaxed font-sans">
                My software engineering mindset centers on learning through practical implementation — turning application concepts into functioning web platforms, writing clean Object-Oriented Java code, and understanding how backend REST APIs, databases, and modern frontends interact.
              </p>
            </Card>

            {/* Academic Focus & Job Search Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Academic Focus Card (#FFFFFF bg) */}
              <Card className="p-6 space-y-3 bg-white border-[#CBD5E1]">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#0891B2] uppercase">
                  <GraduationCap className="w-4 h-4 text-[#0891B2]" /> Academic Focus
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-[#172033]">BE in Computer Science</h3>
                  <p className="text-xs font-mono text-[#475569] mt-0.5">Sahyadri College of Engineering & Management</p>
                </div>
                <div className="space-y-1.5 text-sm text-[#475569] font-sans pt-1">
                  <p>• <strong className="text-[#172033]">Status:</strong> 7th Semester (Final Year)</p>
                  <p>• <strong className="text-[#172033]">Expected Graduation:</strong> May 2027</p>
                  <p>• <strong className="text-[#172033]">Current CGPA:</strong> 7.83 / 10.0</p>
                  <p className="text-xs text-[#64748B] font-mono pt-1">
                    Coursework: Data Structures & Algorithms, Java OOPs, DBMS, Web Technologies, Computer Networks, Operating Systems.
                  </p>
                </div>
              </Card>

              {/* Opportunities Seeking Card (#FFFFFF bg) */}
              <Card className="p-6 space-y-3 bg-white border-[#CBD5E1]">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#7C3AED] uppercase">
                  <Target className="w-4 h-4 text-[#7C3AED]" /> Opportunities Seeking
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-[#172033]">Internship & Graduate Roles</h3>
                  <p className="text-xs font-mono text-[#7C3AED] mt-0.5 font-bold">Actively seeking roles</p>
                </div>
                <ul className="space-y-1.5 text-sm text-[#475569] font-sans pt-1">
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#7C3AED] flex-shrink-0 mt-0.5" />
                    <span className="text-[#172033]">Software Developer Internships</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#7C3AED] flex-shrink-0 mt-0.5" />
                    <span className="text-[#172033]">Full-Stack Developer Internships</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#7C3AED] flex-shrink-0 mt-0.5" />
                    <span className="text-[#172033]">Entry-Level Software Engineering Roles</span>
                  </li>
                </ul>
                <p className="text-xs text-[#64748B] leading-relaxed font-sans pt-1">
                  Ready to contribute Java, DSA, and MERN stack skills while learning in a collaborative software development team.
                </p>
              </Card>

            </div>

            {/* Technical Focus & Activities (#FFFFFF bg) */}
            <Card className="p-6 sm:p-8 space-y-6 bg-white border-[#CBD5E1]">
              
              {/* Technical Focus Areas */}
              <div className="space-y-3">
                <h3 className="text-lg font-extrabold text-[#172033] border-b border-[#CBD5E1] pb-2 flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-[#7C3AED]" /> Technical Focus Areas
                </h3>
                <div className="flex flex-wrap gap-2 pt-1">
                  {genuineInterests.map((interest, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-2 rounded-xl text-sm font-mono font-semibold bg-[#F1F5F9] text-[#172033] border border-[#CBD5E1]"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              {/* Current Activities */}
              <div className="space-y-3 pt-2">
                <h3 className="text-lg font-extrabold text-[#172033] border-b border-[#CBD5E1] pb-2 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-500" /> Current Activities
                </h3>
                <div className="space-y-2.5">
                  {currentActivities.map((activity, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-[#475569] font-sans">
                      <div className="w-2 h-2 rounded-full bg-[#7C3AED] flex-shrink-0 mt-2" />
                      <span className="text-[#172033]">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>

            </Card>

          </div>

        </div>

      </div>
    </PageLayout>
  );
}
