import Noise from './components/ui/Noise'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Credentials from './components/sections/Credentials'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <>
      {/* Ambient noise texture */}
      <Noise />

      {/* Fixed navigation */}
      <Navbar />

      {/* Page sections */}
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Credentials />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
