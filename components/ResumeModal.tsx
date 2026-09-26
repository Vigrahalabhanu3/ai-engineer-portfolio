"use client";

import React, { useState } from "react";
import { Spinner } from "./Loader";

export default function ResumeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      // Create a dummy / formatted text representation or trigger printable view
      const resumeContent = `BHANU PRASAD - Full Stack & AI Engineer\n\nSkills: Next.js, React, TypeScript, Java, Spring Boot, AI & LLMs, PostgreSQL, Docker\nExperience: Full Stack & AI Developer (2024-Present), Intern (2023-2024)\nProjects: Milk Production Tracker, AI Mock Interview Platform, Taskify\nContact: bhanu.prasad@example.com`;
      const blob = new Blob([resumeContent], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Bhanu_Prasad_Resume.txt";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }, 1000);
  };

  const handleCopySummary = () => {
    navigator.clipboard.writeText(
      "Bhanu Prasad - Full Stack & AI Engineer | Stack: Next.js, TypeScript, Java, Spring Boot, AI/LLMs | Contact: bhanu.prasad@example.com"
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-700 dark:text-slate-200 bg-white/90 dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/80 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 inline-flex items-center gap-2"
      >
        <svg className="w-4 h-4 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <span>View Resume</span>
      </button>

      {/* Modal Dialog */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-2xl max-h-[90vh] flex flex-col rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden animate-fade-in-up">
            
            {/* Modal Header */}
            <div className="px-6 py-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/80 dark:bg-slate-950/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white flex items-center justify-center font-bold text-sm shadow-md">
                  BP
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    Bhanu Prasad &mdash; Resume
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Full Stack Developer &amp; AI Engineer
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="px-6 py-6 overflow-y-auto space-y-6 text-sm">
              {/* Summary */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
                  Executive Summary
                </h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs sm:text-sm">
                  Full Stack and AI Engineer specializing in Next.js, React, TypeScript, Java, and Spring Boot. Proven experience delivering production-ready web platforms, high-performance database architectures, and generative AI solutions.
                </p>
              </div>

              {/* Core Skills */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
                  Core Competencies
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {["Next.js", "React 19", "TypeScript", "Java", "Spring Boot", "Tailwind CSS", "Gemini AI", "PostgreSQL", "MySQL", "REST APIs", "Docker", "Git"].map((s) => (
                    <span key={s} className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Highlights */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
                  Key Projects &amp; Milestones
                </h4>
                <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-500 font-bold">•</span>
                    <span><strong>Milk Production Tracker:</strong> Comprehensive management platform for dairy yield, automated pricing algorithms, and farmer billing.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-500 font-bold">•</span>
                    <span><strong>AI Mock Interview Platform:</strong> Real-time technical interview simulator with automated audio/text scoring and resume parsing.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-500 font-bold">•</span>
                    <span><strong>Taskify:</strong> Collaborative full-stack task management application with Kanban boards and activity feeds.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Modal Actions Footer */}
            <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 bg-slate-50/80 dark:bg-slate-950/50">
              <button
                type="button"
                onClick={handleCopySummary}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-200/80 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors flex items-center gap-1.5"
              >
                {copied ? (
                  <>
                    <span className="text-emerald-500">✓</span>
                    <span>Copied Summary!</span>
                  </>
                ) : (
                  <>
                    <span>📋</span>
                    <span>Copy Summary</span>
                  </>
                )}
              </button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleDownload}
                  disabled={downloading}
                  className="px-5 py-2 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md transition-all flex items-center gap-2 disabled:opacity-50"
                >
                  {downloading ? (
                    <>
                      <Spinner size="xs" className="text-white" />
                      <span>Preparing Download...</span>
                    </>
                  ) : (
                    <>
                      <span>Download Resume</span>
                      <span>↓</span>
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
