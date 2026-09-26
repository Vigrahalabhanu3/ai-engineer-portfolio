import Link from "next/link";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/50 backdrop-blur-sm overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 group">
      
      {/* Top Banner / Category */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col">
        <div className="flex items-center justify-between gap-3 mb-4">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            {project.category || "Full Stack"}
          </span>
          {project.featured && (
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
              ★ Featured
            </span>
          )}
        </div>

        {/* Project Title */}
        <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors mb-2.5">
          <Link href={`/projects/${project.slug}`}>
            {project.title}
          </Link>
        </h3>

        {/* Project Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/60 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-950 text-slate-300 border border-slate-800"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Card Footer / Action Links */}
      <div className="px-6 py-4 bg-slate-950/60 border-t border-slate-800/80 flex items-center justify-between gap-3">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
        >
          <span>View Details</span>
          <svg
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </Link>

        <div className="flex items-center gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-colors"
              title="GitHub Repository"
            >
              GitHub
            </a>
          )}
          {project.demo && project.demo !== "#" && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1.5 rounded-lg text-xs font-semibold text-indigo-300 hover:text-white bg-indigo-600/20 hover:bg-indigo-600/40 border border-indigo-500/30 transition-colors"
              title="Live Demo"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>

    </article>
  );
}