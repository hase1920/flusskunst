import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import {Blogdiv} from '../components/format'
class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
         <Blogdiv>
        <SEO
          title={post.frontmatter.artist}
          description={post.frontmatter.description || post.excerpt}
        />
        <h1>{post.frontmatter.artist}<br/>
        <span style={{fontSize:'.9rem',textTransform:'uppercase'}}>{post.frontmatter.kategorie}</span>
        </h1>
        <img width="500px" height="auto" src={`/${post.frontmatter.bild}`} alt=""/>
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
       
        </p>
        <div style={{width:'60%'}} dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.artist}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.artist} →
              </Link>
            )}
          </li>
        </ul>
        </Blogdiv>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        artist
        date(formatString: "MMMM DD, YYYY")
        description
        kategorie
        bild
      }
    }
  }
`
