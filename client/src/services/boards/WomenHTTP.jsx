import axios from 'axios'
import { urlDB } from '../UrlDB';

export const WomenHTTP = () => {
  
 const getAllData = async () => {
    const response = await axios.get(`${urlDB}/woman`);
    return response.data
  };
   const createWoman = async (data) => {
    const response = await axios.post(`${urlDB}/woman`,data);
    return response
   }

  return {
    getAllData,
    createWoman, 

  };
};

