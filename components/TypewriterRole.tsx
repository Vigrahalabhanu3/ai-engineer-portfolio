"use client";

import React, { useState, useEffect } from "react";

const roles = [
  "Full Stack Developer",
  "AI & LLM Solutions Engineer",
  "Java & Spring Boot Architect",
  "Next.js & TypeScript Specialist",
];

export default function TypewriterRole() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    const fullText = roles[roleIndex];

    const handleType = () => {
      if (!isDeleting) {
        // Typing forward
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          // Pause at end
          setTimeout(() => setIsDeleting(true), 1800);
          setSpeed(60);
          return;
        }
        setSpeed(80);
      } else {
        // Backspacing
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setSpeed(120);
          return;
        }
        setSpeed(40);
      }
    };

    const timer = setTimeout(handleType, speed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, speed]);

  return (
    <span className="inline-flex items-center min-h-[1.5em]">
      <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-300 dark:via-purple-300 dark:to-pink-300 bg-clip-text text-transparent font-bold">
        {currentText}
      </span>
      <span className="w-0.5 h-6 ml-1 bg-indigo-500 animate-pulse inline-block" />
    </span>
  );
}
