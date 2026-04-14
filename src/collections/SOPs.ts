import type { CollectionConfig } from 'payload'
import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'

export const SOPs: CollectionConfig = {
  slug: 'sops',
  access: { create: authenticated, delete: authenticated, read: anyone, update: authenticated },
  admin: { useAsTitle: 'title' },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'docType', type: 'select', required: true, options: [
      { label: 'Operating Standard', value: 'operating-standard' },
      { label: 'Process SOP', value: 'process-sop' },
      { label: 'Priority Standard', value: 'priority-standard' },
      { label: 'Template Library', value: 'template-library' },
    ]},
    { name: 'summary', type: 'textarea', required: true },
    { name: 'keyPoints', type: 'array', fields: [
      { name: 'point', type: 'text', required: true },
    ]},
    { name: 'processSteps', type: 'array', fields: [
      { name: 'stepNumber', type: 'number', required: true },
      { name: 'title', type: 'text', required: true },
      { name: 'description', type: 'textarea' },
    ]},
    { name: 'impact', type: 'textarea' },
    { name: 'order', type: 'number' },
  ],
}
