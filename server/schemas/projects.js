export default {
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "index",
      title: "Index",
      type: "string",
    },
    {
      name: "title",
      title: "Title",
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
      name: "githubLink",
      title: "Github Link",
      type: "string",
    },
    {
      name: "demoLink",
      title: "Demo Link",
      type: "string",
    },
  ],
};