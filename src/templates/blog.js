import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const BlogPost = ({ data }) => {
  const { title, content, image, tags } = data.contentfulBlog;
  return (
    <Layout>
      <SEO title={title} />
      <div className="blogpost">
        <h1>{title}</h1>
        <img alt={title} src={image.file.url} />
        {/* <div className="tags">
          {tags.map(tag => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
          </div> */}
        <div dangerouslySetInnerHTML={{ __html: content.childMarkdownRemark.html }} />
        <Link to="/blog">View more posts</Link>
        <br />
        <Link to="/">Back to Home</Link>
      </div>
    </Layout>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      title
      slug
      content {
        childMarkdownRemark {
          html
        }
      }
      image {
        file {
          url
        }
      }
      tags
    }
  }
`;