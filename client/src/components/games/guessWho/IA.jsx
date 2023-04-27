import React, { useContext, useEffect, useState } from 'react';
import hacker from '../../../assets/img/hacker.png';

function IA() {
  const [questionSelect, setQuestionSelect]  = useState('');
  useEffect(() => {
   const updateQuestionSelect = event => {
      setQuestionSelect(event.detail);
    };
    document.addEventListener("questionSelected", updateQuestionSelect);
    return () => {
      document.removeEventListener("questionSelected", updateQuestionSelect);
    };
  }, [setQuestionSelect]);

  return (
    <div>
      <img src={hacker} style={{ width: "10vw" }} />
      <p>{questionSelect}</p>
    </div>
  );
}

export default IA;
