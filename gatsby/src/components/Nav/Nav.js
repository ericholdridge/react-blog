import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Container from '../Container/Container';

export default function Nav() {
  return (
    <NavStyled>
      <Container>
        <div className="navLogo">
          <h1>eholdridge</h1>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/">Blog</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </Container>
    </NavStyled>
  );
}

const NavStyled = styled.div`
  .container {
    border: 1px solid red;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ul {
      border: 1px solid black;
      display: flex;
      list-style: none;
    }
  }
`;
