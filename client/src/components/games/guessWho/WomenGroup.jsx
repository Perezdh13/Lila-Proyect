import React, { useEffect, useState } from 'react'
import Card from './Card'
import { WomenHTTP } from '../../../services/boards/WomenHTTP';

function WomenGroup() {
  const [woman, setWoman] = useState([]);console.log(woman.length);
  const [womanGame, setWomanGame] = useState([]);
  const [womanCount, setWomanCount] = useState(0);
  const [iASelect, setIASelect] = useState('');
  const [discardedCard, setDiscardedCard] = useState('');
  const [selectedCard, setSelectedCard] = useState(null);
  const [cardStyle, setCardStyle] = useState({ display: "block" });
 
  const selectCard = (woman) => {
    setSelectedCard(woman);
  };

  const chooseWomen = (woman) => {
    selectCard(woman);
    setCardStyle({ display: "none" });
  };

  useEffect(() => {
    WomenHTTP().getAllData().then((data) => {
      setWoman(data);
    });    
  }, []);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * woman.length);
    const randomWoman = woman[randomIndex];
    setIASelect(randomWoman);
  }, [woman]);

  useEffect(()=>{    
    if (woman.length > 0 && womanCount < 20){
      const randomIndex = Math.floor(Math.random() * woman.length);
      const randomWoman = woman[randomIndex];
      setWomanGame(prevState => [...prevState, randomWoman]);
      setWomanCount(prevCount => prevCount +1);
    } 
  },[woman, womanGame])
 


  useEffect(() => {
    const iAWoman = new CustomEvent("randomWoman", {
      detail: iASelect
    });
    const women = new CustomEvent("women", {
      detail: womanGame
    })
    document.dispatchEvent(iAWoman);
    document.dispatchEvent(women);
  });



  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop:0}}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", columnGap: "1vw", rowGap: "2vh" }}>
        {womanGame.map((womanGame) => (
          <div >
            <Card 
            woman={womanGame} 
            id={womanGame.id} 
            name={womanGame.name} 
            imgCartoon={womanGame.imgCartoon} 
            />
          </div>
        ))}
      </div>
     
    
    </div>
  );
}

export default WomenGroup;
