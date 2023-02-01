import React from 'react'
import styled from 'styled-components';

export default function SignUp() {
  return (
    <Container>
    <div className='bg-image'>
    <img src="../images/logo.png" alt='logo'></img>
    <div className="container">
    <div className="row">
        <div className="col-md-4 offset-md-4 form login-form" id="flm">
            <form>
                <h2 className="text-center text-white">SignUp Form</h2>
                <p className="text-center text-white">SignUp with your email and password.</p> 
                <div class="form-group">
                        <input class="form-control" type="text" name="name" placeholder="Full Name"/>
                    </div>   
                <div className="form-group">
                    <input className="form-control" type="email" name="email" placeholder="Email Address"/>
                </div>
                <div class="form-group">
                        <input class="form-control" type="text" name="phone" pattern="[7-9]{1}[0-9]{9}" placeholder="Mobileno"  required/>
                    </div>
                <div className="form-group">
                    <input className="form-control" type="password" name="password" placeholder="Password" required/>
                </div>
                <div class="form-group">
                        <input class="form-control" type="password" name="cpassword" placeholder="Confirm password" required/>
                    </div>
                <div className="link forget-pass text-left"><a href="/Forgot">Forgot password?</a></div>
                <div className="form-group">
                    <input className="form-control button btn btn-primary" type="submit" name="SignUp" value="SignUp"/>
                </div>
       <div className="link login-link text-center text-white" id='mem'>alredy member? <a href="/">Login now</a></div>
       
            </form>
            </div>
        </div>
        </div>
    </div>
   </Container>

  )
}
const Container =styled.div`
.bg-image {
 width:100%;
 height:725px;
 background-image: url("../images/register1.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.container 
{
  margin-left:600px;
}

#flm
{
    margin-top:125px;
}

h2
{
    color:white;
    font-size:25px;
}

img 
{
    margin-left:30px;
    margin-top:20px;
}

p
{
    color:white;
    font-size:15px;
}

#mem
{
    color:white;
}

a 
{
    color:white;
    font-size:15px;
}
`;
