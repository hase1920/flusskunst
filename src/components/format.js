import styled, {keyframes} from 'styled-components'
 
export const Mitmacher = styled.div`
display:flex;
flex-direction:column;
width:36%;
p{
    padding:10px;
}
@media (max-width:300px){
    width:599px;
}

`
export const Mit = styled.div`{
    display:flex;
    
    @media (max-width:600px) {
        flex-direction:column;
        > * {
            width:100%;
        }
    }
}`


export const Header2 = styled.h2`
 
 width:50%;
 fontWeight:100;
 paddingTop:10;
 margin:0;
 fontFamily:Roboto Slab;
 marginTop:-10px;
 lineHeight:1.5;
 color:black;
 @media (max-width:700px){
   width:80%;
 }
 
 `
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
display:flex;
flex-direction:column;
min-width:320px;

    justify-content:center;
    align-items:center;



img {
    width:300px;
    height:300px;
    margin:4px;
}
 
figure {
    text-align: center;
    font-style: italic;
    font-size: smaller;
    text-indent: 0;
  

  
    
  }
  figcaption {
      position: relative;
      color:black;
      margin:0 0 0 0;
     
      padding:6px;
  }
@media (max-width:700px){
  
   figure a img {
      width:320px;
   }
   
    
    h3 {
        font-size:1.4rem
    }
    
}

  
`
export const Footer = styled.div`
  display:flex;
  align-items:flex-start;
  margin-top:80px;
  img {
      
      padding:20px;
      width:290px;
     
  }

  @media (max-width:699px){
    flex-direction:column; 
    justify-content:center;
    alignItems:center; 
    img {
        display:block;
        text-align:center;
    }

    ul  {
        width:100%;
        padding:0;
        margin:0;
      
    }

   ul li {
       display:block;
       padding:10px;
       text-align:center;
       text-transform:uppercase;
       letter-spacing:0.06rem;
      
   }
}
@media (min-width:700px) {
    ul {
        display:flex;
        align-items:space-around;

    }
    ul li {
        display:inline-block;
        padding:10px;
    }
    > img {
        display:none;
    }
}
   
  `
  export const Footer2 = styled.div`
 
  
  a {
      padding:20px;
  }
 
  
  img {
      
      padding:20px;
      width:240px;
      height:auto;
  }
  @media (max-width:699px) {
      flex-direction:column;
      display:flex;
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
  justify-content:flex-start;
  align-items:flex-start;
  margin-top:60px;
  flex-wrap:wrap;
  height:100%;
  width:100%;
  h1 {
      font-size:1.4rem;
  }
  @media(max-width:690px) {
    margin-top:20px;
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
  margin-top:60px;
  flex-direction:column;
  justify-content:flex-start;
  align-items:flex-start;
  padding:1%;
  h1 {
      font-size:1.4rem;
  }
  img {
    width:320px;
} 
 
   
    h1 {
        font-size:1.2rem;
    }
    @media (min-width: 700px){
        p {
            width:70%;
        }
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
