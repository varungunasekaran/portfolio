'use client';

import { motion } from 'framer-motion';

interface SkillCategory {
    title: string;
    skills: string[];
}

const skillCategories: SkillCategory[] = [
    {
        title: "Frontend Technologies",
        skills: [
            "Angular",
            "JavaScript",
            "Jest",
            "Module Federation",
            "Next.js",
            "React",
            "Single SPA",
            "TypeScript",
            "UI Library components",
            "Vite",
            "Vitest",
            "Web components",
            "Webpack"
        ]
    },
    {
        title: "Backend Technologies",
        skills: [
            "C#",
            "Class library",
            "KeyVault",
            "Liquibase",
            "MS SQL",
            "NET Core",
            "OpenTelemetry",
            "Polly",
            "PostgreSQL",
            "Redis",
            "SignalR",
            "Web API"
        ]
    },
    {
        title: "DevOps & Cloud",
        skills: [
            "ACR",
            "APIM",
            "App service",
            "Azure DevOps",
            "Azure Front Door",
            "Git Actions",
            "Storage Account",
            "WAF",
            "Azure",
            "GCP"
        ]
    },
    {
        title: "Tools & Others",
        skills: [
            "Docker",
            "Kubernetes",
            "GraphQL",
            "gRPC",
            "REST",
            "Kafka",
            "IIS"
        ]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-12 text-center"
                >
                    Technical Skills
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-background-light/5 dark:bg-background-dark/5 p-6 rounded-lg"
                        >
                            <h3 className="text-xl font-bold mb-4 text-primary">{category.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-primary/10 dark:bg-primary/5 text-primary rounded-full text-sm"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
