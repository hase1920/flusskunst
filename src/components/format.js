import styled, {keyframes} from 'styled-components'
 
 export const Dekla=styled.div`
   p {
       width:60%;
   }
   @media (max-width:700px){
    p {
        width:90%;
    }
}
 `        
export const StartDiv = styled.div`
  display:flex;
  margin-top:30px;
  justify-content:flex-start;
  align-items:flex-start;
  align-content:baseline;
  @media (max-width:700px) {
    flex-direction:column;
    justify-content:center;
  align-items:center;
  }
`
export const Boxi = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  align-content:baseline;
  border-radius:0px 0px 10px 10px;
  width:120px;
  height:50px;
  text-transform:uppercase;
  letter-spacing:0.06rem;
  background:#00BFFF;
  margin:auto 10px;
  p {
      font-size:.8rem;
      color:white;
      text-align:center;
      display:block;
      padding-left:5px;
  }
  @media (max-width:700px){
    {
        height:40px;
        margin:3px 0;
        justify-content:baseline;
    }
    
  }
  a {
      color:#f3f5f6;
  }
`
export const Logo = styled.div`
  position:absolute;
  right:20px;
  top:0px;
  img {
    width:200px;
  }
  
  @media (max-width:700px){
      display:none;
  }
`
export const Mach = styled.div`
display:flex;

padding:0 4px;
justify-content:center;




`
export const MeinBild = styled.div`
position:relative;
  
height:300px;
width:300px;
@media (max-width:600px){
    width:70%;
    height:100%;

    
    h3 {
        font-size:1.4rem
    }
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
}
`
export const Footer = styled.div`
  display:flex;
  
  a {
      padding:20px;
      text-transform:uppercase;
      font-weight:400;
      font-size:.9rem;
      letter-spacing:.06rem;
  }
  align-items:flex-start;
  
  img {
      
      padding:20px;
      width:240px;
      height:auto;
  }
  @media (max-width:700px) {
      flex-direction:column;
  }
  `
  export const Footer2 = styled.div`
  display:flex;
  
  a {
      padding:20px;
  }
  align-items:baseline;
  
  img {
      
      padding:20px;
      width:240px;
      height:auto;
  }
  @media (max-width:700px) {
      flex-direction:column;
  }
  `

export const Menudiv = styled.div`
  display:flex;
  flex-direction:column;
  
  padding:1%;
  ul {
      width:100%;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:flex-start;
      list-style:none;

  }
  li a {
      margin:5px;
      text-decoration:none !important; 
      font-size:1.2rem;
      letter-spacing:0.12rem
      margin-bottom:.4rem;
      text-transform: uppercase;
  }
  h1 {
      font-size:1.6rem;
  }
  h3 a {
    font-size:1.4rem;
}

  `
export const Blogdiv = styled.div`
  display:flex;
  flex-wrap:wrap;
  padding:10px 0;
  
  h1 {
      font-size:1.4rem;
  }
  @media(max-width:700px) {
    width:100%;
    img {
        width:100%;
    }
    h1 {
        font-size:1.2rem;
    }
    span {
        font-weight:900;
        font-size:1.4rem;
    }
    margin-bottom:30px;
    
}
`
export const Blogdiv2 = styled.div`
  display:flex;
  flex-direction:column;
  padding:1%;
  h1 {
      font-size:1.4rem;
  }
  @media(max-width:600px) {
    width:100%;
    h1 {
        font-size:1.2rem;
    }
} 
`


const rotate = keyframes`
  from {
    transform: width:60px;
  }

  to {
    transform: width:30%;
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
export const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 9s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;
