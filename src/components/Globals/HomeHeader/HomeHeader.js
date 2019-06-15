import React from 'react'

import Navbar from '../Navbar';

import './HomeHeader.scss';
import LineChart from '../LineChart';

export default function HomeHeader({ siteName, logo }) {
  return (
    <header className="home-header">
      <Navbar />
      <LineChart />
    </header>
  )
}
