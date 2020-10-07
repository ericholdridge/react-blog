import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Blog = () => {
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
      {data.allSanityPost.nodes.map(blog => {
        return <h1>{blog.title}</h1>
      })}
    </>
  )
}

export default Blog
