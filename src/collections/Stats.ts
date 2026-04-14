import type { CollectionConfig } from 'payload'
import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'

export const Stats: CollectionConfig = {
  slug: 'stats',
  access: { create: authenticated, delete: authenticated, read: anyone, update: authenticated },
  admin: { useAsTitle: 'label' },
  fields: [
    { name: 'value', type: 'text', required: true },
    { name: 'label', type: 'text', required: true },
    { name: 'prefix', type: 'text' },
    { name: 'suffix', type: 'text' },
    { name: 'order', type: 'number' },
  ],
}
