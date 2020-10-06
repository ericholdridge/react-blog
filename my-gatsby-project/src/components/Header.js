import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Header = () => {
  return (
    <NavStyled>
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
    </NavStyled>
  )
}

const NavStyled = styled.nav`
  width: 100%;
  ul {
    display: flex;
    list-style: none;
    li {
      a {
        text-decoration: none;
        margin: 0 10px;
        &:last-child() {
          margin-right: 0;
        }
      }
    }
  }
`

export default Header
