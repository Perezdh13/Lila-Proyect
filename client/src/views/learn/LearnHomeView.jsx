import React from 'react'
import Spain from '../../assets/img/Spain.png'
import Greta from '../../assets/img/Greta.png'
import Earth from '../../assets/img/Earth.png'

function LearnHomeView() {
  return (
    <div style={{display: "flex", justifyContent:"center", alignItems:"center"}}> 
      <div className='ContainerImages' style={{display: "flex", justifyContent: "center", alignItems:"center", paddingTop:"10vh"}}>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginLeft:"5%"}}>
          <img src={Spain} style={{ display: "block", maxWidth: "100%", maxHeight: "100%", width: "70%"}}/>
          <p style={{fontSize:"5vh", marginTop:"6vh", marginRight:"12vh"}}>Españolas</p>
        </div>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginLeft:"15%"}}>
          <img src={Earth} style={{ display: "block", maxWidth: "100%", maxHeight: "100%", width: "82%", paddingTop:"4%" }}/>
          <p style={{fontSize:"5vh", marginLeft:"5%"}}>Internacionales</p>
        </div>
      </div>
      <img src={Greta} style={{position:"fixed", marginTop:"45%"}}/>
    </div> 
  )
}

export default LearnHomeView