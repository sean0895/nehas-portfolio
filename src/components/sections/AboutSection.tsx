'use client'

import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'
import {
  Buildings,
  ChartBar,
  ShieldCheck,
  Crosshair,
  UsersThree,
  Brain,
} from '@phosphor-icons/react'

const competencies = [
  {
    title: 'Support Operations Architecture',
    description: 'End-to-end workflow design, SLA frameworks, queue management',
    icon: <Buildings weight="duotone" className="w-6 h-6 text-sky-400" />,
    className: 'md:col-span-1',
  },
  {
    title: 'QBR / Executive Reporting',
    description: 'Monthly and quarterly business reviews, PowerBI, CRM analytics',
    icon: <ChartBar weight="duotone" className="w-6 h-6 text-emerald-400" />,
    className: 'md:col-span-1',
  },
  {
    title: 'Quality & Coaching Programs',
    description: 'Structured QA frameworks, agent development, score improvement',
    icon: <ShieldCheck weight="duotone" className="w-6 h-6 text-sky-400" />,
    className: 'md:col-span-2',
  },
  {
    title: 'Customer Segmentation Strategy',
    description: 'High/mid/low touch models, white-glove programs',
    icon: <Crosshair weight="duotone" className="w-6 h-6 text-emerald-400" />,
    className: 'md:col-span-1',
  },
  {
    title: 'People Development',
    description: 'Development plans, cross-training, performance management',
    icon: <UsersThree weight="duotone" className="w-6 h-6 text-sky-400" />,
    className: 'md:col-span-1',
  },
  {
    title: 'AI & Systems Improvement',
    description: 'Automation, CRM enhancements, tooling strategy',
    icon: <Brain weight="duotone" className="w-6 h-6 text-emerald-400" />,
    className: 'md:col-span-2',
  },
]

const iconMap: Record<string, React.ReactNode> = {
  operations: <Buildings weight="duotone" className="w-6 h-6 text-sky-400" />,
  reporting: <ChartBar weight="duotone" className="w-6 h-6 text-emerald-400" />,
  quality: <ShieldCheck weight="duotone" className="w-6 h-6 text-sky-400" />,
  segmentation: <Crosshair weight="duotone" className="w-6 h-6 text-emerald-400" />,
  people: <UsersThree weight="duotone" className="w-6 h-6 text-sky-400" />,
  ai: <Brain weight="duotone" className="w-6 h-6 text-emerald-400" />,
}

const spanMap: Record<string, string> = {
  quality: 'md:col-span-2',
  ai: 'md:col-span-2',
}

interface AboutProps {
  competencies?: Array<{ title: string; description: string; category: string }>
}

export function AboutSection({ competencies: cmsCompetencies }: AboutProps) {
  const displayCompetencies = cmsCompetencies && cmsCompetencies.length > 0
    ? cmsCompetencies.map((c: any) => ({
        title: c.title,
        description: c.description,
        icon: iconMap[c.category] || <Buildings weight="duotone" className="w-6 h-6 text-sky-400" />,
        className: spanMap[c.category] || 'md:col-span-1',
      }))
    : competencies
  return (
    <section id="about" className="py-24 px-5 md:px-20 max-w-[1440px] mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="w-10 h-[1.5px] bg-sky-400" />
        <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-sky-400">
          About
        </span>
      </div>
      <h2 className="font-[family-name:var(--font-cal)] text-[28px] md:text-[52px] font-light text-zinc-200 tracking-[-0.02em] leading-[1.1] mb-12">
        The Leader Behind the Work
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
        {/* Left: Quote + Bio */}
        <div>
          <div className="border-l-4 border-l-sky-400/40 pl-7 my-8">
            <p className="font-[family-name:var(--font-cal)] text-2xl italic leading-[1.6] text-white/75">
              &ldquo;I don&apos;t just run support — I build the infrastructure that makes support
              scalable, measurable, and something the whole business can rely on.&rdquo;
            </p>
          </div>

          <p className="text-[15px] text-zinc-500 leading-[1.85] mb-3.5">
            I&apos;ve spent my career at the intersection of customer experience, operations, and
            data — building support teams that consistently outperform, not just on CSAT scores,
            but on the things that actually matter: revenue protection, team retention, and
            operational consistency at scale.
          </p>
          <p className="text-[15px] text-zinc-500 leading-[1.85] mb-7">
            My approach has always been the same: understand the problem deeply, build the right
            system around it, and create processes that outlast any single person.
          </p>

          {/* Award callout */}
          <div className="bg-sky-400/[0.03] border border-sky-400/[0.06] rounded-2xl p-5 mt-7">
            <div className="text-[10px] font-bold tracking-[0.1em] text-sky-400 uppercase mb-2">
              August 2025 Excellence Award
            </div>
            <p className="text-[13px] italic text-zinc-500 leading-[1.7]">
              &ldquo;Neha exemplifies leadership, patience, and consistency in every aspect of her
              role. She goes above and beyond to support her team.&rdquo;
            </p>
          </div>
        </div>

        {/* Right: Bento Grid */}
        <BentoGrid className="grid-cols-2 auto-rows-[12rem] gap-4">
          {displayCompetencies.map((comp) => (
            <BentoGridItem
              key={comp.title}
              title={comp.title}
              description={comp.description}
              icon={comp.icon}
              className={comp.className}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  )
}
