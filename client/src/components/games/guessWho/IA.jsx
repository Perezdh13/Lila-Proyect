import React, { useContext, useEffect, useState } from 'react';
import BubbleRight from '../../../assets/img/Bocadillo.png'

function IA() {
  const [iAWoman, setIAWoman] = useState('');
  const [iAQuestion, setIAQuestion] = useState('');
  const [questions, setQuestions] = useState('');
  const [questionType, setQuestionType] = useState('');
  const [questionValue, setQuestionValue] = useState('');
  const [answer, setAnswer] = useState('...');
  const [isUserTurn, setIsUserTurn] = useState('');
  const [selectedQuestions, setSelectedQuestions] = useState({})

  useEffect(() => {
    if(questionType && questionValue){
    (iAWoman[questionType] === questionValue)
      ? setAnswer('si tiene ' + questionType + ' ' + questionValue)
      : setAnswer('No tiene ' + questionType + ' ' + questionValue);
    }
  });

  useEffect(() => {
    (isUserTurn === false) ?
      setTimeout(()=>(setAnswer(iAQuestion.ask),setSelectedQuestions(iAQuestion)),2000) :
      setAnswer('...')
  }, [isUserTurn])

  useEffect(() => {
    if(isUserTurn === true){
    const randomIndex = Math.floor(Math.random() * questions.length);
    const randomQuestion = questions[randomIndex]
    setIAQuestion(randomQuestion)
  } else {setIAQuestion('')}
  });

  useEffect(() => {
    const upDateQuestionSelect = event => {
      setQuestionType(event.detail.type);
      setQuestionValue(event.detail.value);
    };
    const upDateIAWoman = event => {
      setIAWoman(event.detail);
    };
    const upDateQuestion = event => {
      setQuestions(event.detail);
    };
    const gameTurn = event => {
      setIsUserTurn(event.detail);
    };
    document.addEventListener("selectedQuestion", upDateQuestionSelect);
    document.addEventListener("randomWoman", upDateIAWoman);
    document.addEventListener("questionsIA", upDateQuestion);
    document.addEventListener("gameTurn", gameTurn);

    const iAQuestionEvent = new CustomEvent("iAQuestion",{
      detail: selectedQuestions
    });
    document.dispatchEvent(iAQuestionEvent);
  });

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <img style={{ width: "10vw" }} src={BubbleRight} />
        <p style={{ position: "absolute", width: "6vw", marginTop: "3vh", fontSize: "1.1vw", color: "black", textShadow: "1px 1px violet" }}>{answer}</p>
      </div>
    </div>
  );
}

export default IA;
