import React from "react"
import { Link, graphql } from "gatsby"
import {FaArrowDown} from 'react-icons/fa'
//import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {StartDiv,Dekla} from '../components/format'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    //const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`Künstlerportal Oberes Mittelrheintal`, `Kunst am Rhein`, `Kulturwelterbe`, `Unesco`,`Bacharach`,`Oberwesel`,`Bingen`,`Lorch`,`Bakaloni`]}
        />
      <div>
    <Dekla>
    <h1>Projekterläuterung</h1>
         <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. <br/><br/>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <br/><br/>Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
       
    </Dekla>
     
        
      
       <StartDiv>
       <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
       <Link to="/blog"><FaArrowDown /></Link> 
        <span style={{fontFamily:'Roboto Slab',color:'#00BFFF',fontSize:'1.2rem'}}>Künstler</span> 
         <Link to="/blog">  <img src="/kuenstler.svg" alt="Künstler" /></Link>
         </div>
         <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        
         <Link to ="/raeume">  <FaArrowDown />   </Link>
      
         <span style={{fontFamily:'Roboto Slab',color:'#00BFFF',fontSize:'1.2rem'}}>Räume</span> <Link to ="/raeume">  <img src="/raeume.svg" alt="Raeume" />  </Link>
       
         </div>
       
      </StartDiv>
       </div> 
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
            title
            description
          }
        }
      }
    }
  }
`
