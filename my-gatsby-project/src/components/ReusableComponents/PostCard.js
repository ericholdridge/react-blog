import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";

const PostCard = ({ img, postDate, imageTitle, imageInfo }) => (
  <StyledPostCard className="postsCard">
    <Img fixed={img} />
    <div className="postDate">
      <span>{postDate}</span>
    </div>
    <div>
      <h3>{imageTitle}</h3>
      <p>{imageInfo}</p>
    </div>
  </StyledPostCard>
);

const StyledPostCard = styled.div`
  width: 370px;
  margin: 40px 0 0 0;
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
`;

export default PostCard;
