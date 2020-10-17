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
  @media (max-width: 1262px) {
    .container {
      padding: 50px 0 0 0;
      .wrapper {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .postsCard {
          width: 47%;
          .postImage {
            .gatsby-image-wrapper {
              width: 100% !important;
              max-width: none;
              display: block !important;
              img {
                width: 100%;
                display: block;
              }
            }
          }
        }
      }
    }
  }
  @media (max-width: 990px) {
    .container {
      .wrapper {
        .postsCard {
          .imgInfo {
            h3 {
              font-size: 1.8rem;
            }
          }
        }
      }
    }
  }
  @media (max-width: 801px) {
    .container {
      .wrapper {
        .postsCard {
          .imgInfo {
            h3 {
              font-size: 1.6rem;
            }
          }
        }
      }
    }
  }
  @media (max-width: 720px) {
    .container {
      .wrapper {
        flex-direction: column;
        .postsCard {
          width: 100%;
          .postImage {
            width: 100%;
            .gatsby-image-wrapper {
              width: 100% !important;
              max-width: none;
              display: block !important;
              img {
                width: 100%;
                display: block;
              }
            }
          }
        }
      }
    }
  }
`;

export default AllBlogPosts;
