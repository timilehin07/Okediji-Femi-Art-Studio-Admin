import {defineType, defineField} from "sanity"

export const processStep = defineType({
  name: "processStep",
  title: "Process Step",
  type: "object",

  fields: [
    defineField({
      name: "title",
      title: "Step Title",
      type: "string",
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 5,
    }),

    defineField({
      name: "image",
      title: "Step Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "caption",
      title: "Caption",
      type: "string",
    }),
  ],
})
