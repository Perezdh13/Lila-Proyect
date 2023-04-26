import React from 'react'
import AskSeccion from '../../../components/games/guessWho/AskSeccion'
import Players from '../../../components/games/guessWho/Players'
import WomenGroup from '../../../components/games/guessWho/WomenGroup'

function GuessWhoView() {
  return (
    <div>GuessWhoView
      <AskSeccion />
      <WomenGroup />
      <Players />
    </div>
  )
}

export default GuessWhoView