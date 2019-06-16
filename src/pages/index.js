import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"
import { StaticQuery, graphql } from 'gatsby';

const IndexPage = ({ data }) => (
  <StaticQuery
    query={graphql`
    query MyQuery {
      allContentfulBlog {
        edges {
          node {
            createdAt
            title
            content {
              content
            }
          }
        }
      }
    }
    `}
    render={({
      allContentfulBlog: {
        edges
      },
    }) => (
        <Layout>
          <SEO title="Home" />
          <h1>david's wallet</h1>
          <div>
            {edges.map(e => (
              <React.Fragment>
                <p>{e.node.title}</p>
              </React.Fragment>
            ))}
          </div>
        </Layout>
      )
    }
  />
)

export default IndexPage
