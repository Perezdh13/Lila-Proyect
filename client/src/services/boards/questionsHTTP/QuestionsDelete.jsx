import React from 'react'
import axios from 'axios'
import { urlDB } from '../../UrlDB'
function QuestionsDelete() {
    
    const deleteQuestion = async (id) => {
        const res = await axios.delete(`${urlDB}/questions/${id}`)
        return res.data
    }
    return {
        deleteQuestion
    }
}

export default QuestionsDelete