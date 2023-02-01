import React from 'react'
import styled from 'styled-components';


export default function Customer() {
  return (
    <>
    <Container>
       <div className='container'>
          <div id='head1'>
           Testimony
           </div>
            <div id='head2'>
            Happy Customer
          </div>
          
        <tr>
            <td><div id='circle'></div>
              <p>far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              <h2>Abhishek Rawat</h2>
            </td>
            <td ><div id='circle1'></div>
            <p>far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <h2>Kuldeep Kashyap</h2>
            </td>
            <td ><div id='circle2'></div>
            <p>far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <h2>Sunny Bhardwaj</h2>
            </td>
        </tr>
       </div>

    </Container>
    </>
  )
}

const Container=styled.div`

.container 
{
   width:75%;
   height:550px;
}
#circle
{
    height: 170px;
    width: 170px;
    border:2px solid black;
    border-radius: 50%;
    background-image: url(../images/abhishek.png);
}

#circle1
{
    height: 170px;
    width: 170px;
    border:2px solid black;
    border-radius: 50%;
    background-image: url(../images/kuldeep.png);
}
#circle2
{
    height: 170px;
    width: 170px;
    border:2px solid black;
    border-radius: 50%;
    background-image: url(../images/sunny.png);
}
#head1
{
  font-size:100px;
  font-family:poppins;
  text-align:center;
  color: burlywood;
}

#head2
{
    text-align:center;
    font-size:45px; 
    text-align:center;
    font-family:poppins;
    
}

td {
    width:900px;;
    padding-top:50px;
    padding-left:80px;
}

img {
    padding-left:40px;
}

p 
{
    font-size:20px;
     margin-top:25px;
}
`;
