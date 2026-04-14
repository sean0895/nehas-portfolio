import React from 'react'
import type { Metadata } from 'next'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

import { NavigationSection } from '@/components/sections/NavigationSection'
import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { SOPsSection } from '@/components/sections/SOPsSection'
import { QualitySection } from '@/components/sections/QualitySection'
import { ReportingSection } from '@/components/sections/ReportingSection'
import { StrategySection } from '@/components/sections/StrategySection'
import { ThoughtLeadershipSection } from '@/components/sections/ThoughtLeadershipSection'
import { PeopleSection } from '@/components/sections/PeopleSection'
import { SystemsSection } from '@/components/sections/SystemsSection'
import { TestimonialSection } from '@/components/sections/TestimonialSection'
import { CredentialsSection } from '@/components/sections/CredentialsSection'
import { FooterSection } from '@/components/sections/FooterSection'

export const metadata: Metadata = {
  title: 'Neha Verma | Senior Manager, Customer Support Operations',
  description:
    '16+ years building support organizations that protect revenue, develop people, and turn customer data into strategy.',
}

export default async function HomePage() {
  const payload = await getPayload({ config: configPromise })

  // Fetch all CMS data in parallel
  const [statsData, competenciesData, sopsData, testimonialsData, credentialsData] =
    await Promise.all([
      payload.find({ collection: 'stats', sort: 'order', limit: 10 }),
      payload.find({ collection: 'competencies', sort: 'order', limit: 10 }),
      payload.find({ collection: 'sops', sort: 'order', limit: 10 }),
      payload.find({ collection: 'testimonials', limit: 10 }),
      payload.find({ collection: 'credentials', sort: 'order', limit: 10 }),
    ])

  return (
    <div className="min-h-screen bg-[#0A0A0B]">
      <NavigationSection />
      <HeroSection stats={statsData.docs as any} />
      <AboutSection competencies={competenciesData.docs as any} />
      <SOPsSection sops={sopsData.docs as any} />
      <QualitySection />
      <ReportingSection />
      <StrategySection />
      <ThoughtLeadershipSection />
      <PeopleSection />
      <SystemsSection />
      <TestimonialSection testimonials={testimonialsData.docs as any} />
      <CredentialsSection credentials={credentialsData.docs as any} />
      <FooterSection />
    </div>
  )
}
