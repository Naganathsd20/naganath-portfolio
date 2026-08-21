import React from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { Card } from '../components/common/Card';
import { TechIcon } from '../components/common/TechLogos';
import {
  Code2,
  Binary,
  Layout,
  Server,
  Database,
  BrainCircuit,
  Wrench,
  Sparkles
} from 'lucide-react';
import { skills } from '../data/portfolioData';

export function Skills() {
  const categoryConfigs = [
    {
      id: 'programming-languages',
      title: 'PROGRAMMING LANGUAGES',
      description: 'Languages used for core logic, algorithmic problem solving, and application scripting.',
      icon: Code2,
      items: skills.programmingLanguages?.map(s => s.name) || ['Java', 'Python', 'JavaScript', 'C', 'C++']
    },
    {
      id: 'dsa',
      title: 'DATA STRUCTURES & ALGORITHMS',
      description: 'Core computational structures and problem-solving concepts.',
      icon: Binary,
      items: skills.dsa?.map(s => s.name) || ['Arrays', 'Strings', 'Linked Lists', 'Stacks & Queues', 'Trees', 'Sorting & Searching', 'Problem Solving']
    },
    {
      id: 'frontend',
      title: 'FRONTEND DEVELOPMENT',
      description: 'Frameworks, libraries, and styling systems for building responsive web interfaces.',
      icon: Layout,
      items: skills.frontend?.map(s => s.name) || ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Vite', 'Tailwind CSS', 'Bootstrap', 'Redux Toolkit']
    },
    {
      id: 'backend',
      title: 'BACKEND DEVELOPMENT',
      description: 'Server runtimes, REST APIs, authentication workflows, and cloud storage.',
      icon: Server,
      items: skills.backend?.map(s => s.name) || ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'Multer', 'Cloudinary']
    },
    {
      id: 'databases',
      title: 'DATABASES',
      description: 'Relational, document, and in-memory data store management.',
      icon: Database,
      items: skills.databases?.map(s => s.name) || ['MongoDB', 'MySQL', 'Redis']
    },
    {
      id: 'ai-ml',
      title: 'AI / MACHINE LEARNING',
      description: 'Foundational AI/ML concepts and modern RESTful API integrations.',
      icon: BrainCircuit,
      items: skills.aiMl?.map(s => s.name) || ['AI Fundamentals', 'Machine Learning Fundamentals', 'Python for AI/ML', 'AI API Integration']
    },
    {
      id: 'tools',
      title: 'TOOLS & DEVELOPMENT',
      description: 'Developer tools, version control systems, and API testing environments.',
      icon: Wrench,
      items: skills.tools?.map(s => s.name) || ['Git', 'GitHub', 'VS Code', 'Postman', 'MongoDB Compass'],
      fullWidth: true
    }
  ];

  return (
    <PageLayout title="Skills & Technologies">
      <div className="space-y-8 pb-16 font-sans">
        
        {/* Page Header */}
        <div className="border-b border-[#CBD5E1] pb-6 space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#7C3AED]">
            <Code2 className="w-4 h-4 text-[#7C3AED]" /> TECHNICAL SKILLS
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#172033] tracking-tight leading-tight">
            Skills & Technologies
          </h1>
          <p className="text-base sm:text-lg text-[#475569] font-sans max-w-3xl leading-relaxed">
            Technologies and tools I'm currently learning and using to build full-stack applications and solve programming problems.
          </p>
        </div>

        {/* Overview Card */}
        <div className="bg-white border border-[#CBD5E1] rounded-2xl p-5 sm:p-6 flex items-start sm:items-center gap-4 shadow-2xs">
          <div className="w-11 h-11 rounded-2xl bg-[#EDE9FE] border border-[#7C3AED]/30 text-[#7C3AED] flex items-center justify-center flex-shrink-0 shadow-2xs">
            <Sparkles className="w-6 h-6 text-[#7C3AED]" />
          </div>
          <div className="space-y-0.5">
            <div className="text-xs font-mono font-bold text-[#7C3AED] uppercase tracking-wider">
              OVERVIEW
            </div>
            <p className="text-base sm:text-lg font-semibold text-[#172033] leading-relaxed">
              Focused on Java, Data Structures & Algorithms, Full-Stack Development, and AI fundamentals.
            </p>
          </div>
        </div>

        {/* Two-Column Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {categoryConfigs.map((category) => {
            const IconComponent = category.icon;

            return (
              <Card
                key={category.id}
                className={`p-6 sm:p-7 space-y-5 bg-white border-[#CBD5E1] rounded-2xl ${
                  category.fullWidth ? 'lg:col-span-2' : ''
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 pb-4 border-b border-[#CBD5E1]">
                    <div className="w-10 h-10 rounded-2xl bg-[#EDE9FE] border border-[#7C3AED]/30 flex items-center justify-center text-[#7C3AED] flex-shrink-0 shadow-2xs">
                      <IconComponent className="w-5 h-5 text-[#7C3AED]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-base sm:text-lg font-extrabold font-mono text-[#172033] tracking-wide uppercase">
                        {category.title}
                      </h2>
                      <p className="text-sm text-[#475569] font-sans leading-relaxed mt-0.5">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skill Chips List */}
                  <div className="pt-5 flex flex-wrap gap-2.5 sm:gap-3">
                    {category.items.map((skillName, idx) => (
                      <div
                        key={idx}
                        className="inline-flex items-center gap-2.5 px-4 py-2.5 h-11 sm:h-12 rounded-xl bg-[#F1F5F9] border border-[#CBD5E1] text-[#172033] text-sm sm:text-base font-semibold tracking-tight hover:border-[#7C3AED] hover:bg-[#EDE9FE] hover:-translate-y-0.5 hover:shadow-xs transition-all duration-200 cursor-default group"
                      >
                        <TechIcon
                          name={skillName}
                          className="w-5 h-5 group-hover:scale-110 transition-transform duration-200 flex-shrink-0"
                        />
                        <span>{skillName}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

      </div>
    </PageLayout>
  );
}
