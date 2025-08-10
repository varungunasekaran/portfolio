import Hero from '@/components/Hero'
import NavBar from '@/components/NavBar'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import ParticlesBackground from '@/components/ParticlesBackground'

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <ParticlesBackground />
      <div className="relative z-10">
        <NavBar />
        <Hero />
        <Skills />
        <Experience />
      </div>
    </main>
  )
}
