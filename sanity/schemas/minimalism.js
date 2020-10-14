export default {
  name: "minimalism",
  title: "Minimalism",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Minimalism Image",
      type: "image",
    },
    {
      name: "postDate",
      title: "Post Date",
      type: "date",
      options: {
        dateFormat: "MMMM-DD-YYYY",
      },
    },
    {
      name: "imageTitle",
      title: "Image Title",
      type: "string",
    },
    {
      name: "imageInfo",
      title: "Image Info",
      type: "string",
    },
  ],
};
