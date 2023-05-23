import axios from 'axios';
import { response } from 'express';
import { async } from 'q';
import React from 'react'

function Login() {

  const[email, setEmail]= useState("");
  const[password, setPassword]= useState("");

  async function login(event){
    try{
      await axios.post("http://localhost:8080/user/login", {
              email:email,
              password:password
      }).then((response) =>
      console.log(response.data))
    }catch(error){}
  }

  return (
    <div>
      <form action="">
  
                  <div>
              <label htmlFor="">Email</label>
              <input type="text" placeholder="Enter your user email" value={email} onChange={(event)=> {
                  setEmail(event.target.value)}}/>
                  </div>
  
                  <div>
              <label htmlFor="">Password</label>
              <input type="text" placeholder="Enter your user password" value={password} onChange={(event)=> {
                  setPassword(event.target.value)}}/>
                  </div>
                  
          </form>
          <button type='submit' onClick={login}>Login</button>
          </div>
  )
}

export default Login