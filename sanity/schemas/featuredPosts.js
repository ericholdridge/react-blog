export default {
  name: "featuredPosts",
  title: "Featured Posts",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Featured Image",
      type: "image",
    },
    {
      name: 'postDate',
      title: 'Post Date',
      type: 'date',
      options: {
        dateFormat: 'MMMM-DD-YYYY',
      }
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
