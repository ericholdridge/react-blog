import { graphql, StaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import Container from "./ReusableComponents/Container";
import Img from "gatsby-image";

const AboutUs = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allSanityAbout {
            nodes {
              about
              logos {
                asset {
                  fluid {
                    ...GatsbySanityImageFluid
                  }
                }
              }
              image {
                asset {
                  fixed(width: 370) {
                    ...GatsbySanityImageFixed
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <StyledAboutUs className="aboutUs">
          <Container>
            {data.allSanityAbout.nodes.map((item) => (
              <div className="wrapper">
                <div className="bg"></div>
                <div className="box-1">
                  <span>About Us</span>
                  <h3>{item.about}</h3>
                  <div className="wrap">
                    {item.logos.map((logo) => (
                      <div className="logo">
                        <Img fluid={logo.asset.fluid} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="box-2">
                  <Img fixed={item.image.asset.fixed} />
                </div>
              </div>
            ))}
          </Container>
        </StyledAboutUs>
      )}
    />
  );
};

const StyledAboutUs = styled.section`
  width: 100%;
  padding: 30px 0;
  .container {
    .wrapper {
      display: flex;
      justify-content: space-between;
      align-items: stretch;
      position: relative;
      .bg {
        background: #f0f4f4;
        position: absolute;
        top: 0;
        right: 50%;
        bottom: 0;
        left: -100%;
        z-index: -1;
      }
      .box-1 {
        width: 100%;
        max-width: 800px;
        background: #f0f4f4;
        display: flex;
        flex-direction: column;
        justify-content: center;
        span {
          display: block;
          text-transform: uppercase;
          font-weight: 400;
          font-size: 0.8rem;
          letter-spacing: 1.2px;
        }
        h3 {
          width: 100%;
          font-size: 1.8rem;
          font-family: "Crimson Pro", sans-serif;
          max-width: 600px;
          line-height: 1.3;
          margin: 30px 0 0 0;
        }
        .wrap {
          display: flex;
          align-items: flex-end;
          margin: 60px 0 0 0;
          .logo {
            width: 100%;
            max-width: 70px;
            margin: 0 16px;
            &:first-child {
              margin: 0 16px 0 0;
            }
            img {
              width: 100%;
              display: block;
            }
          }
        }
      }
      .box-2 {
        display: flex;
        img {
          height: 100%;
          display: block;
        }
      }
    }
  }
`;

export default AboutUs;
