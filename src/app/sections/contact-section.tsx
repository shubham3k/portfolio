'use client'

import { motion } from 'framer-motion'
import { Linkedin, Mail, Twitter, Github } from 'lucide-react'

export function ContactSection() {
  const contactLinks = [
    { name: 'LinkedIn', icon: <Linkedin />, href: 'https://www.linkedin.com/in/shubham-kushwaha-bb1712251/' },
    { name: 'Gmail', icon: <Mail />, href: 'shubhamkushwaha2536@gmail.com' },
    { name: 'Twitter', icon: <Twitter />, href: 'https://twitter.com/_Shubham_3k' },
    { name: 'GitHub', icon: <Github />, href: 'https://github.com/shubham3k' },
  ]

  return (
    <section className="relative py-20 px-4" id="contact">
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
          className="text-3xl font-bold text-white text-center mb-12"
        >
          <div className="flex justify-center mt-8">
          <a href="https://www.linkedin.com/in/shubham-kushwaha-bb1712251/" target="_blank" rel="noopener noreferrer">
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Get in Touch
            </button>
          </a>
        </div>

        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center items-center gap-8"
        >
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className="sr-only">{link.name}</span>
              {link.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
