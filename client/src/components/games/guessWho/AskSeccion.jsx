import React, { useEffect, useState } from 'react';
import IA from './IA';
import { QuestionsHTTP } from '../../../services/boards/QuestionsHTTP';
export const QuestionSelectValue = React.createContext();
function AskSeccion() {
  const [questions, setQuestions] = useState([]);
  const [iAQuestion, setIAQuestion] = useState([]);
  const [iASelectedQuestions, setIASelectedQuestions] = useState([])
  const [questionType, setQuestionType] = useState('');
  const [questionValue, setQuestionValue] = useState('');
  const [styleQuestion, setStyleQuestion] = useState({ display: "block" });
  const [styleAnswer, setStyleAnswer] = useState({ display: "none" });

  const handleButtonClick = (question) => {
    setQuestionType(question.type);
    setQuestionValue(question.value);
  }

  const resetValues = () => {
    setQuestionValue('');
  }

  useEffect(() => {
    QuestionsHTTP().getQuestions().then((data) => {
      setQuestions(data);
    });
  }, [questionValue])

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const randomQuestion = questions[randomIndex];
    setIAQuestion(randomQuestion);
  }, [questionType, questionValue]);

  useEffect(() => {
    const questionSelected = new CustomEvent("selectedQuestion", {
      detail: {
        type: questionType,
        value: questionValue
      }
    });
    const questionIA = new CustomEvent("questionIA", {
      detail: { iAQuestion }
    })
    document.dispatchEvent(questionSelected);
    document.dispatchEvent(questionIA)
  }, [questionValue, iAQuestion]);


  useEffect(() => {
    if (questionValue === '') {
      setStyleQuestion({ display: "block" });
      setStyleAnswer({ display: "none" });
    } else {
      setStyleQuestion({ display: "none" });
      setStyleAnswer({ display: "block" });
    }
  }, [questionValue]);


  return (
    <div style={{ display: "flex", justifyContent: "center", height: "18vh" }}>
      <div style={{ width: "10vw" }}>
        <button type="button" style={{ width: "8vw", fontSize: "0.8vw", margin: "1vw" }} class="btn btn-info" onClick={() => resetValues()}>Siguiente pregunta</button>
        <button type="button" style={{ width: "8vw", fontSize: "0.8vw", margin: "1vw" }} class="btn btn-info" >Tiempo</button>
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