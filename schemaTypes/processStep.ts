import { defineField, defineType } from "sanity"

export default defineType({
  name: "processStep",
  title: "Process Step",
  type: "object",

  fields: [
    defineField({
      name: "title",
      title: "Step Title",
      type: "string",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 5,
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
      name: "caption",
      title: "Caption",
      type: "string",
    }),
  ],
})
