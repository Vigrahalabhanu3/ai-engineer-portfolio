export interface Skill {
    name: string;
    category: "Languages" | "Frontend" | "Backend" | "Database" | "DevOps & Tools" | "AI & ML";
    proficiency?: number;
}

export const skills: Skill[] = [
    { name: "Java", category: "Languages", proficiency: 90 },
    { name: "TypeScript", category: "Languages", proficiency: 88 },
    { name: "JavaScript", category: "Languages", proficiency: 92 },
    { name: "Python", category: "Languages", proficiency: 85 },
    { name: "React", category: "Frontend", proficiency: 92 },
    { name: "Next.js", category: "Frontend", proficiency: 90 },
    { name: "Tailwind CSS", category: "Frontend", proficiency: 95 },
    { name: "HTML5 / CSS3", category: "Frontend", proficiency: 95 },
    { name: "Spring Boot", category: "Backend", proficiency: 88 },
    { name: "Node.js / Express", category: "Backend", proficiency: 85 },
    { name: "NestJS", category: "Backend", proficiency: 80 },
    { name: "RESTful APIs", category: "Backend", proficiency: 92 },
    { name: "PostgreSQL", category: "Database", proficiency: 86 },
    { name: "MySQL", category: "Database", proficiency: 88 },
    { name: "MongoDB", category: "Database", proficiency: 82 },
    { name: "Supabase", category: "Database", proficiency: 85 },
    { name: "Docker", category: "DevOps & Tools", proficiency: 80 },
    { name: "Git & GitHub", category: "DevOps & Tools", proficiency: 92 },
    { name: "Postman", category: "DevOps & Tools", proficiency: 90 },
    { name: "Gemini API & LLMs", category: "AI & ML", proficiency: 88 },
    { name: "LangChain / AI Agents", category: "AI & ML", proficiency: 82 },
];