export interface Project {
    title: string;
    slug: string;
    description: string;
    longDescription?: string;
    technologies: string[];
    features?: string[];
    github: string;
    demo: string;
    featured?: boolean;
    category?: string;
}

export const projects: Project[] = [
    {
        title: "Milk Production Tracker",
        slug: "milk-production-tracker",
        description:
            "A web application for managing daily milk production records, farmer details, pricing, and admin reports.",
        longDescription:
            "A comprehensive dairy management system designed to streamline milk collection, quality checking, vendor payouts, and daily analytics for dairy cooperatives and farms.",
        technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "MySQL"],
        features: [
            "Daily milk yield recording & automatic fat/SNF pricing calculation",
            "Farmer registry and automated monthly payout statements",
            "Interactive analytics dashboard with production trends",
            "Role-based authentication for Admins, Staff, and Farmers"
        ],
        github: "https://github.com/yourusername/milk-production-tracker",
        demo: "https://milk-tracker-demo.example.com",
        featured: true,
        category: "Full Stack"
    },
    {
        title: "AI Mock Interview Platform",
        slug: "ai-mock-interview-platform",
        description:
            "An AI-powered platform that helps developers practice technical interviews and receive intelligent feedback.",
        longDescription:
            "An interactive generative AI simulation engine that conducts real-time coding and system design mock interviews, providing instant scorecards, actionable feedback, and personalized improvement roadmaps.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Gemini AI", "Supabase"],
        features: [
            "Real-time dynamic voice & text question generation based on user resume",
            "Instant evaluation on technical accuracy, clarity, and communication",
            "Audio transcription & speech-to-text interview simulation",
            "Detailed scorecard breakdown with code improvement suggestions"
        ],
        github: "https://github.com/yourusername/ai-mock-interview",
        demo: "https://ai-interview-demo.example.com",
        featured: true,
        category: "AI & Web"
    },
    {
        title: "Taskify",
        slug: "taskify",
        description:
            "A full-stack task management application for creating, organizing, and tracking tasks collaboratively.",
        longDescription:
            "A productivity and agile workflow tool featuring Kanban boards, sprints, team assignments, real-time activity feeds, and milestone notifications.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "NestJS", "PostgreSQL"],
        features: [
            "Drag-and-drop Kanban workflow boards with customizable swimlanes",
            "Team workspaces with granular permission controls",
            "Real-time notifications and task comment threads",
            "Sprint analytics and burndown chart visualizations"
        ],
        github: "https://github.com/yourusername/taskify",
        demo: "https://taskify-demo.example.com",
        featured: true,
        category: "Full Stack"
    },
];