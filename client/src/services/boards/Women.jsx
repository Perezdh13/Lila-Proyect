import axios from 'axios'
import { urlDB } from '../UrlDB';

export const Women = () => {
  
 const getAllData = async () => {
    const response = await axios.get(`${urlDB}/woman`);
    return response.data
  };

  return {
    getAllData,
  

  };
};

