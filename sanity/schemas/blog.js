export default {
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Text', 
      name: 'text',
      type: 'array', 
      of: [{type: 'block'}]
    },
    {
      title: 'Poster',
      name: 'poster',
      type: 'image',
      options: {
        hotspot: true // <-- Defaults to false
      }
    },
    {
      title: 'Alternative text',
      name: 'imgAlt',
      type: 'string',
      description: 'Import for SEO and accessibility'
    }
  ]
}