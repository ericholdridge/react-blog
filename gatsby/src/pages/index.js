import { graphql } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import Container from '../components/Container/Container';

export default function HomePage({ data }) {
  const blogImage = data.allSanityBlog.nodes[0];
  const imgAltText = data.allSanityBlog.nodes[0].imgAlt;
  return (
    <section>
      <Container>
        <div>
          <Img fixed={blogImage.poster.asset.fixed} alt={imgAltText} />
        </div>
      </Container>
    </section>
  );
}

export const query = graphql`
  query {
    allSanityBlog {
      nodes {
        title
        text {
          children {
            text
          }
        }
        imgAlt
        poster {
          asset {
            fixed(width: 1200, height: 500) {
              ...GatsbySanityImageFixed
            }
          }
        }
      }
    }
  }
`;
