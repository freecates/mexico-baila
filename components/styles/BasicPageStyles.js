import styled from 'styled-components'

const BasicPageStyles = styled.div`
  .hero {
    width: 100%;
    height: 100vh;
  }
  .hero.no--no-height {
    height: 100%;
    padding-bottom: 3.125rem;
  }
  .with-video {
    height: 100vh;
  }
  @media screen and (max-width: 823px) {
    .hero.no-height {
      height: 100%;
      padding-bottom: 3.125rem;
    }
    .with-video {
      height: 50vh;
    }
  }
  h1,
  h2 {
    font-weight: normal;
  }
  .black {
    background: #000000;
    color: #ffffff;
  }
  .hero.with-img {
    height: 100%;
  }
  .title,
  .subtitle,
  .lead {
    margin: 0;
    width: 100%;
  }
  .title {
    padding-top: 3.125em;
    line-height: 2.25;
    font-size: 1.875em;
  }
  .subtitle {
    padding-top: 2.083em;
    line-height: 1.15;
    font-size: 1.25em;
  }
  .lead {
    padding-top: 1.8083em;
    line-height: 1;
    font-size: 1.15em;
  }
  @media screen and (min-width: 768px) {
    .title {
      padding-top: 7.5rem;
      line-height: 2.25;
      font-size: 4.5rem;
    }
    .subtitle {
      padding-top: 5rem;
      line-height: 1.15;
      font-size: 3rem;
    }
    .lead {
      padding-top: 3.3rem;
      line-height: 1;
      font-size: 2rem;
    }
  }
  .title,
  .description,
  .subtitle,
  .lead {
    text-align: center;
  }
  .align-left {
    text-align: left;
  }
  img {
    max-width: 100%;
    height: 100%;
  }
  .row {
    max-width: 100%;
    margin: 80px auto 40px;
    display: grid;
    justify-content: space-between;
    align-items: flex-start;
  }
  .row.sm-12 {
    grid-template-columns: 1fr;
  }
  .row.sm-6 {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: 768px) {
    .row.md-12 {
      grid-template-columns: 1fr;
    }
    .row.md-6 {
      grid-template-columns: 1fr 1fr;
    }
    .row.md-4 {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  @media screen and (min-width: 1024px) {
    .row.sm-12 {
      max-width: 60rem;
      margin: 0 auto;
    }
    .row.lg-12 {
      grid-template-columns: 1fr;
    }
    .row.lg-6 {
      grid-template-columns: 1fr 1fr;
    }
    .row.lg-4 {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .row.lg-3 {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
  @media screen and (min-width: 1280px) {
    .row.sm-12 {
      max-width: 75rem;
    }
    .row.xl-12 {
      grid-template-columns: 1fr;
    }
    .row.xl-6 {
      grid-template-columns: 1fr 1fr;
    }
    .row.xl-4 {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .row.xl-3 {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
  .card {
    text-align: left;
    text-decoration: none;
  }
  .card p {
    margin: 0;
    padding: 18px 18px 24px;
  }
  @media screen and (max-width: 767px) {
    .row.sm-6 .card:nth-child(odd) {
      padding: 0 5px 0 0;
    }
    .row.sm-6 .card:nth-child(even) {
      padding: 0 0 0 5px;
    }
  }
  .card figure {
    margin: 1em 0;
    padding: 0;
  }
  @media screen and (min-width: 768px) {
    .card {
      padding: 18px 18px 24px;
    }
    .card p {
      padding: 12px 0;
    }
  }
  hr {
    width: 80%;
  }
`

export default BasicPageStyles
