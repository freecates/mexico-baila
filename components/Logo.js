import Link from 'next/link';
import React from 'react';

const Logo = () => (
    <header className='description black'>
        <Link href='/'>
            <a title='Inicio'>
                <img
                    src='/logo-mexico-baila.png'
                    alt='Logo Mexico Baila'
                    width='200'
                    height='200'
                />
            </a>
        </Link>
    </header>
);

export default Logo;
