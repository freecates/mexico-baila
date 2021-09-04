import Link from 'next/link';
import React from 'react';

const links = [
    { href: '/contacto', label: 'Contacto' },
    { href: '/el-grupo', label: 'El Grupo' },
    { href: '/servicios', label: 'Servicios' },
    { href: '/videos', label: 'Vídeos' },
].map((link) => {
    link.key = `nav-link-${link.href}-${link.label}`;
    return link;
});

const Nav = (props) => (
    <nav>
        <ul>
            {props.withHome && (
                <li>
                    <Link href='/'>
                        <a title='Inicio'>
                            <img
                                src='/logo-mexico-baila-footer.png'
                                alt='Logo Mexico Baila'
                                width='75'
                                height='75'
                            />
                        </a>
                    </Link>
                </li>
            )}
            {links.map(({ key, href, label }) => (
                <li key={key}>
                    <Link href={href}>
                        <a>{label}</a>
                    </Link>
                </li>
            ))}
        </ul>
    </nav>
);

export default Nav;
