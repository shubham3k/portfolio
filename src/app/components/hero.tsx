'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, GitlabIcon as GitHub, Linkedin } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-dark-100 overflow-hidden" id="about">

      <div className="absolute inset-0 bg-[#15171a]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54 48H6m0-18h48m0-18H6' stroke='%23ffffff' stroke-width='0.5' stroke-opacity='0.1' fill='none' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        backgroundSize: '30px 30px'
      }} />
      
      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-between relative z-10">
        {/* Left side: Written material */}
        <div className="lg:w-1/2 lg:pr-16 mb-12 lg:mb-0">
          <motion.h1
            className="text-4xl lg:text-6xl font-bold mb-4 text-white-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            About me
          </motion.h1>

          <motion.h2
            className="text-xl lg:text-2xl text-white-600 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            A keen engineer constantly learning and implementing the latest technologies in real-world applications. Experienced in diverse fields such as web development, artificial intelligence, machine learning, data science, and cloud computing, with a strong commitment to continuous learning and growth.
          </motion.h2>

        </div>

        {/* Right side: Image */}
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* <Image
            src=""
            alt="Your Name"
            width={200}
            height={200}
            className="rounded-full border-4 border-white shadow-2xl mx-auto"
          /> */}
        </motion.div>
      </div>
    </section>
  )
}

