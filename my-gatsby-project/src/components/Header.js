import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Container from "./Container"

const Header = () => {
  return (
    <NavStyled>
      <Container>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </Container>
    </NavStyled>
  )
}

const NavStyled = styled.nav`
  width: 100%;
  padding: 20px 0;
  background: black;
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    li {
      a {
        text-decoration: none;
        margin: 0 10px;
        color: white;
        &:last-child() {
          margin-right: 0;
        }
      }
    }
  }
`

export default Header
