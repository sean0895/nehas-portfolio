import type { CollectionConfig } from 'payload'
import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'

export const Credentials: CollectionConfig = {
  slug: 'credentials',
  access: { create: authenticated, delete: authenticated, read: anyone, update: authenticated },
  admin: { useAsTitle: 'title' },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'issuer', type: 'text', required: true },
    { name: 'category', type: 'text' },
    { name: 'description', type: 'textarea' },
    { name: 'year', type: 'text' },
    { name: 'isActive', type: 'checkbox', defaultValue: true },
    { name: 'order', type: 'number' },
  ],
}
