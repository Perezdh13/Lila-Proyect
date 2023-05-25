import React, { useEffect, useState } from 'react'
import Card from './Card'
import  WomenRead  from '../../../services/boards/womenHTTP/WomenRead'; 

function WomenGroup() {
  const [woman, setWoman] = useState([]);
  const [womanGame, setWomanGame] = useState([]);
  const [womanCount, setWomanCount] = useState(0);
  const [iASelect, setIASelect] = useState('');
  const [avalaibleCard, setAvalaibleCard] = useState([]);
  const [selectedCard, setSelectedCard] = useState([]);

  
  function updateAvalaibleCard() { 
    const unselectedWomen = womanGame.filter((woman) => !selectedCard.includes(woman.id));
    const unselectedWomenIds = unselectedWomen.map((woman) => woman.id);
    setAvalaibleCard(unselectedWomenIds)
  }
  
  function cardClickSelect(id) {
    if (selectedCard.length < 19 || selectedCard.includes(id)) {
      if (selectedCard.includes(id)) {
        const updatedSelectedCard = selectedCard.filter((cardId) => cardId !== id);
        setSelectedCard(updatedSelectedCard)
      } else {
        setSelectedCard(prevState => [...prevState, id]);
      }
    }
  };
  useEffect(()=>{
    updateAvalaibleCard()
  },[selectedCard])
  
  useEffect(()=>{
    if(womanGame.length >= 0){
      setAvalaibleCard(womanGame.map((obj)=>{return obj.id}))
    }
  },[womanGame])


  useEffect(() => {
    WomenRead().getAllData().then((data) => {
      setWoman(data);
    });
  }, []);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * womanGame.length);
    const randomWoman = womanGame[randomIndex];
    setIASelect(randomWoman);
  }, [woman]);

  useEffect(() => {
    if (woman.length > 0 && womanCount < 15) {
      const availableWomen = woman.filter((w) => !womanGame.some((wg) => wg.id === w.id));

      const randomIndex = Math.floor(Math.random() * availableWomen.length);
      const randomWoman = availableWomen[randomIndex];

      setWomanGame((prevState) => [...prevState, randomWoman]);
      setWomanCount((prevCount) => prevCount + 1);
    }
  }, [woman, womanGame]);


  useEffect(() => {
    const cardsSelect = new CustomEvent("cardsSelect", {
      detail: {
        avalaibleCard,
        selectedCard
      }
    });
    const iAWoman = new CustomEvent("randomWoman", {
      detail: iASelect
    });
    const women = new CustomEvent("women", {
      detail: womanGame
    });

    document.dispatchEvent(cardsSelect);
    document.dispatchEvent(iAWoman);
    document.dispatchEvent(women);
  });



  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 0 }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", columnGap: "1vw", rowGap: "2vh" }}>
        {womanGame.map((womanGame) => (
          <div >
            <Card
              woman={womanGame}
              id={womanGame.id}
              name={womanGame.name}
              imgCartoon={womanGame.imgCartoon}
              hair={womanGame.pelo}
              eyes={womanGame.ojos}
              onCardClick={cardClickSelect}
              //avalaibleCard={updateAvalaibleCard}
              selectedCard={selectedCard.length}
            />
          </div>
        ))}
      </div>


    </div>
  );
}

export default WomenGroup;
