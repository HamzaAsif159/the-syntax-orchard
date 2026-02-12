import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'note',
  title: 'Note',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'status',
      title: 'Growth Stage',
      type: 'string',
      options: {
        list: [
          { title: 'Seedling (rough idea)', value: 'seedling' },
          { title: 'Budding (developing)', value: 'budding' },
          { title: 'Evergreen (timeless)', value: 'evergreen' },
        ],
        layout: 'radio',
      },
      initialValue: 'seedling',
    }),

    defineField({
      name: 'body',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
    }),

    defineField({
      name: 'references',
      title: 'Links to other notes',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'note' }],
        },
      ],
      description: 'Outgoing links – select other notes here',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      status: 'status',
    },
    prepare({ title, status }) {
      return {
        title,
        subtitle: status ? status.charAt(0).toUpperCase() + status.slice(1) : 'No status',
      };
    },
  },
});