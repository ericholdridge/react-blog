import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Container from "./ReusableComponents/Container"
import Logo from "../images/logo.svg"

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <div className="logo">
          <img src={Logo} alt="Orsa logo" />
        </div>
        <div className="items-center">
          <ul>
            <li>
              <Link to="/">Lifestyle</Link>
            </li>
            <li>
              <Link to="/">Travel</Link>
            </li>
            <li>
              <Link to="/">Tutorials</Link>
            </li>
            <li>
              <Link to="/">Minimalism</Link>
            </li>
          </ul>
        </div>
        <div className="items-right">
          <ul>
            <li><Link to="/">Page</Link></li>
            <li><Link to="/">Contact Us</Link></li>
          </ul>
        </div>
      </Container>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  width: 100%;
  padding: 20px 0;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .items-center, .items-right {
      ul {
        display: flex;
        list-style: none;
        li {
          margin: 0 12px;
          a {
            text-decoration: none;
            color: #000;
            font-size: .8rem;
            font-weight: 500;
          }
        }
      }
    }
  }
`

export default Header
