import React from 'react';
import styled from 'styled-components';

export default function Container({ children }) {
  return <ContainerStyled className="container">{children}</ContainerStyled>;
}

const ContainerStyled = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;
