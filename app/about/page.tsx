import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Me | Bhanu Prasad",
  description: "Learn more about Bhanu Prasad, a Full Stack Developer & AI Engineer specializing in Next.js, Java, and modern web applications.",
};

export default function AboutPage() {
  return (
    <main className="py-16 md:py-24 flex-1">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold mb-4">
            Biography
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            About Me
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Passionate software engineer building resilient web platforms, high-throughput backend services, and generative AI interfaces.
          </p>
        </div>

        {/* Narrative Card */}
        <div className="rounded-3xl bg-slate-900/60 border border-slate-800/90 p-8 sm:p-10 backdrop-blur-md mb-12 shadow-xl">
          <h2 className="text-2xl font-bold text-white mb-6">
            Who I Am
          </h2>
          <div className="space-y-5 text-slate-300 leading-relaxed text-base">
            <p>
              Hello! I&apos;m <strong className="text-white font-semibold">Bhanu Prasad</strong>, a Full Stack Developer and AI enthusiast dedicated to engineering software solutions that are clean, performant, and delightful to use.
            </p>
            <p>
              My expertise spans the entire development lifecycle — from crafting intuitive and accessible user interfaces with <span className="text-indigo-300 font-medium">React, Next.js, and TypeScript</span> to architecting enterprise-grade backend systems using <span className="text-purple-300 font-medium">Java, Spring Boot, Node.js, and SQL/NoSQL databases</span>.
            </p>
            <p>
              I am particularly excited about the convergence of traditional full-stack development and generative AI. I enjoy building applications that leverage LLM workflows, intelligent agents, and automated data pipelines to solve real-world problems.
            </p>
          </div>
        </div>

        {/* Pillars / What I Do */}
        <h2 className="text-2xl font-bold text-white mb-6">
          What I Focus On
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition-all">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center justify-center text-lg font-bold mb-4">
              💻
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Frontend Engineering</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Crafting responsive, accessible, and fast web UIs using React, Next.js, Tailwind CSS, and TypeScript.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition-all">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 flex items-center justify-center text-lg font-bold mb-4">
              ⚙️
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Backend Architecture</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Developing secure RESTful APIs, microservices, and database models with Java, Spring Boot, NestJS, and MySQL/PostgreSQL.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition-all">
            <div className="w-10 h-10 rounded-xl bg-pink-500/10 text-pink-400 border border-pink-500/20 flex items-center justify-center text-lg font-bold mb-4">
              🤖
            </div>
            <h3 className="text-lg font-bold text-white mb-2">AI Integration</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Integrating intelligent agents, prompt engineering, and LLM APIs to create smart, automated digital workflows.
            </p>
          </div>

        </div>

        {/* Education & Background */}
        <div className="rounded-3xl bg-slate-900/60 border border-slate-800/90 p-8 backdrop-blur-md mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            Education &amp; Foundations
          </h2>
          <div className="space-y-6">
            <div className="border-l-2 border-indigo-500/50 pl-4 py-1">
              <h3 className="text-lg font-bold text-white">Bachelor of Technology / Computer Science</h3>
              <p className="text-indigo-400 text-sm font-medium">Computer Science &amp; Engineering</p>
              <p className="text-slate-400 text-sm mt-2">
                Focused on Data Structures, Algorithms, Database Management Systems, Object-Oriented Programming, and Software Engineering principles.
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center p-8 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-purple-950/30 to-slate-900/50 border border-indigo-500/20">
          <h3 className="text-xl font-bold text-white mb-2">Interested in working together?</h3>
          <p className="text-slate-400 text-sm mb-6">Let&apos;s discuss how I can contribute to your team or project.</p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-sm text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/30 transition-all"
          >
            Get In Touch →
          </Link>
        </div>

      </div>
    </main>
  );
}