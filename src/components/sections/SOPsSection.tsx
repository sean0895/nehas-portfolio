'use client'

import { Timeline } from '@/components/ui/timeline'
import { HoverEffect } from '@/components/ui/card-hover-effect'

const sopTimeline = [
  {
    title: '01',
    content: (
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h3 className="text-xl font-semibold text-white">Support Agent Standard Day</h3>
          <span className="text-[9px] font-bold tracking-[0.1em] px-2.5 py-1 rounded-lg bg-emerald-400/5 text-emerald-400 uppercase">
            Operating Standard
          </span>
        </div>
        <p className="text-sm text-zinc-500 leading-relaxed mb-4">
          A shift-by-shift guide defining exactly what a support agent should be doing — and when — across every hour of the working day.
        </p>
        <div className="grid grid-cols-5 gap-2">
          {['Start of Shift', 'Hours 1-3', 'Mid-Day', 'Last Hour', 'Daily Close'].map((step, i) => (
            <div key={step} className="text-center">
              <div className="w-10 h-10 rounded-full bg-emerald-400 text-white text-sm font-bold flex items-center justify-center mx-auto mb-2">
                {i + 1}
              </div>
              <span className="text-[10px] text-zinc-500">{step}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: '02',
    content: (
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h3 className="text-xl font-semibold text-white">Case Handling Process</h3>
          <span className="text-[9px] font-bold tracking-[0.1em] px-2.5 py-1 rounded-lg bg-emerald-400/5 text-emerald-400 uppercase">
            Process SOP
          </span>
        </div>
        <p className="text-sm text-zinc-500 leading-relaxed mb-3">
          A scenario-based guide covering the full ticket lifecycle — from acknowledgment through resolution, escalation, and closure.
        </p>
        <p className="text-xs text-zinc-500">
          3-Strike Follow-Up Rule: 2 days &rarr; 2 days &rarr; 3 days &rarr; 24hr close
        </p>
      </div>
    ),
  },
  {
    title: '03',
    content: (
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h3 className="text-xl font-semibold text-white">Ticket Priority & SLA Framework</h3>
          <span className="text-[9px] font-bold tracking-[0.1em] px-2.5 py-1 rounded-lg bg-sky-400/5 text-sky-400 uppercase">
            Priority Standard
          </span>
        </div>
        <p className="text-sm text-zinc-500 leading-relaxed mb-3">
          A priority classification system aligning Support, Engineering, and QA on one shared severity language.
        </p>
        <div className="flex gap-6 text-xs text-zinc-500">
          <span>Urgent: 3/day</span>
          <span>High: 2/day</span>
          <span>Normal: 1/3 days</span>
          <span>Low: Weekly</span>
        </div>
      </div>
    ),
  },
  {
    title: '04',
    content: (
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h3 className="text-xl font-semibold text-white">Customer Communication Templates</h3>
          <span className="text-[9px] font-bold tracking-[0.1em] px-2.5 py-1 rounded-lg bg-sky-400/5 text-sky-400 uppercase">
            Template Library
          </span>
        </div>
        <p className="text-sm text-zinc-500 leading-relaxed">
          Standardized, tested email templates for common support scenarios — built on what actually drives positive CSAT outcomes.
        </p>
      </div>
    ),
  },
]

interface SOPsProps {
  sops?: Array<{ title: string; docType: string; summary: string; processSteps?: Array<{ stepNumber: number; title: string }>; impact?: string }>
}

export function SOPsSection({ sops: cmsSops }: SOPsProps) {
  // When CMS has SOPs, build timeline from them; otherwise use hardcoded
  const timelineData = cmsSops && cmsSops.length > 0
    ? cmsSops.map((sop: any, i: number) => ({
        title: String(i + 1).padStart(2, '0'),
        content: (
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-xl font-semibold text-white">{sop.title}</h3>
              <span className={`text-[9px] font-bold tracking-[0.1em] px-2.5 py-1 rounded-lg uppercase ${i < 2 ? 'bg-emerald-400/5 text-emerald-400' : 'bg-sky-400/5 text-sky-400'}`}>
                {sop.docType}
              </span>
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed mb-3">{sop.summary}</p>
            {sop.impact && <p className="text-xs text-zinc-500 italic">{sop.impact}</p>}
          </div>
        ),
      }))
    : sopTimeline
  return (
    <section id="sops" className="max-w-[1440px] mx-auto">
      <div className="px-5 md:px-20 pt-24 pb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-[1.5px] bg-sky-400" />
          <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-sky-400">
            SOPs & Workflows
          </span>
        </div>
        <h2 className="font-[family-name:var(--font-cal)] text-[28px] md:text-[52px] font-light text-zinc-200 tracking-[-0.02em] leading-[1.1] mb-4">
          How I Operationalize Support
        </h2>
        <p className="text-base text-zinc-500 max-w-[640px] leading-[1.85] font-light">
          Actual operating documents built for real teams — frameworks designed around real workflows, real failure modes, and real customer behavior.
        </p>
      </div>
      <Timeline data={timelineData} />
    </section>
  )
}
