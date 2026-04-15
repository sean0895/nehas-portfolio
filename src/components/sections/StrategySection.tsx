'use client'

import { StickyScroll } from '@/components/ui/sticky-scroll-reveal'
import { WobbleCard } from '@/components/ui/wobble-card'
import { motion } from 'motion/react'
import {
  Presentation,
  ChartLine,
  Ear,
  Users,
  Warning,
  Binoculars,
  Crown,
  Handshake,
  Envelope,
} from '@phosphor-icons/react'

const qbrContent = [
  {
    title: 'Executive Summary',
    description:
      'A one-page snapshot of the quarter — wins, misses, and the 3 things leadership needs to know. Written for a VP who has 90 seconds to read it.',
    content: (
      <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80" alt="Executive dashboard" className="h-full w-full rounded-md object-cover" />
    ),
  },
  {
    title: 'Business Figures',
    description:
      'Ticket volume, SLA performance, CSAT trends, utilization rates, and cost-per-ticket analysis. Always compared YoY and against targets, never in isolation.',
    content: (
      <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80" alt="Data analytics" className="h-full w-full rounded-md object-cover" />
    ),
  },
  {
    title: 'Voice of Customer',
    description:
      'Verbatim analysis, sentiment trends, top feature requests surfaced from tickets, and NPS correlation. The section that turns support into a product intelligence function.',
    content: (
      <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop&q=80" alt="Team collaboration" className="h-full w-full rounded-md object-cover" />
    ),
  },
  {
    title: 'People & HR',
    description:
      'Attrition, hiring pipeline, training completion, performance distribution, and employee satisfaction. The health of the team is the health of the operation.',
    content: (
      <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=80" alt="Team meeting" className="h-full w-full rounded-md object-cover" />
    ),
  },
  {
    title: 'Problems & Risks',
    description:
      'Active issues, emerging risks, and escalation patterns. Each item includes severity, owner, timeline, and proposed mitigation. No surprises for stakeholders.',
    content: (
      <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&auto=format&fit=crop&q=80" alt="Problem solving" className="h-full w-full rounded-md object-cover" />
    ),
  },
  {
    title: 'Forward-Looking',
    description:
      'Next quarter roadmap, capacity planning, system enhancements, and strategic initiatives. Connects operational work back to business goals and revenue impact.',
    content: (
      <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=80" alt="Strategic outlook" className="h-full w-full rounded-md object-cover" />
    ),
  },
]

const segmentationTiers = [
  {
    tier: 'High-Touch',
    subtitle: 'White Glove',
    description:
      'Dedicated account managers, proactive outreach, quarterly reviews, and priority SLAs. Reserved for enterprise accounts generating $100K+ ARR.',
    icon: <Crown weight="duotone" className="w-8 h-8 text-sky-400" />,
    color: 'bg-sky-400/[0.06]',
  },
  {
    tier: 'Mid-Touch',
    subtitle: 'Guided Support',
    description:
      'Pooled CSM support, proactive health checks, automated onboarding sequences, and escalation fast-tracks. Accounts in the $25K-$100K ARR range.',
    icon: <Handshake weight="duotone" className="w-8 h-8 text-emerald-400" />,
    color: 'bg-emerald-400/[0.06]',
  },
  {
    tier: 'Low-Touch',
    subtitle: 'Self-Service First',
    description:
      'Knowledge base, community forums, automated workflows, and in-app guidance. Scalable model for long-tail accounts with human escalation paths.',
    icon: <Envelope weight="duotone" className="w-8 h-8 text-zinc-500" />,
    color: 'bg-[rgba(161,161,170,0.1)]',
  },
]

export function StrategySection() {
  return (
    <section id="strategy" className="py-24">
      <div className="px-5 md:px-20 max-w-[1440px] mx-auto mb-12">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-[1.5px] bg-sky-400" />
          <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-sky-400">
            Strategy & QBR
          </span>
        </div>
        <h2 className="font-[family-name:var(--font-cal)] text-[28px] md:text-[52px] font-light text-zinc-200 tracking-[-0.02em] leading-[1.1] mb-4">
          Quarterly Business Review Framework
        </h2>
        <p className="text-base text-zinc-500 max-w-[640px] leading-[1.85] font-light">
          A structured QBR framework I developed and presented to C-suite stakeholders —
          turning support data into strategic decisions that impact the entire business.
        </p>
      </div>

      {/* Sticky Scroll — QBR Framework */}
      <div className="relative rounded-2xl overflow-hidden mx-3 md:mx-8" style={{ backgroundColor: '#0a0f1a' }}>
        <StickyScroll content={qbrContent} contentClassName="rounded-xl" />
      </div>

      {/* Segmentation Tiers */}
      <div className="px-5 md:px-20 max-w-[1440px] mx-auto mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-[1.5px] bg-emerald-400" />
            <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-emerald-400">
              Customer Segmentation
            </span>
          </div>
          <h3 className="font-[family-name:var(--font-cal)] text-[24px] md:text-[36px] font-light text-zinc-200 tracking-[-0.02em] leading-[1.1]">
            Tiered Support Model
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {segmentationTiers.map((tier, idx) => (
            <WobbleCard
              key={tier.tier}
              containerClassName={tier.color}
            >
              <div className="relative z-10">
                <div className="mb-4">{tier.icon}</div>
                <h4 className="font-[family-name:var(--font-cal)] text-2xl font-semibold text-zinc-200 mb-1">
                  {tier.tier}
                </h4>
                <span className="text-[10px] font-bold tracking-[0.1em] text-zinc-500 uppercase">
                  {tier.subtitle}
                </span>
                <p className="text-sm text-white/70 leading-[1.75] mt-4">
                  {tier.description}
                </p>
              </div>
            </WobbleCard>
          ))}
        </div>
      </div>
    </section>
  )
}
