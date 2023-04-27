import React, { useContext, useEffect, useState } from 'react';
import hacker from '../../../assets/img/hacker.png';

function IA() {

  const [iAWoman, setIAWoman] = useState('');
  const [questionType, setQuestionType] = useState('');//tipo de atributo: ojos, pelo..
  const [questionValue, setQuestionValue] = useState('');//valor de atributo: rubio, azules..
  const [answer, setAnswer] = useState('');

//esto es parte de la logica del juego
  useEffect(() => {
    (iAWoman[questionType] === questionValue)
      ? setAnswer('si tiene ' + questionType + ' ' + questionValue)
      : setAnswer('No tiene ' + questionType + ' ' + questionValue);
  }, [questionType, questionValue]);


  useEffect(() => {
    const updateQuestionSelect = event => {
      setQuestionType(event.detail.type);
      setQuestionValue(event.detail.value);
    };
    const updateIAWoman = event => {
      setIAWoman(event.detail);
    }
    document.addEventListener("questionSelected", updateQuestionSelect);
    document.addEventListener("randomWoman", updateIAWoman);
  }, [iAWoman]);

  return (
    <div>
      <img src={hacker} style={{ width: "10vw" }} />
      <p>{answer}</p>
    </div>
  );
}

export default IA;
