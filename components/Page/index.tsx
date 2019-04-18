import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Meta from './Meta';
import Navbar from '../Navbar';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Playfair+Display:400,700&subset=latin-ext');

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  #__next {
    height: 100%;
  }

  body, html {
    height: 100%;
  }

  body {
    font-family: 'Playfair Display', serif;
    font-size: 12px;
    background: linear-gradient(119.1deg, #FFFFFF -0.05%, #F2F2F2 90.1%);
  }

  a {
    font-size: inherit;
    color: inherit;
    text-decoration: none;
  }

`;

const PageWrapper = styled.div`
  height: calc(100% - 64px);
`;

const Container = styled.div`
  height: 100%;
  padding: 32px 64px;
`;

const Page: React.FunctionComponent = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Meta />
      <Container>
        <Navbar title='Łukasz Myśliwiec' />
        <PageWrapper>{children}</PageWrapper>
      </Container>
    </>
  );
};

export default Page;
