import React, { Component, useState } from 'react';
import {Route, Routes} from "react-router-dom";
// import users from './users';
// import Common from './Common';
// import SMAHome from './SMAHome';
// import PHome from './PHome';
// import DHome from './DHome';
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar';




const LoginPage = () => {


  const [role, setRole] = useState("SMA")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()
  const handleSubmit = () => {
    navigate('/home')

    
  if(role == "SMA")
  navigate('/smahome')
else if(role == "driver")
  navigate('/dhome')
else 
  navigate('/phome')
  }
  

 

  return (
    <div>
    <Navbar />
       <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="role">Select Role:</label>
            <select id="role" name="role" onChange={(e) => setRole(e.target.value)}>

              <option value="admin">SMA</option>
              <option value="parent">Parent</option>
              <option value="driver">Driver</option>
            </select>
          </div>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              
              onChange = {(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <input type="submit" value="Login"  />
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage

