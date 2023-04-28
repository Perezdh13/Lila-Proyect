import axios from "axios";
import { urlDB } from "../UrlDB";

export const QuestionsHTTP = () => {
    

    const getQuestions = async () => {
        const response = await axios.get(`${urlDB}/questions`);
        return response.data
    };

    return {
        getQuestions,
     
    };
};

