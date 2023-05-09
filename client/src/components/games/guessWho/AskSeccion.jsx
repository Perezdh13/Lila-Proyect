import React, { useEffect, useState } from 'react';
import IA from './IA';
import { QuestionsHTTP } from '../../../services/boards/QuestionsHTTP';
import bubbleLeft from '../../../assets/img/BocadilloIzquierda.png'
export const QuestionSelectValue = React.createContext();
function AskSeccion() {
  const [questions, setQuestions] = useState([]);
  const [playerQuestion, setPlayerQuestion] = useState(''); console.log(playerQuestion);
  const [questionType, setQuestionType] = useState('');
  const [questionValue, setQuestionValue] = useState('');
  const [isUserTurn, setIsUserTurn] = useState(true);
  const [stylePlayerAnswer, setStylePlayerAnswer] = useState({ display: "none" })
  const [playerAnswer, setPlayerAnswer] = useState('');
  const [styleQuestion, setStyleQuestion] = useState({ display: "block" });
  const [styleAnswer, setStyleAnswer] = useState({ display: "none" });
  const [styleUserTurn, setStyleUserTurn] = useState({ display: "block" });
  const [styleIATurn, setStyleIATurn] = useState({ display: "none" });

  const handleButtonClick = (question) => {
    setQuestionType(question.type);
    setQuestionValue(question.value);
    setPlayerQuestion(question.ask)
  }

  const resetValues = () => {
    setQuestionValue('');
    setQuestionType('');
  }

  useEffect(() => {
    QuestionsHTTP().getQuestions().then((data) => {
      setQuestions(data);
    });
  }, [])

 ////// Custon Event ///////

  useEffect(() => {
    const questionIA = new CustomEvent("questionsIA", {
      detail: questions
    })
    document.dispatchEvent(questionIA)
  }, [questions])


  useEffect(() => {
    const gameTurn = new CustomEvent("gameTurn", {
      detail: isUserTurn
    })
    document.dispatchEvent(gameTurn)
    const updatePlayerAnswer = event => {
      setTimeout(() => setPlayerAnswer(event.detail), 2000)
    }
    document.addEventListener("playerAnswer", updatePlayerAnswer)
  })

  useEffect(() => {
    const questionSelected = new CustomEvent("selectedQuestion", {
      detail: {
        type: questionType,
        value: questionValue
      }
    });
    document.dispatchEvent(questionSelected);
  }, [questionValue, questions]);

  ////////  Styles ////////

  useEffect(() => {
    if (isUserTurn === false) {
      setTimeout(() => (setIsUserTurn(true), setStylePlayerAnswer({ display: "none" })), 8000)
      setTimeout(() => setStylePlayerAnswer({ display: "block" }), 2000)
    }
  })
  useEffect(() => {
    if (questionValue === '') {
      setStyleQuestion({ display: "block" });
      setStyleAnswer({ display: "none" });
    } else {
      setStyleQuestion({ display: "none" });
      setStyleAnswer({ display: "block" });
    }
  }, [questionValue]);

  useEffect(() => {
    if (isUserTurn === false) {
      setStyleIATurn({ display: 'block' });
      setStyleUserTurn({ display: 'none' });
    } else {
      setStyleIATurn({ display: 'none' });
      setStyleUserTurn({ display: 'block' });
    }
  }, [isUserTurn])

  return (
    <div style={{ height: "18vh", width: "60vw", margin: "10vh" }}>
      {/* Div turno jugador */}
      <div style={styleUserTurn}>
        <div style={{ display: "flex" }}>
          <div style={{ width: "10vw" }}>
            <button type="button" style={{ width: "8vw", fontSize: "0.8vw", margin: "0.2vw" }} class="btn btn-info" onClick={() => resetValues()}>pregunta</button>
            <button type="button" style={{ width: "8vw", fontSize: "0.8vw", margin: "0.2vw" }} class="btn btn-info" onClick={() => setIsUserTurn(false)}>Turno de la maquina</button>
            <button type="button" style={{ width: "8vw", fontSize: "0.8vw", margin: "0.2vw" }} class="btn btn-info" >Tiempo</button>
          </div>
          <div style={{ width: "40vw", height: "18vh" }}>
            <div style={styleQuestion}>
              {questions.map((question, index) =>
                <button type="button" class="btn btn" key={index} onClick={() => handleButtonClick(question)}>{question.ask}</button>
              )}
            </div>
            <div style={styleAnswer}>
              <div style={{ display: "flex" }}>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <img style={{ width: "10vw" }} src={bubbleLeft} />
                  <p style={{ position: "absolute", width: "6vw", marginLeft: "0px", marginTop: "3vh", fontSize: "1.1vw", color: "black", textShadow: "1px 1px violet" }}>{playerQuestion}</p>
                </div>
                <IA />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Div turno IA*/}
      <div style={styleIATurn}>
        <div style={{ display: "flex" }}>
          <div style={stylePlayerAnswer}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <img style={{ width: "10vw" }} src={bubbleLeft} />
              <p style={{ position: "absolute", width: "6vw", marginTop: "3vh", fontSize: "1.1vw", color: "black", textShadow: "1px 1px violet" }}>{playerAnswer}</p>
            </div>
          </div>
          <div>
            <IA />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AskSeccion