export default {
  name: "about",
  title: "About Us",
  type: "document",
  fields: [
    {
      name: "about",
      title: "About Us",
      type: "string",
    },
    {
      name: "logos",
      title: "Logos",
      type: "array",
      of: [{ type: "image" }],
      sortable: true,
    },
    {
      name: "image",
      title: "About Image",
      type: "image",
    },
  ],
};
