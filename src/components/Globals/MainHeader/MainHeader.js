import React from 'react'

import Navbar from '../Navbar';

import './MainHeader.scss';
import LineChart from '../LineChart';

export default function MainHeader({ siteName, logo }) {
  return (
    <header className="main-header">
      <Navbar />
      <LineChart />
    </header>
  )
}
