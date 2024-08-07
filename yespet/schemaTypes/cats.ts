import {defineField, defineType} from 'sanity'

export const catsType = defineType({
  name: 'cats',
  title: 'Cats',
  type: 'document',
  fields: [
    defineField({
      name: 'internalCode',
      title: 'Código Interno',
      type: 'string',
    }),
    defineField({
      name: 'barcode',
      title: 'Código de Barras',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'brand',
      title: 'Marca',
      type: 'string',
    }),
    defineField({
      name: 'rating',
      title: 'Avaliação',
      type: 'number',
    }),
    defineField({
      name: 'description',
      title: 'Descrição',
      type: 'text',
    }),
    defineField({
      name: 'benefits',
      title: 'Benefícios',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'price',
      title: 'Preço',
      type: 'number',
    }),
    defineField({
      name: 'images',
      title: 'Imagens',
      type: 'array',
      of: [{type: 'image'}],
    }),

    defineField({
      name: 'banner',
      title: 'Banner de Promoção',
      type: 'string',
    }),
  ],
})
