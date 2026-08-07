import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, User, Tag, FileText, Check } from 'lucide-react';
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
    }, 800);
  };

  return (
    <PageLayout title="Contact — Naganath S Dharwadkar">
      <div className="min-h-screen bg-[#0B1120] text-[#F8FAFC]">
        
        {/* Title & Subtitle Section */}
        <section className="pt-12 pb-8 sm:pt-16 sm:pb-12 border-b border-[#334155]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#FFFFFF]">
              Contact
            </h1>
            <p className="mt-3 text-[18px] text-[#E2E8F0] font-medium leading-[1.8] tracking-[0.2px] max-w-3xl">
              I'd love to connect regarding software development opportunities, internships, collaborations, or technical discussions. Feel free to reach out anytime.
            </p>
          </div>
        </section>

        {/* Main Two-Column Layout Section */}
        <section className="py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              
              {/* LEFT SIDE: Clickable Modern Contact Cards */}
              <div className="space-y-4">
                
                {/* 1. Email Card */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="block group"
                >
                  <Card className="p-5 flex items-center gap-4 bg-[#1E293B] border-[#334155] group-hover:border-[#22D3EE]/60 transition-all duration-300 rounded-2xl shadow-lg">
                    <div className="w-12 h-12 rounded-xl bg-[#111827] border border-[#334155] group-hover:border-[#22D3EE]/40 text-[#22D3EE] flex items-center justify-center flex-shrink-0 transition-colors">
                      <Mail className="w-5 h-5 text-[#22D3EE]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-mono text-[#94A3B8] uppercase font-semibold">Email</p>
                      <p className="text-base font-bold text-[#F8FAFC] group-hover:text-[#22D3EE] transition-colors truncate">
                        {personalInfo.email}
                      </p>
                    </div>
                  </Card>
                </a>

                {/* 2. Phone Card */}
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="block group"
                >
                  <Card className="p-5 flex items-center gap-4 bg-[#1E293B] border-[#334155] group-hover:border-[#22D3EE]/60 transition-all duration-300 rounded-2xl shadow-lg">
                    <div className="w-12 h-12 rounded-xl bg-[#111827] border border-[#334155] group-hover:border-[#22D3EE]/40 text-[#22D3EE] flex items-center justify-center flex-shrink-0 transition-colors">
                      <Phone className="w-5 h-5 text-[#22D3EE]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-mono text-[#94A3B8] uppercase font-semibold">Phone</p>
                      <p className="text-base font-bold text-[#F8FAFC] group-hover:text-[#22D3EE] transition-colors truncate">
                        {personalInfo.phone}
                      </p>
                    </div>
                  </Card>
                </a>

                {/* 3. LinkedIn Card */}
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <Card className="p-5 flex items-center gap-4 bg-[#1E293B] border-[#334155] group-hover:border-[#22D3EE]/60 transition-all duration-300 rounded-2xl shadow-lg">
                    <div className="w-12 h-12 rounded-xl bg-[#111827] border border-[#334155] group-hover:border-[#22D3EE]/40 text-[#22D3EE] flex items-center justify-center flex-shrink-0 transition-colors">
                      <LinkedinIcon className="w-5 h-5 text-[#22D3EE]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-mono text-[#94A3B8] uppercase font-semibold">LinkedIn</p>
                      <p className="text-base font-bold text-[#F8FAFC] group-hover:text-[#22D3EE] transition-colors truncate">
                        LinkedIn Profile
                      </p>
                    </div>
                  </Card>
                </a>

                {/* 4. GitHub Card */}
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <Card className="p-5 flex items-center gap-4 bg-[#1E293B] border-[#334155] group-hover:border-[#22D3EE]/60 transition-all duration-300 rounded-2xl shadow-lg">
                    <div className="w-12 h-12 rounded-xl bg-[#111827] border border-[#334155] group-hover:border-[#22D3EE]/40 text-[#22D3EE] flex items-center justify-center flex-shrink-0 transition-colors">
                      <GithubIcon className="w-5 h-5 text-[#22D3EE]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-mono text-[#94A3B8] uppercase font-semibold">GitHub</p>
                      <p className="text-base font-bold text-[#F8FAFC] group-hover:text-[#22D3EE] transition-colors truncate">
                        GitHub Profile
                      </p>
                    </div>
                  </Card>
                </a>

                {/* 5. Location Card (Simple Card, No Map Embed) */}
                <Card className="p-5 flex items-center justify-between gap-4 bg-[#1E293B] border-[#334155] rounded-2xl shadow-lg">
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="w-12 h-12 rounded-xl bg-[#111827] border border-[#334155] text-[#22D3EE] flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[#22D3EE]" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-mono text-[#94A3B8] uppercase font-semibold">Location</p>
                      <p className="text-base font-bold text-[#F8FAFC] truncate">
                        Dharwad, Karnataka, India
                      </p>
                    </div>
                  </div>
                  <Badge variant="success" className="flex-shrink-0 font-mono text-xs">
                    Open to Relocation ✅
                  </Badge>
                </Card>

              </div>

              {/* RIGHT SIDE: Professional Contact Form */}
              <Card className="p-6 sm:p-8 bg-[#1E293B] border-[#334155] rounded-2xl shadow-xl space-y-6">
                
                {/* Form Heading & Subtitle */}
                <div className="space-y-2 border-b border-[#334155] pb-4">
                  <h2 className="text-2xl font-bold text-[#F8FAFC]">
                    Let's Connect
                  </h2>
                  <p className="text-sm text-[#94A3B8] leading-relaxed">
                    If you have an opportunity, project, or would like to connect, feel free to send me a message. I'll get back to you as soon as possible.
                  </p>
                </div>

                {/* Success Message Feedback */}
                {status.submitted ? (
                  <div className="p-8 text-center space-y-4 bg-[#10B981]/10 rounded-2xl border border-[#10B981]/30">
                    <div className="w-14 h-14 rounded-2xl bg-[#10B981]/20 text-[#10B981] flex items-center justify-center mx-auto border border-[#10B981]/30">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#F8FAFC]">✅ Thank you!</h3>
                    <p className="text-sm text-[#CBD5E1] max-w-sm mx-auto leading-relaxed">
                      Your message has been sent successfully.<br />I'll get back to you as soon as possible.
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus({ submitted: false, loading: false })}
                      className="text-xs font-mono text-[#22D3EE] hover:underline pt-2 inline-block font-semibold"
                    >
                      Send Another Message →
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    {/* Your Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-[#CBD5E1] font-medium uppercase">
                        Your Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#94A3B8]">
                          <User className="w-4 h-4 text-[#22D3EE]" />
                        </div>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. John Doe / Hiring Manager"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#111827] border border-[#334155] text-[#F8FAFC] text-sm focus:outline-none focus:border-[#22D3EE] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Email Address */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-[#CBD5E1] font-medium uppercase">
                        Email Address
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#94A3B8]">
                          <Mail className="w-4 h-4 text-[#22D3EE]" />
                        </div>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="e.g. recruiter@company.com"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#111827] border border-[#334155] text-[#F8FAFC] text-sm focus:outline-none focus:border-[#22D3EE] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-[#CBD5E1] font-medium uppercase">
                        Subject
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#94A3B8]">
                          <Tag className="w-4 h-4 text-[#22D3EE]" />
                        </div>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="e.g. Software Engineering Opportunity"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#111827] border border-[#334155] text-[#F8FAFC] text-sm focus:outline-none focus:border-[#22D3EE] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-[#CBD5E1] font-medium uppercase">
                        Message
                      </label>
                      <div className="relative">
                        <div className="absolute top-3 left-3.5 pointer-events-none text-[#94A3B8]">
                          <FileText className="w-4 h-4 text-[#22D3EE]" />
                        </div>
                        <textarea
                          name="message"
                          required
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Write your message here..."
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#111827] border border-[#334155] text-[#F8FAFC] text-sm focus:outline-none focus:border-[#22D3EE] transition-colors resize-none"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status.loading}
                      className="w-full h-[52px] rounded-xl bg-[#22D3EE] hover:bg-[#06B6D4] text-[#0B1120] font-bold text-sm font-sans flex items-center justify-center gap-2 shadow-lg transition-all duration-300"
                    >
                      <Send className="w-4 h-4 text-[#0B1120]" />
                      {status.loading ? 'Sending Message...' : 'Send Message'}
                    </button>

                  </form>
                )}

              </Card>

            </div>
          </div>
        </section>

      </div>
    </PageLayout>
  );
}
