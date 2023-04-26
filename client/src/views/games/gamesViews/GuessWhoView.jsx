import React from 'react'
import AskSeccion from '../../../components/games/guessWho/AskSeccion'
import Players from '../../../components/games/guessWho/Players'
import CardsBlock from '../../../components/games/guessWho/CardsBlock'

function GuessWhoView() {
  return (
    <div>GuessWhoView
      <AskSeccion />
      <CardsBlock />
      <Players />
    </div>
  )
}

export default GuessWhoView