import React from 'react';
import { Code2, Terminal, Database, GitBranch, Cpu, Brackets, Layers, Binary, Server } from 'lucide-react';

export function DeveloperBackground() {
  return (
    <div aria-hidden="true" className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none font-mono text-slate-600 max-w-full">
      
      {/* Subtle Grid Dot Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#94A3B8_1px,transparent_1px)] [background-size:28px_28px] sm:[background-size:36px_36px] opacity-[0.18] sm:opacity-[0.22]" />

      {/* Muted Ambient Soft Glows */}
      <div className="absolute -top-32 -left-32 w-72 h-72 sm:w-96 sm:h-96 bg-[#EDE9FE]/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-72 h-72 sm:w-96 sm:h-96 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-purple-100/30 rounded-full blur-3xl pointer-events-none" />

      {/* Low-Opacity Visual Developer Elements Container */}
      <div className="absolute inset-0 p-4 sm:p-12 flex flex-col justify-between opacity-[0.04] sm:opacity-[0.07] text-[10px] sm:text-xs max-w-full overflow-hidden">
        
        {/* Top Row */}
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-[#7C3AED] font-bold">
              <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#7C3AED]" />
              <span className="truncate max-w-[200px] sm:max-w-none">const developer = &#123; stack: ["Java", "MERN"] &#125;;</span>
            </div>
            <p className="text-[10px] sm:text-[11px] text-slate-500 pl-4 sm:pl-5">&lt;script type="developer/portfolio"&gt;</p>
          </div>

          <div className="text-right hidden sm:block space-y-1">
            <div className="flex items-center justify-end gap-1.5 text-indigo-700 font-bold">
              <Terminal className="w-3.5 h-3.5 text-indigo-700" />
              <span>git commit -m "feat: fullstack"</span>
            </div>
            <p className="text-[10px] text-slate-500">01000011 01010011 01000101</p>
          </div>
        </div>

        {/* Upper-Middle Row */}
        <div className="flex justify-around items-center text-slate-700">
          <div className="flex items-center gap-2">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#7C3AED] font-sans">&lt;/&gt;</span>
            <span className="text-xs font-semibold hidden md:inline">React.js • Node.js • Express</span>
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <Database className="w-4 h-4 text-slate-600" />
            <span className="text-xs">SELECT * FROM projects WHERE status = 'Completed';</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-2xl sm:text-3xl font-bold text-slate-600 font-mono">&#123; &#125;</span>
          </div>
        </div>

        {/* Lower-Middle Row */}
        <div className="flex justify-between items-center px-2 sm:px-12 text-slate-700">
          <div className="hidden sm:flex items-center gap-2">
            <GitBranch className="w-4 h-4 text-[#7C3AED]" />
            <span className="text-xs">git push origin main</span>
          </div>

          <div className="flex items-center gap-3">
            <Cpu className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-600" />
            <span className="text-xs hidden md:inline">class Algorithm &#123; void solve() &#123; ... &#125; &#125;</span>
          </div>

          <div className="flex items-center gap-2">
            <Server className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-600" />
            <span className="text-xs font-semibold">REST API • JWT</span>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex justify-between items-end pt-4 sm:pt-8">
          <div className="space-y-0.5 sm:space-y-1">
            <p className="text-[10px] sm:text-[11px] font-bold text-slate-700">[0, 1, 2, 3 ... n]</p>
            <p className="text-[9px] sm:text-[10px] text-slate-500 truncate max-w-[150px] sm:max-w-none">Sahyadri College of Engineering & Management</p>
          </div>

          <div className="text-right space-y-0.5 sm:space-y-1">
            <p className="text-[10px] sm:text-[11px] font-bold text-[#7C3AED]">&#123; ...props &#125;</p>
            <p className="text-[9px] sm:text-[10px] text-slate-500">01100100 01100101 01110110</p>
          </div>
        </div>

      </div>

    </div>
  );
}
