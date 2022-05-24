export default {
  name: "skills",
  title: "Skills",
  type: "document",
  fields: [
    {
      name: "category",
      title: "Category",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "imageurl",
      title: "Image URL",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "tools",
      title: "Tools",
      type: "array",
      of: [
        {
          type: "string",
          title: "Tool",
        },
      ],
    },
  ],
};