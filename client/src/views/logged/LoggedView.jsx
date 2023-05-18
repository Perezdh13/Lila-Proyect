import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import game from '../../assets/img/computer-game.png'
import learn from '../../assets/img/reading.png'
import admin from '../../assets/img/admin-panel.png'
function LoggedView() {
  const rol = "admin"
  const [authorization, setAuthorization] = useState({ display: "none" });

  useEffect(() => {
    if (rol === "admin") {
      setAuthorization({ display: "block" })
    }
  })

  return (
    <div>
      <div style={{ display: "flex" }}>
        <Link to='/games'>
          <img src={game} style={{ width: "20vw",margin:"5vw" }} />
        </Link>

        <Link to='/learn'>
          <img src={learn} style={{ width: '20vw', margin:"5vw" }} />
        </Link>

        <div style={authorization}>
          <Link to='/admin'>
            <img src={admin} style={{ width: "5vw",marginLeft:"25vw", marginTop:"5vh" }} />
          </Link>
        </div>
      </div>
      </div>
      )
}

      export default LoggedView