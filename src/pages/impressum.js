import React from 'react'
import { rhythm } from "../utils/typography"
import {Link,graphql} from 'gatsby'
import Layout from '../components/layout

const Impressum = (props) => {
  const title = props.data.site.siteMetadata.title
 return (
  <Layout location={props.location} title={title}>

  
    
  <h1 style={{fontSize:'2rem'}}><Link to="/"> &larr; {title}</Link></h1>    
<h2>Impressum</h2>
René Broich <br/>
Langstr. 48 <br/>
Email: renbroi@icloud.components <br/>
<Link to = "/datenschutz"> &rarr; Link zu den Datenschutzbestimmungen</Link><br/>
Diese Webseite wurde von René Broich programmiert.

 </Layout>

)}
export default Impressum

export const impressumQuery = graphql`
  query  {
    site {
      siteMetadata {
        title
        author
      }
    }
  }`
