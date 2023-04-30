import React from 'react'
import AskSeccion from '../../../components/games/guessWho/AskSeccion'
import Player from '../../../components/games/guessWho/Player'
import WomenGroup from '../../../components/games/guessWho/WomenGroup'

function GuessWhoView() {
  return (
    <div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)"}}>
        <Player />
        <AskSeccion />        
      </div>
      <WomenGroup />
    </div>
  )
}

export default GuessWhoView