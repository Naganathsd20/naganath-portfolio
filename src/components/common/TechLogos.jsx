import React from 'react';
import {
  Code2,
  FileCode,
  Terminal,
  Cpu,
  Layout,
  Palette,
  Layers,
  Server,
  Database,
  GitBranch,
  Wrench,
  Send,
  Compass,
  Sparkles,
  Grid
} from 'lucide-react';
import { GithubIcon } from './Icons';

export function TechIcon({ name, className = "w-6 h-6 text-[#22D3EE]" }) {
  switch (name) {
    case 'Java':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M4.5 18.5c2.5 1.5 6.5 1.8 10 .5.8-.3 2.5-1.2 2-1.5s-2 .2-2.8.4c-3.2.7-7.2.4-9.2-.8-.4-.2-.8-.2-0 1.4zm-1-4.2c3 1.8 8.2 2 12.2.5 1-.4 2.8-1.5 2.2-1.8s-2.4.3-3.4.6c-4 .9-8.8.6-11.2-.8-.5-.3-1-.3.2 1.5zm11.2-5.5c.8.9-.3 2.2-1.5 3-1.8 1.2-4.2 1.8-6.8 1.8-2 0-3.5-.3-4.5-.8-.3-.2.2-.5.5-.4 3 .4 6.8.2 9.2-1 .8-.4 1.8-1.2 1.5-1.5-.2-.2-.8.1-1.2.2-1.8.5-3.8.7-5.8.6-2.5-.1-4-.6-4.5-1.2-.2-.2.2-.4.6-.3 3.5.5 8-.1 10.5-1.5 1-.5 2.2-1.2 1.8-1.5-.2-.2-1 .1-1.5.2-2.5.6-5.2.8-7.8.6-2.2-.2-3.8-.8-4.2-1.5-.2-.2.2-.4.6-.3 3.8.7 8.5 0 11.2-1.8 1.2-.8.8-1.8.2-2.2-.5-.3-1.8.2-2.5.5-2.2.8-4.8 1.2-7.2 1-2.2-.2-3.5-.8-3.8-1.5-.2-.3.4-.4.8-.3 3.8.5 8.2-.2 10.8-2 1.2-.8 1.5-1.5 1.2-1.8-.4-.4-1.5.1-2.2.4-2.2.8-4.8 1.2-7.2 1-2-.2-3.2-.8-3.5-1.4-.2-.3.3-.4.8-.3 3.8.5 8.2-.2 10.8-2 1.2-.8 1.2-1.5.8-1.8z" />
        </svg>
      );
    case 'JavaScript':
      return (
        <span className="font-extrabold font-mono text-sm bg-[#22D3EE]/20 text-[#22D3EE] px-1.5 py-0.5 rounded border border-[#22D3EE]/40">
          JS
        </span>
      );
    case 'Python':
      return <Terminal className={className} />;
    case 'C':
      return <Cpu className={className} />;
    case 'HTML5':
      return <Layout className={className} />;
    case 'CSS3':
      return <Palette className={className} />;
    case 'React':
      return <Code2 className={className} />;
    case 'Tailwind CSS':
      return <Layers className={className} />;
    case 'Bootstrap':
      return <Grid className={className} />;
    case 'Node.js':
    case 'Express.js':
      return <Server className={className} />;
    case 'MongoDB':
    case 'MySQL':
      return <Database className={className} />;
    case 'Git':
      return <GitBranch className={className} />;
    case 'GitHub':
      return <GithubIcon className={className} />;
    case 'VS Code':
      return <Wrench className={className} />;
    case 'Postman':
      return <Send className={className} />;
    case 'MongoDB Compass':
      return <Compass className={className} />;
    case 'Data Structures & Algorithms':
      return <Cpu className={className} />;
    case 'AI Fundamentals':
      return <Sparkles className={className} />;
    default:
      return <Code2 className={className} />;
  }
}
