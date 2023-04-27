import React, { useEffect, useState } from 'react'
import Card from './Card'
import HTTPService from '../../../services/HTTPService'


function WomenGroup() {
  const [woman, setWoman] = useState([])
  const [iASelect,setIASelect] = useState('')
 
 useEffect(() => {
    HTTPService().getAllData().then((data) => {
      setWoman(data);
    });    
  }, [])

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * woman.length);
    const randomWoman = woman[randomIndex];
   setIASelect(randomWoman);
  }, [woman]);

  useEffect(() => {
    const customEvent = new CustomEvent("randomWoman", {
      detail: iASelect
    });
    document.dispatchEvent(customEvent);
  }, [iASelect]);

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