import React from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { Binary, Code2, Cpu, Flame } from 'lucide-react';

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
    <PageLayout title="DSA Practice & Problem Solving">
      <div className="space-y-8 pb-12">
        
        {/* Header */}
        <div className="border-b border-[#334155] pb-5">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#34D399] mb-1">
            <Binary className="w-4 h-4" /> Algorithmic Practice
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] tracking-tight">
            DSA Problem Solving Metrics
          </h1>
          <p className="mt-1 text-sm text-[#94A3B8] font-mono">
            Data Structures & Algorithms problem-solving metrics on LeetCode and GeeksforGeeks.
          </p>
        </div>

        {/* Summary Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 bg-[#172033] border-[#334155] space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#34D399] uppercase">Total Problems Solved</span>
              <Flame className="w-5 h-5 text-[#34D399]" />
            </div>
            <div className="text-3xl font-extrabold text-[#34D399]">350+</div>
            <p className="text-xs text-[#94A3B8] font-mono">Across LeetCode & GeeksforGeeks</p>
          </Card>

          <Card className="p-6 bg-[#172033] border-[#334155] space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#8B5CF6] uppercase">Primary Language</span>
              <Code2 className="w-5 h-5 text-[#8B5CF6]" />
            </div>
            <div className="text-3xl font-extrabold text-[#8B5CF6]">Java</div>
            <p className="text-xs text-[#94A3B8] font-mono">Object-Oriented & Standard Collections</p>
          </Card>

          <Card className="p-6 bg-[#172033] border-[#334155] space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#22D3EE] uppercase">Practice Consistency</span>
              <Cpu className="w-5 h-5 text-[#22D3EE]" />
            </div>
            <div className="text-3xl font-extrabold text-[#22D3EE]">Active</div>
            <p className="text-xs text-[#94A3B8] font-mono">Continuous placement preparation</p>
          </Card>
        </div>

        {/* Topic Distribution Grid */}
        <Card className="p-6 sm:p-8 space-y-6 bg-[#172033] border-[#334155]">
          <h2 className="text-lg font-bold text-[#F8FAFC] border-b border-[#334155] pb-3 flex items-center gap-2">
            <Binary className="w-5 h-5 text-[#8B5CF6]" /> Topic Distribution & Coverage
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {dsaTopics.map((topic, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#1E293B] border border-[#334155] space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-[#F8FAFC]">{topic.name}</h3>
                  <Badge variant="emerald" className="text-[10px]">
                    {topic.count}
                  </Badge>
                </div>
                <p className="text-xs text-[#94A3B8] leading-relaxed font-sans">{topic.desc}</p>
              </div>
            ))}
          </div>
        </Card>

      </div>
    </PageLayout>
  );
}
