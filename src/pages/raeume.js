import React from 'react'
import Layout from '../components/layout'
class Raum extends React.Component {

    render(){
        return(
            <Layout location= {this.props.location} >            <div>

            
            <h1> Hier stehen Raumnachfragen oder -Angebote</h1>
            <a href="/Rhein-Kultur_Layout_Raeume.pdf"> -
            &rarr; So wird die Raumseite aussehen &rarr; PDF öffnen</a>
            </div>
            </Layout>

        )
    }
}
export default Raum
