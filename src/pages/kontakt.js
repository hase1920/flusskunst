import React from 'react'
import { rhythm } from "../utils/typography"
import {Link,graphql} from 'gatsby'


const Kontakt = (props) =>{
 const title= props.data.site.siteMetadata.title
 return(
    <div
    style={{
      marginLeft: `auto`,
      marginRight: `auto`,
      maxWidth: rhythm(24),
      padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      
    }}
  >  
 
 
 <h1 style={{fontSize:"2rem"}}><Link to="/"> &larr; {title}</Link></h1>  

<h2>Kontakt</h2>
<p>Hier werden die Kontaktdaten der Bürgermeister und
  der Verwaltungen von Bakaloni stehen.
</p>
<p>vorläufiger Kontakt:</p>
René Broich <br />
Langstr. 48<br />
55422 Bacharach<br />

 </div>
)}
export default Kontakt


export const kontaktQuery = graphql`
  query  {
    site {
      siteMetadata {
        title
        author
      }
    }
  }`
