import React, { useContext, useEffect, useState } from 'react';
import hacker from '../../../assets/img/hacker.png';

function IA() {

  const [iAWoman, setIAWoman] = useState('');
  const [questionType, setQuestionType] = useState('');
  const [questionValue, setQuestionValue] = useState('');
  const [answer, setAnswer] = useState('');
console.log(iAWoman);

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
     {answer}
    </div>
  );
}

export default IA;
