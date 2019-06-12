import React from 'react'

import './HomeHeader.scss';

export default function HomeHeader({ siteName, logo }) {
  return (
    <header className="home-header">
      <p className="site-name">{siteName}</p>
      <p className="logo">{logo}</p>
    </header>
  )
}
