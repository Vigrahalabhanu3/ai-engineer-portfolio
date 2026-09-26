"use client";

import { useTheme } from "./ThemeProvider";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export default function ThemeToggle({ className = "", showLabel = false }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className={`group relative flex items-center gap-2 p-2 rounded-xl transition-all duration-300 ${
        isDark
          ? "bg-slate-900/80 text-amber-300 hover:bg-slate-800 border border-slate-800 hover:border-amber-400/30 hover:shadow-lg hover:shadow-amber-500/10"
          : "bg-slate-100 text-indigo-600 hover:bg-slate-200 border border-slate-300/80 hover:border-indigo-400/40 hover:shadow-lg hover:shadow-indigo-500/10"
      } ${className}`}
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <div className="relative w-5 h-5 flex items-center justify-center overflow-hidden">
        {/* Sun Icon (for switching to light or shown in dark) */}
        <svg
          className={`w-5 h-5 transition-all duration-500 transform ${
            isDark
              ? "rotate-0 scale-100 opacity-100 text-amber-300"
              : "-rotate-90 scale-0 opacity-0 absolute"
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>

        {/* Moon Icon (for switching to dark or shown in light) */}
        <svg
          className={`w-5 h-5 transition-all duration-500 transform ${
            !isDark
              ? "rotate-0 scale-100 opacity-100 text-indigo-600"
              : "rotate-90 scale-0 opacity-0 absolute"
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </div>

      {showLabel && (
        <span className="text-xs font-semibold select-none">
          {isDark ? "Light Mode" : "Dark Mode"}
        </span>
      )}
    </button>
  );
}
