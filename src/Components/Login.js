import React from 'react'
import styled from 'styled-components';

const Login=()=> {
  return (
   
   <Container>
    <div className='bg-image'>
    <img src="../images/logo.png" alt='logo'></img>
    <div className="container">
    <div className="row">
        <div className="col-md-4 offset-md-4 form login-form" id="flm">
            <form action="/home" method="POST" autocomplete="">
                <h2 className="text-center text-white">Login Form</h2>
                <p className="text-center text-white">Login with your email and password.</p>    
                <div className="form-group">
                    <input className="form-control" type="email" name="email" placeholder="Email Address"/>
                </div>
                <div className="form-group">
                    <input className="form-control" type="password" name="password" placeholder="Password" required/>
                </div>
                <div className="link forget-pass text-left"><a href="/Forgot">Forgot password?</a></div>
                <div className="form-group">
                    <input className="form-control button btn btn-primary" type="submit" name="login" value="Login"/>
                </div>
       <div className="link login-link text-center text-white" id='mem'>Not yet a member? <a href="/SignUp">Signup now</a></div>
       
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
 background-image: url("../images/login.jpg");
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
}

p
{
    color:white;
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

img 
{
    margin-left:30px;
    margin-top:20px;
}
`;










export default Login;
