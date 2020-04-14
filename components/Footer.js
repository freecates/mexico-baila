import styled from 'styled-components'
import Nav from './nav'

const StyleFooter = styled.footer`
  nav {
    text-align: center;
    background: #000000;
  }
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  nav > ul {
    padding: 4px 16px;
    margin: 0;
  }
  li {
    display: flex;
    padding: 6px 8px;
  }
  a {
    color: #ffffff;
    text-decoration: none;
    font-size: 13px;
  }
  li img {
    max-width: 100%;
  }
`

const Footer = props => (
  <StyleFooter>
    <Nav withHome />
  </StyleFooter>
)

export default Footer
