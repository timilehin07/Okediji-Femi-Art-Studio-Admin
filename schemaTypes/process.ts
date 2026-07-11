import {defineField, defineType} from "sanity"

export const process = defineType({
  name: "process",
  title: "The Process",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      initialValue: "The Process",
    }),

    defineField({
      name: "intro",
      title: "Introduction",
      type: "text",
      rows: 5,
    }),

    defineField({
      name: "steps",
      title: "Process Steps",
      type: "array",
      of: [
        {
          type: "processStep",
        },
      ],
    }),
  ],
})
