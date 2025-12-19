import { defineType, defineField } from "sanity"

export default defineType({
  name: "about",
  title: "About",
  type: "document",
  fields: [
    defineField({
      name: "artistImage",
      title: "Artist Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
})
