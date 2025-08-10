'use client';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const TypingText = ({ text }: { text: string }) => {
    const letters = Array.from(text);

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                type: "spring" as "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            x: -20,
            y: 10,
            transition: {
                type: "spring" as "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.div
            style={{ display: "flex", overflow: "hidden" }}
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {letters.map((letter, index) => (
                <motion.span
                    variants={child}
                    key={index}
                    className="text-primary"
                >
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </motion.div>
    );
};

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-gradient"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-4"
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                            Hi, I'm{' '}
                            <TypingText text="Varun Gunasekaran" />
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8">
                            Senior Software Engineer
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-lg mb-12 max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
                    >
                        Specializing in cloud-native web applications with expertise in Angular, React, .NET Core, and Azure.
                        Building scalable solutions that drive business success.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex justify-center space-x-6"
                    >
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://github.com/varungunasekaran"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
                        >
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://www.linkedin.com/in/varun-gunasekaran-39958b292"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
                        >
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            href="mailto:varun5@gmail.com"
                            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
                        >
                            <FontAwesomeIcon icon={faEnvelope} size="2x" />
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
