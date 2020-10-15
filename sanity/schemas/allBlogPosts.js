export default {
  name: "allBlogPosts",
  title: "All Blog Posts",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Blog Image",
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
