/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`);
const slash = require(`slash`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  // we use the provided allContentfulBlogPost query to fetch the data from Contentful
  return graphql(
    `
      {
        allContentfulBlog {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      console.log("Error retrieving contentful data", result.errors);
    }

    // Resolve the paths to our template
    const blogPostTemplate = path.resolve("./src/templates/blog.js");

    // create new page for each blog slug found in contentful
    result.data.allContentfulBlog.edges.forEach(edge => {
      edge.node.slug &&
        createPage({
          path: `/blog/${edge.node.slug}/`,
          component: slash(blogPostTemplate),
          context: {
            slug: edge.node.slug,
            id: edge.node.id
          }
        });
    });
  })
    .catch(error => {
      console.log("Error retrieving contentful data", error);
    });
};