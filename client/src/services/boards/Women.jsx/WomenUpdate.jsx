import axios from 'axios'
import { urlDB } from '../../UrlDB';

export const WomenUpdate = () => {

    const updateWoman = async (data) => {
        const response = await axios.put(`${urlDB}/woman`, data);
        return response.data;
    };

    return {
        updateWoman
    };
};