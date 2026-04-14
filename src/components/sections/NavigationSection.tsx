'use client'

import { FloatingNav } from '@/components/ui/floating-navbar'
import {
  User,
  ClipboardText,
  ShieldCheck,
  ChartBar,
  Compass,
  UsersThree,
  Gear,
  Certificate,
} from '@phosphor-icons/react'

const navItems = [
  {
    name: 'About',
    link: '#about',
    icon: <User weight="duotone" className="w-4 h-4" />,
  },
  {
    name: 'SOPs',
    link: '#sops',
    icon: <ClipboardText weight="duotone" className="w-4 h-4" />,
  },
  {
    name: 'Quality',
    link: '#quality',
    icon: <ShieldCheck weight="duotone" className="w-4 h-4" />,
  },
  {
    name: 'Reporting',
    link: '#reporting',
    icon: <ChartBar weight="duotone" className="w-4 h-4" />,
  },
  {
    name: 'Strategy',
    link: '#strategy',
    icon: <Compass weight="duotone" className="w-4 h-4" />,
  },
  {
    name: 'People',
    link: '#people',
    icon: <UsersThree weight="duotone" className="w-4 h-4" />,
  },
  {
    name: 'Systems',
    link: '#systems',
    icon: <Gear weight="duotone" className="w-4 h-4" />,
  },
  {
    name: 'Credentials',
    link: '#credentials',
    icon: <Certificate weight="duotone" className="w-4 h-4" />,
  },
]

export function NavigationSection() {
  return <FloatingNav navItems={navItems} />
}
