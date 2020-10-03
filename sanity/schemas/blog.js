export default {
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Blog title',
      type: 'string',
      required: true,
    },
    {
      name: 'blogTitle',
      title: 'Blog title',
      type: 'string',
      required: true,
    },
    {
      name: 'image',
      title: 'Blog Image',
      type: 'image',
      options: {
        hotspot: true
      },
    }
  ]
}