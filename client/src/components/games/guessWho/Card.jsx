import React from 'react'

function Card(props) {
  return (
   <div>
  <div class="card" style={{width: "18rem"}}>
  <img src={props.imgCartoon} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{props.name}</h5>
  </div>
</div>
   </div>
  )
}

export default Card