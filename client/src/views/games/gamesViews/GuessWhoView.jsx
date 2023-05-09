import React from 'react'
import AskSeccion from '../../../components/games/guessWho/AskSeccion'
import Player from '../../../components/games/guessWho/Player'
import WomenGroup from '../../../components/games/guessWho/WomenGroup'
import secretWoman from '../../../assets/img/secretWoman.jpg'

function GuessWhoView() {
  return (
    <div style={{backgroundColor:"#A582AF",width:"100vw", height:"100vh", margin:0 }}>
      <div style={{display:"flex"}}>
        <Player />
        <AskSeccion />       
        <img src={secretWoman} style={{height:"15vh", margin:"5vw"}}/> 
      </div >
      <WomenGroup/>
    </div>
  )
}

export default GuessWhoView