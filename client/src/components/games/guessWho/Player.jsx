import React, { useEffect, useState } from 'react'
import Card from './Card'
import secretWoman from '../../../assets/img/secretWoman.jpg'

function Player() {
  const [women, setWomen] = useState('');
  const [womanSelect, setWomanSelect] = useState('');console.log(womanSelect);
  const [iAQuestion, setIAQuestion] = useState('');
  const [iAQuestionType, setIAQuestionType] = useState('');
  const [iAQuestionValue, setIAQuestionValue] = useState('');
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
    },[iAQuestionType, iAQuestionValue])
    

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


   setTimeout(() => (setStyleUser({ display: "none" }),
    setStyleWoman({ display: "block" })), 3000)


  useEffect(() => {
    const playerAnswerEvent = new CustomEvent("playerAnswer",{
      detail: playerAnswer
    });
    document.dispatchEvent(playerAnswerEvent)
    
    const upDateIAQuestion = event => {
      setIAQuestion(event.detail)
      setIAQuestionType(event.detail.type)
      setIAQuestionValue(event.detail.value)
    }
    const gameTurn = event => {
      setIsUserTurn(event.detail);
    };
    document.addEventListener("iAQuestion", upDateIAQuestion)
    document.addEventListener("gameTurn", gameTurn);
  },[playerAnswer, iAQuestion])

  return (
    <div style={{ width: "10vw",height:"30vh", marginLeft:"3vw", marginTop:"10vh" }}> 
      <div style={styleUser}>
        <img src={secretWoman} style={{width:"10vw"}}/>    
      </div>
      {womanSelect ? (
        <div style={styleWoman}>
          <div>
            <img src={womanSelect.imgCartoon} style={{width:"10vw", height:"20vh"}}/>
            <div style={{textAlign:"center"}}>
            <h5>{womanSelect.name}</h5>
            </div>
          </div>                
        </div>
      ) : null}
    </div>
  )
}

export default Player