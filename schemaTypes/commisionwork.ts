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
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
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
      media: "image",
    },
  },
})
