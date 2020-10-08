import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Container from "./Container"

const Header = () => {
  return (
    <NavStyled>
      <Container>
        <div className="nav-logo">
          <h1>eholdridge</h1>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
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
  .container {
    display: flex;
    justify-content: space-between;
    .nav-logo {
      color: white;
    }
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
  }
`

export default Header
