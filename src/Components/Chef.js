import React, { Fragment } from 'react'
import styled from 'styled-components';

export default function Chef () {
  return (
    <Fragment>
    <Container>
       <div className='container'>
          <div id='head1'>
            Chef
            </div>
            <div id='head2'>
          Our Master Chef
          </div>
          <tr>
         <td> 
            <div><img src='../images/chef4.png' alt='chef1'></img></div>
            <div>
            <h1>Gloria Jenkins</h1>
            <span>Restaurant Owner</span>
          </div>
       <div>
        <ul>
        <li><a href=" "><img src='../images/twitter.png' alt='tw'></img> </a></li>
        <li><a href=" "><img src='../images/facebook.png' alt='tw'></img> </a></li>
        <li><a href=" "><img src='../images/instagram.png' alt='tw'></img> </a></li>
        <li><a href=" "><img src='../images/google-plus.png' alt='tw'></img> </a></li>
        </ul>
       </div></td>

       <td> 
            <div><img src='../images/chef2.jpg' alt='chef1'></img></div>
            <div>
            <h1>John Smooth</h1>
            <span>Head Chef</span>
          </div>
       <div>
        <ul>
        <li><a href=" "><img src='../images/twitter.png' alt='tw'></img> </a></li>
        <li><a href=" "><img src='../images/facebook.png' alt='tw'></img> </a></li>
        <li><a href=" "><img src='../images/instagram.png' alt='tw'></img> </a></li>
        <li><a href=" "><img src='../images/google-plus.png' alt='tw'></img> </a></li>
        </ul>
       </div></td>

       <td> 
            <div><img src='../images/chef3.png' alt='chef1'></img></div>
            <div>
            <h1>Rebeca Welson</h1>
            <span>Chef</span>
          </div>
       <div>
        <ul>
        <li><a href=" "><img src='../images/twitter.png' alt='tw'></img> </a></li>
        <li><a href=" "><img src='../images/facebook.png' alt='tw'></img> </a></li>
        <li><a href=" "><img src='../images/instagram.png' alt='tw'></img> </a></li>
        <li><a href=" "><img src='../images/google-plus.png' alt='tw'></img> </a></li>
        </ul>
       </div></td>

       <td> 
            <div><img src='../images/chef1.jpg' alt='chef1'></img></div>
            <div>
            <h1>Kharl Branyt</h1>
            <span>Chef</span>
          </div>
       <div>
        <ul>
            <li><a href=" "><img src='../images/twitter.png' alt='tw'></img> </a></li>
            <li><a href=" "><img src='../images/facebook.png' alt='tw'></img> </a></li>
            <li><a href=" "><img src='../images/instagram.png' alt='tw'></img> </a></li>
            <li><a href=" "><img src='../images/google-plus.png' alt='tw'></img> </a></li>
        </ul>
       </div></td>
         
          </tr>
       </div>

    </Container>
    </Fragment>
  )
}

const Container=styled.div`

.container 
{
   width:85%;
   height:800px;
}

img
{
    padding-left:10px;
    color: burlywood;
    padding-top:5px;
}

#head1
{
  font-size:50px;
  font-family: PT Sans;
  text-align:center;
  color: burlywood;
 
}

#head2
{
    text-align:center;
    font-size:70px; 
    text-align:center;
    font-family:poppins;
    font-weight:bold;
    margin-bottom:60px;
}
td{
    width:400px;
    height:350px;
}

ul 
{
    display:flex;
}

span
{
    font-size:20px;
}

ul
{
    list-style-type:none
}

`;

