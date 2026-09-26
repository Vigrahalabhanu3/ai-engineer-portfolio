import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/90 backdrop-blur-md mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Col */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 text-lg font-bold text-white mb-3">
              <span className="w-7 h-7 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-xs font-mono text-white">
                BP
              </span>
              <span>Bhanu Prasad</span>
            </Link>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed mb-4">
              Full Stack &amp; AI Engineer focused on crafting clean, high-performance web applications and intelligent user experiences.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Open for opportunities &amp; collaborations</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/experience" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect / Socials */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">
              Connect
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-indigo-400 transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-indigo-400 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  Email Me
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Bhanu Prasad. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <span className="text-indigo-400 font-medium">Next.js</span>, <span className="text-purple-400 font-medium">Tailwind CSS</span> &amp; <span className="text-pink-400 font-medium">TypeScript</span>
          </p>
        </div>
      </div>
    </footer>
  );
}