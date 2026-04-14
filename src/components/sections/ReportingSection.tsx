'use client'

import { Tabs } from '@/components/ui/tabs'
import { motion } from 'motion/react'
import {
  ChartBar,
  Timer,
  Smiley,
  Certificate,
  Ticket,
} from '@phosphor-icons/react'

const stats = [
  {
    value: '75%',
    label: 'Utilization Rate',
    icon: <Timer weight="duotone" className="w-5 h-5 text-sky-400" />,
    description: 'Optimal agent productivity across all shifts',
  },
  {
    value: '95%+',
    label: 'OSAT Score',
    icon: <Smiley weight="duotone" className="w-5 h-5 text-emerald-400" />,
    description: 'Overall satisfaction consistently above target',
  },
  {
    value: '88%',
    label: 'Coaching Score',
    icon: <Certificate weight="duotone" className="w-5 h-5 text-sky-400" />,
    description: 'Team average on 8-dimension quality framework',
  },
  {
    value: '9.5K+',
    label: 'Tickets / Month',
    icon: <Ticket weight="duotone" className="w-5 h-5 text-emerald-400" />,
    description: 'Monthly volume handled with consistent SLAs',
  },
]

const kpiTableData = [
  { metric: 'First Response Time', target: '< 2 hours', actual: '1.4 hrs', status: 'above' },
  { metric: 'Resolution Time (P1)', target: '< 4 hours', actual: '3.1 hrs', status: 'above' },
  { metric: 'Resolution Time (P2)', target: '< 8 hours', actual: '6.8 hrs', status: 'above' },
  { metric: 'CSAT (Ticket)', target: '> 92%', actual: '95.2%', status: 'above' },
  { metric: 'Agent Utilization', target: '70-80%', actual: '75%', status: 'on-target' },
  { metric: 'Escalation Rate', target: '< 12%', actual: '8.4%', status: 'above' },
  { metric: 'Reopen Rate', target: '< 5%', actual: '3.1%', status: 'above' },
  { metric: 'QA Coaching Score', target: '> 85%', actual: '88%', status: 'above' },
]

function StatsOverview() {
  return (
    <div className="w-full rounded-2xl bg-zinc-900 border border-white/[0.08] p-8">
      <h3 className="font-[family-name:var(--font-cal)] text-2xl font-light text-zinc-200 mb-6">
        Key Performance Indicators
      </h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-[#09090B] border border-white/[0.06] rounded-xl p-5"
          >
            <div className="flex items-center gap-2 mb-3">{stat.icon}
              <span className="text-[10px] font-medium tracking-[0.1em] text-zinc-500 uppercase">
                {stat.label}
              </span>
            </div>
            <div className="font-[family-name:var(--font-cal)] text-[40px] font-semibold text-zinc-200 leading-none tracking-[-0.02em]">
              {stat.value}
            </div>
            <p className="text-[12px] text-zinc-500 mt-2 leading-relaxed">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

function KPITable() {
  return (
    <div className="w-full rounded-2xl bg-zinc-900 border border-white/[0.08] p-8">
      <h3 className="font-[family-name:var(--font-cal)] text-2xl font-light text-zinc-200 mb-6">
        SLA Performance Table
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-white/[0.08]">
              <th className="text-[10px] font-bold tracking-[0.1em] text-zinc-500 uppercase pb-3 pr-8">
                Metric
              </th>
              <th className="text-[10px] font-bold tracking-[0.1em] text-zinc-500 uppercase pb-3 pr-8">
                Target
              </th>
              <th className="text-[10px] font-bold tracking-[0.1em] text-zinc-500 uppercase pb-3 pr-8">
                Actual
              </th>
              <th className="text-[10px] font-bold tracking-[0.1em] text-zinc-500 uppercase pb-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {kpiTableData.map((row) => (
              <tr key={row.metric} className="border-b border-white/[0.04]">
                <td className="text-sm text-zinc-200 py-3.5 pr-8 font-medium">
                  {row.metric}
                </td>
                <td className="text-sm text-zinc-500 py-3.5 pr-8">
                  {row.target}
                </td>
                <td className="text-sm text-zinc-200 py-3.5 pr-8 font-semibold">
                  {row.actual}
                </td>
                <td className="py-3.5">
                  <span
                    className={`text-[9px] font-bold tracking-[0.1em] uppercase px-2.5 py-1 rounded-lg ${
                      row.status === 'above'
                        ? 'bg-emerald-400/5 text-emerald-400'
                        : 'bg-sky-400/5 text-sky-400'
                    }`}
                  >
                    {row.status === 'above' ? 'Above Target' : 'On Target'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function ReportingProcess() {
  return (
    <div className="w-full rounded-2xl bg-zinc-900 border border-white/[0.08] p-8">
      <h3 className="font-[family-name:var(--font-cal)] text-2xl font-light text-zinc-200 mb-6">
        Reporting Cadence
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            cadence: 'Daily',
            items: ['Queue health check', 'SLA breach alerts', 'Agent utilization snapshot'],
            color: '#34d399',
          },
          {
            cadence: 'Weekly',
            items: ['Trend analysis', 'Top issue categories', 'Coaching score reviews'],
            color: '#38bdf8',
          },
          {
            cadence: 'Monthly / QBR',
            items: ['Executive summary', 'YoY comparisons', 'Headcount & capacity planning'],
            color: '#34d399',
          },
        ].map((item) => (
          <div key={item.cadence} className="bg-[#09090B] border border-white/[0.06] rounded-xl p-5">
            <div
              className="text-[10px] font-bold tracking-[0.1em] uppercase mb-3"
              style={{ color: item.color }}
            >
              {item.cadence}
            </div>
            <ul className="space-y-2">
              {item.items.map((li) => (
                <li key={li} className="text-sm text-zinc-500 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: item.color }} />
                  {li}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

const tabs = [
  {
    title: 'KPI Overview',
    value: 'overview',
    content: <StatsOverview />,
  },
  {
    title: 'SLA Performance',
    value: 'sla',
    content: <KPITable />,
  },
  {
    title: 'Reporting Cadence',
    value: 'cadence',
    content: <ReportingProcess />,
  },
]

export function ReportingSection() {
  return (
    <section id="reporting" className="py-24 px-20 max-w-[1440px] mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="w-10 h-[1.5px] bg-sky-400" />
        <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-sky-400">
          Reporting & Analytics
        </span>
      </div>
      <h2 className="font-[family-name:var(--font-cal)] text-[52px] font-light text-zinc-200 tracking-[-0.02em] leading-[1.1] mb-4">
        Data-Driven Operations
      </h2>
      <p className="text-base text-zinc-500 max-w-[640px] leading-[1.85] font-light mb-10">
        I build reporting systems that turn raw support data into actionable intelligence —
        dashboards that leadership actually uses to make decisions.
      </p>

      {/* Stat pills */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap gap-4 mb-10"
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex items-center gap-2 bg-[rgba(56,189,248,0.05)] border border-[rgba(139,139,139,0.06)] rounded-full px-5 py-2"
          >
            <ChartBar weight="duotone" className="w-4 h-4 text-sky-400" />
            <span className="text-sm font-semibold text-zinc-200">{stat.value}</span>
            <span className="text-xs text-zinc-500">{stat.label}</span>
          </div>
        ))}
      </motion.div>

      {/* Tabs */}
      <div className="relative h-[520px] [perspective:1000px]">
        <Tabs
          tabs={tabs}
          containerClassName="justify-start gap-2 mb-6"
          tabClassName="text-sm"
          activeTabClassName="!bg-sky-400/[0.06]"
          contentClassName="!mt-6"
        />
      </div>
    </section>
  )
}
