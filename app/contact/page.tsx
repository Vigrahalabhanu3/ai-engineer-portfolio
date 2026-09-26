"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate sending message
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 800);
  };

  return (
    <main className="py-16 md:py-24 flex-1">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold mb-4">
            Get In Touch
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Let&apos;s Build Something Great
          </h1>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Have a project in mind, an engineering opportunity, or just want to connect? Send a message and I&apos;ll get back to you promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          
          {/* Contact Info & Details (2 Cols) */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center justify-center text-lg mb-4">
                ✉️
              </div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-1">
                Email
              </h3>
              <p className="text-base font-bold text-white mb-2">
                bhanu.prasad@example.com
              </p>
              <a
                href="mailto:bhanu.prasad@example.com"
                className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                Send an email directly →
              </a>
            </div>

            {/* Location & Availability Card */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 flex items-center justify-center text-lg mb-4">
                📍
              </div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-1">
                Location &amp; Work Type
              </h3>
              <p className="text-base font-bold text-white mb-1">
                India (IST / UTC+5:30)
              </p>
              <p className="text-xs text-slate-400">
                Available for Remote, Hybrid &amp; Onsite opportunities worldwide.
              </p>
            </div>

            {/* Social Links Card */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">
                Social Profiles
              </h3>
              <div className="flex flex-col gap-3">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-indigo-500/40 text-slate-300 hover:text-white transition-all text-sm font-medium"
                >
                  <span className="flex items-center gap-2">
                    <span>GitHub</span>
                  </span>
                  <span className="text-xs text-slate-500">github.com/yourusername</span>
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-indigo-500/40 text-slate-300 hover:text-white transition-all text-sm font-medium"
                >
                  <span className="flex items-center gap-2">
                    <span>LinkedIn</span>
                  </span>
                  <span className="text-xs text-slate-500">linkedin.com/in/yourusername</span>
                </a>
              </div>
            </div>

          </div>

          {/* Interactive Contact Form (3 Cols) */}
          <div className="lg:col-span-3 rounded-3xl bg-slate-900/70 border border-slate-800/90 p-8 sm:p-10 backdrop-blur-xl shadow-2xl">
            
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto text-3xl font-bold border border-emerald-500/30">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
                <p className="text-slate-400 text-sm max-w-md mx-auto">
                  Thank you for reaching out. I will review your message and reply as soon as possible.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-white mb-2">Send a Direct Message</h2>
                  <p className="text-xs text-slate-400">Fill out the fields below and I will respond to your email.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Your Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    placeholder="Project Inquiry / Job Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project, timeline, or query..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-200 disabled:opacity-50"
                >
                  {loading ? "Sending Message..." : "Send Message →"}
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </main>
  );
}