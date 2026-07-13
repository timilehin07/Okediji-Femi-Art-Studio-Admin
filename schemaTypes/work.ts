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

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
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
      name: "category",
      title: "Artwork Category",
      type: "string",
      options: {
        list: [
          { title: "Abstract", value: "abstract" },
          { title: "Figurative", value: "figurative" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
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
  name: "dimensions",
  title: "Dimensions",
  type: "string",
}),

defineField({
  name: "weight",
  title: "Weight",
  type: "string",
}),

defineField({
  name: "editionSize",
  title: "Edition Size",
  type: "string",
}),

   defineField({
      name: "price",
      title: "Price",
      type: "object",
      fields: [
    {
      name: "amount",
      title: "Amount",
      type: "number",
    },
    {
      name: "currency",
      title: "Currency",
      type: "string",
      options: {
        list: [
          { title: "Naira (₦)", value: "NGN" },
          { title: "Dollar ($)", value: "USD" },
        ],
      },
    },
  ],
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
