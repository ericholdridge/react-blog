import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Container from "./ReusableComponents/Container";
import Logo from "../images/logo.svg";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <StyledHeader>
      <Container>
        <div className="wrap">
          <img src={Logo} alt="Orsa logo" />
          <div className="mobile-btn" onClick={() => setShowMenu(!showMenu)}>
            <i className="fas fa-align-justify"></i>
          </div>
        </div>
        <div className={showMenu ? "wrapper show" : "wrapper"}>
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
              <li>
                <Link to="/">Page</Link>
              </li>
              <li>
                <Link to="/">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100%;
  padding: 20px 0;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .wrap {
      display: flex;
      justify-content: space-between;
    }
    .wrapper {
      width: 100%;
      max-width: 800px;
      display: flex;
      justify-content: space-between;
      .items-center,
      .items-right {
        ul {
          display: flex;
          list-style: none;
          li {
            margin: 0 12px;
            a {
              text-decoration: none;
              color: #000;
              font-size: 0.8rem;
              font-weight: 500;
            }
          }
        }
      }
    }
    .mobile-btn {
      display: none;
    }
  }
  @media (max-width: 768px) {
    .container {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .wrap {
        width: 100%;
      }
      .mobile-btn {
        display: block;
        cursor: pointer;
      }
      .wrapper {
        display: none;
        margin: 4px 0 0 0;
        .items-center,
        .items-right {
          display: flex;
          flex-direction: column;
          ul {
            display: flex;
            flex-direction: column;
            li {
              margin: 6px 0;

            }
          }
        }
        &.show {
          display: inline-block;
        }
      }
    }
  }
  @media (max-width: 1230px) {
    .container {
      .wrapper {
        width: 70%;
      }
    }
  }
`;

export default Header;
