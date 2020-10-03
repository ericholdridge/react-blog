import { graphql } from 'gatsby';
import React from 'react';
import Container from '../components/Container/Container';

export default function HomePage({ data }) {
  const blogs = data.blogs.nodes;
  console.log(blogs);
  return (
    <>
      <Container>
        <p>
          {blogs.map((blog) => (
            <div>
              <h2>{blog.title}</h2>
              <p>{blog.blogTitle}</p>
            </div>
          ))}
        </p>
      </Container>
    </>
  );
}
console.clear();
export const query = graphql`
  query {
    blogs: allSanityBlog {
      nodes {
        title
        blogTitle
      }
    }
  }
`;
