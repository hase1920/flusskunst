import React from 'react'
import {Link,graphql} from 'gatsby'
import Layout from '../components/layout'
import {Blogdiv2} from '../components/format'

const Impressum = (props) => {
  const title = props.data.site.siteMetadata.title
 return (
  <Layout location={props.location} title={title}>
<Blogdiv2>
<h2>Impressum</h2>
René Broich <br/>
Langstr. 48 <br/>
Email: renbroi@icloud.components <br/>
<Link to = "/datenschutz"> &rarr; Link zu den Datenschutzbestimmungen</Link><br/>
Diese Webseite wurde von René Broich programmiert.
</Blogdiv2>
 </Layout>

)}
export default Impressum

export const impressumQuery = graphql`
  query  {
    site {
      siteMetadata {
        title
       }
    }
  }`
