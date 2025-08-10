'use client'

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
];

export default function NavBar() {
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 z-50 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex-shrink-0"
                    >
                        <Link href="/" className="text-2xl font-bold text-primary">
                            VG
                        </Link>
                    </motion.div>
                    <div className="hidden sm:block">
                        <div className="flex items-center space-x-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors
                    ${pathname === item.path
                                            ? 'text-primary bg-primary/10'
                                            : 'text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary'
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="ml-4">
                                <ThemeToggle />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
