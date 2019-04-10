import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
class Raum extends React.Component {

    render(){
      const title = this.props.data.site.siteMetadata.title
        return(
            <Layout location={this.props.location} title={title}>
         
            <h1> Hier stehen Raumnachfragen oder -Angebote</h1>
            <a href="/Rhein-Kultur_Layout_Raeume.pdf"> -
            &rarr; So wird die Raumseite aussehen &rarr; PDF öffnen</a>
           
            </Layout>

        )
    }
}
export default Raum

export const raumQuery = graphql`
  query  {
    site {
      siteMetadata {
        title
      }
    }
  }`
