import type { CollectionConfig } from 'payload'
import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'

export const Competencies: CollectionConfig = {
  slug: 'competencies',
  access: { create: authenticated, delete: authenticated, read: anyone, update: authenticated },
  admin: { useAsTitle: 'title' },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'description', type: 'textarea', required: true },
    { name: 'category', type: 'select', options: [
      { label: 'Operations', value: 'operations' },
      { label: 'Reporting', value: 'reporting' },
      { label: 'Quality', value: 'quality' },
      { label: 'Segmentation', value: 'segmentation' },
      { label: 'People', value: 'people' },
      { label: 'AI & Systems', value: 'ai' },
    ]},
    { name: 'order', type: 'number' },
  ],
}
