'use client'

import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'
import { motion } from 'motion/react'
import { Quotes } from '@phosphor-icons/react'

const testimonials = [
  {
    quote: '\u201C \u201C \u201C',
    name: '\u2003',
    title: '\u2003',
  },
  {
    quote:
      'She is a student of her game. She knows both the art and science of support. Neha\'s action-orientation is top box. She has a penchant for thoughtful action in a timely manner. She is data-driven and always knows her numbers, inside and out. She is a people leader that holds her people and herself accountable for both the large and small. She drives stellar customer satisfaction scores and reads every single survey from a client. This is the sort of discipline and customer focus Neha has always exhibited. She is a good person with a great heart, truly a salt-of-the-earth leader.',
    name: 'Ed Benack',
    title: 'Chief Customer Officer, Corcentric — Former SVP & GM, Cvent — Founder, Microsoft Global Support Center',
  },
  {
    quote: '\u201D \u201D \u201D',
    name: '\u2004',
    title: '\u2004',
  },
]

interface TestimonialProps {
  testimonials?: Array<{ quote: string; authorName: string; authorTitle: string; authorCompany?: string }>
}

export function TestimonialSection({ testimonials: cmsTestimonials }: TestimonialProps) {
  const displayTestimonials = cmsTestimonials && cmsTestimonials.length > 0
    ? [
        { quote: '\u201C \u201C \u201C', name: '\u2003', title: '\u2003' },
        {
          quote: cmsTestimonials[0].quote,
          name: cmsTestimonials[0].authorName,
          title: cmsTestimonials[0].authorTitle || '',
        },
        { quote: '\u201D \u201D \u201D', name: '\u2004', title: '\u2004' },
      ]
    : testimonials
  return (
    <section id="testimonials" className="py-24 overflow-hidden">
      <div className="px-20 max-w-[1440px] mx-auto mb-12">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-[1.5px] bg-sky-400" />
          <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-sky-400">
            Testimonials
          </span>
        </div>
        <h2 className="font-[family-name:var(--font-cal)] text-[52px] font-light text-zinc-200 tracking-[-0.02em] leading-[1.1] mb-4">
          What Leadership Says
        </h2>
      </div>

      {/* Decorative Quote */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex justify-center mb-8"
      >
        <Quotes weight="duotone" className="w-12 h-12 text-sky-400 opacity-30" />
      </motion.div>

      {/* Infinite Moving Cards */}
      <InfiniteMovingCards
        items={displayTestimonials}
        speed="slow"
        className="mx-auto"
      />
    </section>
  )
}
