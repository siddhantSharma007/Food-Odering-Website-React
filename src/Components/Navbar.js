import React from 'react'
import styled from 'styled-components';


export default function Navbar() {
  return (
    <Container>
    <nav>
        <img src="../images/logo.png" alt='logo'></img>
        <a href='/home'>Home</a>
        <a href='#about'>About</a>
        <a href='#Services'>Menu</a>
        <a href='/contact'>Contact</a>
        <button className='btn btn-primary ml-5'>Book a Table</button>
    </nav>
    </Container>
    
  )
}
const Container=styled.div`
height:70px;
width:100%;
padding-top:15px;
margin-top:50px;

Nav{
width: 70vw;
min-width: 600px;
display: flex;
align-items: center;
Justify-content: space-around;
margin: auto;
}

img {
  padding-right:500px;
  padding-left:0px;
}
a {
position: relative;
text-decoration: none;
font-family: "Poppins", sans-serif;
color:white; 
font-size: 25px;
letter-spacing: 0.5px;
padding: 0 10px;
}


a:hover {
background-color: black;
}

`;
