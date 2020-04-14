import React from 'react'
import { Parallax } from 'react-parallax'
import { useMediaQuery } from 'react-responsive'

const ResponsiveParallax = props => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)'
  })

  return (
    <>
      {isDesktopOrLaptop && (
        <Parallax
          strength={600}
          bgImage={props.bgImage}
          bgImageAlt={props.bgImageAlt}
          bgImageSrcSet={props.bgImageSrcSet}
          bgImageSizes={props.bgImageSizes}
        >
          <div style={{ height: '90vh' }} />
        </Parallax>
      )}
      {isTabletOrMobileDevice && (
        <Parallax
          strength={300}
          bgImage={props.bgImage}
          bgImageAlt={props.bgImageAlt}
          bgImageSrcSet={props.bgImageSrcSet}
          bgImageSizes={props.bgImageSizes}
        >
          <div style={{ height: '60vh' }} />
        </Parallax>
      )}
    </>
  )
}

export default ResponsiveParallax
