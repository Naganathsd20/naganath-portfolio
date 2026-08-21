import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Sparkles, ShieldCheck, Terminal, Lock } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export function Login() {
  const navigate = useNavigate();
  const [email] = useState('recruiter@company.com');
  const [password] = useState('••••••••••••');

  const handleEnterPortfolio = (e) => {
    e.preventDefault();
    navigate('/about');
  };

  return (
    <div className="min-h-screen bg-[#E8EDF5] text-[#172033] flex flex-col justify-center items-center p-4 sm:p-6 relative overflow-hidden select-none font-sans antialiased">
      
      {/* Background Gradients */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#EDE9FE] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-cyan-100 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container */}
      <motion.div
        initial={{ opacity: 0, y: 15, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="w-full max-w-lg z-10 space-y-6"
      >
        
        {/* Header Branding */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDE9FE] text-[#7C3AED] border border-[#7C3AED]/30 text-xs font-mono font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#7C3AED]" />
            <span>Developer Workspace Platform</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#172033] uppercase font-mono">
            {personalInfo.name}
          </h1>

          <p className="text-sm font-bold text-[#7C3AED] font-mono tracking-wide">
            Software Developer • Full-Stack Developer • CS Student
          </p>

          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed max-w-md mx-auto font-sans">
            Welcome to my digital workspace. Explore my full-stack MERN & AI projects, engineering experience, DSA progress, and resume.
          </p>
        </div>

        {/* Portfolio Entry Card (#FFFFFF bg) */}
        <div className="bg-white border border-[#CBD5E1] rounded-2xl p-6 sm:p-8 shadow-xl space-y-6 relative overflow-hidden">
          
          <div className="flex items-center justify-between border-b border-[#CBD5E1] pb-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#EDE9FE] text-[#7C3AED] border border-[#7C3AED]/30 flex items-center justify-center font-bold text-sm">
                <Terminal className="w-5 h-5 text-[#7C3AED]" />
              </div>
              <div>
                <h2 className="text-base font-bold text-[#172033]">Portfolio Access Portal</h2>
                <p className="text-[11px] font-mono text-[#059669] flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#059669] animate-pulse"></span>
                  Credentials Auto-Filled for Guest Recruiter
                </p>
              </div>
            </div>
            <ShieldCheck className="w-5 h-5 text-[#7C3AED]" />
          </div>

          <form onSubmit={handleEnterPortfolio} className="space-y-4 text-left">
            
            {/* Auto-filled Email */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono font-bold text-[#475569] uppercase flex items-center justify-between">
                <span>Guest Email</span>
                <span className="text-[10px] text-[#7C3AED] font-normal">Pre-authenticated</span>
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-[#7C3AED] absolute left-3.5 top-3.5" />
                <input
                  type="email"
                  readOnly
                  value={email}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#CBD5E1] bg-[#F1F5F9] text-[#172033] text-sm font-mono focus:outline-none cursor-default"
                />
              </div>
            </div>

            {/* Auto-filled Password */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono font-bold text-[#475569] uppercase flex items-center justify-between">
                <span>Passcode</span>
                <span className="text-[10px] text-[#7C3AED] font-normal">Auto-filled</span>
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-[#7C3AED] absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  readOnly
                  value={password}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#CBD5E1] bg-[#F1F5F9] text-[#172033] text-sm font-mono focus:outline-none cursor-default"
                />
              </div>
            </div>

            {/* Enter Portfolio Action Button */}
            <button
              type="submit"
              className="w-full mt-2 py-3.5 px-6 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-sm tracking-wide shadow-md transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>ENTER PORTFOLIO</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </button>

          </form>

          {/* Quick Notice */}
          <p className="text-[11px] text-center text-[#475569] font-mono">
            No registration required • One-click recruiter access
          </p>

        </div>

        {/* Footer info */}
        <div className="text-center text-xs text-[#475569] font-mono">
          Naganath S Dharwadkar • CS Engineering Student (Sahyadri College)
        </div>

      </motion.div>
    </div>
  );
}
