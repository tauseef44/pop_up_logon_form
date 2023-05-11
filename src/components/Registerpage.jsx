import React from 'react'
import { useState } from 'react';

function Registerpage() {
    
            
const   [ first_name] =useState('');
const   [last_name ]=useState('');
const  [company ] = useState('');
const  [email] =useState('');
const [ password]= useState('');
const  [phone_number]=useState('');

var first_name1  = document.getElementById("first_name");
var last_name1   = document.getElementById("last_name");
var company1 = document.getElementById("company");
var email1  = document.getElementById("email");
var password1   = document.getElementById("password");
var phone_number1 = document.getElementById("phone_number");

first_name.push( first_name1.value );
last_name.push( last_name1.value );
company.push( company1.value );
 email.push( email1.value );
 password.push( password1.value );
 phone_number.push( phone_number1.value );


  
    




  return (
    <>
    <div className="main">

<div className="container">
    <div className="signup-content">
        {/* <div className="signup-img">
            <img src="images/form-img.jpg" alt=""/>
            <div className="signup-img-content">
                <h2>Register now </h2>
                <p>while seats are available !</p>
            </div>
        </div> */}
        <div className="signup-form" style={{textAlign:'center'}}>
            <form method="POST" className="register-form" id="register-form">
                <div className="form-row">
                    <div className="form-group">
                        <div className="form-input">
                            <label for="first_name" >First name</label>
                            <input type="text" className="form-control" name="first_name" id="first_name" />
                        </div>
                        <div className="form-input">
                            <label for="last_name" >Last name</label>
                            <input type="text" className="form-control" name="last_name" id="last_name" />
                        </div>
                        <div className="form-input">
                            <label for="company" >Company</label>
                            <input type="text" className="form-control" name="company" id="company" />
                        </div>
                        <div className="form-input">
                            <label for="email" >Email</label>
                            <input type="text" className="form-control" name="email" id="email" />
                        </div>
                        <div className="form-input">
                            <label for="password" >password</label>
                            <input type="password" className="form-control" name="password" id="password" />
                        </div>
                        <div className="form-input">
                            <label for="phone_number" >Phone number</label>
                            <input type="text" className="form-control" name="phone_number" id="phone_number" />
                        </div>
                    </div>
                   </div>
                <div className="form-submit">
                    <input type="button" value="Submit"  className="btn btn danger" id="submit" name="submit" />
                    {/* <input type="submit" value="Reset" classNameform-control" id="reset" name="reset" /> */}
                </div>
            </form>
        </div>
    </div>
</div>

</div>
    
    </>
  )
}

export default Registerpage
