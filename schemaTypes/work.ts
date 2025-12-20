import { defineType, defineField } from "sanity"

export default defineType({
  name: "work",
  title: "Work",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: Rule => Rule.required(),
    }),

    /**
     * 🔥 MULTIPLE IMAGES (Front, Side, Back, etc.)
     */
    defineField({
      name: "images",
      title: "Artwork Images",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
        },
      ],
      validation: Rule => Rule.min(1).required(),
      description: "Upload images in order: Front → Side → Back → Other views",
    }),

    defineField({
      name: "year",
      title: "Year",
      type: "string",
    }),

    defineField({
      name: "material",
      title: "Material",
      type: "string",
    }),

    defineField({
      name: "price",
      title: "Price",
      type: "number",
      description: "Leave empty if sold or not for sale",
    }),

    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Available", value: "available" },
          { title: "Sold", value: "sold" },
        ],
        layout: "radio",
      },
      initialValue: "available",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
  ],
})
