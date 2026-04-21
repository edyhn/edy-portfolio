import { defineField, defineType } from "sanity";

export const designSchema = defineType({
  name: "design",
  title: "Design Work",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Branding", value: "branding" },
          { title: "UI / UX", value: "uiux" },
          { title: "Poster / Print", value: "poster" },
          { title: "Social Media", value: "social" },
          { title: "Illustration", value: "illustration" },
          { title: "Other", value: "other" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tools",
      title: "Tools Used",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
      description: "Contoh: Figma, Illustrator, Photoshop",
    }),
    defineField({
      name: "behanceUrl",
      title: "Behance URL",
      type: "url",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 99,
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "coverImage",
      category: "category",
    },
    prepare({ title, media, category }) {
      return { title, subtitle: category, media };
    },
  },
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});
