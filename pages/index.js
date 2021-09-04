import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import React from 'react';
import Logo from '../components/Logo';
import MainLayout from '../components/MainLayout';
import ResponsiveParallax from '../components/ResponsiveParallax';
import BasicPageStyles from '../components/styles/BasicPageStyles';

const Home = ({ data }) => (
    <MainLayout mainlayout>
        <Head>
            <title>{data.description} | México Baila</title>
            <meta name='description' content={data.description} />

            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{
                    __html: `
          {
            "@context": "http://schema.org",
            "@type": "WebPAge",
            "name": "${data.subtitle}",
            "description": "${data.description}",
            "author": {
              "@type": "Person",
              "name": "Ramon Gil"
            },
            "publisher": {
            "@type": "Organization",
            "name": "México Baila",
            "logo": {
              "@type": "ImageObject",
              "url": "https://mexicobaila.com/icons/android-chrome-512x512.png"
                }
              }, 
            "image": "${data.images[0].src}"
          }`,
                }}
            />
        </Head>

        <BasicPageStyles>
            <Logo />

            <div className='hero no-height black'>
                <h1 className='title'>{data.title}</h1>
                <h2 className='subtitle'>{data.subtitle}</h2>
                <p className='description'>{data.description}</p>
            </div>
            <div className='hero with-img'>
                <ResponsiveParallax
                    bgImage={data.images[0].src}
                    bgImageAlt={data.images[0].alt}
                    bgImageSrcSet={data.images[0].srcSet}
                    bgImageSizes='(max-width: 480px) 480px, (max-width: 800px) 800px, 4032px'
                />
            </div>

            <div className='hero no-height'>
                <blockquote>
                    <p className='subtitle'>{data.content.first}</p>

                    <p className='subtitle'>{data.content.second}</p>
                </blockquote>
            </div>
            <div className='hero with-img'>
                <ResponsiveParallax
                    bgImage={data.images[1].src}
                    bgImageAlt={data.images[1].alt}
                    bgImageSrcSet={data.images[1].srcSet}
                    bgImageSizes='(max-width: 480px) 480px, (max-width: 800px) 800px, 2368px'
                />
            </div>

            <div>
                <blockquote>
                    <p className='description'>{data.cite.quote}</p>
                    <p className='description'>
                        <cite>–{data.cite.author}</cite>
                    </p>
                </blockquote>
            </div>
        </BasicPageStyles>
    </MainLayout>
);

export const getStaticProps = async () => {
    const res = await fetch(`https://mexicobailadata.now.sh/home.json`);
    const data = await res.json();
    return {
        props: { data },
        revalidate: 1,
    };
};

export default Home;
