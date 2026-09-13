import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Terminal, Mail, Lock } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { DeveloperBackground } from '../components/layout/DeveloperBackground';

export function Login() {
  const navigate = useNavigate();

  const handleEnter = (e) => {
    e?.preventDefault();
    navigate('/about');
  };

  return (
    <div className="min-h-screen bg-[#E8EDF5] text-[#172033] flex flex-col justify-center items-center p-4 sm:p-6 relative overflow-hidden select-none font-sans antialiased">
      <DeveloperBackground />

      {/* Main Developer Workspace Card */}
      <motion.div
        initial={{ opacity: 0, y: 15, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="w-full max-w-lg z-10 space-y-6 text-center"
      >
        <div className="bg-white/95 backdrop-blur-md border border-[#CBD5E1] rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 relative overflow-hidden">
          
          {/* Header Info */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDE9FE] text-[#7C3AED] border border-[#7C3AED]/30 text-xs font-mono font-bold">
              <Code2 className="w-3.5 h-3.5 text-[#7C3AED]" />
              <span>Developer Portfolio</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#172033] uppercase font-sans">
              {personalInfo.name}
            </h1>

            <p className="text-xs sm:text-sm font-bold text-[#7C3AED] font-mono tracking-wide">
              Software Developer • Full-Stack Developer • CS Student
            </p>

            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed max-w-md mx-auto pt-1 font-sans">
              Welcome to my developer workspace. Explore my projects, experience, skills, achievements, and resume.
            </p>
          </div>

          {/* Demo Portfolio Access Section */}
          <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-2xl p-4 space-y-3 text-left">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#475569] flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-[#7C3AED]" />
              <span>Demo Portfolio Access</span>
            </div>

            <form onSubmit={handleEnter} className="space-y-2.5">
              <div className="space-y-1">
                <label className="text-[11px] font-mono font-semibold text-[#64748B]">Email</label>
                <div className="relative">
                  <Mail className="w-3.5 h-3.5 text-[#7C3AED] absolute left-3 top-3" />
                  <input
                    type="email"
                    readOnly
                    value="welcome@gmail.com"
                    className="w-full pl-9 pr-3 py-2 rounded-xl border border-[#CBD5E1] bg-[#F1F5F9] text-[#172033] text-xs font-mono focus:outline-none cursor-default"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono font-semibold text-[#64748B]">Passcode</label>
                <div className="relative">
                  <Lock className="w-3.5 h-3.5 text-[#7C3AED] absolute left-3 top-3" />
                  <input
                    type="text"
                    readOnly
                    value="••••••••••••"
                    className="w-full pl-9 pr-3 py-2 rounded-xl border border-[#CBD5E1] bg-[#F1F5F9] text-[#172033] text-xs font-mono focus:outline-none cursor-default"
                  />
                </div>
              </div>

              {/* Enter Button */}
              <button
                type="submit"
                className="w-full mt-3 py-3 px-6 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-sm tracking-wide shadow-md transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Enter Portfolio</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Sub-text Notes */}
          <div className="space-y-1 text-center">
            <p className="text-xs text-[#475569] font-sans font-medium">
              Click 'Enter Portfolio' to explore my portfolio.
            </p>
            <p className="text-[11px] text-[#64748B] font-mono">
              Demo access • No registration required
            </p>
          </div>

        </div>
      </motion.div>
    </div>
  );
}



