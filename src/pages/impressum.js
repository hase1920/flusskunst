import React from 'react'
import { rhythm } from "../utils/typography"
import {Link,graphql} from 'gatsby'


const Impressum = (props) => {
  const title = props.data.site.siteMetadata.title
 return (
  <div
    style={{
      marginLeft: `auto`,
      marginRight: `auto`,
      maxWidth: rhythm(24),
      padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
     }}
  >   
  
    
  <h1 style={{fontSize:'2rem'}}><Link to="/"> &larr; {title}</Link></h1>    
<h2>Impressum</h2>
René Broich <br/>
Langstr. 48 <br/>
Email: renbroi@icloud.components <br/>
<Link to = "/datenschutz"> &rarr; Link zu den Datenschutzbestimmungen</Link><br/>
Diese Webseite wurde von René Broich programmiert.

 </div>

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