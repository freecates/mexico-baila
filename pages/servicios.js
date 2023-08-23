import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import React from 'react';
import Logo from '../components/Logo';
import MainLayout from '../components/MainLayout';
import ResponsiveParallax from '../components/ResponsiveParallax';
import BasicPageStyles from '../components/styles/BasicPageStyles';

const Servicios = ({ data }) => (
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
            </div>
            <div className='hero with-img'>
                <ResponsiveParallax
                    bgImage={data.images[0].src}
                    bgImageAlt={data.images[0].alt}
                    bgImageSrcSet={data.images[0].srcSet}
                    bgImageSizes='(max-width: 480px) 480px, (max-width: 800px) 800px, 4032px'
                />
            </div>

            <div className='hero no--no-height'>
                <h2 className='subtitle'>{data.description}</h2>
                <p className='lead'>{data.content.firstLead}</p>
                <hr />
                <h2 className='subtitle'>{data.content.title}</h2>
                <p className='lead'>{data.content.secondLead}</p>
                <div className='row sm-12 md-6 lg-4'>
                    {data.cards
                        .sort((a, b) => {
                            if (a.id < b.id) {
                                return -1;
                            }
                            if (a.id > b.id) {
                                return 1;
                            }
                            return 0;
                        })
                        .map((card, id) => (
                            <div className='card' key={id}>
                                <h2 className='lead'>{card.title}</h2>
                                <figure className='description'>
                                    <img
                                        src={card.img.src}
                                        alt={card.img.alt}
                                        loading='lazy'
                                        width='640'
                                        height='480'
                                    />
                                </figure>
                                {card.content.map((conten, id) => (
                                    <p className='align-left' key={id}>
                                        {conten.text}
                                    </p>
                                ))}
                            </div>
                        ))}
                </div>
            </div>
            <div className='hero with-img black'>
                <ResponsiveParallax
                    bgImage={data.images[1].src}
                    bgImageAlt={data.images[1].alt}
                    bgImageSrcSet={data.images[1].srcSet}
                    bgImageSizes='(max-width: 480px) 480px, (max-width: 800px) 800px, 4032px'
                />
            </div>
        </BasicPageStyles>
    </MainLayout>
);

export const getStaticProps = async () => {
    const res = await fetch(`https://mexico-baila-data.vercel.app/data/servicios.json`);
    const data = await res.json();
    return {
        props: { data },
        revalidate: 1,
    };
};

export default Servicios;
