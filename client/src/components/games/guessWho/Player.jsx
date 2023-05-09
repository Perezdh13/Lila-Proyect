import React, { useEffect, useState } from 'react'
import Card from './Card'
import hacker from '../../../assets/img/hacker.png'

function Player() {
  const [women, setWomen] = useState('');
  const [womanSelect, setWomanSelect] = useState('');
  const [iAQuestion, setIAQuestion] = useState('');
  const [iAQuestionType, setIAQuestionType] = useState('');
  const [iAQuestionValue, setIAQuestionValue] = useState('')
  const [styleUser, setStyleUser] = useState({ display: "block" });
  const [styleWoman, setStyleWoman] = useState({ display: "none" });
  const [playerAnswer, setPlayerAnswer] = useState('');
  const [isUserTurn,setIsUserTurn] = useState('');
  
  useEffect(() => {  
    if(womanSelect && iAQuestionType && iAQuestionValue){
    (womanSelect[iAQuestionType] === iAQuestionValue) ? 
      setPlayerAnswer('si tiene ' + iAQuestionType + ' ' + iAQuestionValue):
      setPlayerAnswer('No tiene ' + iAQuestionType + ' ' + iAQuestionValue)
    } 
    })


  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * women.length);
    const randomWoman = women[randomIndex];
    setWomanSelect(randomWoman);
  }, [women]);

  useEffect(() => {
    const upDateWomen = event => {
      setWomen(event.detail);
    }
    document.addEventListener("women", upDateWomen)
  }, [women])

  useEffect(() => {
    (iAQuestion === '') ? setIAQuestionType('') :
      setIAQuestionType(iAQuestion.type)
      setIAQuestionValue(iAQuestion.value)
  })


  setTimeout(() => (setStyleUser({ display: "none" }),
    setStyleWoman({ display: "block" })), 3000)


  useEffect(() => {
    const playerAnswerEvent = new CustomEvent("playerAnswer",{
      detail: playerAnswer
    });
    document.dispatchEvent(playerAnswerEvent)
    const upDateIAQuestion = event => {
      setIAQuestion(event.detail)
    }
    const gameTurn = event => {
      setIsUserTurn(event.detail);
    };
    document.addEventListener("iAQuestion", upDateIAQuestion)
    document.addEventListener("gameTurn", gameTurn);
  })

  return (
    <div style={{ width: "25vh", height: "20vh", marginTop: "10vh", marginLeft: "5vw" }}>
        
      <div style={styleUser}>
        <Card
          imgCartoon={hacker}
          />
      </div>
      {womanSelect ? (
        <div style={styleWoman}>
          <Card
            womanSelect={womanSelect}
            id={womanSelect.id}
            name={womanSelect.name}
            imgCartoon={womanSelect.imgCartoon}
            />
        
        </div>
      ) : null}
    </div>
  )
}

export default Player