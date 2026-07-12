import { defineField, defineType } from "sanity"

export const commissionWork = defineType({
  name: "commissionWork",
  title: "Commissioned Work",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: "material",
      title: "Material",
      type: "string",
    }),

    defineField({
      name: "year",
      title: "Year",
      type: "string",
    }),

    defineField({
      name: "commissionedFor",
      title: "Commissioned For",
      type: "string",
      description: "Client, organization or individual",
    }),

    defineField({
      name: "location",
      title: "Location",
      type: "string",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),

    defineField({
      name: "featuredWith",
      title: "Featured With",
      type: "array",
      of: [{ type: "string" }],
      description: "People or organizations associated with this work",
    }),

    defineField({
      name: "image",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "gallery",
      title: "Gallery Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    }),

    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 1,
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "commissionedFor",
      media: "image",
    },
  },
})
