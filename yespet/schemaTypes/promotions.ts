import {defineField, defineType} from 'sanity'

export const promotionsType = defineType({
  name: 'promotions',
  title: 'Promotions',
  type: 'document',
  fields: [
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
    }),
    defineField({
      name: 'details',
      title: 'Details',
      type: 'string',
    }),
  ],
})
