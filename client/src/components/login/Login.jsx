import React from 'react'

function Login() {
  
  const[email, setEmail]= useState("");
  const[password, setPassword]= useState("");

  return (
    <div> <form action="">
               <div>
              <label htmlFor="">Email</label>
              <input type="text" placeholder="Enter your user email" value={email} onChange={(event)=> {
                  setEmail(event.target.value)}}/>
                  </div>
  
                  <div>
              <label htmlFor="">Password</label>
              <input type="text" placeholder="Enter your user name" value={password} onChange={(event)=> {
                  setPassword(event.target.value)}}/>
                  </div>

                  <button type='submit' onClick={Login}>login</button>
                  
          </form>
          </div>
  )
}

export default Login