'use client'

import { AuroraBackground } from '@/components/ui/aurora-background'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { FlipWords } from '@/components/ui/flip-words'
import { motion } from 'motion/react'

const defaultStats = [
  { value: '16+', label: 'Years Leading\nSupport Orgs' },
  { value: '95%', label: 'Maintaining\nCSAT' },
  { value: '$25M', label: 'Revenue from\nSupport Model' },
]

const certs = ['PMP', 'COPC Certified', 'Six Sigma Green Belt', 'Scrum Master']

interface HeroProps {
  stats?: Array<{ value: string; label: string; prefix?: string | null; suffix?: string | null }>
}

export function HeroSection({ stats: cmsStats }: HeroProps) {
  const stats = cmsStats && cmsStats.length > 0
    ? cmsStats.map((s: any) => ({ value: `${s.prefix || ''}${s.value}${s.suffix || ''}`, label: s.label }))
    : defaultStats
  return (
    <AuroraBackground className="relative">
      <div className="w-full max-w-[1440px] mx-auto px-5 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen pt-24">
        {/* Left column */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-10 h-[1.5px] bg-sky-400" />
            <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-sky-400">
              Senior Manager, Technical Customer Support Operations
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-[family-name:var(--font-cal)] text-[48px] md:text-[96px] font-light leading-[1.0] tracking-[-0.03em] mb-7 text-white"
          >
            Neha
            <br />
            <span className="italic text-sky-400">Verma</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <TextGenerateEffect
              words="16+ years building support organizations that don't just resolve tickets — they protect revenue, develop people, and turn customer data into strategy."
              className="!text-lg !font-light !text-zinc-500 max-w-[480px] !leading-[1.75]"
              duration={0.4}
            />
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex gap-8 md:gap-16 mt-12 mb-7"
          >
            {stats.map((stat) => (
              <div key={stat.value}>
                <div className="font-[family-name:var(--font-cal)] text-[32px] md:text-[52px] font-semibold text-sky-400 leading-none tracking-[-0.02em]">
                  {stat.value}
                </div>
                <div className="text-[9px] font-medium text-zinc-500 uppercase tracking-[0.12em] mt-1.5 whitespace-pre-line">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Cert pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex gap-3 flex-wrap"
          >
            {certs.map((cert) => (
              <span
                key={cert}
                className="bg-sky-400/5 border border-sky-400/10 text-sky-400 text-[10px] font-medium px-4 py-1.5 rounded-full tracking-[0.1em] uppercase"
              >
                {cert}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right column — Photo placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative flex items-center justify-center"
        >
          {/* Decorative rings */}
          <div className="absolute w-[280px] h-[360px] md:w-[420px] md:h-[520px] border border-white/[0.04] rounded-[32px]" />
          <div className="absolute w-[240px] h-[320px] md:w-[360px] md:h-[460px] border border-white/[0.03] rounded-[24px]" />

          {/* Photo card with actual portrait */}
          <div className="w-[200px] h-[280px] md:w-[300px] md:h-[400px] rounded-3xl overflow-hidden border-[2.5px] border-white/10 shadow-[0_32px_80px_rgba(0,0,0,0.6)] relative z-10">
            <img
              src="/images/portrait-0.jpeg"
              alt="Neha Verma"
              className="w-full h-full object-cover object-center"
            />
            {/* Award badge overlapping bottom-right of photo */}
            <div className="absolute bottom-4 right-4 z-20 w-20 h-20 rounded-full bg-gradient-to-br from-white to-zinc-100 border-2 border-white/30 shadow-[0_8px_24px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center">
              <span className="text-[7px] font-bold tracking-[0.08em] text-zinc-700 uppercase text-center leading-[1.3]">
                Excellence
                <br />
                2025
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </AuroraBackground>
  )
}
