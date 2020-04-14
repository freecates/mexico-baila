import Link from 'next/link'
import React from 'react'

const Logo = () => (
  <header className="description black">
    <Link href="/">
      <a title="Inicio">
        <img src="/static/logo-mexico-baila.png" alt="Logo Mexico Baila" />
      </a>
    </Link>
  </header>
)

export default Logo
