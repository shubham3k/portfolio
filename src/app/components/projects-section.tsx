'use client'

import { motion } from 'framer-motion'
import { ProjectCard } from './project-card'

export function ProjectsSection() {

  const projects = [
    {
      title: "Rock vs Mine prediction ML",
      description: " A project on submarine navigation to avoid underwater mines. It analyzes sonar data to differentiate between rocks and mines using machine learning algorithms.",
      
      icon: (
        <svg viewBox="0 0 24 24" fill="#E0234E" className="w-10 h-10">
          <path d="M12.195 2.199a1.197 1.197 0 0 0-.714-.199c-.263 0-.5.077-.714.199L3.034 6.4A1.45 1.45 0 0 0 2.2 7.649V16.35c0 .514.268.98.714 1.249l7.733 4.201c.214.122.451.199.714.199.263 0 .5-.077.714-.199l7.733-4.201a1.45 1.45 0 0 0 .834-1.249V7.649c0-.514-.268-.98-.714-1.249L12.195 2.199zm-8.336 9.801a.45.45 0 0 1-.267-.399V8.2c0-.18.09-.339.228-.433l6.705-3.846a.447.447 0 0 1 .447 0l6.705 3.846a.45.45 0 0 1 .228.433v3.401a.45.45 0 0 1-.267.399l-6.705 3.846a.447.447 0 0 1-.447 0l-6.705-3.846z" />
        </svg>
      ),
      technologies: ["Python", "Pandas", "Numpy", "Matplotlib", "Scikit-learn"],
    },
    {
      title: "Twitter Sentiment Analysis ML",
      description: " A project that analyzes tweets to determine the sentiment of the text. It uses machine learning algorithms to classify tweets as positive, negative, or neutral.",
      icon: (
        <svg viewBox="0 0 24 24" fill="#61DAFB" className="w-10 h-10">
          <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" />
        </svg>
      ),
      technologies: ["Python", "Pandas", "Numpy", "Matplotlib", "Scikit-learn"],
    },
    // {
    //   title: "Lift Foils",
    //   description: "The website Lift Foils is dedicated to eFoil electric surfboards and hydrofoil wings, combining performance engineering with a passion for water sports.",
    //   icon: (
    //     <svg viewBox="0 0 24 24" fill="#61DAFB" className="w-10 h-10">
    //       <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" />
    //     </svg>
    //   ),
    //   technologies: ["Typescript", "ReactJS", "Shopify", "WooCommerce", "AWS"],
    // },
  ]

  return (
    <section className="relative py-20 px-4" id="projects">
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
          className="text-5xl font-bold text-blue-400 text-center mb-12"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

        {/* <div className="flex justify-center gap-4 mt-8">
          <button className="px-4 py-2 rounded-lg bg-emerald-500 text-white hover:bg-emerald-600 transition-colors">
            Prev
          </button>
          <button className="px-4 py-2 rounded-lg bg-emerald-500 text-white hover:bg-emerald-600 transition-colors">
            Next
          </button>
        </div> */}
      </div>
    </section>
  )
}
