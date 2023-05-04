import React, { useContext, useEffect, useState } from 'react';
import Bocadillo from '../../../assets/img/Bocadillo.png'
function IA() {

  const [iAWoman, setIAWoman] = useState('');
  const [iAQuestion, setIAQuestion] = useState('');
  const [questionType, setQuestionType] = useState('');
  const [questionValue, setQuestionValue] = useState('');
  const [answer, setAnswer] = useState('');
  console.log(iAQuestion);
 
useEffect(() => {
    (iAWoman[questionType] === questionValue)
      ? setAnswer('si tiene ' + questionType + ' ' + questionValue)
      : setAnswer('No tiene ' + questionType + ' ' + questionValue);
  }, [questionType, questionValue]);

  useEffect(() => {
    const upDateQuestionSelect = event => {
      setQuestionType(event.detail.type);
      setQuestionValue(event.detail.value);
    };
    const upDateIAWoman = event => {
      setIAWoman(event.detail);
    };
    const upDateIAQuestion = event => {
      setIAQuestion(event.detail);
    };
    document.addEventListener("selectedQuestion", upDateQuestionSelect);
    document.addEventListener("randomWoman", upDateIAWoman);
    document.addEventListener("questionIA", upDateIAQuestion);
  }, [iAWoman]); 

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <img style={{ width: "10vw" }} src={Bocadillo} />
      <p style={{ position: "absolute", width:"6vw", marginTop:"3vh",fontSize: "1.1vw", color: "black", textShadow: "1px 1px violet" }}>{answer}</p>
    </div>
  );
}

export default IA;
