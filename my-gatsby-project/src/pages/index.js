import { Helmet } from "react-helmet"
import React from "react"
import GlobalStyle from "../GlobalStyles/globalStyles"

import Hero from "../components/Hero"
import Recommended from "../components/Recommended"
import Minimalism from "../components/Minimalism"

const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <Helmet>
      <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@200;300;500&family=Poppins:wght@100;300;400;500&display=swap" rel="stylesheet" />
        <script
          src="https://kit.fontawesome.com/9808de19ba.js"
          crossorigin="anonymous"
        ></script>
      </Helmet>
      <Hero />
      <Recommended />
      <Minimalism />
    </>
  )
}

export default IndexPage
