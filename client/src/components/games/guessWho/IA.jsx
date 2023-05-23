import React, { useContext, useEffect, useState } from 'react';
import BubbleRight from '../../../assets/img/Bocadillo.png'
function IA(props) {
  const [iAWoman, setIAWoman] = useState('');
  const [womenGame, setWomenGame] = useState('');
  const [possibleWoman, setPosibleWoman] = useState('');
  const [iAQuestion, setIAQuestion] = useState('');
  const [lastIAQuestion, setLastIAQuestion] = useState('')
  const [questions, setQuestions] = useState('');
  const [questionType, setQuestionType] = useState('');
  const [questionValue, setQuestionValue] = useState('');
  const [answer, setAnswer] = useState('...');
  const [isUserTurn, setIsUserTurn] = useState('');
  const [selectedQuestions, setSelectedQuestions] = useState('');
  const [playerAnswer, setPlayerAnswer] = useState('');
  const [playerResolve, setPlayerResolve] = useState('');
  const [iAResponseResolve, setIAResponseResolve] = useState('');

  useEffect(() => {
    const words = playerAnswer.split(' ');
    const wordKey = "No";
    //words[0];
    const wordType = "ojos"
    //words[2];
    const wordValue = "azules"
    // words[4];
    if (possibleWoman !== '') {
      const condition = possibleWoman.some((woman) => woman.pelo === wordValue || woman.ojos === wordValue);
      console.log(condition);

      if (wordKey === 'No' && condition == true) {
        const womanNo = possibleWoman.filter((woman) => woman.pelo == wordValue || woman.ojos == wordValue)

        const possibleWomanFiltered = possibleWoman.filter((woman) => !womanNo.includes(woman));
        console.log(possibleWomanFiltered);
        setPosibleWoman(possibleWomanFiltered);
      } 
      // if(wordKey === 'No' && condition == false){

      // }
    }
    if (wordKey === 'si') {

    }

  })

  const responseWomanselect = () => {
    const responseResolve = (iAWoman === playerResolve)
      ? ('Enhorabuena, as acertado, mi personaje es ' + playerResolve.name)
      : ('No, te equivocas no e escogido a ' + playerResolve.name)
    setAnswer(responseResolve)
  }

  useEffect(() => {
    if (playerResolve !== '') {
      responseWomanselect()
      setPlayerResolve('')
    }
  })


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
    if (!iAQuestion || iAQuestion.length === 0) {
      const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
      const randomQuestion2 = questions[Math.floor(Math.random() * (questions.length + 1))];
      (randomQuestion != lastIAQuestion)
        ? (setIAQuestion(randomQuestion), setLastIAQuestion(randomQuestion))
        : (setIAQuestion(randomQuestion2), setLastIAQuestion(randomQuestion2))
    }

  })

  const selectRandomQuestion = () => {
    setIAQuestion('')
  }

  useEffect(() => {
    (isUserTurn === false)
      ? setTimeout(() => (setAnswer(iAQuestion.ask), setSelectedQuestions(iAQuestion)), 2000)
      : setAnswer('...')
  }, [isUserTurn])

  useEffect(() => {
    if (questions === '') {
      const upDateQuestion = event => {
        setQuestions(event.detail);
      };
      document.addEventListener("dataQuestions", upDateQuestion);
    }
  })
  useEffect(() => {
    const callSelectRandomQuestion = () => {
      selectRandomQuestion();
    }
    window.addEventListener("callSelectRandomQuestion", callSelectRandomQuestion)
  }, [])


  useEffect(() => {
    const womenGame = event => {
      setWomenGame(event.detail);
      setPosibleWoman(event.detail);
    }
    document.addEventListener("women", womenGame)
  })

  useEffect(() => {
    // const womenGame = event => {
    //   setWomenGame(event.detail);
    //   setPosibleWoman(event.detail);
    // }
    // document.addEventListener("women",womenGame)
    const start = event => {
      starGame();
    }
    window.addEventListener('', start)
    const resolveWoman = event => {
      setPlayerResolve(event.detail)
      setAnswer('...');
    }
    document.addEventListener('resolveWoman', resolveWoman)

    const CallResponseWomanSelect = event => {
      responseWomanselect();
    }
    window.addEventListener('responseWomanSelect', CallResponseWomanSelect)

    const upDateIAWoman = event => {
      setIAWoman(event.detail);
    };
    document.addEventListener("randomWoman", upDateIAWoman);

    const upDateQuestionSelect = event => {
      setQuestionType(event.detail.type);
      setQuestionValue(event.detail.value);
    };
    document.addEventListener("selectedQuestion", upDateQuestionSelect);

    const gameTurn = event => {
      setIsUserTurn(event.detail);
    };

    document.addEventListener("gameTurn", gameTurn);
    const iAQuestionEvent = new CustomEvent("iAQuestion", {
      detail: selectedQuestions
    });
    document.dispatchEvent(iAQuestionEvent);
  });

  useEffect(() => {
    const updatePlayerAnswer = event => {
      setPlayerAnswer(event.detail)
    }
    document.addEventListener("playerAnswer", updatePlayerAnswer)

  }, [playerAnswer])

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <img style={{ width: "10vw" }} src={BubbleRight} />
        <p style={{ position: "absolute", width: "6vw", marginTop: '2.5vh', fontSize: "1vw", color: "black", textShadow: "1px 1px violet" }}>{answer}</p>
      </div>
    </div>
  );
}

export default IA;
