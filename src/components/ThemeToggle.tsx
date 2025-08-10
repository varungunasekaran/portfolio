'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiSun, FiMoon } from 'react-icons/fi'

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        const root = window.document.documentElement
        const initialColorValue = root.classList.contains('dark')
        setIsDark(initialColorValue)
    }, [])

    const toggleDarkMode = () => {
        const root = window.document.documentElement
        root.classList.toggle('dark')
        setIsDark(!isDark)
    }

    return (
        <motion.button
            onClick={toggleDarkMode}
            className="fixed bottom-6 right-6 p-3 rounded-full bg-background-light dark:bg-background-dark shadow-lg hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle dark mode"
        >
            {isDark ? (
                <FiSun className="w-6 h-6 text-primary" />
            ) : (
                <FiMoon className="w-6 h-6 text-primary" />
            )}
        </motion.button>
    )
}
