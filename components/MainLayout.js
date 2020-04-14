import { useEffect } from 'react'
import styled from 'styled-components'
import { initGA, logPageView } from '../utils/analytics'

const MainStyle = styled.main`
  max-width: 100%;
  max-width: ${props => props.theme.maxWidth};
`

export default function MainLayout(props) {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  })

  return (
    <>
      {props.mainlayout && (
        <div className={'mainlayout' in props && 'mainlayout'}>
          <MainStyle>{props.children}</MainStyle>
        </div>
      )}
    </>
  )
}
