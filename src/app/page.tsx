import React from 'react'

import { NavBar } from './components/nav-bar'
import Hero from './sections/hero-info'
import { HeroSection } from './sections/hero-section'
import { ProjectsSection } from './sections/projects-section'
import { SkillsSection } from './sections/skills-section'
import { ContactSection } from './sections/contact-section'
import { Footer } from './components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#15171a] flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <HeroSection />
        <Hero/>
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

