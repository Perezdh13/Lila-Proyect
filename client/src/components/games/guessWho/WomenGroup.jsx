import React, { useEffect, useState } from 'react'
import Card from './Card'
import { Women } from '../../../services/boards/Women'

function WomenGroup() {
  const [woman, setWoman] = useState([]);
  const [iASelect, setIASelect] = useState('');
  const [discardedCard, setDiscardedCard] = useState('');
  const [selectedCard, setSelectedCard] = useState(null);
  const [cardStyle, setCardStyle] = useState({ display: "block" })

console.log(discardedCard);

  const selectCard = (woman) => {
    setSelectedCard(woman);
  };

  const chooseWomen = (woman) => {
    selectCard(woman);
    setCardStyle({ display: "none" });
  };

  useEffect(() => {
    Women().getAllData().then((data) => {
      setWoman(data);
    });    
  }, []);

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
  });

  const handleDiscard = () => {
    if (selectedCard) {
      setDiscardedCard(selectedCard);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", columnGap: "1vw", rowGap: "1vh" }}>
        {woman.map((woman) => (
          <div >
            <Card 
            woman={woman} 
            id={woman.id} 
            name={woman.name} 
            imgCartoon={woman.imgCartoon} 
            />
          </div>
        ))}
      </div>
     
    
    </div>
  );
}

export default WomenGroup;
