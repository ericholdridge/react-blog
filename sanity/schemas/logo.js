export default {
  name: 'logo',
  title: 'Logo',
  type: 'document',
  fields: [
    {
      name: 'logo',
      title: 'navbarLogo',
      type: 'image',
      options: {
        hotspot: true,
      }
    },
    {
      name: 'imgAlt',
      title: 'Alternative text',
      type: 'string',
      description: 'Import for SEO and accessibility'
    }
  ]
}