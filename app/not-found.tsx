import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="relative inline-block">
          <div className="text-8xl sm:text-9xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-gradient-x select-none">
            404
          </div>
          <div className="absolute -inset-2 bg-indigo-500/10 blur-xl -z-10 rounded-full"></div>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
          Page Not Found
        </h1>

        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
          The page you are looking for doesn&apos;t exist or might have been moved. Let&apos;s get you back on track!
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="px-6 py-3 rounded-xl font-semibold text-xs text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/30 transition-all hover:-translate-y-0.5"
          >
            ← Return to Home
          </Link>
          <Link
            href="/projects"
            className="px-6 py-3 rounded-xl font-semibold text-xs text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-all hover:-translate-y-0.5"
          >
            Explore Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
