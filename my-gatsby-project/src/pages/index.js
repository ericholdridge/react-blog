import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import Container from "../components/Container"
import Header from "../components/header"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityPost {
        nodes {
          title
        }
      }
    }
  `)
  return (
    <>
      <Header />
      <Container>
        {data.allSanityPost.nodes.map(blog => {
          return <h1>{blog.title}</h1>
        })}
      </Container>
    </>
  )
}

export default IndexPage
