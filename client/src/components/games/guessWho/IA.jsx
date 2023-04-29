import React, { useContext, useEffect, useState } from 'react';
import Bocadillo from '../../../assets/img/Bocadillo.png'
function IA() {

  const [iAWoman, setIAWoman] = useState('');
  const [questionType, setQuestionType] = useState('');
  const [questionValue, setQuestionValue] = useState('');
  const [answer, setAnswer] = useState("...");


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
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <img style={{ width: "10vw" }} src={Bocadillo} />
      <p style={{ position: "absolute", width:"6vw", marginTop:"3vh",fontSize: "1.1vw", color: "black", textShadow: "1px 1px violet" }}>{answer}</p>
    </div>
  );
}

export default IA;
