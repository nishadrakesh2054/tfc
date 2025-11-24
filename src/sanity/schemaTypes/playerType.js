import { UserIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const playerType = defineType({
  name: "player",
  title: "Player",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required().min(2).max(100),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "position",
      title: "Position",
      type: "string",
      options: {
        list: [
          { title: "Forward", value: "Forward" },
          { title: "Midfielder", value: "Midfielder" },
          { title: "Defender", value: "Defender" },
          { title: "Goalkeeper", value: "Goalkeeper" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "number",
      title: "Jersey Number",
      type: "number",
      validation: (Rule) => Rule.required().min(1).max(99).integer(),
    }),
    defineField({
      name: "age",
      title: "Age",
      type: "number",
      validation: (Rule) => Rule.required().min(16).max(50).integer(),
    }),
    defineField({
      name: "dob",
      title: "Date of Birth",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "gender",
      title: "Gender",
      type: "string",
      options: {
        list: [
          { title: "Male", value: "Male" },
          { title: "Female", value: "Female" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "nationality",
      title: "Nationality",
      type: "string",
      validation: (Rule) => Rule.required().min(2).max(50),
    }),
    defineField({
      name: "bio",
      title: "Biography",
      type: "text",
      validation: (Rule) => Rule.required().min(10).max(500),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alternative Text",
          type: "string",
          description: "Important for SEO and accessibility",
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "position",
      media: "image",
      number: "number",
    },
    prepare({ title, subtitle, media, number }) {
      return {
        title: title || "Untitled",
        subtitle: `${subtitle} - #${number}`,
        media,
      };
    },
  },
  orderings: [
    {
      title: "Jersey Number",
      name: "numberAsc",
      by: [{ field: "number", direction: "asc" }],
    },
    {
      title: "Name A-Z",
      name: "nameAsc",
      by: [{ field: "name", direction: "asc" }],
    },
  ],
});
