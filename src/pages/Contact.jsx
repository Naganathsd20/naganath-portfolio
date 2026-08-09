import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, User, Tag, FileText } from 'lucide-react';
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
    <PageLayout title="Contact Dashboard">
      <div className="space-y-8 pb-12">
        
        {/* Header */}
        <div className="border-b border-slate-200/80 pb-5">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-purple-600 mb-1">
            <Mail className="w-4 h-4" /> Get In Touch
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Contact Dashboard
          </h1>
          <p className="mt-1 text-sm text-slate-600 font-mono">
            Open for software developer roles, internships, web application projects, and collaborations.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Contact Cards */}
          <div className="space-y-4">
            
            {/* Email */}
            <a href={`mailto:${personalInfo.email}`} className="block group">
              <Card className="p-5 flex items-center gap-4 hover:border-purple-300">
                <div className="w-11 h-11 rounded-xl bg-purple-50 border border-purple-100 text-purple-700 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-100 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-mono text-slate-400 uppercase font-semibold">Direct Email</p>
                  <p className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-purple-700 transition-colors truncate">
                    {personalInfo.email}
                  </p>
                </div>
              </Card>
            </a>

            {/* LinkedIn */}
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="block group">
              <Card className="p-5 flex items-center gap-4 hover:border-purple-300">
                <div className="w-11 h-11 rounded-xl bg-purple-50 border border-purple-100 text-purple-700 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-100 transition-colors">
                  <LinkedinIcon className="w-5 h-5 text-purple-700" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-mono text-slate-400 uppercase font-semibold">LinkedIn Profile</p>
                  <p className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-purple-700 transition-colors truncate">
                    linkedin.com/in/naganath-dharwadkar
                  </p>
                </div>
              </Card>
            </a>

            {/* GitHub */}
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="block group">
              <Card className="p-5 flex items-center gap-4 hover:border-purple-300">
                <div className="w-11 h-11 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-50 group-hover:text-purple-700 transition-colors">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-mono text-slate-400 uppercase font-semibold">GitHub Profile</p>
                  <p className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-purple-700 transition-colors truncate">
                    github.com/naganath-dharwadkar
                  </p>
                </div>
              </Card>
            </a>

            {/* Location */}
            <Card className="p-5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-11 h-11 rounded-xl bg-purple-50 border border-purple-100 text-purple-700 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-mono text-slate-400 uppercase font-semibold">Location</p>
                  <p className="text-sm font-bold text-slate-900 truncate">
                    {personalInfo.locationShort}
                  </p>
                </div>
              </div>
              <Badge variant="emerald" className="flex-shrink-0 text-xs">
                Open to Relocation
              </Badge>
            </Card>

          </div>

          {/* Contact Form */}
          <Card className="p-6 sm:p-8 space-y-6">
            <div className="space-y-1 border-b border-slate-100 pb-3">
              <h2 className="text-lg font-bold text-slate-900">Send a Message</h2>
              <p className="text-xs text-slate-500 font-mono">
                Direct message form for recruiters, project discussions, or inquiries.
              </p>
            </div>

            {status.submitted ? (
              <div className="p-6 text-center space-y-3 bg-emerald-50 rounded-xl border border-emerald-200">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <h3 className="text-base font-bold text-slate-900">Thank you! Message Sent</h3>
                <p className="text-xs text-slate-600">
                  I will review your message and reply promptly.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus({ submitted: false, loading: false })}
                  className="text-xs font-mono text-purple-600 hover:underline pt-2 font-semibold"
                >
                  Send Another Message →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
                
                <div className="space-y-1">
                  <label className="text-xs font-mono font-semibold text-slate-600 uppercase">Your Name</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe / Recruiter Name"
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:border-purple-600 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono font-semibold text-slate-600 uppercase">Email Address</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="recruiter@company.com"
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:border-purple-600 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono font-semibold text-slate-600 uppercase">Subject</label>
                  <div className="relative">
                    <Tag className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Software Developer Opportunity"
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:border-purple-600 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono font-semibold text-slate-600 uppercase">Message</label>
                  <div className="relative">
                    <FileText className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message..."
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:border-purple-600 transition-colors resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={status.loading}
                  className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-xs transition-colors"
                >
                  <Send className="w-4 h-4" />
                  {status.loading ? 'Sending...' : 'Send Message'}
                </button>

              </form>
            )}

          </Card>

        </div>

      </div>
    </PageLayout>
  );
}
