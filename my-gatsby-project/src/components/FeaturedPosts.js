import React from "react";
import Container from "./ReusableComponents/Container";
import styled from "styled-components";
import { StaticQuery } from "gatsby";
import Heading from "./ReusableComponents/Heading";
import PostCard from "./ReusableComponents/PostCard";

const FeaturedPosts = () => {
  return (
    <StaticQuery
      query={graphql`
        query MyQuery {
          allSanityFeaturedPosts {
            nodes {
              image {
                asset {
                  fixed(width: 370, height: 350) {
                    ...GatsbySanityImageFixed
                  }
                }
              }
              imageTitle
              imageInfo
              postDate
            }
          }
        }
      `}
      render={(data) => (
        <StyledPosts className="featurePosts">
          <Container>
            <Heading title="Features Posts" />
            <div className="posts">
              {data.allSanityFeaturedPosts.nodes.map((post) => (
                <PostCard
                  img={post.image.asset.fixed}
                  postDate={post.postDate}
                  imageTitle={post.imageTitle}
                  imageInfo={post.imageInfo}
                />
              ))}
            </div>
          </Container>
        </StyledPosts>
      )}
    />
  );
};

const StyledPosts = styled.section`
  width: 100%;
  padding: 100px 0;
  .container {
    .posts {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin: 30px 0 0 0;
    }
  }
`;

export default FeaturedPosts;
