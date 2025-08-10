'use client';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden bg-gradient-to-br from-blue-100 via-slate-50 to-blue-200 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 transition-colors duration-500">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-2xl mx-auto p-10 rounded-3xl shadow-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-100 dark:border-gray-800 backdrop-blur-2xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="flex justify-center mb-6"
                    >
                        <img
                            src="/varun.jpg"
                            alt="Varun Gunasekaran profile"
                            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-blue-300 dark:border-cyan-400 shadow-xl object-cover bg-white dark:bg-slate-800 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                            style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)' }}
                        />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-800 via-slate-700 to-blue-500 dark:from-blue-300 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4 drop-shadow-lg"
                    >
                        Varun Gunasekaran
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-800 dark:text-blue-300 mb-2 drop-shadow"
                    >
                        Senior Software Engineer
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-base sm:text-lg text-blue-700 dark:text-blue-300 mb-4 font-medium"
                    >
                        I’m a Software Engineer with 4+ years of hands-on experience designing and delivering scalable, cloud-native web applications across healthcare, compliance, and enterprise domains.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-lg mb-8 text-slate-700 dark:text-slate-100"
                    >
                        I specialize in <span className="font-semibold text-blue-700 dark:text-purple-300">modernizing legacy systems</span>, leading <span className="font-semibold text-blue-800 dark:text-pink-400">micro-frontend transformations</span>, and architecting robust, cloud-native solutions with <span className="font-semibold text-blue-600 dark:text-cyan-300">Angular</span>, <span className="font-semibold text-blue-900 dark:text-yellow-300">React</span>, <span className="font-semibold text-blue-700 dark:text-green-300">.NET Core</span>, <span className="font-semibold text-blue-800 dark:text-orange-300">PostgreSQL</span>, and <span className="font-semibold text-blue-700 dark:text-sky-300">Azure</span>. I love crafting seamless RESTful APIs, applying strong DSA fundamentals, and unifying diverse UI frameworks to accelerate delivery and create real business impact.
                    </motion.p>
                    <motion.a
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        href="/Varun_Resume_2025.pdf"
                        download
                        className="group inline-block px-8 py-3 mb-8 rounded-full bg-gradient-to-r from-blue-700 via-blue-500 to-slate-500 dark:from-blue-400 dark:via-blue-600 dark:to-purple-600 text-white font-bold shadow-xl hover:from-blue-800 hover:to-blue-700 hover:via-blue-600 transition-all duration-300 text-lg border-2 border-transparent hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 drop-shadow-lg relative overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        <span className="relative z-10">Download Resume</span>
                        <span className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-blue-400 via-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-0" />
                    </motion.a>
                    <div className="flex justify-center space-x-6 mt-4">
                        <motion.a
                            whileHover={{ scale: 1.2, rotate: 8 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://github.com/varungunasekaran"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-800 dark:text-blue-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 drop-shadow"
                        >
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.2, rotate: 8 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://www.linkedin.com/in/varun-gunasekaran-39958b292"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-800 dark:text-blue-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 drop-shadow"
                        >
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.2, rotate: 8 }}
                            whileTap={{ scale: 0.95 }}
                            href="mailto:varun5@gmail.com"
                            className="text-blue-800 dark:text-blue-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 drop-shadow"
                        >
                            <FontAwesomeIcon icon={faEnvelope} size="2x" />
                        </motion.a>
                    </div>
                </div>
            </div>
        </section>
    );
}
