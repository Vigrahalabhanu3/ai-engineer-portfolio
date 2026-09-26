import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import ProjectCard from "@/components/ProjectCard";
import InteractiveAiAssistant from "@/components/InteractiveAiAssistant";
import AnimatedSection from "@/components/AnimatedSection";
import { projects } from "@/data/projects";
import Link from "next/link";

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured) || projects.slice(0, 3);

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <Hero />

      {/* Featured Projects Section */}
      <AnimatedSection>
        <section className="py-16 md:py-24 bg-slate-100/60 dark:bg-slate-900/30 border-y border-slate-200/80 dark:border-slate-800/60 relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <h2 className="text-xs uppercase tracking-widest font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                  Portfolio
                </h2>
                <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Featured Projects
                </p>
              </div>
              <Link
                href="/projects"
                className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors group"
              >
                <span>View All Projects</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Interactive AI Assistant Feature */}
      <AnimatedSection delay={100}>
        <InteractiveAiAssistant />
      </AnimatedSection>

      {/* Skills Section */}
      <AnimatedSection delay={150}>
        <Skills />
      </AnimatedSection>

      {/* Call to Action Banner */}
      <AnimatedSection delay={200}>
        <section className="py-16 md:py-20 relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl bg-gradient-to-r from-indigo-900/90 via-purple-900/80 to-slate-900/90 dark:from-indigo-900/60 dark:via-purple-900/40 dark:to-slate-900/80 border border-indigo-500/30 p-8 sm:p-12 text-center backdrop-blur-md shadow-2xl overflow-hidden text-white">
              {/* Background Glow */}
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>

              <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4 relative z-10">
                Have a project in mind or looking for an engineer?
              </h2>
              <p className="max-w-2xl mx-auto text-slate-200 text-sm sm:text-base mb-8 relative z-10">
                I am open to full-time roles, freelance opportunities, and collaborative software projects. Let&apos;s build something impactful together!
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 relative z-10">
                <Link
                  href="/contact"
                  className="px-8 py-3.5 rounded-xl font-semibold text-sm text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/30 hover:-translate-y-0.5 transition-all duration-200"
                >
                  Let&apos;s Connect
                </Link>
                <Link
                  href="/about"
                  className="px-8 py-3.5 rounded-xl font-semibold text-sm text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:-translate-y-0.5 transition-all duration-200"
                >
                  More About Me
                </Link>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </main>
  );
}
