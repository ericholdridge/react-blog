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
    padding: 0 0 10px 0;
    .wrap {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-top: 60px;
      .posts {
        width: 100%;
        max-width: 250px;
        margin: 20px 0 0 0;
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
  @media (max-width: 833px) {
    .container {
      .wrap {
        .posts {
          width: 30%;
          /* border: 1px solid red; */
          span {
            margin: 10px 0 0 0;
          }
        }
      }
    }
  }
  @media (max-width: 750px) {
    .container {
      .wrap {
        .posts {
          width: 50%;
          span {
            margin: 10px 0 0 0;
          }
        }
      }
    }
  }
  @media (max-width: 610px) {
    .container {
      padding: 0;
      .wrap {
        flex-direction: column;
        margin: 10px 0 0 0;
        .posts {
          width: 100%;
          margin: 40px 0 0 0;
          span {
            margin: 10px 0 0 0;
          }
        }
      }
    }
  }
`;

export default Recommended;
