import React, { useEffect, useState } from 'react'

function Card(props) {
 
  const [isClicked, setIsClicked] = useState(false);
  
  const handleClick = () => {
    if(props.selectedCard < 19){
    setIsClicked(!isClicked);
    props.onCardClick(props.id);
    props.avalaibleCard()
  }else{
    setIsClicked(false)
    props.onCardClick(props.id)
    props.avalaibleCard()
  }
}
  return (
    <div style={{opacity: isClicked?"0.3":'1'}}onClick={handleClick}>
      <div class="card" style={{ background: "transparent", width: "7vw", height: "16vh" }}>
        <img src={props.imgCartoon}  style={{  maxHeight: "10vh" }} class="card-img-top" alt="..." />
        <div style={{textAlign:"center"}}>
        <h6>{props.name}</h6>
        </div>
      </div>
    </div>
  )
}

export default Card