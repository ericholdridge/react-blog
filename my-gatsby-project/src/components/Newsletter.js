import React from "react";
import styled from "styled-components";
import Container from "./ReusableComponents/Container";

const Newsletter = () => {
  return (
    <StyledNewsletter className="newsletter">
      <Container>
        <div className="subscribe">
          <h3>Subscribe to our newsletter, and stay in the loop.</h3>
        </div>
        <div className="form">
          <input type="text" placeholder="Enter Email" />
          <button>Subscribe Now</button>
        </div>
      </Container>
    </StyledNewsletter>
  );
};

const StyledNewsletter = styled.div`
  width: 100%;
  .container {
    padding: 100px 0 50px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .subscribe {
      width: 100%;
      max-width: 500px;
      h3 {
        font-size: 2.4rem;
        font-family: 'Crimson Pro', sans-serif;
        font-weight: 400;
      }
    }
    .form {
      width: 100%;
      max-width: 450px;
      height: 50px;
      display: flex;
      justify-content: space-between;
      input {
        height: 100%;
        width: 260px;
        border: none;
        background: #f0f4f4;
        padding: 0 0 0 10px;
        outline: none;
        letter-spacing: .8px;
        &::placeholder {
          font-weight: 600;
          color: #ccc;
        }
      }
      button {
        height: 100%;
        display: inline-block;
        padding: 0 40px;
        border: none;
        background: black;
        color: white;
        font-size: .9rem;
        font-weight: 400;
      }
    }
  }
  @media (max-width: 1050px) {
    .container {
      flex-direction: column;
      .subscribe {
        text-align: center;
        margin: 0 0 40px 0;
      }
    }
  }
  @media (max-width: 617px) {
    .container {
      .subscribe {
        h3 {
          font-size: 2rem;
        }
      }
    }
  }
`;

export default Newsletter;
