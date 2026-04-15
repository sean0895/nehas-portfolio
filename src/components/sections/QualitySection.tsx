'use client'

import { HoverEffect } from '@/components/ui/card-hover-effect'
import { motion } from 'motion/react'
import { ShieldCheck, TrendUp } from '@phosphor-icons/react'

const qualityDimensions = [
  {
    title: 'Acknowledgement & SLA',
    description:
      'Timely first response within SLA targets. Every ticket acknowledged within the committed window — no exceptions.',
    link: '#quality',
  },
  {
    title: 'Understanding the Issue',
    description:
      'Demonstrating active listening, asking clarifying questions, and correctly identifying the root cause before jumping to solutions.',
    link: '#quality',
  },
  {
    title: 'Setting Expectations',
    description:
      'Clear communication of timelines, next steps, and what the customer can expect — reducing follow-up tickets by up to 30%.',
    link: '#quality',
  },
  {
    title: 'Tone & Professionalism',
    description:
      'Empathetic, brand-aligned communication that builds trust. Consistent voice across all channels and severity levels.',
    link: '#quality',
  },
  {
    title: 'Product Knowledge',
    description:
      'Deep understanding of features, known issues, and workarounds. Agents equipped to resolve without unnecessary escalations.',
    link: '#quality',
  },
  {
    title: 'Process Quality',
    description:
      'Adherence to SOPs, correct ticket categorization, proper documentation, and clean handoffs between tiers.',
    link: '#quality',
  },
  {
    title: 'Going Above & Beyond',
    description:
      'Proactive follow-ups, sharing relevant resources, and anticipating needs before the customer asks.',
    link: '#quality',
  },
  {
    title: 'Critical Errors',
    description:
      'Zero-tolerance criteria: data breaches, incorrect billing actions, SLA misses on urgent tickets, and compliance violations.',
    link: '#quality',
  },
]

export function QualitySection() {
  return (
    <section id="quality" className="py-24 px-5 md:px-20 max-w-[1440px] mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="w-10 h-[1.5px] bg-sky-400" />
        <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-sky-400">
          Quality Framework
        </span>
      </div>
      <h2 className="font-[family-name:var(--font-cal)] text-[28px] md:text-[52px] font-light text-zinc-200 tracking-[-0.02em] leading-[1.1] mb-4">
        The 8 Dimensions of Quality
      </h2>
      <p className="text-base text-zinc-500 max-w-[640px] leading-[1.85] font-light mb-6">
        A structured QA framework I built and implemented across teams — moving
        quality from subjective opinion to measurable, coachable dimensions.
      </p>

      {/* Hover Effect Cards */}
      <HoverEffect
        items={qualityDimensions}
        className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
      />

      {/* Callout: Coaching Score Improvement */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-12 bg-sky-400/[0.03] border border-sky-400/[0.06] rounded-2xl p-8 flex items-start gap-6"
      >
        <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-sky-400/5 flex items-center justify-center">
          <TrendUp weight="duotone" className="w-7 h-7 text-sky-400" />
        </div>
        <div>
          <div className="flex items-center gap-3 mb-2">
            <ShieldCheck weight="duotone" className="w-5 h-5 text-emerald-400" />
            <span className="text-[10px] font-bold tracking-[0.1em] text-emerald-400 uppercase">
              Measurable Impact
            </span>
          </div>
          <p className="font-[family-name:var(--font-cal)] text-2xl font-light text-zinc-200 mb-2">
            Coaching scores improved from{' '}
            <span className="text-sky-400 font-semibold">85%</span> to{' '}
            <span className="text-sky-400 font-semibold">95%+</span>
          </p>
          <p className="text-sm text-zinc-500 leading-[1.75] max-w-[560px]">
            By implementing this 8-dimension framework with structured weekly coaching
            sessions, calibration reviews, and clear scoring rubrics, team quality scores
            rose consistently and stayed above target quarter over quarter.
          </p>
        </div>
      </motion.div>
    </section>
  )
}
