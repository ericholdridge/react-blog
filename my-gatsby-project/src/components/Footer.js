import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Container from "./ReusableComponents/Container";
import Logo from "../images/logo.svg";

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <img src={Logo} alt="" />
        <div className="links">
          <Link to="/">Powered by Webflow</Link>
          <Link to="/">Styleguides</Link>
          <Link to="/">Licenses</Link>
        </div>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  width: 100%;
  .container {
    padding: 50px 0 30px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .links {
      a {
        text-decoration: none;
        color: black;
        margin: 0 10px;
        font-size: 0.8rem;
        font-weight: 500;
        &:last-child {
          margin-right: none;
        }
        &:nth-child(1) {
          color: #95a7a9;
          transition: color 0.2s ease-in-out;
          &:hover {
            color: black;
          }
        }
        &:hover {
          color: #95a7a9;
          transition: color 0.2s ease-in-out;
        }
      }
    }
  }
`;

export default Footer;
