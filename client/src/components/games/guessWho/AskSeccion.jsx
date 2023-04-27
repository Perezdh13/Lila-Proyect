import React, { useEffect, useState } from 'react'
import HTTPService from '../../../services/HTTPService';
import IA from './IA';

export const QuestionSelectValue = React.createContext();
function AskSeccion() {
  const [questions, setQuestions] = useState([]);
  const [questionType, setQuestionType] = useState('');
  const [questionValue, setQuestionValue] = useState('');

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
      detail: {
        type: questionType,
        value: questionValue
      }
    });
    document.dispatchEvent(customEvent);
  }, [questionValue]);


  return (
    <div style={{ display: "flex", justifyContent: "center", height: "18vh" }}>
      <div style={{width:"10vw"}}>
        <button type="button" style={{width:"8vw", fontSize:"0.8vw",margin:"1vw"}} class="btn btn-info" onClick={() => setQuestionValue('')}>Siguiente pregunta</button>
        <button type="button" style={{width:"8vw", fontSize:"0.8vw", margin:"1vw"}} class="btn btn-info" >Tiempo</button>
      </div>
      <div style={{ backgroundColor: "grey", width: "40vw", height: "18vh" }}>
        {questionValue === '' ? (
          <div>
            {questions.map((question, index) =>
              <button type="button" class="btn btn" key={index} onClick={() => handleButtonClick(question)}>{question.ask}</button>
            )}
          </div>) : (
          <><IA /></>
        )}
      </div>
    </div>
  )
}

export default AskSeccion