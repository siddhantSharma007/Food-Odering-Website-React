import React from 'react'
import styled from 'styled-components'

export default function About() {
  return (
    <Container>
    <div className='container'>
        <tr>
            <td>
              <img src="../images/chef.jpg" alt='chef1'></img>
            </td>

            <td>
            <img src="../images/chef2.png" alt='chef1'></img>
            </td>

         <td>
            <div className='box-3'>
             <h1>About</h1> 
              <p  style={{color: "black"}}> Paradise Restaurant</p> 
              <p>A small river named Duden flows by their place and <br /> supplies it with the necessary 
                regelialia. It is a <br /> paradisematic country,
                 in which roasted parts of <br /> sentences fly into your mouth.</p>
                 <h3>Mon - Fri 8 AM - 11 PM</h3>
                 <h2>+91-7078171105</h2> 
                 </div>
                 </td>     
 </tr>
          
        </div>
        </Container>
  )
}

const Container =styled.div`
 
.Box-3 
{
    
    padding:0;
}
.container 
{
    display:block;
    width:75%;
    height:500px;
    margin-top:20px;
    text-align:center;
    margin-left:250px;
    
}

td {
    padding-left:50px;
    
}
p {
  font-style:bold;
  font-size:10px;
}

`;