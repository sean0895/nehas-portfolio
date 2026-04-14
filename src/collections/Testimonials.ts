import type { CollectionConfig } from 'payload'
import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  access: { create: authenticated, delete: authenticated, read: anyone, update: authenticated },
  admin: { useAsTitle: 'authorName' },
  fields: [
    { name: 'quote', type: 'textarea', required: true },
    { name: 'authorName', type: 'text', required: true },
    { name: 'authorTitle', type: 'text', required: true },
    { name: 'authorCompany', type: 'text' },
    { name: 'date', type: 'text' },
  ],
}
