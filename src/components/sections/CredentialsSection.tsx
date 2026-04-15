'use client'

import { Button } from '@/components/ui/moving-border'
import { motion } from 'motion/react'
import {
  Certificate,
  ProjectorScreen,
  ChartLine,
  Kanban,
  GraduationCap,
  Trophy,
} from '@phosphor-icons/react'

const credentials = [
  {
    icon: <Certificate weight="duotone" className="w-7 h-7 text-sky-400" />,
    title: 'COPC Certified',
    subtitle: 'Customer Operations Performance Center',
    description:
      'Global standard for contact center operations management — covering workforce optimization, quality, and service performance.',
  },
  {
    icon: <ProjectorScreen weight="duotone" className="w-7 h-7 text-emerald-400" />,
    title: 'PMP',
    subtitle: 'Project Management Professional',
    description:
      'PMI certification demonstrating expertise in project planning, execution, stakeholder management, and delivery excellence.',
  },
  {
    icon: <ChartLine weight="duotone" className="w-7 h-7 text-sky-400" />,
    title: 'Six Sigma Green Belt',
    subtitle: 'Process Improvement',
    description:
      'Data-driven methodology for eliminating defects and reducing variability in support operations and customer experience processes.',
  },
  {
    icon: <Kanban weight="duotone" className="w-7 h-7 text-emerald-400" />,
    title: 'Scrum Master',
    subtitle: 'Agile Framework',
    description:
      'Certified in agile project management — facilitating sprints, removing blockers, and driving iterative improvement across teams.',
  },
  {
    icon: <GraduationCap weight="duotone" className="w-7 h-7 text-sky-400" />,
    title: 'MBA',
    subtitle: 'Business Administration',
    description:
      'Advanced degree combining business strategy, financial acumen, and organizational leadership — applied directly to scaling support operations.',
  },
  {
    icon: <Trophy weight="duotone" className="w-7 h-7 text-sky-400" />,
    title: 'Excellence Award',
    subtitle: 'August 2025',
    description:
      'Recognized for exemplary leadership, consistency, and impact on team development and operational performance across the organization.',
  },
]

const defaultIcons = [Certificate, ProjectorScreen, ChartLine, Kanban, GraduationCap, Trophy]
const iconColors = ['text-sky-400', 'text-emerald-400', 'text-sky-400', 'text-emerald-400', 'text-sky-400', 'text-sky-400']

interface CredentialsProps {
  credentials?: Array<{ title: string; issuer: string; category?: string; description?: string; year?: string }>
}

export function CredentialsSection({ credentials: cmsCredentials }: CredentialsProps) {
  const displayCredentials = cmsCredentials && cmsCredentials.length > 0
    ? cmsCredentials.map((c: any, i: number) => {
        const Icon = defaultIcons[i % defaultIcons.length]
        return {
          icon: <Icon weight="duotone" className={`w-7 h-7 ${iconColors[i % iconColors.length]}`} />,
          title: c.title,
          subtitle: c.issuer,
          description: c.description || `${c.year || ''}`,
        }
      })
    : credentials
  return (
    <section id="credentials" className="py-24 px-5 md:px-20 max-w-[1440px] mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="w-10 h-[1.5px] bg-sky-400" />
        <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-sky-400">
          Credentials
        </span>
      </div>
      <h2 className="font-[family-name:var(--font-cal)] text-[28px] md:text-[52px] font-light text-zinc-200 tracking-[-0.02em] leading-[1.1] mb-4">
        Certifications & Recognition
      </h2>
      <p className="text-base text-zinc-500 max-w-[640px] leading-[1.85] font-light mb-12">
        Formal credentials that validate the expertise behind the work — each one
        chosen to directly improve how I design, manage, and scale support operations.
      </p>

      {/* Credentials Grid with Moving Borders */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayCredentials.map((cred, idx) => (
          <motion.div
            key={cred.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
          >
            <Button
              as="div"
              borderRadius="1rem"
              containerClassName="w-full h-auto"
              borderClassName="bg-[radial-gradient(var(--color-accent)_40%,transparent_60%)]"
              className="!bg-zinc-900 !p-6 flex flex-col items-start gap-4 !h-auto border-white/[0.06]"
              duration={4000}
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-[rgba(245,158,11,0.08)] flex items-center justify-center flex-shrink-0">
                  {cred.icon}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-zinc-200">
                    {cred.title}
                  </h3>
                  <span className="text-[10px] font-bold tracking-[0.08em] text-zinc-500 uppercase">
                    {cred.subtitle}
                  </span>
                </div>
              </div>
              <p className="text-sm text-zinc-500 leading-[1.75]">
                {cred.description}
              </p>
            </Button>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
