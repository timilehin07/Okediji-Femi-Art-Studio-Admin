import { defineField, defineType } from "sanity"

export default defineType({
  name: "process",
  title: "The Process",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
    }),

    defineField({
      name: "intro",
      title: "Introduction",
      type: "text",
      rows: 5,
    }),

    defineField({
      name: "steps",
      title: "Steps",
      type: "array",
      of: [
        {
          type: "processStep",
        },
      ],
    }),
  ],
})
