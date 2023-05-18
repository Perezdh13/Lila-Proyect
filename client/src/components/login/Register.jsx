import React, { useState } from 'react'

const Register = () => {
const [userName, setUserName]= useState("");
const[email, setEmail]= useState("");
const[password, setPassword]= useState("");


  return (
    <div>
        <form action="">
            <div>
            <label htmlFor="">User Name</label>
            <input type="text" placeholder="Enter your user name" value={userName} onChange={(event)=> {
                setUserName(event.target.value)}}/>
                </div>

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
                
        </form>
    </div>
  )
}

export default Register