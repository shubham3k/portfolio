'use client'

import { motion } from 'framer-motion'
import { SkillCard } from '../component/skill-card'
import { Code, Server, Wrench, Lightbulb } from 'lucide-react'

export function SkillsSection() {

  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code />,
      skills: ["JavaScript","TypeScript", "React", "Next.js", "Tailwind CSS", "HTML5", "CSS3", ]
    },
    {
      title: "Backend",
      icon: <Server />,
      skills: ["Node.js", "Express","PostgreSQL", "MongoDB", "GraphQL"]
    },
    {
      title: "Languages & Tools",
      icon: <Wrench />,
      skills: [ "Java", "Python", "YAML", "C", "Git", "Github", "Google Collab", "Jupyter","VS code", "Postman", "Docker"]
    },
    {
      title: "Additional",
      icon: <Lightbulb />,
      skills: ["DSA", "OOPs","Artifical Intelligence","Cloud","Linux","Computer Networking", "Promt Engineering"]
    }
  ]

  return (
    <section className="relative py-20 px-4" id="skills">
      {/* Background div */}
      <div
        className="absolute inset-0 bg-[#15171a]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54 48H6m0-18h48m0-18H6' stroke='%23ffffff' stroke-width='0.5' stroke-opacity='0.1' fill='none' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px',
        }}
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-emerald-500 text-center mb-12"
        >
          My Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SkillCard {...category} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
