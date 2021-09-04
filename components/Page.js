import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Footer from './Footer';
import Header from './Header';
import Meta from './Meta';

const theme = {
    white: '#ffffff',
    maxWidth: '100%',
    width: '100%',
    black: '#000000',
};

const StyledPage = styled.div`
    background: ${(props) => props.theme.white};
    max-width: 100%;
    width: 100%;
    color: ${(props) => props.theme.black};
`;

const GlobalStyles = createGlobalStyle`/* latin-ext */
@font-face {
  font-family: 'Abril Fatface';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('https://fonts.gstatic.com/s/abrilfatface/v12/zOL64pLDlL1D99S8g8PtiKchq-lmjdLh.woff2') format('woff2');
  unicode-range: 'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF';
}
/* latin */
@font-face {
  font-family: 'Abril Fatface';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('https://fonts.gstatic.com/s/abrilfatface/v12/zOL64pLDlL1D99S8g8PtiKchq-dmjQ.woff2') format('woff2');
  unicode-range: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD';
}
html {
  box-sizing:border-box;
  padding:0;
  margin: 0;
}
*, *:before, *:after {
  box-sizing:inherit;
}
body {
    margin: 0;
    font-family: serif;
    font-size: 1.125rem;
    padding: 0;
}
h1, h2, h3, h4, h5, h6 {
  font-family: 'Abril Fatface', cursive;
}
a {
  color:${(props) => props.theme.white};
}
a.black-anchor {
  color:${(props) => props.theme.black}!important;
}
a:hover {
  text-decoration:none;
}`;

export default function Page(props) {
    return (
        <ThemeProvider theme={theme}>
            <StyledPage>
                <Meta />
                <Header />
                {props.children}
                <Footer />
                <GlobalStyles />
                <link rel='stylesheet' type='text/css' href='/nprogress.css' />
            </StyledPage>
        </ThemeProvider>
    );
}
