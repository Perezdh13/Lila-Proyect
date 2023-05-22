import React, { useEffect, useState } from 'react'
import Card from './Card'
import { WomenHTTP } from '../../../services/boards/WomenHTTP';

function WomenGroup() {
  const [woman, setWoman] = useState([]);
  const [womanGame, setWomanGame] = useState([]);
  const [womanCount, setWomanCount] = useState(0);
  const [iASelect, setIASelect] = useState('');
  const [avalaibleCard, setAvalaibleCard] = useState([]);
  const [selectedCard, setSelectedCard] = useState([]);

  useEffect(() => {
    const unselectedWomen = womanGame.filter((woman) => !selectedCard.includes(woman.id));
    const unselectedWomenIds = unselectedWomen.map((woman) => woman.id);
    setAvalaibleCard(unselectedWomenIds)
  })


  const cardClickSelect = (id) => {

      if (selectedCard.includes(id)) {
        const updatedSelectCard = selectedCard.filter((cardId) => cardId !== id);
        setSelectedCard(updatedSelectCard);
      } else {
        setSelectedCard(prevState => [...prevState, id])
      }

  }

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

  useEffect(() => {
    if (woman.length > 0 && womanCount < 20) {
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
              onCardClick={cardClickSelect}
              selectedCard={selectedCard.length}
            />
          </div>
        ))}
      </div>


    </div>
  );
}

export default WomenGroup;
