import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'
import {Blogdiv2} from '../components/format'

const Kontakt = (props) =>{
 const title= props.data.site.siteMetadata.title
 return(
 <Layout location={props.location} title={title}>
<Blogdiv2>
<h2>Kontakt</h2>
<p>Hier werden die Kontaktdaten der Bürgermeister und
  der Verwaltungen von Bakaloni stehen.
</p>
<p>vorläufiger Kontakt:</p>
René Broich <br />
Langstr. 48<br />
55422 Bacharach<br />
</Blogdiv2>
 </Layout>
)}
export default Kontakt


export const kontaktQuery = graphql`
  query  {
    site {
      siteMetadata {
        title
      }
    }
  }`
