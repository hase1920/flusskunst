import React from 'react'
import {graphql,Link} from 'gatsby'
import Layout from '../components/layout'
import {Blogdiv2} from '../components/format'
const Hilfe = (props) => {
    const title = props.data.site.siteMetadata.title
   return (
      
  <Layout location={props.location} title={title}> 
  <Blogdiv2>
  <h2>Text und Photo per Email senden an:</h2>
  René Broich <br/>
  Langstr. 48 <br/>
  Email: renbroi@icloud.com<br/>
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
</Blogdiv2>
   </Layout>
  
  )}
  export default Hilfe
  
  export const hilfQuery = graphql`
    query  {
      site {
        siteMetadata {
          title
         }
      }
    }`
