import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import React from 'react';
import Logo from '../components/Logo';
import MainLayout from '../components/MainLayout';
import ResponsiveParallax from '../components/ResponsiveParallax';
import BasicPageStyles from '../components/styles/BasicPageStyles';

const Contacto = ({ data }) => (
    <MainLayout mainlayout>
        <Head>
            <title>{data.subtitle} | México Baila</title>
            <meta name='description' content={data.subtitle} />

            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{
                    __html: `
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "url": "https://www.mexicobaila.com",
      "logo": "https://mexicobaila.com/icons/android-chrome-512x512.png",
      "contactPoint": [{
        "@type": "ContactPoint",
        "telephone": "${data.tel}",
        "contactType": "sales"
      }]
    }`,
                }}
            />
        </Head>

        <BasicPageStyles>
            <Logo />

            <div className='hero no-height black'>
                <h1 className='subtitle'>{data.subtitle}</h1>
                <p className='description'>
                    Tel:{' '}
                    <a href={`tel:${data.tel}`}>
                        {data.tel.replace(/(\d{2})(\d{2})(\d{3})(\d{6})/, '$1 $2 $3 $4')}
                    </a>
                </p>
                <p className='description'>
                    Correo-e: <a href={`mailto:${data.mail}`}>{data.mail}</a>
                </p>
                <p className='description'>{data.name}</p>
            </div>
            <div className='hero with-img black'>
                <ResponsiveParallax
                    bgImage={data.images[0].src}
                    bgImageAlt={data.images[0].alt}
                    bgImageSrcSet={data.images[0].srcSet}
                    bgImageSizes='(max-width: 480px) 480px, (max-width: 800px) 800px, 2040px'
                />
            </div>
        </BasicPageStyles>
    </MainLayout>
);

export const getStaticProps = async () => {
    const res = await fetch(`https://mexicobailadata.now.sh/contacto.json`);
    const data = await res.json();
    return {
        props: { data },
        revalidate: 1,
    };
};

export default Contacto;
