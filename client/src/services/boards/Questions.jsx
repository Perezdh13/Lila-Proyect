import axios from "axios";
import { urlDB } from "../UrlDB";

export const Questions = () => {
    

    const getQuestions = async () => {
        const response = await axios.get(`${urlDB}/questions`);
        return response.data
    };

    return {
        getQuestions,
     
    };
};

