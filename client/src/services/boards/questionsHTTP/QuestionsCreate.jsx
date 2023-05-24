import axios from 'axios'
import React from 'react'
import { urlDB } from '../../UrlDB'

function QuestionsCreate() {
  const createQuestion = async (data) => {
    const res = await axios.post(`${urlDB}/questions`, data);
    return res

  }
  return {
createQuestion

  }
}

export default QuestionsCreate