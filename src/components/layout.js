/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Navbar from './Globals/Navbar';
import HomeHeader from './Globals/HomeHeader';
import Card from './Globals/Card';
import LineChart from './Globals/LineChart'

import "./layout.scss"

const Layout = ({ children }) => (
  <Fragment>
    <Navbar />
    <HomeHeader logo='logo' siteName="David's Wallet" />
    <Card />
    <LineChart />
    {children}
  </Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
