import React from 'react'
import Layout from '../components/layout'
class Raum extends React.Component {

    render(){
        return(
            <Layout location= {this.props.location} >            <div>

            
            <h1> Hier stehen Raumnachfragen oder -Angebote</h1>
            </div>
            </Layout>

        )
    }
}
export default Raum