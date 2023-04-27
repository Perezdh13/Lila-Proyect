import React from 'react'
import AskSeccion from '../../../components/games/guessWho/AskSeccion'
import Player from '../../../components/games/guessWho/Player'
import WomenGroup from '../../../components/games/guessWho/WomenGroup'
import IA from '../../../components/games/guessWho/IA'

function GuessWhoView() {
  return (
    <div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)"}}>
        <Player />
        <AskSeccion />
        <IA />
      </div>
      <WomenGroup />
    </div>
  )
}

export default GuessWhoView