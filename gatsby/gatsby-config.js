import dotenv from 'dotenv';

dotenv.config({ path: '.env' });
export default {
  siteMetadata: {
    title: 'React Blog',
    siteUrl: 'https://react.blog',
    description: 'First React blog using Sanity.io',
    menuLinks: [
      {
        name: 'Home',
        link: '/',
      },
      {
        name: 'About',
        link: '/about',
      },
      {
        name: 'Blog',
        link: '/blog',
      },
      {
        name: 'Portfolio',
        link: '/portfolio',
      },
      {
        name: 'Contact',
        link: '/contact',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'ml1gb46a',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};

// sanity graphql deploy production
