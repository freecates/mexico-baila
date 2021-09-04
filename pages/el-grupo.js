import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import React from 'react';
import Logo from '../components/Logo';
import MainLayout from '../components/MainLayout';
import ResponsiveParallax from '../components/ResponsiveParallax';
import BasicPageStyles from '../components/styles/BasicPageStyles';

const ElGrupo = ({ data }) => (
    <MainLayout mainlayout>
        <Head>
            <title>{data.subtitle} | México Baila</title>
            <meta name='description' content={data.content.lead} />

            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{
                    __html: `
          {
            "@context": "http://schema.org",
            "@type": "WebPAge",
            "name": "${data.subtitle}",
            "description": "${data.content.lead}",
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
                <p className='subtitle'>{data.content.lead}</p>

                <div className='row sm-12 md-6'>
                    <p className='card align-left'>{data.content.first}</p>

                    <p className='card align-left'>{data.content.second}</p>
                </div>
            </div>
            <div className='hero with-img black'>
                <ResponsiveParallax
                    bgImage={data.images[1].src}
                    bgImageAlt={data.images[1].alt}
                    bgImageSrcSet={data.images[1].srcSet}
                    bgImageSizes='(max-width: 480px) 480px, (max-width: 800px) 800px, 4048px'
                />
            </div>

            <div className='hero no-height black'>
                <h1 className='title'>{data.bio.title}</h1>
                <p className='description'>{data.bio.subtitle}</p>
                <p
                    className='description'
                    dangerouslySetInnerHTML={{
                        __html: data.bio.lead,
                    }}
                />

                <div className='row sm-12 md-6'>
                    <p
                        className='card align-left'
                        dangerouslySetInnerHTML={{
                            __html: data.bio.first,
                        }}
                    />

                    <p
                        className='card align-left'
                        dangerouslySetInnerHTML={{
                            __html: data.bio.second,
                        }}
                    />
                </div>
            </div>
        </BasicPageStyles>
    </MainLayout>
);

export const getStaticProps = async () => {
    const res = await fetch(`https://mexicobailadata.now.sh/el-grupo.json`);
    const data = await res.json();
    return {
        props: { data },
        revalidate: 1,
    };
};

export default ElGrupo;
