'use client'

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const navItems = [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Skills', path: '#skills' },
    { name: 'Experience', path: '#experience' },
    { name: 'Projects', path: '#projects' },
    { name: 'Contact', path: '#contact' },
];

export default function NavBar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed w-full top-0 left-0 z-50 animate-gradient bg-gradient-to-r from-slate-900 via-blue-800 to-slate-700 dark:from-gray-950 dark:via-blue-900 dark:to-gray-900 shadow-2xl backdrop-blur-2xl border-b border-white/20 dark:border-gray-800"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <a href="#home" className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 via-blue-600 to-purple-600 dark:from-blue-300 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent tracking-tight">
                        VG
                    </a>
                    {/* Desktop navigation */}
                    <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
                        {navItems.map((item) => (
                            <a
                                key={item.path}
                                href={item.path}
                                className="px-4 py-2 rounded-lg text-base font-medium transition-colors duration-200 text-white dark:text-gray-200 hover:bg-blue-700/20 dark:hover:bg-blue-400/20 hover:text-blue-200 dark:hover:text-blue-400"
                            >
                                {item.name}
                            </a>
                        ))}
                        <div className="flex items-center space-x-2 lg:space-x-4 ml-4 pl-4 border-l border-white/30 dark:border-gray-700">
                            <a
                                href="https://github.com/varungunasekaran"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white dark:text-gray-200 hover:text-blue-200 dark:hover:text-blue-400 transition-colors"
                            >
                                <FontAwesomeIcon icon={faGithub} size="lg" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/varun-gunasekaran-39958b292"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white dark:text-gray-200 hover:text-blue-200 dark:hover:text-blue-400 transition-colors"
                            >
                                <FontAwesomeIcon icon={faLinkedin} size="lg" />
                            </a>
                            {/* <ThemeToggle /> */}
                        </div>
                    </div>
                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-white dark:text-gray-200 hover:text-blue-200 dark:hover:text-blue-400 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="h-7 w-7"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isMobileMenuOpen ? (
                                    <path d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
                {/* Mobile menu */}
                <motion.div
                    initial={false}
                    animate={{
                        height: isMobileMenuOpen ? 'auto' : 0,
                        opacity: isMobileMenuOpen ? 1 : 0,
                    }}
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'border-t border-white/30 dark:border-gray-700' : ''}`}
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 rounded-b-2xl shadow-lg">
                        {navItems.map((item) => (
                            <a
                                key={item.path}
                                href={item.path}
                                className="block px-4 py-2 rounded-lg text-base font-medium transition-colors duration-200 text-white dark:text-gray-200 hover:bg-blue-700/20 dark:hover:bg-blue-400/20 hover:text-blue-200 dark:hover:text-blue-400"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                        <div className="flex items-center space-x-4 px-3 py-2 mt-2 border-t border-white/30 dark:border-gray-700">
                            <a
                                href="https://github.com/varungunasekaran"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white dark:text-gray-200 hover:text-blue-200 dark:hover:text-blue-400 transition-colors"
                            >
                                <FontAwesomeIcon icon={faGithub} size="lg" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/varun-gunasekaran-39958b292"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white dark:text-gray-200 hover:text-blue-200 dark:hover:text-blue-400 transition-colors"
                            >
                                <FontAwesomeIcon icon={faLinkedin} size="lg" />
                            </a>
                            <ThemeToggle />
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.nav>
    );
}
