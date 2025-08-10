import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#0070f3',
                    dark: '#0761d1',
                },
                secondary: {
                    DEFAULT: '#00a8e8',
                    dark: '#0096cc',
                },
                background: {
                    light: '#ffffff',
                    dark: '#0a0a0a',
                },
                text: {
                    light: '#2d3748',
                    dark: '#e2e8f0',
                }
            },
            fontFamily: {
                sans: ['var(--font-inter)'],
                mono: ['var(--font-fira-code)'],
            },
            letterSpacing: {
                tighter: '-0.05em',
                tight: '-0.025em',
                normal: '0em',
                wide: '0.025em',
                wider: '0.05em',
                widest: '0.1em',
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}

export default config
