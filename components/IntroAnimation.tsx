"use client";

import React, { useEffect, useState } from "react";

export default function IntroAnimation() {
  const [show, setShow] = useState(false);
  const [phase, setPhase] = useState<"loading" | "reveal" | "done">("loading");

  useEffect(() => {
    // Only play intro once per session or on first visit
    const hasSeenIntro = sessionStorage.getItem("hasSeenIntro_v1");
    if (!hasSeenIntro) {
      setShow(true);

      const timer1 = setTimeout(() => {
        setPhase("reveal");
      }, 1200);

      const timer2 = setTimeout(() => {
        setPhase("done");
        sessionStorage.setItem("hasSeenIntro_v1", "true");
        setTimeout(() => setShow(false), 600);
      }, 2000);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, []);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950 text-white transition-all duration-700 pointer-events-none ${
        phase === "done" ? "opacity-0 scale-105" : "opacity-100 scale-100"
      }`}
    >
      {/* Ambient background glow */}
      <div className="absolute w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse-glow" />

      <div className="relative flex flex-col items-center text-center px-4 space-y-4">
        {/* Animated Monogram Logo */}
        <div className="relative mb-2">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center text-2xl sm:text-3xl font-mono font-extrabold shadow-2xl shadow-indigo-500/50 animate-bounce">
            BP
          </div>
          <div className="absolute -inset-2 rounded-3xl bg-indigo-500/30 blur-lg -z-10 animate-pulse"></div>
        </div>

        {/* Title */}
        <div className="space-y-1">
          <h2 className="text-xl sm:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-indigo-200 to-purple-300 bg-clip-text text-transparent animate-fade-in">
            BHANU PRASAD
          </h2>
          <p className="text-xs sm:text-sm font-mono tracking-widest text-indigo-400 uppercase">
            Full Stack &amp; AI Engineer
          </p>
        </div>

        {/* Shimmer loading bar */}
        <div className="w-48 sm:w-64 h-1 bg-slate-800 rounded-full overflow-hidden mt-4">
          <div className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full w-full animate-shimmer" />
        </div>
      </div>
    </div>
  );
}
