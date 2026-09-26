import { skills } from "@/data/skills";

export default function Skills() {
  // Extract unique categories
  const categories = Array.from(new Set(skills.map((s) => s.category)));

  return (
    <section className="py-16 md:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest font-bold text-indigo-400 mb-3">
            Technical Expertise
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills &amp; Technologies
          </p>
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            The core tools, languages, and frameworks I use to engineer robust, high-performance applications.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const categorySkills = skills.filter((s) => s.category === category);
            
            return (
              <div
                key={category}
                className="rounded-2xl bg-slate-900/60 border border-slate-800/80 p-6 backdrop-blur-sm hover:border-slate-700/80 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="text-lg font-bold text-slate-200 group-hover:text-indigo-300 transition-colors">
                      {category}
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-800 text-slate-400 border border-slate-700/60">
                      {categorySkills.length} Skills
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map((skill) => (
                      <span
                        key={skill.name}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-950/80 text-slate-300 border border-slate-800 hover:border-indigo-500/40 hover:text-white hover:bg-slate-800/70 transition-all duration-150"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}