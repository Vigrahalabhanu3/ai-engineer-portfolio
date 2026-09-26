import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import ScrollToTop from "@/components/ScrollToTop";
import IntroAnimation from "@/components/IntroAnimation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bhanuprasad.dev"),
  title: {
    default: "Bhanu Prasad | Full Stack & AI Engineer",
    template: "%s | Bhanu Prasad",
  },
  description:
    "Portfolio of Bhanu Prasad, a Full Stack & AI Engineer building scalable web applications with Next.js, TypeScript, Java, Spring Boot, and modern AI integrations.",
  keywords: [
    "Bhanu Prasad",
    "Full Stack Developer",
    "AI Engineer",
    "Next.js Developer",
    "Java Spring Boot",
    "TypeScript",
    "React",
    "Software Engineer",
    "Machine Learning",
    "Generative AI",
  ],
  authors: [{ name: "Bhanu Prasad" }],
  creator: "Bhanu Prasad",
  publisher: "Bhanu Prasad",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Bhanu Prasad | Full Stack & AI Engineer",
    description:
      "Explore Bhanu Prasad's portfolio, featured full-stack projects, and AI integrations.",
    url: "https://bhanuprasad.dev",
    siteName: "Bhanu Prasad Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhanu Prasad | Full Stack & AI Engineer",
    description:
      "Full Stack Developer & AI Engineer building scalable applications with Next.js, TypeScript, and Java.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://bhanuprasad.dev/#person",
      name: "Bhanu Prasad",
      jobTitle: "Full Stack Developer & AI Engineer",
      url: "https://bhanuprasad.dev",
      sameAs: [
        "https://github.com/yourusername",
        "https://linkedin.com/in/yourusername",
      ],
      knowsAbout: [
        "Full Stack Development",
        "Next.js",
        "React",
        "TypeScript",
        "Java",
        "Spring Boot",
        "Artificial Intelligence",
        "Large Language Models",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://bhanuprasad.dev/#website",
      url: "https://bhanuprasad.dev",
      name: "Bhanu Prasad Portfolio",
      publisher: {
        "@id": "https://bhanuprasad.dev/#person",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth dark`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const savedTheme = localStorage.getItem('theme');
                const theme = savedTheme ? savedTheme : 'dark';
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                  document.documentElement.classList.remove('light');
                } else {
                  document.documentElement.classList.add('light');
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-indigo-500/30 selection:text-indigo-600 dark:selection:text-indigo-300 font-sans relative overflow-x-hidden transition-colors duration-300">
        <ThemeProvider>
          <IntroAnimation />

          <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-500/5 dark:bg-indigo-600/10 rounded-full blur-3xl animate-pulse-glow" />
            <div className="absolute top-1/3 -right-40 w-96 h-96 bg-purple-500/5 dark:bg-purple-600/10 rounded-full blur-3xl animate-float" />
            <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-cyan-500/5 dark:bg-cyan-600/10 rounded-full blur-3xl animate-float-reverse" />
          </div>

          <Navbar />
          <div className="flex-1 flex flex-col">
            {children}
          </div>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
