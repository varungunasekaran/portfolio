'use client';

import { useCallback } from 'react';
import Particles from "@tsparticles/react";
import type { Engine, Container } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { useTheme } from 'next-themes';

const ParticlesBackground = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const particlesInit = useCallback(async (engine: any) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        // Container loaded
    }, []);

    return (
        <Particles
            id="tsparticles"
            // init={particlesInit}
            // particlesLoaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "transparent",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                            parallax: {
                                enable: true,
                                force: 60,
                                smooth: 10
                            }
                        },
                        resize: {
                            enable: true,
                            delay: 0.5
                        },
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: isDark ? "#ffffff" : "#000000",
                    },
                    links: {
                        color: isDark ? "#ffffff" : "#000000",
                        distance: 150,
                        enable: true,
                        opacity: 0.3,
                        width: 1,
                        triangles: {
                            enable: true,
                            opacity: 0.05
                        }
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        enable: true,
                        direction: "none",
                        outModes: "bounce",
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        value: 80,
                        limit: { value: 150 },
                    },
                    opacity: {
                        value: { min: 0.1, max: 0.5 },
                        animation: {
                            enable: true,
                            speed: 3,
                            sync: false,
                        }
                    },
                    shape: {
                        type: ["circle", "triangle", "polygon"],
                    },
                    size: {
                        value: { min: 1, max: 3 },
                        animation: {
                            enable: true,
                            speed: 4,
                            sync: false,
                        }
                    },
                },
                detectRetina: true,
            }}
        />
    );
};

export default ParticlesBackground;
