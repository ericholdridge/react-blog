import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityPost {
        nodes {
          title
          image {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
          content {
            children {
              text
            }
          }
        }
      }
    }
  `)
  return (
    <StyledBlog>
      {data.allSanityPost.nodes.map(blog => (
        <div className="individualBlog">
          <div className="blogHeading">
            <h1>{blog.title}</h1>
          </div>
          <div className="blogImage">
            <Img fluid={blog.image.asset.fluid} />
          </div>
          <div className="individualBlogInfo">
            {blog.content.map(blogInfo => (
              <div>
                {blogInfo.children.map(blogChildren => (
                  <div>
                    <p>{blogChildren.text}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </StyledBlog>
  )
}

const StyledBlog = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .individualBlog {
    width: 100%;
    max-width: 350px;
    .blogImage {
      width: 350px;
      img {
        width: 100%;
        display: block;
      }
    }
  }
`

export default Blog
