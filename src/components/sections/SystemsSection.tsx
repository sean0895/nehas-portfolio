'use client'

import { TracingBeam } from '@/components/ui/tracing-beam'
import { motion } from 'motion/react'
import {
  MagnifyingGlass,
  Star,
  PlusCircle,
  Headphones,
  Flag,
} from '@phosphor-icons/react'

const enhancements = [
  {
    icon: <MagnifyingGlass weight="duotone" className="w-6 h-6 text-sky-400" />,
    title: 'RCA Tracking System',
    tag: 'Analytics',
    tagColor: '#34d399',
    description:
      'Built a root cause analysis tracking module inside the CRM that categorizes every escalation by failure type — product bug, process gap, training issue, or tooling limitation. Feeds directly into weekly leadership reviews.',
    impact: 'Reduced repeat escalations by 34%',
  },
  {
    icon: <Star weight="duotone" className="w-6 h-6 text-sky-400" />,
    title: 'Recognition Tool',
    tag: 'People',
    tagColor: '#38bdf8',
    description:
      'Designed and shipped an internal recognition tool integrated with Slack and the CRM. Managers and peers can nominate agents for weekly and monthly awards based on QA scores, CSAT verbatims, and above-and-beyond moments.',
    impact: 'Agent satisfaction up 22%',
  },
  {
    icon: <PlusCircle weight="duotone" className="w-6 h-6 text-emerald-400" />,
    title: 'Quick-Create Button',
    tag: 'Efficiency',
    tagColor: '#34d399',
    description:
      'Proposed and shipped a one-click ticket creation button in the admin console. Previously, creating an internal ticket required 7 clicks and 3 forms. Now it\'s one button with smart defaults pulled from context.',
    impact: 'Saved 12 min/agent/day',
  },
  {
    icon: <Headphones weight="duotone" className="w-6 h-6 text-sky-400" />,
    title: 'Customer Listening Post',
    tag: 'VoC',
    tagColor: '#38bdf8',
    description:
      'Created a structured feedback pipeline that routes CSAT verbatims, NPS comments, and support transcript snippets to Product and Engineering teams weekly. Includes sentiment analysis and trend tagging.',
    impact: 'Influenced 6 product roadmap items',
  },
  {
    icon: <Flag weight="duotone" className="w-6 h-6 text-red-400" />,
    title: 'At-Risk Customer Flag',
    tag: 'Retention',
    tagColor: '#f87171',
    description:
      'Implemented an automated at-risk flagging system that monitors ticket frequency, sentiment scores, and SLA breaches. When a customer crosses the threshold, their account manager and support lead get an instant alert.',
    impact: 'Prevented $2.1M in churn',
  },
]

export function SystemsSection() {
  return (
    <section id="systems" className="py-24 px-5 md:px-20 max-w-[1440px] mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="w-10 h-[1.5px] bg-sky-400" />
        <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-sky-400">
          Systems & Tools
        </span>
      </div>
      <h2 className="font-[family-name:var(--font-cal)] text-[28px] md:text-[52px] font-light text-zinc-200 tracking-[-0.02em] leading-[1.1] mb-4">
        Tools I Built or Improved
      </h2>
      <p className="text-base text-zinc-500 max-w-[640px] leading-[1.85] font-light mb-16">
        I don&apos;t just use systems — I identify gaps, design solutions, and
        work with engineering to ship enhancements that make the entire team more
        effective.
      </p>

      {/* Tracing Beam */}
      <TracingBeam className="px-6">
        <div className="space-y-12">
          {enhancements.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="ml-4 md:ml-12"
            >
              <div className="bg-zinc-900 border border-white/[0.06] rounded-2xl p-7">
                {/* Top row */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[rgba(245,158,11,0.08)] flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-zinc-200">
                      {item.title}
                    </h3>
                  </div>
                  <span
                    className="text-[9px] font-bold tracking-[0.1em] uppercase px-2.5 py-1 rounded-lg"
                    style={{
                      backgroundColor: `${item.tagColor}1A`,
                      color: item.tagColor,
                    }}
                  >
                    {item.tag}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-zinc-500 leading-[1.8] mb-4">
                  {item.description}
                </p>

                {/* Impact */}
                <div className="flex items-center gap-2 bg-[rgba(52,211,153,0.05)] border border-[rgba(107,114,128,0.06)] rounded-lg px-4 py-2.5 w-fit">
                  <span className="text-[10px] font-bold tracking-[0.08em] text-emerald-400 uppercase">
                    Impact:
                  </span>
                  <span className="text-sm font-semibold text-zinc-200">
                    {item.impact}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </TracingBeam>
    </section>
  )
}
