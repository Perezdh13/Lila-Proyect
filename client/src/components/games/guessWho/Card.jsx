import React, { useEffect, useState } from 'react'

function Card(props) {
  const [cardStyle, setCardStyle] = useState({ display:"block" });console.log(cardStyle);

  const changeStyle = () => {
    if(cardStyle == { display: "block" }) {
      setCardStyle({ display: "block", opacity: "0.5" })
    }
     
   
  };
  
  

  return (
    <div style={cardStyle}>
      <div class="card" style={{ background: "transparent", width: "7vw", height: "16vh" }}>
        <img src={props.imgCartoon} onClick={changeStyle} style={{  maxHeight: "10vh" }} class="card-img-top" alt="..." />
        <div style={{textAlign:"center"}}>
        <h6>{props.name}</h6>
        </div>
      </div>
    </div>
  )
}

export default Card