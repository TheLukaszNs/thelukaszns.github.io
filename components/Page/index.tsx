import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Meta from './Meta';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Playfair+Display:400,700&subset=latin-ext');
  
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Playfair Display', serif;
  }
`;

const Container = styled.div`
  padding: 32px 64px;
`;

const Page: React.FunctionComponent = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Meta />
      <Container>{children}</Container>
    </>
  );
};

export default Page;
