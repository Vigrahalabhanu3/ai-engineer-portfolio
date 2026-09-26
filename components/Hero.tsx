import Link from "next/link";
import ResumeModal from "./ResumeModal";
import ProfileAvatar from "./ProfileAvatar";
import TypewriterRole from "./TypewriterRole";

export default function Hero() {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Hero Grid: Left Content, Right Animated Avatar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16">
          
          {/* Left / Main Text Column (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md animate-fade-in-down shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Available for New Opportunities</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4 leading-tight animate-fade-in-up">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-gradient-x">
                Bhanu Prasad
              </span>
            </h1>

            {/* Dynamic Typewriter Role */}
            <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-300 mb-6 animate-fade-in-up delay-100 flex items-center gap-2">
              <TypewriterRole />
            </div>

            {/* Description */}
            <p className="max-w-xl text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed animate-fade-in-up delay-200">
              I build scalable full-stack web applications and intelligent digital experiences 
              using <span className="text-slate-900 dark:text-slate-200 font-semibold">Java, Spring Boot, React, Next.js, TypeScript</span>, and modern AI models.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 animate-fade-in-up delay-300">
              <Link
                href="/projects"
                className="px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 hover:from-indigo-500 hover:via-purple-500 hover:to-indigo-600 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-200 group flex items-center gap-2"
              >
                <span>Explore Projects</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <ResumeModal />
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 shadow-sm hover:-translate-y-0.5 transition-all duration-200"
              >
                Contact Me
              </Link>
            </div>

          </div>

          {/* Right Column: Animated 3D Portrait Avatar (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center animate-fade-in delay-200">
            <ProfileAvatar />
          </div>

        </div>

        {/* Stat Highlights Cards */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 text-left animate-fade-in-up delay-400">
          <div className="p-4 sm:p-5 rounded-2xl bg-white/80 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-sm hover:border-indigo-400/40 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 group">
            <div className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              Full-Stack
            </div>
            <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Frontend &amp; Backend Architecture
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white/80 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-sm hover:border-indigo-400/40 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 group">
            <div className="text-2xl sm:text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">
              AI Integrated
            </div>
            <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              LLMs &amp; Agentic Solutions
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white/80 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 group">
            <div className="text-2xl sm:text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">
              Modern UI/UX
            </div>
            <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Tailwind &amp; Next.js 16
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white/80 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-sm hover:border-pink-400/40 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 group">
            <div className="text-2xl sm:text-3xl font-bold text-pink-600 dark:text-pink-400 mb-1">
              Clean Code
            </div>
            <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Robust &amp; Scalable Delivery
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}