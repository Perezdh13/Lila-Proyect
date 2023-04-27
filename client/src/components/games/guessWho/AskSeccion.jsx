import React, { useEffect, useState } from 'react'
import HTTPService from '../../../services/HTTPService';

export const QuestionSelectValue = React.createContext();
function AskSeccion() {
  const [questions, setQuestions] = useState([])
  const [questionType, setQuestionType] = useState('')
  const [questionValue, setQuestionValue] = useState('')
  

  const handleButtonClick = (question) => {
    setQuestionType(question.type);
    setQuestionValue(question.value);
  }
  useEffect(() => {
    HTTPService().getQuestions().then((data) => {
      setQuestions(data);
    });
  }, [])

  useEffect(() => {
    const customEvent = new CustomEvent("questionSelected", {
      detail:{
        type: questionType,
        value: questionValue
      } 
    });
    document.dispatchEvent(customEvent);
  }, [questionValue]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ backgroundColor: "grey", width: "40vw", height: "10vh" }}>
        {questions.map((question, index) =>
          <button key={index} onClick={() => handleButtonClick( question)}>{question.ask}</button>
        )}
      </div>


    </div>
  )
}

export default AskSeccion