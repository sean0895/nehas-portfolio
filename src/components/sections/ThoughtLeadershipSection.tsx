'use client'

import { LampContainer } from '@/components/ui/lamp'
import { FlipWords } from '@/components/ui/flip-words'
import { motion } from 'motion/react'
import { Robot, Lightning, Brain, Handshake } from '@phosphor-icons/react'

const flipWords = [
  'redefining workflows',
  'augmenting agents',
  'scaling quality',
  'transforming CX',
]

const lessons = [
  {
    icon: <Robot weight="duotone" className="w-6 h-6 text-sky-400" />,
    title: 'AI handles volume, humans handle nuance',
    description:
      'The best AI implementations don\'t replace agents — they remove the repetitive work so humans can focus on the complex, emotional, and high-value interactions that actually drive loyalty.',
  },
  {
    icon: <Lightning weight="duotone" className="w-6 h-6 text-sky-400" />,
    title: 'Automation without empathy is just faster failure',
    description:
      'I\'ve seen teams deploy chatbots that deflect tickets but tank CSAT. The goal isn\'t fewer tickets — it\'s better outcomes. Every automation should be measured by resolution quality, not deflection rate.',
  },
  {
    icon: <Brain weight="duotone" className="w-6 h-6 text-sky-400" />,
    title: 'Support data is the most underused product signal',
    description:
      'Your support team talks to customers every day. The patterns in ticket data — feature gaps, UX friction, onboarding failures — are a goldmine for product teams. I build systems to surface those signals.',
  },
  {
    icon: <Handshake weight="duotone" className="w-6 h-6 text-sky-400" />,
    title: 'The manager\'s job is to build systems, not fight fires',
    description:
      'If you\'re personally solving escalations every day, you haven\'t built the right framework. My approach: build the playbook, train the team, measure relentlessly, and iterate. Then the system works without you.',
  },
]

export function ThoughtLeadershipSection() {
  return (
    <section id="thought-leadership" className="relative overflow-hidden">
      <LampContainer className="!min-h-[auto] pt-24 pb-0">
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className="text-center max-w-[800px] mx-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-[1.5px] bg-sky-400" />
            <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-sky-400">
              Thought Leadership
            </span>
            <span className="w-10 h-[1.5px] bg-sky-400" />
          </div>

          <h2 className="font-[family-name:var(--font-cal)] text-[52px] font-light text-zinc-200 tracking-[-0.02em] leading-[1.1] mb-4">
            AI is changing customer support.
          </h2>

          <div className="flex items-center justify-center text-lg text-zinc-500 font-light">
            <span>The future of CX is</span>
            <FlipWords
              words={flipWords}
              className="!text-sky-400 font-medium"
              duration={3000}
            />
          </div>
        </motion.div>
      </LampContainer>

      {/* Lesson Cards — inside a section container */}
      <div className="px-12 max-w-[1440px] mx-auto -mt-32 relative z-50 pb-12">
        <div className="bg-zinc-900/60 border border-white/[0.06] rounded-3xl p-8 backdrop-blur-sm">
          <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-[0.15em] mb-6 px-1">
            What I believe about AI in support
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {lessons.map((lesson, idx) => (
              <motion.div
                key={lesson.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-zinc-800/50 border border-white/[0.04] rounded-xl p-6 border-l-4 border-l-sky-400/30"
              >
                <div className="flex items-center gap-3 mb-3">
                  {lesson.icon}
                  <h4 className="text-sm font-semibold text-zinc-200">
                    {lesson.title}
                  </h4>
                </div>
                <p className="text-sm text-zinc-500 leading-[1.75]">
                  {lesson.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
