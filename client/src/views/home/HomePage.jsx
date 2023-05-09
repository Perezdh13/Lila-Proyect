import React from 'react'
import { Link } from 'react-router-dom'
import Bubble from '../../components/home/Bubble'
import '../../views/styles/Styles.css'
import Robot from '../../assets/img/Robot.png'





function HomePage() {
  return (
    <div> 
       <Link to="/logged">
       <img className='robot' src={Robot} style={{position: 'absolute', height:"30rem", marginLeft:"19rem", marginTop:"8rem"}}/>
      </Link> 
      
      <Bubble/>
      </div>
  )
}

export default HomePage 