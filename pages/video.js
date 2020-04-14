import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import React from 'react'
import { FormattedDate, IntlProvider } from 'react-intl'
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton
} from 'react-share'
import Logo from '../components/Logo'
import MainLayout from '../components/MainLayout'
import BasicPageStyles from '../components/styles/BasicPageStyles'

const Video = props => (
  <MainLayout mainlayout>
    <Head>
      <title>
        {props.videoDetails.items[0].snippet.title} - Castellers de Barcelona
      </title>
      <meta
        name="description"
        content={props.videoDetails.items[0].snippet.description}
      />

      <meta property="fb:app_id" content="1064356173625695" />
      <meta
        property="og:url"
        content={`https://www.mexicobaila.com/v/${props.videoDetails.items[0].id}`}
      />
      <meta property="og:type" content="article" />
      <meta
        property="og:title"
        content={props.videoDetails.items[0].snippet.title}
      />
      <meta
        property="og:description"
        content={props.videoDetails.items[0].snippet.description}
      />
      {props.videoDetails.items[0].snippet.thumbnails.maxres ? (
        <>
          <meta
            property="og:image"
            content={props.videoDetails.items[0].snippet.thumbnails.maxres.url}
          />
          <meta
            property="og:image:width"
            content={
              props.videoDetails.items[0].snippet.thumbnails.maxres.width
            }
          />
          <meta
            property="og:image:height"
            content={
              props.videoDetails.items[0].snippet.thumbnails.maxres.height
            }
          />
        </>
      ) : (
        <>
          <meta
            property="og:image"
            content={props.videoDetails.items[0].snippet.thumbnails.high.url}
          />
          <meta
            property="og:image:width"
            content={props.videoDetails.items[0].snippet.thumbnails.high.width}
          />
          <meta
            property="og:image:height"
            content={props.videoDetails.items[0].snippet.thumbnails.high.height}
          />
        </>
      )}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="mexico_baila" />
      <meta name="twitter:creator" content="mexico_baila" />
      <meta
        name="twitter:title"
        content={props.videoDetails.items[0].snippet.title}
      />
      <meta
        name="twitter:description"
        content={props.videoDetails.items[0].snippet.description}
      />
      {props.videoDetails.items[0].snippet.thumbnails.maxres ? (
        <meta
          name="twitter:image:src"
          content={props.videoDetails.items[0].snippet.thumbnails.maxres.url}
        />
      ) : (
        <meta
          name="twitter:image:src"
          content={props.videoDetails.items[0].snippet.thumbnails.high.url}
        />
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
    {
      "@context": "http://schema.org",
      "@type": "NewsArticle",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "${`https://www.mexicobaila.com/v/` +
          props.videoDetails.items[0].id}"
      },
      "author": {
        "@type": "Person",
        "name": "Ramon Gil"
      },
      "publisher": {
       "@type": "Organization",
       "name": "México Baila",
       "logo": {
         "@type": "ImageObject",
         "url": "https://www.mexicobaila.com/static/icons/android-chrome-512x512.png"
       }
      }, 
      "description": "${props.videoDetails.items[0].snippet.description}",
      "image": "${props.videoDetails.items[0].snippet.thumbnails.medium.url}",
      "datePublished": "${props.videoDetails.items[0].snippet.publishedAt}",
      "headline": "${props.videoDetails.items[0].snippet.title}"
    }`
        }}
      />
    </Head>
    <BasicPageStyles>
      <Logo />
      <div className="hero no-height black">
        <h1
          className="subtitle"
          dangerouslySetInnerHTML={{
            __html: props.videoDetails.items[0].snippet.description
          }}
        />
      </div>
      <div className="hero no--no-height">
        <div className="row sm-12">
          <IntlProvider defaultLocale="es">
            <div className="card">
              <div className="root">
                <div
                  className="videoWrapper"
                  dangerouslySetInnerHTML={{
                    __html: props.video.items[0].player.embedHtml
                  }}
                />
              </div>
              <div className="root">
                <p
                  dangerouslySetInnerHTML={{
                    __html: props.videoDetails.items[0].snippet.description
                  }}
                />
              </div>
            </div>
            <div className="card">
              <p className="lead">
                {props.videoDetails.items[0].snippet.title}
              </p>
              <p>
                <small>
                  <FormattedDate
                    value={props.videoDetails.items[0].snippet.publishedAt}
                    year="numeric"
                    month="long"
                    day="numeric"
                    weekday="long"
                  />
                </small>
              </p>

              <div className="social-share-icons">
                <div className="Post__some-network">
                  <p>
                    <small>Comparte:</small>
                  </p>
                </div>

                <div className="Post__some-network">
                  <FacebookShareButton
                    url={
                      'https://www.mexicobaila.com/v/' +
                      props.videoDetails.items[0].id
                    }
                    className="Post__some-network__share-button"
                  >
                    <FacebookIcon size={32} round />
                  </FacebookShareButton>
                </div>

                <div className="Post__some-network">
                  <TwitterShareButton
                    url={
                      'https://www.mexicobaila.com/v/' +
                      props.videoDetails.items[0].id
                    }
                    title={props.videoDetails.items[0].snippet.title}
                    hashtags={['mexicobaila']}
                    via="mexico_baila"
                    className="Post__some-network__share-button"
                  >
                    <TwitterIcon size={32} round />
                  </TwitterShareButton>
                </div>

                <div className="Post__some-network">
                  <LinkedinShareButton
                    url={
                      'https://www.mexicobaila.com/v/' +
                      props.videoDetails.items[0].id
                    }
                    title={props.videoDetails.items[0].snippet.title}
                    className="Post__some-network__share-button"
                  >
                    <LinkedinIcon size={32} round />
                  </LinkedinShareButton>
                </div>

                <div className="Post__some-network">
                  <EmailShareButton
                    url={
                      'https://www.mexicobaila.com/v/' +
                      props.videoDetails.items[0].id
                    }
                    subject={props.videoDetails.items[0].snippet.title}
                    body={
                      'Échale un vistazo a: ' +
                      props.videoDetails.items[0].snippet.title +
                      ' ' +
                      'https://www.mexicobaila.com/v/' +
                      props.videoDetails.items[0].id
                    }
                    className="Post__some-network__share-button"
                  >
                    <EmailIcon size={32} round />
                  </EmailShareButton>
                </div>
              </div>
            </div>
            <style jsx>{`
              .Post__some-network {
                vertical-align: top;
                display: inline-block;
                margin-right: 20px;
                text-align: center;
              }
              .social-share-icons {
                margin-bottom: 1.5rem;
              }
              .videoWrapper {
                position: relative;
                padding-bottom: 56.25%; /* 16:9 */
                padding-top: 25px;
                height: 0;
              }
              .root > :global(.videoWrapper iframe) {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
              }
            `}</style>
          </IntlProvider>
        </div>
      </div>
    </BasicPageStyles>
  </MainLayout>
)

Video.getInitialProps = async function(context) {
  const { id } = context.query
  const apiKey = 'AIzaSyAjze8m-r61sJcLz0yeN2D9g-qBzd7ffoA'
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=player&id=${id}&key=${apiKey}`
  )
  const video = await res.json()

  const res2 = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${apiKey}`
  )
  const videoDetails = await res2.json()
  return { video, videoDetails }
}

export default Video
