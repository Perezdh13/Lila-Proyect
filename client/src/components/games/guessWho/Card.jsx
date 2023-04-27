import React from 'react'

function Card(props) {
  return (
    <div >
      <div class="card" style={{ width: "auto", height: "11vh" }}>
        <img src={props.imgCartoon} style={{ maxWidth: "100%", height: "100%" }} class="card-img-top" alt="..." />
        <p class="card-title" style={{ fontSize: "1vw", color: "black", textShadow: "1px 1px violet", position: "absolute", bottom: "0", left: "50%", transform: "translateX(-50%)" }}>{props.name}</p>
      </div>
    </div>
  )
}

export default Card