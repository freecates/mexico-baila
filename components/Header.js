import routerEvents from 'next-router-events'
import NProgress from 'nprogress'
import styled from 'styled-components'
import Nav from './nav'

routerEvents.on('routeChangeStart', () => {
  NProgress.start()
})
routerEvents.on('routeChangeComplete', () => {
  NProgress.done()
})
routerEvents.on('routeChangeError', () => {
  NProgress.done()
})

const StyleHeader = styled.header`
  nav {
    text-align: center;
    background: #000000;
    position: fixed;
    width: 100%;
    z-index: 3000;
  }
  ul {
    display: flex;
    justify-content: space-between;
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
`

const Header = props => (
  <StyleHeader>
    <Nav />
  </StyleHeader>
)

export default Header
