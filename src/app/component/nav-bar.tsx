'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1c1e22]/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-blue-400 hover:text-white"
          >
            {isOpen ? <X /> : <Menu />}
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center justify-center flex-1 gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-blue-400 hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
          
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-blue-400 hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

