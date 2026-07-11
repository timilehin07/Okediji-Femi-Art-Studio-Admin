import { defineField, defineType } from "sanity"

export default defineType({
  name: "studio",
  title: "The Studio",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),

    defineField({
      name: "intro",
      title: "Introduction",
      type: "text",
      rows: 5,
    }),

    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "gallery",
      title: "Studio Gallery",
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
  ],
})
