'use client';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faReact, faAngular, faJs, faNode, faAws,
    faMicrosoft, faDocker, faGitAlt
} from '@fortawesome/free-brands-svg-icons';

interface SkillCategory {
    title: string;
    skills: Array<{
        name: string;
        icon?: any;
    }>;
}

const skillCategories: SkillCategory[] = [
    {
        title: "Frontend Technologies",
        skills: [
            { name: "React", icon: faReact },
            { name: "Angular", icon: faAngular },
            { name: "JavaScript", icon: faJs },
            { name: "TypeScript", icon: faJs },
            { name: "Next.js", icon: faReact },
            { name: "Jest" },
            { name: "Module Federation" },
            { name: "Single SPA" },
            { name: "UI Library components" },
            { name: "Vite" },
            { name: "Vitest" },
            { name: "Web components" },
            { name: "Webpack" }
        ]
    },
    {
        title: "Backend Technologies",
        skills: [
            { name: "C#", icon: faMicrosoft },
            { name: "NET Core", icon: faMicrosoft },
            { name: "Node.js", icon: faNode },
            { name: "PostgreSQL" },
            { name: "MS SQL" },
            { name: "Redis" },
            { name: "KeyVault" },
            { name: "Liquibase" },
            { name: "OpenTelemetry" },
            { name: "Polly" },
            { name: "SignalR" },
            { name: "Web API" }
        ]
    },
    {
        title: "DevOps & Cloud",
        skills: [
            { name: "Azure", icon: faMicrosoft },
            { name: "AWS", icon: faAws },
            { name: "Docker", icon: faDocker },
            { name: "Git", icon: faGitAlt },
            { name: "APIM" },
            { name: "App Service" },
            { name: "Azure DevOps" },
            { name: "Azure Front Door" },
            { name: "GitHub Actions" },
            { name: "Storage Account" },
            { name: "WAF" }
        ]
    },
    {
        title: "Tools & Others",
        skills: [
            { name: "Kubernetes" },
            { name: "GraphQL" },
            { name: "gRPC" },
            { name: "REST" },
            { name: "Kafka" },
            { name: "IIS" }
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
                    className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white"
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
                            className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">{category.title}</h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill) => (
                                    <motion.span
                                        key={skill.name}
                                        whileHover={{ scale: 1.05 }}
                                        className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm flex items-center gap-2 transition-colors duration-300"
                                    >
                                        {skill.icon && <FontAwesomeIcon icon={skill.icon} className="h-4 w-4" />}
                                        {skill.name}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
