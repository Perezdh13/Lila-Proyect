import React from 'react'
import { urlDB } from '../../UrlDB'
import axios from 'axios';

function QuestionsUpdate() {
 const updateQuestion = async (data) => {
const res = await axios.put(`${urlDB}/question`);
return res
 }
  return{
updateQuestion
  }
}

export default QuestionsUpdate