import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs sm:text-sm font-medium mb-8 backdrop-blur-md animate-pulse">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span>Available for New Opportunities</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Bhanu Prasad
          </span>
        </h1>

        {/* Subtitle */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-300 mb-6">
          Full Stack Developer & AI Engineer
        </h2>

        {/* Description */}
        <p className="max-w-2xl text-base sm:text-lg text-slate-400 mb-10 leading-relaxed">
          I build scalable web applications and intelligent digital experiences 
          using <span className="text-slate-200 font-medium">Java, Spring Boot, React, Next.js, TypeScript</span>, and modern AI models.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <Link
            href="/projects"
            className="px-7 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 hover:from-indigo-500 hover:via-purple-500 hover:to-indigo-600 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-200"
          >
            Explore Projects →
          </Link>
          <Link
            href="/contact"
            className="px-7 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-slate-600 shadow-md hover:-translate-y-0.5 transition-all duration-200"
          >
            Contact Me
          </Link>
        </div>

        {/* Stat Highlights Cards */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl text-left">
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-bold text-white mb-1">Full-Stack</div>
            <div className="text-xs sm:text-sm text-slate-400">Frontend & Backend Architecture</div>
          </div>
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-bold text-indigo-400 mb-1">AI Integrated</div>
            <div className="text-xs sm:text-sm text-slate-400">LLMs & Agentic Solutions</div>
          </div>
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-1">Modern UI/UX</div>
            <div className="text-xs sm:text-sm text-slate-400">Tailwind & React 19 / Next.js</div>
          </div>
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-bold text-pink-400 mb-1">Clean Code</div>
            <div className="text-xs sm:text-sm text-slate-400">Robust & Maintainable Design</div>
          </div>
        </div>

      </div>
    </section>
  );
}