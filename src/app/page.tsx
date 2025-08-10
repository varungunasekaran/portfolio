import Hero from '@/components/Hero'
import NavBar from '@/components/NavBar'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavBar />
      <Hero />
      <Skills />
      <Experience />
    </main>
  )
}
