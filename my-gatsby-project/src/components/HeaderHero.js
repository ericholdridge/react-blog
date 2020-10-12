import React from "react"
import styled from "styled-components"
import Container from "./ReusableComponents/Container"

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
  )
}

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
          top: 34px;
          right: 0;
          min-height: 35px;
          min-width: 350px;
          background: #faddbd;
          z-index: -1;
          border-radius: 4px;
        }
      }
      h1 {
        font-size: 4.3rem;
        font-family: 'Crimson Pro', serif;
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
        transition: background .4s ease-in-out;
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
`

export default HeaderHero
