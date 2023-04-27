import React, { useEffect, useState } from 'react'
import Card from './Card'
import HTTPService from '../../../services/HTTPService'


function WomenGroup() {
  const [woman, setWoman] = useState([])

  useEffect(() => {
    HTTPService().getAllData().then((data) => {
      setWoman(data);
    })
  }, [])

  return (
    <div className='womenGroup' style={{display:"flex", justifyContent:"center"}}>
      <div style={{display:"grid", gridTemplateColumns:"repeat(5,1fr)",columnGap:"1vw",rowGap:"1vh"}}>
        {woman.map((woman) =>
          <Card
            woman={woman}
            id={woman.id}
            name={woman.name}
            imgCartoon={woman.imgCartoon}
          />
        )}
      </div>
    </div>
  )
}

export default WomenGroup