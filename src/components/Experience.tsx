'use client';

import { motion } from 'framer-motion';

interface Experience {
    title: string;
    company: string;
    period: string;
    location: string;
    achievements: string[];
}

const experiences: Experience[] = [
    {
        title: "Senior Software Engineer",
        company: "ValGenesis",
        period: "Sep 2023 - Present",
        location: "Chennai",
        achievements: [
            "Architecture Research & Framework Design: Led architectural research efforts focused on Micro-Frontend (MFE) integration.",
            "Real-Time Collaborative Systems: Developed collaborative review system using SignalR for multi-stage approvals.",
            "Distributed Systems & Messaging: Leveraged Redis Pub/Sub, .NET Core for scalable backend services.",
            "Cloud-Native Deployments: Managed Azure Kubernetes Service (AKS) and Azure API Management."
        ]
    },
    {
        title: "Software Engineer",
        company: "Telliant Systems",
        period: "May 2021 - Aug 2023",
        location: "Chennai, India",
        achievements: [
            "Developed and maintained web applications using Angular, .NET Core, SQL, React, C#, Azure.",
            "Implemented responsive design and cross-browser compatibility.",
            "Successfully migrated Angular from 7 to 14 and .NET 2.2 to .NET 6.",
            "Set up Azure pipeline for continuous deployment."
        ]
    }
];

export default function ExperienceSection() {
    return (
        <section id="experience" className="py-20 bg-background-light/50 dark:bg-background-dark/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-12 text-center"
                >
                    Professional Experience
                </motion.h2>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={`${exp.company}-${index}`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative pl-8 sm:pl-32 py-6 group"
                        >
                            <div className="flex flex-col sm:flex-row items-start mb-1">
                                <div className="sm:w-32 sm:absolute sm:left-0 text-primary font-medium">
                                    {exp.period}
                                </div>
                                <div className="flex-grow">
                                    <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                                    <div className="text-lg mb-4">
                                        {exp.company} · <span className="text-text-light/60 dark:text-text-dark/60">{exp.location}</span>
                                    </div>
                                    <ul className="list-disc pl-4 space-y-2">
                                        {exp.achievements.map((achievement, i) => (
                                            <li key={i} className="text-text-light/80 dark:text-text-dark/80">
                                                {achievement}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
