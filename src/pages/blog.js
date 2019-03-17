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
   lang:0
  }
componentWillMount(){
  const { data } = this.props
  const siteTitle = this.props.data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  if(posts)
    this.setState({ posts:posts,siteTitle:siteTitle })
  }  
mach = (p) => {
   this.setState({posts:p})
  
}
zeig = (e) => {
  e.preventDefault()

  this.setState({apost:this.props.data.allMarkdownRemark.edges,posts:this.props.data.allMarkdownRemark.edges})
  let wert = e.target.value
  if(wert==="alle"){
    return
  }
  let p = this.props.data.allMarkdownRemark.edges.filter(item => item && item.node.frontmatter.kategorie===wert)
  
  this.mach(p) 
  
  }
  

  render() {
   //const { data } = this.props
   //
   //const posts = data.allMarkdownRemark.edges
    
   
    return  (
      <Layout location={this.props.location} title={this.state.siteTitle? this.state.siteTitle:null}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <div style={{width:'600px'}}>
  <select onChange={this.zeig}>
    <option value="0">Wähle Kategorie:</option>
    <option value="alle">Alle Künstler</option>
    <option value="bildene Kunst">Bildende Kunst</option>
    <option value="Gesang">Gesang</option>
    <option value="Instrumentalmusik">Instrumentalmusik</option>
    <option value="Malerei">Malerei</option>
    <option value="Literatur">Literatur</option>
    </select>
    </div>
        <Blogdiv>
        
        {this.state.posts.map(({ node }) => {
          //const artist = node.frontmatter.artist || node.fields.slug
          return (
            
            
             <MeinBild key={node.fields.slug}>
              <figure>
              <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                 
                <img className="scaled" src={node.frontmatter.bild}
                 alt="" /> 
              </Link>
          <figcaption>{node.frontmatter.artist}</figcaption>
</figure>
             
          
            
             
            
             
              
             
              </MeinBild>
           
           
          )
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
          }
        }
      }
    }
  }
`
