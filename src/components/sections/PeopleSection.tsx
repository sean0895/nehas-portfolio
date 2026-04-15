'use client'

import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card-effect'
import { motion } from 'motion/react'
import {
  TrendUp,
  Shuffle,
  Trophy,
  Heartbeat,
  ShieldCheck,
  GlobeHemisphereWest,
} from '@phosphor-icons/react'

const initiatives = [
  {
    icon: <TrendUp weight="duotone" className="w-7 h-7 text-sky-400" />,
    title: 'Growth Tracks',
    subtitle: 'Career Development',
    description:
      'Structured progression paths from Tier 1 to Senior Agent to Team Lead. Each level has clear competency milestones, shadow rotations, and quarterly skill assessments.',
    metric: '40% internal promotion rate',
    color: '#38bdf8',
  },
  {
    icon: <Shuffle weight="duotone" className="w-7 h-7 text-emerald-400" />,
    title: 'Cross-Training',
    subtitle: 'Skill Diversification',
    description:
      'Rotating agents across product lines and channels every quarter. Builds resilience, reduces single-point-of-failure risk, and improves agent engagement scores.',
    metric: '3x coverage depth',
    color: '#34d399',
  },
  {
    icon: <Trophy weight="duotone" className="w-7 h-7 text-sky-400" />,
    title: 'Recognition',
    subtitle: 'Team Motivation',
    description:
      'Weekly shoutouts, monthly awards, and quarterly excellence recognition tied to QA scores, CSAT feedback, and peer nominations. Built the tool and the cadence.',
    metric: '25% engagement lift',
    color: '#38bdf8',
  },
  {
    icon: <Heartbeat weight="duotone" className="w-7 h-7 text-red-400" />,
    title: 'Performance Recovery',
    subtitle: 'PIP Alternative',
    description:
      'A structured 30-60-90 day improvement plan that focuses on coaching and support rather than punitive action. Paired with daily check-ins and modified workload.',
    metric: '70% recovery success',
    color: '#f87171',
  },
  {
    icon: <ShieldCheck weight="duotone" className="w-7 h-7 text-sky-400" />,
    title: 'Quality Coaching',
    subtitle: '1:1 Development',
    description:
      'Weekly 30-minute coaching sessions using recorded interactions. Score against the 8-dimension framework, set specific improvement goals, and track progress over time.',
    metric: '85% to 95%+ scores',
    color: '#38bdf8',
  },
  {
    icon: <GlobeHemisphereWest weight="duotone" className="w-7 h-7 text-emerald-400" />,
    title: 'Global Remote Leadership',
    subtitle: 'Distributed Teams',
    description:
      'Managing teams across US, India, and Philippines time zones. Async-first communication, overlap-hour rituals, and cultural awareness training built into onboarding.',
    metric: '3 time zones, 1 standard',
    color: '#34d399',
  },
]

export function PeopleSection() {
  return (
    <section id="people" className="py-24 px-5 md:px-20 max-w-[1440px] mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="w-10 h-[1.5px] bg-sky-400" />
        <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-sky-400">
          People & Development
        </span>
      </div>
      <h2 className="font-[family-name:var(--font-cal)] text-[28px] md:text-[52px] font-light text-zinc-200 tracking-[-0.02em] leading-[1.1] mb-4">
        Building the Team Behind the Metrics
      </h2>
      <p className="text-base text-zinc-500 max-w-[640px] leading-[1.85] font-light mb-8">
        Every KPI improvement starts with the people. These are the programs I designed and
        ran to develop, retain, and motivate high-performing support teams.
      </p>

      {/* 3D Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-0">
        {initiatives.map((item, idx) => (
          <CardContainer key={item.title} containerClassName="!py-6">
            <CardBody className="relative group/card bg-zinc-900 border border-white/[0.06] rounded-2xl !h-auto !w-full p-6">
              <CardItem translateZ={40} className="mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  {item.icon}
                </div>
              </CardItem>

              <CardItem translateZ={50}>
                <h3 className="text-lg font-semibold text-zinc-200">{item.title}</h3>
                <span className="text-[10px] font-bold tracking-[0.1em] text-zinc-500 uppercase">
                  {item.subtitle}
                </span>
              </CardItem>

              <CardItem translateZ={30} className="mt-4">
                <p className="text-sm text-zinc-500 leading-[1.75]">
                  {item.description}
                </p>
              </CardItem>

              <CardItem translateZ={60} className="mt-5">
                <div
                  className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.05em] px-3 py-1.5 rounded-full"
                  style={{
                    backgroundColor: `${item.color}12`,
                    color: item.color,
                  }}
                >
                  <TrendUp weight="bold" className="w-3.5 h-3.5" />
                  {item.metric}
                </div>
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  )
}
