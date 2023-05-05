import React from 'react'
import { Link } from 'react-router-dom'
import Bubble from '../../components/home/Bubble'

function HomePage() {
  return (
    <div> HomePage
      <Link to="/logged">
      <button>Vamos a jugar</button>
      </Link>
      <Bubble/>
      </div>
  )
}

export default HomePage