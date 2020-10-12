import React from "react";
import Container from "./ReusableComponents/Container";
import Heading from "./ReusableComponents/Heading";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

const Recommended = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allSanityRecommended {
            nodes {
              recommended
              category
            }
          }
        }
      `}
      render={(posts) => (
        <StyledRecommended>
          <Container>
            <Heading title="Recommended" />
            <div className="wrap">
              {posts.allSanityRecommended.nodes.map((post) => (
                <div className="posts">
                  <h3>{post.recommended}</h3>
                  <span>{post.category}</span>
                </div>
              ))}
            </div>
          </Container>
        </StyledRecommended>
      )}
    />
  );
};

const StyledRecommended = styled.section`
  width: 100%;
  font-family: "Crimson Pro",sans-serif;
  .container {
    padding: 0 0 200px 0;
    .wrap {
      display: flex;
      justify-content: space-between;
      margin-top: 60px;
      .posts {
        width: 100%;
        max-width: 250px;
        cursor: pointer;
        h3 {
          font-size: 1.4rem;
          transition: transform .2s ease-in-out;
          &:hover {
            transform: translateY(-6px);
          }
        }
        span {
          color: #95a7a9;
          text-transform: uppercase;
          font-family: Poppins, sans-serif;
          font-size: .8rem;
          transition: color .3s ease-in-out;
          display: block;
          font-weight: 500;
          margin: 20px 0 0 0;
          &:hover {
            color: #000;
          }
        }
      }
    }
  }
`;

export default Recommended;
