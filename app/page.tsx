import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import ScrollToTop from "@/components/scroll-to-top"
import ParticlesBackground from "@/components/particles-background"
import CursorEffect from "@/components/cursor-effect"

export default function Home() {
  return (
    <>
      <ParticlesBackground />
      <CursorEffect />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <ScrollToTop />
    </>
  )
}

