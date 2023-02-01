import React, { Fragment } from 'react'
import styled from 'styled-components'

export default function Form() {
  return (
    <Fragment>
      <Container>
        <div className='container'>
        <div id='head1'>
           Book a table
           </div>
            <div id='head2'>
            Make Reservation
          
          </div>
          <div className='box'>
          <tr>
            <td>
              <th><span><b>Name</b></span></th>
              <input type="text" name='name' placeholder='Your Name'required></input>
            </td>
            <td>
            <th><span><b>Email</b></span></th>
              <input type="email" name='email' placeholder='Your Email'required></input>
            </td>
          </tr>
          <tr>
            <td>
            <th><span><b>Phone</b></span></th>
              <input type="text" name='phone' placeholder='Your Phone No'required></input>
            </td>
            <td>
            <th><span><b>Date</b></span></th>
              <input type="date" name='date' placeholder='Date'required></input>
            </td>
          </tr>
          <tr>
            <td>
            <th><span><b>Time</b></span></th>
              <input type="time" name='time' placeholder='Time'required></input>
            </td>
            <td>
            <th><span><b>Persons</b></span></th>
             <select>
             <option>Persons</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4+</option>
             </select>
            </td>
          </tr>
          <button>Make Reservation</button>
          </div>
        </div>
      </Container>
    </Fragment>
  )
}
const Container=styled.div`
margin-top:50px;
.container
{
  width:800px;
  height:700px;
  background-color:white;
  float:left;
  margin-left:80px;
  margin-top:100px;
}

input
{
  width:200px;
  height:40px;
}

span
{
  
  font-size:20px;
}

select
{
  font-size:20px;
  width:200px
}

th
{
  margin-bottom:10px;
  margin-top:20px;
}

button
{
  margin-left:280px;
  font-size:30px;
  margin-top:35px;
  border-radius:5px;
  color:white;
  background-color:burlywood;
  border:0px;
}


td
{
  width:450px;
  padding-left:100px;
  height:120px;
}
#head1
{
  font-size:60px;
  text-align:center;
  color:burlywood;
  
}
#head2
{
  font-size:40px;
  font-weight:bold;
  text-align:center;
  padding-bottom:50px;
}

`;