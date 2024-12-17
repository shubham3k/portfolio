'use client'

import { motion } from 'framer-motion'
import { Download } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Small grid background */}
      <div className="absolute inset-0 bg-[#15171a]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54 48H6m0-18h48m0-18H6' stroke='%23ffffff' stroke-width='0.5' stroke-opacity='0.1' fill='none' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        backgroundSize: '30px 30px'
      }} />

      <div className="relative z-10 text-center px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hii i'm<br />
          <span className="text-emerald-500">Shubham Kushwaha</span>
        </motion.h1>

        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-emerald-500 text-white font-semibold flex items-center justify-center hover:bg-emerald-600 transition-colors group"
          >
            Let's Talk
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a> */}
          <a
            href="https://drive.google.com/file/d/1tfL24Fwuisy-luKypFJK99poubcSCNIX/view?usp=sharing"
            download
            className="px-6 py-3 rounded-full bg-gray-800 text-white font-semibold flex items-center justify-center hover:bg-gray-700 transition-colors"
          >
            Download Resume
            <Download className="ml-2 h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

