import dotenv from 'dotenv';

dotenv.config({ path: '.evn' });
export default {
  siteMetadata: {
    title: 'React Blog',
    siteUrl: 'https://react.blog',
    description: 'First React blog using Sanity.io',
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
