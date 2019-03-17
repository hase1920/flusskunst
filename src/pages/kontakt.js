import React from 'react'
import { rhythm } from "../utils/typography"
import {Link} from 'gatsby'

const Kontakt = () => (
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
<h1>Kontakt</h1>
<p>Hier werden die Kontaktdaten der Bürgermeister und
  der Verwaltungen von Bakaloni stehen.
</p>
<p>vorläufiger Kontakt:</p>
René Broich <br />
Langstr. 48<br />
55422 Bacharach<br />
   
 </div>
)
export default Kontakt