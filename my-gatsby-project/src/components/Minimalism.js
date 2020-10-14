import { StaticQuery } from "gatsby";
import React from "react";
import Container from "./ReusableComponents/Container";
import Heading from "./ReusableComponents/Heading";
import PostCard from "./ReusableComponents/PostCard";
import styled from "styled-components";

const Minimalism = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allSanityMinimalism {
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
          allSanityMoreMinimalism {
            nodes {
              category
              title
            }
          }
        }
      `}
      render={(data) => (
        <StyledPost className="minimalism">
          <Container>
            <Heading title="Minimalism" />
            <div className="posts">
              {data.allSanityMinimalism.nodes.map((post, index) => (
                <PostCard key={index}
                  img={post.image.asset.fixed}
                  postDate={post.postDate}
                  imageTitle={post.imageTitle}
                  imageInfo={post.imageInfo}
                />
              ))}
              <div className="moreMinimalism">
                <h3>More in Minimalism</h3>
                {data.allSanityMoreMinimalism.nodes.map((more, index) => (
                  <div key={index} className="wrap">
                    <span>{more.category}</span>
                    <h3>{more.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </StyledPost>
      )}
    />
  );
};

const StyledPost = styled.section`
  width: 100%;
  padding: 100px 0;
  .container {
    .posts {
      display: flex;
      justify-content: space-between;
    }
    .moreMinimalism {
      width: 100%;
      max-width: 390px;
      margin: 30px 0 0 0;
      h3 {
        font-size: 2.1rem;
        font-family: 'Crimson Pro', sans-serif;
      }
      .wrap {
        padding: 14px 0;
        span {
          color: #95a7a9;
          text-transform: uppercase;
          transition: color 3s ease-in-out;
          font-family: Poppins, sans-serif;
          font-size: .8rem;
          letter-spacing: 2px;
          &:hover {
            color: black;
          }
        }
        h3 {
          font-family: 'Crimson Pro', sans-serif;
          font-size: 1.3rem;
        }
      }
    }
  }
`;

export default Minimalism;
