import React, { useState } from 'react'
import { Link } from "react-router-dom";

function Login () {
  const [loginForm, setLoginForm] = useState({
  email:"",
  password:""
  })

  const handleChange = (e) =>{
    setLoginForm({
      ...loginForm, [e.target.name]: e.target.value
    })

    console.log('object :>> ', e.target.value);

  }

  const handleSubmit = () =>{
  }


  return (
    <div>
      <form onSubmit={handleSubmit} className="loginForm">
      <div class="form-row align-items-center">
    <div class="col-auto">
      <label class="sr-only" for="inlineFormInputGroup">Username</label>
      <div class="input-group mb-2">
        <div class="input-group-prepend">
          <div class="input-group-text">@</div>
        </div>
        <input type="text"name="email" onChange={(e)=> handleChange(e)} class="form-control" id="inlineFormInputGroup" placeholder="Username"/>
      </div>
    </div>
    <div class="col-auto">
      <label class="sr-only" for="inlineFormInput">Password</label>
      <input type="password" name="password"class="form-control mb-2" onChange={(e)=> handleChange(e)} placeholder="Password"/>
    </div>

  </div>
        <div class="col-auto">
          <button type="submit" class="btn btn-success">Login</button>
        </div>
  
      </form>
    </div>
  )
}
export default Login
