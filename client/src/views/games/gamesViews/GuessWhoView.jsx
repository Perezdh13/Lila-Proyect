import React from 'react'
import AskSeccion from '../../../components/games/guessWho/AskSeccion'
import Player from '../../../components/games/guessWho/Player'
import WomenGroup from '../../../components/games/guessWho/WomenGroup'
import secretWoman from '../../../assets/img/secretWoman.jpg'
import backgroundGame from '../../../assets/img/fondoJuego.png'

function GuessWhoView() {
  return (
    <div>
      <div style={{display:"flex",justifyContent:"space-between", height:"30vh"}}>
        <Player />
        <AskSeccion />       
        <img src={secretWoman} style={{height:"15vh", margin:"5vw"}}/> 
      </div >
      <WomenGroup/>
    </div>
  )
}

export default  GuessWhoView