import React, { useEffect, useState } from 'react';
import IA from './IA';
import { Questions } from '../../../services/boards/Questions';
import Bocadillo from '../../../assets/img/Bocadillo.png'
export const QuestionSelectValue = React.createContext();
function AskSeccion() {
  const [questions, setQuestions] = useState([]);
  const [questionType, setQuestionType] = useState('');
  const [questionValue, setQuestionValue] = useState('');
  const [styleQuestion, setStyleQuestion] = useState({display:"block"});
  const [styleAnswer, setStyleAnswer] = useState({display:"none"});

  const handleButtonClick = (question) => {
    setQuestionType(question.type);
    setQuestionValue(question.value);
  }

  const resetValues = () => {
    setQuestionType('');
    setQuestionValue()
  }

  useEffect(() => {
    Questions().getQuestions().then((data) => {
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

  useEffect(() => {
    if (questionType === '') {
      setStyleQuestion({display:"block"});
      setStyleAnswer({display:"none"});
    } else {
      setStyleQuestion({display:"none"});
      setStyleAnswer({display:"block"});
    }
  }, [questionValue]);
  

  return (
    <div style={{ display: "flex", justifyContent: "center", height: "18vh" }}>
      <div style={{width:"10vw"}}>
        <button type="button" style={{width:"8vw", fontSize:"0.8vw",margin:"1vw"}} class="btn btn-info" onClick={() => resetValues()}>Siguiente pregunta</button>
        <button type="button" style={{width:"8vw", fontSize:"0.8vw", margin:"1vw"}} class="btn btn-info" >Tiempo</button>
      </div>
      <div style={{ backgroundColor: "grey", width: "40vw", height: "18vh" }}>      
          <div style={styleQuestion}>
            {questions.map((question, index) =>
              <button type="button" class="btn btn" key={index} onClick={() => handleButtonClick(question)}>{question.ask}</button>
            )}
          </div>
            <div style={styleAnswer}>
              
              <IA />
              
          </div>       
      </div>
    </div>
  )
}

export default AskSeccion