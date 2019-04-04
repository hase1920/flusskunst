import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import {Blogdiv2} from '../components/format'
class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
         <div>
         <Blogdiv2>
        <SEO
          title={post.frontmatter.artist}
          description={post.frontmatter.description || post.excerpt}
        />
        <Link to="/blog"> &larr; Alle Künster &amp; Künstlerinnen </Link>
        <h1>{post.frontmatter.artist}</h1>
        <span style={{fontSize:'.9rem',textTransform:'uppercase'}}>{post.frontmatter.kategorie}</span>
       {post.frontmatter.ort
         && <span>{post.frontmatter.ort}</span>
      }
        {post.frontmatter.email
          && <span>{post.frontmatter.email}</span>
        }
       {post.frontmatter.webseite && 
        <span><a rel="noopener noreferrer" target="_blank" href={post.frontmatter.webseite}>{post.frontmatter.webseite} </a></span>
      }
        
        
        <img src={${post.frontmatter.bild}} alt=""/>
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
       
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        
        
        

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li style={{
            margin:'0 35px'
          }}>
            {previous && (
              <Link style={{color:'#00BFFF'}} to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.artist}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link  style={{color:'#00BFFF'}} to={next.fields.slug} rel="next">
                {next.frontmatter.artist} →
              </Link>
            )}
          </li>
        </ul>
        </Blogdiv2>
        </div>
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
        ort
        strasse
        email
        webseite
      }
    }
  }
`
