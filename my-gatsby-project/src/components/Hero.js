import { useStaticQuery } from "gatsby"
import React from "react"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import Container from "./Container"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityHeroBackground {
        nodes {
          background {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  `)
  const heroBackground =
    data.allSanityHeroBackground.nodes[0].background.asset.fluid
  return (
    <BackgroundImage
      fluid={heroBackground}
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "none",
        minHeight: "100vh",
        display: "flex",
        alignItems: 'center'
      }}
    >
      <Container>
        <StyledHero>
          <h1>This is the home page.</h1>
        </StyledHero>
      </Container>
    </BackgroundImage>
  )
}

const StyledHero = styled.div`
  h1 {
    color: black;
    font-size: 4rem;
  }
`

export default Hero
