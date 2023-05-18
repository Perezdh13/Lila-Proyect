import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



function Logged() {
const rol = "admin"
  const [authorization, setAuthorization] = useState({ display:"none" });
   
useEffect(()=>{
    if(rol === "admin"){
            setAuthorization({ display: "block" })
        }
},[])



  return (
    <div>Logged
      <div >
                <Link to='/games'>
                    <button >Juegos</button>
                </Link>
            </div>
            <div >
                <Link to='/learn'>
                    <button>Vamos a aprender</button>
                </Link>
            </div>
            <div style={authorization}>
                <Link to='/admin'>
                    <button>Gestion de alumnos</button>
                </Link>
            </div>
    </div>
  )
}

export default Logged
