'use client'

import { motion } from 'motion/react'
import { EnvelopeSimple, LinkedinLogo, FileText } from '@phosphor-icons/react'

const links = [
  {
    icon: <EnvelopeSimple weight="duotone" className="w-5 h-5" />,
    label: 'Email',
    href: 'mailto:neha@example.com',
  },
  {
    icon: <LinkedinLogo weight="duotone" className="w-5 h-5" />,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/nehaverma',
  },
  {
    icon: <FileText weight="duotone" className="w-5 h-5" />,
    label: 'Resume',
    href: '#',
  },
]

export function FooterSection() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#09090B]">
      <div className="max-w-[1440px] mx-auto px-20 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          {/* Left: Name + Role */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-[family-name:var(--font-cal)] text-[36px] font-light text-zinc-200 tracking-[-0.02em] leading-[1.1] mb-2">
              Neha <span className="italic text-sky-400">Verma</span>
            </h3>
            <p className="text-sm text-zinc-500 mb-1">
              Senior Manager, Customer Support Operations
            </p>
            <p className="text-xs text-zinc-500">
              16+ years building support organizations that protect revenue, develop
              people, and turn customer data into strategy.
            </p>
          </motion.div>

          {/* Right: Contact Links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex gap-4 lg:justify-end"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-2 bg-zinc-900 border border-white/[0.06] rounded-full px-5 py-2.5 text-zinc-500 hover:text-zinc-200 hover:border-[rgba(245,158,11,0.3)] transition-all duration-200"
              >
                {link.icon}
                <span className="text-sm font-medium">{link.label}</span>
              </a>
            ))}
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-zinc-500 tracking-wide">
            &copy; {new Date().getFullYear()} Neha Verma. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] text-zinc-500 tracking-wide">
              Open to senior CX leadership opportunities
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
