import React from 'react'
import { useState } from 'react';

function Registerpage() {
    
    const [userValue, setUserValue] = useState({
        first_Name: "",
        last_Name: "",
        company: "",
        email: "",
        password: "",
        phoneNumber: "",
      })

      const handleInputValue = (e) => {
        setUserValue({
          ...userValue,
          [e.target.name]: e.target.value
        })
      }
      const [allUser, setAllUser] = useState([])


  
    




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
                            <label for="first_Name" >First name</label>
                            <input type="text" onChange={handleInputValue} className="form-control" name="first_Name" id="first_name" />
                        </div>
                        <div className="form-input">
                            <label for="last_Name" >Last name</label>
                            <input type="text" onChange={handleInputValue} className="form-control" name="last_Name" id="last_name" />
                        </div>
                        <div className="form-input">
                            <label for="company" >Company</label>
                            <input type="text" onChange={handleInputValue} className="form-control" name="company" id="company" />
                        </div>
                        <div className="form-input">
                            <label for="email" >Email</label>
                            <input type="text" onChange={handleInputValue} className="form-control" name="email" id="email" />
                        </div>
                        <div className="form-input">
                            <label for="password" >password</label>
                            <input type="password" onChange={handleInputValue} className="form-control" name="password" id="password" />
                        </div>
                        <div className="form-input">
                            <label for="phone_number" >Phone number</label>
                            <input type="text" onChange={handleInputValue} className="form-control" name="phone_number" id="phone_number" />
                        </div>
                    </div>
                   </div> 
                <div className="form-submit"> 
                    <input type="button" value="Submit"  className="btn btn danger" id="submit" onClick={() => {console.log(userValue) 
                    setAllUser([...allUser, userValue])
                      console.log([...allUser, userValue])
                    }} name="submit" />
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
