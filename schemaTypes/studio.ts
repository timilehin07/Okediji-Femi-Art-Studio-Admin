import {defineField, defineType} from "sanity"

export const studio = defineType({
  name: "studio",
  title: "The Studio",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "The Studio",
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
      title: "Gallery",
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
