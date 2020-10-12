import React from "react";
import Container from "./ReusableComponents/Container";
import styled from "styled-components";
import { StaticQuery } from "gatsby";
import Img from "gatsby-image";
import Heading from "./ReusableComponents/Heading";

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
                <div className="postsCard">
                  <Img fixed={post.image.asset.fixed} />
                  <div className="postDate">
                    <span>{post.postDate}</span>
                  </div>
                  <div>
                    <h3>{post.imageTitle}</h3>
                    <p>{post.imageInfo}</p>
                  </div>
                </div>
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
  padding: 100px 0 200px 0;
  .container {
    .posts {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin: 60px 0 0 0;
      .postsCard {
        width: 370px;
        img {
          width: 100%;
          display: block;
        }
        .postDate {
          color: #737d7f;
        }
        div {
          padding: 20px 0 0 0;
          font-family: "Crimson Pro", sans-serif;
          h3 {
            font-size: 2.2rem;
            line-height: 1.2;
          }
          p {
            padding: 16px 0 0 0;
            color: #737d7f;
            font-size: 1.2rem;
            font-weight: 400;
            line-height: 1.4;
          }
        }
      }
    }
  }
`;

export default FeaturedPosts;
