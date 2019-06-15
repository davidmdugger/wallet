/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { Fragment } from "react"
import PropTypes from "prop-types"

import HomeHeader from './Globals/HomeHeader';
import Card from './Globals/Card';

import "./layout.scss"

const Layout = ({ children }) => (
  <Fragment>
    <HomeHeader />
    <h1>David's Wallet</h1>
    <Card />
    {children}
  </Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
