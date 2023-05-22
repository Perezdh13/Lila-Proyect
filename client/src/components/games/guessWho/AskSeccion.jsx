import React, { useEffect, useState } from 'react';
import IA from './IA';
import { QuestionsHTTP } from '../../../services/boards/QuestionsHTTP';
import bubbleLeft from '../../../assets/img/BocadilloIzquierda.png'
export const QuestionSelectValue = React.createContext();
function AskSeccion(props) {
  const [questions, setQuestions] = useState([]);
  const [playerQuestion, setPlayerQuestion] = useState(''); 
  const [questionType, setQuestionType] = useState('');
  const [questionValue, setQuestionValue] = useState('');
  const [isUserTurn, setIsUserTurn] = useState(true);
  const [initGame, setinitGame] = useState(false)
  const [playerAnswer, setPlayerAnswer] = useState('');
  
  const [stylePlayerAnswer, setStylePlayerAnswer] = useState({ display: "none" });
  const [styleQuestion, setStyleQuestion] = useState({ display:'none'});
  const [styleAnswer, setStyleAnswer] = useState({ display: "none" });
  const [styleUserTurn, setStyleUserTurn] = useState({ display: "block" });
  const [styleIATurn, setStyleIATurn] = useState({ display: "none" });
  const [styleText, setStyleText] = useState({ display: "none" });
  const [styleText2, setStyleText2] = useState({ display: "none" });
  const [styleInitText, setStyleInitText] = useState({display:'block'})

  const [buttonIaTurn, setButtonIaTurn] = useState({ display: "none" });
  const [buttonQuestion, setButtonQuestion] = useState({ display:"none"});
  const [buttonSolve, setButtonSolve] = useState({ display: 'none' })
  const [buttonQuestionInit, setButtonQuestionInit] = useState({width: "8vw", height: "7vh", fontSize: "0.8vw", margin: "0.2vw"})
  
  const startGame = () => {
    setStyleQuestion({display:'block'})
    setStyleInitText({display:'none'})
   // setButtonQuestion({width: "8vw", height: "7vh", fontSize: "0.8vw", margin: "0.2vw"})
    setButtonQuestionInit({display:'none'})
    setinitGame(true)
  }

  const handleButtonClick = (question) => {
    setQuestionType(question.type);
    setQuestionValue(question.value);
    setPlayerQuestion(question.ask);
    setButtonQuestion({ display: 'none' })
    setTimeout(() => (
      setStyleText({ display: "block" }),
      setButtonIaTurn({ width: "8vw", height: "7vh", fontSize: "0.8vw", margin: "0.2vw" }),
      setButtonSolve({ width: "8vw", height: "7vh", fontSize: "0.8vw", margin: "0.2vw" })
    ), 5000)
  }

  const resetValues = () => {
    setQuestionValue('');
    setQuestionType('');
    setPlayerQuestion('');
    setStyleQuestion("block")
    const callSelectRandomQuestion = new CustomEvent("callSelectRandomQuestion")
    window.dispatchEvent(callSelectRandomQuestion)
  }

  const changeTurn = () => {
    setIsUserTurn(false);
    setQuestionValue('');
    setQuestionType('');
    setPlayerQuestion('');
    setStyleText({ display: "none" })
  }
  useEffect(() => {
    QuestionsHTTP().getQuestions().then((data) => {
      setQuestions(data);
    });
  }, [])

  ////// Custon Event ///////

  useEffect(() => {
    const questionIA = new CustomEvent("dataQuestions", {
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
  }, [isUserTurn])

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
      setTimeout(() =>
      (setIsUserTurn(true),
        setStylePlayerAnswer({ display: "none" }),
        setPlayerAnswer('...'),
        setStyleText2({ display: "block" }),
        setButtonIaTurn({ display: "none" }),
        setButtonQuestion({ width: "8vw", height: "7vh", fontSize: "0.8vw", margin: "0.2vw" }),
        setButtonSolve({ width: "8vw", height: "7vh", fontSize: "0.8vw", margin: "0.2vw" })
      ), 8000)

      setTimeout(() => (
        setStylePlayerAnswer({ display: "block" }),
        setStyleQuestion({ display: "none" })
      ), 4000)
    }
  }, [isUserTurn])

  useEffect(() => {
    if(initGame !== false){
    if (questionValue === '') {
      setStyleQuestion({ display: "block" });
      setStyleAnswer({ display: "none" });
    } else {
      setStyleQuestion({ display: "none" });
      setStyleAnswer({ display: "block" });
    }
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
    <div style={{ height: "16vh", width: "60vw", marginTop: "8vh" }}>
      {/* Div turno jugador */}
      <div style={styleUserTurn}>
        <div style={{ display: "flex" }}>
          <div style={{ width: "10vw" }}>
            <button type='button' style={buttonQuestionInit} className='btn btn-info' onClick={()=> startGame()}>STAR</button>
            <button type="button" style={buttonQuestion} className="btn btn-info" onClick={() => resetValues()}> Volver a preguntar</button>
            <button type="button" style={buttonIaTurn} class="btn btn-info" onClick={() => changeTurn()}>Turno de la maquina</button>
            <button type="button" style={buttonSolve} class="btn btn-info">Resolver</button>
          </div>
          <div style={{ width: "40vw", height: "18vh" }}>
            <div style={styleText2}>
              <h5 style={{ opacity: "0.5" }}>Que quieres hacer </h5>
            </div>
            <div style={styleInitText} >
              <h5 style={{opacity:'0.5'}}> Vamos a empezar, selecciona una  carta y a continuacion az click en el boton STAR para comenzar a jugar</h5>
            </div>
            <div style={styleQuestion}>
              {questions.map((question, index) =>
                <button type="button" class="btn btn" key={index} onClick={() => handleButtonClick(question)}>{question.ask}</button>
              )}
            </div>
            <div style={styleAnswer}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <img style={{ width: "10vw" }} src={bubbleLeft} />
                  <p style={{ position: "absolute", width: "6vw", marginLeft: "0px", marginTop: "3vh", fontSize: "1.1vw", color: "black", textShadow: "1px 1px violet" }}>{playerQuestion}</p>
                </div>
                <div style={styleText}>
                  <h5 style={{ opacity: "0.5" }}> Descarta las cartas haciendo click sobre ellas o escoge una de las opciones de la izquierda</h5>
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
          <div style={{ position: "fixed", marginLeft: "40vw" }}>
            <IA />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AskSeccion