import React from "react"
import { Link } from "gatsby"
import {Footer,Logo,Mach,Boxi} from './format'
import { rhythm } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <div>
        <h1>
          <Link style={{fontSize:'3.5rem',marginBottom:'10px',fontWeight:400,fontFamily:"'Roboto Slab',sans-serif"}}  to="/">
            {title}
          </Link>
        </h1>
        <h2 style={{display:'block',width:'50%',fontWeight:100,paddingTop:10,margin:0,fontFamily:'Roboto Slab',marginTop:'-10px',lineHeight:'1.5',color:'black'}}>
          Netzwerk für <span style={{color:'#00BFFF'}}>&rarr;</span> Künstler &amp; temporäre &rarr; Räume
          
          im UNESCO Welterbe Oberes Mittelrheintal </h2>
        
        </div>
      )
    } else {
      header = (
        <div>
        <h1>
        <Link style={{fontSize:'3.5rem',marginBottom:'10px',fontWeight:400,fontFamily:"'Roboto Slab',sans-serif"}}  to="/">
            {title}
          </Link>
        </h1>
        <h2 style={{display:'block',width:'50%',fontWeight:100,paddingTop:10,fontFamily:'Roboto Slab',marginTop:'-10px',lineHeight:'1.5',margin:0,color:'black'}}>
          Netzwerk für <span style={{color:'#00BFFF'}}>&rarr;</span> Künstler &amp; temporäre &rarr; Räume
          
          im UNESCO Welterbe Oberes Mittelrheintal </h2>
        </div>
      )
    }
    return (
      <div style={{
        display:'flex',
        flexDirection:'column',
        marginLeft: `auto`,
        marginRight: `auto`,
        marginTop:0,
        maxWidth: rhythm(44),
        padding: `0 ${rhythm(3 / 4)}`,
      }}>
      <Mach>
      <Boxi>
              <Link to="/mitmachen">Mitmachen</Link>
      </Boxi>
            
         </Mach>
      
     
        <header>{header}</header>
        <main>{children}</main>
       
        <Footer>
          
        <Link to="/">Home</Link><Link to="/kontakt">Kontakt</Link><Link to="/impressum">Impressum</Link><Link to="/datenschutz">Datenschutz</Link>

          </Footer>
                  
          <Logo>
        <img src="z.svg" alt="Logo Zweckverband" />
              </Logo>
         
             
     
       </div>
     
    )
  }
}

export default Layout
