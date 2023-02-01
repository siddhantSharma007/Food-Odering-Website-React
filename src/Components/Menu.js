import React, { Fragment } from 'react'
import styled from 'styled-components'

export default function Menu() {
  return (
     <Fragment>
     <Container>
      <div className='container'>
      <div id='head1'>
            Specialties
            <div id='head2'>
          Our Menu
          </div>
         </div>
         <div className='box'>
         <tr>
            <td>
                <div>
                 <img src='../images/d1.jpg' alt='i1'></img>
                </div>
            </td>
            <td><div className='cart'>
                <button>ADD TO CART</button>
                </div>
                </td>
            <td><div>
            <img src='../images/d2.jpg' alt='i2'></img>
                </div>
                </td>
            <td><div className='cart'>
                <button>ADD TO CART</button>
                </div>
                </td>
         </tr>
         <tr>
            <td><div>
            <img src='../images/d3.png' alt='i3'></img>
                </div>
                </td>
            <td><div className='cart'>
                <button>ADD TO CART</button>
                </div>
                </td>
            <td><div>
            <img src='../images/d4.jpg' alt='i4'></img>
                </div>
                </td>
            <td><div className='cart'>
                <button>ADD TO CART</button>
                </div>
                </td>
         </tr>
         <tr>
            <td><div>
            <img src='../images/d5.jpg' alt='i5'></img>
                </div>
                </td>
            <td><div className='cart'>
                <button>ADD TO CART</button>
                </div>
                </td>
            <td><div>
            <img src='../images/d6.jpg' alt='i6'></img>
                </div>
                </td>
            <td><div className='cart'>
                <button>ADD TO CART</button>
                </div>
                </td>
         </tr>
         </div>
      </div>
     </Container>
     </Fragment>
  )
}

const Container=styled.div`
.container 
{
    width:68%;
    height:85%;
    border:2px solid black;
}

#head1
{
  font-size:75px;
  font-family:poppins;
  text-align:center;
}

#head2
{
    text-align:center;
    font-size:50px; 
    text-align:center;
    font-family:poppins;
    color: burlywood;
    padding-bottom:30px;

}

td 
{
  
    border:2px solid black;
    width:100px;   
    height:50px;
}

tr 
{
    
    padding-bottom:30px;
}

.box 
{
    display:grid;
}

button 
{
    
    width:120px;
    height:40px;
    color:green;
    border:1px solid green;
    font-weight:bold;
}

.cart 
{
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    flex-direction: row-reverse;
    margin-top: 80%;
    position: relative;
    padding-bottom:20px;
    padding-right:15px;
}

`;
