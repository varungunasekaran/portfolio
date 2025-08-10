'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                            Hi, I'm{' '}
                            <span className="text-primary">Varun Gunasekaran</span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h2 className="text-xl sm:text-2xl md:text-3xl text-text-light/80 dark:text-text-dark/80 mb-8">
                            Senior Software Engineer
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-lg mb-12 max-w-2xl mx-auto"
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
                        <Link
                            href="https://github.com/varungunasekaran"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-light/80 dark:text-text-dark/80 hover:text-primary dark:hover:text-primary transition-colors"
                        >
                            <FiGithub className="w-8 h-8" />
                        </Link>
                        <Link
                            href="https://lin.ai/varun"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-light/80 dark:text-text-dark/80 hover:text-primary dark:hover:text-primary transition-colors"
                        >
                            <FiLinkedin className="w-8 h-8" />
                        </Link>
                        <Link
                            href="mailto:varun5@gmail.com"
                            className="text-text-light/80 dark:text-text-dark/80 hover:text-primary dark:hover:text-primary transition-colors"
                        >
                            <FiMail className="w-8 h-8" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
