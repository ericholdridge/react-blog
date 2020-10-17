import React from "react";
import styled from "styled-components";
import Container from "./ReusableComponents/Container";

const HeaderHero = () => {
  return (
    <StyledHero>
      <Container>
        <div className="heading">
          <div className="headingOne">
            <h1>Orsa is a minimalistic</h1>
            <div className="line"></div>
          </div>
          <h1>blog template</h1>
        </div>
        <div className="hero-icons">
          <div className="circle">
            <i className="fab fa-twitter"></i>
          </div>
          <div className="circle">
            <i className="fab fa-instagram"></i>
          </div>
        </div>
      </Container>
    </StyledHero>
  );
};

const StyledHero = styled.div`
  width: 100%;
  min-height: 40vh;
  display: flex;
  align-items: center;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    .heading {
      .headingOne {
        position: relative;
        .line {
          position: absolute;
          top: 40px;
          right: 0;
          min-height: 28px;
          min-width: 350px;
          background: #faddbd;
          z-index: -1;
          border-radius: 4px;
        }
      }
      h1 {
        font-size: 4.3rem;
        font-family: "Crimson Pro", serif;
      }
    }
    .hero-icons {
      display: flex;
      width: 100%;
      max-width: 105px;
      justify-content: space-between;
      margin: 20px 0 0 0;
      .circle {
        background: #f0f4f4;
        height: 40px;
        width: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.4s ease-in-out;
        cursor: pointer;
        i {
          font-size: 1.1rem;
        }
        &:hover {
          background: #e7ebea;
        }
      }
    }
  }
  @media (max-width: 960px) {
    .container {
      flex-direction: column;
      align-items: center;
      .heading {
        text-align: center;
      }
    }
  }
  @media (max-width: 960px) {
    .container {
      .heading {
        .headingOne {
          h1 {
            font-size: 3.6rem;
          }
          .line {
            min-width: 300px;
            top: 30px;
            min-height: 28px;
          }
        }
        h1 {
          font-size: 3.6rem;
        }
      }
    }
  }
  @media (max-width: 561px) {
    .container {
      .heading {
        .headingOne {
          h1 {
            font-size: 3rem;
          }
          .line {
            min-width: 250px;
            top: 26px;
            min-height: 24px;
          }
        }
        h1 {
          font-size: 3rem;
        }
      }
    }
  }
`;

export default HeaderHero;
