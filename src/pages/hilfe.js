import React from 'react'
import {graphql,Link} from 'gatsby'
import { rhythm } from "../utils/typography"
const Hilfe = (props) => {
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
  <h2>Text und Photo per Email senden an:</h2>
  René Broich <br/>
  Langstr. 48 <br/>
  Email: renbroi@icloud.components <br/>
  <br/><br></br>
  <p><strong>72 Sekunden Video ...</strong></p>
  <p>So erstellst Du Deinen Text ...</p>
  <p>
  <video width="100%" height="auto" src="/texthilfe.mp4" controls >
  Sorry, your browser doesn't mp4  
  
</video>
  </p>
  <p>
      <h2>Beispieldatei</h2>
      <img src="/fotoanleitung.jpg" alt="anleitung" />
  </p>
   </div>
  
  )}
  export default Hilfe
  
  export const hilfQuery = graphql`
    query  {
      site {
        siteMetadata {
          title
          author
        }
      }
    }`