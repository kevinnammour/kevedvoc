export default {
  name: "skills",
  title: "Skills",
  type: "document",
  fields: [
    {
      name: "index",
      title: "Index",
      type: "string",
    },
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
      name: "imageUrl",
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
          type: "image",
          title: "Tool Image",
          options: {
            hotspot: true,
          }
        },
      ],
    },
  ],
};