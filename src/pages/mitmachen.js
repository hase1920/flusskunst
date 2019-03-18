import React from 'react'
import Layout from '../components/layout'
import {Mitmacher,Mit} from '../components/format'
import {Link,graphql} from 'gatsby'

const Mitmachen =  (props) =>{
    const title = props.data.site.siteMetadata.title
    return (
<Layout location={props.location.pathname}>
<h1 style={{fontSize:'2.rem'}}><Link to="/"> &larr; {title}</Link></h1>
<h2>Mitmachen</h2>

<Mit> 


 
 <Mitmacher>
 
 <li style={{borderTop:'1px grey solid',borderBottom:'1px grey solid',display:'block',fontSize:'1.3rem',fontWeight:'400'}}>&rarr; Künstler</li>

<p>
Herzlich willkommen bei rhein-Kultur, dem netzwerk für Künstler aus der region oberes mittelrheintal! sie wollen bei uns mitmachen?
dazu schicken sie einfach eine email mit Betreff: Mitmachen an obige Adresse
Bitte nennen Sie darin:
Ihren namen, Ihre Kontaktdaten, die Kunstform, die sie ausüben, und fügen ein aussagekräftiges Bild (größe max. 2 mB) hinzu. Wir verarbeiten schnellstmöglich Ihren teilnahmeantrag.
Alle von Ihnen genannten persönlichen daten werden selbstverständlich streng vertraulich behandelt und nicht an dritte weitergegeben.

</p>
<a href="/portrait.pdf">Portrait: pdf-download</a>
<br/>
</Mitmacher>
<Mitmacher>
<li style={{borderBottom:'1px grey solid',borderTop:'1px grey solid',display:'block',fontWeight:'400',fontSize:'1.3rem'}}>&rarr; Raumanbieter</li>

    <p>
    Herzlich willkommen bei rhein-Kultur, dem netzwerk für Anbieter von temporä- ren räumen in der region oberes mittel- rheintal! sie wollen bei uns mitmachen? dazu schicken sie einfach eine email mit Betreff: Mitmachen an obige Adresse
Bitte nennen Sie darin:
Ihren namen, Ihre Kontaktdaten, die räumlichkeit, die sie anbieten möch-
ten, und fügen ein aussagekräftiges Bild (größe max. 2 mB) hinzu. Wir melden uns schnellstmöglich bei Ihnen, um notwen- dige details zu besprechen und einen Besichtigungstermin zu vereinbaren.
Alle von Ihnen genannten persönlichen daten werden selbstverständlich streng vertraulich behandelt und nicht an dritte weitergegeben.
</p>
<a href="/raumangebot.pdf">Raumangebotsformular: pdf-download</a>
</Mitmacher>
</Mit>
</Layout>
)}
export default Mitmachen

export const mitQuery = graphql`
  query  {
    site {
      siteMetadata {
        title
        author
      }
    }
  }`