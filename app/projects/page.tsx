import { projects } from "@/data/projects";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import AnimatedSection from "@/components/AnimatedSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Bhanu Prasad",
  description: "Browse featured web applications, AI integrations, and full-stack software built by Bhanu Prasad.",
};

export default function ProjectsPage() {
  return (
    <main className="py-16 md:py-24 flex-1">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <AnimatedSection>
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 text-xs font-semibold mb-4">
              Showcase
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              Featured Projects &amp; Work
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
              A curated collection of full-stack web applications, AI-integrated platforms, and developer tooling I&apos;ve built with modern technologies.
            </p>
          </div>
        </AnimatedSection>

        {/* Projects Showcase with Search & Filters */}
        <AnimatedSection delay={150}>
          <ProjectsShowcase initialProjects={projects} />
        </AnimatedSection>

      </div>
    </main>
  );
}