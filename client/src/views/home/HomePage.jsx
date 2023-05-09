import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div> 
      <Link to="/logged">
      <button>Vamos a jugar</button>
      </Link>
      </div>
  )
}

export default HomePage