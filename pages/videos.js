import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { FormattedDate, IntlProvider } from 'react-intl';
import Logo from '../components/Logo';
import MainLayout from '../components/MainLayout';
import ResponsiveParallax from '../components/ResponsiveParallax';
import BasicPageStyles from '../components/styles/BasicPageStyles';

const Videos = ({ videos, latestVideos, data }) => (
    <MainLayout mainlayout>
        <Head>
            <title>{data.title} | México Baila</title>
            <meta name='description' content={`${data.title} | México Baila`} />
        </Head>

        <BasicPageStyles>
            <Logo />

            <div className='hero no-height black'>
                <h1 className='subtitle'>Archivo histórico canal vídeos de Yotube</h1>
            </div>
            <div className='hero no--no-height'>
                <p className='lead'>{data.section.first}</p>
                <div className='row sm-12 md-12 lg-6 xl-4'>
                    <IntlProvider locale='es'>
                        {latestVideos
                            .sort((a, b) => {
                                if (a.timestamp > b.timestamp) {
                                    return -1;
                                }
                                if (a.timestamp < b.timestamp) {
                                    return 1;
                                }
                                return 0;
                            })
                            .map((latestVideo, index) => (
                                <div className='card' key={index}>
                                    {latestVideo.thumbnail ? (
                                        <div>
                                            <figure className='fade-in img-team'>
                                                <Link
                                                    as={`/v/${latestVideo.id}`}
                                                    href={`/video?id=${latestVideo.id}`}
                                                >
                                                    <a title={'Ver ' + latestVideo.title}>
                                                        <img
                                                            clasname='center-img'
                                                            src={latestVideo.thumbnail.substring(
                                                                0,
                                                                latestVideo.thumbnail.indexOf('?'),
                                                            )}
                                                            alt={latestVideo.title}
                                                            width='100%'
                                                            height='360'
                                                            loading='lazy'
                                                        />
                                                    </a>
                                                </Link>
                                                <figcaption>
                                                    <Link
                                                        as={`/v/${latestVideo.id}`}
                                                        href={`/video?id=${latestVideo.id}`}
                                                    >
                                                        <a
                                                            className='black-anchor'
                                                            title={'Ver ' + latestVideo.title}
                                                        >
                                                            <p>
                                                                <FormattedDate
                                                                    value={
                                                                        new Date(
                                                                            latestVideo.timestamp,
                                                                        ) -
                                                                        1000 * 60 * 60 * 24
                                                                    }
                                                                />
                                                            </p>
                                                            <p
                                                                dangerouslySetInnerHTML={{
                                                                    __html: latestVideo.title,
                                                                }}
                                                            />
                                                        </a>
                                                    </Link>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    ) : (
                                        ''
                                    )}
                                </div>
                            ))}
                    </IntlProvider>
                </div>
                <p className='lead'>{data.section.second}</p>
                <div className='row sm-6 md-6 lg-4 xl-3'>
                    <IntlProvider locale='es'>
                        {videos
                            .sort((a, b) => {
                                if (a.timestamp > b.timestamp) {
                                    return -1;
                                }
                                if (a.timestamp < b.timestamp) {
                                    return 1;
                                }
                                return 0;
                            })
                            .map((video, index) => (
                                <div className='card' key={index}>
                                    {video.thumbnail ? (
                                        <div>
                                            <figure className='fade-in img-team'>
                                                <Link
                                                    as={`/v/${video.id}`}
                                                    href={`/video?id=${video.id}`}
                                                >
                                                    <a title={'Ver ' + video.title}>
                                                        <img
                                                            clasname='center-img'
                                                            src={video.thumbnail.substring(
                                                                0,
                                                                video.thumbnail.indexOf('?'),
                                                            )}
                                                            alt={video.title}
                                                            width='100%'
                                                            height='360'
                                                            loading='lazy'
                                                        />
                                                    </a>
                                                </Link>
                                                <figcaption>
                                                    <Link
                                                        as={`/v/${video.id}`}
                                                        href={`/video?id=${video.id}`}
                                                    >
                                                        <a
                                                            className='black-anchor'
                                                            title={'Ver ' + video.title}
                                                        >
                                                            <p>
                                                                <FormattedDate
                                                                    value={
                                                                        new Date(video.timestamp) -
                                                                        1000 * 60 * 60 * 24
                                                                    }
                                                                />
                                                            </p>
                                                            <p
                                                                dangerouslySetInnerHTML={{
                                                                    __html: video.title,
                                                                }}
                                                            />
                                                        </a>
                                                    </Link>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    ) : (
                                        ''
                                    )}
                                </div>
                            ))}
                    </IntlProvider>
                </div>
            </div>
            <div className='hero with-img black'>
                <ResponsiveParallax
                    bgImage={data.images[0].src}
                    bgImageAlt={data.images[0].alt}
                    bgImageSrcSet={data.images[0].srcSet}
                    bgImageSizes='(max-width: 480px) 480px, (max-width: 800px) 800px, 2697px'
                />
            </div>
        </BasicPageStyles>
    </MainLayout>
);

export const getStaticProps = async () => {
    const res = await fetch(`https://mexicobailadata.now.sh/videos.json`);
    const videosNoOK = await res.json();
    const res2 = await fetch(`https://mexico-baila-data.vercel.app/data/paginavideos.json`);
    const data = await res2.json();
    const today = new Date();
    const yyyy = today.getFullYear();
    const mexico = 'México Baila';
    const mexicobaila = 'MexicoBaila.com';
    const latestVideos = videosNoOK.filter(
        (x) => new Date(x.timestamp).getFullYear() == yyyy && x.title.includes(mexico),
    );
    const videos = videosNoOK.filter(
        (x) =>
            (x.title.includes(mexico) || x.title.includes(mexicobaila)) &&
            new Date(x.timestamp).getFullYear() != yyyy,
    );
    return {
        props: { videos, latestVideos, data },
        revalidate: 1,
    };
};

export default Videos;
