import { Helmet } from "react-helmet"
import React from "react"

import Container from "../components/Container"
import Header from "../components/header"
import GlobalStyle from "../GlobalStyles/globalStyles"
import Blog from "../components/Blog"
import Hero from "../components/Hero"

const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header />
        <Hero />
      <Container>
        <Blog />
      </Container>
    </>
  )
}

export default IndexPage
