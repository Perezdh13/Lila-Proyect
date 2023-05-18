import React, { useContext, useEffect, useState } from 'react';
import BubbleRight from '../../../assets/img/Bocadillo.png'
import AskSeccion from './AskSeccion';

function IA(props) {
  const [iAWoman, setIAWoman] = useState('');
  const [questionsSelected, setQuestionsSelected] = useState([])
  const [iAQuestion, setIAQuestion] = useState('');
  const [questions, setQuestions] = useState(''); 
  const [questionType, setQuestionType] = useState('');
  const [questionValue, setQuestionValue] = useState('');
  const [answer, setAnswer] = useState('...');console.log(answer);
  const [isUserTurn, setIsUserTurn] = useState('');
  const [selectedQuestions, setSelectedQuestions] = useState('');

  useEffect(() => {
    if (questionType && questionValue) {
      setTimeout(() => {
        const response = (iAWoman[questionType] === questionValue)
          ? ('si tiene ' + questionType + ' ' + questionValue)
          : ('No tiene ' + questionType + ' ' + questionValue)
        setAnswer(response);
      }, 5000);
    } else setAnswer('...')
  }, [questionType, questionValue])

  useEffect(() => {
    if(!iAQuestion || iAQuestion.length === 0){
      const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
      setIAQuestion(randomQuestion)
    }
  })
  
  const selectRandomQuestion = () => {
    setIAQuestion('')
    }
  
  useEffect(() => {
    (isUserTurn === false) ?
      setTimeout(() => (setAnswer(iAQuestion.ask), setSelectedQuestions(iAQuestion)),2000) :
      setAnswer('...')
  }, [isUserTurn])

  useEffect(() => {
    if (questions === ''){
    const upDateQuestion = event => {
      setQuestions(event.detail);
    };
    document.addEventListener("dataQuestions", upDateQuestion);}
  })
  useEffect(() => {
    const callSelectRandomQuestion = () => {
      selectRandomQuestion();
    }
    window.addEventListener("callSelectRandomQuestion", callSelectRandomQuestion)
  }, [])
  useEffect(() => {
    const upDateIAWoman = event => {
      setIAWoman(event.detail);
    };
    const upDateQuestionSelect = event => {
      setQuestionType(event.detail.type);
      setQuestionValue(event.detail.value);
    };

    const gameTurn = event => {
      setIsUserTurn(event.detail);
    };
    document.addEventListener("selectedQuestion", upDateQuestionSelect);
    document.addEventListener("randomWoman", upDateIAWoman);

    document.addEventListener("gameTurn", gameTurn);

    const iAQuestionEvent = new CustomEvent("iAQuestion", {
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
