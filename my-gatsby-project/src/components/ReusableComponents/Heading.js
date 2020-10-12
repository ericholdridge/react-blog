import React from "react";
import styled from "styled-components";

const Heading = ({title}) => {
  return (
    <StyledHeading className="heading">
      <h2>{title}</h2>
      <div className="line"></div>
    </StyledHeading>
  );
};

const StyledHeading = styled.div`
  padding: 0 0 25px 0;
  position: relative;
  h2 {
    font-size: 2.6rem;
    font-family: "Crimson Pro", sans-serif;
  }
  .line {
    position: absolute;
    min-height: 3px;
    bottom: 4px;
    min-width: 100px;
    background: #f5bc7b;
  }
`;

export default Heading;
