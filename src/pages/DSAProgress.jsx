import React from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { Binary, CheckCircle2, Code2, Cpu, Flame, ExternalLink } from 'lucide-react';

export function DSAProgress() {
  const dsaTopics = [
    { name: "Arrays & Strings", count: "100+ Problems", desc: "Two-Pointers, Sliding Window, Prefix Sum" },
    { name: "Linked Lists", count: "40+ Problems", desc: "Singly, Doubly, Fast & Slow Pointers, Cycles" },
    { name: "Stacks & Queues", count: "45+ Problems", desc: "Monotonic Stack, Expression Evaluation" },
    { name: "Binary Trees & BST", count: "55+ Problems", desc: "Traversals, DFS, BFS, Tree Properties" },
    { name: "Searching & Sorting", count: "50+ Problems", desc: "Binary Search Variations, Quick/Merge Sort" },
    { name: "Recursion & Backtracking", count: "30+ Problems", desc: "Subsets, Permutations, Matrix Traversals" },
  ];

  return (
    <PageLayout title="DSA Progress Dashboard">
      <div className="space-y-8 pb-12">
        
        {/* Header */}
        <div className="border-b border-slate-200/80 pb-5">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 mb-1">
            <Binary className="w-4 h-4" /> Algorithmic Problem Solving
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            DSA Progress Dashboard
          </h1>
          <p className="mt-1 text-sm text-slate-600 font-mono">
            Data Structures & Algorithms problem-solving metrics on LeetCode and GeeksforGeeks.
          </p>
        </div>

        {/* Top Summary Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 bg-emerald-50/50 border-emerald-200/70 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-emerald-700 uppercase">Total Problems Solved</span>
              <Flame className="w-5 h-5 text-emerald-600" />
            </div>
            <div className="text-3xl font-extrabold text-emerald-900">350+</div>
            <p className="text-xs text-emerald-700 font-mono">Across LeetCode & GeeksforGeeks</p>
          </Card>

          <Card className="p-6 bg-purple-50/50 border-purple-200/70 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-purple-700 uppercase">Primary Language</span>
              <Code2 className="w-5 h-5 text-purple-600" />
            </div>
            <div className="text-3xl font-extrabold text-purple-900">Java</div>
            <p className="text-xs text-purple-700 font-mono">Object-Oriented & Standard Collections</p>
          </Card>

          <Card className="p-6 bg-blue-50/50 border-blue-200/70 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-blue-700 uppercase">Practice Consistency</span>
              <Cpu className="w-5 h-5 text-blue-600" />
            </div>
            <div className="text-3xl font-extrabold text-blue-900">Active</div>
            <p className="text-xs text-blue-700 font-mono">Continuous placement preparation</p>
          </Card>
        </div>

        {/* Topic Distribution Grid */}
        <Card className="p-6 sm:p-8 space-y-6">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
            <Binary className="w-5 h-5 text-purple-600" /> Topic Distribution & Coverage
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {dsaTopics.map((topic, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-slate-900">{topic.name}</h3>
                  <Badge variant="emerald" className="text-[10px]">
                    {topic.count}
                  </Badge>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">{topic.desc}</p>
              </div>
            ))}
          </div>
        </Card>

      </div>
    </PageLayout>
  );
}
