import { ReactNode } from 'react'

interface SkillCardProps {
  title: string
  icon: ReactNode
  skills: string[]
}

export function SkillCard({ title, icon, skills }: SkillCardProps) {
  return (
    <div className="bg-[#1c1e22] rounded-xl p-6 flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <div className="text-4xl text-emerald-500">{icon}</div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-400"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

