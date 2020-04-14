import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import React from 'react'
import Logo from '../components/Logo'
import MainLayout from '../components/MainLayout'
import ResponsiveParallax from '../components/ResponsiveParallax'
import BasicPageStyles from '../components/styles/BasicPageStyles'

const ElGrupo = props => (
  <MainLayout mainlayout>
    <Head>
      <title>{props.data.subtitle} | México Baila</title>
      <meta name="description" content={props.data.content.lead} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
          {
            "@context": "http://schema.org",
            "@type": "WebPAge",
            "name": "${props.data.subtitle}",
            "description": "${props.data.content.lead}",
            "author": {
              "@type": "Person",
              "name": "Ramon Gil"
            },
            "publisher": {
            "@type": "Organization",
            "name": "México Baila",
            "logo": {
              "@type": "ImageObject",
              "url": "https://mexicobaila.com/static/icons/android-chrome-512x512.png"
                }
              }, 
            "image": "${props.data.images[0].src}"
          }`
        }}
      />
    </Head>

    <BasicPageStyles>
      <Logo />

      <div className="hero no-height black">
        <h1 className="title">{props.data.title}</h1>
        <h2 className="subtitle">{props.data.subtitle}</h2>
      </div>
      <div className="hero with-img">
        <ResponsiveParallax
          bgImage={props.data.images[0].src}
          bgImageAlt={props.data.images[0].alt}
          bgImageSrcSet={props.data.images[0].srcSet}
          bgImageSizes="(max-width: 480px) 480px, (max-width: 800px) 800px, 4032px"
        />
      </div>

      <div className="hero no-height">
        <p className="subtitle">{props.data.content.lead}</p>

        <div className="row sm-12 md-6">
          <p className="card align-left">{props.data.content.first}</p>

          <p className="card align-left">{props.data.content.second}</p>
        </div>
      </div>
      <div className="hero with-img black">
        <ResponsiveParallax
          bgImage={props.data.images[1].src}
          bgImageAlt={props.data.images[1].alt}
          bgImageSrcSet={props.data.images[1].srcSet}
          bgImageSizes="(max-width: 480px) 480px, (max-width: 800px) 800px, 4048px"
        />
      </div>

      <div className="hero no-height black">
        <h1 className="title">{props.data.bio.title}</h1>
        <p className="description">{props.data.bio.subtitle}</p>
        <p
          className="description"
          dangerouslySetInnerHTML={{
            __html: props.data.bio.lead
          }}
        />

        <div className="row sm-12 md-6">
          <p
            className="card align-left"
            dangerouslySetInnerHTML={{
              __html: props.data.bio.first
            }}
          />

          <p
            className="card align-left"
            dangerouslySetInnerHTML={{
              __html: props.data.bio.second
            }}
          />
        </div>
      </div>
    </BasicPageStyles>
  </MainLayout>
)

ElGrupo.getInitialProps = async function() {
  const res = await fetch(`https://mexicobailadata.now.sh/el-grupo.json`)
  const data = await res.json()

  return { data }
}

export default ElGrupo
