import { Spinner } from "@/components/Loader";
import { ProjectCardSkeleton } from "@/components/Skeleton";

export default function Loading() {
  return (
    <div className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
      {/* Top pulsing loader indicator */}
      <div className="flex flex-col items-center justify-center text-center mb-12">
        <div className="relative mb-4">
          <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
            <Spinner size="md" className="text-indigo-600 dark:text-indigo-400" />
          </div>
          <div className="absolute -inset-1 rounded-2xl bg-indigo-500/20 blur-md -z-10 animate-pulse"></div>
        </div>
        <p className="text-xs uppercase tracking-widest font-bold text-indigo-600 dark:text-indigo-400">
          Loading Content
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
          Preparing portfolio data...
        </p>
      </div>

      {/* Skeletons */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCardSkeleton />
        <ProjectCardSkeleton />
        <ProjectCardSkeleton />
      </div>
    </div>
  );
}
