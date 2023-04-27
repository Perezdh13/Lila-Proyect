import React, { useEffect, useState } from 'react'
import IA from './IA';

export const QuestionSelectValue = React.createContext();
function AskSeccion() {
  const questions = ["¿tiene el pelo rubio","¿tiene el pelo moreno?","¿tiene los ojos azules?", "¿tiene los ojos negros?"]
  const [questionSelect, setQuestionSelect] = useState('')

console.log(questionSelect);

const handleButtonClick = (question) => {
  setQuestionSelect(question);
}


useEffect(() => {
  const customEvent = new CustomEvent("questionSelected", {
    detail: questionSelect
  });
  document.dispatchEvent(customEvent);
}, [questionSelect]);

  return (
    <div style={{display:"flex",justifyContent:"center"}}>
     <div style={{backgroundColor:"grey",width:"40vw",height:"10vh"}}> 
     {questions.map((question,index) =>
       <button key={index} onClick={() => handleButtonClick(question)}>{question}</button>
       )}
     </div>
    

    </div>
  )
}

export default AskSeccion