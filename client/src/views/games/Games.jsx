import React from 'react'
import { Link } from 'react-router-dom'

function Games() {


  return (
    <div>
      <div className='guessWho'>
        <Link to='guessWho'>
          <button >Quien es Quien</button>
        </Link>
      </div>
      <div className='searchWord'>
        <Link to='wordSearch'>
          <button>Sopa de letras</button>
        </Link>
      </div>
      <div className='createYourAvatar'>
        <Link to='createYourAvatar'>
          <button>Diseña tu personaje</button>
        </Link>
      </div>

    </div>
  )
}

export default Games