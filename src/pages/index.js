import React from "react"

import Layout from "../components/layout"

import BackgroundSection from '../components/Globals/BackgroundSection'
import Card from '../components/Globals/Card'
import SEO from "../components/seo"
import { graphql } from 'gatsby';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Card />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Index Title"
    />
  </Layout>
)

export const query = graphql`
{
  img:file(relativePath:{eq:"tradingview-chart.jpg"}){
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default IndexPage
