import React, { Fragment } from 'react'
import styled from 'styled-components'

export default function Service() {
  return (
    <Fragment>
    <Container>
       <div className='container'>
          <div id='head1'>
            Services
            <div id='head2'>
          Catering Services
          </div>
          </div>
        <tr>
            <td><img src='../images/birthday.png' alt=''></img>
              <h2>Birthday Party</h2>
              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
            </td>
            <td><img src='../images/meeting.png' alt=''></img>
            <h2>Business Meetings</h2>
            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
            </td>
            <td><img src='../images/wedding.png' alt=''></img>
            <h2>Wedding Party</h2>
            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
            </td>
        </tr>
       </div>

    </Container>
    </Fragment>
  )
}

const Container=styled.div`

.container 
{
   width:75%;
   height:550px;
}

#head1
{
  font-size:45px;
  font-family:poppins;
  text-align:center;
}

#head2
{
    text-align:center;
    font-size:70px; 
    text-align:center;
    font-family:poppins;
    color: burlywood;
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
    color: burlywood;
}
`;
