import React from 'react'
import { Link } from 'react-router-dom'
import wordSearch from '../../assets/img/sopa-de-letras.png'
import guessWho from '../../assets/img/quien-es-quien.png'
import createAvatar from '../../assets/img/diseña-personaje.png'

function GamesView() {


  return (
    <div>
      <div style={{ display: "flex" }}>
        <div className='guessWho'>
          <Link to='guessWho'>
            <img src={guessWho} style={{ width: "20vw", margin:"5vw" }} />
          </Link>
        </div>
        <div className='searchWord'>
          <Link to='wordSearch'>
            <img src={wordSearch} style={{ width: "19vw", margin: "7vw" }} />
          </Link>
        </div>
      </div>
      <div className='createYourAvatar'>
        <Link to='createYourAvatar'>
          <img src={createAvatar} style={{ width: "25vw", marginLeft:"18vw" }} />
        </Link>
      </div>
    </div>
  )
}

export default GamesView