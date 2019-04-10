import React from 'react'
import Layout from '../components/layout'
import {Mitmacher,Mit} from '../components/format'
import {Link,graphql} from 'gatsby'
import Layout from '../components/layout

const Mitmachen =  (props) =>{
    const title = props.data.site.siteMetadata.title
    return (
<Layout location={props.location.pathname} title={title}>
<h2>Mitmachen</h2>

<Mit> 


 
 <Mitmacher>
 
 <li style={{borderTop:'1px grey solid',borderBottom:'1px grey solid',display:'block',fontSize:'1.3rem',fontWeight:'400'}}>&rarr; Künstler</li>

<p>
Herzlich willkommen bei Rhein-Kultur, dem Netzwerk für Künstler aus der Region Oberes Mittelrheintal! sie wollen bei uns mitmachen?
Dazu schicken sie einfach eine Email mit Betreff: Mitmachen an obige Adresse
Bitte nennen Sie darin:
Ihren Namen, Ihre Kontaktdaten, die Kunstform, die sie ausüben, und fügen ein aussagekräftiges Bild (größe max. 2 mB) hinzu. Wir verarbeiten schnellstmöglich Ihren Teilnahmeantrag.
Alle von Ihnen genannten persönlichen Daten werden selbstverständlich streng vertraulich behandelt und nicht an Dritte weitergegeben.

</p>
<a href="/portrait.pdf">Portrait: pdf-download</a>
<br/>
</Mitmacher>
<Mitmacher>
<li style={{borderBottom:'1px grey solid',borderTop:'1px grey solid',display:'block',fontWeight:'400',fontSize:'1.3rem'}}>&rarr; Raumanbieter</li>

    <p>
    Herzlich willkommen bei Rhein-Kultur, dem Netzwerk für Anbieter von temporären Räumen in der Region Oberes Mittel-Rheintal! Sie wollen bei uns mitmachen? Dazu schicken sie einfach eine Email mit Betreff: Mitmachen an obige Adresse.
Bitte nennen Sie darin:
Ihren Namen, Ihre Kontaktdaten, die Räumlichkeit, die sie anbieten möchten, und fügen ein aussagekräftiges Bild (größe max. 2 mB) hinzu. Wir melden uns schnellstmöglich bei Ihnen, um notwendige Details zu besprechen und einen Besichtigungstermin zu vereinbaren.
Alle von Ihnen genannten persönlichen Daten werden selbstverständlich streng vertraulich behandelt und nicht an Dritte weitergegeben.
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
