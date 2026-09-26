"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function ProfileAvatar() {
  const [imgSrc, setImgSrc] = useState("/profile.jpg");
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - card.left - card.width / 2;
    const y = e.clientY - card.top - card.height / 2;
    setRotateX(-y * 0.04);
    setRotateY(x * 0.04);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-center justify-center p-6 select-none"
      style={{
        perspective: "1000px",
      }}
    >
      {/* 3D Container */}
      <div
        className="relative transition-transform duration-200 ease-out"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Animated outer glowing ring */}
        <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 opacity-60 blur-xl animate-spin-slow -z-10"></div>
        
        {/* Secondary pulse aura */}
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-40 animate-pulse-glow -z-10"></div>

        {/* Main Avatar Frame */}
        <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full p-1.5 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 shadow-2xl overflow-hidden group">
          <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 relative">
            <Image
              src={imgSrc}
              alt="Bhanu Prasad - Full Stack & AI Engineer"
              fill
              priority
              className="object-cover object-[center_18%] group-hover:scale-105 transition-transform duration-500"
              onError={() => {
                setImgSrc("/profile.jpg");
              }}
            />
            {/* Subtle gloss overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-white/10 pointer-events-none" />
          </div>
        </div>

        {/* Floating Tech Badge 1: Top-Right (Next.js / React) */}
        <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 animate-float">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-lg backdrop-blur-md text-xs font-semibold text-slate-800 dark:text-slate-200 hover:scale-110 transition-transform cursor-default">
            <span className="text-cyan-500 text-sm">⚛️</span>
            <span>Next.js &amp; React</span>
          </div>
        </div>

        {/* Floating Tech Badge 2: Bottom-Left (Java / Spring) */}
        <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 animate-float-reverse">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-lg backdrop-blur-md text-xs font-semibold text-slate-800 dark:text-slate-200 hover:scale-110 transition-transform cursor-default">
            <span className="text-orange-500 text-sm">☕</span>
            <span>Java &amp; Spring</span>
          </div>
        </div>

        {/* Floating Tech Badge 3: Bottom-Right (AI / Gemini) */}
        <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 animate-float">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white border border-indigo-400/40 shadow-lg shadow-indigo-500/25 backdrop-blur-md text-xs font-semibold hover:scale-110 transition-transform cursor-default">
            <span className="text-sm animate-pulse">🤖</span>
            <span>AI &amp; LLMs</span>
          </div>
        </div>

        {/* Floating Tech Badge 4: Top-Left (TypeScript) */}
        <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 animate-float-reverse">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-lg backdrop-blur-md text-xs font-semibold text-slate-800 dark:text-slate-200 hover:scale-110 transition-transform cursor-default">
            <span className="text-blue-500 text-sm">⚡</span>
            <span>TypeScript</span>
          </div>
        </div>

        {/* Active Status Chip on Avatar Bottom */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-950/80 border border-emerald-500/40 text-emerald-400 text-[10px] font-medium backdrop-blur-md shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Online &amp; Coding</span>
          </div>
        </div>

      </div>
    </div>
  );
}
