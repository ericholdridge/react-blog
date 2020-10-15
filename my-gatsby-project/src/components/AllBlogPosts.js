import { StaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import Container from "./ReusableComponents/Container";
import Heading from "./ReusableComponents/Heading";
import PostCard from "./ReusableComponents/PostCard";

const AllBlogPosts = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          blogPosts: allSanityAllBlogPosts {
            nodes {
              image {
                asset {
                  fixed(width: 370, height: 350) {
                    ...GatsbySanityImageFixed
                  }
                }
              }
              postDate
              imageTitle
              imageInfo
            }
          }
        }
      `}
      render={(data) => (
        <StyledAllPosts className="allBlogPosts">
          <Container>
            <Heading title="All Blog Posts" />
            <div className="wrapper">
              {data.blogPosts.nodes.map((post) => (
                <PostCard
                  img={post.image.asset.fixed}
                  postDate={post.postDate}
                  imageTitle={post.imageTitle}
                  imageInfo={post.imageInfo}
                />
              ))}
            </div>
          </Container>
        </StyledAllPosts>
      )}
    />
  );
};

const StyledAllPosts = styled.section`
  width: 100%;
  .container {
    padding: 50px 0 0 0;
    .wrapper {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }
`;

export default AllBlogPosts;
