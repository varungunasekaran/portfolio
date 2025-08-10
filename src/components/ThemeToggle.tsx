'use client'

import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);
    const isDark = (theme === 'dark' || resolvedTheme === 'dark');

    if (!mounted) return (
        <span className="w-9 h-9 inline-block" />
    );

    return (
        <motion.button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle dark mode"
        >
            {isDark ? (
                <FiSun className="w-5 h-5 text-yellow-500" />
            ) : (
                <FiMoon className="w-5 h-5 text-blue-600" />
            )}
        </motion.button>
    );
}
