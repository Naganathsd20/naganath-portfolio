import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, User, Tag, FileText, Sparkles, ArrowUpRight } from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { GithubIcon, LinkedinIcon } from '../components/common/Icons';
import { personalInfo } from '../data/portfolioData';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitted: false,
    loading: false
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus({ submitted: false, loading: true });

    setTimeout(() => {
      setStatus({ submitted: true, loading: false });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 600);
  };

  return (
    <PageLayout title="Contact Me">
      <div className="space-y-8 pb-12">
        
        {/* Header */}
        <div className="border-b border-[#CBD5E1] pb-5">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#7C3AED] mb-1">
            <Mail className="w-4 h-4 text-[#7C3AED]" /> Get In Touch
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#172033] tracking-tight">
            Let's Build Something Together.
          </h1>
          <p className="mt-1 text-sm text-[#475569] font-mono">
            Open for software developer internships, full-time engineering opportunities, and web application projects.
          </p>
        </div>

        {/* Dark Contrast CTA Banner (#273449 bg) */}
        <div className="rounded-2xl bg-[#273449] text-white p-6 sm:p-8 border border-[#334155] shadow-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#7C3AED]/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#7C3AED]/30 text-purple-200 border border-[#7C3AED]/50 text-xs font-mono font-bold">
                <Sparkles className="w-3.5 h-3.5 text-purple-300" /> Open for Opportunities
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Interested in working together or hiring?
              </h2>
              <p className="text-sm text-slate-300 font-sans max-w-xl">
                Feel free to send a direct message or reach out through email/LinkedIn. I respond promptly to all software developer role inquiries.
              </p>
            </div>

            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-sm shadow-xs transition-colors flex-shrink-0"
            >
              <Mail className="w-4 h-4" /> Email Me Directly
            </a>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <a href={`mailto:${personalInfo.email}`} className="block group">
              <Card className="p-5 flex items-center gap-4 bg-white border-[#CBD5E1] hover:border-[#7C3AED]">
                <div className="w-11 h-11 rounded-xl bg-[#EDE9FE] border border-[#7C3AED]/30 text-[#7C3AED] flex items-center justify-center flex-shrink-0 group-hover:bg-purple-100 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-mono text-[#475569] uppercase font-bold">Direct Email</p>
                  <p className="text-sm sm:text-base font-bold text-[#172033] group-hover:text-[#7C3AED] transition-colors truncate">
                    {personalInfo.email}
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#64748B] group-hover:text-[#7C3AED] transition-colors" />
              </Card>
            </a>

            {/* LinkedIn Card */}
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="block group">
              <Card className="p-5 flex items-center gap-4 bg-white border-[#CBD5E1] hover:border-[#7C3AED]">
                <div className="w-11 h-11 rounded-xl bg-[#EDE9FE] border border-[#7C3AED]/30 text-[#7C3AED] flex items-center justify-center flex-shrink-0 group-hover:bg-purple-100 transition-colors">
                  <LinkedinIcon className="w-5 h-5 text-[#7C3AED]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-mono text-[#475569] uppercase font-bold">LinkedIn Profile</p>
                  <p className="text-sm sm:text-base font-bold text-[#172033] group-hover:text-[#7C3AED] transition-colors truncate">
                    linkedin.com/in/naganath-dharwadkar
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#64748B] group-hover:text-[#7C3AED] transition-colors" />
              </Card>
            </a>

            {/* GitHub Card */}
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="block group">
              <Card className="p-5 flex items-center gap-4 bg-white border-[#CBD5E1] hover:border-[#7C3AED]">
                <div className="w-11 h-11 rounded-xl bg-cyan-50 border border-cyan-200 text-[#0891B2] flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-100 transition-colors">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-mono text-[#475569] uppercase font-bold">GitHub Profile</p>
                  <p className="text-sm sm:text-base font-bold text-[#172033] group-hover:text-[#7C3AED] transition-colors truncate">
                    github.com/naganath-dharwadkar
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#64748B] group-hover:text-[#7C3AED] transition-colors" />
              </Card>
            </a>

            {/* Location Card */}
            <Card className="p-5 flex items-center justify-between gap-4 bg-white border-[#CBD5E1]">
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-11 h-11 rounded-xl bg-[#EDE9FE] border border-[#7C3AED]/30 text-[#7C3AED] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-mono text-[#475569] uppercase font-bold">Location</p>
                  <p className="text-sm font-bold text-[#172033] truncate">
                    {personalInfo.locationShort}
                  </p>
                </div>
              </div>
              <Badge variant="emerald" className="flex-shrink-0 text-xs font-mono font-semibold">
                Open to Relocation
              </Badge>
            </Card>

          </div>

          {/* RIGHT: Message Form */}
          <div className="lg:col-span-7">
            <Card className="p-6 sm:p-8 space-y-6 bg-white border-[#CBD5E1]">
              <div className="space-y-1 border-b border-[#CBD5E1] pb-3">
                <h2 className="text-xl font-extrabold text-[#172033]">Send a Direct Message</h2>
                <p className="text-xs text-[#475569] font-mono">
                  Message form for recruiters, project opportunities, or general inquiries.
                </p>
              </div>

              {status.submitted ? (
                <div className="p-6 text-center space-y-3 bg-emerald-50 rounded-xl border border-emerald-200">
                  <CheckCircle2 className="w-8 h-8 text-[#059669] mx-auto" />
                  <h3 className="text-base font-bold text-[#172033]">Thank you! Message Sent</h3>
                  <p className="text-xs text-[#475569] font-sans">
                    I will review your message and respond as soon as possible.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus({ submitted: false, loading: false })}
                    className="text-xs font-mono text-[#7C3AED] hover:underline pt-2 font-bold"
                  >
                    Send Another Message →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
                  
                  <div className="space-y-1">
                    <label className="text-xs font-mono font-bold text-[#475569] uppercase">Your Name</label>
                    <div className="relative">
                      <User className="w-4 h-4 text-[#64748B] absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe / Recruiter Name"
                        className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-[#CBD5E1] bg-[#F1F5F9] text-[#172033] text-sm focus:outline-none focus:border-[#7C3AED] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono font-bold text-[#475569] uppercase">Email Address</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-[#64748B] absolute left-3.5 top-3.5" />
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="recruiter@company.com"
                        className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-[#CBD5E1] bg-[#F1F5F9] text-[#172033] text-sm focus:outline-none focus:border-[#7C3AED] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono font-bold text-[#475569] uppercase">Subject</label>
                    <div className="relative">
                      <Tag className="w-4 h-4 text-[#64748B] absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Software Developer Opportunity / Inquiry"
                        className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-[#CBD5E1] bg-[#F1F5F9] text-[#172033] text-sm focus:outline-none focus:border-[#7C3AED] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono font-bold text-[#475569] uppercase">Message</label>
                    <div className="relative">
                      <FileText className="w-4 h-4 text-[#64748B] absolute left-3.5 top-3.5" />
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Write your message..."
                        className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-[#CBD5E1] bg-[#F1F5F9] text-[#172033] text-sm focus:outline-none focus:border-[#7C3AED] focus:bg-white transition-colors resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={status.loading}
                    className="w-full py-3 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-xs transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    {status.loading ? 'Sending...' : 'Send Message'}
                  </button>

                </form>
              )}

            </Card>
          </div>

        </div>

      </div>
    </PageLayout>
  );
}
