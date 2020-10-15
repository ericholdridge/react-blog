import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import ArrowImg from "../../images/arrow.svg";

const PostCard = ({ img, postDate, imageTitle, imageInfo }) => (
  <StyledPostCard className="postsCard">
    <div className="postImage">
      <Img fixed={img} />
      <div className="circle">
        <img src={ArrowImg} className="arrow" alt="View blog post" />
      </div>
    </div>
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
  cursor: pointer;
  .postImage {
    position: relative;
    .circle {
      opacity: 0;
      width: 60px;
      height: 60px;
      background: white;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      .arrow {
        width: 17px;
      }
    }
  }
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
  &:hover {
    .postImage {
      .circle {
        transition: all .8s ease-in-out;
        opacity: 1;
      }
    }
  }
`;

export default PostCard;
