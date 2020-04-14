import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import React from 'react'
import Logo from '../components/Logo'
import MainLayout from '../components/MainLayout'
import ResponsiveParallax from '../components/ResponsiveParallax'
import BasicPageStyles from '../components/styles/BasicPageStyles'

const Contacto = props => (
  <MainLayout mainlayout>
    <Head>
      <title>{props.data.subtitle} | México Baila</title>
      <meta name="description" content={props.data.subtitle} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "url": "https://www.mexicobaila.com",
      "logo": "https://mexicobaila.com/static/icons/android-chrome-512x512.png",
      "contactPoint": [{
        "@type": "ContactPoint",
        "telephone": "${props.data.tel}",
        "contactType": "sales"
      }]
    }`
        }}
      />
    </Head>

    <BasicPageStyles>
      <Logo />

      <div className="hero no-height black">
        <h1 className="subtitle">{props.data.subtitle}</h1>
        <p className="description">
          Tel:{' '}
          <a href={`tel:${props.data.tel}`}>
            {props.data.tel.replace(
              /(\d{2})(\d{2})(\d{3})(\d{6})/,
              '$1 $2 $3 $4'
            )}
          </a>
        </p>
        <p className="description">
          Correo-e: <a href={`mailto:${props.data.mail}`}>{props.data.mail}</a>
        </p>
        <p className="description">{props.data.name}</p>
      </div>
      <div className="hero with-img black">
        <ResponsiveParallax
          bgImage={props.data.images[0].src}
          bgImageAlt={props.data.images[0].alt}
          bgImageSrcSet={props.data.images[0].srcSet}
          bgImageSizes="(max-width: 480px) 480px, (max-width: 800px) 800px, 2040px"
        />
      </div>
    </BasicPageStyles>
  </MainLayout>
)

Contacto.getInitialProps = async function() {
  const res = await fetch(`https://mexicobailadata.now.sh/contacto.json`)
  const data = await res.json()

  return { data }
}

export default Contacto
