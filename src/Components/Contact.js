import React, { Fragment } from 'react'
import styled from 'styled-components'
import Footer from './Footer';


export default function Contact() {
  return (
    <Fragment>
        <Container>
            <div className='contain'>
            <img src='../images/contact.jpg' alt='contact'>
            </img>
           
            <div id='head'>
            <h1>Contact</h1>
            </div>
            <div className='box'>
                <tr>
                    <td>
                        
                    </td>
                    <td>
                        <h2>Contact us</h2>
                        <div className='form'>
                            <input type="text" name="name" placeholder="Your Name"></input>
                            <input type="email" name="email" placeholder='Your Email' ></input>
                            <input type="text" name="subject" placeholder="Subject"></input>
                            <textarea>Message</textarea>
                        </div>
                        <button>Send Message</button>
                    </td>
                </tr>
            </div>
            <div className='contact'>
                <tr>
                    <td className='td2'><p>Address: 198 West 21th Street, Suite 721 New York NY 10016</p></td>
                    <td className='td2'>
                    <span>Phone No</span>
                        +91-7078171105</td>
                    <td className='td2'>
                    <span>Email-</span>
                        Paradise_Contactus@gmail.com</td>
                        
                    <td className='td2'>
                    <span>Website-</span>
                        www.paradise.com</td>
                </tr>
            </div>
            <div>
            <Footer />
            </div>
            </div>
           
        </Container>
    </Fragment>
  )
}
const Container=styled.div`

.contain
{
    width:100%;
    height:552px;
    padding-top:0px;
    position:absolute;
}

#head
{
     margin-top:400px;
}
.contact
{
    width:80%;
    height:220px;
    margin-left:170px;
    // margin-top:40px;
}

span
{
    font-size:20px;
    color:black;
}

button
{
margin-top:20px;
    display:flex;
    width:200px;
    height:45px;
     margin-left:40px;
    justify-content:center;
    padding-top:5px;
    color:white;
    background-color: burlywood;
    font-size:20px;
    border:0;
    border-radius:5px;
    font-weight:bold;
}

p
{
    font-size:20px;
    font-weight:bold;
    color:black
}

.td2
{
    height:220px;
    color: burlywood;
    font-size:20px;
}

h2
{
    margin-left:25px;
    
}

textarea
{
    width:70%;
    height:150px;
    margin-left:25px;
}

input
{
    width:70%;
    height:50px;
    margin-bottom:30px;
    margin-left:25px;
}

img
{
    position:absolute;
    z-index:-1;

}

h1
{
    text-align:center;
    font-size:55px;
    color:white;
    font-weight:bold;
}

td
{
    width:600px;
    height:600px;
}

.box
{
     margin-top:100px;
     margin-left:180px;
}
`;
