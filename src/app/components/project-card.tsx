import { ReactNode } from 'react'
import { Eye } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  icon: ReactNode
  technologies: string[]
}

export function ProjectCard({ title, description, icon, technologies }: ProjectCardProps) {
  return (
    <div className="bg-[#1c1e22] rounded-xl p-6 flex flex-col gap-4 transition-transform hover:-translate-y-1">
      <div className="flex flex-col gap-4">
        {/* Icon */}
        <div className="text-4xl">
          {icon}
        </div>

        {/* Title and Badge */}
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <span className="px-3 py-1 text-xs rounded-full bg-emerald-500/10 text-emerald-500">
            Public
          </span>
        </div>

        {/* View Button */}
        <button className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gray-800 transition-colors">
          <Eye className="w-5 h-5 text-gray-400" />
        </button>

        {/* Description */}
        <p className="text-gray-400 text-sm">
          {description}
        </p>
      </div>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-400"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

