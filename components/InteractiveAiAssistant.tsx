"use client";

import React, { useState } from "react";
import { Spinner, PulseDots } from "./Loader";

const suggestions = [
  "Why hire Bhanu for Full Stack + AI roles?",
  "What is Bhanu's experience with Next.js & Spring Boot?",
  "How does Bhanu integrate LLMs & AI into applications?",
  "Tell me about the Milk Production Tracker project.",
];

const cannedResponses: Record<string, string> = {
  "Why hire Bhanu for Full Stack + AI roles?":
    "Bhanu bridges the gap between robust software engineering (Java, Spring Boot, TypeScript, Next.js) and modern AI systems (LLM agents, vector embeddings, Gemini AI). He delivers scalable, production-ready full-stack applications with high Core Web Vitals and accessible design.",
  "What is Bhanu's experience with Next.js & Spring Boot?":
    "Bhanu has built end-to-end applications leveraging Next.js for high-performance server-rendered frontend UIs and Spring Boot for resilient microservices, secure RESTful APIs, and transaction-safe database architectures (PostgreSQL & MySQL).",
  "How does Bhanu integrate LLMs & AI into applications?":
    "Bhanu builds practical AI features such as real-time mock interview speech/text evaluations, automated prompt workflows, resume parsing pipelines, and intelligent agent interactions using Gemini API and custom API integrations.",
  "Tell me about the Milk Production Tracker project?":
    "The Milk Production Tracker is a full-featured management application engineered for daily milk yield recording, automatic fat/SNF pricing calculations, farmer payout generation, and administrative reporting.",
};

export default function InteractiveAiAssistant() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState("");
  const [response, setResponse] = useState<string | null>(null);

  const handleAsk = (userQuery: string) => {
    if (!userQuery.trim()) return;
    setQuery(userQuery);
    setLoading(true);
    setResponse(null);

    setLoadingStep("Analyzing query parameters...");

    setTimeout(() => {
      setLoadingStep("Matching skills & portfolio knowledge base...");
    }, 600);

    setTimeout(() => {
      setLoadingStep("Synthesizing AI engineering summary...");
    }, 1100);

    setTimeout(() => {
      setLoading(false);
      const matched = cannedResponses[userQuery] ||
        `Based on Bhanu's portfolio: Bhanu is an experienced Full Stack & AI Engineer skilled in Next.js, React, TypeScript, Java, Spring Boot, and AI architectures. For questions regarding "${userQuery}", Bhanu can build custom architectures, robust APIs, and intelligent automated workflows. Reach out via the Contact page to discuss custom solutions!`;
      setResponse(matched);
    }, 1600);
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 text-xs font-semibold mb-3">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            Interactive AI Playground
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Ask Bhanu&apos;s AI Assistant
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Test Bhanu&apos;s engineering background, architectural stack, or project details in real-time.
          </p>
        </div>

        {/* AI Playground Card */}
        <div className="rounded-3xl bg-white/80 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/90 p-6 sm:p-8 backdrop-blur-xl shadow-xl transition-all">
          
          {/* Preset Question Pills */}
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
              Suggested Questions:
            </p>
            <div className="flex flex-wrap gap-2">
              {suggestions.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => handleAsk(item)}
                  disabled={loading}
                  className="text-xs font-medium px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-950/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 hover:bg-indigo-50 dark:hover:bg-slate-800/80 hover:text-indigo-600 dark:hover:text-white transition-all disabled:opacity-50 text-left"
                >
                  ⚡ {item}
                </button>
              ))}
            </div>
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAsk(query);
            }}
            className="flex flex-col sm:flex-row gap-3 mb-6"
          >
            <input
              type="text"
              placeholder="e.g. What databases do you recommend for high scale?"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              disabled={loading}
              className="flex-1 px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm transition-all"
            />
            <button
              type="submit"
              disabled={loading || !query.trim()}
              className="px-6 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-md shadow-indigo-500/20 transition-all disabled:opacity-50 flex items-center justify-center gap-2 shrink-0"
            >
              {loading ? (
                <>
                  <Spinner size="sm" className="text-white" />
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <span>Ask AI</span>
                  <span>✨</span>
                </>
              )}
            </button>
          </form>

          {/* Loading state indicator */}
          {loading && (
            <div className="p-6 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800/60 animate-fade-in space-y-3">
              <div className="flex items-center gap-3">
                <PulseDots />
                <span className="text-xs font-semibold text-indigo-700 dark:text-indigo-300">
                  {loadingStep}
                </span>
              </div>
              <div className="w-full bg-indigo-100 dark:bg-indigo-900/40 h-1.5 rounded-full overflow-hidden">
                <div className="bg-indigo-500 h-full rounded-full animate-shimmer w-full"></div>
              </div>
            </div>
          )}

          {/* AI Response Display */}
          {response && !loading && (
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950/90 border border-slate-200 dark:border-slate-800 animate-fade-in-up">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-md bg-gradient-to-tr from-indigo-500 to-purple-500 text-white flex items-center justify-center text-xs font-bold shadow-sm">
                  AI
                </span>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                  Engineering Assistant Response
                </span>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {response}
              </p>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
