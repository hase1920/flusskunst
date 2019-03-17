import React from 'react'
import { rhythm } from "../utils/typography"
import {Link} from 'gatsby'

const Impressum = () => (
    <div
    style={{
      marginLeft: `auto`,
      marginRight: `auto`,
      maxWidth: rhythm(24),
      padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      background:`rgba(122,122,122,0.08)`
    }}
  >   
  <Link to="/"> &larr; Home</Link>    
<h1>Impressum</h1>
René Broich <br/>
Langstr. 48 <br/>
Email: renbroi@icloud.components <br/>
<Link to = "/datenschutz"> &rarr; Link zu den Datenschutzbestimmungen</Link><br/>
Diese Webseite wurde von René Broich programmiert.  
 </div>
)
export default Impressum