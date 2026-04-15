'use client'

import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'
import { motion } from 'motion/react'
import { Quotes } from '@phosphor-icons/react'

const testimonials = [
  {
    quote:
      'She is a student of her game. She knows both the art and science of support. Neha\'s action-orientation is top box. She has a penchant for thoughtful action in a timely manner. She is data-driven and always knows her numbers, inside and out. She is a people leader that holds her people and herself accountable for both the large and small. She drives stellar customer satisfaction scores and reads every single survey from a client. This is the sort of discipline and customer focus Neha has always exhibited. She is a good person with a great heart, truly a salt-of-the-earth leader.',
    name: 'Ed Benack',
    title: 'Chief Customer Officer, Corcentric — Former SVP & GM, Cvent — Founder, Microsoft Global Support Center',
  },
  {
    quote:
      'Neha is one of the best leaders, peers that I have ever worked with. Great people leader skills, amazing analytical skills. Quick in her thinking, quickest in turning around requirements to manage a business. Neha established 2 new support teams for customer care and stabalized them. She always thinks like an intraprenuer. She is extremely agile and always willing to help her peers come up the learning curve. She is an asset to any organization she works with and I have had a great privilege of working with her side by side.',
    name: 'Nikunj Arora',
    title: 'Manager @ Capgemini Engineering | Driving Operational Excellence',
  },
  {
    quote:
      'I have worked with Neha for over 7 years and she has been a fantastic colleague and friend. She is extremely hard-working and dedicated to her team and customer satisfaction. Likewise, her positive attitude and presence is contagious. She truly is a wonderful asset, who is willing to take on new challenges, support a global team, and ensure on-time delivery of all commitments.',
    name: 'Chelsea Steinberg',
    title: 'Director at Cvent',
  },
  {
    quote:
      'I\'m lucky to have worked with Neha, a manager who\'s not only interested in the company\'s bottom line, but also in her teammate\'s professional growth. I was hired as a Product Consultant for Cvent and she was my first manager in the organization. Her convincing grasp over the industry and business acumen is the reason, I am a better professional today. Neha was not only my boss at the department but a true leader. I wish her all the luck in her future endeavors.',
    name: 'Ishan Singh',
    title: 'Event Technology @ Cvent | Driving Event Solutions',
  },
  {
    quote:
      'Neha is the best manager i have ever worked with and i have worked with plenty from various organisations.\nNeha is a true leader and knows what leading from the front actually means.\nBy being such she inspires each and every person in her team to bring their best to work each day.\nAlso makes other teams super jealous though!\n\nAs an individual, well lets just say i have never seen a person who is half as motivated, disciplined and focused as her.\nI remember how she could literally tune out just about anything untill all thw work was done.\nAnd when the work was done she was the one leading the fun part too.\n\nI can never say enough to justify how she is the best leader ever, but she just is.',
    name: 'Ankur Kaushal',
    title: 'If you have a problem, I have a solution',
  },
]

interface TestimonialProps {
  testimonials?: Array<{ quote: string; authorName: string; authorTitle: string; authorCompany?: string }>
}

export function TestimonialSection({ testimonials: cmsTestimonials }: TestimonialProps) {
  const displayTestimonials = cmsTestimonials && cmsTestimonials.length > 0
    ? cmsTestimonials.map((t) => ({
        quote: t.quote,
        name: t.authorName,
        title: t.authorTitle || '',
      }))
    : testimonials
  return (
    <section id="testimonials" className="py-24 overflow-hidden">
      <div className="px-5 md:px-20 max-w-[1440px] mx-auto mb-12">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-[1.5px] bg-sky-400" />
          <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-sky-400">
            Testimonials
          </span>
        </div>
        <h2 className="font-[family-name:var(--font-cal)] text-[28px] md:text-[52px] font-light text-zinc-200 tracking-[-0.02em] leading-[1.1] mb-4">
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
