import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Container from '../Container/Container';

export default function Nav() {
  return (
    <StaticQuery
      query={graphql`
        query {
          allSanityLogo {
            nodes {
              imgAlt
              logo {
                asset {
                  fixed(width: 250) {
                    ...GatsbySanityImageFixed
                  }
                }
              }
            }
          }
          site {
            siteMetadata {
              menuLinks {
                name
                link
              }
            }
          }
        }
      `}
      render={(data) => (
        <NavStyled>
          <Container>
            <Img
              fixed={data.allSanityLogo.nodes[0].logo.asset.fixed}
              src={data.allSanityLogo.nodes[0].imageAlt}
            />
            <ul>
              {data.site.siteMetadata.menuLinks.map((item, index) => (
                <li key={index}>
                  <Link to={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </Container>
        </NavStyled>
      )}
    />
  );
}

const NavStyled = styled.nav`
  padding: 20px 0;
  width: 100%;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    ul {
      display: flex;
      list-style: none;
      li {
        margin: 0 8px;
        a {
          text-decoration: none;
          color: black;
        }
      }
    }
  }
`;
