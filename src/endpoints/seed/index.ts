import type { CollectionSlug, GlobalSlug, Payload, PayloadRequest, File } from 'payload'

import { contactForm as contactFormData } from './contact-form'
import { contact as contactPageData } from './contact-page'
import { home } from './home'
import { image1 } from './image-1'
import { image2 } from './image-2'
import { imageHero1 } from './image-hero-1'
import { post1 } from './post-1'
import { post2 } from './post-2'
import { post3 } from './post-3'

const collections: CollectionSlug[] = [
  'categories',
  'media',
  'pages',
  'posts',
  'forms',
  'form-submissions',
  'search',
  'competencies',
  'sops',
  'credentials',
  'testimonials',
  'stats',
]

const globals: GlobalSlug[] = ['header', 'footer']

const categories = ['Technology', 'News', 'Finance', 'Design', 'Software', 'Engineering']

// Next.js revalidation errors are normal when seeding the database without a server running
// i.e. running `yarn seed` locally instead of using the admin UI within an active app
// The app is not running to revalidate the pages and so the API routes are not available
// These error messages can be ignored: `Error hitting revalidate route for...`
export const seed = async ({
  payload,
  req,
}: {
  payload: Payload
  req: PayloadRequest
}): Promise<void> => {
  payload.logger.info('Seeding database...')

  // we need to clear the media directory before seeding
  // as well as the collections and globals
  // this is because while `yarn seed` drops the database
  // the custom `/api/seed` endpoint does not
  payload.logger.info(`— Clearing collections and globals...`)

  // clear the database
  await Promise.all(
    globals.map((global) =>
      payload.updateGlobal({
        slug: global,
        data: {
          navItems: [],
        },
        depth: 0,
        context: {
          disableRevalidate: true,
        },
      }),
    ),
  )

  await Promise.all(
    collections.map((collection) => payload.db.deleteMany({ collection, req, where: {} })),
  )

  await Promise.all(
    collections
      .filter((collection) => Boolean(payload.collections[collection].config.versions))
      .map((collection) => payload.db.deleteVersions({ collection, req, where: {} })),
  )

  payload.logger.info(`— Seeding demo author and user...`)

  await payload.delete({
    collection: 'users',
    depth: 0,
    where: {
      email: {
        equals: 'demo-author@example.com',
      },
    },
  })

  payload.logger.info(`— Seeding media...`)

  const [image1Buffer, image2Buffer, image3Buffer, hero1Buffer] = await Promise.all([
    fetchFileByURL(
      'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-post1.webp',
    ),
    fetchFileByURL(
      'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-post2.webp',
    ),
    fetchFileByURL(
      'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-post3.webp',
    ),
    fetchFileByURL(
      'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-hero1.webp',
    ),
  ])

  const [demoAuthor, image1Doc, image2Doc, image3Doc, imageHomeDoc] = await Promise.all([
    payload.create({
      collection: 'users',
      data: {
        name: 'Demo Author',
        email: 'demo-author@example.com',
        password: 'password',
      },
    }),
    payload.create({
      collection: 'media',
      data: image1,
      file: image1Buffer,
    }),
    payload.create({
      collection: 'media',
      data: image2,
      file: image2Buffer,
    }),
    payload.create({
      collection: 'media',
      data: image2,
      file: image3Buffer,
    }),
    payload.create({
      collection: 'media',
      data: imageHero1,
      file: hero1Buffer,
    }),
    categories.map((category) =>
      payload.create({
        collection: 'categories',
        data: {
          title: category,
          slug: category,
        },
      }),
    ),
  ])

  payload.logger.info(`— Seeding posts...`)

  // Do not create posts with `Promise.all` because we want the posts to be created in order
  // This way we can sort them by `createdAt` or `publishedAt` and they will be in the expected order
  const post1Doc = await payload.create({
    collection: 'posts',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: post1({ heroImage: image1Doc, blockImage: image2Doc, author: demoAuthor }),
  })

  const post2Doc = await payload.create({
    collection: 'posts',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: post2({ heroImage: image2Doc, blockImage: image3Doc, author: demoAuthor }),
  })

  const post3Doc = await payload.create({
    collection: 'posts',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: post3({ heroImage: image3Doc, blockImage: image1Doc, author: demoAuthor }),
  })

  // update each post with related posts
  await payload.update({
    id: post1Doc.id,
    collection: 'posts',
    data: {
      relatedPosts: [post2Doc.id, post3Doc.id],
    },
  })
  await payload.update({
    id: post2Doc.id,
    collection: 'posts',
    data: {
      relatedPosts: [post1Doc.id, post3Doc.id],
    },
  })
  await payload.update({
    id: post3Doc.id,
    collection: 'posts',
    data: {
      relatedPosts: [post1Doc.id, post2Doc.id],
    },
  })

  payload.logger.info(`— Seeding contact form...`)

  const contactForm = await payload.create({
    collection: 'forms',
    depth: 0,
    data: contactFormData,
  })

  payload.logger.info(`— Seeding pages...`)

  const [_, contactPage] = await Promise.all([
    payload.create({
      collection: 'pages',
      depth: 0,
      data: home({ heroImage: imageHomeDoc, metaImage: image2Doc }),
    }),
    payload.create({
      collection: 'pages',
      depth: 0,
      data: contactPageData({ contactForm: contactForm }),
    }),
  ])

  payload.logger.info(`— Seeding globals...`)

  await Promise.all([
    payload.updateGlobal({
      slug: 'header',
      data: {
        navItems: [
          {
            link: {
              type: 'custom',
              label: 'Posts',
              url: '/posts',
            },
          },
          {
            link: {
              type: 'reference',
              label: 'Contact',
              reference: {
                relationTo: 'pages',
                value: contactPage.id,
              },
            },
          },
        ],
      },
    }),
    payload.updateGlobal({
      slug: 'footer',
      data: {
        navItems: [
          {
            link: {
              type: 'custom',
              label: 'Admin',
              url: '/admin',
            },
          },
          {
            link: {
              type: 'custom',
              label: 'Source Code',
              newTab: true,
              url: 'https://github.com/payloadcms/payload/tree/main/templates/website',
            },
          },
          {
            link: {
              type: 'custom',
              label: 'Payload',
              newTab: true,
              url: 'https://payloadcms.com/',
            },
          },
        ],
      },
    }),
  ])

  // ── Portfolio Content ──
  payload.logger.info(`— Seeding portfolio stats...`)
  await Promise.all([
    payload.create({ collection: 'stats', data: { value: '16', suffix: '+', label: 'Years Leading Support Orgs', order: 1 } }),
    payload.create({ collection: 'stats', data: { value: '32', suffix: '%', label: 'CSAT YoY Improvement', order: 2 } }),
    payload.create({ collection: 'stats', data: { value: '25', prefix: '$', suffix: 'M', label: 'Revenue from Support Model', order: 3 } }),
  ])

  payload.logger.info(`— Seeding competencies...`)
  await Promise.all([
    payload.create({ collection: 'competencies', data: { title: 'Support Operations Architecture', description: 'End-to-end workflow design, SLA frameworks, queue management', category: 'operations', order: 1 } }),
    payload.create({ collection: 'competencies', data: { title: 'QBR / Executive Reporting', description: 'Monthly and quarterly business reviews, PowerBI, CRM analytics', category: 'reporting', order: 2 } }),
    payload.create({ collection: 'competencies', data: { title: 'Quality & Coaching Programs', description: 'Structured QA frameworks, agent development, score improvement', category: 'quality', order: 3 } }),
    payload.create({ collection: 'competencies', data: { title: 'Customer Segmentation Strategy', description: 'High/mid/low touch models, white-glove programs', category: 'segmentation', order: 4 } }),
    payload.create({ collection: 'competencies', data: { title: 'People Development', description: 'Development plans, cross-training, performance management', category: 'people', order: 5 } }),
    payload.create({ collection: 'competencies', data: { title: 'AI & Systems Improvement', description: 'Automation, CRM enhancements, tooling strategy', category: 'ai', order: 6 } }),
  ])

  payload.logger.info(`— Seeding SOPs...`)
  await payload.create({ collection: 'sops', data: { title: 'Support Agent Standard Day', docType: 'operating-standard', summary: 'A shift-by-shift guide defining exactly what a support agent should be doing and when across every hour of the working day.', keyPoints: [{ point: 'No new case unacknowledged for more than 24 hours (4 hours for Urgent/High)' }, { point: 'Whoever picks up a ticket first owns the customer experience' }, { point: 'Every high-priority ticket gets an internal note before end of shift' }, { point: 'Phone availability maintained — no queue goes dark without backup confirmed' }], processSteps: [{ stepNumber: 1, title: 'Start of Shift', description: 'Triage queue, Urgent/High first' }, { stepNumber: 2, title: 'Hours 1-3', description: 'New cases, SLA compliance, outbound calls' }, { stepNumber: 3, title: 'Mid-Day', description: 'Pending review, backlog, escalation follow-ups' }, { stepNumber: 4, title: 'Last Hour', description: 'Queue clear, next-day prep, internal notes' }, { stepNumber: 5, title: 'Daily Close', description: 'Utilization check, timer review, log off' }], impact: 'Morning SLA breach rate dropped significantly after implementation', order: 1 } })
  await payload.create({ collection: 'sops', data: { title: 'Case Handling Process', docType: 'process-sop', summary: 'A scenario-based guide covering the full ticket lifecycle from acknowledgment through resolution, escalation, and closure.', keyPoints: [{ point: '3-Strike Follow-Up Rule: 2 days then 2 days then 3 days then 24hr close' }, { point: 'First by email, second by phone, third a final email with explicit closure notice' }], processSteps: [{ stepNumber: 1, title: 'Gather Info', description: 'Steps to reproduce, screenshots' }, { stepNumber: 2, title: 'Reproduce', description: 'Replicate in sandbox' }, { stepNumber: 3, title: 'Escalate', description: 'Assign to Engineering' }, { stepNumber: 4, title: 'Monitor', description: 'Weekly customer updates' }, { stepNumber: 5, title: 'Fix & Test', description: 'Validate in production' }, { stepNumber: 6, title: 'RCA & Close', description: 'Document for prevention' }], impact: 'Standardized lifecycle reduced ticket ping-pong by 40%', order: 2 } })
  await payload.create({ collection: 'sops', data: { title: 'Ticket Priority & SLA Framework', docType: 'priority-standard', summary: 'A priority classification system aligning Support, Engineering, and QA on one shared severity language.', keyPoints: [{ point: 'Urgent: 3 updates per day' }, { point: 'High: 2 updates per day' }, { point: 'Normal: 1 update every 3 days' }, { point: 'Low: Weekly updates until resolved' }], processSteps: [{ stepNumber: 1, title: 'Urgent (P4)', description: 'System fully down, no workaround' }, { stepNumber: 2, title: 'High (P3)', description: 'Major functionality broken' }, { stepNumber: 3, title: 'Normal (P2)', description: 'Standard issues, performance problems' }, { stepNumber: 4, title: 'Low (P1)', description: 'Cosmetic or informational' }], impact: 'Unified severity language eliminated cross-team confusion', order: 3 } })
  await payload.create({ collection: 'sops', data: { title: 'Customer Communication Templates', docType: 'template-library', summary: 'Standardized, tested email templates for common support scenarios.', keyPoints: [{ point: 'Outage/Service Restoration template' }, { point: 'Enhancement Request — Setting Expectations template' }, { point: 'Case Closure — After Resolution Confirmed template' }], processSteps: [], impact: 'Consistent communication drove measurable CSAT improvement', order: 4 } })

  payload.logger.info(`— Seeding credentials...`)
  await Promise.all([
    payload.create({ collection: 'credentials', data: { title: 'COPC Certified Professional Manager', issuer: 'COPC Inc.', category: 'Management Training Series', description: 'Certified in the global standard for customer experience operations management.', year: '2023', isActive: true, order: 1 } }),
    payload.create({ collection: 'credentials', data: { title: 'Project Management Professional (PMP)', issuer: 'Project Management Institute (PMI)', category: 'Project Management', description: 'PMI-certified in leading and directing projects with predictable outcomes.', year: '2021', isActive: true, order: 2 } }),
    payload.create({ collection: 'credentials', data: { title: 'Six Sigma Green Belt', issuer: 'International Academy for Certifications (ASQ)', category: 'Process Improvement', description: 'Trained in data-driven methodology to eliminate defects and reduce variation.', year: '', isActive: true, order: 3 } }),
    payload.create({ collection: 'credentials', data: { title: 'Certified Scrum Master', issuer: 'Scrum Alliance', category: 'Agile Framework', description: 'Certified to facilitate agile teams, remove impediments, and deliver iteratively.', year: '', isActive: true, order: 4 } }),
    payload.create({ collection: 'credentials', data: { title: 'MBA — Operations & International Management', issuer: 'Institute of Management Technology, New Delhi', category: 'Education', description: 'Graduate degree in operations management and international business.', year: '2010-2013', isActive: true, order: 5 } }),
    payload.create({ collection: 'credentials', data: { title: 'August 2025 Excellence Award', issuer: 'Company-Wide Recognition', category: 'Award', description: 'Exemplifies leadership, patience, and consistency in every aspect of her role.', year: '2025', isActive: true, order: 6 } }),
  ])

  payload.logger.info(`— Seeding testimonial...`)
  await payload.create({ collection: 'testimonials', data: { quote: "I have had the very fortunate opportunity to work with Neha twice. When we needed a knowledgeable, top-notch seasoned manager at my current company, I didn't think twice. She is a student of her game. She knows both the art and science of support. Knowledge is one thing, but the ability to execute is another. Neha's action-orientation is top box. She has a penchant for thoughtful action in a timely manner. She is data-driven and always knows her numbers, inside and out. She is a people leader that holds her people and herself accountable for both the large and small. She drives stellar customer satisfaction scores and reads every single survey from a client. If any of them is less than fully satisfied, Neha reaches out, apologizes and learns what we can do better. Luckily, because of her strong CSAT, that doesn't have to happen frequently. This is the sort of discipline and customer focus Neha has always exhibited. I must mention she is also a tremendous collaborator. Lastly, Neha is a good person with a great heart, truly a real salt-of-the-earth leader.", authorName: 'Ed Benack', authorTitle: 'Chief Customer Officer, Corcentric — Former SVP & GM, Cvent — Founder, Microsoft Global Support Center', authorCompany: 'Corcentric', date: 'July 2023' } })

  payload.logger.info('Seeded database successfully!')
}

async function fetchFileByURL(url: string): Promise<File> {
  const res = await fetch(url, {
    credentials: 'include',
    method: 'GET',
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch file from ${url}, status: ${res.status}`)
  }

  const data = await res.arrayBuffer()

  return {
    name: url.split('/').pop() || `file-${Date.now()}`,
    data: Buffer.from(data),
    mimetype: `image/${url.split('.').pop()}`,
    size: data.byteLength,
  }
}
