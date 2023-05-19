import axios from 'axios'
import { urlDB } from '../../UrlDB';

function WomenUpdate ()  {

    const updateWoman = async (data) => {
        const response = await axios.put(`${urlDB}/woman`, data);
        return response.data;
    };

    return {
        updateWoman
    };
};
export default WomenUpdate