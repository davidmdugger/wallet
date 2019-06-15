/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { Fragment } from "react"
import PropTypes from "prop-types"

import MainHeader from './Globals/MainHeader';
import Card from './Globals/Card';

import "./layout.scss"

const Layout = ({ children }) => (
  <div className="layout-container">
    <MainHeader />
    {children}
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
