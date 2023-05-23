import axios from 'axios';
import { async } from 'q';
import React from 'react'

const SingUp = () => {
  const [userName, setUserName]= useState("");
  const[email, setEmail]= useState("");
  const[password, setPassword]= useState("");

  async function save(event){
    event.preventDefault();
    try{
      await axios.post("http://localhost:8080/user/save")
    }catch {

    }
  }
  
  
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

                  <button type='submit' onClick={save}>save</button>
                  
          </form>
      </div>
    )
  }
export default SingUp