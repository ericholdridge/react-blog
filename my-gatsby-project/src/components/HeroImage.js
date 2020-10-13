import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

const HeroImage = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allSanityHeroImage {
            nodes {
              heroImage {
                asset {
                  fluid(maxHeight: 200) {
                    ...GatsbySanityImageFluid
                  }
                }
              }
            }
          }
        }
      `}
      render={image => (
        <StyledImage className="heroImage">
          {image.allSanityHeroImage.nodes.map((img) => (
            <Img fluid={img.heroImage.asset.fluid} />
          ))}
        </StyledImage>
      )}
    />
  );
};

const StyledImage = styled.div`
  width: 100%;
`;

export default HeroImage;
