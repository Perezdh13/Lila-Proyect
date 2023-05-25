import React from 'react'
import axios from 'axios'
import { urlDB } from '../../UrlDB'
function QuestionsRead() {
    const getAllQuestion = async () => {
        const res = await axios.get(`${urlDB}/questions`);
        return res.data
    }

    const getQuestionById = async (id) =>{
        const res = await axios.get(`${urlDB}/questions/${id}`);
        return res.data
    }
  return {
  getAllQuestion,
  getQuestionById
  }
}

export default QuestionsRead