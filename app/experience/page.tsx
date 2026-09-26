import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Experience | Bhanu Prasad",
  description: "Explore the professional experience, software engineering projects, and track record of Bhanu Prasad.",
};

interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  type: string;
  location: string;
  description: string;
  achievements: string[];
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: "Full Stack & AI Developer",
    organization: "Independent / Project Engineering",
    period: "2024 - Present",
    type: "Full-Time / Freelance",
    location: "Remote / Hybrid",
    description:
      "Designing and architecting end-to-end full-stack web applications and AI-driven platforms with modern web standards.",
    achievements: [
      "Engineered an AI-powered mock interview simulator with real-time feedback scoring and intelligent resume parsing.",
      "Developed full-stack task management and dairy tracking applications using Next.js, Java/NestJS, and SQL databases.",
      "Implemented responsive, accessible user interfaces achieving 95+ Core Web Vitals performance benchmarks.",
      "Integrated CI/CD pipelines, containerization with Docker, and cloud database solutions."
    ],
    skills: ["Next.js", "TypeScript", "Java", "Spring Boot", "Tailwind CSS", "Gemini API", "PostgreSQL", "Docker"]
  },
  {
    role: "Full Stack Developer Intern / Trainee",
    organization: "Software Development & Applied Tech",
    period: "2023 - 2024",
    type: "Internship",
    location: "India",
    description:
      "Collaborated on designing REST APIs, frontend components, and database models for client-facing software systems.",
    achievements: [
      "Built and tested RESTful endpoints using Java and Spring Boot with comprehensive unit testing.",
      "Assisted in refactoring frontend components to modern React/TypeScript hooks, improving render efficiency.",
      "Worked closely with cross-functional teams to resolve production bugs and enhance database query performance."
    ],
    skills: ["Java", "Spring Boot", "React", "JavaScript", "MySQL", "Git", "REST APIs"]
  }
];

export default function ExperiencePage() {
  return (
    <main className="py-16 md:py-24 flex-1">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold mb-4">
            Career Journey
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Experience &amp; Milestones
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            A timeline of my professional roles, engineering contributions, and software delivery track record.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-slate-800 ml-3 sm:ml-4 space-y-12 mb-16">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-6 sm:pl-8 group">
              
              {/* Timeline Bullet */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-indigo-500 group-hover:border-purple-400 group-hover:scale-125 transition-all shadow-sm shadow-indigo-500/50"></div>

              {/* Experience Card */}
              <div className="rounded-2xl bg-slate-900/60 border border-slate-800/80 p-6 sm:p-8 backdrop-blur-sm group-hover:border-slate-700/80 transition-all duration-300">
                
                {/* Role and Period */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h2 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {exp.role}
                    </h2>
                    <p className="text-indigo-400 text-sm font-medium">
                      {exp.organization} • <span className="text-slate-400">{exp.location}</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Key Achievements */}
                <div className="mb-6">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Key Highlights &amp; Impact
                  </h3>
                  <ul className="space-y-2.5">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        <span className="text-indigo-400 font-bold shrink-0 mt-0.5">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/60">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-950 text-slate-300 border border-slate-800/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800 text-center">
          <h3 className="text-lg font-bold text-white mb-2">Want to see all projects built during these roles?</h3>
          <p className="text-slate-400 text-sm mb-6">Explore the full project catalog to see live implementations.</p>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-indigo-600 hover:bg-indigo-500 shadow-md transition-all"
          >
            <span>View Projects</span>
            <span>→</span>
          </Link>
        </div>

      </div>
    </main>
  );
}