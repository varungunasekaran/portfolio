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
        <section id="experience" className="py-20 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-100/30 to-transparent dark:via-gray-800/30"></div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white"
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
                            className="relative pl-8 sm:pl-32 py-6 group bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <div className="flex flex-col sm:flex-row items-start mb-1">
                                <div className="sm:w-32 sm:absolute sm:left-0 text-blue-600 dark:text-blue-400 font-medium ml-4">
                                    {exp.period}
                                </div>
                                <div className="flex-grow p-4">
                                    <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{exp.title}</h3>
                                    <div className="text-lg mb-4 text-gray-700 dark:text-gray-300">
                                        {exp.company} · <span className="text-gray-500 dark:text-gray-400">{exp.location}</span>
                                    </div>
                                    <ul className="space-y-3">
                                        {exp.achievements.map((achievement, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.1 * i }}
                                                className="flex items-start text-gray-600 dark:text-gray-300"
                                            >
                                                <span className="mr-2">•</span>
                                                <span>{achievement}</span>
                                            </motion.li>
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
