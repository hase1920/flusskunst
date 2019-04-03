import React from "react"
import { Link, graphql } from "gatsby"

//import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {Blogdiv,MeinBild} from '../components/format'

class BlogIndex extends React.Component {
  state = {
   posts:[],
   aposts:[],
   kategorie:"0", 
   lang:0
  }

zeig = (e) => {
  e.preventDefault()
  this.setState({kategorie:e.target.value})
  }
  

  render() {
  const { data } = this.props
  const posts = data.allMarkdownRemark.edges
     return  (
      <Layout location={this.props.location} title={this.state.siteTitle? this.state.siteTitle:null}>
        <SEO
          title="Künstler und Künstlerinnen vom Weltkulturerbe Oberes Mittelrheintal"
          keywords={[`Künstler vom Mittelrhein`, `Künstlerverzeichnis Mittelrhein`, `Kunst vom Mittelrhein`]}
        />
        <div>
  <select onChange={this.zeig}>
    <option value="0">Wähle Kategorie:</option>
    <option value="alle">Alle Künstler</option>
    <option value="bildene Kunst">Bildende Kunst</option>
    <option value="Gesang">Gesang</option>
    <option value="Instrumentalmusik">Instrumentalmusik</option>
    <option value="Malerei">Malerei</option>
    <option value="Literatur">Literatur</option>
    <option value="Photografie">Photografie</option>
    <option value="Design">Design</option>
    </select>
    </div>
        <Blogdiv>
        {posts.map(({ node }) => {
          if(this.state.kategorie==="0" || this.state.kategorie==="alle"){
          return (
             <MeinBild key={node.fields.slug}>
              <figure>
              <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  <img src={node.frontmatter.bild} alt={node.frontmatter.artist} />
              </Link>
              <figcaption>{node.frontmatter.artist}</figcaption>
             </figure>
            </MeinBild>
           )
          }
         else if(this.state.kategorie===node.frontmatter.kategorie){
            return(
              <MeinBild key={node.fields.slug}>
              <figure>
              <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  <img src={node.frontmatter.bild} alt="" />
              </Link>
              <figcaption>{node.frontmatter.artist}</figcaption>
             </figure>
            </MeinBild>
            )
         }
       return ""
        })}
        </Blogdiv>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            artist
            description
            kategorie
            bild
            webseite
            ort
            strasse
            email
          }
        }
      }
    }
  }
`
