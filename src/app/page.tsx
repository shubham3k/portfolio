import React from 'react'

import { NavBar } from './components/nav-bar'
import Hero from './components/hero'
import { HeroSection } from './components/hero-section'
import { ProjectsSection } from './components/projects-section'
import { SkillsSection } from './components/skills-section'
import { ContactSection } from './components/contact-section'
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

