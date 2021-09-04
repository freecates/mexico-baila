import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import Footer from './Footer'
import Header from './Header'
import Meta from './Meta'

const theme = {
  white: '#ffffff',
  maxWidth: '100%',
  width: '100%',
  black: '#000000'
}

const StyledPage = styled.div`
  background: ${props => props.theme.white};
  max-width: 100%;
  width: 100%;
  color: ${props => props.theme.black};
`

const GlobalStyles = createGlobalStyle`
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
a {
  color:${props => props.theme.white};
}
a.black-anchor {
  color:${props => props.theme.black}!important;
}
a:hover {
  text-decoration:none;
}`

export default function Page(props) {
  return (
    <ThemeProvider theme={theme}>
      <StyledPage>
        <Meta />
        <Header />
        {props.children}
        <Footer />
        <GlobalStyles />
        <link rel="stylesheet" type="text/css" href="/nprogress.css" />
      </StyledPage>
    </ThemeProvider>
  )
}
